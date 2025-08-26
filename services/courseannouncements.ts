import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const CourseAnnouncementsMethods: { [key: string]: ApiMethodInfo } = {
  getAnnouncements: {
    description: "Return a list of Course Announcements. Users with the 'course.announcements.VIEW' entitlement can view 'available' Course Announcements. Users with the 'course.announcements.VIEW' &amp; 'course.announcements.MODIFY' entitlement can view 'available' &amp; 'unavailable' Course Announcements.\n\nThe response supports the <code>expand=readCount</code> query parameter. When specified, each announcement in the result will include the <code>readCount</code> field, indicating the number of users who have viewed the announcement. For draft announcements or when read tracking is disabled, the <code>readCount</code> field will be set to <code>-1</code>. </p>\n\n**Since**: 3500.3.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/announcements",
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
        "name": "creatorUserId",
        "type": "string",
        "description": "Search for announcements with creator user id equal to this value.\n\n**Since**: 3900.89.0.",
        "required": false
    },
    {
        "name": "creatorUsername",
        "type": "string",
        "description": "Search for announcements with creator username equal to this value.\n\n**Since**: 3900.89.0.",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for announcements with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3500.3.0",
        "required": false
    },
    {
        "name": "createdUntil",
        "type": "string",
        "description": "Search announcements with created date less than or equal to this value. 'createdCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3500.3.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for announcements with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3500.3.0",
        "required": false
    },
    {
        "name": "modifiedUntil",
        "type": "string",
        "description": "Search announcements with modified date less than or equal to this value. 'modifiedCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3500.3.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n",
        "required": false
    },
    {
        "name": "title",
        "type": "string",
        "description": "Search for announcements with a title like the provided value.\n\n**Since**: 3500.3.0",
        "required": false
    },
    {
        "name": "startDate",
        "type": "string",
        "description": "Search announcements with start date relative to this value. 'startAnnouncementsDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.92.0",
        "required": false
    },
    {
        "name": "startDateUntil",
        "type": "string",
        "description": "Search announcements with start date relative to this value. 'startAnnouncementsDateCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0",
        "required": false
    },
    {
        "name": "startDateCompare",
        "type": "string",
        "description": "Used alongside the 'startDate' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3900.92.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n",
        "required": false
    },
    {
        "name": "endDate",
        "type": "string",
        "description": "Search announcements with end date relative to this value. 'endAnnouncementsDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.92.0",
        "required": false
    },
    {
        "name": "endDateUntil",
        "type": "string",
        "description": "Search announcements with end date relative to this value. 'endAnnouncementsDateCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0",
        "required": false
    },
    {
        "name": "endDateCompare",
        "type": "string",
        "description": "Used alongside the 'endDate' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3900.92.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n",
        "required": false
    },
    {
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),created\" Supported fields are:\n\n- title\n- modified\n\n**Since**: 3500.3.0",
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
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>studentReadCount</li></ul>",
        "required": false
    }
],
    requestType: "CourseAnnouncementsGetAnnouncementsRequest",
    isMultipart: false,
    originalName: "getAnnouncements",
    isWrite: false
  } as ApiMethodInfo,

  createAnnouncement: {
    description: "Create a Course Announcement. Users with the 'course.announcements.CREATE' and 'course.announcements.VIEW' entitlements can create Course Announcements.\n\n**Since**: 3500.3.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/announcements",
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
    requestType: "CourseAnnouncementsCreateAnnouncementRequest",
    isMultipart: false,
    originalName: "createAnnouncement",
    isWrite: true
  } as ApiMethodInfo,

  getAnnouncement: {
    description: "Get a Course Announcement. Users with the 'course.announcements.VIEW' entitlement can view 'available' Course Announcements. Users with the 'course.announcements.VIEW' &amp; 'course.announcements.MODIFY' entitlement can view 'available' &amp; 'unavailable' Course Announcements.\n\n**Since**: 3500.3.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/announcements/{announcementId}",
    pathParams: [
    {
        "name": "announcementId",
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
    },
    {
        "name": "expand",
        "type": "string",
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>studentReadCount</li></ul>",
        "required": false
    }
],
    requestType: "CourseAnnouncementsGetAnnouncementRequest",
    isMultipart: false,
    originalName: "getAnnouncement",
    isWrite: false
  } as ApiMethodInfo,

  deleteAnnouncement: {
    description: "Delete a Course Announcement. Users with the 'course.announcements.DELETE' and 'course.announcements.VIEW' entitlements can delete Course Announcements.\n\n**Since**: 3500.3.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/announcements/{announcementId}",
    pathParams: [
    {
        "name": "announcementId",
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
    requestType: "CourseAnnouncementsDeleteAnnouncementRequest",
    isMultipart: false,
    originalName: "deleteAnnouncement",
    isWrite: true
  } as ApiMethodInfo,

  updateAnnouncement: {
    description: "Update a Course Announcement. Users with the 'course.announcements.MODIFY' and 'course.announcements.VIEW' entitlements can update Course Announcements.\n\n**Since**: 3500.3.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/announcements/{announcementId}",
    pathParams: [
    {
        "name": "announcementId",
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
    requestType: "CourseAnnouncementsUpdateAnnouncementRequest",
    isMultipart: false,
    originalName: "updateAnnouncement",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const CourseAnnouncementsHandlers = {
  getAnnouncements: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseAnnouncementsMethods.getAnnouncements;
    
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

  createAnnouncement: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseAnnouncementsMethods.createAnnouncement;
    
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

  getAnnouncement: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseAnnouncementsMethods.getAnnouncement;
    
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

  deleteAnnouncement: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseAnnouncementsMethods.deleteAnnouncement;
    
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

  updateAnnouncement: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseAnnouncementsMethods.updateAnnouncement;
    
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
