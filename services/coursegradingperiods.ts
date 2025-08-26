import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const CourseGradingPeriodsMethods: { [key: string]: ApiMethodInfo } = {
  getGradingPeriods: {
    description: "Returns a list of grading periods.\n\nThe entitlement \"course.gradebook.MODIFY\" or \"course.gradebook-metadata.VIEW\" is needed. Note that grading period Ids may be visible on GradableItems based on GradableItem (column / assignment) entitlement restrictions.\n\nThis endpoint supports paging, sorting, and the filtering of fields returned on result object.\n\n**Since**: 3300.3.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/periods",
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
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties,  with an optional \"(desc)\" or \"(asc)\" suffix to request an ascending or descending sort for that property. e.g. \"title(desc),description\" Supported fields are:\n\n- id\n- title\n- position\n- dateMode\n- description\n\n**Since**: 3300.2.0",
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
    requestType: "CourseGradingPeriodsGetGradingPeriodsRequest",
    isMultipart: false,
    originalName: "getGradingPeriods",
    isWrite: false
  } as ApiMethodInfo,

  createGradingPeriod: {
    description: "Create a grading period.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed.\n\nThis endpoint supports the filtering of fields returned on result object.\n\nThis endpoint has an optional request parameter \"associate\", which will default false. If associate=true, then when the period is updated all assignments in this course  with a due date within the bounds of the grading period's start and end dates (if set)  will associate themselves to the updated grading period.\n\n**Since**: 3300.3.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/periods",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CourseGradingPeriodsCreateGradingPeriodRequest",
    isMultipart: false,
    originalName: "createGradingPeriod",
    isWrite: true
  } as ApiMethodInfo,

  getGradingPeriod: {
    description: "Returns a specific grading period.\n\nThe entitlement \"course.gradebook.MODIFY\" or \"course.gradebook-metadata.VIEW\" is needed. Note that grading period Ids may be visible on GradableItems based on GradableItem (column / assignment) entitlement restrictions.\n\nThis endpoint supports the filtering of fields returned on result object.\n\n**Since**: 3300.3.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/periods/{periodId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "periodId",
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
    "ref": "blackboard.webapps.gradebook.publicapi.v1.GradingPeriod",
    "typeName": "BlackboardWebappsGradebookPublicapiV1GradingPeriod"
},
    requestType: "CourseGradingPeriodsGetGradingPeriodRequest",
    isMultipart: false,
    originalName: "getGradingPeriod",
    isWrite: false
  } as ApiMethodInfo,

  deleteGradingPeriod: {
    description: "Delete a specific grading period. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3300.3.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/periods/{periodId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "periodId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CourseGradingPeriodsDeleteGradingPeriodRequest",
    isMultipart: false,
    originalName: "deleteGradingPeriod",
    isWrite: true
  } as ApiMethodInfo,

  updateGradingPeriod: {
    description: "Update a grading period. The entitlement \"course.gradebook.MODIFY\" is needed.\n\nThis endpoint supports the filtering of fields returned on result object.\n\nThis endpoint has an optional request parameter \"associate\", which will default false. If associate=true, then when the period is updated all assignments in this course  with a due date within the bounds of the grading period's start and end dates (if set)  will associate themselves to the updated grading period.\n\n**Since**: 3300.3.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/periods/{periodId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "periodId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CourseGradingPeriodsUpdateGradingPeriodRequest",
    isMultipart: false,
    originalName: "updateGradingPeriod",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const CourseGradingPeriodsHandlers = {
  getGradingPeriods: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradingPeriodsMethods.getGradingPeriods;
    
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

  createGradingPeriod: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradingPeriodsMethods.createGradingPeriod;
    
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

  getGradingPeriod: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradingPeriodsMethods.getGradingPeriod;
    
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

  deleteGradingPeriod: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradingPeriodsMethods.deleteGradingPeriod;
    
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

  updateGradingPeriod: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradingPeriodsMethods.updateGradingPeriod;
    
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
