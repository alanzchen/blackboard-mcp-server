# Type Map Documentation

The Blackboard Learn MCP Server includes comprehensive type map functionality to help LLMs understand the structure of API requests and responses.

## Overview

The type system provides:
- **159 TypeScript type definitions** generated from Blackboard Learn's API specification
- **Enhanced parameter information** with detailed schemas for request/response bodies
- **Runtime type lookup** for LLMs to understand data structures

## Generated Files

### Type Definitions
- `generated-types.ts` - TypeScript interfaces for all API types
- Contains 159 type definitions from the Blackboard Learn swagger specification

### Service Files  
- `services/*.ts` - Enhanced service files with schema information
- Each method now includes `requestBodySchema` and `responseSchema` properties

## Tools for LLMs

### 1. `get_type_info`
Get basic type information for an API method:
```json
{
  "service": "courses",
  "method": "getCourse"
}
```

Returns:
- Parameter definitions (path, query)
- Request/response schema references
- Method metadata

### 2. `get_type_definition`
Get detailed type definition for a specific TypeScript type:
```json
{
  "typeName": "BlackboardWebappsBlackboardPublicapiV1CoursesCourse"
}
```

Returns:
- Complete type structure
- Property descriptions
- Required/optional fields
- Nested type information

### 3. `get_all_types`
List all available type names:
```json
{}
```

Returns:
- Complete list of 159 type names
- Total count

## Usage Flow for LLMs

1. **Get Service Info**: `get_service_info` to see available methods
2. **Get Method Info**: `get_type_info` to understand parameters and schemas  
3. **Get Type Details**: `get_type_definition` for complex types referenced in schemas
4. **Make Request**: `make_api_request` with properly structured data

## Schema Information Structure

Each API method now includes:

```typescript
interface ApiMethodInfo {
  // ... existing fields ...
  requestBodySchema?: ApiSchema | null;
  responseSchema?: ApiSchema | null;
}

interface ApiSchema {
  type: string;              // 'reference', 'array', 'object', etc.
  ref?: string;              // Original swagger reference
  typeName?: string;         // TypeScript type name
  properties?: Record<string, any>;
  description?: string;
  items?: ApiSchema;         // For array types
}
```

## Example

Getting information about creating a course:

1. **Get method info**:
   ```json
   {
     "service": "courses", 
     "method": "createCourse"
   }
   ```

2. **Response includes schema**:
   ```json
   {
     "requestBodySchema": {
       "type": "reference",
       "ref": "blackboard.webapps.blackboard.publicapi.v1.courses.Course",
       "typeName": "BlackboardWebappsBlackboardPublicapiV1CoursesCourse"
     }
   }
   ```

3. **Get type definition**:
   ```json
   {
     "typeName": "BlackboardWebappsBlackboardPublicapiV1CoursesCourse"
   }
   ```

4. **Response shows structure**:
   ```json
   {
     "name": "BlackboardWebappsBlackboardPublicapiV1CoursesCourse",
     "properties": {
       "courseId": {
         "type": "string",
         "description": "The Course ID",
         "required": false
       },
       "name": {
         "type": "string", 
         "description": "The course name",
         "required": true
       }
       // ... more properties
     }
   }
   ```

This provides LLMs with complete understanding of the expected data structures for any Blackboard Learn API operation.