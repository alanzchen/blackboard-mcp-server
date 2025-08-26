#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Read the swagger JSON file
const swaggerPath = process.argv[2] || './learn-swagger.json';
const outputPath = process.argv[3] || './generated-types.ts';

if (!fs.existsSync(swaggerPath)) {
  console.error(`Swagger file not found: ${swaggerPath}`);
  process.exit(1);
}

console.log(`Reading swagger from: ${swaggerPath}`);
console.log(`Output file: ${outputPath}`);

const swagger = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));

// Helper function to convert swagger type to TypeScript type
function swaggerTypeToTsType(swaggerType, format, items) {
  switch (swaggerType) {
    case 'string':
      if (format === 'date-time' || format === 'date') {
        return 'string'; // Keep as string for JSON serialization
      }
      return 'string';
    case 'integer':
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'array':
      if (items) {
        return `${resolveTypeReference(items)}[]`;
      }
      return 'unknown[]';
    case 'object':
      return 'Record<string, unknown>';
    default:
      return 'unknown';
  }
}

// Helper function to resolve type references
function resolveTypeReference(typeRef) {
  if (typeof typeRef === 'string') {
    return typeRef;
  }
  
  if (typeRef.$ref) {
    // Extract type name from reference
    const refPath = typeRef.$ref.replace('#/definitions/', '');
    return sanitizeTypeName(refPath);
  }
  
  if (typeRef.type) {
    return swaggerTypeToTsType(typeRef.type, typeRef.format, typeRef.items);
  }
  
  return 'unknown';
}

// Helper function to sanitize type names for TypeScript
function sanitizeTypeName(name) {
  // Convert Java-style package names to valid TypeScript identifiers
  return name
    .split('.')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '');
}

// Helper function to generate TypeScript interface from swagger definition
function generateInterface(name, definition) {
  const typeName = sanitizeTypeName(name);
  
  if (!definition.properties) {
    // Handle primitive types or types without properties
    if (definition.type) {
      return `export type ${typeName} = ${swaggerTypeToTsType(definition.type, definition.format, definition.items)};`;
    }
    return `export type ${typeName} = unknown;`;
  }
  
  const properties = Object.entries(definition.properties).map(([propName, propDef]) => {
    const isRequired = definition.required && definition.required.includes(propName);
    const optional = isRequired ? '' : '?';
    const tsType = resolveTypeReference(propDef);
    const description = propDef.description ? `  /** ${propDef.description.replace(/\*\//g, '*\\/')} */\n` : '';
    
    return `${description}  ${propName}${optional}: ${tsType};`;
  }).join('\n');
  
  const description = definition.description ? `/** ${definition.description.replace(/\*\//g, '*\\/')} */\n` : '';
  
  return `${description}export interface ${typeName} {
${properties}
}`;
}

// Helper function to generate type map for runtime access
function generateTypeMap(definitions) {
  const typeEntries = Object.keys(definitions).map(name => {
    const typeName = sanitizeTypeName(name);
    const definition = definitions[name];
    
    // Extract parameter information for LLMs
    const typeInfo = {
      name: typeName,
      originalName: name,
      description: definition.description || '',
      type: definition.type || 'object',
      properties: {}
    };
    
    if (definition.properties) {
      typeInfo.properties = Object.entries(definition.properties).reduce((acc, [propName, propDef]) => {
        acc[propName] = {
          type: propDef.type || 'unknown',
          description: propDef.description || '',
          required: definition.required && definition.required.includes(propName),
          format: propDef.format,
          items: propDef.items ? resolveTypeReference(propDef.items) : undefined
        };
        return acc;
      }, {});
    }
    
    return `  "${typeName}": ${JSON.stringify(typeInfo, null, 4)}`;
  });
  
  return `export const TypeMap: Record<string, any> = {
${typeEntries.join(',\n')}
};`;
}

// Process definitions
const { definitions } = swagger;

if (!definitions) {
  console.error('No definitions found in swagger file');
  process.exit(1);
}

console.log(`Found ${Object.keys(definitions).length} type definitions`);

// Generate TypeScript interfaces
const interfaces = Object.entries(definitions)
  .map(([name, definition]) => generateInterface(name, definition))
  .join('\n\n');

// Generate type map for runtime access
const typeMap = generateTypeMap(definitions);

// Create the complete TypeScript file
const tsContent = `// Generated TypeScript types from Blackboard Learn API Swagger specification
// This file is auto-generated. Do not edit manually.

${interfaces}

${typeMap}

// Helper function to get type information for LLMs
export function getTypeInfo(typeName: string) {
  return TypeMap[typeName];
}

// Helper function to list all available types
export function getAllTypes() {
  return Object.keys(TypeMap);
}
`;

// Write the TypeScript file
fs.writeFileSync(outputPath, tsContent);

console.log(`Successfully generated TypeScript types: ${outputPath}`);
console.log(`Generated ${Object.keys(definitions).length} type definitions`);