import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const CourseGradesMethods: { [key: string]: ApiMethodInfo } = {
  getColumnGroupAttempts: {
    description: "Returns a list of Group Attempts for the specified Course and Column. Group Attempts with a 'NeedsGrading' status will be filtered out if they are associated with a 'Manual' Grade Column.\n\nUser must have the following entitlement in order to view group attempts.\n\n- {@code course.gradebook.attempts.VIEW}\n- {@code course.gradebook-grades.VIEW}\n- {@code course.gradebook-grades.EXECUTE}\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.98.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/groupAttempts",
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
        "name": "groupId",
        "type": "string",
        "description": "Search for grade column group attempts submitted by this group. This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                                    |\n |------------|--------------------------------------------|\n | primary    | _123_1                                     |\n | externalId | externalId:915c7567d76d444abf1eed56aad3beb5|\n \n\n**Since**: 3100.10.0",
        "required": false
    },
    {
        "name": "userId",
        "type": "string",
        "description": "Search for group column attempts submitted by this user.\n\n**Since**: 3900.98.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for attempts with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3900.98.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3900.98.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for attempts with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3900.98.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3900.98.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "attemptDate",
        "type": "string",
        "description": "Search for attempts with attempt date relative to this value. 'attemptDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.98.0",
        "required": false
    },
    {
        "name": "attemptDateCompare",
        "type": "string",
        "description": "Used alongside the 'attemptDate' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3900.98.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "attemptStatuses",
        "type": "string",
        "description": "Search for grade column attempts with one of these statuses.\n\n**Since**: 3900.121.0\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n",
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
    requestType: "CourseGradesGetColumnGroupAttemptsRequest",
    isMultipart: false,
    originalName: "getColumnGroupAttempts",
    isWrite: false
  } as ApiMethodInfo,

  createColumnGroupAttempt: {
    description: "Creates a Group Attempt for the specified Course and grade column.\n\nUser must have the following entitlement in order to create a group attempt.\n\n- {@code course.gradebook-grades.EXECUTE}\n- {@code course.gradebook.MODIFY}\n- {@code course.assessment.MODIFY}\n\n**Since**: 3900.98.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/groupAttempts",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "columnId",
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
        "userId": {
            "type": "string",
            "description": "The Id of the User who submitted this Group Attempt."
        },
        "groupId": {
            "type": "string",
            "description": "The Id of the Group that owns this Group Attempt."
        },
        "status": {
            "type": "string",
            "description": "The status of this attempt.\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n",
            "enum": [
                "NotAttempted",
                "Abandoned",
                "InProgress",
                "Suspended",
                "Canceled",
                "NeedsGrading",
                "Completed",
                "InMoreProgress",
                "NeedsMoreGrading"
            ]
        },
        "readyToPost": {
            "type": "boolean",
            "description": "The ready to post status of the group attempt. Only applicable to ultra courses and when the status of the attempt is 'needsgrading'. For any other attempt status values the readyToPost value is not applicable. In order for the attempt's final grade to be displayed, readyToPost value must be set to true."
        },
        "score": {
            "type": "number",
            "description": "The score associated with this attempt."
        },
        "notes": {
            "type": "string",
            "description": "The instructor notes associated with this attempt."
        },
        "feedback": {
            "type": "string",
            "description": "The instructor feedback associated with this attempt."
        },
        "groupComments": {
            "type": "string",
            "description": "The group's comments associated with this Group Attempt."
        },
        "groupSubmission": {
            "type": "string",
            "description": "The group's submission text associated with this Group Attempt."
        },
        "attemptReceipt": {
            "description": "The attempt receipt associated with this attempt.\n\n**Since**: 3900.22.0",
            "$ref": "#/definitions/blackboard.webapps.gradebook.publicapi.v1.EmbeddedAttemptReceipt"
        },
        "text": {
            "type": "string",
            "description": "The text grade associated with this attempt."
        },
        "attemptDate": {
            "type": "string",
            "format": "date-time",
            "description": "Return the attempt date associated with this attempt."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v1.GroupAttemptV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GroupAttemptV1"
},
    requestType: "CourseGradesCreateColumnGroupAttemptRequest",
    isMultipart: false,
    originalName: "createColumnGroupAttempt",
    isWrite: true
  } as ApiMethodInfo,

  getColumnGroupAttempt: {
    description: "Return a Group Attempt for the specified Course & Group Attempt Id. Users with the 'course.gradebook.MODIFY' entitlement can view Group Attempts for the specified Course and Column. If user does not have 'course.gradebook.MODIFY' entitlement, then they can view the GroupAttempt if: [1] User is a member of the Group Attempt's Group [2] User is in set of Users who have made a submission for this Group Attempt (excluding Group members who were not a member at the time of submission)\n\n**Since**: 3900.98.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/groupAttempts/{groupAttemptId}",
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
        "name": "groupAttemptId",
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
    "ref": "blackboard.webapps.gradebook.publicapi.v1.GroupAttempt",
    "typeName": "BlackboardWebappsGradebookPublicapiV1GroupAttempt"
},
    requestType: "CourseGradesGetColumnGroupAttemptRequest",
    isMultipart: false,
    originalName: "getColumnGroupAttempt",
    isWrite: false
  } as ApiMethodInfo,

  deleteColumnGroupAttempt: {
    description: "Deletes a group attempt for a given course.\n\nUser must have the following entitlements in order to delete the group attempt in a course.\n\n- {@code course.assessment.MODIFY}\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.98.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/groupAttempts/{groupAttemptId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "columnId",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "groupAttemptId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CourseGradesDeleteColumnGroupAttemptRequest",
    isMultipart: false,
    originalName: "deleteColumnGroupAttempt",
    isWrite: true
  } as ApiMethodInfo,

  updateColumnGroupAttempt: {
    description: "Update an existing group Attempt on a Grade Column. </p> Students can only modify the groupSubmission, groupComments and status of their own attempt if the status is InProgress. Moving status to NeedsGrading is the equivalent of submitting the attempt. </p>\n\nNot enrolled users with the required entitlements are only able to submit the attempt (change status to NeedsGrading). Required entitlements:\n\n- {@code course.gradebook.MODIFY}\n- {@code course.assessment.MODIFY}\n</p>\n\n**Since**: 3900.98.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/groupAttempts/{groupAttemptId}",
    pathParams: [
    {
        "name": "groupAttemptId",
        "type": "string",
        "description": "",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CourseGradesUpdateColumnGroupAttemptRequest",
    isMultipart: false,
    originalName: "updateColumnGroupAttempt",
    isWrite: true
  } as ApiMethodInfo,

  getCourseGradebookLogsByGradebookColumnId: {
    description: "Returns a list of log entries related to the provided Gradebook Column.\n\nUser must have the following entitlements in order to see the provided course's GradebookLog.\n\n- {@code course.gradebook-grades.VIEW}\n- {@code course.gradebook.MODIFY}\n- {@code course.gradebook-grades.EXECUTE}\n\n**Since**: 3900.71.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/logs",
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
        "name": "until",
        "type": "string",
        "description": "Filters the fetched gradebook logs entries to only those logged prior to the specified date.",
        "required": false
    },
    {
        "name": "since",
        "type": "string",
        "description": "Filters the fetched gradebook logs entries to only those logged after or on the specified date.",
        "required": false
    },
    {
        "name": "user.userId",
        "type": "string",
        "description": "Filters gradebook log entries by the User id from user object. E.g: user.userId=_123_1",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n- gradebookColumnId\n- logged\n\n**Since**: 3900.71.0",
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
    requestType: "CourseGradesGetCourseGradebookLogsByGradebookColumnIdRequest",
    isMultipart: false,
    originalName: "getCourseGradebookLogsByGradebookColumnId",
    isWrite: false
  } as ApiMethodInfo,

  getCourseGradebookLogs: {
    description: "Returns a list of Gradebook Logs for a given course ID.\n\nUser must have the following entitlements in order to see the provided course's GradebookLog.\n\n- {@code course.gradebook-grades.VIEW}\n- {@code course.gradebook.MODIFY}\n- {@code course.gradebook-grades.EXECUTE}\n\n**Since**: 3900.71.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/logs",
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
        "name": "until",
        "type": "string",
        "description": "Filters the fetched gradebook logs entries to only those logged prior to the specified date.",
        "required": false
    },
    {
        "name": "since",
        "type": "string",
        "description": "Filters the fetched gradebook logs entries to only those logged after or on the specified date.",
        "required": false
    },
    {
        "name": "user.userId",
        "type": "string",
        "description": "Filters gradebook log entries by the User id from user object. E.g: user.userId=_123_1",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n- gradebookColumnId\n- logged\n\n**Since**: 3900.71.0",
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
    requestType: "CourseGradesGetCourseGradebookLogsRequest",
    isMultipart: false,
    originalName: "getCourseGradebookLogs",
    isWrite: false
  } as ApiMethodInfo,

  getGradeSchemas: {
    description: "Returns a list of grade schemas associated with the specified course.\n\nUsers with entitlements 'course.gradebook.MODIFY' or 'course.user.grades.VIEW', or users enrolled in the specified course can retrieve grade schema details.\n\nA subset of the schema properties are available to enrolled users without the 'course.gradebook.MODIFY' entitlement:\n\n- id\n- scaleType\n\n**Since**: 3300.2.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/schemas",
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
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "object",
    "properties": {},
    "description": ""
},
    requestType: "CourseGradesGetGradeSchemasRequest",
    isMultipart: false,
    originalName: "getGradeSchemas",
    isWrite: false
  } as ApiMethodInfo,

  createGradeSchema: {
    description: "Create a Tabular Grade Schema on this course. Currently only supports Classic/9.1 Courses.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3300.2.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/schemas",
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
    requestBodySchema: {
    "type": "object",
    "properties": {
        "externalId": {
            "type": "string",
            "description": "The externalId associated with this grade schema."
        },
        "title": {
            "type": "string",
            "description": "The title of this grade schema."
        },
        "description": {
            "type": "string",
            "description": "The description of this grade schema."
        },
        "scaleType": {
            "type": "string",
            "description": "The scale type of this grade schema.\n\n\n| Type      | Description\n | --------- | --------- |\n| Percent |  |\n| Score |  |\n| Tabular |  |\n| Text |  |\n| Complete |  |\n",
            "enum": [
                "Percent",
                "Score",
                "Tabular",
                "Text",
                "Complete"
            ]
        },
        "symbols": {
            "description": "The list of grade symbols for this grade schema. Only returned for Tabular scaleType schemas.",
            "$ref": "#/definitions/java.util.List<blackboard.webapps.gradebook.publicapi.v1.GradeSymbolV1>"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v1.GradeSchemaV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradeSchemaV1"
},
    requestType: "CourseGradesCreateGradeSchemaRequest",
    isMultipart: false,
    originalName: "createGradeSchema",
    isWrite: true
  } as ApiMethodInfo,

  getGradeSchema: {
    description: "Loads the grade schema associated with the specified course and schema Id.\n\nUsers with entitlements 'course.gradebook.MODIFY' or 'course.user.grades.VIEW', or users enrolled in the specified course can retrieve the grade schema details.\n\nA subset of the schema properties are available to enrolled users without the 'course.gradebook.MODIFY' entitlement:\n\n- id\n- scaleType\n\n**Since**: 3300.2.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/schemas/{schemaId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "schemaId",
        "type": "string",
        "description": "The grade schema ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:schema1                    |\n ",
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
    "ref": "blackboard.webapps.gradebook.publicapi.v1.GradeSchema",
    "typeName": "BlackboardWebappsGradebookPublicapiV1GradeSchema"
},
    requestType: "CourseGradesGetGradeSchemaRequest",
    isMultipart: false,
    originalName: "getGradeSchema",
    isWrite: false
  } as ApiMethodInfo,

  deleteGradeSchema: {
    description: "Deletes the grade schema associated with the specified course and schema Id.\n\nRequires entitlement 'course.gradebook.MODIFY'\n\nGrade schemas in Ultra courses may not be deleted\n\nA schema must be removable (not in-use, and either tabular or user-created) to be deleted\n\n**Since**: 3300.2.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/schemas/{schemaId}",
    pathParams: [
    {
        "name": "schemaId",
        "type": "string",
        "description": "The grade schema ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:schema1                    |\n ",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CourseGradesDeleteGradeSchemaRequest",
    isMultipart: false,
    originalName: "deleteGradeSchema",
    isWrite: true
  } as ApiMethodInfo,

  updateGradeSchema: {
    description: "\n\nUpdates the grade schema associated with the specified course and schema Id. </p>\n\nRequires entitlement 'course.gradebook.MODIFY' </p>\n\nA schema must have a scaleType of Tabular to be updated </p>\n\nIf updating the symbols field, the following criteria must be true:\n\n- All symbols for the schema must be included. Any existing symbols not included in the patch will be deleted.\n- There must be at least 1 symbol for schemas associated with Classic courses, and 2 for Ultra courses.\n- When sorted descending by lowerBound, The lowerBound of a symbol must be equal to the upperBound of the following symbol.  In other words,      there should be no gaps or overlaps between the symbols.\n- The lowerBound, upperBound and absoluteValue of all symbols must be nonnegative.\n- The text field must be unique for each symbol in a schema.\n- The lowerBound and upperBound fields must have a maximum of 3 digits after the decimal point.\n- The absoluteValue field must have a maximum of 3 digits after the decimal point for Classic courses, and 4 for Ultra courses.-  -  </p>\n\n**Since**: 3300.2.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/schemas/{schemaId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "schemaId",
        "type": "string",
        "description": "The grade schema ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:schema1                    |\n ",
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
            "description": "The externalId associated with this grade schema."
        },
        "title": {
            "type": "string",
            "description": "The title of this grade schema."
        },
        "description": {
            "type": "string",
            "description": "The description of this grade schema."
        },
        "symbols": {
            "description": "The list of grade symbols for this grade schema. Only returned for Tabular scaleType schemas.",
            "$ref": "#/definitions/java.util.List<blackboard.webapps.gradebook.publicapi.v1.GradeSymbolV1>"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.gradebook.publicapi.v1.GradeSchema",
    "typeName": "BlackboardWebappsGradebookPublicapiV1GradeSchema"
},
    requestType: "CourseGradesUpdateGradeSchemaRequest",
    isMultipart: false,
    originalName: "updateGradeSchema",
    isWrite: true
  } as ApiMethodInfo,

  getGradeColumns: {
    description: "Returns a list of grade columns.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed. Alternatively, student users may view the grade columns if they are enrolled in the course, and the mygrade tool is available in the course, and the columns are visible to the student. Observers may view grade columns if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.\n\nStudent or observer users may view a limited subset of grade column fields:\n\n- id\n- name\n- displayName\n- description\n- externalGrade\n- contentId\n- score.possible\n- scoreProviderHandle\n- grading.type\n- grading.due\n- grading.attemptsAllowed\n- grading.scoringModel\n- formula\n- availability.available\n- learningOutcome.signature\n\n**Since**: 3200.10.0",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/columns",
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
        "name": "contentId",
        "type": "string",
        "description": "Search for grade columns associated with this content item.\n\n**Since**: 3000.11.0",
        "required": false
    },
    {
        "name": "displayName",
        "type": "string",
        "description": "The 'displayName' value to use as search criteria.\n\nCurrently only supports 'contains' searches.\n\n**Since**: 3300.2.0",
        "required": false
    },
    {
        "name": "name",
        "type": "string",
        "description": "The 'name' value to use as search criteria.\n\nCurrently only supports 'contains' searches.\n\n**Since**: 3900.11.0",
        "required": false
    },
    {
        "name": "gradebookCategoryId",
        "type": "ref",
        "description": "Search for grade columns associated with the 'gradebookCategoryId'.\n\ncomma-delimited list of the gradebook category ids.\n\n**Since**: 3900.11.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for grade columns with a created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3900.76.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.76.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for grade columns with a modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3900.76.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.76.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
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
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>rubricAssociations</li></ul>",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "object",
    "properties": {},
    "description": ""
},
    requestType: "CourseGradesGetGradeColumnsRequest",
    isMultipart: false,
    originalName: "getGradeColumns",
    isWrite: false
  } as ApiMethodInfo,

  createGradeColumn: {
    description: "Create a manual grade column. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3200.10.0",
    method: "post",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/columns",
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
    requestBodySchema: {
    "type": "object",
    "properties": {
        "externalId": {
            "type": "string",
            "description": "The externalId for this grade column"
        },
        "externalToolId": {
            "type": "string",
            "description": "The externalId for this grade column\n\n**Since**: 3500.2.0"
        },
        "name": {
            "type": "string",
            "description": "The name of the grade column."
        },
        "displayName": {
            "type": "string",
            "description": "The display name of the grade column. Only applicable for Classic courses. Ultra courses will simply use the `name` field.\n\n**Since**: 3300.2.0"
        },
        "description": {
            "type": "string",
            "description": "The description of the grade column."
        },
        "externalGrade": {
            "type": "boolean",
            "description": "Whether this grade column is an external grade column."
        },
        "score": {
            "type": "object",
            "description": "Settings controlling the numerical scoring of this grade column.",
            "title": "blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2.Score",
            "properties": {
                "possible": {
                    "type": "number",
                    "description": "The points possible for this grade column."
                }
            }
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling the availability/visibility of grade column data.",
            "title": "blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether this grade column is available to students\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may view the grade column. |\n| No | Students may not view the grade column. |\n",
                    "enum": [
                        "Yes",
                        "No"
                    ]
                }
            }
        },
        "grading": {
            "type": "object",
            "description": "Settings controlling whether numerical and text grade values for this grade column are calculated, determined based on attempts, or manually entered.",
            "title": "blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2.Grading",
            "properties": {
                "type": {
                    "type": "string",
                    "description": "The type of Grading settings for this Grade Column.\n\n\n| Type      | Description\n | --------- | --------- |\n| Attempts | Indicates score and grade values are determined based on user attempts |\n| Calculated | Indicates score and grade values are determined by applying a calculated formula. |\n| Manual | Indicates score and grade values are manually entered. |\n",
                    "enum": [
                        "Attempts",
                        "Calculated",
                        "Manual"
                    ]
                },
                "due": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The date on which attempts are due for the grade column."
                },
                "attemptsAllowed": {
                    "type": "integer",
                    "format": "int32",
                    "description": "Number of attempts allowed for the grade column."
                },
                "scoringModel": {
                    "type": "string",
                    "description": "The scoring model for the submitted grade column attempts.\n\n\n| Type      | Description\n | --------- | --------- |\n| Last |  |\n| Highest |  |\n| Lowest |  |\n| First |  |\n| Average |  |\n",
                    "enum": [
                        "Last",
                        "Highest",
                        "Lowest",
                        "First",
                        "Average"
                    ]
                },
                "schemaId": {
                    "type": "string",
                    "description": "The ID of the grade schema associated with this grade column. Mutable since 3400.2.0\n\n**Since**: 3200.13.0"
                },
                "anonymousGrading": {
                    "type": "object",
                    "description": "Settings for anonymous grading",
                    "title": "blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2.Grading.AnonymousGrading",
                    "properties": {
                        "type": {
                            "type": "string",
                            "description": "The type of AnonymousGrading settings for this Attempts based Grade Column.\n\n\n| Type      | Description\n | --------- | --------- |\n| None | Indicates anonymous grading is not enabled. |\n| AfterAllGraded | Indicates anonymized grades are released after all attempts have been graded. |\n| Date | Indicates anonymized grades are released after a specified release date. |\n",
                            "enum": [
                                "None",
                                "AfterAllGraded",
                                "Date"
                            ]
                        },
                        "releaseAfter": {
                            "type": "string",
                            "format": "date-time",
                            "description": "Date after which grades are released from being anonymized, if AnonymousGrading type is 'Date'."
                        }
                    },
                    "required": [
                        "type"
                    ]
                },
                "rubricAssociations": {
                    "description": "The list of Rubric Associations",
                    "$ref": "#/definitions/java.util.List<blackboard.webapps.gradebook.publicapi.v2.RubricAssociationV1>"
                }
            },
            "required": [
                "anonymousGrading",
                "type"
            ]
        },
        "gradebookCategoryId": {
            "type": "string",
            "description": "The gradebook category ID for the grade column.\n\n**Since**: 3400.2.0"
        },
        "formula": {
            "description": "The formula used for determining the value for the grade column, if it is a calculated column.\n\n**Since**: 3400.5.0",
            "$ref": "#/definitions/blackboard.webapps.gradebook.publicapi.v2.GradingFormulaV2"
        },
        "includeInCalculations": {
            "type": "boolean",
            "description": "Indicates whether or not this column is included in gradebook calculations. Cannot be set for Ultra courses. Default: true\n\n**Since**: 3800.4.0"
        },
        "showStatisticsToStudents": {
            "type": "boolean",
            "description": "Indicates whether or not column statistics are shown to students. Read-only for Ultra courses. Default: false\n\n**Since**: 3800.4.0"
        },
        "learningOutcome": {
            "type": "object",
            "description": "Settings controlling the learning outcome performance values for this grade column.",
            "title": "blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2.LearningOutcome",
            "properties": {}
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV2GradeColumnV2"
},
    requestType: "CourseGradesCreateGradeColumnRequest",
    isMultipart: false,
    originalName: "createGradeColumn",
    isWrite: true
  } as ApiMethodInfo,

  getGradeColumn: {
    description: "Loads a specific grade column.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed. Alternatively, student users may view the grade column if they are enrolled in the course, and the mygrade tool is available in the course, and the column is visible to the student. Observers may view the grade column if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.\n\nStudent or observer users may view a limited subset of grade column fields:\n\n- id\n- name\n- description\n- externalGrade\n- contentId\n- score.possible\n- grading.type\n- grading.due\n- grading.attemptsAllowed\n- grading.scoringModel\n- formula\n- availability.available\n\n**Since**: 3200.10.0",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}",
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
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    },
    {
        "name": "expand",
        "type": "string",
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>rubricAssociations</li></ul>",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2",
    "typeName": "BlackboardWebappsGradebookPublicapiV2GradeColumnV2"
},
    requestType: "CourseGradesGetGradeColumnRequest",
    isMultipart: false,
    originalName: "getGradeColumn",
    isWrite: false
  } as ApiMethodInfo,

  deleteGradeColumn: {
    description: "Delete a specific grade column. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3200.10.0",
    method: "delete",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}",
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
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CourseGradesDeleteGradeColumnRequest",
    isMultipart: false,
    originalName: "deleteGradeColumn",
    isWrite: true
  } as ApiMethodInfo,

  updateGradeColumn: {
    description: "Update a manual grade column. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3200.10.0",
    method: "patch",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}",
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
            "description": "The externalId for this grade column"
        },
        "externalToolId": {
            "type": "string",
            "description": "The externalId for this grade column\n\n**Since**: 3500.2.0"
        },
        "name": {
            "type": "string",
            "description": "The name of the grade column."
        },
        "displayName": {
            "type": "string",
            "description": "The display name of the grade column. Only applicable for Classic courses. Ultra courses will simply use the `name` field.\n\n**Since**: 3300.2.0"
        },
        "description": {
            "type": "string",
            "description": "The description of the grade column."
        },
        "externalGrade": {
            "type": "boolean",
            "description": "Whether this grade column is an external grade column."
        },
        "score": {
            "type": "object",
            "description": "Settings controlling the numerical scoring of this grade column.",
            "title": "blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2.Score",
            "properties": {
                "possible": {
                    "type": "number",
                    "description": "The points possible for this grade column."
                }
            }
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling the availability/visibility of grade column data.",
            "title": "blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether this grade column is available to students\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may view the grade column. |\n| No | Students may not view the grade column. |\n",
                    "enum": [
                        "Yes",
                        "No"
                    ]
                }
            }
        },
        "grading": {
            "type": "object",
            "description": "Settings controlling whether numerical and text grade values for this grade column are calculated, determined based on attempts, or manually entered.",
            "title": "blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2.Grading",
            "properties": {
                "due": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The date on which attempts are due for the grade column."
                },
                "attemptsAllowed": {
                    "type": "integer",
                    "format": "int32",
                    "description": "Number of attempts allowed for the grade column."
                },
                "scoringModel": {
                    "type": "string",
                    "description": "The scoring model for the submitted grade column attempts.\n\n\n| Type      | Description\n | --------- | --------- |\n| Last |  |\n| Highest |  |\n| Lowest |  |\n| First |  |\n| Average |  |\n",
                    "enum": [
                        "Last",
                        "Highest",
                        "Lowest",
                        "First",
                        "Average"
                    ]
                },
                "schemaId": {
                    "type": "string",
                    "description": "The ID of the grade schema associated with this grade column. Mutable since 3400.2.0\n\n**Since**: 3200.13.0"
                },
                "anonymousGrading": {
                    "type": "object",
                    "description": "Settings for anonymous grading",
                    "title": "blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2.Grading.AnonymousGrading",
                    "properties": {
                        "type": {
                            "type": "string",
                            "description": "The type of AnonymousGrading settings for this Attempts based Grade Column.\n\n\n| Type      | Description\n | --------- | --------- |\n| None | Indicates anonymous grading is not enabled. |\n| AfterAllGraded | Indicates anonymized grades are released after all attempts have been graded. |\n| Date | Indicates anonymized grades are released after a specified release date. |\n",
                            "enum": [
                                "None",
                                "AfterAllGraded",
                                "Date"
                            ]
                        },
                        "releaseAfter": {
                            "type": "string",
                            "format": "date-time",
                            "description": "Date after which grades are released from being anonymized, if AnonymousGrading type is 'Date'."
                        }
                    }
                },
                "rubricAssociations": {
                    "description": "The list of Rubric Associations",
                    "$ref": "#/definitions/java.util.List<blackboard.webapps.gradebook.publicapi.v2.RubricAssociationV1>"
                }
            }
        },
        "gradebookCategoryId": {
            "type": "string",
            "description": "The gradebook category ID for the grade column.\n\n**Since**: 3400.2.0"
        },
        "formula": {
            "description": "The formula used for determining the value for the grade column, if it is a calculated column.\n\n**Since**: 3400.5.0",
            "$ref": "#/definitions/blackboard.webapps.gradebook.publicapi.v2.GradingFormulaV2"
        },
        "includeInCalculations": {
            "type": "boolean",
            "description": "Indicates whether or not this column is included in gradebook calculations. Cannot be set for Ultra courses. Default: true\n\n**Since**: 3800.4.0"
        },
        "showStatisticsToStudents": {
            "type": "boolean",
            "description": "Indicates whether or not column statistics are shown to students. Read-only for Ultra courses. Default: false\n\n**Since**: 3800.4.0"
        },
        "learningOutcome": {
            "type": "object",
            "description": "Settings controlling the learning outcome performance values for this grade column.",
            "title": "blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2.LearningOutcome",
            "properties": {}
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2",
    "typeName": "BlackboardWebappsGradebookPublicapiV2GradeColumnV2"
},
    requestType: "CourseGradesUpdateGradeColumnRequest",
    isMultipart: false,
    originalName: "updateGradeColumn",
    isWrite: true
  } as ApiMethodInfo,

  getColumnAttempts: {
    description: "Returns a list of attempts associated with the specified grade column.\n\nThe 'course.gradebook.MODIFY' entitlement is needed to view column attempts. Alternatively, if the 'userId' query parameter is specified, and the user making the request matches the specified 'userId', then the user may view his/her own attempt.  When querying an anonymous grade column, if the release criteria has not yet been met, then the 'userId' attribute will not be populated for the returned column attempts.  If the release criteria has not been met and the 'userId' query parameter is specified, a 403 response is returned, unless the requesting user matches the specified 'userId' value.\n\nA subset of attempt properties are available to a student when requesting his or her own attempts:\n\n- id\n- userId\n- groupAttemptId\n- status\n- displayGrade.scaleType\n- displayGrade.score\n- displayGrade.text\n- groupOverride\n- feedback\n- studentComments\n- studentSubmission\n- exempt\n- created\n\nWhen this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student's submission & comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student's submission & comments are visible to the API Gateway User. </p> If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\nIf the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\n**Since**: 3300.0.0",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/attempts",
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
        "name": "userId",
        "type": "string",
        "description": "Search for grade column attempts submitted by this user. This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:jsmith                     |\n | userName   | userName:jsmith                       |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n \n\n**Since**: 3100.4.0",
        "required": false
    },
    {
        "name": "attemptStatuses",
        "type": "string",
        "description": "Search for grade column attempts with one of these statuses.\n\n**Since**: 3100.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for attempts with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for attempts with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "attemptDate",
        "type": "string",
        "description": "Search for attempts with attempt date relative to this value. 'attemptDateCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0",
        "required": false
    },
    {
        "name": "attemptDateCompare",
        "type": "string",
        "description": "Used alongside the 'attemptDate' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
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
    requestType: "CourseGradesGetColumnAttemptsRequest",
    isMultipart: false,
    originalName: "getColumnAttempts",
    isWrite: false
  } as ApiMethodInfo,

  createColumnAttempt: {
    description: "Create an Attempt on the specified Grade Column. Currently supports Classic and Ultra Course Assignments. Student attributes (studentSubmission & studentComments) can only be specified by Student Users. Grader attributes (text, score, notes & feedback, attemptDate) can only be specified by Grader Users. Graders must have the entitlement \"course.gradebook.MODIFY\" for the course.  Graders are allowed to create attempts that contain \"studentSubmission\" text on behalf of a student if the authenticated application for this request has the \"course.attempt.nonowner.SUBMIT\" entitlement and the attempt has a \"status\" of NeedsGrading. </p> If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, then the caller must be in a secure browser in order to create the attempt.\n\n**Since**: 3300.12.0",
    method: "post",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/attempts",
    pathParams: [
    {
        "name": "columnId",
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
    requestBodySchema: {
    "type": "object",
    "properties": {
        "userId": {
            "type": "string",
            "description": "The user ID associated with this attempt.  Defaults to the authenticated user on create.  Can be specified as a user other than the authenticated user if the authenticated user has the \"course.gradebook.MODIFY\" entitlement and the authenticated application has the \"course.attempt.nonowner.SUBMIT\" entitlement."
        },
        "status": {
            "type": "string",
            "description": "The status of this attempt.\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n",
            "enum": [
                "NotAttempted",
                "Abandoned",
                "InProgress",
                "Suspended",
                "Canceled",
                "NeedsGrading",
                "Completed",
                "InMoreProgress",
                "NeedsMoreGrading"
            ]
        },
        "text": {
            "type": "string",
            "description": "The text grade associated with this attempt."
        },
        "score": {
            "type": "number",
            "description": "The score associated with this attempt."
        },
        "reconciliationMode": {
            "type": "string",
            "description": "The reconciliation mode to use when reconciling the attempt grade.  When modifying reconciliationMode, score is also required.  A new score will not be calculated based on the reconciliationMode\n\n**Since**: 3700.2.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Average |  |\n| Highest |  |\n| Lowest |  |\n| Custom |  |\n",
            "enum": [
                "Average",
                "Highest",
                "Lowest",
                "Custom"
            ]
        },
        "notes": {
            "type": "string",
            "description": "The instructor notes associated with this attempt."
        },
        "feedback": {
            "type": "string",
            "description": "The instructor feedback associated with this attempt."
        },
        "groupAttemptStudentComments": {
            "type": "string",
            "description": "The group attempt student comments associated with this attempt."
        },
        "studentComments": {
            "type": "string",
            "description": "The student comments associated with this attempt."
        },
        "studentSubmission": {
            "type": "string",
            "description": "The student submission text associated with this attempt."
        },
        "exempt": {
            "type": "boolean",
            "description": "Whether the score associated with this attempt is ignored when computing the user's grade for the associated grade column."
        },
        "attemptDate": {
            "type": "string",
            "format": "date-time",
            "description": "Return the attempt date associated with this attempt."
        },
        "attemptReceipt": {
            "description": "The attempt receipt associated with this attempt.\n\n**Since**: 3900.22.0",
            "$ref": "#/definitions/blackboard.webapps.gradebook.publicapi.v1.EmbeddedAttemptReceipt"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v2.AttemptV2>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV2AttemptV2"
},
    requestType: "CourseGradesCreateColumnAttemptRequest",
    isMultipart: false,
    originalName: "createColumnAttempt",
    isWrite: true
  } as ApiMethodInfo,

  getColumnAttempt: {
    description: "Loads the grade column attempt for the specified id.\n\nThe 'course.gradebook.MODIFY' entitlement is needed to view an attempt. Alternatively, if the user making the request is also the user associated with the attempt grade, then the user may view his/her own attempt.  When accessing an anonymous grade column attempt, if the release criteria has not yet been met, then the 'userId' attribute will not be populated for the returned attempt.\n\nA subset of attempt properties are available to a student when requesting his or her own attempt:\n\n- id\n- userId\n- groupAttemptId\n- status\n- displayGrade.scaleType\n- displayGrade.score\n- displayGrade.text\n- groupOverride\n- feedback\n- studentComments\n- studentSubmission\n- exempt\n- created\n\nWhen this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student's submission & comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student's submission & comments are visible to the API Gateway User. </p> If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\nIf the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\n**Since**: 3300.0.0",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/attempts/{attemptId}",
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
        "name": "attemptId",
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
    "ref": "blackboard.webapps.gradebook.publicapi.v2.AttemptV2",
    "typeName": "BlackboardWebappsGradebookPublicapiV2AttemptV2"
},
    requestType: "CourseGradesGetColumnAttemptRequest",
    isMultipart: false,
    originalName: "getColumnAttempt",
    isWrite: false
  } as ApiMethodInfo,

  updateColumnAttempt: {
    description: "Update an existing Attempt on a Grade Column. </p> Students can only modify the studentSubmission, studentComments and status of their own attempt if the status is InProgress. The status can only be set to NeedsGrading.  Doing so is the equivalent of submitting the attempt. </p> Instructors can modify all mutable fields but studentSubmission and studentComments as long as the status is not InProgress. Setting the status to Complete is the equivalent of posting a graded attempt.  The \"course.gradebook.MODIFY\" entitlement is required to update score, text, notes, feedback and set the status to Complete. </p> If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, then the caller must be in a secure browser in order to create the attempt. Classic course support since 3500.2.0\n\n**Since**: 3300.12.0",
    method: "patch",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/attempts/{attemptId}",
    pathParams: [
    {
        "name": "columnId",
        "type": "string",
        "description": "",
        "required": true
    },
    {
        "name": "attemptId",
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
    requestBodySchema: {
    "type": "object",
    "properties": {
        "status": {
            "type": "string",
            "description": "The status of this attempt.\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n",
            "enum": [
                "NotAttempted",
                "Abandoned",
                "InProgress",
                "Suspended",
                "Canceled",
                "NeedsGrading",
                "Completed",
                "InMoreProgress",
                "NeedsMoreGrading"
            ]
        },
        "text": {
            "type": "string",
            "description": "The text grade associated with this attempt."
        },
        "score": {
            "type": "number",
            "description": "The score associated with this attempt."
        },
        "reconciliationMode": {
            "type": "string",
            "description": "The reconciliation mode to use when reconciling the attempt grade.  When modifying reconciliationMode, score is also required.  A new score will not be calculated based on the reconciliationMode\n\n**Since**: 3700.2.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Average |  |\n| Highest |  |\n| Lowest |  |\n| Custom |  |\n",
            "enum": [
                "Average",
                "Highest",
                "Lowest",
                "Custom"
            ]
        },
        "notes": {
            "type": "string",
            "description": "The instructor notes associated with this attempt."
        },
        "feedback": {
            "type": "string",
            "description": "The instructor feedback associated with this attempt."
        },
        "groupAttemptStudentComments": {
            "type": "string",
            "description": "The group attempt student comments associated with this attempt."
        },
        "studentComments": {
            "type": "string",
            "description": "The student comments associated with this attempt."
        },
        "studentSubmission": {
            "type": "string",
            "description": "The student submission text associated with this attempt."
        },
        "exempt": {
            "type": "boolean",
            "description": "Whether the score associated with this attempt is ignored when computing the user's grade for the associated grade column."
        },
        "attemptReceipt": {
            "description": "The attempt receipt associated with this attempt.\n\n**Since**: 3900.22.0",
            "$ref": "#/definitions/blackboard.webapps.gradebook.publicapi.v1.EmbeddedAttemptReceipt"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.gradebook.publicapi.v2.AttemptV2",
    "typeName": "BlackboardWebappsGradebookPublicapiV2AttemptV2"
},
    requestType: "CourseGradesUpdateColumnAttemptRequest",
    isMultipart: false,
    originalName: "updateColumnAttempt",
    isWrite: true
  } as ApiMethodInfo,

  getColumnGrades: {
    description: "Returns a list of grades associated with the specified grade column. By default, this operation does not include 'ReadyToPost' grades when returning grade details for calculated grade columns. This can be changed by setting the query parameter \"includeUnpostedGrades\" to true. The columns considered as 'ReadyToPost' are those which have a grade associated but have the status NEEDS_GRADING. By default, grade details for disabled memberships will not be included while returning. The query parameter \"includeDisabledMemberships\" has to be set to true to return grade details of disabled memberships.\n\nUsers with entitlement 'course.gradebook.MODIFY' can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \"403 - Forbidden.\"\n\nEnrolled users without the 'course.gradebook.MODIFY' entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \"403 - Forbidden.\".  A subset of grade properties are available to a student when requesting his or her own grades:\n\n- userId\n- columnId\n- status\n- displayGrade\n- exempt\n- feedback\n- changeIndex\n\n**Since**: 3300.0.0",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users",
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
        "name": "changeIndex",
        "type": "integer",
        "description": "Retrieve only items modified after the given change index.\n\n**Since**: 3300.4.0",
        "required": false
    },
    {
        "name": "includeUnpostedGrades",
        "type": "boolean",
        "description": "If true, calculated columns exposed in the response will be processed such that any unposted grades are included in their calculations. If false, only posted grades will be included in calculations. Entitlements course.gradebook-grades.VIEW, course.gradebook.MODIFY and course.gradebook-grades.EXECUTE are required to use this parameter.\n\n**Since**: 3800.4.0",
        "required": false
    },
    {
        "name": "includeDisabledMemberships",
        "type": "boolean",
        "description": "If false, only active course memberships will be exposed in the response. By default, the value is false. If true, users with disabled access to the course will also be included in the response. Entitlements course.gradebook-grades.VIEW, course.gradebook.MODIFY and course.gradebook-grades.EXECUTE are required to use this parameter.",
        "required": false
    },
    {
        "name": "firstRelevantDate",
        "type": "string",
        "description": "Set the search criteria to the search value of the firstRelevantDate.\n\n**Since**: 3900.78.0",
        "required": false
    },
    {
        "name": "firstRelevantDateCompare",
        "type": "string",
        "description": "Assign the compare value to the search criteria, and it works along with the firstRelevantDate. Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.78.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "lastRelevantDate",
        "type": "string",
        "description": "Set the search criteria to the search value of the lastRelevantDate.\n\n**Since**: 3900.78.0",
        "required": false
    },
    {
        "name": "lastRelevantDateCompare",
        "type": "string",
        "description": "Assign the compare value to the search criteria, and it works along with the lastRelevantDate. Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.78.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CourseGradesGetColumnGradesRequest",
    isMultipart: false,
    originalName: "getColumnGrades",
    isWrite: false
  } as ApiMethodInfo,

  getColumnGradeLastChanged: {
    description: "Loads the grade column grade with the maximum change index. This change index can be used to determine the relative order in which the grades were created and/or updated. This operation does not include 'ReadyToPost' grades when determining the maximum change index grade.\n\nUsers with entitlement 'course.gradebook.MODIFY' can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \"403 - Forbidden.\"\n\nEnrolled users without the 'course.gradebook.MODIFY' entitlement may only view their own grade; such users cannot retrieve grades of other users. A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \"403 - Forbidden.\".\n\n**Since**: 3300.4.0",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users/lastChanged",
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
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CourseGradesGetColumnGradeLastChangedRequest",
    isMultipart: false,
    originalName: "getColumnGradeLastChanged",
    isWrite: false
  } as ApiMethodInfo,

  getColumnGrade: {
    description: "Loads the grade column grade for a specific user.  If grade details have yet to be entered for the specified user, then no grade details will be included in the returned grade object.  This operation does not include 'ReadyToPost' grades when returning grade details for calculated grade columns.\n\nUsers with entitlement 'course.gradebook.MODIFY' can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \"403 - Forbidden.\"\n\nEnrolled users without the 'course.gradebook.MODIFY' entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \"403 - Forbidden.\".  A subset of grade properties are available to a student when requesting his or her own grades:\n\n- userId\n- columnId\n- status\n- displayGrade\n- exempt\n- feedback\n- changeIndex\n\n**Since**: 3300.0.0",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users/{userId}",
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
        "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>primary</td> <td>_123_1</td>         </tr>         <tr>           <td>externalId</td> <td>externalId:jsmith</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>uuid</td> <td>uuid:915c7567d76d444abf1eed56aad3beb5</td>         </tr>       </tbody>   </table> </div> The following id prefixes require that the caller have the system.user.properties.MODIFY entitlement to use and will fail with a security error if attempted to be used without that.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>institutionEmail</td> <td>institutionEmail:name@example.com</td>         </tr>         <tr>           <td>email</td> <td>email:name@example.com</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>studentId</td> <td>studentId:123456 </td>         </tr>       </tbody>   </table> </div>",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CourseGradesGetColumnGradeRequest",
    isMultipart: false,
    originalName: "getColumnGrade",
    isWrite: false
  } as ApiMethodInfo,

  updateColumnGrade: {
    description: "Update the grade column grade for a specific user, including the text grade, score, instructor notes and feedback, and exempt status.  When updating text grade or score, the resulting grade is always marked as 'Posted'.  This end-point, currently, does not support marking the grade as 'ReadyToPost'.  Grade overrides may be cleared by either specifying the 'score' attribute as null, or the 'text'; attribute as null, '', or '-' in the body of the request. The entitlement 'course.gradebook.MODIFY' is required to perform this operation.\n\n**Since**: 3300.0.0",
    method: "patch",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users/{userId}",
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
        "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>primary</td> <td>_123_1</td>         </tr>         <tr>           <td>externalId</td> <td>externalId:jsmith</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>uuid</td> <td>uuid:915c7567d76d444abf1eed56aad3beb5</td>         </tr>       </tbody>   </table> </div> The following id prefixes require that the caller have the system.user.properties.MODIFY entitlement to use and will fail with a security error if attempted to be used without that.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>institutionEmail</td> <td>institutionEmail:name@example.com</td>         </tr>         <tr>           <td>email</td> <td>email:name@example.com</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>studentId</td> <td>studentId:123456 </td>         </tr>       </tbody>   </table> </div>",
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
        "text": {
            "type": "string",
            "description": "The overridden text representation of this grade. This field is only used for overriding the grade via text value"
        },
        "score": {
            "type": "number",
            "description": "The overridden score of this grade. This field is only used for overriding the grade"
        },
        "notes": {
            "type": "string",
            "description": "The instructor notes associated with this grade. This notes field is used for grades on manual grade columns.   That is, when column.grading.type = Manual.  It is also used when column.grading.type = Attempts and the grade has been manually overridden."
        },
        "feedback": {
            "type": "string",
            "description": "The instructor feedback associated with this grade.  This feedback is used for grades on manual grade columns.   That is, when column.grading.type = Manual.  It is also used when column.grading.type = Attempts and the grade has been manually overridden."
        },
        "exempt": {
            "type": "boolean",
            "description": "Whether the score associated with this grade is ignored when computing the course grade."
        },
        "gradeNotationId": {
            "type": "string",
            "description": "The Id of a Grade Notation which can be optionally associated with this Grade. If a Grade Notation is specified for this Grade, then the DisplayGrade's Text attribute will contain the Grade Notation's Description."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.gradebook.publicapi.v2.GradeV2",
    "typeName": "BlackboardWebappsGradebookPublicapiV2GradeV2"
},
    requestType: "CourseGradesUpdateColumnGradeRequest",
    isMultipart: false,
    originalName: "updateColumnGrade",
    isWrite: true
  } as ApiMethodInfo,

  getUserGrades: {
    description: "Loads the course grades for a specific user.\n\nUsers with entitlement \"course.gradebook.MODIFY\" have read access to all the properties of the collection results.\n\nUsers without entitlement \"course.gradebook.MODIFY\" requesting grades for themselves (i.e., userId = current user id) have read access to a restricted subset of properties of the collections result. These are the properties available to a student when requesting his or her own grades:\n\n- userId\n- columnId\n- status\n- text\n- score\n- exempt\n- feedback\n\n**Since**: 3300.0.0",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}/gradebook/users/{userId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "userId",
        "type": "string",
        "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>primary</td> <td>_123_1</td>         </tr>         <tr>           <td>externalId</td> <td>externalId:jsmith</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>uuid</td> <td>uuid:915c7567d76d444abf1eed56aad3beb5</td>         </tr>       </tbody>   </table> </div> The following id prefixes require that the caller have the system.user.properties.MODIFY entitlement to use and will fail with a security error if attempted to be used without that.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>institutionEmail</td> <td>institutionEmail:name@example.com</td>         </tr>         <tr>           <td>email</td> <td>email:name@example.com</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>studentId</td> <td>studentId:123456 </td>         </tr>       </tbody>   </table> </div>",
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
        "name": "firstRelevantDate",
        "type": "string",
        "description": "Search for grades with a firstRelevantDate date relative to this value. 'firstRelevantDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.78.0",
        "required": false
    },
    {
        "name": "firstRelevantDateCompare",
        "type": "string",
        "description": "Used alongside the 'firstRelevantDate' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.78.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "lastRelevantDate",
        "type": "string",
        "description": "Search for grades with a lastRelevantDate date relative to this value. 'lastRelevantDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.78.0",
        "required": false
    },
    {
        "name": "lastRelevantDateCompare",
        "type": "string",
        "description": "Used alongside the 'lastRelevantDate' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.78.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
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
    requestType: "CourseGradesGetUserGradesRequest",
    isMultipart: false,
    originalName: "getUserGrades",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const CourseGradesHandlers = {
  getColumnGroupAttempts: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getColumnGroupAttempts;
    
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

  createColumnGroupAttempt: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.createColumnGroupAttempt;
    
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

  getColumnGroupAttempt: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getColumnGroupAttempt;
    
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

  deleteColumnGroupAttempt: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.deleteColumnGroupAttempt;
    
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

  updateColumnGroupAttempt: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.updateColumnGroupAttempt;
    
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

  getCourseGradebookLogsByGradebookColumnId: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getCourseGradebookLogsByGradebookColumnId;
    
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

  getCourseGradebookLogs: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getCourseGradebookLogs;
    
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

  getGradeSchemas: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getGradeSchemas;
    
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

  createGradeSchema: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.createGradeSchema;
    
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

  getGradeSchema: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getGradeSchema;
    
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

  deleteGradeSchema: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.deleteGradeSchema;
    
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

  updateGradeSchema: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.updateGradeSchema;
    
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

  getGradeColumns: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getGradeColumns;
    
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

  createGradeColumn: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.createGradeColumn;
    
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

  getGradeColumn: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getGradeColumn;
    
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

  deleteGradeColumn: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.deleteGradeColumn;
    
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

  updateGradeColumn: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.updateGradeColumn;
    
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

  getColumnAttempts: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getColumnAttempts;
    
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

  createColumnAttempt: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.createColumnAttempt;
    
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

  getColumnAttempt: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getColumnAttempt;
    
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

  updateColumnAttempt: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.updateColumnAttempt;
    
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

  getColumnGrades: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getColumnGrades;
    
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

  getColumnGradeLastChanged: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getColumnGradeLastChanged;
    
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

  getColumnGrade: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getColumnGrade;
    
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

  updateColumnGrade: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.updateColumnGrade;
    
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

  getUserGrades: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGradesMethods.getUserGrades;
    
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
