import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter, ApiSchema } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const CourseAssessmentsMethods: { [key: string]: ApiMethodInfo } = {
  getQuestions: {
    description: "Get the list of questions for an Ultra Assessment.\n\nEither 'course.assessment.CREATE' or 'course.assessment.MODIFY' entitlement is needed to view questions. If the assessment has the external submissions setting enabled, then either the 'course.assessment.VIEW' or 'course.assessment.EXECUTE' entitlement is needed to view questions, and only presentation questions are returned.\n\n**Since**: 3300.9.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "assessmentId",
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
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "object",
    "properties": {},
    "description": ""
},
    requestType: "CourseAssessmentsGetQuestionsRequest",
    isMultipart: false,
    originalName: "getQuestions",
    isWrite: false
  } as ApiMethodInfo,

  createQuestion: {
    description: "Creates a question for an Ultra Assessment.\n\nThe 'course.assessment.MODIFY' entitlement is needed to create a question.\n\n**Since**: 3300.9.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "assessmentId",
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
            "description": "The title of the question."
        },
        "text": {
            "type": "string",
            "description": "The main text content for the question. It may include plain and formatted text, and all kinds of content supported by the full text editor."
        },
        "position": {
            "type": "integer",
            "format": "int32",
            "description": "Position of the Question on the Assessment Canvas."
        },
        "points": {
            "type": "number",
            "description": "The point value for the question."
        },
        "correctResponseFeedback": {
            "type": "string",
            "description": "Feedback displayed to students when their submitted response is correct."
        },
        "incorrectResponseFeedback": {
            "type": "string",
            "description": "Feedback displayed to students when their submitted response is incorrect."
        },
        "instructorNotes": {
            "type": "string",
            "description": "Text added to the question as a note for the instructor. It is not intended to be displayed to students."
        },
        "questionHandler": {
            "$ref": "#/definitions/blackboard.plugin.assessment.publicapi.v1.questions.handlers.QuestionHandler"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.assessment.publicapi.v1.questions.QuestionV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginAssessmentPublicapiV1QuestionsQuestionV1"
},
    requestType: "CourseAssessmentsCreateQuestionRequest",
    isMultipart: false,
    originalName: "createQuestion",
    isWrite: true
  } as ApiMethodInfo,

  getQuestionById: {
    description: "Get a question by Id from an Ultra Assessment.\n\nEither 'course.assessment.CREATE' or 'course.assessment.MODIFY' entitlement is needed to view a question.\n\n**Since**: 3300.9.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions/{questionId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "assessmentId",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "questionId",
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
    "ref": "blackboard.plugin.assessment.publicapi.v1.questions.Question",
    "typeName": "BlackboardPluginAssessmentPublicapiV1QuestionsQuestion"
},
    requestType: "CourseAssessmentsGetQuestionByIdRequest",
    isMultipart: false,
    originalName: "getQuestionById",
    isWrite: false
  } as ApiMethodInfo,

  deleteQuestion: {
    description: "Delete a question, specified by Id, from an Ultra Assessment.\n\nThe 'course.assessment.DELETE' entitlement is needed to perform the operation.\n\n**Since**: 3300.9.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions/{questionId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "assessmentId",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "questionId",
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
    requestType: "CourseAssessmentsDeleteQuestionRequest",
    isMultipart: false,
    originalName: "deleteQuestion",
    isWrite: true
  } as ApiMethodInfo,

  updateQuestion: {
    description: "Update a Presentation Question, specified by Id, from an Ultra Assessment.\n\nThe 'course.assessment.MODIFY' entitlement is needed to perform the operation.\n\n**Since**: 3300.9.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions/{questionId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "assessmentId",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "questionId",
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
            "description": "The title of the question."
        },
        "text": {
            "type": "string",
            "description": "The main text content for the question. It may include plain and formatted text, and all kinds of content supported by the full text editor."
        },
        "position": {
            "type": "integer",
            "format": "int32",
            "description": "Position of the Question on the Assessment Canvas."
        },
        "points": {
            "type": "number",
            "description": "The point value for the question."
        },
        "correctResponseFeedback": {
            "type": "string",
            "description": "Feedback displayed to students when their submitted response is correct."
        },
        "incorrectResponseFeedback": {
            "type": "string",
            "description": "Feedback displayed to students when their submitted response is incorrect."
        },
        "instructorNotes": {
            "type": "string",
            "description": "Text added to the question as a note for the instructor. It is not intended to be displayed to students."
        },
        "questionHandler": {
            "$ref": "#/definitions/blackboard.plugin.assessment.publicapi.v1.questions.handlers.QuestionHandler"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.plugin.assessment.publicapi.v1.questions.Question",
    "typeName": "BlackboardPluginAssessmentPublicapiV1QuestionsQuestion"
},
    requestType: "CourseAssessmentsUpdateQuestionRequest",
    isMultipart: false,
    originalName: "updateQuestion",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const CourseAssessmentsHandlers = {
  getQuestions: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseAssessmentsMethods.getQuestions;
    
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

  createQuestion: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseAssessmentsMethods.createQuestion;
    
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

  getQuestionById: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseAssessmentsMethods.getQuestionById;
    
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

  deleteQuestion: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseAssessmentsMethods.deleteQuestion;
    
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

  updateQuestion: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseAssessmentsMethods.updateQuestion;
    
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
