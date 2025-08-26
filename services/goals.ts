import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const GoalsMethods: { [key: string]: ApiMethodInfo } = {
  getCourseGoalAlignments: {
    description: "Returns the list of Goal Alignments for the course specified by Id in the URL.\n\nThe 'course.learningstandards.alignment.VIEW' or 'course.learningstandards.alignment.student.VIEW' entitlement is required.\n\n**Since**: 3900.62.00",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/alignments",
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
        "name": "goalId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by goal id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "blogId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by blog id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by course content id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "discussionId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by discussion id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "gradebookColumnId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by gradebook column id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "messageId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by message/thread id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "questionId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by assessment/question id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "resourceId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by resource id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "reference",
        "type": "string",
        "description": "Optional search criteria parameter to filter by reference.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "rubricRowId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by rubric row id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "rubricId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by rubric id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "type",
        "type": "string",
        "description": "Optional search criteria parameter to filter by type.\n\n**Since**: 3900.62.00\n\n\n| Type      | Description\n | --------- | --------- |\n| Blog | Blog Content Type |\n| CourseContent | Course Content Type |\n| ContentCollectionResource | Content Collection Resourse Type |\n| Discussion | Discussion Content Type |\n| DiscussionThread | Message/Thread Content Type |\n| Assessment | Assessment/Question Content Type |\n| GradebookColumn | Gradebook Column Content Type |\n| RubricRow | Rubric Row Content Type |\n| Rubric | Rubric Content Type |\n| Other | Other Content Type |\n",
        "required": false
    },
    {
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n- goalId\n\n**Since**: 3900.62.00",
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
    requestType: "GoalsGetCourseGoalAlignmentsRequest",
    isMultipart: false,
    originalName: "getCourseGoalAlignments",
    isWrite: false
  } as ApiMethodInfo,

  getGoals: {
    description: "Returns a list of Goals.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
    method: "get",
    path: "/learn/api/public/v1/goals",
    pathParams: [],
    queryParams: [
    {
        "name": "categoryId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by category id.\n\n**Since**: 3900.53.0",
        "required": false
    },
    {
        "name": "goalSetId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by goal set id.\n\n**Since**: 3900.53.0",
        "required": false
    },
    {
        "name": "type",
        "type": "string",
        "description": "Optional search criteria parameter to filter by goal type.\n\n**Since**: 3900.53.0",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n- title\n\n**Since**: 3900.53.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "GoalsGetGoalsRequest",
    isMultipart: false,
    originalName: "getGoals",
    isWrite: false
  } as ApiMethodInfo,

  getGoalSets: {
    description: "Returns a list of Goal Sets.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
    method: "get",
    path: "/learn/api/public/v1/goals/sets",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.53.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "GoalsGetGoalSetsRequest",
    isMultipart: false,
    originalName: "getGoalSets",
    isWrite: false
  } as ApiMethodInfo,

  getTypes: {
    description: "Returns a list of Goals Set Types.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
    method: "get",
    path: "/learn/api/public/v1/goals/sets/types",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "GoalsGetTypesRequest",
    isMultipart: false,
    originalName: "getTypes",
    isWrite: false
  } as ApiMethodInfo,

  getGoalSetById: {
    description: "Returns the Goal Set specified by Id.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
    method: "get",
    path: "/learn/api/public/v1/goals/sets/{goalSetId}",
    pathParams: [
    {
        "name": "goalSetId",
        "type": "string",
        "description": "The Goal Set ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
    requestType: "GoalsGetGoalSetByIdRequest",
    isMultipart: false,
    originalName: "getGoalSetById",
    isWrite: false
  } as ApiMethodInfo,

  getCategories: {
    description: "Returns a list of Categories for a given Goal Set.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
    method: "get",
    path: "/learn/api/public/v1/goals/sets/{goalSetId}/categories",
    pathParams: [
    {
        "name": "goalSetId",
        "type": "string",
        "description": "The Goal Set ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n- name",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "GoalsGetCategoriesRequest",
    isMultipart: false,
    originalName: "getCategories",
    isWrite: false
  } as ApiMethodInfo,

  getGoalSetCategoryById: {
    description: "Returns the Goal Set Category specified by Id.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
    method: "get",
    path: "/learn/api/public/v1/goals/sets/{goalSetId}/categories/{goalSetCategoryId}",
    pathParams: [
    {
        "name": "goalSetId",
        "type": "string",
        "description": "The Goal Set ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "goalSetCategoryId",
        "type": "string",
        "description": "The Goal Set Category ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
    requestType: "GoalsGetGoalSetCategoryByIdRequest",
    isMultipart: false,
    originalName: "getGoalSetCategoryById",
    isWrite: false
  } as ApiMethodInfo,

  getGoalsFromSetAndCategory: {
    description: "Returns a list of Goals from a Goal Set and Category\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
    method: "get",
    path: "/learn/api/public/v1/goals/sets/{goalSetId}/categories/{goalSetCategoryId}/goals",
    pathParams: [
    {
        "name": "goalSetId",
        "type": "string",
        "description": "The Goal Set ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "goalSetCategoryId",
        "type": "string",
        "description": "The Goal Set Category ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "goalSetId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by goal set id.\n\n**Since**: 3900.53.0",
        "required": true
    }
],
    queryParams: [
    {
        "name": "recursive",
        "type": "boolean",
        "description": "Search for child goals recursively. A value of 'true' return all top-level goals and any descendant goals. A value of 'false', only top-level goals are returned and this is the default behavior.\n\n**Since**: 3900.53.0",
        "required": false
    },
    {
        "name": "categoryId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by category id.\n\n**Since**: 3900.53.0",
        "required": false
    },
    {
        "name": "type",
        "type": "string",
        "description": "Optional search criteria parameter to filter by goal type.\n\n**Since**: 3900.53.0",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n- title\n\n**Since**: 3900.53.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "GoalsGetGoalsFromSetAndCategoryRequest",
    isMultipart: false,
    originalName: "getGoalsFromSetAndCategory",
    isWrite: false
  } as ApiMethodInfo,

  getGoalById: {
    description: "Returns the Goal specified by Id.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
    method: "get",
    path: "/learn/api/public/v1/goals/{goalId}",
    pathParams: [
    {
        "name": "goalId",
        "type": "string",
        "description": "The Goal ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:Goal_1                     |\n ",
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
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>category</li><li>goalSet</li></ul>",
        "required": false
    }
],
    requestType: "GoalsGetGoalByIdRequest",
    isMultipart: false,
    originalName: "getGoalById",
    isWrite: false
  } as ApiMethodInfo,

  getGoalAlignments: {
    description: "Returns a list of Goal Alignments.\n\nThe 'system.goal.align.VIEW' entitlement is required.\n\n**Since**: 3900.62.00",
    method: "get",
    path: "/learn/api/public/v1/goals/{goalId}/alignments",
    pathParams: [
    {
        "name": "goalId",
        "type": "string",
        "description": "The Goal ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:Goal_1                     |\n ",
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
        "name": "courseId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by course id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "blogId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by blog id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by course content id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "discussionId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by discussion id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "gradebookColumnId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by gradebook column id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "messageId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by message/thread id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "questionId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by assessment/question id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "resourceId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by resource id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "reference",
        "type": "string",
        "description": "Optional search criteria parameter to filter by reference.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "rubricRowId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by rubric row id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "rubricId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by rubric id.\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "type",
        "type": "string",
        "description": "Optional search criteria parameter to filter by type.\n\n**Since**: 3900.62.00\n\n\n| Type      | Description\n | --------- | --------- |\n| Blog | Blog Content Type |\n| CourseContent | Course Content Type |\n| ContentCollectionResource | Content Collection Resourse Type |\n| Discussion | Discussion Content Type |\n| DiscussionThread | Message/Thread Content Type |\n| Assessment | Assessment/Question Content Type |\n| GradebookColumn | Gradebook Column Content Type |\n| RubricRow | Rubric Row Content Type |\n| Rubric | Rubric Content Type |\n| Other | Other Content Type |\n",
        "required": false
    },
    {
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n- goalId\n\n**Since**: 3900.62.00",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "GoalsGetGoalAlignmentsRequest",
    isMultipart: false,
    originalName: "getGoalAlignments",
    isWrite: false
  } as ApiMethodInfo,

  getChildrenGoals: {
    description: "Returns the list of Children Goals from the specified Parent Goal.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
    method: "get",
    path: "/learn/api/public/v1/goals/{goalId}/children",
    pathParams: [
    {
        "name": "goalId",
        "type": "string",
        "description": "The Goal ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:Goal_1                     |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "categoryId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by category id.\n\n**Since**: 3900.53.0",
        "required": false
    },
    {
        "name": "goalSetId",
        "type": "string",
        "description": "Optional search criteria parameter to filter by goal set id.\n\n**Since**: 3900.53.0",
        "required": false
    },
    {
        "name": "type",
        "type": "string",
        "description": "Optional search criteria parameter to filter by goal type.\n\n**Since**: 3900.53.0",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n- title\n\n**Since**: 3900.53.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "GoalsGetChildrenGoalsRequest",
    isMultipart: false,
    originalName: "getChildrenGoals",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const GoalsHandlers = {
  getCourseGoalAlignments: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = GoalsMethods.getCourseGoalAlignments;
    
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

  getGoals: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = GoalsMethods.getGoals;
    
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

  getGoalSets: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = GoalsMethods.getGoalSets;
    
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

  getTypes: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = GoalsMethods.getTypes;
    
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

  getGoalSetById: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = GoalsMethods.getGoalSetById;
    
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

  getCategories: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = GoalsMethods.getCategories;
    
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

  getGoalSetCategoryById: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = GoalsMethods.getGoalSetCategoryById;
    
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

  getGoalsFromSetAndCategory: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = GoalsMethods.getGoalsFromSetAndCategory;
    
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

  getGoalById: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = GoalsMethods.getGoalById;
    
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

  getGoalAlignments: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = GoalsMethods.getGoalAlignments;
    
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

  getChildrenGoals: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = GoalsMethods.getChildrenGoals;
    
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
