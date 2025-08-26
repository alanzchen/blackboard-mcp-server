import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const UploadsMethods: { [key: string]: ApiMethodInfo } = {
  upload: {
    description: "Upload a file to temporary storage. The request is a multipart/form-data POST following RFC 1867. (https://www.ietf.org/rfc/rfc1867.txt)\n\nThe uploaded file will be scanned for potential security threats by the system's XSS filters. If the file is deemed as unsafe, the request will be rejected and an HTTP Status of 422 is returned.\n\nReturns an ID of the file reference, so it can be used for processing by a different service.\n\nExample Request: <pre> {@code curl -X POST -H 'Authorization: Bearer your_token' -F 'file=@/path/to/your/file' https://YOUR_LEARN_INSTANCE/learn/api/public/v1/uploads } </pre>\n\n**Since**: 3100.12.0",
    method: "post",
    path: "/learn/api/public/v1/uploads",
    pathParams: [],
    queryParams: [
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "UploadsUploadRequest",
    isMultipart: false,
    originalName: "upload",
    isWrite: true
  } as ApiMethodInfo,

  getSettings: {
    description: "Retrieve all settings of upload file service\n\n**Since**: 3900.41.0",
    method: "get",
    path: "/learn/api/public/v1/uploads/settings",
    pathParams: [],
    queryParams: [
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "UploadsGetSettingsRequest",
    isMultipart: false,
    originalName: "getSettings",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const UploadsHandlers = {
  upload: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UploadsMethods.upload;
    
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

  getSettings: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UploadsMethods.getSettings;
    
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
  }
};
