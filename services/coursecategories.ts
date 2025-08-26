import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter, ApiSchema } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const CourseCategoriesMethods: { [key: string]: ApiMethodInfo } = {
  getCategories: {
    description: "Returns a list of categories of the provided type (course or organization)\n\nEntitlement system.course-categories.VIEW required\n\nUsers with entitlement \"system.course.categories.MODIFY\" for course categories, or \"system.org.categories.MODIFY\" for organization categories can view all fields and all categories.\n\nUsers with system.course-categories.VIEW but not the corresponding MODIFY entitlements have read access to all properties except:\n\n- restricted\n- institutionRoleIds\nIn addition, users without the corresponding MODIFY entitlement have access to a restricted category only if their institution role matches one of the roles in the institutionRoleIds list for that category.\n\n**Since**: 3600.0.0",
    method: "get",
    path: "/learn/api/public/v1/catalog/categories/{categoryType}",
    pathParams: [
    {
        "name": "categoryType",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [
    {
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),start\" Supported fields are:\n\n- id\n- categoryId\n- title\n- available\n- created\n\n**Since**: 3700.6.0",
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
        "name": "title",
        "type": "string",
        "description": "Search for categories with titles that contain this value.\n\n**Since**: 3700.8.0",
        "required": false
    },
    {
        "name": "categoryId",
        "type": "string",
        "description": "Search for categories with category IDs that contain this value.\n\n**Since**: 3700.8.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for categories with a created date relative to this value.\n\n**Since**: 3700.8.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "dataSourceId",
        "type": "string",
        "description": "Search for categories with a data source id matching this value.\n\n**Since**: 3700.9.0",
        "required": false
    },
    {
        "name": "frontPage",
        "type": "boolean",
        "description": "Search for categories with a front page indicator matching this value.\n\n**Since**: 3700.9.0",
        "required": false
    },
    {
        "name": "available",
        "type": "boolean",
        "description": "Search for categories with availability matching this value.\n\n**Since**: 3700.9.0",
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
    requestType: "CourseCategoriesGetCategoriesRequest",
    isMultipart: false,
    originalName: "getCategories",
    isWrite: false
  } as ApiMethodInfo,

  createCategory: {
    description: "Creates a new category of the provided type as defined in the request body\n\nEntitlement system.course.categories.MODIFY required to create course categories Entitlement system.org.categories.MODIFY required to create organization categories\n\n**Since**: 3600.0.0",
    method: "post",
    path: "/learn/api/public/v1/catalog/categories/{categoryType}",
    pathParams: [
    {
        "name": "categoryType",
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
        "parentId": {
            "type": "string",
            "description": "The ID of this category's parent category"
        },
        "categoryId": {
            "type": "string",
            "description": "The human-readable id of the category"
        },
        "title": {
            "type": "string",
            "description": "The title of category"
        },
        "description": {
            "type": "string",
            "description": "The description of the category"
        },
        "frontPage": {
            "type": "boolean",
            "description": "Boolean indicating whether or not the category should appear on the catalog front page"
        },
        "available": {
            "type": "boolean",
            "description": "Boolean indicating whether or not the category is available"
        },
        "restricted": {
            "type": "boolean",
            "description": "Boolean indicating whether or not category is available to all roles, or restricted to a specific set of roles."
        },
        "institutionRoleIds": {
            "description": "The roles for which this category is available, if category is set to restricted. Not populated for lists of categories, only for individual category",
            "$ref": "#/definitions/java.util.List<java.lang.String>"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.categories.CategoryV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CategoriesCategoryV1"
},
    requestType: "CourseCategoriesCreateCategoryRequest",
    isMultipart: false,
    originalName: "createCategory",
    isWrite: true
  } as ApiMethodInfo,

  getCategory: {
    description: "Returns the category corresponding the provided type (course or organization) and ID\n\nEntitlement system.course-categories.VIEW required\n\nUsers with entitlement \"system.course.categories.MODIFY\" for course categories, or \"system.org.categories.MODIFY\" for organization categories can view all fields and all categories.\n\nUsers with system.course-categories.VIEW but not the corresponding MODIFY entitlements have read access to all properties except:\n\n- restricted\n- institutionRoleIds\nIn addition, users without the corresponding MODIFY entitlement have access to a restricted category only if their institution role matches one of the roles in the institutionRoleIds list for that category.\n\n**Since**: 3600.0.0",
    method: "get",
    path: "/learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}",
    pathParams: [
    {
        "name": "categoryType",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "categoryId",
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
    "ref": "blackboard.webapps.blackboard.publicapi.v1.categories.Category",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1CategoriesCategory"
},
    requestType: "CourseCategoriesGetCategoryRequest",
    isMultipart: false,
    originalName: "getCategory",
    isWrite: false
  } as ApiMethodInfo,

  deleteCategory: {
    description: "Deletes the category corresponding to the provided type and id\n\nEntitlement system.course.categories.MODIFY required to delete a course category Entitlement system.org.categories.MODIFY required to delete an organization category\n\n**Since**: 3600.0.0",
    method: "delete",
    path: "/learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}",
    pathParams: [
    {
        "name": "categoryType",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "categoryId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CourseCategoriesDeleteCategoryRequest",
    isMultipart: false,
    originalName: "deleteCategory",
    isWrite: true
  } as ApiMethodInfo,

  updateCategory: {
    description: "Updates the category corresponding to the provided type and id.\n\nEntitlement system.course.categories.MODIFY required to modify course categories Entitlement system.org.categories.MODIFY required to modify organization categories\n\n**Since**: 3600.0.0",
    method: "patch",
    path: "/learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}",
    pathParams: [
    {
        "name": "categoryType",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "categoryId",
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
        "title": {
            "type": "string",
            "description": "The title of category"
        },
        "description": {
            "type": "string",
            "description": "The description of the category"
        },
        "frontPage": {
            "type": "boolean",
            "description": "Boolean indicating whether or not the category should appear on the catalog front page"
        },
        "available": {
            "type": "boolean",
            "description": "Boolean indicating whether or not the category is available"
        },
        "restricted": {
            "type": "boolean",
            "description": "Boolean indicating whether or not category is available to all roles, or restricted to a specific set of roles."
        },
        "institutionRoleIds": {
            "description": "The roles for which this category is available, if category is set to restricted. Not populated for lists of categories, only for individual category",
            "$ref": "#/definitions/java.util.List<java.lang.String>"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.categories.Category",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1CategoriesCategory"
},
    requestType: "CourseCategoriesUpdateCategoryRequest",
    isMultipart: false,
    originalName: "updateCategory",
    isWrite: true
  } as ApiMethodInfo,

  getMemberships: {
    description: "Get courses associated with the provided category. Entitlement system.course-categories.VIEW required\n\n**Since**: 3600.0.0",
    method: "get",
    path: "/learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}/courses",
    pathParams: [
    {
        "name": "categoryType",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "categoryId",
        "type": "string",
        "description": "",
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
    },
    {
        "name": "expand",
        "type": "string",
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>course</li></ul>",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "object",
    "properties": {},
    "description": ""
},
    requestType: "CourseCategoriesGetMembershipsRequest",
    isMultipart: false,
    originalName: "getMemberships",
    isWrite: false
  } as ApiMethodInfo,

  createMembership: {
    description: "Creates a category/course association. The course defined by courseId must match the categoryType.\n\nThe 'admin.course.categorize.MODIFY' entitlement is needed for course associations The 'admin.org.categorize.MODIFY' entitlement is needed for organization associations\n\n**Since**: 3600.0.0",
    method: "put",
    path: "/learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}/courses/{courseId}",
    pathParams: [
    {
        "name": "categoryType",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "categoryId",
        "type": "string",
        "description": "",
        "required": true
    },
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
    requestBodySchema: null,
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.categories.CategoryCourseMembershipV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CategoriesCategoryCourseMembershipV1"
},
    requestType: "CourseCategoriesCreateMembershipRequest",
    isMultipart: false,
    originalName: "createMembership",
    isWrite: true
  } as ApiMethodInfo,

  deleteMembership: {
    description: "Deletes a category/course association\n\nThe 'admin.course.categorize.MODIFY' entitlement is needed for course associations The 'admin.org.categorize.MODIFY' entitlement is needed for organization associations\n\n**Since**: 3600.0.0",
    method: "delete",
    path: "/learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}/courses/{courseId}",
    pathParams: [
    {
        "name": "categoryType",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "categoryId",
        "type": "string",
        "description": "",
        "required": true
    },
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
    requestType: "CourseCategoriesDeleteMembershipRequest",
    isMultipart: false,
    originalName: "deleteMembership",
    isWrite: true
  } as ApiMethodInfo,

  getChildCategories: {
    description: "Returns a list of categories which are children of the category corresponding to the provided type (course or organization) and Id\n\nEntitlement system.course-categories.VIEW required\n\nUsers with entitlement \"system.course.categories.MODIFY\" for course categories, or \"system.org.categories.MODIFY\" for organization categories can view all fields and all categories.\n\nUsers with system.course-categories.VIEW but not the corresponding MODIFY entitlements have read access to all properties except:\n\n- restricted\n- institutionRoleIds\nIn addition, users without the corresponding MODIFY entitlement have access to a restricted category only if their institution role matches one of the roles in the institutionRoleIds list for that category.\n\n**Since**: 3600.0.0",
    method: "get",
    path: "/learn/api/public/v1/catalog/categories/{categoryType}/{parentId}/children",
    pathParams: [
    {
        "name": "categoryType",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "parentId",
        "type": "string",
        "description": "",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),start\" Supported fields are:\n\n- id\n- categoryId\n- title\n- available\n- created\n\n**Since**: 3700.6.0",
        "required": false
    },
    {
        "name": "title",
        "type": "string",
        "description": "Search for categories with titles that contain this value.\n\n**Since**: 3700.8.0",
        "required": false
    },
    {
        "name": "categoryId",
        "type": "string",
        "description": "Search for categories with category IDs that contain this value.\n\n**Since**: 3700.8.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for categories with a created date relative to this value.\n\n**Since**: 3700.8.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "dataSourceId",
        "type": "string",
        "description": "Search for categories with a data source id matching this value.\n\n**Since**: 3700.9.0",
        "required": false
    },
    {
        "name": "frontPage",
        "type": "boolean",
        "description": "Search for categories with a front page indicator matching this value.\n\n**Since**: 3700.9.0",
        "required": false
    },
    {
        "name": "available",
        "type": "boolean",
        "description": "Search for categories with availability matching this value.\n\n**Since**: 3700.9.0",
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
    requestType: "CourseCategoriesGetChildCategoriesRequest",
    isMultipart: false,
    originalName: "getChildCategories",
    isWrite: false
  } as ApiMethodInfo,

  getMemberships2: {
    description: "Get categories associated with the provided course. Entitlement system.course-categories.VIEW required\n\n**Since**: 3600.0.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/categories",
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
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    },
    {
        "name": "expand",
        "type": "string",
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>category</li></ul>",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "object",
    "properties": {},
    "description": ""
},
    requestType: "CourseCategoriesGetMemberships2Request",
    isMultipart: false,
    originalName: "getMemberships",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const CourseCategoriesHandlers = {
  getCategories: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseCategoriesMethods.getCategories;
    
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

  createCategory: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseCategoriesMethods.createCategory;
    
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

  getCategory: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseCategoriesMethods.getCategory;
    
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

  deleteCategory: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseCategoriesMethods.deleteCategory;
    
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

  updateCategory: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseCategoriesMethods.updateCategory;
    
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

  getMemberships: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseCategoriesMethods.getMemberships;
    
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

  createMembership: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseCategoriesMethods.createMembership;
    
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

  deleteMembership: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseCategoriesMethods.deleteMembership;
    
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

  getChildCategories: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseCategoriesMethods.getChildCategories;
    
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

  getMemberships2: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseCategoriesMethods.getMemberships2;
    
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
