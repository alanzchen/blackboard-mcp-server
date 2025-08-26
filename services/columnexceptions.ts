import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter, ApiSchema } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const ColumnExceptionsMethods: { [key: string]: ApiMethodInfo } = {
  getExceptionsByIds: {
    description: "Returns a paged list of all user exceptions associated with the course and gradebook column. The entitlement(course.gradebook-item.exceptions.VIEW) and be enrolled to the course is needed. </pre>\n\n**Since**: 3900.103.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/exceptions",
    pathParams: [
    {
        "name": "columnId",
        "type": "string",
        "description": "The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:column1                    |\n | finalGrade | finalGrade                            |\n ",
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
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestBodySchema: {
    "type": "object",
    "properties": {
        "usersIds": {
            "description": "Search for user exceptions associated with these users Ids.\n\n**Since**: 3900.103.0",
            "$ref": "#/definitions/java.util.List<blackboard.platform.rest.util.IdTORest>"
        },
        "groupIds": {
            "description": "Search for user exceptions associated with these groups Ids.\n\n**Since**: 3900.103.0",
            "$ref": "#/definitions/java.util.List<blackboard.platform.rest.util.IdTORest>"
        },
        "fullDetails": {
            "type": "boolean",
            "description": "If true, the full details of the user exceptions will be returned.\n\n**Since**: 3900.103.0"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "object",
    "properties": {},
    "description": ""
},
    requestType: "ColumnExceptionsGetExceptionsByIdsRequest",
    isMultipart: false,
    originalName: "getExceptionsByIds",
    isWrite: true
  } as ApiMethodInfo,

  getUserException: {
    description: "Returns specific user exception associated with the course and gradebook column. The entitlement(course.gradebook-item.exceptions.VIEW) and be enrolled to the course is needed. </pre>\n\n**Since**: 3900.103.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/exceptions/users/{userId}",
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
        "name": "userId",
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
    "ref": "blackboard.webapps.gradebook.publicapi.v1.GradableItemOverride",
    "typeName": "BlackboardWebappsGradebookPublicapiV1GradableItemOverride"
},
    requestType: "ColumnExceptionsGetUserExceptionRequest",
    isMultipart: false,
    originalName: "getUserException",
    isWrite: false
  } as ApiMethodInfo,

  putExceptions: {
    description: "Creates/updates an exception associated with the course and gradable item for a user The entitlement(course.gradebook-item.exceptions.MODIFY) is checked.\n\n**Since**: 3900.103.0",
    method: "put",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/exceptions/users/{userId}",
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
        "description": "",
        "required": true
    },
    {
        "name": "userId",
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
        "courseId": {
            "type": "string",
            "description": "ID of the course that this exception is associated with."
        },
        "columnId": {
            "type": "string",
            "description": "ID of the column that this exception is associated with."
        },
        "userId": {
            "type": "string",
            "description": "The user ID associated with this exception. If null check the group ID."
        },
        "gradableItemUserOptions": {
            "type": "object",
            "description": "Settings controlling date exception options of the gradable item to student.",
            "title": "blackboard.webapps.gradebook.publicapi.v1.GradableItemOverrideV1.GradableItemUserOptions",
            "properties": {
                "fixedDueDate": {
                    "type": "string",
                    "format": "date-time",
                    "description": "Fixed due date. Only used if Due Date Exception Type is LIMITED_FIXED."
                },
                "dueDateExceptionType": {
                    "type": "string",
                    "description": "The type of due date exception granted to this user.\n\nPossible values are:\n\n- NORMAL : The user/group has no due date exception, meaning the gradable item's due date applies to them.\n- LIMITED_FIXED : The user/group has a due date exception which is fixed or static, meaning that if the gradable item's due date changes, this exceptional due date will not.\n\n\n| Type      | Description\n | --------- | --------- |\n| Normal | The user/group has no due date exception, meaning the gradable item's due date applies to them. |\n| LimitedFixed | The user/group has a due date exception which is fixed or static, meaning that if the gradable item's due date changes, this exceptional due date will not. |\n| LimitedRelative | The user/group has a due date exception which is relative to the gradable item's due date, meaning that if the latter changes, then so does the former. |\n| Unlimited | The user/group has no due date, meaning the gradable item will never be marked as late for them. |\n",
                    "enum": [
                        "Normal",
                        "LimitedFixed",
                        "LimitedRelative",
                        "Unlimited"
                    ]
                }
            }
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling exceptional availability of the content to students. It only applies for assessment gradable items.",
            "title": "blackboard.webapps.gradebook.publicapi.v1.GradableItemOverrideV1.Availability",
            "properties": {}
        },
        "assessmentUserOptions": {
            "type": "object",
            "description": "Settings controlling exception options of the assessment to students. It only applies for assessment gradable items.",
            "title": "blackboard.webapps.gradebook.publicapi.v1.GradableItemOverrideV1.AssessmentUserOptions",
            "properties": {
                "attempts": {
                    "type": "integer",
                    "format": "int32",
                    "description": "The number of attempts allowed for related user. This will be null or absent if there are no overrides for the user/group it means the content item attempts will apply. Zero value means unlimited attempts. Negative values are not allowed."
                }
            }
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v1.GradableItemOverrideV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradableItemOverrideV1"
},
    requestType: "ColumnExceptionsPutExceptionsRequest",
    isMultipart: false,
    originalName: "putExceptions",
    isWrite: true
  } as ApiMethodInfo,

  deleteUserException: {
    description: "Deletes an exception associated with the course and gradable item for a user. The entitlement(course.gradebook-item.exceptions.MODIFY) is checked.\n\n**Since**: 3900.103.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/exceptions/users/{userId}",
    pathParams: [
    {
        "name": "columnId",
        "type": "string",
        "description": "The grade column ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.  The ID may also be the keyword 'finalGrade', which indicates that the course's final grade column is specified. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:column1                    |\n | finalGrade | finalGrade                            |\n ",
        "required": true
    },
    {
        "name": "userId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "ColumnExceptionsDeleteUserExceptionRequest",
    isMultipart: false,
    originalName: "deleteUserException",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const ColumnExceptionsHandlers = {
  getExceptionsByIds: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ColumnExceptionsMethods.getExceptionsByIds;
    
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

  getUserException: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ColumnExceptionsMethods.getUserException;
    
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

  putExceptions: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ColumnExceptionsMethods.putExceptions;
    
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

  deleteUserException: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ColumnExceptionsMethods.deleteUserException;
    
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
