import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';
import { typeMap } from '../utils/type-map.js';

/**
 * Method information for each API endpoint
 */
export const InstitutionalHierarchyMethods: { [key: string]: ApiMethodInfo } = {
  getNodesForCourse: {
    description: "Obtains a list of nodes to which a given course is directly associated.\n\nUsers with the 'system.multiinst.node.course.association.VIEW' entitlement and the 'system.multiinst.node.org.association.VIEW' system entitlement can access all node association information.\n\n**Since**: 3800.10.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/nodes",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "offset",
        "type": "integer",
        "description": "The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.",
        "required": false
    },
    {
        "name": "includePermissions",
        "type": "boolean",
        "description": "Flag to indicate whether to include permissions in the response.",
        "required": false
    },
    {
        "name": "limit",
        "type": "integer",
        "description": "The maximum number of results to be returned. There may be less if the query returned less than the maximum.",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    },
    {
        "name": "expand",
        "type": "string",
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>node</li></ul>",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyGetNodesForCourseRequest",
    isMultipart: false,
    originalName: "getNodesForCourse",
    isWrite: false
  } as ApiMethodInfo,

  getNodes: {
    description: "Returns the Top-level institutional hierarchy nodes\n\nEntitlement system.multiinst.hierarchy.manager.VIEW required\n\nUsers with entitlement \"system.multiinst.hierarchy.manager.VIEW\" for Node management can view all fields.\n\n**Since**: 3800.10.0",
    method: "get",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes",
    pathParams: [],
    queryParams: [
    {
        "name": "offset",
        "type": "integer",
        "description": "The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.",
        "required": false
    },
    {
        "name": "includePermissions",
        "type": "boolean",
        "description": "Flag to indicate whether to include permissions in the response.",
        "required": false
    },
    {
        "name": "limit",
        "type": "integer",
        "description": "The maximum number of results to be returned. There may be less if the query returned less than the maximum.",
        "required": false
    },
    {
        "name": "recursive",
        "type": "boolean",
        "description": "Search Institutional Hierarchy Nodes recursively. If true, returns all descendant nodes of the specified Node. If false, only immediate children are returned (defualt: false)\n\n**Since**: 3800.14.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyGetNodesRequest",
    isMultipart: false,
    originalName: "getNodes",
    isWrite: false
  } as ApiMethodInfo,

  createNode: {
    description: "Creates a new institutional hierarchy node\n\nEntitlement system.multiinst.hierarchy.manager.CREATE required\n\nUsers with entitlement \"system.multiinst.hierarchy.manager.CREATE\" for Node management can create a new Node.\n\n**Since**: 3800.15.0",
    method: "post",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes",
    pathParams: [],
    queryParams: [
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyCreateNodeRequest",
    isMultipart: false,
    originalName: "createNode",
    isWrite: true
  } as ApiMethodInfo,

  getNode: {
    description: "Returns the institutional hierarchy node corresponding the provided ID\n\nEntitlement system.multiinst.hierarchy.manager.VIEW required\n\nUsers with entitlement \"system.multiinst.hierarchy.manager.VIEW\" for Node management can view all fields.\n\n**Since**: 3800.10.0",
    method: "get",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyGetNodeRequest",
    isMultipart: false,
    originalName: "getNode",
    isWrite: false
  } as ApiMethodInfo,

  deleteNode: {
    description: "Deletes an institutional hierarchy node. The root node cannot be deleted. This deletes orphan children in a cascading fashion.\n\nThe 'system.multiinst.hierarchy.manager.DELETE' entitlement is required.\n\n**Since**: 3800.15.0",
    method: "delete",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    }
],
    queryParams: [],
    requestType: "InstitutionalHierarchyDeleteNodeRequest",
    isMultipart: false,
    originalName: "deleteNode",
    isWrite: true
  } as ApiMethodInfo,

  updateNode: {
    description: "Updates Institutional Hierarchy Node information.\n\nIf parentId is sent a move node task would be processed on background, this returns a location header where this task status can be consulted.\n\nEntitlement system.multiinst.hierarchy.manager.MODIFY is required\n\n**Since**: 3800.15.0",
    method: "patch",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyUpdateNodeRequest",
    isMultipart: false,
    originalName: "updateNode",
    isWrite: true
  } as ApiMethodInfo,

  getNodeChildren: {
    description: "Returns the children of the institutional hierarchy node corresponding to the provided ID\n\nEntitlement system.multiinst.hierarchy.manager.VIEW required\n\nUsers with entitlement \"system.multiinst.hierarchy.manager.VIEW\" for Node management can view all fields.\n\n**Since**: 3800.10.0",
    method: "get",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/children",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "offset",
        "type": "integer",
        "description": "The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.",
        "required": false
    },
    {
        "name": "includePermissions",
        "type": "boolean",
        "description": "Flag to indicate whether to include permissions in the response.",
        "required": false
    },
    {
        "name": "limit",
        "type": "integer",
        "description": "The maximum number of results to be returned. There may be less if the query returned less than the maximum.",
        "required": false
    },
    {
        "name": "recursive",
        "type": "boolean",
        "description": "Search Institutional Hierarchy Nodes recursively. If true, returns all descendant nodes of the specified Node. If false, only immediate children are returned (defualt: false)\n\n**Since**: 3800.14.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyGetNodeChildrenRequest",
    isMultipart: false,
    originalName: "getNodeChildren",
    isWrite: false
  } as ApiMethodInfo,

  createChildNode: {
    description: "Create a new institutional hierarchy node whose parent corresponds to the supplied nodeId\n\nEntitlement system.multiinst.hierarchy.manager.CREATE required\n\nUsers with entitlement \"system.multiinst.hierarchy.manager.CREATE\" for Node management can create a new Node.\n\n**Since**: 3800.15.0",
    method: "post",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/children",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyCreateChildNodeRequest",
    isMultipart: false,
    originalName: "createChildNode",
    isWrite: true
  } as ApiMethodInfo,

  getNodeCourseAssociations: {
    description: "Returns a list of node-course relationships for the specified node.\n\nUsers with the 'system.multiinst.node.course.association.VIEW' entitlement and the 'system.multiinst.node.org.association.VIEW' system entitlement can access all node association information.\n\n**Since**: 3800.10.0",
    method: "get",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/courses",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "offset",
        "type": "integer",
        "description": "The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.",
        "required": false
    },
    {
        "name": "includePermissions",
        "type": "boolean",
        "description": "Flag to indicate whether to include permissions in the response.",
        "required": false
    },
    {
        "name": "limit",
        "type": "integer",
        "description": "The maximum number of results to be returned. There may be less if the query returned less than the maximum.",
        "required": false
    },
    {
        "name": "course.organization",
        "type": "boolean",
        "description": "Filters Hierarchy Node associations based on whether it is a Node-Course or a Node-Organization association. A value of 'true' indicates that search results should be limited to Node-Organization associations. A value of 'false' indicates results should be limited to Node-Course associations. Not setting this field indicates that both Node-Course and Node-Organization associations should be returned.",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    },
    {
        "name": "expand",
        "type": "string",
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>course</li></ul>",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyGetNodeCourseAssociationsRequest",
    isMultipart: false,
    originalName: "getNodeCourseAssociations",
    isWrite: false
  } as ApiMethodInfo,

  createNodeCourseAssociation: {
    description: "Creates a node-course relationship for the specified node and course.\n\nUsers with the 'system.multiinst.node.course.association.CREATE' entitlement can create Course - Hierarchy Node associations. Users with the 'system.multiinst.node.org.association.CREATE' entitlement can create Organization - Hierarchy Node associations\n\n**Since**: 3800.17.0",
    method: "put",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/courses/{courseId}",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    },
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyCreateNodeCourseAssociationRequest",
    isMultipart: false,
    originalName: "createNodeCourseAssociation",
    isWrite: true
  } as ApiMethodInfo,

  deleteNodeCourseAssociation: {
    description: "Deletes the association between a given Node and a Course\n\nEntitlement system.multiinst.node.course.association.DELETE required to delete Node-Course associations Entitlement system.multiinst.node.org.association.DELETE required to delete Node-Organization associations\n\n**Since**: 3800.17.0",
    method: "delete",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/courses/{courseId}",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    },
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    }
],
    queryParams: [],
    requestType: "InstitutionalHierarchyDeleteNodeCourseAssociationRequest",
    isMultipart: false,
    originalName: "deleteNodeCourseAssociation",
    isWrite: true
  } as ApiMethodInfo,

  updateNodeCourseAssociation: {
    description: "Update a specified node-course association.\n\nUsers with the 'system.multiinst.node.course.association.CREATE' entitlement can update Course - Hierarchy Node associations Users with the 'system.multiinst.node.org.association.CREATE' entitlement can update Organization - Hierarchy Node associations\n\n**Since**: 3800.17.0",
    method: "patch",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/courses/{courseId}",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    },
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyUpdateNodeCourseAssociationRequest",
    isMultipart: false,
    originalName: "updateNodeCourseAssociation",
    isWrite: true
  } as ApiMethodInfo,

  getTools: {
    description: "Returns a list of tools associated to a node\n\nEntitlement system.multiinst.node.tools.MODIFY required\n\nUsers with entitlement \"system.multiinst.node.tools.MODIFY\" for Node management can make use of this Endpoint.\n\n**Since**: 3900.16.0",
    method: "get",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/tools/{toolType}",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    },
    {
        "name": "toolType",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [
    {
        "name": "offset",
        "type": "integer",
        "description": "The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.",
        "required": false
    },
    {
        "name": "includePermissions",
        "type": "boolean",
        "description": "Flag to indicate whether to include permissions in the response.",
        "required": false
    },
    {
        "name": "limit",
        "type": "integer",
        "description": "The maximum number of results to be returned. There may be less if the query returned less than the maximum.",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyGetToolsRequest",
    isMultipart: false,
    originalName: "getTools",
    isWrite: false
  } as ApiMethodInfo,

  patchTool: {
    description: "Modifies a tool related to a specific node and tool type. The modified tool is returned if modification runs succesfuly\n\nEntitlements system.multiinst.node.tools.MODIFY and system.multiinst.node.tools.lock.override.MODIFY are required\n\nUsers with entitlement \"system.multiinst.node.tools.MODIFY\" and \"system.multiinst.node.tools.lock.override.MODIFY\" for Node management can make use of this Endpoint.\n\n**Since**: 3900.16.0",
    method: "patch",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/tools/{toolType}/{toolId}",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    },
    {
        "name": "toolType",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "toolId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [
    {
        "name": "updateExistingOriginalCourses",
        "type": "boolean",
        "description": "Scope of updated Tool Settings. By default if the parameter is not present or is set as false, the updated settings will be applied to new Original courses and all Ultra courses (new and existing). If present and value is true, the updated settings will be applied to all new and existing courses (Original and Ultra).\n\n**Since**: 3900.16.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyPatchToolRequest",
    isMultipart: false,
    originalName: "patchTool",
    isWrite: true
  } as ApiMethodInfo,

  getNodeUserAssociations: {
    description: "Returns a list of node-user relationships for the specified node.\n\nUsers with the 'system.multiinst.node.user.association.VIEW' entitlement can access all node association information.\n\n**Since**: 3900.8.0",
    method: "get",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/users",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "offset",
        "type": "integer",
        "description": "The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.",
        "required": false
    },
    {
        "name": "includePermissions",
        "type": "boolean",
        "description": "Flag to indicate whether to include permissions in the response.",
        "required": false
    },
    {
        "name": "limit",
        "type": "integer",
        "description": "The maximum number of results to be returned. There may be less if the query returned less than the maximum.",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    },
    {
        "name": "expand",
        "type": "string",
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyGetNodeUserAssociationsRequest",
    isMultipart: false,
    originalName: "getNodeUserAssociations",
    isWrite: false
  } as ApiMethodInfo,

  createNodeUserAssociation: {
    description: "Creates the association between a given Node and a User.\n\nEntitlement 'system.multiinst.node.user.association.CREATE' is required.\n\n**Since**: 3900.8.0",
    method: "put",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/users/{userId}",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    },
    {
        "name": "userId",
        "type": "string",
        "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>primary</td> <td>_123_1</td>         </tr>         <tr>           <td>externalId</td> <td>externalId:jsmith</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>uuid</td> <td>uuid:915c7567d76d444abf1eed56aad3beb5</td>         </tr>       </tbody>   </table> </div> The following id prefixes require that the caller have the system.user.properties.MODIFY entitlement to use and will fail with a security error if attempted to be used without that.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>institutionEmail</td> <td>institutionEmail:name@example.com</td>         </tr>         <tr>           <td>email</td> <td>email:name@example.com</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>studentId</td> <td>studentId:123456 </td>         </tr>       </tbody>   </table> </div>",
        "required": true
    }
],
    queryParams: [
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyCreateNodeUserAssociationRequest",
    isMultipart: false,
    originalName: "createNodeUserAssociation",
    isWrite: true
  } as ApiMethodInfo,

  deleteNodeUserAssociation: {
    description: "Deletes the association between a given Node and a User.\n\nEntitlement 'system.multiinst.node.user.association.DELETE' is required.\n\n**Since**: 3900.8.0",
    method: "delete",
    path: "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/users/{userId}",
    pathParams: [
    {
        "name": "nodeId",
        "type": "string",
        "description": "The node ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n \n ",
        "required": true
    },
    {
        "name": "userId",
        "type": "string",
        "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>primary</td> <td>_123_1</td>         </tr>         <tr>           <td>externalId</td> <td>externalId:jsmith</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>uuid</td> <td>uuid:915c7567d76d444abf1eed56aad3beb5</td>         </tr>       </tbody>   </table> </div> The following id prefixes require that the caller have the system.user.properties.MODIFY entitlement to use and will fail with a security error if attempted to be used without that.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>institutionEmail</td> <td>institutionEmail:name@example.com</td>         </tr>         <tr>           <td>email</td> <td>email:name@example.com</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>studentId</td> <td>studentId:123456 </td>         </tr>       </tbody>   </table> </div>",
        "required": true
    }
],
    queryParams: [],
    requestType: "InstitutionalHierarchyDeleteNodeUserAssociationRequest",
    isMultipart: false,
    originalName: "deleteNodeUserAssociation",
    isWrite: true
  } as ApiMethodInfo,

  getNodesForUser: {
    description: "Obtains the Institutional Hierarchy Nodes associated to a User.\n\nEntitlement system.multiinst.node.user.association.VIEW is required\n\n**Since**: 3900.8.0",
    method: "get",
    path: "/learn/api/public/v1/users/{userId}/nodes",
    pathParams: [
    {
        "name": "userId",
        "type": "string",
        "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>primary</td> <td>_123_1</td>         </tr>         <tr>           <td>externalId</td> <td>externalId:jsmith</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>uuid</td> <td>uuid:915c7567d76d444abf1eed56aad3beb5</td>         </tr>       </tbody>   </table> </div> The following id prefixes require that the caller have the system.user.properties.MODIFY entitlement to use and will fail with a security error if attempted to be used without that.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>institutionEmail</td> <td>institutionEmail:name@example.com</td>         </tr>         <tr>           <td>email</td> <td>email:name@example.com</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>studentId</td> <td>studentId:123456 </td>         </tr>       </tbody>   </table> </div>",
        "required": true
    }
],
    queryParams: [
    {
        "name": "offset",
        "type": "integer",
        "description": "The number of rows to skip before beginning to return rows. An offset of 0 is the same as omitting the offset parameter.",
        "required": false
    },
    {
        "name": "includePermissions",
        "type": "boolean",
        "description": "Flag to indicate whether to include permissions in the response.",
        "required": false
    },
    {
        "name": "limit",
        "type": "integer",
        "description": "The maximum number of results to be returned. There may be less if the query returned less than the maximum.",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    },
    {
        "name": "expand",
        "type": "string",
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>node</li></ul>",
        "required": false
    }
],
    requestType: "InstitutionalHierarchyGetNodesForUserRequest",
    isMultipart: false,
    originalName: "getNodesForUser",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const InstitutionalHierarchyHandlers = {
  getNodesForCourse: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.getNodesForCourse;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
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
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  getNodes: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.getNodes;
    
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
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  createNode: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.createNode;
    
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
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  getNode: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.getNode;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
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
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  deleteNode: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.deleteNode;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
      }
    });

    // Build URL with path parameters
    let url = methodInfo.path;
    
    // Replace path parameters
    Object.entries(pathParams).forEach(([key, value]) => {
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  updateNode: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.updateNode;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
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
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  getNodeChildren: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.getNodeChildren;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
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
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  createChildNode: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.createChildNode;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
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
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  getNodeCourseAssociations: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.getNodeCourseAssociations;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
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
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  createNodeCourseAssociation: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.createNodeCourseAssociation;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
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
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  deleteNodeCourseAssociation: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.deleteNodeCourseAssociation;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
      }
    });

    // Build URL with path parameters
    let url = methodInfo.path;
    
    // Replace path parameters
    Object.entries(pathParams).forEach(([key, value]) => {
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  updateNodeCourseAssociation: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.updateNodeCourseAssociation;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
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
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  getTools: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.getTools;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
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
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  patchTool: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.patchTool;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
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
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  getNodeUserAssociations: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.getNodeUserAssociations;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
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
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  createNodeUserAssociation: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.createNodeUserAssociation;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
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
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  deleteNodeUserAssociation: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.deleteNodeUserAssociation;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
      }
    });

    // Build URL with path parameters
    let url = methodInfo.path;
    
    // Replace path parameters
    Object.entries(pathParams).forEach(([key, value]) => {
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  getNodesForUser: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = InstitutionalHierarchyMethods.getNodesForUser;
    
    // Extract path parameters
    const pathParams: Record<string, string> = {};
    methodInfo.pathParams.forEach(param => {
      const value = args[param.name];
      if (value !== undefined) {
        pathParams[param.name] = String(value);
        delete args[param.name];
      } else if (param.required) {
        throw new Error(`Missing required path parameter: ${param.name}`);
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
      url = url.replace(`{${key}}`, encodeURIComponent(value));
    });

    // Add query parameters
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
    if (queryString) {
      url = `${url}?${queryString}`;
    }

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  }
};
