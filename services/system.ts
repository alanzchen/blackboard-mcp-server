import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const SystemMethods: { [key: string]: ApiMethodInfo } = {
  getInfo: {
    description: "Gets the values of Cloud settings that are needed for interacting with platform services.\n\n**Since**: 3900.56.0",
    method: "get",
    path: "/learn/api/public/v1/system/info",
    pathParams: [],
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
    "ref": "blackboard.webapps.blackboard.publicapi.v1.system.SystemInfo",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1SystemSystemInfo"
},
    requestType: "SystemGetInfoRequest",
    isMultipart: false,
    originalName: "getInfo",
    isWrite: false
  } as ApiMethodInfo,

  getPolicies: {
    description: "Returns the links to the Blackboard and Institution privacy policies\n\n**Since**: 3400.5.0",
    method: "get",
    path: "/learn/api/public/v1/system/policies/privacy",
    pathParams: [],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "SystemGetPoliciesRequest",
    isMultipart: false,
    originalName: "getPolicies",
    isWrite: false
  } as ApiMethodInfo,

  getSystemTask: {
    description: "Get the background task by the given task Id.\n\n**Since**: 3800.1.0",
    method: "get",
    path: "/learn/api/public/v1/system/tasks/{taskId}",
    pathParams: [
    {
        "name": "taskId",
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
    "ref": "blackboard.webapps.blackboard.publicapi.v1.system.SystemTask",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1SystemSystemTask"
},
    requestType: "SystemGetSystemTaskRequest",
    isMultipart: false,
    originalName: "getSystemTask",
    isWrite: false
  } as ApiMethodInfo,

  getVersion: {
    description: "Gets the current Learn server version.\n\n**Since**: 3000.3.0",
    method: "get",
    path: "/learn/api/public/v1/system/version",
    pathParams: [],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.system.VersionInfo",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1SystemVersionInfo"
},
    requestType: "SystemGetVersionRequest",
    isMultipart: false,
    originalName: "getVersion",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const SystemHandlers = {
  getInfo: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = SystemMethods.getInfo;
    
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

  getPolicies: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = SystemMethods.getPolicies;
    
    // Simple endpoint with no path or query parameters
    const url = methodInfo.path;

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  getSystemTask: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = SystemMethods.getSystemTask;
    
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

  getVersion: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = SystemMethods.getVersion;
    
    // Simple endpoint with no path or query parameters
    const url = methodInfo.path;

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  }
};
