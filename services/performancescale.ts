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
export const PerformanceScaleMethods: { [key: string]: ApiMethodInfo } = {
  getPerformanceScaleSettings: {
    description: "Returns the list of the goal performance scale configuration.\n\nNo entitlement is required to use this endpoint.\n\n**Since**: 3900.105.0",
    method: "get",
    path: "/learn/api/public/v1/courses/settings/goalperformance/scale",
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
    requestType: "PerformanceScaleGetPerformanceScaleSettingsRequest",
    isMultipart: false,
    originalName: "getPerformanceScaleSettings",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const PerformanceScaleHandlers = {
  getPerformanceScaleSettings: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = PerformanceScaleMethods.getPerformanceScaleSettings;
    
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
