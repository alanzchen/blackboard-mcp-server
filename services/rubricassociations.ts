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
export const RubricAssociationsMethods: { [key: string]: ApiMethodInfo } = {
  getRubricAssociationsByColumnId: {
    description: "Returns the list of Rubric Associations related to the specified gradebook column within the specified course.\n\nUser must have the following entitlements in order to see the associations.\n\n- {@code course.rubrics.VIEW}\n- {@code course.gradebook-metadata.VIEW}\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.60.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/rubrics/associations",
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
    requestType: "RubricAssociationsGetRubricAssociationsByColumnIdRequest",
    isMultipart: false,
    originalName: "getRubricAssociationsByColumnId",
    isWrite: false
  } as ApiMethodInfo,

  getRubricAssociations: {
    description: "Returns a list of rubric associations for a given course Id and rubric Id. If provided course Id is from an Original course, associations might include both Gradebook and Assessments entities. If provided course Id is from an Ultra course, only associations with Gradebook entities will be fetched.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.VIEW}\n\n**Since**: 3900.60.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\"\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "RubricAssociationsGetRubricAssociationsRequest",
    isMultipart: false,
    originalName: "getRubricAssociations",
    isWrite: false
  } as ApiMethodInfo,

  createRubricAssociation: {
    description: "Creates a rubric association for a given course Id, rubric Id and association entity Id (can be a gradebook column or question Id).\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.CREATE}\n\n**Since**: 3900.86.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations",
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
    requestType: "RubricAssociationsCreateRubricAssociationRequest",
    isMultipart: false,
    originalName: "createRubricAssociation",
    isWrite: true
  } as ApiMethodInfo,

  getRubricAssociationById: {
    description: "Returns a rubric association for a given course Id, rubric Id and rubric association Id.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.VIEW}\n\n**Since**: 3900.60.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}",
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
    requestType: "RubricAssociationsGetRubricAssociationByIdRequest",
    isMultipart: false,
    originalName: "getRubricAssociationById",
    isWrite: false
  } as ApiMethodInfo,

  deleteRubricAssociation: {
    description: "Deletes a rubric association for a given course Id, rubric Id and rubric association Id.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.DELETE}\n\n**Since**: 3900.86.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}",
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
        "name": "forceDelete",
        "type": "boolean",
        "description": "By default, Rubric associations that were used to evaluate an activity or question cannot be deleted without user consent. Set this parameter to true if you want to delete an association with this condition. Any dependant gradebook grades will be considered as manual after deletion.",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "RubricAssociationsDeleteRubricAssociationRequest",
    isMultipart: false,
    originalName: "deleteRubricAssociation",
    isWrite: true
  } as ApiMethodInfo,

  updateRubricAssociation: {
    description: "Updates a rubric association for a given course Id, rubric Id and rubric association Id. The associated entity cannot be changed through this endpoint. Use create and delete to move rubric associations entities.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.MODIFY}\n\n**Since**: 3900.86.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}",
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
    requestType: "RubricAssociationsUpdateRubricAssociationRequest",
    isMultipart: false,
    originalName: "updateRubricAssociation",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const RubricAssociationsHandlers = {
  getRubricAssociationsByColumnId: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricAssociationsMethods.getRubricAssociationsByColumnId;
    
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

  getRubricAssociations: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricAssociationsMethods.getRubricAssociations;
    
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

  createRubricAssociation: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricAssociationsMethods.createRubricAssociation;
    
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

  getRubricAssociationById: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricAssociationsMethods.getRubricAssociationById;
    
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

  deleteRubricAssociation: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricAssociationsMethods.deleteRubricAssociation;
    
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

  updateRubricAssociation: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RubricAssociationsMethods.updateRubricAssociation;
    
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
