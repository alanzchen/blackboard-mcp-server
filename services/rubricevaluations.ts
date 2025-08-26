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
export const RubricEvaluationsMethods: { [key: string]: ApiMethodInfo } = {
  getRubricEvaluations: {
    description: "Returns the list of Rubric Evaluations related to the specified attempt.\n\nUser must have the following entitlement in order to see the evaluations.\n\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.69.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/attempts/{attemptId}/rubric/evaluations",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "columnId",
        "type": "string",
        "description": "The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:column1                    |\n | finalGrade | finalGrade                            |\n ",
        "required": true
    },
    {
        "name": "attemptId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [
    {
        "name": "submitted",
        "type": "string",
        "description": "The submitted date value to use as search criteria.",
        "required": false
    },
    {
        "name": "submittedCompare",
        "type": "string",
        "description": "The 'submittedCompare' value to use as a search criteria.",
        "required": false
    },
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.69.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "RubricEvaluationsGetRubricEvaluationsRequest",
    isMultipart: false,
    originalName: "getRubricEvaluations",
    isWrite: false
  } as ApiMethodInfo,

  getRubricEvaluations2: {
    description: "Returns the list of Rubric Evaluations related to the specified group attempt.\n\nUser must have the following entitlement in order to see the evaluations.\n\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.100.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/groupAttempts/{groupAttemptId}/rubric/evaluations",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "columnId",
        "type": "string",
        "description": "The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:column1                    |\n | finalGrade | finalGrade                            |\n ",
        "required": true
    },
    {
        "name": "groupAttemptId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [
    {
        "name": "submitted",
        "type": "string",
        "description": "The submitted date value to use as search criteria.",
        "required": false
    },
    {
        "name": "submittedCompare",
        "type": "string",
        "description": "The 'submittedCompare' value to use as a search criteria.",
        "required": false
    },
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.69.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "RubricEvaluationsGetRubricEvaluations2Request",
    isMultipart: false,
    originalName: "getRubricEvaluations",
    isWrite: false
  } as ApiMethodInfo,

  getRubricEvaluations3: {
    description: "Returns a list of rubric evaluations for a given course Id, rubric Id and rubric association Id.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.69.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}/evaluations",
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
    },
    {
        "name": "rubricAssociationId",
        "type": "string",
        "description": "The Rubric Association ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "submitted",
        "type": "string",
        "description": "The submitted date value to use as search criteria.",
        "required": false
    },
    {
        "name": "submittedCompare",
        "type": "string",
        "description": "The 'submittedCompare' value to use as a search criteria.",
        "required": false
    },
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.69.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "RubricEvaluationsGetRubricEvaluations3Request",
    isMultipart: false,
    originalName: "getRubricEvaluations",
    isWrite: false
  } as ApiMethodInfo,

  createRubricEvaluations: {
    description: "Creates a rubric evaluation related with the given course Id, rubric Id, rubric association Id and evaluation Id. This endpoint only supports Ultra courses in Blackboard Learn.\n\nCreation require the selected scores for all rubric evaluation cells.\n\nUser must have the following entitlement in order to create the provided rubric evaluation.\n\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.89.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}/evaluations",
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
    },
    {
        "name": "rubricAssociationId",
        "type": "string",
        "description": "The Rubric Association ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
    requestType: "RubricEvaluationsCreateRubricEvaluationsRequest",
    isMultipart: false,
    originalName: "createRubricEvaluations",
    isWrite: true
  } as ApiMethodInfo,

  getRubricEvaluationById: {
    description: "Returns a rubric evaluation for a given course Id, rubric Id, rubric association Id and evaluation Id.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.69.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}/evaluations/{rubricEvaluationId}",
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
    },
    {
        "name": "rubricAssociationId",
        "type": "string",
        "description": "The Rubric Association ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "rubricEvaluationId",
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
    },
    {
        "name": "expand",
        "type": "string",
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>cells</li></ul>",
        "required": false
    }
],
    requestType: "RubricEvaluationsGetRubricEvaluationByIdRequest",
    isMultipart: false,
    originalName: "getRubricEvaluationById",
    isWrite: false
  } as ApiMethodInfo,

  updateRubricEvaluation: {
    description: "Updates a rubric evaluation related with the given course Id, rubric Id, rubric association Id and evaluation Id. This endpoint only supports Ultra courses in Blackboard Learn.\n\nPartial update is allowed, it accepts 1 to all cells in the rubric evaluation body.\n\nUser must have the following entitlement in order to update the provided rubric evaluation.\n\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.89.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}/evaluations/{rubricEvaluationId}",
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
    },
    {
        "name": "rubricAssociationId",
        "type": "string",
        "description": "The Rubric Association ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "rubricEvaluationId",
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
    requestType: "RubricEvaluationsUpdateRubricEvaluationRequest",
    isMultipart: false,
    originalName: "updateRubricEvaluation",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const RubricEvaluationsHandlers = {
  getRubricEvaluations: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricEvaluationsMethods.getRubricEvaluations;
    
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

  getRubricEvaluations2: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricEvaluationsMethods.getRubricEvaluations2;
    
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

  getRubricEvaluations3: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricEvaluationsMethods.getRubricEvaluations3;
    
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

  createRubricEvaluations: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricEvaluationsMethods.createRubricEvaluations;
    
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

  getRubricEvaluationById: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricEvaluationsMethods.getRubricEvaluationById;
    
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

  updateRubricEvaluation: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricEvaluationsMethods.updateRubricEvaluation;
    
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
