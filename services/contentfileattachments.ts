import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter, ApiSchema } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const ContentFileAttachmentsMethods: { [key: string]: ApiMethodInfo } = {
  getFileAttachments: {
    description: "Get the file attachment meta data associated to the Content Item\n\nSupported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment (resource/x-bb-assignment) (Since 3400.9.0) for a Classic Course\n\n**Since**: 3200.8.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
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
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "object",
    "properties": {},
    "description": ""
},
    requestType: "ContentFileAttachmentsGetFileAttachmentsRequest",
    isMultipart: false,
    originalName: "getFileAttachments",
    isWrite: false
  } as ApiMethodInfo,

  createFileAttachment: {
    description: "Attach an uploaded file to a Content item.\n\nSupported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment (resource/x-bb-assignment) for a Classic Course\n\n**Since**: 3400.9.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: {
    "type": "object",
    "properties": {},
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.plugin.content.rest.publicapi.v1.FileAttachment",
    "typeName": "BlackboardPluginContentRestPublicapiV1FileAttachment"
},
    requestType: "ContentFileAttachmentsCreateFileAttachmentRequest",
    isMultipart: false,
    originalName: "createFileAttachment",
    isWrite: true
  } as ApiMethodInfo,

  getFileAttachment: {
    description: "Get the file attachment meta data by an attachment ID\n\nSupported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment(resource/x-bb-assignment) (Since 3400.9.0) for a Classic Course\n\n**Since**: 3200.8.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments/{attachmentId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
        "required": true
    },
    {
        "name": "attachmentId",
        "type": "string",
        "description": "",
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
    requestBodySchema: null,
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.plugin.content.rest.publicapi.v1.FileAttachment",
    "typeName": "BlackboardPluginContentRestPublicapiV1FileAttachment"
},
    requestType: "ContentFileAttachmentsGetFileAttachmentRequest",
    isMultipart: false,
    originalName: "getFileAttachment",
    isWrite: false
  } as ApiMethodInfo,

  deleteFileAttachment: {
    description: "Delete file attachment meta data by attachment ID\n\nSupported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment(resource/x-bb-assignment) for a Classic Course\n\n**Since**: 3400.9.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments/{attachmentId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
        "required": true
    },
    {
        "name": "attachmentId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "ContentFileAttachmentsDeleteFileAttachmentRequest",
    isMultipart: false,
    originalName: "deleteFileAttachment",
    isWrite: true
  } as ApiMethodInfo,

  download: {
    description: "Download the contents of a Content Item.\n\nSupported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment (resource/x-bb-assignment) (Since 3400.9.0) for a Classic Course\n\n**Since**: 3200.8.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments/{attachmentId}/download",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
        "required": true
    },
    {
        "name": "attachmentId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "ContentFileAttachmentsDownloadRequest",
    isMultipart: false,
    originalName: "download",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const ContentFileAttachmentsHandlers = {
  getFileAttachments: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentFileAttachmentsMethods.getFileAttachments;
    
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

  createFileAttachment: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentFileAttachmentsMethods.createFileAttachment;
    
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

  getFileAttachment: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentFileAttachmentsMethods.getFileAttachment;
    
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

  deleteFileAttachment: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentFileAttachmentsMethods.deleteFileAttachment;
    
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

  download: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentFileAttachmentsMethods.download;
    
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
  }
};
