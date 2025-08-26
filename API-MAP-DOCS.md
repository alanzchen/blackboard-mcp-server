# Blackboard Learn API Map and Type Map Generator

This document describes the script that generates the `utils/api-map.ts` and `utils/type-map.ts` files from the Blackboard Learn Swagger specification.

## Overview

The `scripts/generate-api-map-type-map.js` script parses the `learn-swagger.json` file and generates:

1. **API Map** (`utils/api-map.ts`) - Contains API endpoint definitions for 336 Blackboard Learn API endpoints
2. **Type Map** (`utils/type-map.ts`) - Contains TypeScript type definitions for 214 request types

## Usage

To regenerate the API map and type map files:

```bash
npm run generate
```

This command will:
1. Run `generate-api-map-type-map.js` to create the utils files
2. Run `generate-services.js` to create the service implementation files

## Generated Structure

### API Map (`utils/api-map.ts`)

The API map contains an array of `ApiInfo` objects with the following structure:

```typescript
export const apiMap: ApiInfo[] = [
  {
    api: {
      name: "OAuth",
      description: "Blackboard Learn oauth API provides endpoints for managing oauth related operations."
    },
    endpoint: {
      name: "GetAuthorizationcode",
      description: "Requests an OAuth 2 authorization code...",
      method: "get",
      path: "/learn/api/public/v1/oauth2/authorizationcode",
      pathParameters: [],
      queryParameters: [...],
      releaseStatus: "PUBLIC",
      isMultipart: false
    }
  },
  // ... more endpoints
];
```

### Type Map (`utils/type-map.ts`)

The type map contains request type definitions with the following structure:

```typescript
export const typeMap: TypeMap = {
  "GetAuthorizationcodeRequest": [
    {
      name: "GetAuthorizationcodeRequest",
      properties: [
        {
          name: "code_challenge",
          type: "string",
          description: "A code challenge to verify credentials...",
          readOnly: false,
          required: false
        },
        // ... more properties
      ]
    }
  ],
  // ... more request types
};
```

## Key Features

- **Automatic Operation ID Generation**: Creates operation IDs from HTTP method + path when not provided
- **Parameter Extraction**: Extracts path and query parameters from Swagger definitions
- **Tag-based Grouping**: Groups endpoints by their Swagger tags into logical API categories
- **Type Safety**: Generates strongly-typed TypeScript definitions
- **Comprehensive Coverage**: Covers all 336 API endpoints from the Blackboard Learn API

## API Categories

The generated API map covers the following Blackboard Learn API categories:

- **OAuth** - Authentication and authorization
- **Courses** - Course management and operations
- **Users** - User management and profiles
- **Content** - Course content and resources
- **Announcements** - Course and system announcements
- **Discussions** - Discussion forums and posts
- **Attendance** - Student attendance tracking
- **Grades** - Gradebook and assessment management
- **Groups** - Course group management
- **Calendar** - Calendar events and scheduling
- **LTI** - Learning Tools Interoperability
- **System** - System administration and configuration
- And many more...

## Type Information for LLMs

The type map provides detailed schema information that LLMs can use to understand:

- Required vs optional parameters
- Parameter types (string, integer, boolean, etc.)
- Parameter descriptions and usage
- Request structure for each API endpoint

This enables LLMs to generate accurate API requests with proper parameter structures and types.