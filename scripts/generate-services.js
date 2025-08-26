#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Read the swagger JSON file
const swaggerPath = process.argv[2] || './learn-swagger.json';
const outputDir = process.argv[3] || './services';

if (!fs.existsSync(swaggerPath)) {
  console.error(`Swagger file not found: ${swaggerPath}`);
  process.exit(1);
}

console.log(`Reading swagger from: ${swaggerPath}`);
console.log(`Output directory: ${outputDir}`);

const swagger = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));

// Helper function to convert tag to valid file/class name
function tagToClassName(tag) {
  return tag
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '');
}

// Helper function to convert tag to valid file name
function tagToFileName(tag) {
  return tag
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();
}

// Helper function to convert operation ID to method name
function operationIdToMethodName(operationId, summary) {
  if (operationId) {
    // Remove common prefixes and convert to camelCase
    const cleaned = operationId
      .replace(/^(get|post|put|delete|patch)_?/i, '')
      .replace(/_/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .split(' ')
      .map((word, index) => 
        index === 0 
          ? word.toLowerCase() 
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join('');
    return cleaned;
  }
  
  if (summary) {
    return summary
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .split(' ')
      .map((word, index) => 
        index === 0 
          ? word.toLowerCase() 
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join('');
  }
  
  return 'unknownMethod';
}

// Helper function to ensure unique method names
function ensureUniqueMethodName(methodName, existingNames) {
  let uniqueName = methodName;
  let counter = 2;
  
  while (existingNames.has(uniqueName)) {
    uniqueName = `${methodName}${counter}`;
    counter++;
  }
  
  existingNames.add(uniqueName);
  return uniqueName;
}

// Helper function to extract parameters from swagger definition
function extractParameters(parameters, swagger) {
  const pathParams = [];
  const queryParams = [];
  
  if (!parameters) return { pathParams, queryParams };
  
  parameters.forEach(param => {
    let resolvedParam;
    
    // Handle parameter references
    if (param.$ref) {
      const refKey = param.$ref.replace('#/parameters/', '');
      resolvedParam = swagger.parameters[refKey];
      if (!resolvedParam) {
        console.warn(`Could not resolve parameter reference: ${param.$ref}`);
        return;
      }
    } else {
      resolvedParam = param;
    }
    
    const paramInfo = {
      name: resolvedParam.name,
      type: resolvedParam.type || 'string',
      description: resolvedParam.description || '',
      required: resolvedParam.required || false
    };
    
    if (resolvedParam.in === 'path') {
      pathParams.push(paramInfo);
    } else if (resolvedParam.in === 'query') {
      queryParams.push(paramInfo);
    }
  });
  
  return { pathParams, queryParams };
}

// Helper function to determine if method is a write operation
function isWriteOperation(method) {
  return ['post', 'put', 'patch', 'delete'].includes(method.toLowerCase());
}

// Helper function to generate request type name
function generateRequestTypeName(tag, methodName) {
  const className = tagToClassName(tag);
  const capitalizedMethod = methodName.charAt(0).toUpperCase() + methodName.slice(1);
  return `${className}${capitalizedMethod}Request`;
}

// Group endpoints by tag
const endpointsByTag = {};

Object.entries(swagger.paths).forEach(([pathStr, pathObj]) => {
  Object.entries(pathObj).forEach(([method, methodObj]) => {
    if (!methodObj.tags || methodObj.tags.length === 0) {
      console.warn(`Endpoint ${method.toUpperCase()} ${pathStr} has no tags, skipping`);
      return;
    }
    
    // Use the first tag as the primary grouping
    const tag = methodObj.tags[0];
    
    if (!endpointsByTag[tag]) {
      endpointsByTag[tag] = [];
    }
    
    const { pathParams, queryParams } = extractParameters(methodObj.parameters, swagger);
    
    const methodName = operationIdToMethodName(methodObj.operationId, methodObj.summary);
    
    // Ensure unique method name within this tag
    const existingNames = new Set(endpointsByTag[tag].map(e => e.methodName));
    const uniqueMethodName = ensureUniqueMethodName(methodName, existingNames);
    
    endpointsByTag[tag].push({
      path: pathStr,
      method: method.toLowerCase(),
      methodName: uniqueMethodName,
      description: methodObj.description || methodObj.summary || '',
      pathParams,
      queryParams,
      isWrite: isWriteOperation(method),
      originalName: methodObj.operationId || methodName,
      requestType: generateRequestTypeName(tag, uniqueMethodName)
    });
  });
});

// Template for service file
function generateServiceFile(tag, endpoints) {
  const className = tagToClassName(tag);
  
  const methodsDefinitions = endpoints.map(endpoint => {
    return `  ${endpoint.methodName}: {
    description: ${JSON.stringify(endpoint.description)},
    method: "${endpoint.method}",
    path: "${endpoint.path}",
    pathParams: ${JSON.stringify(endpoint.pathParams, null, 4)},
    queryParams: ${JSON.stringify(endpoint.queryParams, null, 4)},
    requestType: "${endpoint.requestType}",
    isMultipart: false,
    originalName: "${endpoint.originalName}",
    isWrite: ${endpoint.isWrite}
  } as ApiMethodInfo`;
  }).join(',\n\n');
  
  const handlersDefinitions = endpoints.map(endpoint => {
    let handlerBody;
    
    if (endpoint.pathParams.length > 0 && endpoint.queryParams.length > 0) {
      // Both path and query parameters
      handlerBody = `    const methodInfo = ${className}Methods.${endpoint.methodName};
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(\`Missing required path parameter: \${param.name}\`);
      }
    });

    // Extract query parameters
    const queryParams: Record<string, string> = {};
    methodInfo.queryParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        queryParams[param.name] = String(value);
        delete args[param.name];
      }
    });

    // Build URL with path and query parameters
    let url = methodInfo.path;
    
    // Replace path parameters
    Object.entries(pathParams).forEach(([key, value]) => {
      url = url.replace(\`{\${key}}\`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => \`\${encodeURIComponent(key)}=\${encodeURIComponent(value)}\`)
      .join('&');
    if (queryString) {
      url = \`\${url}?\${queryString}\`;
    }

    // Make regular JSON request
    const response = await fetch(\`\${baseUrl}\${url}\`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)`;
    } else if (endpoint.pathParams.length > 0) {
      // Only path parameters
      handlerBody = `    const methodInfo = ${className}Methods.${endpoint.methodName};
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(\`Missing required path parameter: \${param.name}\`);
      }
    });

    // Build URL with path parameters
    let url = methodInfo.path;
    
    // Replace path parameters
    Object.entries(pathParams).forEach(([key, value]) => {
      url = url.replace(\`{\${key}}\`, encodeURIComponent(value));
    });

    // Make regular JSON request
    const response = await fetch(\`\${baseUrl}\${url}\`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)`;
    } else if (endpoint.queryParams.length > 0) {
      // Only query parameters
      handlerBody = `    const methodInfo = ${className}Methods.${endpoint.methodName};
    
    // Extract query parameters
    const queryParams: Record<string, string> = {};
    methodInfo.queryParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        queryParams[param.name] = String(value);
        delete args[param.name];
      }
    });

    // Build URL with query parameters
    let url = methodInfo.path;
    
    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => \`\${encodeURIComponent(key)}=\${encodeURIComponent(value)}\`)
      .join('&');
    if (queryString) {
      url = \`\${url}?\${queryString}\`;
    }

    // Make regular JSON request
    const response = await fetch(\`\${baseUrl}\${url}\`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)`;
    } else {
      // No parameters
      handlerBody = `    const methodInfo = ${className}Methods.${endpoint.methodName};
    
    // Simple endpoint with no path or query parameters
    const url = methodInfo.path;

    // Make regular JSON request
    const response = await fetch(\`\${baseUrl}\${url}\`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)`;
    }
    
    return `  ${endpoint.methodName}: async (accessToken: string, args: Record<string, unknown>) => {
${handlerBody}
  }`;
  }).join(',\n\n');
  
  return `import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';
import { typeMap } from '../utils/type-map.js';

/**
 * Method information for each API endpoint
 */
export const ${className}Methods: { [key: string]: ApiMethodInfo } = {
${methodsDefinitions}
};

/**
 * Handlers for each API endpoint
 */
export const ${className}Handlers = {
${handlersDefinitions}
};
`;
}

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate service files
let generatedCount = 0;
Object.entries(endpointsByTag).forEach(([tag, endpoints]) => {
  const fileName = tagToFileName(tag);
  const filePath = path.join(outputDir, `${fileName}.ts`);
  
  console.log(`Generating ${filePath} for tag "${tag}" with ${endpoints.length} endpoints`);
  
  const serviceContent = generateServiceFile(tag, endpoints);
  fs.writeFileSync(filePath, serviceContent);
  generatedCount++;
});

console.log(`Successfully generated ${generatedCount} service files in ${outputDir}`);