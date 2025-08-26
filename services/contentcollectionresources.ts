import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const ContentCollectionResourcesMethods: { [key: string]: ApiMethodInfo } = {
  getResources: {
    description: "Get the top-level content collection folders.\n\nUsers with the entitlement 'bbcms.cs.filesystem.REST.VIEW' or filesystem access can use this endpoint.\n\n**Since**: 3900.41.0",
    method: "get",
    path: "/learn/api/public/v1/contentCollection/resources",
    pathParams: [],
    queryParams: [
    {
        "name": "modified",
        "type": "string",
        "description": "Search by 'modified' date. Can be used along with 'modifiedCompare'.\n\n**Since**: 3900.41.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search by 'created' date. Can be used along with 'createdCompare'.\n\n**Since**: 3900.41.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Search criteria to be applied to 'modified', When not specified, it will perform as 'greaterOrEqual' by default if 'modified' contains a valid date. Must be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Search criteria to be applied to 'created', When not specified, it will perform as 'greaterOrEqual' by default if 'created' contains a valid date. Must be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "size",
        "type": "integer",
        "description": "Search by file 'size'. Can be used along 'sizeCompare'. If specified, no folders will be retrieved.\n\n**Since**: 3900.41.0",
        "required": false
    },
    {
        "name": "creatorId",
        "type": "string",
        "description": "Search files by 'creatorId'\n\n**Since**: 3900.41.0",
        "required": false
    },
    {
        "name": "sizeCompare",
        "type": "string",
        "description": "Search operator to be applied to 'size', When not specified, it will perform as 'equals' by default if 'size' is specified. Must be one of the following:\n\n- equals - optional\n- notEquals\n- greaterOrEqual\n- greaterThan\n- lessOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| greaterOrEqual |  |\n| greaterThan |  |\n| lessOrEqual |  |\n| lessThan |  |\n",
        "required": false
    },
    {
        "name": "type",
        "type": "string",
        "description": "Search for Resources whose Type matches the specified value.  Valid values are 'File' and 'Folder'.\n\n\n| Type      | Description\n | --------- | --------- |\n| File |  |\n| Folder |  |\n",
        "required": false
    },
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
    requestType: "ContentCollectionResourcesGetResourcesRequest",
    isMultipart: false,
    originalName: "getResources",
    isWrite: false
  } as ApiMethodInfo,

  getContentCollectionResource: {
    description: "Retrieves a content collection resource by id.\n\nResource objects only returned if the requesting User has been granted 'Read' permission on the Resource, or the User has the 'bbcms.cs.fileSystem.REST.VIEW' entitlement.\n\n**Since**: 3900.41.0",
    method: "get",
    path: "/learn/api/public/v1/contentCollection/resources/{resourceId}",
    pathParams: [
    {
        "name": "resourceId",
        "type": "string",
        "description": "The xythos resource ID, formatted either as a primary ID or a xythos ID. <pre class=\"markdown\"> | ID type    | Example                                          | |------------|--------------------------------------------------| | primary    | _123_1                                           | | xid        | xid-123_1-1                                      | </pre> The home directory of a specified course is supported by the following syntax. <pre class=\"markdown\"> | ID type    | Example                                          | |------------|--------------------------------------------------| | primary    | ~course:_123_1                                   | | secondary  | ~course:courseId:theCourseId                     | | secondary  | ~course:externalId:theExternalId                 | | secondary  | ~course:uuid:theUuid                             | </pre> Similarly, the home directory of a specified user is supported as follows. <pre class=\"markdown\"> | ID type    | Example                                          | |------------|--------------------------------------------------| | primary    | ~user:_123_1                                     | | secondary  | ~user:userName:theUserName                       | | secondary  | ~user:externalId:theExternalId                   | | secondary  | ~user:uuid:theUuid                               | </pre> Resource IDs for home directory of the current user in context is supported as follows. \n\n | ID type    | Example                                          |\n |------------|--------------------------------------------------|\n | special    | ~                                                |\n | special    | ~user:me                                         |\n ",
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
    requestType: "ContentCollectionResourcesGetContentCollectionResourceRequest",
    isMultipart: false,
    originalName: "getContentCollectionResource",
    isWrite: false
  } as ApiMethodInfo,

  getResourceChildren: {
    description: "Get the direct children resources of the specified content collection resource. The specified resource must be a folder.\n\nUsers with the entitlement 'bbcms.cs.filesystem.REST.VIEW' or filesystem access can use this endpoint.\n\n**Since**: 3900.41.0",
    method: "get",
    path: "/learn/api/public/v1/contentCollection/resources/{resourceId}/children",
    pathParams: [
    {
        "name": "resourceId",
        "type": "string",
        "description": "The xythos resource ID, formatted either as a primary ID or a xythos ID. <pre class=\"markdown\"> | ID type    | Example                                          | |------------|--------------------------------------------------| | primary    | _123_1                                           | | xid        | xid-123_1-1                                      | </pre> The home directory of a specified course is supported by the following syntax. <pre class=\"markdown\"> | ID type    | Example                                          | |------------|--------------------------------------------------| | primary    | ~course:_123_1                                   | | secondary  | ~course:courseId:theCourseId                     | | secondary  | ~course:externalId:theExternalId                 | | secondary  | ~course:uuid:theUuid                             | </pre> Similarly, the home directory of a specified user is supported as follows. <pre class=\"markdown\"> | ID type    | Example                                          | |------------|--------------------------------------------------| | primary    | ~user:_123_1                                     | | secondary  | ~user:userName:theUserName                       | | secondary  | ~user:externalId:theExternalId                   | | secondary  | ~user:uuid:theUuid                               | </pre> Resource IDs for home directory of the current user in context is supported as follows. \n\n | ID type    | Example                                          |\n |------------|--------------------------------------------------|\n | special    | ~                                                |\n | special    | ~user:me                                         |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "modified",
        "type": "string",
        "description": "Search by 'modified' date. Can be used along with 'modifiedCompare'.\n\n**Since**: 3900.41.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search by 'created' date. Can be used along with 'createdCompare'.\n\n**Since**: 3900.41.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Search criteria to be applied to 'modified', When not specified, it will perform as 'greaterOrEqual' by default if 'modified' contains a valid date. Must be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Search criteria to be applied to 'created', When not specified, it will perform as 'greaterOrEqual' by default if 'created' contains a valid date. Must be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "size",
        "type": "integer",
        "description": "Search by file 'size'. Can be used along 'sizeCompare'. If specified, no folders will be retrieved.\n\n**Since**: 3900.41.0",
        "required": false
    },
    {
        "name": "creatorId",
        "type": "string",
        "description": "Search files by 'creatorId'\n\n**Since**: 3900.41.0",
        "required": false
    },
    {
        "name": "sizeCompare",
        "type": "string",
        "description": "Search operator to be applied to 'size', When not specified, it will perform as 'equals' by default if 'size' is specified. Must be one of the following:\n\n- equals - optional\n- notEquals\n- greaterOrEqual\n- greaterThan\n- lessOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| greaterOrEqual |  |\n| greaterThan |  |\n| lessOrEqual |  |\n| lessThan |  |\n",
        "required": false
    },
    {
        "name": "type",
        "type": "string",
        "description": "Search for Resources whose Type matches the specified value.  Valid values are 'File' and 'Folder'.\n\n\n| Type      | Description\n | --------- | --------- |\n| File |  |\n| Folder |  |\n",
        "required": false
    },
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
    requestType: "ContentCollectionResourcesGetResourceChildrenRequest",
    isMultipart: false,
    originalName: "getResourceChildren",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const ContentCollectionResourcesHandlers = {
  getResources: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentCollectionResourcesMethods.getResources;
    
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

  getContentCollectionResource: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentCollectionResourcesMethods.getContentCollectionResource;
    
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

  getResourceChildren: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentCollectionResourcesMethods.getResourceChildren;
    
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
