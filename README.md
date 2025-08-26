# Blackboard Learn Model Context Protocol Server

This project follows the [Model Context Protocol](https://modelcontextprotocol.com/) standard, allowing AI assistants to interact with Blackboard Learn's REST API.

## Quick Start

Get up and running with the Blackboard Learn MCP server using npx:

```bash
# Basic startup
npx blackboard-mcp-server start

# With environment configuration
ACCESS_TOKEN=YOUR_BLACKBOARD_ACCESS_TOKEN BASE_URL=https://your-blackboard-instance.edu npx blackboard-mcp-server start

# local runs
npx /path/to/project/blackboard-mcp-server
```

Replace `YOUR_BLACKBOARD_ACCESS_TOKEN` with your actual Blackboard Learn access token. You can obtain your access token by following the guide at [Blackboard Learn REST API Authentication](https://docs.blackboard.com/learn/REST/getting-started/authentication).

## Configuration Options

| Environment Variable | Purpose | Example |
|---------------------|---------|---------|
| `ACCESS_TOKEN` | Your Blackboard Learn API access token | `ACCESS_TOKEN=bb_access_token_123...` |
| `BASE_URL` | Your Blackboard Learn instance URL | `BASE_URL=https://myschool.blackboard.com` |
| `DISALLOW_WRITES` | Restrict to read-only operations | `DISALLOW_WRITES=true` |

## Integration with AI Assistants

### Claude Desktop Integration

For Claude Desktop integration, see the [Model Context Protocol Quickstart Guide](https://modelcontextprotocol.io/quickstart/user). Add this configuration to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "mcp_blackboard_api": {
      "command": "npx",
      "args": ["blackboard-mcp-server", "start"],
      "env": {
        "ACCESS_TOKEN": "YOUR_BLACKBOARD_ACCESS_TOKEN",
        "BASE_URL": "https://your-blackboard-instance.edu"
      }
    }
  }
}
```

### Goose Integration

To configure the Blackboard Learn MCP Server with [Goose](https://block.github.io/goose/):

```bash
# Automatic installation
npx blackboard-mcp-server install

# Get URL for manual installation
npx blackboard-mcp-server get-goose-url
```

The `install` command automatically updates your Goose configuration.

## Tool Reference

The Blackboard Learn MCP Server provides a streamlined set of tools for interacting with Blackboard Learn APIs:

| Tool | Description | Primary Use |
|------|-------------|------------|
| `get_service_info` | Discover methods available for a service | Exploration and discovery |
| `get_type_info` | Get detailed parameter requirements and schemas | Request preparation |
| `get_type_definition` | Get complete type definitions for complex types | Understanding data structures |
| `get_all_types` | List all available TypeScript type names | Type discovery |
| `make_api_request` | Execute API calls to Blackboard Learn | Performing operations |

## Service Catalog

Blackboard Learn MCP Server provides access to Blackboard Learn's complete [REST API ecosystem](https://docs.blackboard.com/learn/REST). Check out the [Blackboard Learn API Documentation](https://docs.blackboard.com/learn/REST) for detailed information about each service:

| Service | Description |
|---------|-------------|
| `oauth` | OAuth 2.0 authentication |
| `courses` | Course management and administration |
| `users` | User account management |
| `coursegrades` | Grading and gradebook operations |
| `content` | Course content management |
| `discussions` | Discussion boards and forums |
| `assignments` | Assignment management |
| `coursememberships` | Course enrollment and membership |
| `announcements` | Course and system announcements |
| `calendar` | Calendar and event management |
| `rubrics` | Rubric management and evaluation |
| `lti` | Learning Tools Interoperability |
| `proctoring` | Proctoring and monitoring |
| `attendance` | Attendance tracking |
| `roles` | User roles and permissions |
| `datasources` | Data source management |
| `system` | System configuration and settings |

And many more services covering the complete Blackboard Learn API surface.

## Usage Pattern

For optimal interaction with the Blackboard Learn API through MCP:

1. **Discover**: Use `get_service_info` to explore available methods
   ```
   get_service_info(service: "courses")
   ```

2. **Understand**: Use `get_type_info` to learn parameter requirements
   ```
   get_type_info(service: "courses", method: "getCourse")
   ```

3. **Execute**: Use `make_api_request` to perform the operation
   ```
   make_api_request(service: "courses", method: "getCourse", request: {"courseId": "_123_1"})
   ```

## Service Generation

This repository includes an automated service generator that creates TypeScript services from Blackboard Learn's API specification:

```bash
# Generate all services from learn-swagger.json
npm run generate-services
```

This creates 51+ service files covering the complete Blackboard Learn API. See [README-generate-services.md](README-generate-services.md) for detailed information about the service generation process.

## Development and Debugging

### Using MCP Inspector

The [MCP Inspector](https://modelcontextprotocol.io/docs/tools/inspector) provides a visual interface for testing:

```bash
# Build the project
npm run build

# Start the inspector with the Blackboard Learn MCP Server
npx @modelcontextprotocol/inspector node dist/index.js start
```

### Development Workflow

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development mode: `npm run watch`
4. Run the server: `node dist/index.js start`
5. Test your changes using the MCP Inspector

## API Coverage

The generated services provide comprehensive coverage of Blackboard Learn's REST API:

- **Academic Management**: Courses, content, assignments, grading
- **User Management**: Users, roles, memberships, enrollment
- **Communication**: Discussions, announcements, messages
- **Assessment**: Rubrics, evaluations, proctoring, attendance
- **Integration**: OAuth, LTI, webhooks, data sources
- **Administration**: System settings, institutional hierarchy

## Type Map & Schema Support

The Blackboard Learn MCP Server includes comprehensive type map functionality to help LLMs understand API data structures:

### Generated Types
- **159 TypeScript type definitions** from Blackboard Learn's API specification
- **Complete schema information** for request/response bodies
- **Runtime type lookup** for understanding complex data structures

### LLM Integration
The type system provides enhanced tools for AI assistants:

1. **Schema-aware method info**: `get_type_info` returns detailed schemas
2. **Type definition lookup**: `get_type_definition` provides complete type structures  
3. **Type discovery**: `get_all_types` lists all available types
4. **Smart error handling**: Suggests similar types when lookups fail

### Automatic Generation
```bash
# Generate types and services
npm run generate

# Generate types only
npm run generate-types

# Generate services only  
npm run generate-services
```

For detailed documentation about the type system, see [TYPE-MAP-DOCS.md](TYPE-MAP-DOCS.md).

## Contributing

Contributions are welcome! Please open an issue to discuss proposed changes before submitting a pull request. This repository uses an automated service generator, so changes to API services should be made through the generator script when possible.
