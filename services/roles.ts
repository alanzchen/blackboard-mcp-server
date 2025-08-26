import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const RolesMethods: { [key: string]: ApiMethodInfo } = {
  getCourseRoles: {
    description: "\n\nReturns a list of course roles.  This list will contain all the course roles the context user has access to see. </p>\n\nIf the context user has this entitlement, then the user can see all course roles:\n\n- system.enrollment.CREATE\n</p>\n\nOtherwise, at least one of these course role entitlements are checked for any course the context user is enrolled in:\n\n- course.user-enroll.EXECUTE\n- system.enrollment.CREATE\n- course.user-role.MODIFY\n</p>\n\nIf the logged in user has at least one of those course role entitlements for a Course where Course.organization = false, then the user can see course roles where Availability.Available = Course or CourseAndOrganization </p>\n\nIf the logged in user has any of those course role entitlements for a Course where Course.organization = true, then the user can see course roles where Availability.Available = Organization or CourseAndOrganization </p>\n\nNote that these entitlements will not grant the user the ability to create, modify or delete course roles without permission. </p>\n\n**Since**: 3300.5.0",
    method: "get",
    path: "/learn/api/public/v1/courseRoles",
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
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\"\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "custom",
        "type": "boolean",
        "description": "Search course roles by whether they are a custom or system generated course role.\n\n**Since**: 3300.5.0",
        "required": false
    },
    {
        "name": "roleId",
        "type": "string",
        "description": "Search course roles using their roleId's.  Any course role with a roleId that contains the given string will be returned.  The search is case insensitive.\n\n**Since**: 3300.5.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "RolesGetCourseRolesRequest",
    isMultipart: false,
    originalName: "getCourseRoles",
    isWrite: false
  } as ApiMethodInfo,

  getCourseRole: {
    description: "\n\nReturns a single course role.  The path id can be either the CourseRole.id field like \"/courseRoles/_5_1\" or the CourseRole.roleId field like \"/courseRoles/roleId:Student\". </p>\n\nA 403 (FORBIDDEN) status is returned if the context user does not have access to see the course role. </p>\n\nIf the context user has this entitlement, then the user can see all course roles:\n\n- system.enrollment.CREATE\n</p>\n\nOtherwise, at least one of these course role entitlements are checked for any course the context user is enrolled in:\n\n- course.user-enroll.EXECUTE\n- system.enrollment.CREATE\n- course.user-role.MODIFY\n</p>\n\nIf the logged in user has at least one of those course role entitlements for a Course where Course.organization = false, then the user can see course roles where Availability.Available = Course or CourseAndOrganization </p>\n\nIf the logged in user has any of those course role entitlements for a Course where Course.organization = true, then the user can see course roles where Availability.Available = Organization or CourseAndOrganization </p>\n\nNote that these entitlements will not grant the user the ability to create, modify or delete course roles without permission. </p>\n\n**Since**: 3300.5.0",
    method: "get",
    path: "/learn/api/public/v1/courseRoles/{roleId}",
    pathParams: [
    {
        "name": "roleId",
        "type": "string",
        "description": "The course role ID.  This may be the primary ID, or the roleId. The suffix \":custom\" will be appended to the roleId of a custom course role if that roleId conflicts with the roleId of a system generated course role.  For example, if a custom role roleId is specified as \"Student\" then the roleId will actually be \"Student:custom\" since there is already a system generated course role with the roleId of \"Student\".  \n\n | ID type    | Examples                                                   |\n |------------|------------------------------------------------------------|\n | primary    | _123_1                                                     |\n | roleId     | roleId:Student, roleId:MyCustomRole, roleId:Student:custom |\n \n\n**Since**: 3300.5.0",
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
    requestType: "RolesGetCourseRoleRequest",
    isMultipart: false,
    originalName: "getCourseRole",
    isWrite: false
  } as ApiMethodInfo,

  getInstitutionRoles: {
    description: "Returns a list of institution roles.\n\nUsers must have the entitlement 'system.institutionrole.VIEW' to access this endpoint.\n\n**Since**: 3300.4.0",
    method: "get",
    path: "/learn/api/public/v1/institutionRoles",
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
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"roleId(desc)\" Supported fields are:\n\n- roleId\n- custom\n\n**Since**: 3300.4.0",
        "required": false
    },
    {
        "name": "roleId",
        "type": "string",
        "description": "Search for institution roles with roleId properties that contain this value.\n\n**Since**: 3300.4.0",
        "required": false
    },
    {
        "name": "custom",
        "type": "boolean",
        "description": "Search for institution roles by custom flag.  A value of 'true' indicates that search results should be limited to only custom roles.  A value of 'false' indicates results should be limited to built-in roles.  Not setting this field indicates that all institution roles should be returned.\n\n**Since**: 3300.4.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "RolesGetInstitutionRolesRequest",
    isMultipart: false,
    originalName: "getInstitutionRoles",
    isWrite: false
  } as ApiMethodInfo,

  getInstitutionRole: {
    description: "Loads a specific institution role.\n\nUsers must have the entitlement 'system.institutionrole.VIEW' to access this endpoint.\n\n**Since**: 3300.4.0",
    method: "get",
    path: "/learn/api/public/v1/institutionRoles/{roleId}",
    pathParams: [
    {
        "name": "roleId",
        "type": "string",
        "description": "The institution role ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | roleId     | roleId:STUDENT                        |\n \n\n**Since**: 3300.5.0",
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
    requestType: "RolesGetInstitutionRoleRequest",
    isMultipart: false,
    originalName: "getInstitutionRole",
    isWrite: false
  } as ApiMethodInfo,

  getSystemRoles: {
    description: "Returns a list of system roles.\n\nUsers must have the 'system.systemrole.manager.VIEW' entitlement to access this endpoint.\n\n**Since**: 3300.5.0",
    method: "get",
    path: "/learn/api/public/v1/systemRoles",
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
        "name": "roleId",
        "type": "string",
        "description": "Search for system roles with roleId\n\n**Since**: 3300.5.0",
        "required": false
    },
    {
        "name": "custom",
        "type": "boolean",
        "description": "Search for system roles by custom flag.  A value of 'true' indicates that search results should be limited to only custom roles.  A value of 'false' indicates results should be limited to built-in roles.  Not setting this field indicates that all system roles should be returned.\n\n**Since**: 3300.5.0",
        "required": false
    },
    {
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"roleId(desc)\"\n\nSupported fields are:\n\n<ul - roleId\n- custom\n\n**Since**: 3300.5.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "RolesGetSystemRolesRequest",
    isMultipart: false,
    originalName: "getSystemRoles",
    isWrite: false
  } as ApiMethodInfo,

  getSystemRole: {
    description: "Get a specific system role by roleId. See the roleId parameter for valid roleId formats.\n\nUsers must have the 'system.systemrole.manager.VIEW' entitlement to access this endpoint.\n\n**Since**: 3300.5.0",
    method: "get",
    path: "/learn/api/public/v1/systemRoles/{roleId}",
    pathParams: [
    {
        "name": "roleId",
        "type": "string",
        "description": "The System Role ID.  This may be the primary ID, or the secondary roleId type. The suffix \":custom\" will be appended to the roleId of a custom system role if that roleId conflicts with the roleId of a system generated role.  For example, if a custom role roleId is specified as \"Guest\" then the roleId will actually be \"Guest:custom\" since there is already a system generated role with the roleId of \"Guest\". \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | roleId     | roleId:column1                        |\n \n\n**Since**: 3300.5.0",
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
    requestType: "RolesGetSystemRoleRequest",
    isMultipart: false,
    originalName: "getSystemRole",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const RolesHandlers = {
  getCourseRoles: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RolesMethods.getCourseRoles;
    
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

  getCourseRole: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RolesMethods.getCourseRole;
    
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

  getInstitutionRoles: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RolesMethods.getInstitutionRoles;
    
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

  getInstitutionRole: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RolesMethods.getInstitutionRole;
    
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

  getSystemRoles: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RolesMethods.getSystemRoles;
    
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

  getSystemRole: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = RolesMethods.getSystemRole;
    
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
