import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const CalendarMethods: { [key: string]: ApiMethodInfo } = {
  getCalendars: {
    description: "Get the list of calendars. This endpoint will return all calendars viewable by the user. All users can request a list of calendars viewable to them.\n\n**Since**: 3400.9.0",
    method: "get",
    path: "/learn/api/public/v1/calendars",
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
    requestType: "CalendarGetCalendarsRequest",
    isMultipart: false,
    originalName: "getCalendars",
    isWrite: false
  } as ApiMethodInfo,

  getCalendarItems: {
    description: "Get the list of calendar items. This endpoint will return all types of CalendarItems viewable by the user unless a specific <code>type</code> is specified as a query parameter.\n\nIf <code>since</code> and <code>since</code> are not provided this endpoint will default to the upcoming two week timeframe from now. </p>\n\nIf only <code>since</code> is provided this endpoint will default the <code>until</code> parameter two weeks after <code>since</code>. </p>\n\nIf only <code>until</code> is provided this endpoint will default the <code>since</code> parameter two prior to <code>until</code>. </p>\n\nMaximum timespan between <code>since</code> and <code>until</code> is 16 weeks. </p>\n\nCalendarItems of type <code>GradebookColumn</code> are a representation of a specific gradable item and therefore read-only. Modifications to GradebookColumn items performed via the Gradebook Column endpoints will be reflected in the CalendarItems endpoints. </p>\n\nThe CalendarItem <code>id</code> can be used as the <code>columnId</code> on the Gradebook Column endpoints found here: <code>/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}</code>. </p> Example requests:\n\n- <code>GET ../items?since=2018-01-01T00:00:00.000Z&until2018-02-01T00:00:00.000Z // all calendar items for a given timeframe</code>\n- <code>GET ../items?since=2018-01-01T00:00:00.000Z&until2018-02-01T00:00:00.000Z&courseId=_123_1 // all calendar items for a given course (including Course, OfficeHours, GradebookColumn types)</code>\n- <code>GET ../items?since=2018-01-01T00:00:00.000Z&until2018-02-01T00:00:00.000Z&courseId=_123_1&type=GradebookColumn // all GradebookColumn items for a course</code>\n- <code>GET ../items?since=2018-01-01T00:00:00.000Z&until2018-02-01T00:00:00.000Z&courseId=_123_1&type=OfficeHours // all OfficeHours for a course</code>\n- <code>GET ../items?since=2018-01-01T00:00:00.000Z&until2018-02-01T00:00:00.000Z&type=GradebookColumn // all gradebook columns due within the given timeframe</code>\n- <code>GET ../items?since=2018-01-01T00:00:00.000Z&until2018-02-01T00:00:00.000Z&type=OfficeHours // all OfficeHours available to current user for a given timeframe</code>\nThe following must be true in order to view the following calendar item types:\n\n- Institution\n-\n\n- All users can view Institution calendar items\n\n- Personal\n-\n\n- Any user may view their own calendar items, but not other user's calendar items\n\n- Course\n-\n\n- The user must have the 'course.calendar.VIEW' entitlement\n- The course calendar must be enabled for the course the calendar item is associated with\n\n- GradebookColumn\n-\n\n- The user must be enrolled in the course or have either the    *       `course.gradebook-metadata.VIEW` or `course.gradebook.MODIFY` entitlement\n- The user must have the 'course.calendar.VIEW' entitlement\n- The course calendar must be enabled for the course the GradebookColumn is associated with\n\n- OfficeHours\n-\n\n- If the OfficeHours are created for a course calendar (calendarId = a course id) the user must be enrolled in the course\n- If the OfficeHours are created for a all courses (calendarId = PERSONAL) the user must be enrolled in any course that the user owning the OfficeHours is also enrolled in\n- In either case above the course calendar must be enabled\n\n</p>\n\n**Since**: 3400.9.0",
    method: "get",
    path: "/learn/api/public/v1/calendars/items",
    pathParams: [],
    queryParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "Specifies only calendar items associated with 'courseId' are to be returned. NOTE: This is the course.id, not the course.courseId\n\n**Since**: 3400.9.0",
        "required": false
    },
    {
        "name": "type",
        "type": "string",
        "description": "Specifies only calendar items with the given type.\n\n**Since**: 3400.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Course |  |\n| GradebookColumn | Read only. |\n| Institution |  |\n| OfficeHours |  |\n| Personal |  |\n",
        "required": false
    },
    {
        "name": "since",
        "type": "string",
        "description": "Specifies only calendar items after the 'since' date (inclusive) are to be returned. Maximum of 16 weeks after the 'since' date will be returned. ISO-8601 date-time format is expected: [yyyy-MM-dd|yyyyMMdd][T(hh:mm[:ss[.sss]]|hhmm[ss[.sss]])]?[Z|[+-]hh:mm]]\n\n**Since**: 3400.9.0",
        "required": false
    },
    {
        "name": "until",
        "type": "string",
        "description": "Specifies only calendar items before the 'until' date (inclusive) are to be returned. Maximum of 16 weeks prior to the 'until' date will be returned. ISO-8601 date-time format is expected: [yyyy-MM-dd|yyyyMMdd][T(hh:mm[:ss[.sss]]|hhmm[ss[.sss]])]?[Z|[+-]hh:mm]]\n\n**Since**: 3400.9.0",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),start\" Supported fields are:\n\n- id\n- calendarId\n- title\n- start\n- end\n- modified\n\n**Since**: 3400.9.0",
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
    requestType: "CalendarGetCalendarItemsRequest",
    isMultipart: false,
    originalName: "getCalendarItems",
    isWrite: false
  } as ApiMethodInfo,

  createCalendarItem: {
    description: "\n\nCreate a calendar item. Calendar items may be single or recurring. </p>\n\nCalendarItems of type <code>OfficeHours</code> will be assigned to the current user. </p> The following must be true in order to create a calendar item:\n\n- Institution\n-\n\n- The user must have the 'system.calendar-item.EXECUTE' entitlement\n\n- Personal\n-\n\n- Any user may create their own calendar items\n\n- Course\n-\n\n- The user may be enrolled or unenrolled in the course\n- The user must have the 'course.calendar-entry.CREATE' entitlement\n- The course calendar must be enabled for the specified course\n\n- GradebookColumn\n-\n\n- GradebookColumns must be created using the Gradebook API endpoint: <code>POST /learn/api/public/v2/courses/{courseId}/gradebook/columns</code>\n\n- OfficeHours\n-\n\n- The user must have the 'course.calendar-entry.CREATE' entitlement\n- If calendarId = a course id the user may be enrolled or unenrolled in the course but should have the 'course.calendar-entry.CREATE' entitlement and the calendar must be enabled to create event\n- Note: To create for all enrolled courses calendarId must be set to PERSONAL\n\nIf the course calendar includes LTI deep link definition  it will be included in the calendar item. </p>\n\n**Since**: 3400.9.0",
    method: "post",
    path: "/learn/api/public/v1/calendars/items",
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
        "type": {
            "type": "string",
            "description": "The type of this Calendar Item.\n\n\n| Type      | Description\n | --------- | --------- |\n| Course |  |\n| GradebookColumn | Read only. |\n| Institution |  |\n| OfficeHours |  |\n| Personal |  |\n",
            "enum": [
                "Course",
                "GradebookColumn",
                "Institution",
                "OfficeHours",
                "Personal"
            ]
        },
        "calendarId": {
            "type": "string",
            "description": "Calendar source identifier which indicates the calendar on which the calendar item was created. Examples of possible values : \"PERSONAL\", \"INSTITUTION\", and course id in the format of \"_3_1\"."
        },
        "title": {
            "type": "string",
            "description": "Title of the calendar item. Title length cannot exceed 255 characters."
        },
        "description": {
            "type": "string",
            "description": "Description of the calendar item."
        },
        "location": {
            "type": "string",
            "description": "Location of the calendar item and it cannot exceed 1024 characters."
        },
        "start": {
            "type": "string",
            "format": "date-time",
            "description": "Start date of the calendar item either in the past if the calendar item is for an event that's already started OR in the future if it's for an event to start in the future. This is always set and should occur before the end date."
        },
        "end": {
            "type": "string",
            "format": "date-time",
            "description": "End date of the calendar item either in the past if the calendar item is for an event that's already end OR in the future if it's for an event to end in the future. This is always set and should occur after the start date."
        },
        "disableResizing": {
            "type": "boolean",
            "description": "Whether resizing of the calendar item should NOT be allowed."
        },
        "dynamicCalendarItemProps": {
            "type": "object",
            "description": "Extra calendar item properties if it is a GradebookColumn calendar item.",
            "title": "blackboard.plugin.calendar.publicapi.v1.CalendarItemV1.DynamicCalendarItemPropsTOPub",
            "readOnly": true,
            "properties": {
                "attemptable": {
                    "type": "boolean",
                    "description": "The dynamic calendar item can be attempted (can have attempts made against it) and the current user (in context) has permission/entitlement to grade attempts for the object represented by this calendar item."
                },
                "categoryId": {
                    "type": "string",
                    "description": "Returns the gradeableItem categoryId value .it is only set if the calendar event is dynamically created based on a single grade book column"
                },
                "dateRangeLimited": {
                    "type": "boolean",
                    "description": "The dynamic calendar item is only visible during a specific windows of time."
                },
                "eventType": {
                    "type": "string",
                    "description": "Returns a human readable string describing the type of calendar item represented (e.g. assignment, test, etc.)."
                },
                "gradable": {
                    "type": "boolean",
                    "description": "The dynamic calendar item can be graded and the current user (in context) has permission/entitlement to grade attempts for the object represented by this calendar item."
                }
            }
        },
        "recurrence": {
            "description": "Recurring definition if the calendar item is a repeatable calendar item. This object must be defined for <code>OfficeHours</code> type calendar items.",
            "$ref": "#/definitions/blackboard.plugin.calendar.publicapi.v1.CalendarItemRecurrence"
        },
        "ltiLaunchDeepLink": {
            "description": "Learning Tools Interoperability (LTI) link definition if available. This object must be defined for <code>Course</code> type calendar item.",
            "$ref": "#/definitions/blackboard.plugin.calendar.publicapi.v1.LTILaunchDeepLink"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.calendar.publicapi.v1.CalendarItemV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginCalendarPublicapiV1CalendarItemV1"
},
    requestType: "CalendarCreateCalendarItemRequest",
    isMultipart: false,
    originalName: "createCalendarItem",
    isWrite: true
  } as ApiMethodInfo,

  getCalendarItem: {
    description: "\n\nGet a course calendar item. </p>\n\nCalendarItems of type <code>GradebookColumn</code> are a representation of a specific gradable item and therefore read-only. Modifications to GradebookColumn items performed via the Gradebook Column endpoints will be reflected in the CalendarItems endpoints. </p>\n\nThe CalendarItem <code>id</code> can be used as the <code>columnId</code> on the Gradebook Column endpoints found here: <code>/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}</code>. </p> The following must be true in order to view the following calendar items types:\n\n- Institution\n-\n\n- All users can view Institution calendar items\n\n- Personal\n-\n\n- Any user may view their own calendar items, but not other user's calendar items\n\n- Course\n-\n\n- The user must have the 'course.calendar.VIEW' entitlement\n- The course calendar must be enabled for the course the calendar item is associated with\n\n- GradebookColumn\n-\n\n- The user must be enrolled in the course OR they must have either the       `course.gradebook-metadata.VIEW` or `course.gradebook.MODIFY` entitlement\n- The user must have the 'course.calendar.VIEW' entitlement\n- The course calendar must be enabled for the course the GradebookColumn is associated with\n\n- OfficeHours\n-\n\n- If the OfficeHours are created for a course calendar (calendarId = a course id) the user must be enrolled in the course\n- If the OfficeHours are created for a all courses (calendarId = PERSONAL) the user must be enrolled in any course that the user owning the OfficeHours is also enrolled in\n- In either case above the course calendar must be enabled\n\n**Since**: 3400.9.0",
    method: "get",
    path: "/learn/api/public/v1/calendars/items/{calendarItemType}/{calendarItemId}",
    pathParams: [
    {
        "name": "calendarItemType",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "calendarItemId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.plugin.calendar.publicapi.v1.CalendarItem",
    "typeName": "BlackboardPluginCalendarPublicapiV1CalendarItem"
},
    requestType: "CalendarGetCalendarItemRequest",
    isMultipart: false,
    originalName: "getCalendarItem",
    isWrite: false
  } as ApiMethodInfo,

  deleteCalendarItem: {
    description: "\n\nDelete a calendar item or series. </p> The following must be true in order to delete a calendar item:\n\n- Institution\n-\n\n- The user must have the 'system.calendar-item.EXECUTE' entitlement\n\n- Personal\n-\n\n- Any user may delete their own calendar items\n\n- Course\n-\n\n- The user may be enrolled or unenrolled in the course\n- The user must have the 'course.calendar.VIEW' entitlement\n- The user must have the 'course.calendar-entry.DELETE' entitlement\n- The course calendar must be enabled for the specified course\n\n- GradebookColumn\n-\n\n- GradebookColumns must be deleted using the Gradebook API endpoint: <code>DELETE /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}</code>\n\n- OfficeHours\n-\n\n- The user must have the 'course.calendar-entry.MODIFY' entitlement\n- The user must own the calendarItem\n- The calendar must be enabled if the calendarItem is associated with a course calendar.\n\n**Since**: 3400.9.0",
    method: "delete",
    path: "/learn/api/public/v1/calendars/items/{calendarItemType}/{calendarItemId}",
    pathParams: [
    {
        "name": "calendarItemType",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "calendarItemId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CalendarDeleteCalendarItemRequest",
    isMultipart: false,
    originalName: "deleteCalendarItem",
    isWrite: true
  } as ApiMethodInfo,

  updateCalendarItem: {
    description: "\n\nUpdate a calendar item or series. </p>\n\nWhen updating the series the existing CalendarItems will be removed and a new set of CalendarItems will be created. This is the same behavior as experienced via the UI. </p> The following must be true in order to update a calendar item:\n\n- Institution\n-\n\n- The user must have the 'system.calendar-item.EXECUTE' entitlement\n\n- Personal\n-\n\n- Any user may update their own calendar items\n\n- Course\n-\n\n- The user may be enrolled or unenrolled in the course\n- The user must have the 'course.calendar-entry.MODIFY' entitlement\n- The user must have the 'course.calendar.VIEW' entitlement\n- The course calendar must be enabled for the specified course\n\n- GradebookColumn\n-\n\n- GradebookColumns must be updated using the Gradebook API endpoint: <code>PATCH /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}</code>\n\n- OfficeHours\n-\n\n- The user must have the 'course.calendar-entry.MODIFY' entitlement\n- If calendarId = a course id the user may be enrolled or unenrolled in the course but should have the 'course.calendar-entry.MODIFY' entitlement  and the calendar must be enabled\n\nIf the course calendar includes LTI deep link definition  it will be updated in the calendar item.\n\n**Since**: 3400.9.0",
    method: "patch",
    path: "/learn/api/public/v1/calendars/items/{calendarItemType}/{calendarItemId}",
    pathParams: [
    {
        "name": "calendarItemType",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "calendarItemId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CalendarUpdateCalendarItemRequest",
    isMultipart: false,
    originalName: "updateCalendarItem",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const CalendarHandlers = {
  getCalendars: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CalendarMethods.getCalendars;
    
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

  getCalendarItems: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CalendarMethods.getCalendarItems;
    
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

  createCalendarItem: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CalendarMethods.createCalendarItem;
    
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

  getCalendarItem: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CalendarMethods.getCalendarItem;
    
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

  deleteCalendarItem: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CalendarMethods.deleteCalendarItem;
    
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

  updateCalendarItem: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CalendarMethods.updateCalendarItem;
    
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
