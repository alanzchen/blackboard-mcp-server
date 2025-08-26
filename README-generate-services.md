# Blackboard Learn API Service Generator

This repository includes a script to automatically generate TypeScript service files from the Blackboard Learn API swagger specification (`learn-swagger.json`).

## Quick Start

Generate service files from the Blackboard Learn API specification:

```bash
npm run generate-services
```

This will generate 51+ TypeScript service files in the `services/` directory, organized by API category.

## Generated Services Overview

The script processes the `learn-swagger.json` file and generates one service file per API tag/category:

### Core Learning Management
- **courses.ts** - Course management and cross-listing
- **content.ts** - Course content and resources
- **discussions.ts** - Discussion boards and forums
- **assignments.ts** - Assignment management
- **coursegrades.ts** - Grading and gradebook operations

### User Management
- **users.ts** - User accounts and profiles
- **coursememberships.ts** - Course enrollment and membership
- **roles.ts** - User roles and permissions

### Assessment & Evaluation
- **coursegradeattempts.ts** - Grade attempts and submissions
- **rubrics.ts** - Rubric definitions and evaluations
- **proctoring.ts** - Proctoring and monitoring

### System Integration
- **oauth.ts** - OAuth 2.0 authentication
- **lti.ts** - Learning Tools Interoperability
- **system.ts** - System configuration and settings

And many more categories covering the complete Blackboard Learn API surface.

## Usage

### Basic Generation

```bash
# Generate all services to default location
npm run generate-services

# Generate to custom directory
node scripts/generate-services.js learn-swagger.json ./custom-services
```

### Using Generated Services

Each generated service file exports two main objects:

```typescript
import { CoursesMethods, CoursesHandlers } from './services/courses.js';

// Access method definitions
const getCourseMethod = CoursesMethods.getCourse;
console.log(getCourseMethod.path); // "/learn/api/public/v1/courses/{courseId}"

// Use handlers to make API calls
const courseData = await CoursesHandlers.getCourse(accessToken, { courseId: "123" });
```

## Features

- **Complete API Coverage**: Generates services for all 51+ API categories
- **Parameter Resolution**: Automatically resolves Swagger parameter references
- **Type Safety**: Full TypeScript type definitions for all endpoints
- **Path & Query Parameters**: Proper handling of both path and query parameters
- **Unique Method Names**: Automatically resolves naming conflicts
- **HTTP Method Support**: GET, POST, PUT, PATCH, DELETE operations
- **Documentation**: Preserves API descriptions and parameter documentation

## File Structure

```
services/
├── oauth.ts                    # OAuth 2.0 authentication
├── courses.ts                  # Course management
├── users.ts                    # User management
├── coursegrades.ts            # Grading operations
├── content.ts                 # Course content
├── discussions.ts             # Discussion forums
├── lti.ts                     # LTI integration
├── rubrics.ts                 # Rubric management
└── ...                        # 40+ more service files
```

## Service File Structure

Each generated service file contains:

```typescript
// Method definitions with metadata
export const ServiceMethods: { [key: string]: ApiMethodInfo } = {
  methodName: {
    description: "Method description from Swagger",
    method: "get|post|put|patch|delete",
    path: "/api/path/{param}",
    pathParams: [/* path parameter definitions */],
    queryParams: [/* query parameter definitions */],
    requestType: "RequestTypeName",
    isMultipart: false,
    originalName: "originalSwaggerName",
    isWrite: true|false
  }
};

// Request handlers with parameter processing
export const ServiceHandlers = {
  methodName: async (accessToken: string, args: Record<string, unknown>) => {
    // Automatic parameter extraction and URL building
    // HTTP request execution
    // Response handling
  }
};
```

## Dependencies

Generated services depend on:
- `node-fetch`: HTTP requests
- `../api-types.js`: Type definitions
- `../config.js`: Base URL and utilities

## Advanced Usage

### Custom Swagger File

```bash
node scripts/generate-services.js /path/to/custom-swagger.json ./output-dir
```

### Integration with MCP Server

The generated services are designed to work with the Model Context Protocol (MCP) framework for AI tool integration.

## API Categories Covered

The generator creates services for all Blackboard Learn API categories:

- **Academic**: Courses, content, assignments, grading
- **Social**: Discussions, announcements, messages  
- **Assessment**: Rubrics, evaluations, proctoring
- **Administration**: Users, roles, system settings
- **Integration**: OAuth, LTI, webhooks
- **Analytics**: Performance, attendance, reports

## Generated Statistics

- **51 service files** covering the complete API
- **300+ API endpoints** with full type definitions
- **1000+ parameters** properly typed and documented
- **Zero manual coding** required for API integration