import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const PronounsMethods: { [key: string]: ApiMethodInfo } = {
  getPronouns: {
    description: "Returns a list of pronouns\n\nSupports the standard paging query parameters, with a maximum page size of 200.\n\n**Since**: 3900.26.0",
    method: "get",
    path: "/learn/api/public/v1/pronouns",
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
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "object",
    "properties": {},
    "description": ""
},
    requestType: "PronounsGetPronounsRequest",
    isMultipart: false,
    originalName: "getPronouns",
    isWrite: false
  } as ApiMethodInfo,

  createPronoun: {
    description: "Create a pronoun\n\nUsers with the 'system.pronouns.MODIFY' entitlement can create pronouns.\n\nPending pronouns created will be submitted to the System Administrator for approval and will not be immediately added to the list, regardless of entitlement.\n\n**Since**: 3900.26.0",
    method: "post",
    path: "/learn/api/public/v1/pronouns",
    pathParams: [],
    queryParams: [
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestBodySchema: {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "The name of the pronoun.",
            "maxLength": 100
        },
        "status": {
            "type": "string",
            "description": "The status of the pronoun.\n\n\n| Type      | Description\n | --------- | --------- |\n| Pending |  |\n| Approved |  |\n",
            "enum": [
                "Pending",
                "Approved"
            ]
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.pronouns.PronounV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1PronounsPronounV1"
},
    requestType: "PronounsCreatePronounRequest",
    isMultipart: false,
    originalName: "createPronoun",
    isWrite: true
  } as ApiMethodInfo,

  deletePronoun: {
    description: "Delete a pronoun\n\nThe 'system.pronouns.MODIFY' entitlement is needed in order to delete the pronoun.\n\n**Since**: 3900.26.0",
    method: "delete",
    path: "/learn/api/public/v1/pronouns/{pronounId}",
    pathParams: [
    {
        "name": "pronounId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "PronounsDeletePronounRequest",
    isMultipart: false,
    originalName: "deletePronoun",
    isWrite: true
  } as ApiMethodInfo,

  updatePronoun: {
    description: "Update a pronoun\n\nThe 'system.pronouns.MODIFY' entitlement is needed in order to update the pronoun.\n\n**Since**: 3900.26.0",
    method: "patch",
    path: "/learn/api/public/v1/pronouns/{pronounId}",
    pathParams: [
    {
        "name": "pronounId",
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
    requestBodySchema: {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "The name of the pronoun.",
            "maxLength": 100
        },
        "status": {
            "type": "string",
            "description": "The status of the pronoun.\n\n\n| Type      | Description\n | --------- | --------- |\n| Pending |  |\n| Approved |  |\n",
            "enum": [
                "Pending",
                "Approved"
            ]
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.pronouns.PronounV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1PronounsPronounV1"
},
    requestType: "PronounsUpdatePronounRequest",
    isMultipart: false,
    originalName: "updatePronoun",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const PronounsHandlers = {
  getPronouns: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = PronounsMethods.getPronouns;
    
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

  createPronoun: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = PronounsMethods.createPronoun;
    
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

  deletePronoun: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = PronounsMethods.deletePronoun;
    
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

  updatePronoun: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = PronounsMethods.updatePronoun;
    
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
