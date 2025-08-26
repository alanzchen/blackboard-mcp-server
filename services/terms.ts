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
export const TermsMethods: { [key: string]: ApiMethodInfo } = {
  getTerms: {
    description: "Returns a list of terms.\n\nProperties returned for each term will depend on whether or not the caller has one of the term entitlements.\n\nCallers without either the entitlements 'term.VIEW' or 'term.MODIFY' will always get a minimal set of core properties:\n\n- id\n- name\n- description\n- availability.*\n\nIf the user has one of the entitlements, they will also get the following properties:\n\n- externalId\n- dataSourceId\n\n**Since**: 3000.1.0",
    method: "get",
    path: "/learn/api/public/v1/terms",
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
        "name": "externalId",
        "type": "string",
        "description": "Search for term with externalId properties that contain this value.\n\n**Since**: 3100.6.0",
        "required": false
    },
    {
        "name": "dataSourceId",
        "type": "string",
        "description": "Search for term with this dataSourceId.\n\n**Since**: 3100.6.0",
        "required": false
    },
    {
        "name": "availability.available",
        "type": "string",
        "description": "Search for users with availability.available properties that contain this value.\n\n**Since**: 3100.6.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the term and the courses it contains. |\n| No | Students may not access the term or the courses it contains. |\n",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "TermsGetTermsRequest",
    isMultipart: false,
    originalName: "getTerms",
    isWrite: false
  } as ApiMethodInfo,

  createTerm: {
    description: "Creates a term.\n\nThe 'system.term.MODIFY' entitlement is needed.\n\n**Since**: 2015.11.0",
    method: "post",
    path: "/learn/api/public/v1/terms",
    pathParams: [],
    queryParams: [
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "TermsCreateTermRequest",
    isMultipart: false,
    originalName: "createTerm",
    isWrite: true
  } as ApiMethodInfo,

  getTerm: {
    description: "Loads a term.\n\nProperties returned will depend on whether or not the caller has one of the term entitlements.\n\nCallers without either the entitlements 'term.VIEW' or 'term.MODIFY' will always get a minimal set of core properties:\n\n- id\n- name\n- description\n- availability.*\n\nIf the user has one of the entitlements, they will also get the following properties:\n\n- externalId\n- dataSourceId\n\n**Since**: 2015.11.0",
    method: "get",
    path: "/learn/api/public/v1/terms/{termId}",
    pathParams: [
    {
        "name": "termId",
        "type": "string",
        "description": "The term ID.  This may be the primary ID, or the secondary ID prefixed with the ID type. \n\n | ID type    | Example                |\n |------------|------------------------|\n | primary    | _123_1                 |\n | externalId | externalId:spring.2016 |\n ",
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
    requestType: "TermsGetTermRequest",
    isMultipart: false,
    originalName: "getTerm",
    isWrite: false
  } as ApiMethodInfo,

  deleteTerm: {
    description: "Deletes a term.\n\nThe 'system.term.MODIFY' entitlement is needed.\n\n**Since**: 2015.11.0",
    method: "delete",
    path: "/learn/api/public/v1/terms/{termId}",
    pathParams: [
    {
        "name": "termId",
        "type": "string",
        "description": "The term ID.  This may be the primary ID, or the secondary ID prefixed with the ID type. \n\n | ID type    | Example                |\n |------------|------------------------|\n | primary    | _123_1                 |\n | externalId | externalId:spring.2016 |\n ",
        "required": true
    }
],
    queryParams: [],
    requestType: "TermsDeleteTermRequest",
    isMultipart: false,
    originalName: "deleteTerm",
    isWrite: true
  } as ApiMethodInfo,

  updateTerm: {
    description: "Updates a term.\n\nThe 'system.term.MODIFY' entitlement is needed.\n\n**Since**: 2015.11.0",
    method: "patch",
    path: "/learn/api/public/v1/terms/{termId}",
    pathParams: [
    {
        "name": "termId",
        "type": "string",
        "description": "The term ID.  This may be the primary ID, or the secondary ID prefixed with the ID type. \n\n | ID type    | Example                |\n |------------|------------------------|\n | primary    | _123_1                 |\n | externalId | externalId:spring.2016 |\n ",
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
    requestType: "TermsUpdateTermRequest",
    isMultipart: false,
    originalName: "updateTerm",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const TermsHandlers = {
  getTerms: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = TermsMethods.getTerms;
    
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

  createTerm: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = TermsMethods.createTerm;
    
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

  getTerm: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = TermsMethods.getTerm;
    
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

  deleteTerm: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = TermsMethods.deleteTerm;
    
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

  updateTerm: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = TermsMethods.updateTerm;
    
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
