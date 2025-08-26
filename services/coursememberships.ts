import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const CourseMembershipsMethods: { [key: string]: ApiMethodInfo } = {
  getCourseMemberships: {
    description: "Returns a list of user memberships for the specified course or organization.\n\nCallers not enrolled in the course must have at least one of the following entitlements:\n\n- For courses: 'course.user.VIEW', 'system.user.course.enrollment.VIEW', or 'system.courseuserlist.VIEW'\n- For organizations: 'course.user.VIEW', 'system.user.org.enrollment.VIEW', or 'system.orguserlist.VIEW'\nCallers enrolled in the course will only be able to see memberships that are available and that have opted to be included in the course roster.\n\nFor callers enrolled in the course as well as those with the 'course.user.VIEW' entitlement, system fields such as externalId and dataSourceId will not be visible.\n\n**Since**: 3000.1.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/users",
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
        "name": "role",
        "type": "string",
        "description": "Search for memberships with a course role id that matches this value.\n\n**Since**: 3500.5.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for memberships with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for memberships with a modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.9.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter. Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "dataSourceId",
        "type": "string",
        "description": "Search for memberships with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "lastAccessed",
        "type": "string",
        "description": "Search for memberships with a last accessed date relative to this value.  'lastAccessedCompare' may also be sent to control search behavior.\n\n**Since**: 3300.9.0",
        "required": false
    },
    {
        "name": "lastAccessedCompare",
        "type": "string",
        "description": "Used alongside the 'lastAccessed' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3300.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "availability.available",
        "type": "string",
        "description": "Search for users with availability.available properties that contain this value.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| Disabled |   **Since**: 3100.0.0 |\n",
        "required": false
    },
    {
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"created(desc)\" Supported fields are:\n\n- created\n- lastAccessed (Since 3300.9.0)\n\n**Since**: 3100.0.0",
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
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "object",
    "properties": {},
    "description": ""
},
    requestType: "CourseMembershipsGetCourseMembershipsRequest",
    isMultipart: false,
    originalName: "getCourseMemberships",
    isWrite: false
  } as ApiMethodInfo,

  getMembership: {
    description: "Loads a user membership in the specified course.\n\nEntitlement and field visibility rules are the same as those when loading the memberships collection.\n\n**Since**: 2015.11.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/users/{userId}",
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
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    },
    {
        "name": "expand",
        "type": "string",
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.memberships.CourseMembership",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1MembershipsCourseMembership"
},
    requestType: "CourseMembershipsGetMembershipRequest",
    isMultipart: false,
    originalName: "getMembership",
    isWrite: false
  } as ApiMethodInfo,

  createMembership: {
    description: "Creates a user membership in the specified course.\n\nMinimal entitlements required:\n\n- For courses: 'system.enrollment.CREATE' with 'system.user.VIEW' or just 'course.user-enroll.EXECUTE' - For organizations: 'org.enrollment.CREATE' with 'system.user.VIEW' or just 'course.user-enroll.EXECUTE' - For courses or organizations that have enabled self enrollment: 'system.generic.VIEW'\nIf 'system.enrollment.CREATE' or 'org.enrollment.CREATE' are present, the user must be in the same domain as the logged on user.\n\nBy default courseRoleId is Student and availability.available is Yes.  Providing different values for these fields requires extra entitlements:\n\n- For courses: 'course.user-role.MODIFY' or 'course.user.MODIFY'\n- For organizations: 'course.user-role.MODIFY' or 'org.user.MODIFY'\n\n**Since**: 2015.11.0",
    method: "put",
    path: "/learn/api/public/v1/courses/{courseId}/users/{userId}",
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
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestBodySchema: {
    "type": "object",
    "properties": {
        "childCourseId": {
            "type": "string",
            "description": "The primary ID of the child, cross-listed course, in which the user is directly enrolled. </p> This field is read only in Learn versions 3000.11.0 through 3400.0.0. As of 3400.1.0, this field is mutable.  </p> If this membership's course is a parent course in a cross-listed set, the childCourseId can be updated to move the membership enrollment between child courses and the parent course in  the set.  Patching the childCourseId to \"null\" will move the membership to the parent course.\n\n**Since**: 3000.11.0"
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this course.  This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "availability": {
            "description": "Settings controlling availability of the course membership.",
            "$ref": "#/definitions/blackboard.webapps.blackboard.publicapi.v1.memberships.Availability"
        },
        "courseRoleId": {
            "type": "string",
            "description": "The user's role in the course.\n\nThese roles are also valid for an organization, although they are named differently in the UI.\n\nCustom course roles may also be referenced by their IDs.\n\n\n| Type      | Description\n | --------- | --------- |\n| Instructor | Has access to all areas in the Control Panel. This role is generally given to those developing, teaching, or facilitating the class. Instructors may access a course that is unavailable to students. This role is customizable and may have different capabilities from what is documented here. |\n| BbFacilitator | The facilitator is an instructor like role. Facilitators are restricted versions of an instructor, in that they are able to deliver course instruction and administer all aspects of a pre-constructed course, but are not allowed to modify or alter the course. This role is customizable and may have different capabilities from what is documented here. |\n| TeachingAssistant | The teaching assistant role is that of a co-teacher. Teaching assistants are able to administer all areas of a course. Their only limitations are those imposed by the instructor or Blackboard administrator at your school. This role is customizable and may have different capabilities from what is documented here. |\n| CourseBuilder | Manages the course without having access to student grades. This role is customizable and may have different capabilities from what is documented here. |\n| Grader | Assists the instructor in the creation, management, delivery, and grading of items. This role is customizable and may have different capabilities from what is documented here. |\n| Student |  |\n| Guest | Has no access to the Control Panel. Areas within the course are made available to guests, but typically they can only view course materials; they do not have access to tests or assessments, and do not have permission to post on discussion boards. This role's behavior is immutable. |\n",
            "enum": [
                "Instructor",
                "BbFacilitator",
                "TeachingAssistant",
                "CourseBuilder",
                "Grader",
                "Student",
                "Guest"
            ]
        },
        "displayOrder": {
            "type": "integer",
            "format": "int32",
            "description": "For primary instructor implementation, position or displayOrder cannot be negative, the minimum position is 1, with which is the primary instructor (aka. Leader instructor). Multiple primary instructor have the same displayOrder 1.\n\nThis operation only takes effect when the course role is non-student and non-guest roles, otherwise it's silently ignored, since <code>displayOrder</code> is for this design.\n\nAll cases violating the above restrictions will be set as <code>null</code> All display orders don't keep uniqueness, just save as-is."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.memberships.CourseMembershipV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1MembershipsCourseMembershipV1"
},
    requestType: "CourseMembershipsCreateMembershipRequest",
    isMultipart: false,
    originalName: "createMembership",
    isWrite: true
  } as ApiMethodInfo,

  deleteMembership: {
    description: "Deletes a user membership from the specified course.\n\nRequired entitlements:\n\n- For courses: 'system.enrollment.DELETE' or 'course.user.DELETE'\n- For organizations: 'system.enrollment.DELETE' or 'org.enrollment.DELETE'\n\n**Since**: 2015.11.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/users/{userId}",
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
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CourseMembershipsDeleteMembershipRequest",
    isMultipart: false,
    originalName: "deleteMembership",
    isWrite: true
  } as ApiMethodInfo,

  updateMembership: {
    description: "Updates a user membership in the specified course. \n\n | Field                  | Entitlements Required                                                                    |\n |------------------------|------------------------------------------------------------------------------------------|\n | dataSourceId           | 'course.user.MODIFY' or 'org.user.MODIFY'                                                |\n | childCourseId          | 'course.user.MODIFY' or 'org.user.MODIFY'                                                |\n | courseRoleId           | 'course.user.MODIFY', 'org.user.MODIFY', or 'course.user-role.MODIFY'                    |\n | availability.available | 'course.user.MODIFY', 'org.user.MODIFY', or 'course.course-availability.MODIFY'          |\n | displayOrder           | 'course.user.MODIFY', 'org.user.MODIFY', or 'course.user-role.primary-instructor.MODIFY' |\n \n\nIn addition, callers must have standard view entitlements to receive a response.  Without view entitlements the operation will be performed but an empty result object will be returned.\n\n**Since**: 2015.11.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/users/{userId}",
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
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestBodySchema: {
    "type": "object",
    "properties": {
        "childCourseId": {
            "type": "string",
            "description": "The primary ID of the child, cross-listed course, in which the user is directly enrolled. </p> This field is read only in Learn versions 3000.11.0 through 3400.0.0. As of 3400.1.0, this field is mutable.  </p> If this membership's course is a parent course in a cross-listed set, the childCourseId can be updated to move the membership enrollment between child courses and the parent course in  the set.  Patching the childCourseId to \"null\" will move the membership to the parent course.\n\n**Since**: 3000.11.0"
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this course.  This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "availability": {
            "description": "Settings controlling availability of the course membership.",
            "$ref": "#/definitions/blackboard.webapps.blackboard.publicapi.v1.memberships.Availability"
        },
        "courseRoleId": {
            "type": "string",
            "description": "The user's role in the course.\n\nThese roles are also valid for an organization, although they are named differently in the UI.\n\nCustom course roles may also be referenced by their IDs.\n\n\n| Type      | Description\n | --------- | --------- |\n| Instructor | Has access to all areas in the Control Panel. This role is generally given to those developing, teaching, or facilitating the class. Instructors may access a course that is unavailable to students. This role is customizable and may have different capabilities from what is documented here. |\n| BbFacilitator | The facilitator is an instructor like role. Facilitators are restricted versions of an instructor, in that they are able to deliver course instruction and administer all aspects of a pre-constructed course, but are not allowed to modify or alter the course. This role is customizable and may have different capabilities from what is documented here. |\n| TeachingAssistant | The teaching assistant role is that of a co-teacher. Teaching assistants are able to administer all areas of a course. Their only limitations are those imposed by the instructor or Blackboard administrator at your school. This role is customizable and may have different capabilities from what is documented here. |\n| CourseBuilder | Manages the course without having access to student grades. This role is customizable and may have different capabilities from what is documented here. |\n| Grader | Assists the instructor in the creation, management, delivery, and grading of items. This role is customizable and may have different capabilities from what is documented here. |\n| Student |  |\n| Guest | Has no access to the Control Panel. Areas within the course are made available to guests, but typically they can only view course materials; they do not have access to tests or assessments, and do not have permission to post on discussion boards. This role's behavior is immutable. |\n",
            "enum": [
                "Instructor",
                "BbFacilitator",
                "TeachingAssistant",
                "CourseBuilder",
                "Grader",
                "Student",
                "Guest"
            ]
        },
        "displayOrder": {
            "type": "integer",
            "format": "int32",
            "description": "For primary instructor implementation, position or displayOrder cannot be negative, the minimum position is 1, with which is the primary instructor (aka. Leader instructor). Multiple primary instructor have the same displayOrder 1.\n\nThis operation only takes effect when the course role is non-student and non-guest roles, otherwise it's silently ignored, since <code>displayOrder</code> is for this design.\n\nAll cases violating the above restrictions will be set as <code>null</code> All display orders don't keep uniqueness, just save as-is."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.memberships.CourseMembership",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1MembershipsCourseMembership"
},
    requestType: "CourseMembershipsUpdateMembershipRequest",
    isMultipart: false,
    originalName: "updateMembership",
    isWrite: true
  } as ApiMethodInfo,

  getUserMemberships: {
    description: "Returns a list of course and organization memberships for the specified user.\n\nUsers can always view their own memberships.  Callers viewing the memberships of another user require at least one of the following entitlements:\n\n- 'system.user.course.enrollment.VIEW' allows callers to see course memberships\n- 'system.user.org.enrollment.VIEW' allows callers to see organization memberships\n\n**Since**: 2015.11.0",
    method: "get",
    path: "/learn/api/public/v1/users/{userId}/courses",
    pathParams: [
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
        "name": "role",
        "type": "string",
        "description": "Search for memberships with a course role id that matches this value.\n\n**Since**: 3500.5.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for memberships with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for memberships with a modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.9.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter. Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "dataSourceId",
        "type": "string",
        "description": "Search for memberships with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0",
        "required": false
    },
    {
        "name": "lastAccessed",
        "type": "string",
        "description": "Search for memberships with a last accessed date relative to this value.  'lastAccessedCompare' may also be sent to control search behavior.\n\n**Since**: 3300.9.0",
        "required": false
    },
    {
        "name": "lastAccessedCompare",
        "type": "string",
        "description": "Used alongside the 'lastAccessed' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3300.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "availability.available",
        "type": "string",
        "description": "Search for users with availability.available properties that contain this value.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| Disabled |   **Since**: 3100.0.0 |\n",
        "required": false
    },
    {
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"created(desc)\" Supported fields are:\n\n- created\n- lastAccessed (Since 3300.9.0)\n\n**Since**: 3100.0.0",
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
        "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>course</li></ul>",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "object",
    "properties": {},
    "description": ""
},
    requestType: "CourseMembershipsGetUserMembershipsRequest",
    isMultipart: false,
    originalName: "getUserMemberships",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const CourseMembershipsHandlers = {
  getCourseMemberships: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseMembershipsMethods.getCourseMemberships;
    
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

  getMembership: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseMembershipsMethods.getMembership;
    
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

  createMembership: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseMembershipsMethods.createMembership;
    
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

  deleteMembership: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseMembershipsMethods.deleteMembership;
    
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

  updateMembership: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseMembershipsMethods.updateMembership;
    
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

  getUserMemberships: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseMembershipsMethods.getUserMemberships;
    
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
