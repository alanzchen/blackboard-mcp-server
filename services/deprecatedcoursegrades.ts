import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const DeprecatedCourseGradesMethods: { [key: string]: ApiMethodInfo } = {
  getGradeColumns: {
    description: "Returns a list of grade columns.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed. Alternatively, student users may view the grade columns if they are enrolled in the course, and the mygrade tool is available in the course, and the columns are visible to the student. Observers may view grade columns if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.\n\nStudent or observer users may view a limited subset of grade column fields:\n\n- id\n- name\n- description\n- externalGrade\n- contentId\n- score.possible\n- grading.type\n- grading.due\n- grading.attemptsAllowed\n- grading.scoringModel\n- availability.available\n\n**Since**: 3000.3.0\n\n**Deprecated**: since 3200.10.0; use the v2 end-point instead",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns",
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
    requestType: "DeprecatedCourseGradesGetGradeColumnsRequest",
    isMultipart: false,
    originalName: "getGradeColumns",
    isWrite: false
  } as ApiMethodInfo,

  createGradeColumn: {
    description: "Create a manual grade column. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3000.7.0\n\n**Deprecated**: since 3200.10.0; use the v2 end-point instead",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns",
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
        "name": {
            "type": "string",
            "description": "The name of the grade column."
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
            "title": "blackboard.webapps.gradebook.publicapi.v1.GradeColumnV1.Score",
            "properties": {
                "possible": {
                    "type": "number",
                    "description": "The points possible for this grade column."
                },
                "decimalPlaces": {
                    "type": "integer",
                    "format": "int32",
                    "description": "Decimal place precision used to display scores for this grade column.\n\n**Deprecated**: since 3200.10.0; no alternative exists since this field never fully functioned as described."
                }
            }
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling the availability/visibility of grade column data.",
            "title": "blackboard.webapps.gradebook.publicapi.v1.GradeColumnV1.Availability",
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
            "title": "blackboard.webapps.gradebook.publicapi.v1.GradeColumnV1.Grading",
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
                "anonymousGrading": {
                    "type": "object",
                    "description": "Settings for anonymous grading",
                    "title": "blackboard.webapps.gradebook.publicapi.v1.GradeColumnV1.Grading.AnonymousGrading",
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
                }
            },
            "required": [
                "anonymousGrading",
                "type"
            ]
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v1.GradeColumnV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradeColumnV1"
},
    requestType: "DeprecatedCourseGradesCreateGradeColumnRequest",
    isMultipart: false,
    originalName: "createGradeColumn",
    isWrite: true
  } as ApiMethodInfo,

  getGradeColumn: {
    description: "Loads a specific grade column.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed. Alternatively, student users may view the grade column if they are enrolled in the course, and the mygrade tool is available in the course, and the column is visible to the student. Observers may view the grade column if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.\n\nStudent or observer users may view a limited subset of grade column fields:\n\n- id\n- name\n- description\n- externalGrade\n- contentId\n- score.possible\n- grading.type\n- grading.due\n- grading.attemptsAllowed\n- grading.scoringModel\n- availability.available\n\n**Since**: 3000.3.0\n\n**Deprecated**: since 3200.10.0; use the v2 end-point instead",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}",
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
    requestBodySchema: null,
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.gradebook.publicapi.v1.GradeColumn",
    "typeName": "BlackboardWebappsGradebookPublicapiV1GradeColumn"
},
    requestType: "DeprecatedCourseGradesGetGradeColumnRequest",
    isMultipart: false,
    originalName: "getGradeColumn",
    isWrite: false
  } as ApiMethodInfo,

  deleteGradeColumn: {
    description: "Delete a specific grade column. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3000.7.0\n\n**Deprecated**: since 3200.10.0; use the v2 end-point instead",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}",
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
    requestType: "DeprecatedCourseGradesDeleteGradeColumnRequest",
    isMultipart: false,
    originalName: "deleteGradeColumn",
    isWrite: true
  } as ApiMethodInfo,

  updateGradeColumn: {
    description: "Update a manual grade column. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3000.7.0\n\n**Deprecated**: since 3200.10.0; use the v2 end-point instead",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}",
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
        "name": {
            "type": "string",
            "description": "The name of the grade column."
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
            "title": "blackboard.webapps.gradebook.publicapi.v1.GradeColumnV1.Score",
            "properties": {
                "possible": {
                    "type": "number",
                    "description": "The points possible for this grade column."
                },
                "decimalPlaces": {
                    "type": "integer",
                    "format": "int32",
                    "description": "Decimal place precision used to display scores for this grade column.\n\n**Deprecated**: since 3200.10.0; no alternative exists since this field never fully functioned as described."
                }
            }
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling the availability/visibility of grade column data.",
            "title": "blackboard.webapps.gradebook.publicapi.v1.GradeColumnV1.Availability",
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
            "title": "blackboard.webapps.gradebook.publicapi.v1.GradeColumnV1.Grading",
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
                "anonymousGrading": {
                    "type": "object",
                    "description": "Settings for anonymous grading",
                    "title": "blackboard.webapps.gradebook.publicapi.v1.GradeColumnV1.Grading.AnonymousGrading",
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
                }
            }
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.gradebook.publicapi.v1.GradeColumn",
    "typeName": "BlackboardWebappsGradebookPublicapiV1GradeColumn"
},
    requestType: "DeprecatedCourseGradesUpdateGradeColumnRequest",
    isMultipart: false,
    originalName: "updateGradeColumn",
    isWrite: true
  } as ApiMethodInfo,

  getColumnAttempts: {
    description: "Returns a list of attempts associated with the specified grade column.\n\nThe 'course.gradebook.MODIFY' entitlement is needed to view column attempts. Alternatively, if the 'userId' query parameter is specified, and the user making the request matches the specified 'userId', then the user may view his/her own attempt.  When querying an anonymous grade column, if the release criteria has not yet been met, then the 'userId' attribute will not be populated for the returned column attempts.  If the release criteria has not been met and the 'userId' query parameter is specified, a 403 response is returned, unless the requesting user matches the specified 'userId' value.\n\nA subset of attempt properties are available to a student when requesting his or her own attempts:\n\n- id\n- userId\n- groupAttemptId\n- status\n- text\n- score\n- groupOverride\n- feedback\n- studentComments\n- studentSubmission\n- exempt\n- created\nWhen this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student's submission & comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student's submission & comments are visible to the API Gateway User.\n\nIf the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\nIf the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\n**Since**: 3100.4.0\n\n**Deprecated**: since 3300.0.0; use the v2 end-point instead",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/attempts",
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
    requestType: "DeprecatedCourseGradesGetColumnAttemptsRequest",
    isMultipart: false,
    originalName: "getColumnAttempts",
    isWrite: false
  } as ApiMethodInfo,

  getColumnAttempt: {
    description: "Loads the grade column attempt for the specified id.\n\nThe 'course.gradebook.MODIFY' entitlement is needed to view an attempt. Alternatively, if the user making the request is also the user associated with the attempt grade, then the user may view his/her own attempt.  When accessing an anonymous grade column attempt, if the release criteria has not yet been met, then the 'userId' attribute will not be populated for the returned attempt.\n\nA subset of attempt properties are available to a student when requesting his or her own attempt:\n\n- id\n- userId\n- groupAttemptId\n- status\n- text\n- score\n- groupOverride\n- feedback\n- studentComments\n- studentSubmission\n- exempt\n- created\nWhen this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student's submission & comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student's submission & comments are visible to the API Gateway User. </p> If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\nIf the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\n**Since**: 3100.4.0\n\n**Deprecated**: since 3300.0.0; use the v2 end-point instead",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/attempts/{attemptId}",
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
    "ref": "blackboard.webapps.gradebook.publicapi.v1.Attempt",
    "typeName": "BlackboardWebappsGradebookPublicapiV1Attempt"
},
    requestType: "DeprecatedCourseGradesGetColumnAttemptRequest",
    isMultipart: false,
    originalName: "getColumnAttempt",
    isWrite: false
  } as ApiMethodInfo,

  getColumnGrades: {
    description: "Returns a list of grades associated with the specified grade column.  This operation does not include 'ReadyToPost' grades when returning grade details for calculated grade columns.\n\nUsers with entitlement 'course.gradebook.MODIFY' can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \"403 - Forbidden.\"\n\nEnrolled users without the 'course.gradebook.MODIFY' entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \"403 - Forbidden.\".  A subset of grade properties are available to a student when requesting his or her own grades:\n\n- userId\n- columnId\n- status\n- text\n- score\n- exempt\n- feedback\n\n**Since**: 3000.3.0\n\n**Deprecated**: since 3300.0.0; use the v2 end-point instead",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/users",
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
    }
],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "DeprecatedCourseGradesGetColumnGradesRequest",
    isMultipart: false,
    originalName: "getColumnGrades",
    isWrite: false
  } as ApiMethodInfo,

  getColumnGrade: {
    description: "Loads the grade column grade for a specific user.  If grade details have yet to be entered for the specified user, then no grade details will be included in the returned grade object.  This operation does not include 'ReadyToPost' grades when returning grade details for calculated grade columns.\n\nUsers with entitlement 'course.gradebook.MODIFY' can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \"403 - Forbidden.\"\n\nEnrolled users without the 'course.gradebook.MODIFY' entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \"403 - Forbidden.\".  A subset of grade properties are available to a student when requesting his or her own grades:\n\n- userId\n- columnId\n- status\n- text\n- score\n- exempt\n- feedback\n\n**Since**: 3000.3.0\n\n**Deprecated**: since 3300.0.0; use the v2 end-point instead",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/users/{userId}",
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
    requestType: "DeprecatedCourseGradesGetColumnGradeRequest",
    isMultipart: false,
    originalName: "getColumnGrade",
    isWrite: false
  } as ApiMethodInfo,

  updateColumnGrade: {
    description: "Update the grade column grade for a specific user, including the text grade, score, instructor notes and feedback, and exempt status.  When updating text grade or score, the resulting grade is always marked as 'Posted'.  This end-point, currently, does not support marking the grade as 'ReadyToPost'.  Grade overrides may be cleared by either specifying the 'score' attribute as null, or the 'text'; attribute as null, '', or '-' in the body of the request. The entitlement 'course.gradebook.MODIFY' is required to perform this operation.\n\n**Since**: 3000.5.0\n\n**Deprecated**: since 3300.0.0; use the v2 end-point instead",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/users/{userId}",
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
            "description": "The text representation of this grade."
        },
        "score": {
            "type": "number",
            "description": "The score associated with this grade."
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
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.gradebook.publicapi.v1.Grade",
    "typeName": "BlackboardWebappsGradebookPublicapiV1Grade"
},
    requestType: "DeprecatedCourseGradesUpdateColumnGradeRequest",
    isMultipart: false,
    originalName: "updateColumnGrade",
    isWrite: true
  } as ApiMethodInfo,

  getUserGrades: {
    description: "Loads the course grades for a specific user.\n\nUsers with entitlement \"course.gradebook.MODIFY\" have read access to all the properties of the collection results.\n\nUsers without entitlement \"course.gradebook.MODIFY\" requesting grades for themselves (i.e., userId = current user id) have read access to a restricted subset of properties of the collections result. These are the properties available to a student when requesting his or her own grades:\n\n- userId\n- columnId\n- status\n- text\n- score\n- exempt\n- feedback\n\n**Since**: 3000.3.0\n\n**Deprecated**: since 3300.0.0; use the v2 end-point instead",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/gradebook/users/{userId}",
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
    requestType: "DeprecatedCourseGradesGetUserGradesRequest",
    isMultipart: false,
    originalName: "getUserGrades",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const DeprecatedCourseGradesHandlers = {
  getGradeColumns: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DeprecatedCourseGradesMethods.getGradeColumns;
    
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
    const methodInfo = DeprecatedCourseGradesMethods.createGradeColumn;
    
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
    const methodInfo = DeprecatedCourseGradesMethods.getGradeColumn;
    
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
    const methodInfo = DeprecatedCourseGradesMethods.deleteGradeColumn;
    
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
    const methodInfo = DeprecatedCourseGradesMethods.updateGradeColumn;
    
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
    const methodInfo = DeprecatedCourseGradesMethods.getColumnAttempts;
    
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
    const methodInfo = DeprecatedCourseGradesMethods.getColumnAttempt;
    
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
    const methodInfo = DeprecatedCourseGradesMethods.getColumnGrades;
    
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

  getColumnGrade: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DeprecatedCourseGradesMethods.getColumnGrade;
    
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
    const methodInfo = DeprecatedCourseGradesMethods.updateColumnGrade;
    
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
    const methodInfo = DeprecatedCourseGradesMethods.getUserGrades;
    
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
