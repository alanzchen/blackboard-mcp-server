import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const TermsMethods: { [key: string]: ApiMethodInfo } = {
  getTerms: {
    description: "Returns a list of terms.\n\nProperties returned for each term will depend on whether or not the caller has one of the term entitlements.\n\nCallers without either the entitlements 'term.VIEW' or 'term.MODIFY' will always get a minimal set of core properties:\n\n- id\n- name\n- description\n- availability.*\n\nIf the user has one of the entitlements, they will also get the following properties:\n\n- externalId\n- dataSourceId\n\n**Since**: 3000.1.0",
    method: "get",
    path: "/learn/api/public/v1/terms",
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
        "name": "externalId",
        "type": "string",
        "description": "Search for term with externalId properties that contain this value.\n\n**Since**: 3100.6.0",
        "required": false
    },
    {
        "name": "dataSourceId",
        "type": "string",
        "description": "Search for term with this dataSourceId.\n\n**Since**: 3100.6.0",
        "required": false
    },
    {
        "name": "availability.available",
        "type": "string",
        "description": "Search for users with availability.available properties that contain this value.\n\n**Since**: 3100.6.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the term and the courses it contains. |\n| No | Students may not access the term or the courses it contains. |\n",
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
    "properties": {
        "statusCode": {
            "readOnly": true,
            "$ref": "#/definitions/org.springframework.http.HttpStatusEnum"
        },
        "statusCodeValue": {
            "readOnly": true,
            "$ref": "#/definitions/int"
        }
    },
    "description": ""
},
    requestType: "TermsGetTermsRequest",
    isMultipart: false,
    originalName: "getTerms",
    isWrite: false
  } as ApiMethodInfo,

  createTerm: {
    description: "Creates a term.\n\nThe 'system.term.MODIFY' entitlement is needed.\n\n**Since**: 2015.11.0",
    method: "post",
    path: "/learn/api/public/v1/terms",
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
        "externalId": {
            "type": "string",
            "description": "An externally-defined unique ID for the term.\n\nFormerly known as 'sourcedidId'.",
            "maxLength": 256
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this term.  This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "name": {
            "type": "string",
            "description": "The name of the term.",
            "maxLength": 333
        },
        "description": {
            "type": "string",
            "format": "BbML",
            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
            "description": "The description of the term. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the term to students.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.terms.TermV1.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the term and the courses it contains are available to students.  Instructors can always access their courses.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the term and the courses it contains. |\n| No | Students may not access the term or the courses it contains. |\n",
                    "enum": [
                        "Yes",
                        "No"
                    ]
                },
                "duration": {
                    "type": "object",
                    "description": "Settings controlling the length of time the term is available.",
                    "title": "blackboard.webapps.blackboard.publicapi.v1.terms.TermV1.Availability.Duration",
                    "properties": {
                        "type": {
                            "type": "string",
                            "description": "The intended length of the term.  Possible values are:\n\n\n| Type      | Description\n | --------- | --------- |\n| Continuous | The term is active on an ongoing basis. This is the default. |\n| DateRange | The term will only be available between specific date ranges. |\n| FixedNumDays | The term will only be available for a set number of days. |\n",
                            "enum": [
                                "Continuous",
                                "DateRange",
                                "FixedNumDays"
                            ]
                        },
                        "start": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this term starts.  May only be set if availability.duration.type is DateRange."
                        },
                        "end": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this term ends.  May only be set if availability.duration.type is DateRange."
                        },
                        "daysOfUse": {
                            "type": "integer",
                            "format": "int32",
                            "description": "The number of days courses within this term can be used.  May only be set if availability.duration.type is FixedNumDays."
                        }
                    }
                }
            }
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.terms.TermV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1TermsTermV1"
},
    requestType: "TermsCreateTermRequest",
    isMultipart: false,
    originalName: "createTerm",
    isWrite: true
  } as ApiMethodInfo,

  getTerm: {
    description: "Loads a term.\n\nProperties returned will depend on whether or not the caller has one of the term entitlements.\n\nCallers without either the entitlements 'term.VIEW' or 'term.MODIFY' will always get a minimal set of core properties:\n\n- id\n- name\n- description\n- availability.*\n\nIf the user has one of the entitlements, they will also get the following properties:\n\n- externalId\n- dataSourceId\n\n**Since**: 2015.11.0",
    method: "get",
    path: "/learn/api/public/v1/terms/{termId}",
    pathParams: [
    {
        "name": "termId",
        "type": "string",
        "description": "The term ID.  This may be the primary ID, or the secondary ID prefixed with the ID type. \n\n | ID type    | Example                |\n |------------|------------------------|\n | primary    | _123_1                 |\n | externalId | externalId:spring.2016 |\n ",
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
    "ref": "blackboard.webapps.blackboard.publicapi.v1.terms.Term",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1TermsTerm"
},
    requestType: "TermsGetTermRequest",
    isMultipart: false,
    originalName: "getTerm",
    isWrite: false
  } as ApiMethodInfo,

  deleteTerm: {
    description: "Deletes a term.\n\nThe 'system.term.MODIFY' entitlement is needed.\n\n**Since**: 2015.11.0",
    method: "delete",
    path: "/learn/api/public/v1/terms/{termId}",
    pathParams: [
    {
        "name": "termId",
        "type": "string",
        "description": "The term ID.  This may be the primary ID, or the secondary ID prefixed with the ID type. \n\n | ID type    | Example                |\n |------------|------------------------|\n | primary    | _123_1                 |\n | externalId | externalId:spring.2016 |\n ",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "TermsDeleteTermRequest",
    isMultipart: false,
    originalName: "deleteTerm",
    isWrite: true
  } as ApiMethodInfo,

  updateTerm: {
    description: "Updates a term.\n\nThe 'system.term.MODIFY' entitlement is needed.\n\n**Since**: 2015.11.0",
    method: "patch",
    path: "/learn/api/public/v1/terms/{termId}",
    pathParams: [
    {
        "name": "termId",
        "type": "string",
        "description": "The term ID.  This may be the primary ID, or the secondary ID prefixed with the ID type. \n\n | ID type    | Example                |\n |------------|------------------------|\n | primary    | _123_1                 |\n | externalId | externalId:spring.2016 |\n ",
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
        "externalId": {
            "type": "string",
            "description": "An externally-defined unique ID for the term.\n\nFormerly known as 'sourcedidId'.",
            "maxLength": 256
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this term.  This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "name": {
            "type": "string",
            "description": "The name of the term.",
            "maxLength": 333
        },
        "description": {
            "type": "string",
            "format": "BbML",
            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
            "description": "The description of the term. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the term to students.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.terms.TermV1.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the term and the courses it contains are available to students.  Instructors can always access their courses.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the term and the courses it contains. |\n| No | Students may not access the term or the courses it contains. |\n",
                    "enum": [
                        "Yes",
                        "No"
                    ]
                },
                "duration": {
                    "type": "object",
                    "description": "Settings controlling the length of time the term is available.",
                    "title": "blackboard.webapps.blackboard.publicapi.v1.terms.TermV1.Availability.Duration",
                    "properties": {
                        "type": {
                            "type": "string",
                            "description": "The intended length of the term.  Possible values are:\n\n\n| Type      | Description\n | --------- | --------- |\n| Continuous | The term is active on an ongoing basis. This is the default. |\n| DateRange | The term will only be available between specific date ranges. |\n| FixedNumDays | The term will only be available for a set number of days. |\n",
                            "enum": [
                                "Continuous",
                                "DateRange",
                                "FixedNumDays"
                            ]
                        },
                        "start": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this term starts.  May only be set if availability.duration.type is DateRange."
                        },
                        "end": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this term ends.  May only be set if availability.duration.type is DateRange."
                        },
                        "daysOfUse": {
                            "type": "integer",
                            "format": "int32",
                            "description": "The number of days courses within this term can be used.  May only be set if availability.duration.type is FixedNumDays."
                        }
                    }
                }
            }
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.terms.Term",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1TermsTerm"
},
    requestType: "TermsUpdateTermRequest",
    isMultipart: false,
    originalName: "updateTerm",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const TermsHandlers = {
  getTerms: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = TermsMethods.getTerms;
    
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

  createTerm: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = TermsMethods.createTerm;
    
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

  getTerm: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = TermsMethods.getTerm;
    
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

  deleteTerm: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = TermsMethods.deleteTerm;
    
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

  updateTerm: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = TermsMethods.updateTerm;
    
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
