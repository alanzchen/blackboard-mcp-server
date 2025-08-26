import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter, ApiSchema } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const AnnouncementsMethods: { [key: string]: ApiMethodInfo } = {
  getAnnouncements: {
    description: "Return a list of System Announcements. Users with the 'system.announcements.VIEW' entitlement can view 'available' System Announcements. Users with the 'system.announcements.admin.VIEW' entitlement can view 'available' &amp; 'unavailable' System Announcements.\n\n**Since**: 3100.7.0",
    method: "get",
    path: "/learn/api/public/v1/announcements",
    pathParams: [],
    queryParams: [
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
    requestBodySchema: null,
    responseSchema: {
    "type": "object",
    "properties": {},
    "description": ""
},
    requestType: "AnnouncementsGetAnnouncementsRequest",
    isMultipart: false,
    originalName: "getAnnouncements",
    isWrite: false
  } as ApiMethodInfo,

  createAnnouncement: {
    description: "Create a System Announcement. Users with the 'system.announcements.CREATE' entitlement can create System Announcements.\n\n**Since**: 3100.7.0",
    method: "post",
    path: "/learn/api/public/v1/announcements",
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
        "title": {
            "type": "string",
            "description": "The title of this System Announcement."
        },
        "body": {
            "type": "string",
            "format": "BbML",
            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
            "description": "The message body of the System Announcement. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the System Announcement.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.announcements.AnnouncementV1.Availability",
            "properties": {
                "duration": {
                    "type": "object",
                    "description": "Duration indicates when the System Announcement is Available based on whether it is Permanent or if the date/time of the request falls within its Start &amp; End dates.",
                    "title": "blackboard.webapps.blackboard.publicapi.v1.announcements.AnnouncementV1.Availability.Duration",
                    "properties": {
                        "type": {
                            "type": "string",
                            "description": "Indicates whether this System Announcement is always displayed (Permanent) or if it is shown only between the Start and End dates (Restricted).\n\n\n| Type      | Description\n | --------- | --------- |\n| Permanent | The Announcement will always be displayed. |\n| Restricted | The Announcement will start being displayed on Duration.Start and stop being displayed on Duration.End |\n",
                            "enum": [
                                "Permanent",
                                "Restricted"
                            ]
                        },
                        "start": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this Announcement starts being Available."
                        },
                        "end": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this Announcement stops being Available."
                        }
                    }
                }
            }
        },
        "showAtLogin": {
            "type": "boolean",
            "description": "Whether this System Announcement should be displayed on the login page."
        },
        "showInCourses": {
            "type": "boolean",
            "description": "Whether this System Announcement should be displayed on courses."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.announcements.AnnouncementV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AnnouncementsAnnouncementV1"
},
    requestType: "AnnouncementsCreateAnnouncementRequest",
    isMultipart: false,
    originalName: "createAnnouncement",
    isWrite: true
  } as ApiMethodInfo,

  getAnnouncement: {
    description: "Get a System Announcement. Users with the 'system.announcements.VIEW' entitlement can view 'available' System Announcements. Users with the 'system.announcements.admin.VIEW' entitlement can view 'available' &amp; 'unavailable' System Announcements.\n\n**Since**: 3100.7.0",
    method: "get",
    path: "/learn/api/public/v1/announcements/{announcementId}",
    pathParams: [
    {
        "name": "announcementId",
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
    "ref": "blackboard.webapps.blackboard.publicapi.v1.announcements.Announcement",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1AnnouncementsAnnouncement"
},
    requestType: "AnnouncementsGetAnnouncementRequest",
    isMultipart: false,
    originalName: "getAnnouncement",
    isWrite: false
  } as ApiMethodInfo,

  deleteAnnouncement: {
    description: "Delete a System Announcement. Users with the 'system.announcements.DELETE' entitlement can delete System Announcements.\n\n**Since**: 3100.7.0",
    method: "delete",
    path: "/learn/api/public/v1/announcements/{announcementId}",
    pathParams: [
    {
        "name": "announcementId",
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
    responseSchema: null,
    requestType: "AnnouncementsDeleteAnnouncementRequest",
    isMultipart: false,
    originalName: "deleteAnnouncement",
    isWrite: true
  } as ApiMethodInfo,

  updateAnnouncement: {
    description: "Update a System Announcement. Users with the 'system.announcements.MODIFY' entitlement can update System Announcements.\n\n**Since**: 3100.7.0",
    method: "patch",
    path: "/learn/api/public/v1/announcements/{announcementId}",
    pathParams: [
    {
        "name": "announcementId",
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
            "description": "The title of this System Announcement."
        },
        "body": {
            "type": "string",
            "format": "BbML",
            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
            "description": "The message body of the System Announcement. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the System Announcement.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.announcements.AnnouncementV1.Availability",
            "properties": {
                "duration": {
                    "type": "object",
                    "description": "Duration indicates when the System Announcement is Available based on whether it is Permanent or if the date/time of the request falls within its Start &amp; End dates.",
                    "title": "blackboard.webapps.blackboard.publicapi.v1.announcements.AnnouncementV1.Availability.Duration",
                    "properties": {
                        "type": {
                            "type": "string",
                            "description": "Indicates whether this System Announcement is always displayed (Permanent) or if it is shown only between the Start and End dates (Restricted).\n\n\n| Type      | Description\n | --------- | --------- |\n| Permanent | The Announcement will always be displayed. |\n| Restricted | The Announcement will start being displayed on Duration.Start and stop being displayed on Duration.End |\n",
                            "enum": [
                                "Permanent",
                                "Restricted"
                            ]
                        },
                        "start": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this Announcement starts being Available."
                        },
                        "end": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this Announcement stops being Available."
                        }
                    }
                }
            }
        },
        "showAtLogin": {
            "type": "boolean",
            "description": "Whether this System Announcement should be displayed on the login page."
        },
        "showInCourses": {
            "type": "boolean",
            "description": "Whether this System Announcement should be displayed on courses."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.announcements.Announcement",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1AnnouncementsAnnouncement"
},
    requestType: "AnnouncementsUpdateAnnouncementRequest",
    isMultipart: false,
    originalName: "updateAnnouncement",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const AnnouncementsHandlers = {
  getAnnouncements: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AnnouncementsMethods.getAnnouncements;
    
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

  createAnnouncement: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AnnouncementsMethods.createAnnouncement;
    
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

  getAnnouncement: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AnnouncementsMethods.getAnnouncement;
    
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
    const methodInfo = AnnouncementsMethods.deleteAnnouncement;
    
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
    const methodInfo = AnnouncementsMethods.updateAnnouncement;
    
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
