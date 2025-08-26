import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const CourseGroupsMethods: { [key: string]: ApiMethodInfo } = {
  getGroups: {
    description: "Returns a list of all top-level groups in the specified course.\n\nCallers with the following entitlement can view all groups in the course:\n\n- course.groups.VIEW\nCallers enrolled in course can view all groups they're enrolled in, and all self-enrollment groups\n\n**Since**: 3800.6.0",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}/groups",
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
        "name": "name",
        "type": "string",
        "description": "The group 'name' value to use as search criteria.  See also: nameCompare.\n\n**Since**: 3900.10.0",
        "required": false
    },
    {
        "name": "nameCompare",
        "type": "string",
        "description": "Used alongside the 'name' search parameter.\n\nDefaults to StartsWith if not specified.\n\n**Since**: 3900.10.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| contains |  |\n| notContains |  |\n| startsWith |  |\n",
        "required": false
    },
    {
        "name": "inGroupSet",
        "type": "boolean",
        "description": "Indicates whether only groups in a GroupSet (or groups NOT in a GroupSet) should be included\n\n**Since**: 3900.10.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for groups with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for groups with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "nonEmptyGroupSets",
        "type": "boolean",
        "description": "Search group sets whose student count is greater than 0.\n\n**Since**: 3900.71.0",
        "required": false
    },
    {
        "name": "onlyAvailableGroupSets",
        "type": "boolean",
        "description": "Search only group sets that are available.\n\n**Since**: 3900.71.0",
        "required": false
    },
    {
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- name\n- externalId\n\n**Since**: 3100.4.0",
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
    requestType: "CourseGroupsGetGroupsRequest",
    isMultipart: false,
    originalName: "getGroups",
    isWrite: false
  } as ApiMethodInfo,

  createGroup: {
    description: "Creates a group in the specified course.\n\nFor Ultra Courses, Individual Groups are only supported when associated with a Content Item. To avoid undefined behavior, groups created this way in Ultra courses should be linked to Content Items via the Create Content Group endpoint as soon as possible after creation.\n\nIndividual Groups without Content association cannot be copied to Ultra courses, and will be removed as part of the Course Conversion process if converted to Ultra.\n\nCallers must have the following entitlement:\n\n- 'course.groups.CREATE'\n\n**Since**: 3800.6.0",
    method: "post",
    path: "/learn/api/public/v2/courses/{courseId}/groups",
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
            "description": "An externally-defined unique ID for the group. Defaults to a random UUID if not provided during create."
        },
        "name": {
            "type": "string",
            "description": "The title of the group."
        },
        "description": {
            "type": "string",
            "format": "BbML",
            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
            "description": "The description of the group. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the group to students.",
            "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the Group is currently available to students.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the group. |\n| No | Students may not access the group. |\n| SignupOnly | Students may only signup and see the group listed, not yet access it. |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "SignupOnly"
                    ]
                }
            }
        },
        "enrollment": {
            "type": "object",
            "description": "Settings controlling enrollment of the group to students.",
            "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Enrollment",
            "properties": {
                "type": {
                    "type": "string",
                    "description": "Whether the Group allows self enrollment or only enrolled by instructor. This can only be set on creation.\n\n\n| Type      | Description\n | --------- | --------- |\n| InstructorOnly | Students are added to the Group by the instructor |\n| SelfEnrollment | Students are added to the Group by self enrollment |\n",
                    "enum": [
                        "InstructorOnly",
                        "SelfEnrollment"
                    ]
                },
                "limit": {
                    "type": "integer",
                    "format": "int32",
                    "description": "The maximum allowed enrollment size for self enrolled groups."
                },
                "signupSheet": {
                    "type": "object",
                    "description": "Settings controlling signup to the group for students. Only applicable if Enrollment.Type allows self enrollment.",
                    "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Enrollment.SignupSheet",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "The name of the signup sheet"
                        },
                        "description": {
                            "type": "string",
                            "format": "BbML",
                            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
                            "description": "The description of the signup sheet This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
                        },
                        "showMembers": {
                            "type": "boolean",
                            "description": "A boolean indicating whether or not members can be seen by others prior to signing up."
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
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginGroupspacePublicapiV2GroupsGroupV2"
},
    requestType: "CourseGroupsCreateGroupRequest",
    isMultipart: false,
    originalName: "createGroup",
    isWrite: true
  } as ApiMethodInfo,

  getGroupSets: {
    description: "Returns a list of all groupsets\n\nCallers not enrolled in the course must have the following entitlement:\n\n- course.groups.VIEW\n- course.groups.admin.VIEW\n\n**Since**: 3800.6.0",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}/groups/sets",
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
        "name": "name",
        "type": "string",
        "description": "The group 'name' value to use as search criteria.  See also: nameCompare.\n\n**Since**: 3900.10.0",
        "required": false
    },
    {
        "name": "nameCompare",
        "type": "string",
        "description": "Used alongside the 'name' search parameter.\n\nDefaults to StartsWith if not specified.\n\n**Since**: 3900.10.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| contains |  |\n| notContains |  |\n| startsWith |  |\n",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for groups with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for groups with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "nonEmptyGroupSets",
        "type": "boolean",
        "description": "Search group sets whose student count is greater than 0.\n\n**Since**: 3900.71.0",
        "required": false
    },
    {
        "name": "onlyAvailableGroupSets",
        "type": "boolean",
        "description": "Search only group sets that are available.\n\n**Since**: 3900.71.0",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- name\n- externalId\n\n**Since**: 3100.4.0",
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
    requestType: "CourseGroupsGetGroupSetsRequest",
    isMultipart: false,
    originalName: "getGroupSets",
    isWrite: false
  } as ApiMethodInfo,

  createGroupSet: {
    description: "Creates a groupset in the specified course.\n\nCallers must have the following entitlement:\n\n- 'course.groups.CREATE'\n\n**Since**: 3800.6.0",
    method: "post",
    path: "/learn/api/public/v2/courses/{courseId}/groups/sets",
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
            "description": "An externally-defined unique ID for the group. Defaults to a random UUID if not provided during create."
        },
        "name": {
            "type": "string",
            "description": "The title of the group."
        },
        "description": {
            "type": "string",
            "format": "BbML",
            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
            "description": "The description of the group. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the group to students.",
            "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the Group is currently available to students.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the group. |\n| No | Students may not access the group. |\n| SignupOnly | Students may only signup and see the group listed, not yet access it. |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "SignupOnly"
                    ]
                }
            }
        },
        "enrollment": {
            "type": "object",
            "description": "Settings controlling enrollment of the group to students.",
            "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Enrollment",
            "properties": {
                "type": {
                    "type": "string",
                    "description": "Whether the Group allows self enrollment or only enrolled by instructor. This can only be set on creation.\n\n\n| Type      | Description\n | --------- | --------- |\n| InstructorOnly | Students are added to the Group by the instructor |\n| SelfEnrollment | Students are added to the Group by self enrollment |\n",
                    "enum": [
                        "InstructorOnly",
                        "SelfEnrollment"
                    ]
                },
                "limit": {
                    "type": "integer",
                    "format": "int32",
                    "description": "The maximum allowed enrollment size for self enrolled groups."
                },
                "signupSheet": {
                    "type": "object",
                    "description": "Settings controlling signup to the group for students. Only applicable if Enrollment.Type allows self enrollment.",
                    "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Enrollment.SignupSheet",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "The name of the signup sheet"
                        },
                        "description": {
                            "type": "string",
                            "format": "BbML",
                            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
                            "description": "The description of the signup sheet This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
                        },
                        "showMembers": {
                            "type": "boolean",
                            "description": "A boolean indicating whether or not members can be seen by others prior to signing up."
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
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginGroupspacePublicapiV2GroupsGroupV2"
},
    requestType: "CourseGroupsCreateGroupSetRequest",
    isMultipart: false,
    originalName: "createGroupSet",
    isWrite: true
  } as ApiMethodInfo,

  getGroupSet: {
    description: "Loads a groupset in the specified course.\n\nUsers calling this end point should meet at least one of these entitlement checks.\n\n- course.groups.VIEW\n- course.groups.admin.VIEW\n\n**Since**: 3800.6.0",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}/groups/sets/{groupId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "groupId",
        "type": "string",
        "description": "The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n ",
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
    "ref": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2",
    "typeName": "BlackboardPluginGroupspacePublicapiV2GroupsGroupV2"
},
    requestType: "CourseGroupsGetGroupSetRequest",
    isMultipart: false,
    originalName: "getGroupSet",
    isWrite: false
  } as ApiMethodInfo,

  deleteGroupSet: {
    description: "Deletes a groupset from the specified course.\n\nRequired entitlements:\n\n- course.group.DELETE\n\n**Since**: 3800.6.0",
    method: "delete",
    path: "/learn/api/public/v2/courses/{courseId}/groups/sets/{groupId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "groupId",
        "type": "string",
        "description": "The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n ",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "CourseGroupsDeleteGroupSetRequest",
    isMultipart: false,
    originalName: "deleteGroupSet",
    isWrite: true
  } as ApiMethodInfo,

  updateGroupSet: {
    description: "Updates a groupset in the specified course.\n\nMinimal entitlements required:\n\n- course.group.MODIFY\n\n**Since**: 3800.6.0",
    method: "patch",
    path: "/learn/api/public/v2/courses/{courseId}/groups/sets/{groupId}",
    pathParams: [
    {
        "name": "groupId",
        "type": "string",
        "description": "The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n ",
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
        "externalId": {
            "type": "string",
            "description": "An externally-defined unique ID for the group. Defaults to a random UUID if not provided during create."
        },
        "name": {
            "type": "string",
            "description": "The title of the group."
        },
        "description": {
            "type": "string",
            "format": "BbML",
            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
            "description": "The description of the group. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the group to students.",
            "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the Group is currently available to students.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the group. |\n| No | Students may not access the group. |\n| SignupOnly | Students may only signup and see the group listed, not yet access it. |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "SignupOnly"
                    ]
                }
            }
        },
        "enrollment": {
            "type": "object",
            "description": "Settings controlling enrollment of the group to students.",
            "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Enrollment",
            "properties": {
                "limit": {
                    "type": "integer",
                    "format": "int32",
                    "description": "The maximum allowed enrollment size for self enrolled groups."
                },
                "signupSheet": {
                    "type": "object",
                    "description": "Settings controlling signup to the group for students. Only applicable if Enrollment.Type allows self enrollment.",
                    "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Enrollment.SignupSheet",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "The name of the signup sheet"
                        },
                        "description": {
                            "type": "string",
                            "format": "BbML",
                            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
                            "description": "The description of the signup sheet This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
                        },
                        "showMembers": {
                            "type": "boolean",
                            "description": "A boolean indicating whether or not members can be seen by others prior to signing up."
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
    "ref": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2",
    "typeName": "BlackboardPluginGroupspacePublicapiV2GroupsGroupV2"
},
    requestType: "CourseGroupsUpdateGroupSetRequest",
    isMultipart: false,
    originalName: "updateGroupSet",
    isWrite: true
  } as ApiMethodInfo,

  getGroupSetChildren: {
    description: "Returns a list of all groups within a groupset\n\nCallers not enrolled in the group must have the following entitlement:\n\n- course.groups.VIEW\n\n**Since**: 3800.6.0",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}/groups/sets/{groupId}/groups",
    pathParams: [
    {
        "name": "groupId",
        "type": "string",
        "description": "The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n ",
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
        "name": "name",
        "type": "string",
        "description": "The group 'name' value to use as search criteria.  See also: nameCompare.\n\n**Since**: 3900.10.0",
        "required": false
    },
    {
        "name": "nameCompare",
        "type": "string",
        "description": "Used alongside the 'name' search parameter.\n\nDefaults to StartsWith if not specified.\n\n**Since**: 3900.10.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| contains |  |\n| notContains |  |\n| startsWith |  |\n",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for groups with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for groups with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "nonEmptyGroupSets",
        "type": "boolean",
        "description": "Search group sets whose student count is greater than 0.\n\n**Since**: 3900.71.0",
        "required": false
    },
    {
        "name": "onlyAvailableGroupSets",
        "type": "boolean",
        "description": "Search only group sets that are available.\n\n**Since**: 3900.71.0",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- name\n- externalId\n\n**Since**: 3100.4.0",
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
    requestType: "CourseGroupsGetGroupSetChildrenRequest",
    isMultipart: false,
    originalName: "getGroupSetChildren",
    isWrite: false
  } as ApiMethodInfo,

  createGroupSetChild: {
    description: "Creates a group within a groupset.\n\nCallers must have the following entitlement:\n\n- 'course.groups.CREATE'\n\n**Since**: 3800.6.0",
    method: "post",
    path: "/learn/api/public/v2/courses/{courseId}/groups/sets/{groupId}/groups",
    pathParams: [
    {
        "name": "groupId",
        "type": "string",
        "description": "The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n ",
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
        "externalId": {
            "type": "string",
            "description": "An externally-defined unique ID for the group. Defaults to a random UUID if not provided during create."
        },
        "name": {
            "type": "string",
            "description": "The title of the group."
        },
        "description": {
            "type": "string",
            "format": "BbML",
            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
            "description": "The description of the group. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the group to students.",
            "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the Group is currently available to students.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the group. |\n| No | Students may not access the group. |\n| SignupOnly | Students may only signup and see the group listed, not yet access it. |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "SignupOnly"
                    ]
                }
            }
        },
        "enrollment": {
            "type": "object",
            "description": "Settings controlling enrollment of the group to students.",
            "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Enrollment",
            "properties": {
                "type": {
                    "type": "string",
                    "description": "Whether the Group allows self enrollment or only enrolled by instructor. This can only be set on creation.\n\n\n| Type      | Description\n | --------- | --------- |\n| InstructorOnly | Students are added to the Group by the instructor |\n| SelfEnrollment | Students are added to the Group by self enrollment |\n",
                    "enum": [
                        "InstructorOnly",
                        "SelfEnrollment"
                    ]
                },
                "limit": {
                    "type": "integer",
                    "format": "int32",
                    "description": "The maximum allowed enrollment size for self enrolled groups."
                },
                "signupSheet": {
                    "type": "object",
                    "description": "Settings controlling signup to the group for students. Only applicable if Enrollment.Type allows self enrollment.",
                    "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Enrollment.SignupSheet",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "The name of the signup sheet"
                        },
                        "description": {
                            "type": "string",
                            "format": "BbML",
                            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
                            "description": "The description of the signup sheet This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
                        },
                        "showMembers": {
                            "type": "boolean",
                            "description": "A boolean indicating whether or not members can be seen by others prior to signing up."
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
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginGroupspacePublicapiV2GroupsGroupV2"
},
    requestType: "CourseGroupsCreateGroupSetChildRequest",
    isMultipart: false,
    originalName: "createGroupSetChild",
    isWrite: true
  } as ApiMethodInfo,

  getGroup: {
    description: "Loads a group in the specified course.\n\nCallers not enrolled in the course must have the following entitlement:\n\n- course.groups.VIEW\n\n**Since**: 3800.6.0",
    method: "get",
    path: "/learn/api/public/v2/courses/{courseId}/groups/{groupId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "groupId",
        "type": "string",
        "description": "The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n ",
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
    "ref": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2",
    "typeName": "BlackboardPluginGroupspacePublicapiV2GroupsGroupV2"
},
    requestType: "CourseGroupsGetGroupRequest",
    isMultipart: false,
    originalName: "getGroup",
    isWrite: false
  } as ApiMethodInfo,

  deleteGroup: {
    description: "Deletes a groupset from the specified course.\n\nRequired entitlements:\n\n- course.group.DELETE\n\n**Since**: 3800.6.0",
    method: "delete",
    path: "/learn/api/public/v2/courses/{courseId}/groups/{groupId}",
    pathParams: [
    {
        "name": "groupId",
        "type": "string",
        "description": "The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n ",
        "required": true
    },
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
    requestType: "CourseGroupsDeleteGroupRequest",
    isMultipart: false,
    originalName: "deleteGroup",
    isWrite: true
  } as ApiMethodInfo,

  updateGroup: {
    description: "Updates a group in the specified course.\n\nMinimal entitlements required:\n\n- course.group.MODIFY\n\n**Since**: 3800.6.0",
    method: "patch",
    path: "/learn/api/public/v2/courses/{courseId}/groups/{groupId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "groupId",
        "type": "string",
        "description": "The group ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:breakfastClub              |\n ",
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
            "description": "An externally-defined unique ID for the group. Defaults to a random UUID if not provided during create."
        },
        "name": {
            "type": "string",
            "description": "The title of the group."
        },
        "description": {
            "type": "string",
            "format": "BbML",
            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
            "description": "The description of the group. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the group to students.",
            "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the Group is currently available to students.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the group. |\n| No | Students may not access the group. |\n| SignupOnly | Students may only signup and see the group listed, not yet access it. |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "SignupOnly"
                    ]
                }
            }
        },
        "enrollment": {
            "type": "object",
            "description": "Settings controlling enrollment of the group to students.",
            "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Enrollment",
            "properties": {
                "limit": {
                    "type": "integer",
                    "format": "int32",
                    "description": "The maximum allowed enrollment size for self enrolled groups."
                },
                "signupSheet": {
                    "type": "object",
                    "description": "Settings controlling signup to the group for students. Only applicable if Enrollment.Type allows self enrollment.",
                    "title": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2.Enrollment.SignupSheet",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "The name of the signup sheet"
                        },
                        "description": {
                            "type": "string",
                            "format": "BbML",
                            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
                            "description": "The description of the signup sheet This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
                        },
                        "showMembers": {
                            "type": "boolean",
                            "description": "A boolean indicating whether or not members can be seen by others prior to signing up."
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
    "ref": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2",
    "typeName": "BlackboardPluginGroupspacePublicapiV2GroupsGroupV2"
},
    requestType: "CourseGroupsUpdateGroupRequest",
    isMultipart: false,
    originalName: "updateGroup",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const CourseGroupsHandlers = {
  getGroups: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGroupsMethods.getGroups;
    
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

  createGroup: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGroupsMethods.createGroup;
    
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

  getGroupSets: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGroupsMethods.getGroupSets;
    
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

  createGroupSet: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGroupsMethods.createGroupSet;
    
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

  getGroupSet: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGroupsMethods.getGroupSet;
    
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

  deleteGroupSet: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGroupsMethods.deleteGroupSet;
    
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

  updateGroupSet: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGroupsMethods.updateGroupSet;
    
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

  getGroupSetChildren: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGroupsMethods.getGroupSetChildren;
    
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

  createGroupSetChild: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGroupsMethods.createGroupSetChild;
    
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

  getGroup: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGroupsMethods.getGroup;
    
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

  deleteGroup: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGroupsMethods.deleteGroup;
    
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

  updateGroup: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = CourseGroupsMethods.updateGroup;
    
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
