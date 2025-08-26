import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter, ApiSchema } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const DeprecatedCoursesMethods: { [key: string]: ApiMethodInfo } = {
  getCourses: {
    description: "Returns a list of courses and organizations.\n\nTo view disabled courses a user must have the entitlement 'system.course.VIEW'.\n\nUsers with the 'course.configure-properties.EXECUTE' entitlement can access all course properties.\n\nUsers enrolled in the course have read access to all properties except:\n\n- uuid\n- externalId\n- dataSourceId\n- created\n- allowGuests\n- enrollment.accessCode\n\nUsers who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:\n\n- id\n- courseId\n- name\n- description\n- organization\n- readOnly\n- termId\n- availability.available\n- availability.duration.type\n- availability.duration.start\n- availability.duration.end\n- availability.duration.daysOfUse\nWhen courses are child courses, parent course data is also returned to provide a complete data representation of course relationships.\n\nIf the course enrollment is self-enroll, all users can view the course as though they were enrolled.\n\n**Since**: 3000.1.0\n\n**Deprecated**: since 3400.8.0; use the v2 end-point instead",
    method: "get",
    path: "/learn/api/public/v1/courses",
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
        "name": "courseId",
        "type": "string",
        "description": "Search for courses with courseId properties that contain this value.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "name",
        "type": "string",
        "description": "Search for courses with name properties that contain this value.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "description",
        "type": "string",
        "description": "Search for courses with description properties that contain this value.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "externalId",
        "type": "string",
        "description": "Search for courses with externalId properties that contain this value.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for courses with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "allowGuests",
        "type": "boolean",
        "description": "Search for courses which are configured to allow/disallow guest access, based on input.  Default: n/a (return courses regardless of guests allowed)\n\n**Since**: 3200.3.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter.  Defaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "availability.available",
        "type": "string",
        "description": "Search for courses with availability.available properties that contain this value.\n\n**Since**: 3000.13.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the course. |\n| No | Students may not access the course. |\n| Disabled | Disabled by the SIS. Students may not access the course.  **Since**: 3100.0.0 |\n| Term | Availability is inherited from the term settings. Requires a termId be set. |\n",
        "required": false
    },
    {
        "name": "dataSourceId",
        "type": "string",
        "description": "Search for courses with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "termId",
        "type": "string",
        "description": "Search for courses with this termId.  This may optionally be the term's externalId using the syntax \"externalId:spring2015\".\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "organization",
        "type": "boolean",
        "description": "Search for courses by organization flag.  A value of 'true' indicates that search results should be limited to only Organizations.  A value of 'false' indicates results should be limited to Courses.  Not setting this field indicates that both Courses and Organizations should be returned.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc),created\" Supported fields are:\n\n- courseId\n- name\n- externalId\n- created\n\n**Since**: 3100.0.0",
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
    requestType: "DeprecatedCoursesGetCoursesRequest",
    isMultipart: false,
    originalName: "getCourses",
    isWrite: false
  } as ApiMethodInfo,

  createCourse: {
    description: "Creates a course or organization.\n\nThe 'system.course.CREATE' entitlement is needed to create a course, while 'system.org.CREATE' is needed for an organization.\n\n**Since**: 2015.11.0\n\n**Deprecated**: since 3400.8.0; use the v2 end-point instead",
    method: "post",
    path: "/learn/api/public/v1/courses",
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
            "description": "An optional externally-defined unique ID for the course. Defaults to the courseId.\n\nFormerly known as 'batchUid'.",
            "maxLength": 256
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this course. This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "courseId": {
            "type": "string",
            "description": "The Course ID attribute, shown to users in the UI.",
            "maxLength": 100
        },
        "name": {
            "type": "string",
            "description": "The name of the course.",
            "maxLength": 333
        },
        "description": {
            "type": "string",
            "description": "The description of the course."
        },
        "organization": {
            "type": "boolean",
            "description": "Whether this object represents an Organization. Defaults to false."
        },
        "ultraStatus": {
            "type": "string",
            "description": "Whether the course is rendered using Classic or Ultra Course View.\n\n\n| Type      | Description\n | --------- | --------- |\n| Undecided | The ultra status is not decided. |\n| Classic | The course is decided as classic. |\n| Ultra | The course is decided as ultra |\n| Ultrapreview | The course is currently in Ultra mode but during the preview state where it may still be reverted via a Restore to the classic state |\n",
            "enum": [
                "Undecided",
                "Classic",
                "Ultra",
                "Ultrapreview"
            ]
        },
        "allowGuests": {
            "type": "boolean",
            "description": "Whether guests (users with the role guest) are allowed access to the course. Modifiable only for Classic course. Defaults to {@code true} for Classic Courses and {@code false} for Ultra Courses."
        },
        "readOnly": {
            "type": "boolean",
            "description": "This status does not affect availability of the course for viewing in any way. readOnly is valid for both Ultra and Classic courses. If an Ultra course is in readOnly mode, updates are not possible. For a Classic course in readOnly mode, updates are still possible (through Web UI but not through REST i.e. closed is enforced for original courses when updated through REST the same way Ultra courses are blocked) but new notifications are not generated.\n\n**Deprecated**: since 3400.8.0; use the v2 endpoint's closedComplete property instead"
        },
        "termId": {
            "type": "string",
            "description": "The ID of the term associated to this course. This may optionally be the term's externalId using the syntax \"externalId:spring.2016\"."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the course to students.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.courses.CourseV1.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the course is currently available to students. Instructors can always access the course if they have 'Access unavailable course' entitlement. If set to 'Term', the course's parent term availability settings will be used.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the course. |\n| No | Students may not access the course. |\n| Disabled | Disabled by the SIS. Students may not access the course.  **Since**: 3100.0.0 |\n| Term | Availability is inherited from the term settings. Requires a termId be set. |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "Disabled",
                        "Term"
                    ]
                },
                "duration": {
                    "type": "object",
                    "description": "Settings controlling the length of time the course is available.",
                    "title": "blackboard.webapps.blackboard.publicapi.v1.courses.CourseV1.Availability.Duration",
                    "properties": {
                        "type": {
                            "type": "string",
                            "description": "The intended length of the course.\n\n\n| Type      | Description\n | --------- | --------- |\n| Continuous | Course is active on an ongoing basis. |\n| DateRange | Course is only intended to be available between specific date ranges |\n| FixedNumDays | Course is only available for a set number of days |\n| UseTerm | Course availablity is dictated by its associated term |\n",
                            "enum": [
                                "Continuous",
                                "DateRange",
                                "FixedNumDays",
                                "UseTerm"
                            ]
                        },
                        "start": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this course starts. May only be set if availability.duration.type is DateRange."
                        },
                        "end": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this course ends. May only be set if availability.duration.type is DateRange."
                        },
                        "daysOfUse": {
                            "type": "integer",
                            "format": "int32",
                            "description": "The number of days this course can be used. May only be set if availability.duration.type is FixedNumDays."
                        }
                    }
                }
            }
        },
        "enrollment": {
            "type": "object",
            "description": "Settings controlling how students may enroll in the course.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.courses.CourseV1.Enrollment",
            "properties": {
                "type": {
                    "type": "string",
                    "description": "Specifies the enrollment options for the course. Defaults to InstructorLed.\n\n\n| Type      | Description\n | --------- | --------- |\n| InstructorLed | Enrollment tasks for the course can only performed by the instructor |\n| SelfEnrollment | Instructors have the ability to enroll users, and students can also enroll themselves in the course |\n| EmailEnrollment | Instructors have the ability to enroll users, and students can email requests to the instructor for enrollment |\n",
                    "enum": [
                        "InstructorLed",
                        "SelfEnrollment",
                        "EmailEnrollment"
                    ]
                },
                "start": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The date on which enrollments are allowed for the course. May only be set if enrollment.type is SelfEnrollment."
                },
                "end": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The date on which enrollment in this course ends. May only be set if enrollment.type is SelfEnrollment."
                },
                "accessCode": {
                    "type": "string",
                    "description": "The enrollment access code associated with this course. May only be set if enrollment.type is SelfEnrollment."
                }
            }
        },
        "locale": {
            "type": "object",
            "description": "Settings controlling localization within the course.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.courses.CourseV1.Locale",
            "properties": {
                "id": {
                    "type": "string",
                    "description": "The locale of this course."
                },
                "force": {
                    "type": "boolean",
                    "description": "Whether students are forced to use the course's specified locale."
                }
            }
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.courses.CourseV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CoursesCourseV1"
},
    requestType: "DeprecatedCoursesCreateCourseRequest",
    isMultipart: false,
    originalName: "createCourse",
    isWrite: true
  } as ApiMethodInfo,

  getCourse: {
    description: "Loads a specific course or organization.\n\nTo view disabled courses a user must have the entitlement 'system.course.VIEW'.\n\nUsers with the 'course.configure-properties.EXECUTE' entitlement can access all course properties.\n\nUsers enrolled in the course have read access to all properties except:\n\n- uuid\n- externalId\n- dataSourceId\n- created\n- allowGuests\n- enrollment.accessCode\n\nUsers who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:\n\n- id\n- courseId\n- name\n- description\n- organization\n- readOnly\n- termId\n- availability.available\n- availability.duration.type\n- availability.duration.start\n- availability.duration.end\n- availability.duration.daysOfUse\nIf the course enrollment is self-enroll, all users can view the course as though they were enrolled.\n\n**Since**: 2015.11.0\n\n**Deprecated**: since 3400.8.0; use the v2 end-point instead",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}",
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
    requestBodySchema: null,
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.courses.Course",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1CoursesCourse"
},
    requestType: "DeprecatedCoursesGetCourseRequest",
    isMultipart: false,
    originalName: "getCourse",
    isWrite: false
  } as ApiMethodInfo,

  deleteCourse: {
    description: "Deletes a course or organization in synchronous fashion.\n\nThe 'system.course.DELETE' entitlement is needed to delete a course, while 'system.org.DELETE' is needed for an organization.\n\n**Since**: 2015.11.0\n\n**Deprecated**: since 3400.8.0; use the v2 end-point instead",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}",
    pathParams: [
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
    requestType: "DeprecatedCoursesDeleteCourseRequest",
    isMultipart: false,
    originalName: "deleteCourse",
    isWrite: true
  } as ApiMethodInfo,

  updateCourse: {
    description: "Updates a course or organization.\n\nTo update a course, the user must have either 'system.course|org.properties.MODIFY' or 'course.configure-properties.EXECUTE' entitlements.  However, if the user has the latter entitlement, then additional entitlements are needed to be able to update certain fields, as shown below: \n\n | Field                           | Entitlements Required                                                  |\n |---------------------------------|------------------------------------------------------------------------|\n | name                            | course.name.MODIFY                                                     |\n | description                     | course.name.MODIFY                                                     |\n | allowGuests                     | course.configure-guest-access.EXECUTE                                  |\n | enrollment.type                 | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.start                | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.end                  | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.accessCode           | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | availability.available          | course.configure-properties.EXECUTE, course.availability.MODIFY        |\n | locale.id                       | course.configure-properties.EXECUTE, course.locale.MODIFY              |\n | locale.force                    | course.configure-properties.EXECUTE, course.locale.MODIFY              |\n | availability.duration.type      | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.start     | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.end       | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.daysOfUse | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n \n\n**Since**: 2015.11.0\n\n**Deprecated**: since 3400.8.0; use the v2 end-point instead",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}",
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
            "description": "An optional externally-defined unique ID for the course. Defaults to the courseId.\n\nFormerly known as 'batchUid'.",
            "maxLength": 256
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this course. This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "name": {
            "type": "string",
            "description": "The name of the course.",
            "maxLength": 333
        },
        "description": {
            "type": "string",
            "description": "The description of the course."
        },
        "allowGuests": {
            "type": "boolean",
            "description": "Whether guests (users with the role guest) are allowed access to the course. Modifiable only for Classic course. Defaults to {@code true} for Classic Courses and {@code false} for Ultra Courses."
        },
        "readOnly": {
            "type": "boolean",
            "description": "This status does not affect availability of the course for viewing in any way. readOnly is valid for both Ultra and Classic courses. If an Ultra course is in readOnly mode, updates are not possible. For a Classic course in readOnly mode, updates are still possible (through Web UI but not through REST i.e. closed is enforced for original courses when updated through REST the same way Ultra courses are blocked) but new notifications are not generated.\n\n**Deprecated**: since 3400.8.0; use the v2 endpoint's closedComplete property instead"
        },
        "termId": {
            "type": "string",
            "description": "The ID of the term associated to this course. This may optionally be the term's externalId using the syntax \"externalId:spring.2016\"."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the course to students.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.courses.CourseV1.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the course is currently available to students. Instructors can always access the course if they have 'Access unavailable course' entitlement. If set to 'Term', the course's parent term availability settings will be used.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the course. |\n| No | Students may not access the course. |\n| Disabled | Disabled by the SIS. Students may not access the course.  **Since**: 3100.0.0 |\n| Term | Availability is inherited from the term settings. Requires a termId be set. |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "Disabled",
                        "Term"
                    ]
                },
                "duration": {
                    "type": "object",
                    "description": "Settings controlling the length of time the course is available.",
                    "title": "blackboard.webapps.blackboard.publicapi.v1.courses.CourseV1.Availability.Duration",
                    "properties": {
                        "type": {
                            "type": "string",
                            "description": "The intended length of the course.\n\n\n| Type      | Description\n | --------- | --------- |\n| Continuous | Course is active on an ongoing basis. |\n| DateRange | Course is only intended to be available between specific date ranges |\n| FixedNumDays | Course is only available for a set number of days |\n| UseTerm | Course availablity is dictated by its associated term |\n",
                            "enum": [
                                "Continuous",
                                "DateRange",
                                "FixedNumDays",
                                "UseTerm"
                            ]
                        },
                        "start": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this course starts. May only be set if availability.duration.type is DateRange."
                        },
                        "end": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this course ends. May only be set if availability.duration.type is DateRange."
                        },
                        "daysOfUse": {
                            "type": "integer",
                            "format": "int32",
                            "description": "The number of days this course can be used. May only be set if availability.duration.type is FixedNumDays."
                        }
                    }
                }
            }
        },
        "enrollment": {
            "type": "object",
            "description": "Settings controlling how students may enroll in the course.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.courses.CourseV1.Enrollment",
            "properties": {
                "type": {
                    "type": "string",
                    "description": "Specifies the enrollment options for the course. Defaults to InstructorLed.\n\n\n| Type      | Description\n | --------- | --------- |\n| InstructorLed | Enrollment tasks for the course can only performed by the instructor |\n| SelfEnrollment | Instructors have the ability to enroll users, and students can also enroll themselves in the course |\n| EmailEnrollment | Instructors have the ability to enroll users, and students can email requests to the instructor for enrollment |\n",
                    "enum": [
                        "InstructorLed",
                        "SelfEnrollment",
                        "EmailEnrollment"
                    ]
                },
                "start": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The date on which enrollments are allowed for the course. May only be set if enrollment.type is SelfEnrollment."
                },
                "end": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The date on which enrollment in this course ends. May only be set if enrollment.type is SelfEnrollment."
                },
                "accessCode": {
                    "type": "string",
                    "description": "The enrollment access code associated with this course. May only be set if enrollment.type is SelfEnrollment."
                }
            }
        },
        "locale": {
            "type": "object",
            "description": "Settings controlling localization within the course.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.courses.CourseV1.Locale",
            "properties": {
                "id": {
                    "type": "string",
                    "description": "The locale of this course."
                },
                "force": {
                    "type": "boolean",
                    "description": "Whether students are forced to use the course's specified locale."
                }
            }
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.courses.Course",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1CoursesCourse"
},
    requestType: "DeprecatedCoursesUpdateCourseRequest",
    isMultipart: false,
    originalName: "updateCourse",
    isWrite: true
  } as ApiMethodInfo,

  copyCourse: {
    description: "Creates an exact copy of an existing Course into a new Course.\n\nUsers with entitlements 'system.course.copy.EXECUTE' can create a course copy. Users with entitlements 'system.org.copy.EXECUTE' can create an organization copy. All users's must also have 'course.content.copy.EXECUTE' entitlement associated with the specified source courseId.\n\n**Since**: 3300.0.0\n\n**Deprecated**: since 3800.0.0; use the v2 end-point instead.",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/copy",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: {
    "type": "object",
    "properties": {
        "courseId": {
            "type": "string",
            "description": "The Course ID to copy into."
        }
    },
    "description": ""
},
    responseSchema: null,
    requestType: "DeprecatedCoursesCopyCourseRequest",
    isMultipart: false,
    originalName: "copyCourse",
    isWrite: true
  } as ApiMethodInfo,

  getCourses2: {
    description: "Returns a list of courses and organizations.\n\nTo view disabled courses a user must have the entitlement 'system.course.VIEW'.\n\nUsers with the 'course.configure-properties.EXECUTE' course entitlement, or the 'system.course.properties.MODIFY' system entitlement can access all course properties.\n\nUsers enrolled in the course have read access to all properties except:\n\n- uuid\n- externalId\n- dataSourceId\n- created\n- allowGuests\n- enrollment.accessCode\n\nUsers who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:\n\n- id\n- courseId\n- name\n- description\n- organization\n- readOnly\n- termId\n- availability.available\n- availability.duration.type\n- availability.duration.start\n- availability.duration.end\n- availability.duration.daysOfUse\nWhen courses are child courses, parent course data is also returned to provide a complete data representation of course relationships.\n\nIf the course enrollment is self-enroll, all users can view the course as though they were enrolled.\n\n**Since**: 3400.8.0\n\n**Deprecated**: since 3800.1.0; use the v3 end-point instead",
    method: "get",
    path: "/learn/api/public/v2/courses",
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
        "name": "modified",
        "type": "string",
        "description": "Search for courses with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3500.4.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3500.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "courseId",
        "type": "string",
        "description": "Search for courses with courseId properties that contain this value.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "name",
        "type": "string",
        "description": "Search for courses with name properties that contain this value.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "description",
        "type": "string",
        "description": "Search for courses with description properties that contain this value.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "externalId",
        "type": "string",
        "description": "Search for courses with externalId properties that contain this value.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for courses with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "allowGuests",
        "type": "boolean",
        "description": "Search for courses which are configured to allow/disallow guest access, based on input.  Default: n/a (return courses regardless of guests allowed)\n\n**Since**: 3200.3.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter.  Defaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "availability.available",
        "type": "string",
        "description": "Search for courses with availability.available properties that contain this value.\n\n**Since**: 3000.13.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the course. |\n| No | Students may not access the course. |\n| Disabled | Disabled by the SIS. Students may not access the course.  **Since**: 3100.0.0 |\n| Term | Availability is inherited from the term settings. Requires a termId be set. |\n",
        "required": false
    },
    {
        "name": "dataSourceId",
        "type": "string",
        "description": "Search for courses with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "termId",
        "type": "string",
        "description": "Search for courses with this termId.  This may optionally be the term's externalId using the syntax \"externalId:spring2015\".\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "organization",
        "type": "boolean",
        "description": "Search for courses by organization flag.  A value of 'true' indicates that search results should be limited to only Organizations.  A value of 'false' indicates results should be limited to Courses.  Not setting this field indicates that both Courses and Organizations should be returned.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc),created\" Supported fields are:\n\n- courseId\n- name\n- externalId\n- created\n- modified\n\n**Since**: 3400.8.0",
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
    requestType: "DeprecatedCoursesGetCourses2Request",
    isMultipart: false,
    originalName: "getCourses",
    isWrite: false
  } as ApiMethodInfo,

  createCourse2: {
    description: "Creates a course or organization.\n\nThe 'system.course.CREATE' entitlement is needed to create a course, while 'system.org.CREATE' is needed for an organization.\n\n**Since**: 3400.8.0\n\n**Deprecated**: since 3800.1.0; use the v3 end-point instead",
    method: "post",
    path: "/learn/api/public/v2/courses",
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
            "description": "An optional externally-defined unique ID for the course. Defaults to the courseId.\n\nFormerly known as 'batchUid'.",
            "maxLength": 256
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this course. This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "courseId": {
            "type": "string",
            "description": "The Course ID attribute, shown to users in the UI.",
            "maxLength": 100
        },
        "name": {
            "type": "string",
            "description": "The name of the course.",
            "maxLength": 333
        },
        "description": {
            "type": "string",
            "description": "The description of the course."
        },
        "organization": {
            "type": "boolean",
            "description": "Whether this object represents an Organization. Defaults to false."
        },
        "ultraStatus": {
            "type": "string",
            "description": "Whether the course is rendered using Classic or Ultra Course View.\n\n\n| Type      | Description\n | --------- | --------- |\n| Undecided | The ultra status is not decided. |\n| Classic | The course is decided as classic. |\n| Ultra | The course is decided as ultra |\n| Ultrapreview | The course is currently in Ultra mode but during the preview state where it may still be reverted via a Restore to the classic state |\n",
            "enum": [
                "Undecided",
                "Classic",
                "Ultra",
                "Ultrapreview"
            ]
        },
        "allowGuests": {
            "type": "boolean",
            "description": "Whether guests (users with the role guest) are allowed access to the course. Modifiable only for Classic course. Defaults to {@code true} for Classic Courses and {@code false} for Ultra Courses."
        },
        "allowObservers": {
            "type": "boolean",
            "description": "Whether observers are allowed access to the course. Modifiable only for Classic course. Defaults to {@code false}.\n\n**Since**: 3900.31.0"
        },
        "closedComplete": {
            "type": "boolean",
            "description": "This status does not affect availability of the course for viewing in any way. closedComplete is valid for both Ultra and Classic courses. If an Ultra course is in closedComplete mode, updates are not possible. For a Classic course in closedComplete mode, updates are still possible (through Web UI but not through REST i.e. closed is enforced for original courses when updated through REST the same way Ultra courses are blocked) but new notifications are not generated."
        },
        "termId": {
            "type": "string",
            "description": "The ID of the term associated to this course. This may optionally be the term's externalId using the syntax \"externalId:spring.2016\"."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the course to students.",
            "title": "blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the course is currently available to students. Instructors can always access the course if they have 'Access unavailable course' entitlement. If set to 'Term', the course's parent term availability settings will be used.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the course. |\n| No | Students may not access the course. |\n| Disabled | Disabled by the SIS. Students may not access the course. @since 3100.0.0 |\n| Term | Availability is inherited from the term settings. Requires a termId be set. |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "Disabled",
                        "Term"
                    ]
                },
                "duration": {
                    "type": "object",
                    "description": "Settings controlling the length of time the course is available.",
                    "title": "blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2.Availability.Duration",
                    "properties": {
                        "type": {
                            "type": "string",
                            "description": "The intended length of the course. Possible values are:\n\n- Continuous: The course is active on an ongoing basis. This is the default.\n- DateRange: The course will only be available between specific date ranges.\n- FixedNumDays: The course will only be available for a set number of days.\n- Term: The course's parent term duration settings will be used.\n\n\n| Type      | Description\n | --------- | --------- |\n| Continuous | Course is active on an ongoing basis. |\n| DateRange | Course is only intended to be available between specific date ranges |\n| FixedNumDays | Course is only available for a set number of days |\n| UseTerm | Course availablity is dictated by its associated term |\n",
                            "enum": [
                                "Continuous",
                                "DateRange",
                                "FixedNumDays",
                                "UseTerm"
                            ]
                        },
                        "start": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this course starts. May only be set if availability.duration.type is DateRange."
                        },
                        "end": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this course ends. May only be set if availability.duration.type is DateRange."
                        },
                        "daysOfUse": {
                            "type": "integer",
                            "format": "int32",
                            "description": "The number of days this course can be used. May only be set if availability.duration.type is FixedNumDays."
                        }
                    }
                }
            }
        },
        "enrollment": {
            "type": "object",
            "description": "Settings controlling how students may enroll in the course.",
            "title": "blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2.Enrollment",
            "properties": {
                "type": {
                    "type": "string",
                    "description": "Specifies the enrollment options for the course. Defaults to InstructorLed.\n\n\n| Type      | Description\n | --------- | --------- |\n| InstructorLed | Enrollment tasks for the course can only performed by the instructor |\n| SelfEnrollment | Instructors have the ability to enroll users, and students can also enroll themselves in the course |\n| EmailEnrollment | Instructors have the ability to enroll users, and students can email requests to the instructor for enrollment |\n",
                    "enum": [
                        "InstructorLed",
                        "SelfEnrollment",
                        "EmailEnrollment"
                    ]
                },
                "start": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The date on which enrollments are allowed for the course. May only be set if enrollment.type is SelfEnrollment."
                },
                "end": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The date on which enrollment in this course ends. May only be set if enrollment.type is SelfEnrollment."
                },
                "accessCode": {
                    "type": "string",
                    "description": "The enrollment access code associated with this course. May only be set if enrollment.type is SelfEnrollment.",
                    "maxLength": 50
                }
            }
        },
        "locale": {
            "type": "object",
            "description": "Settings controlling localization within the course.",
            "title": "blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2.Locale",
            "properties": {
                "id": {
                    "type": "string",
                    "description": "The locale of this course.",
                    "maxLength": 20
                },
                "force": {
                    "type": "boolean",
                    "description": "Whether students are forced to use the course's specified locale."
                }
            }
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV2CoursesCourseV2"
},
    requestType: "DeprecatedCoursesCreateCourse2Request",
    isMultipart: false,
    originalName: "createCourse",
    isWrite: true
  } as ApiMethodInfo,

  getCourse2: {
    description: "Loads a specific course or organization.\n\nTo view disabled courses a user must have the entitlement 'system.course.VIEW'.\n\nUsers with the 'course.configure-properties.EXECUTE' entitlement can access all course properties.\n\nUsers enrolled in the course have read access to all properties except:\n\n- uuid\n- externalId\n- dataSourceId\n- created\n- allowGuests\n- enrollment.accessCode\n\nUsers with no access to the course only have read access to the following properties:\n\n- id\n- courseId\n- name\n- description\n- organization\n- closedComplete\n- termId\n- availability.available\n- availability.duration.type\n- availability.duration.start\n- availability.duration.end\n- availability.duration.daysOfUse\nIf the course enrollment is self-enroll, all users can view the course as though they were enrolled.\n\n**Since**: 3400.8.0\n\n**Deprecated**: since 3800.1.0; use the v3 end-point instead",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}",
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
    requestBodySchema: null,
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2",
    "typeName": "BlackboardWebappsBlackboardPublicapiV2CoursesCourseV2"
},
    requestType: "DeprecatedCoursesGetCourse2Request",
    isMultipart: false,
    originalName: "getCourse",
    isWrite: false
  } as ApiMethodInfo,

  deleteCourse2: {
    description: "Deletes a course or organization in synchronous fashion.\n\nThe 'system.course.DELETE' entitlement is needed to delete a course, while 'system.org.DELETE' is needed for an organization.\n\n**Since**: 3400.8.0\n\n**Deprecated**: since 3800.1.0; use the v3 end-point instead",
    method: "delete",
    path: "/learn/api/public/v2/courses/{courseId}",
    pathParams: [
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
    requestType: "DeprecatedCoursesDeleteCourse2Request",
    isMultipart: false,
    originalName: "deleteCourse",
    isWrite: true
  } as ApiMethodInfo,

  updateCourse2: {
    description: "Updates a course or organization.\n\nTo update a course, the user must have either 'system.course|org.properties.MODIFY' or 'course.configure-properties.EXECUTE' entitlements.  However, if the user has the latter entitlement, then additional entitlements are needed to be able to update certain fields, as shown below: \n\n | Field                           | Entitlements Required                                                  |\n |---------------------------------|------------------------------------------------------------------------|\n | name                            | course.name.MODIFY                                                     |\n | description                     | course.name.MODIFY                                                     |\n | allowGuests                     | course.configure-guest-access.EXECUTE                                  |\n | enrollment.type                 | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.start                | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.end                  | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.accessCode           | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | availability.available          | course.configure-properties.EXECUTE, course.availability.MODIFY        |\n | locale.id                       | course.configure-properties.EXECUTE, course.locale.MODIFY              |\n | locale.force                    | course.configure-properties.EXECUTE, course.locale.MODIFY              |\n | availability.duration.type      | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.start     | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.end       | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.daysOfUse | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n \n\n**Since**: 3400.8.0\n\n**Deprecated**: since 3800.1.0; use the v3 end-point instead",
    method: "patch",
    path: "/learn/api/public/v2/courses/{courseId}",
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
            "description": "An optional externally-defined unique ID for the course. Defaults to the courseId.\n\nFormerly known as 'batchUid'.",
            "maxLength": 256
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this course. This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "name": {
            "type": "string",
            "description": "The name of the course.",
            "maxLength": 333
        },
        "description": {
            "type": "string",
            "description": "The description of the course."
        },
        "allowGuests": {
            "type": "boolean",
            "description": "Whether guests (users with the role guest) are allowed access to the course. Modifiable only for Classic course. Defaults to {@code true} for Classic Courses and {@code false} for Ultra Courses."
        },
        "allowObservers": {
            "type": "boolean",
            "description": "Whether observers are allowed access to the course. Modifiable only for Classic course. Defaults to {@code false}.\n\n**Since**: 3900.31.0"
        },
        "closedComplete": {
            "type": "boolean",
            "description": "This status does not affect availability of the course for viewing in any way. closedComplete is valid for both Ultra and Classic courses. If an Ultra course is in closedComplete mode, updates are not possible. For a Classic course in closedComplete mode, updates are still possible (through Web UI but not through REST i.e. closed is enforced for original courses when updated through REST the same way Ultra courses are blocked) but new notifications are not generated."
        },
        "termId": {
            "type": "string",
            "description": "The ID of the term associated to this course. This may optionally be the term's externalId using the syntax \"externalId:spring.2016\"."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the course to students.",
            "title": "blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the course is currently available to students. Instructors can always access the course if they have 'Access unavailable course' entitlement. If set to 'Term', the course's parent term availability settings will be used.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the course. |\n| No | Students may not access the course. |\n| Disabled | Disabled by the SIS. Students may not access the course. @since 3100.0.0 |\n| Term | Availability is inherited from the term settings. Requires a termId be set. |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "Disabled",
                        "Term"
                    ]
                },
                "duration": {
                    "type": "object",
                    "description": "Settings controlling the length of time the course is available.",
                    "title": "blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2.Availability.Duration",
                    "properties": {
                        "type": {
                            "type": "string",
                            "description": "The intended length of the course. Possible values are:\n\n- Continuous: The course is active on an ongoing basis. This is the default.\n- DateRange: The course will only be available between specific date ranges.\n- FixedNumDays: The course will only be available for a set number of days.\n- Term: The course's parent term duration settings will be used.\n\n\n| Type      | Description\n | --------- | --------- |\n| Continuous | Course is active on an ongoing basis. |\n| DateRange | Course is only intended to be available between specific date ranges |\n| FixedNumDays | Course is only available for a set number of days |\n| UseTerm | Course availablity is dictated by its associated term |\n",
                            "enum": [
                                "Continuous",
                                "DateRange",
                                "FixedNumDays",
                                "UseTerm"
                            ]
                        },
                        "start": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this course starts. May only be set if availability.duration.type is DateRange."
                        },
                        "end": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date this course ends. May only be set if availability.duration.type is DateRange."
                        },
                        "daysOfUse": {
                            "type": "integer",
                            "format": "int32",
                            "description": "The number of days this course can be used. May only be set if availability.duration.type is FixedNumDays."
                        }
                    }
                }
            }
        },
        "enrollment": {
            "type": "object",
            "description": "Settings controlling how students may enroll in the course.",
            "title": "blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2.Enrollment",
            "properties": {
                "type": {
                    "type": "string",
                    "description": "Specifies the enrollment options for the course. Defaults to InstructorLed.\n\n\n| Type      | Description\n | --------- | --------- |\n| InstructorLed | Enrollment tasks for the course can only performed by the instructor |\n| SelfEnrollment | Instructors have the ability to enroll users, and students can also enroll themselves in the course |\n| EmailEnrollment | Instructors have the ability to enroll users, and students can email requests to the instructor for enrollment |\n",
                    "enum": [
                        "InstructorLed",
                        "SelfEnrollment",
                        "EmailEnrollment"
                    ]
                },
                "start": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The date on which enrollments are allowed for the course. May only be set if enrollment.type is SelfEnrollment."
                },
                "end": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The date on which enrollment in this course ends. May only be set if enrollment.type is SelfEnrollment."
                },
                "accessCode": {
                    "type": "string",
                    "description": "The enrollment access code associated with this course. May only be set if enrollment.type is SelfEnrollment.",
                    "maxLength": 50
                }
            }
        },
        "locale": {
            "type": "object",
            "description": "Settings controlling localization within the course.",
            "title": "blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2.Locale",
            "properties": {
                "id": {
                    "type": "string",
                    "description": "The locale of this course.",
                    "maxLength": 20
                },
                "force": {
                    "type": "boolean",
                    "description": "Whether students are forced to use the course's specified locale."
                }
            }
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2",
    "typeName": "BlackboardWebappsBlackboardPublicapiV2CoursesCourseV2"
},
    requestType: "DeprecatedCoursesUpdateCourse2Request",
    isMultipart: false,
    originalName: "updateCourse",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const DeprecatedCoursesHandlers = {
  getCourses: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DeprecatedCoursesMethods.getCourses;
    
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

  createCourse: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DeprecatedCoursesMethods.createCourse;
    
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

  getCourse: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DeprecatedCoursesMethods.getCourse;
    
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

  deleteCourse: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DeprecatedCoursesMethods.deleteCourse;
    
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

  updateCourse: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DeprecatedCoursesMethods.updateCourse;
    
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

  copyCourse: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DeprecatedCoursesMethods.copyCourse;
    
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

  getCourses2: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DeprecatedCoursesMethods.getCourses2;
    
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

  createCourse2: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DeprecatedCoursesMethods.createCourse2;
    
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

  getCourse2: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DeprecatedCoursesMethods.getCourse2;
    
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

  deleteCourse2: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DeprecatedCoursesMethods.deleteCourse2;
    
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

  updateCourse2: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DeprecatedCoursesMethods.updateCourse2;
    
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
