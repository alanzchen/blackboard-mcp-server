import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const AttemptReceiptMethods: { [key: string]: ApiMethodInfo } = {
  getAttemptReceipt: {
    description: "Get the attempt receipt associated with the @param attemptReceiptIdParam\n\nUsers with all the following entitlements may access this resource:\n\n- GradebookEntitlement.ViewAttempts\n\n**Since**: 3900.37.0",
    method: "get",
    path: "/learn/api/public/v1/attemptReceipts/{attemptReceiptId}",
    pathParams: [
    {
        "name": "attemptReceiptId",
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
    requestType: "AttemptReceiptGetAttemptReceiptRequest",
    isMultipart: false,
    originalName: "getAttemptReceipt",
    isWrite: false
  } as ApiMethodInfo,

  getAttemptReceipt2: {
    description: "Get the attempt receipt associated with the @param attemptReceiptIdParam If the attempt receipt is not found in the current course but exists in another course, the response will still include an attempt receipt with information the user is allowed to see relative to that course.\n\nUsers with the following entitlement may access this resource:\n\n- {@code GradebookEntitlement.ViewAttempts}\n\n**Since**: 3900.113.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/attemptReceipts/{attemptReceiptId}",
    pathParams: [
    {
        "name": "attemptReceiptId",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "courseId",
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
    requestType: "AttemptReceiptGetAttemptReceipt2Request",
    isMultipart: false,
    originalName: "getAttemptReceipt",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const AttemptReceiptHandlers = {
  getAttemptReceipt: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AttemptReceiptMethods.getAttemptReceipt;
    
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

  getAttemptReceipt2: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AttemptReceiptMethods.getAttemptReceipt2;
    
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
