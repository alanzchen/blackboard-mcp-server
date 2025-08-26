# Service Generator Script

This repository includes a script to automatically generate TypeScript service files from the Blackboard Learn API swagger specification.

## Usage

To generate service files from the `learn-swagger.json` file:

```bash
npm run generate-services
```

Or run directly:

```bash
node scripts/generate-services.js [swagger-file] [output-directory]
```

### Parameters

- `swagger-file`: Path to the swagger JSON file (default: `./learn-swagger.json`)
- `output-directory`: Directory to output generated service files (default: `./services`)

### Example

```bash
# Generate services from default swagger file to default services directory
npm run generate-services

# Generate services from custom swagger file to custom directory
node scripts/generate-services.js /path/to/custom-swagger.json ./custom-services
```

## Generated Files

The script will:

1. Parse the swagger JSON file
2. Group API endpoints by their tags
3. Generate one TypeScript service file per tag
4. Each service file contains:
   - `{Tag}Methods`: Object with API method information
   - `{Tag}Handlers`: Object with request handler functions

## Features

- **Parameter Resolution**: Resolves swagger parameter references
- **Unique Method Names**: Automatically handles duplicate method names within the same service
- **Path/Query Parameters**: Properly extracts and handles both path and query parameters
- **HTTP Method Support**: Supports GET, POST, PUT, PATCH, DELETE
- **TypeScript Types**: Generates proper TypeScript interfaces and types

## File Structure

Generated service files follow this pattern:

```
services/
├── oauth.ts          # OAuth endpoints
├── courses.ts        # Course management endpoints
├── users.ts          # User management endpoints
└── ...               # Other API categories
```

Each file exports:
- `{ServiceName}Methods`: API method definitions
- `{ServiceName}Handlers`: HTTP request handlers

## Dependencies

The generated service files depend on:
- `node-fetch`: For HTTP requests
- `../api-types.js`: Type definitions
- `../config.js`: Base URL and request utilities
- `../utils/type-map.js`: Type mapping utilities