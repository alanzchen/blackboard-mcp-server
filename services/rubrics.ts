import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const RubricsMethods: { [key: string]: ApiMethodInfo } = {
  getRubrics: {
    description: "Returns a list of rubrics for a given course.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.VIEW}\n\n**Since**: 3900.46.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),created\" Supported fields are:\n\n- id\n- created\n- modified\n- title\n- description\n- rubricType",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for rubrics with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified.\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for rubrics with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
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
    requestType: "RubricsGetRubricsRequest",
    isMultipart: false,
    originalName: "getRubrics",
    isWrite: false
  } as ApiMethodInfo,

  createRubric: {
    description: "Creates a new rubric for a given course. This endpoint only supports Ultra courses in Blackboard Learn.\n\nUser must have the following entitlement in order to create the rubric in the course.\n\n- {@code course.rubrics.CREATE}\n\n**Since**: 3900.89.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics",
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
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestBodySchema: {
    "type": "object",
    "properties": {
        "title": {
            "type": "string",
            "description": "Get the title for this rubric (Ex. 'Sample Rubric')"
        },
        "description": {
            "type": "string",
            "description": "Get the description for this rubric (Ex. 'A rubric for base evluation template')"
        },
        "rubricType": {
            "type": "string",
            "description": "Get the rubric type, alas Numeric or Percentage type. (Ex. 'Numeric', 'Percentage', 'Percentage Range', 'Numeric Range')\n\n\n| Type      | Description\n | --------- | --------- |\n| Numeric |  |\n| Nonnumeric |  |\n| NumericRange |  |\n| Percentage |  |\n| PercentageRange |  |\n",
            "enum": [
                "Numeric",
                "Nonnumeric",
                "NumericRange",
                "Percentage",
                "PercentageRange"
            ]
        },
        "columns": {
            "description": "Rubric Column Headers list.",
            "$ref": "#/definitions/java.util.List<blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricColumnV1>"
        },
        "rows": {
            "description": "Rubric Row Criteria list.",
            "$ref": "#/definitions/java.util.List<blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricRowV1>"
        },
        "cells": {
            "description": "Rubric Cells list.",
            "$ref": "#/definitions/java.util.List<blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricCellV1>"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.rubric.spring.rest.publicapi.v1.ExtendedRubricDefinitionV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginRubricSpringRestPublicapiV1ExtendedRubricDefinitionV1"
},
    requestType: "RubricsCreateRubricRequest",
    isMultipart: false,
    originalName: "createRubric",
    isWrite: true
  } as ApiMethodInfo,

  getRubricById: {
    description: "Returns a rubric for a given course Id and a rubric Id.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.VIEW}\n\n**Since**: 3900.46.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "rubricId",
        "type": "string",
        "description": "The Rubric ID. This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    },
    {
        "name": "expand",
        "type": "string",
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>cells</li><li>columns</li><li>rows</li></ul>",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.plugin.rubric.spring.rest.publicapi.v1.ExtendedRubricDefinition",
    "typeName": "BlackboardPluginRubricSpringRestPublicapiV1ExtendedRubricDefinition"
},
    requestType: "RubricsGetRubricByIdRequest",
    isMultipart: false,
    originalName: "getRubricById",
    isWrite: false
  } as ApiMethodInfo,

  deleteRubric: {
    description: "Deletes a rubric for a given course. This endpoint only supports Ultra courses in Blackboard Learn.\n\nUser must have the following entitlement in order to delete the rubric in a course.\n\n- {@code course.rubrics.DELETE}\n\n**Since**: 3900.89.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "rubricId",
        "type": "string",
        "description": "The Rubric ID. This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "forceDelete",
        "type": "boolean",
        "description": "By default, used rubrics cannot be deleted. Use this flag if you want to force delete a rubric with all evaluations and associations.",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "RubricsDeleteRubricRequest",
    isMultipart: false,
    originalName: "deleteRubric",
    isWrite: true
  } as ApiMethodInfo,

  updateRubric: {
    description: "Updates a rubric for a given course. This endpoint only supports Ultra courses in Blackboard Learn.\n\nUser must have the following entitlement in order to update the rubric in the course.\n\n- {@code course.rubrics.MODIFY}\n\n**Since**: 3900.89.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "rubricId",
        "type": "string",
        "description": "The Rubric ID. This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
        "title": {
            "type": "string",
            "description": "Get the title for this rubric (Ex. 'Sample Rubric')"
        },
        "description": {
            "type": "string",
            "description": "Get the description for this rubric (Ex. 'A rubric for base evluation template')"
        },
        "rubricType": {
            "type": "string",
            "description": "Get the rubric type, alas Numeric or Percentage type. (Ex. 'Numeric', 'Percentage', 'Percentage Range', 'Numeric Range')\n\n\n| Type      | Description\n | --------- | --------- |\n| Numeric |  |\n| Nonnumeric |  |\n| NumericRange |  |\n| Percentage |  |\n| PercentageRange |  |\n",
            "enum": [
                "Numeric",
                "Nonnumeric",
                "NumericRange",
                "Percentage",
                "PercentageRange"
            ]
        },
        "columns": {
            "description": "Rubric Column Headers list.",
            "$ref": "#/definitions/java.util.List<blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricColumnV1>"
        },
        "rows": {
            "description": "Rubric Row Criteria list.",
            "$ref": "#/definitions/java.util.List<blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricRowV1>"
        },
        "cells": {
            "description": "Rubric Cells list.",
            "$ref": "#/definitions/java.util.List<blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricCellV1>"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.plugin.rubric.spring.rest.publicapi.v1.ExtendedRubricDefinition",
    "typeName": "BlackboardPluginRubricSpringRestPublicapiV1ExtendedRubricDefinition"
},
    requestType: "RubricsUpdateRubricRequest",
    isMultipart: false,
    originalName: "updateRubric",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const RubricsHandlers = {
  getRubrics: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricsMethods.getRubrics;
    
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

  createRubric: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricsMethods.createRubric;
    
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

  getRubricById: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricsMethods.getRubricById;
    
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

  deleteRubric: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricsMethods.deleteRubric;
    
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

  updateRubric: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricsMethods.updateRubric;
    
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
