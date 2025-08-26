#!/usr/bin/env node

/**
 * Generate utils/api-map.ts and utils/type-map.ts from learn-swagger.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateApiMapAndTypeMap() {
  console.log('🔄 Generating api-map.ts and type-map.ts from learn-swagger.json...');

  // Read the swagger file
  const swaggerPath = path.join(__dirname, '..', 'learn-swagger.json');
  const swaggerContent = fs.readFileSync(swaggerPath, 'utf8');
  const swagger = JSON.parse(swaggerContent);

  // Generate API map
  const apiMap = generateApiMap(swagger);
  
  // Generate Type map
  const typeMap = generateTypeMap(swagger);

  // Write api-map.ts
  const apiMapPath = path.join(__dirname, '..', 'utils', 'api-map.ts');
  const apiMapContent = `import { ApiInfo, ApiEndpoint } from '../api-types.js';

/**
 * API map for all Blackboard Learn API endpoints
 */
export const apiMap: ApiInfo[] = ${JSON.stringify(apiMap, null, 2)};
`;
  fs.writeFileSync(apiMapPath, apiMapContent);
  console.log(`✅ Generated ${apiMapPath}`);

  // Write type-map.ts
  const typeMapPath = path.join(__dirname, '..', 'utils', 'type-map.ts');
  const typeMapContent = `/**
 * Property definition in a type
 */
interface TypeProperty {
  /** Property name */
  name: string;
  /** Property type */
  type: string;
  /** Property description */
  description: string;
  /** Whether the property is read-only */
  readOnly: boolean;
  /** Whether the property is required */
  required: boolean;
  /** Array item type (if property is an array) */
  arrayType?: string;
  /** Whether this property represents a file path */
  isFile?: boolean;
}

/**
 * Type definition
 */
interface TypeDefinition {
  /** Type name */
  name: string;
  /** Type properties */
  properties: TypeProperty[];
}

/**
 * Type map
 */
interface TypeMap {
  /** Type definitions by request type */
  [key: string]: TypeDefinition[];
}

/**
 * Type map for all Blackboard Learn API request types
 */
export const typeMap: TypeMap = ${JSON.stringify(typeMap, null, 2)};
`;
  fs.writeFileSync(typeMapPath, typeMapContent);
  console.log(`✅ Generated ${typeMapPath}`);

  console.log(`🎉 Generated ${Object.keys(apiMap).length} API endpoints and ${Object.keys(typeMap).length} type definitions`);
}

function generateApiMap(swagger) {
  const apiMap = [];
  const paths = swagger.paths || {};

  // Group endpoints by tags to create API groups
  const tagGroups = {};
  
  Object.entries(paths).forEach(([pathUrl, pathData]) => {
    Object.entries(pathData).forEach(([method, endpointData]) => {
      if (typeof endpointData !== 'object') return;
      
      const tags = endpointData.tags || ['General'];
      const tag = tags[0]; // Use first tag as primary category
      
      if (!tagGroups[tag]) {
        tagGroups[tag] = [];
      }
      
      // Generate operation name from path and method if not provided
      const operationId = endpointData.operationId || generateOperationId(method, pathUrl);
      
      // Extract parameters
      const pathParameters = [];
      const queryParameters = [];
      
      if (endpointData.parameters) {
        endpointData.parameters.forEach(param => {
          // Handle $ref parameters (resolve them later if needed)
          if (param.$ref) {
            return; // Skip $ref parameters for now
          }
          
          const parameter = {
            name: param.name,
            type: param.type || param.schema?.type || 'string',
            description: param.description || ''
          };
          
          if (param.in === 'path') {
            pathParameters.push(parameter);
          } else if (param.in === 'query') {
            queryParameters.push(parameter);
          }
        });
      }
      
      // Create endpoint object
      const endpoint = {
        name: operationId,
        description: endpointData.description || endpointData.summary || '',
        method: method.toLowerCase(),
        path: pathUrl,
        pathParameters: pathParameters,
        queryParameters: queryParameters,
        releaseStatus: 'PUBLIC', // Default for Blackboard Learn APIs
        isMultipart: false // Default, could be detected from content-type
      };
      
      tagGroups[tag].push(endpoint);
    });
  });

  // Convert tag groups to API map format
  Object.entries(tagGroups).forEach(([tag, endpoints]) => {
    endpoints.forEach(endpoint => {
      const apiInfo = {
        api: {
          name: tag.charAt(0).toUpperCase() + tag.slice(1), // Capitalize tag name
          description: `Blackboard Learn ${tag} API provides endpoints for managing ${tag.toLowerCase()} related operations.`
        },
        endpoint: endpoint
      };
      
      apiMap.push(apiInfo);
    });
  });

  return apiMap;
}

function generateOperationId(method, path) {
  // Convert path to camelCase operation name
  // e.g., GET /learn/api/public/v1/oauth2/token -> getOauth2Token
  const pathParts = path.split('/').filter(part => part && !part.includes('{') && !part.startsWith('v'));
  const resourceParts = pathParts.slice(4); // Skip /learn/api/public/v1
  
  if (resourceParts.length === 0) {
    return method;
  }
  
  const resourceName = resourceParts.map((part, index) => {
    if (index === 0) {
      return part.toLowerCase();
    }
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  }).join('');
  
  const methodPrefix = method.charAt(0).toUpperCase() + method.slice(1).toLowerCase();
  return methodPrefix + resourceName.charAt(0).toUpperCase() + resourceName.slice(1);
}

function generateTypeMap(swagger) {
  const typeMap = {};
  const definitions = swagger.definitions || swagger.components?.schemas || {};

  // Generate request types for each endpoint
  const paths = swagger.paths || {};
  
  Object.entries(paths).forEach(([pathUrl, pathData]) => {
    Object.entries(pathData).forEach(([method, endpointData]) => {
      if (typeof endpointData !== 'object') return;
      
      const operationId = endpointData.operationId || generateOperationId(method, pathUrl);
      const requestTypeName = `${operationId}Request`;
      const typeDefinitions = [];
      
      // Create main request type
      const requestProperties = [];
      
      // Add path parameters from URL path
      const pathParamMatches = pathUrl.match(/{([^}]+)}/g);
      if (pathParamMatches) {
        pathParamMatches.forEach(match => {
          const paramName = match.slice(1, -1); // Remove { and }
          requestProperties.push({
            name: paramName,
            type: 'string',
            description: `Path parameter: ${paramName}`,
            readOnly: false,
            required: true
          });
        });
      }
      
      // Add parameters from the parameters array
      if (endpointData.parameters) {
        endpointData.parameters.forEach(param => {
          // Skip $ref parameters for now
          if (param.$ref) return;
          
          if (param.in === 'query') {
            requestProperties.push({
              name: param.name,
              type: param.type || 'string',
              description: param.description || '',
              readOnly: false,
              required: param.required || false
            });
          } else if (param.in === 'path') {
            // Update existing path parameter with more details
            const existing = requestProperties.find(p => p.name === param.name);
            if (existing) {
              existing.description = param.description || existing.description;
              existing.type = param.type || existing.type;
            } else {
              requestProperties.push({
                name: param.name,
                type: param.type || 'string',
                description: param.description || '',
                readOnly: false,
                required: true
              });
            }
          }
        });
      }
      
      // Add request body if present (for POST/PUT requests)
      if (method.toLowerCase() === 'post' || method.toLowerCase() === 'put') {
        // For now, add a generic body parameter - could be enhanced with schema parsing
        requestProperties.push({
          name: 'body',
          type: 'object',
          description: 'Request body data',
          readOnly: false,
          required: true
        });
      }
      
      // Add main request type definition
      typeDefinitions.push({
        name: requestTypeName,
        properties: requestProperties
      });
      
      typeMap[requestTypeName] = typeDefinitions;
    });
  });

  return typeMap;
}

// Run the script
try {
  generateApiMapAndTypeMap();
} catch (error) {
  console.error('❌ Error generating API map and type map:', error);
  process.exit(1);
}

export { generateApiMapAndTypeMap };