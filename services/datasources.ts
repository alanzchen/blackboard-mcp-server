import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter, ApiSchema } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const DataSourcesMethods: { [key: string]: ApiMethodInfo } = {
  getDataSources: {
    description: "Returns a list of data sources.\n\nThe 'system.datasource.manager.VIEW' entitlement is needed.\n\n**Since**: 3000.1.0",
    method: "get",
    path: "/learn/api/public/v1/dataSources",
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
        "description": "The 'batchUid' value to use as search criteria.\n\nCurrently only supports 'contains' searches.",
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
    requestType: "DataSourcesGetDataSourcesRequest",
    isMultipart: false,
    originalName: "getDataSources",
    isWrite: false
  } as ApiMethodInfo,

  createDataSource: {
    description: "Creates a data source.\n\nThe 'system.datasource.manager.VIEW' entitlement is needed.\n\n**Since**: 2015.11.0",
    method: "post",
    path: "/learn/api/public/v1/dataSources",
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
        "externalId": {
            "type": "string",
            "description": "An externally-defined unique ID for the data source.\n\nFormerly known as 'batchUid'."
        },
        "description": {
            "type": "string",
            "description": "The description of the data source."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.datasources.DataSourceV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1DatasourcesDataSourceV1"
},
    requestType: "DataSourcesCreateDataSourceRequest",
    isMultipart: false,
    originalName: "createDataSource",
    isWrite: true
  } as ApiMethodInfo,

  getDataSource: {
    description: "Loads a data source.\n\nThe 'system.datasource.manager.VIEW' entitlement is needed.\n\n**Since**: 2015.11.0",
    method: "get",
    path: "/learn/api/public/v1/dataSources/{dataSourceId}",
    pathParams: [
    {
        "name": "dataSourceId",
        "type": "string",
        "description": "The data source ID.  This may be the primary ID, or the secondary ID prefixed with the ID type. \n\n | ID type    | Example            |\n |------------|--------------------|\n | primary    | _123_1             |\n | externalId | externalId:math101 |\n ",
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
    "ref": "blackboard.webapps.blackboard.publicapi.v1.datasources.DataSource",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1DatasourcesDataSource"
},
    requestType: "DataSourcesGetDataSourceRequest",
    isMultipart: false,
    originalName: "getDataSource",
    isWrite: false
  } as ApiMethodInfo,

  deleteDataSource: {
    description: "Deletes a data source.\n\nThe 'system.datasource.manager.VIEW' entitlement is needed.\n\n**Since**: 2015.11.0",
    method: "delete",
    path: "/learn/api/public/v1/dataSources/{dataSourceId}",
    pathParams: [
    {
        "name": "dataSourceId",
        "type": "string",
        "description": "The data source ID.  This may be the primary ID, or the secondary ID prefixed with the ID type. \n\n | ID type    | Example            |\n |------------|--------------------|\n | primary    | _123_1             |\n | externalId | externalId:math101 |\n ",
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
    responseSchema: null,
    requestType: "DataSourcesDeleteDataSourceRequest",
    isMultipart: false,
    originalName: "deleteDataSource",
    isWrite: true
  } as ApiMethodInfo,

  updateDataSource: {
    description: "Updates a data source.\n\nThe 'system.datasource.manager.VIEW' entitlement is needed.\n\n**Since**: 2015.11.0",
    method: "patch",
    path: "/learn/api/public/v1/dataSources/{dataSourceId}",
    pathParams: [
    {
        "name": "dataSourceId",
        "type": "string",
        "description": "The data source ID.  This may be the primary ID, or the secondary ID prefixed with the ID type. \n\n | ID type    | Example            |\n |------------|--------------------|\n | primary    | _123_1             |\n | externalId | externalId:math101 |\n ",
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
        "externalId": {
            "type": "string",
            "description": "An externally-defined unique ID for the data source.\n\nFormerly known as 'batchUid'."
        },
        "description": {
            "type": "string",
            "description": "The description of the data source."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.datasources.DataSource",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1DatasourcesDataSource"
},
    requestType: "DataSourcesUpdateDataSourceRequest",
    isMultipart: false,
    originalName: "updateDataSource",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const DataSourcesHandlers = {
  getDataSources: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DataSourcesMethods.getDataSources;
    
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

  createDataSource: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DataSourcesMethods.createDataSource;
    
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

  getDataSource: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DataSourcesMethods.getDataSource;
    
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

  deleteDataSource: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DataSourcesMethods.deleteDataSource;
    
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

  updateDataSource: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DataSourcesMethods.updateDataSource;
    
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
