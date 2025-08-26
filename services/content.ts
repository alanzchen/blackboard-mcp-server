import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const ContentMethods: { [key: string]: ApiMethodInfo } = {
  getContents: {
    description: "List top-level content items in a course.\n\nUsers with at least one of the following entitlements may access any content item:\n\n- course.adaptiverelease.CREATE\n- course.adaptiverelease.DELETE\n- course.adaptiverelease.MODIFY\n- course.adaptiverelease.VIEW\n- course.configure-areas.EXECUTE\n- course.content-item.copy.EXECUTE\n- course.content.DELETE\n- course.content.MODIFY\n- course.learningstandards.alignment.CREATE\n- course.performance.dashboard.VIEW\n</p>\n\nFor other users, permission to view the content item will depend on the availability settings of the course and  the content item.  The following fields will be filtered out:\n\n- availability.available\n- availability.allowGuests\n- availability.adaptiveRelease\n</p>\n\n**Since**: 3000.1.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents",
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
        "name": "recursive",
        "type": "boolean",
        "description": "Search for child content recursively.  A value of 'true' indicates that search results should include all content descendants within the hierarchy of the specified parent.  A value of 'false' indicates results should be limited to immediate children only.  Not setting this field defaults to 'false' behavior; only including immediate children.\n\n**Since**: 3100.2.0",
        "required": false
    },
    {
        "name": "title",
        "type": "string",
        "description": "Search for content title. Will return all Content items whose title contains the supplied search value.\n\n**Since**: 3900.10.0",
        "required": false
    },
    {
        "name": "contentHandler",
        "type": "string",
        "description": "Search for the specific content handler.  Not setting this field will return all content handlers.\n\n**Since**: 3400.5.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for contents with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3700.1.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.1.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for contents with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3700.4.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "reviewable",
        "type": "boolean",
        "description": "Search contents by whether they are reviewable or not.\n\n**Since**: 3700.15.0",
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
    requestType: "ContentGetContentsRequest",
    isMultipart: false,
    originalName: "getContents",
    isWrite: false
  } as ApiMethodInfo,

  createContent: {
    description: "Create a new top-level content item. Currently only folders may be created as top-level content items in a Classic course. For Ultra courses any content item is allowed and will be placed under the ROOT folder. Entitlement \"course.content.CREATE\" required to create Course Content.\n\n**Since**: 3000.7.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/contents",
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
        "name": "allowChildCourseContent",
        "type": "boolean",
        "description": "By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation.",
        "required": false
    },
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
        "parentId": {
            "type": "string",
            "description": "The ID of the content's parent.  Note that top-level contents do not have parents. The 'parentId' field is a writable field as of the Bb Learn 3200.6.0 release.  Specifying a new value in PATCH requests allows the Content object to be moved from one parent to another."
        },
        "title": {
            "type": "string",
            "description": "The title or name of this content. Typically shown as the main text to click in the course outline when accessing the content."
        },
        "body": {
            "type": "string",
            "format": "BbML",
            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
            "description": "The body text associated with this content. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
        },
        "description": {
            "type": "string",
            "description": "The short description of this content.\n\nThis field is not used in Classic courses.  For Ultra courses this is used to show information directly on the course outline.",
            "maxLength": 750
        },
        "position": {
            "type": "integer",
            "format": "int32",
            "description": "The position of this content within its parent folder. Position values are zero-based (the first element has a position value of zero, not one). Default position is last in the list of child contents under the parent."
        },
        "launchInNewWindow": {
            "type": "boolean",
            "description": "Indicates whether the content is going to open in a new window.\n\n**Since**: 3800.10.0"
        },
        "reviewable": {
            "type": "boolean",
            "description": "Indicates whether Review Status is enabled for this content. Content items with review status enabled can be marked as reviewed by students in classic courses and content items with review status enabled in Ultra are either in a Forced Sequence or content that should be counted towards the progress tracking feature as of 3900.19 This can be used to track performance and in Adaptive Release rules to control the release of other content.\n\n**Since**: 3700.15.0"
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the content to students.",
            "title": "blackboard.plugin.content.rest.publicapi.v1.ContentV1.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the content is currently available to students.  Instructors can always access the content.  If set to 'PartiallyVisible', the title will be available to students but the body will not.  Defaults to Yes.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| PartiallyVisible |  |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "PartiallyVisible"
                    ]
                },
                "allowGuests": {
                    "type": "boolean",
                    "description": "Whether this content is available to users with the 'guest' role. Defaults to true."
                },
                "allowObservers": {
                    "type": "boolean",
                    "description": "Whether or not \"observers\" are allowed access to this Content. Defaults to true.\n\n**Since**: 3900.31.0"
                },
                "adaptiveRelease": {
                    "type": "object",
                    "description": "Settings controlling adaptive release of the content to students.",
                    "title": "blackboard.plugin.content.rest.publicapi.v1.ContentV1.Availability.AdaptiveRelease",
                    "properties": {
                        "start": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date when this content will become available to students."
                        },
                        "end": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date when this content will no longer be available to students."
                        }
                    }
                }
            }
        },
        "contentHandler": {
            "description": "Extended settings specific to this content item's content handler.",
            "$ref": "#/definitions/blackboard.platform.rest.publicapi.v1.content.ContentHandler"
        },
        "subtype": {
            "type": "string",
            "description": "Optional assessment subtype for further differentiation. For example, a test can have the subtype 'assignment' in Ultra, alongside AI conversations and knowledge checks, ensuring type-agnostic categorization."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.content.rest.publicapi.v1.ContentV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginContentRestPublicapiV1ContentV1"
},
    requestType: "ContentCreateContentRequest",
    isMultipart: false,
    originalName: "createContent",
    isWrite: true
  } as ApiMethodInfo,

  createAssignment: {
    description: "Create assignment content, grade column and file attachments in one POST. Any files specified with assignment creation must be previously uploaded using the uploads endpoint. Ultra courses supported since 3300.9.0 Classic courses supported since 3400.9.0 </p> For Ultra courses, this will create:\n\n- A content item with a contentHandler.id = resource/x-bb-asmt-test-link\n- A gradebook column with contentId = id of the new content\n- In the new Ultra assignment, instructions are saved as assignment instructions only, unlike in the old Ultra assignment where instructions were created as presentation questions.\n</p> The following entitlements are required to create an assignment in Ultra:\n\n- course.content.CREATE\n- course.assessment.CREATE\n- course.content.assessment.deploy.EXECUTE\n- course.gradebook.MODIFY\n- course.assessment.MODIFY, if instructions or files are specified\n</p> For Classic courses, this will create:\n\n- A content item with contentHandler.id = resource/x-bb-assignment\n- A gradebook column with contentId = id of the new content\n- A file attachment for each given file attachment id\nThe following entitlements are required to create a Classic assignment:\n\n- course.content.CREATE\n- course.gradebook.MODIFY\n- course.content.MODIFY, if files are specified\n</p>\n\n**Since**: 3300.9.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/contents/createAssignment",
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
        "name": "allowChildCourseContent",
        "type": "boolean",
        "description": "By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation.",
        "required": false
    },
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
        "parentId": {
            "type": "string",
            "description": "The id of the parent content for the created assignment."
        },
        "title": {
            "type": "string",
            "description": "The title used for the created assignment content and gradebook column. Typically shown as the main text to click in the course outline when accessing the assignment."
        },
        "instructions": {
            "type": "string",
            "format": "BbML",
            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
            "description": "The text instructions to use when creating the assignment content. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
        },
        "description": {
            "type": "string",
            "description": "The description to use when creating the assignment content."
        },
        "position": {
            "type": "integer",
            "format": "int32",
            "description": "The position of the created assignment within the other other content of its parent. Position values are zero-based (the first element has a position value of zero, not one). Default position is last in the list of child contents under the parent."
        },
        "fileUploadIds": {
            "$ref": "#/definitions/java.util.List<java.lang.String>"
        },
        "availability": {
            "type": "object",
            "title": "blackboard.webapps.blackboard.publicapi.v1.content.CreateAssignmentV1.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the created assignment is available to students. Instructors can always access the created assignment. If set to 'PartiallyVisible', the title will be available to students but the body will not. Defaults to Yes.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| PartiallyVisible |  |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "PartiallyVisible"
                    ]
                },
                "allowGuests": {
                    "type": "boolean",
                    "description": "Whether the created assignment is available to users with the 'guest' role. Defaults to true."
                },
                "allowObservers": {
                    "type": "boolean",
                    "description": "Whether the created assignment is available to users with the 'observer' role. Defaults to true.\n\n**Since**: 3900.31.0"
                },
                "adaptiveRelease": {
                    "type": "object",
                    "description": "Settings controlling adaptive release of created assignment to students.",
                    "title": "blackboard.webapps.blackboard.publicapi.v1.content.CreateAssignmentV1.Availability.AdaptiveRelease",
                    "properties": {
                        "start": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date when the created assignment will become available to students."
                        },
                        "end": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date when the created assignment will no longer be available to students."
                        }
                    }
                }
            }
        },
        "grading": {
            "type": "object",
            "title": "blackboard.webapps.blackboard.publicapi.v1.content.CreateAssignmentV1.Grading",
            "properties": {
                "due": {
                    "type": "string",
                    "format": "date-time",
                    "description": "Date and time that the created assignment will be due. If not specified, this will default to the specified \"availability.adaptiveRelease.end\" date. If that is also not specified, due date defaults to null."
                },
                "attemptsAllowed": {
                    "type": "integer",
                    "format": "int32",
                    "description": "The number of attempts allowed on the created assignment. Defaults to 1. Maximum allowed is 10 for an Ultra Assignment. Value will be ignored if isUnlimitedAttemptsAllowed is set to true."
                },
                "gradeSchemaId": {
                    "type": "string",
                    "description": "The grading schema to use for the created assignment. Defaults to Score."
                },
                "isUnlimitedAttemptsAllowed": {
                    "type": "boolean",
                    "description": "Determines if the assignment has unlimited number of attempts.\n\n**Since**: 3400.8.0"
                }
            }
        },
        "score": {
            "type": "object",
            "title": "blackboard.webapps.blackboard.publicapi.v1.content.CreateAssignmentV1.Score",
            "properties": {
                "possible": {
                    "type": "number",
                    "description": "The number of points possible for the created assignment. Defaults to 100."
                }
            }
        },
        "originalityReportingTool": {
            "description": "The Originality Reporting Tool options to be used for the assignment content item.\n\n**Since**: 3800.16.0",
            "$ref": "#/definitions/blackboard.platform.rest.publicapi.v1.content.OriginalityReportingTool"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.content.CreateAssignmentResultV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1ContentCreateAssignmentResultV1"
},
    requestType: "ContentCreateAssignmentRequest",
    isMultipart: false,
    originalName: "createAssignment",
    isWrite: true
  } as ApiMethodInfo,

  getContent: {
    description: "Load a specific content item from a course.\n\nUsers with at least one of the following entitlements may access any content item:\n\n- course.adaptiverelease.CREATE\n- course.adaptiverelease.DELETE\n- course.adaptiverelease.MODIFY\n- course.adaptiverelease.VIEW\n- course.configure-areas.EXECUTE\n- course.content-item.copy.EXECUTE\n- course.content.DELETE\n- course.content.MODIFY\n- course.learningstandards.alignment.CREATE\n- course.performance.dashboard.VIEW\n</p>\n\nFor other users, permission to view the content item will depend on the availability settings of the course and the content item.  The following fields will be filtered out:\n\n- availability.available\n- availability.allowGuests\n- availability.adaptiveRelease\nInclude includeInActivityTracking to define if the content should be included in the activity tracking. By default, this value is true so the content will be included in the activity tracking. </p>\n\n**Since**: 3000.1.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
        "required": true
    }
],
    queryParams: [],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "ContentGetContentRequest",
    isMultipart: false,
    originalName: "getContent",
    isWrite: false
  } as ApiMethodInfo,

  deleteContent: {
    description: "Delete a content item.\n\nThe 'course.content.DELETE' entitlement is required.\n\n**Since**: 3000.1.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "allowChildCourseContent",
        "type": "boolean",
        "description": "By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation.",
        "required": false
    },
    {
        "name": "deleteGrades",
        "type": "boolean",
        "description": "If true and there is a grade column associated with this content, that grade column will be marked as deleted.  All attempts and grades will also be removed. If false, the grade column will not be marked as deleted.  Attempts will not be deleted and grades will be converted to manually entered grades.  Defaults to false.",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "ContentDeleteContentRequest",
    isMultipart: false,
    originalName: "deleteContent",
    isWrite: true
  } as ApiMethodInfo,

  updateContent: {
    description: "Update a content item.\n\nThe 'course.content.MODIFY' entitlement is required.\n\n**Since**: 3000.1.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "allowChildCourseContent",
        "type": "boolean",
        "description": "By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation.",
        "required": false
    },
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
        "parentId": {
            "type": "string",
            "description": "The ID of the content's parent.  Note that top-level contents do not have parents. The 'parentId' field is a writable field as of the Bb Learn 3200.6.0 release.  Specifying a new value in PATCH requests allows the Content object to be moved from one parent to another."
        },
        "title": {
            "type": "string",
            "description": "The title or name of this content. Typically shown as the main text to click in the course outline when accessing the content."
        },
        "body": {
            "type": "string",
            "format": "BbML",
            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
            "description": "The body text associated with this content. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
        },
        "description": {
            "type": "string",
            "description": "The short description of this content.\n\nThis field is not used in Classic courses.  For Ultra courses this is used to show information directly on the course outline.",
            "maxLength": 750
        },
        "position": {
            "type": "integer",
            "format": "int32",
            "description": "The position of this content within its parent folder. Position values are zero-based (the first element has a position value of zero, not one). Default position is last in the list of child contents under the parent."
        },
        "launchInNewWindow": {
            "type": "boolean",
            "description": "Indicates whether the content is going to open in a new window.\n\n**Since**: 3800.10.0"
        },
        "reviewable": {
            "type": "boolean",
            "description": "Indicates whether Review Status is enabled for this content. Content items with review status enabled can be marked as reviewed by students in classic courses and content items with review status enabled in Ultra are either in a Forced Sequence or content that should be counted towards the progress tracking feature as of 3900.19 This can be used to track performance and in Adaptive Release rules to control the release of other content.\n\n**Since**: 3700.15.0"
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the content to students.",
            "title": "blackboard.plugin.content.rest.publicapi.v1.ContentV1.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the content is currently available to students.  Instructors can always access the content.  If set to 'PartiallyVisible', the title will be available to students but the body will not.  Defaults to Yes.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| PartiallyVisible |  |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "PartiallyVisible"
                    ]
                },
                "allowGuests": {
                    "type": "boolean",
                    "description": "Whether this content is available to users with the 'guest' role. Defaults to true."
                },
                "allowObservers": {
                    "type": "boolean",
                    "description": "Whether or not \"observers\" are allowed access to this Content. Defaults to true.\n\n**Since**: 3900.31.0"
                },
                "adaptiveRelease": {
                    "type": "object",
                    "description": "Settings controlling adaptive release of the content to students.",
                    "title": "blackboard.plugin.content.rest.publicapi.v1.ContentV1.Availability.AdaptiveRelease",
                    "properties": {
                        "start": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date when this content will become available to students."
                        },
                        "end": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date when this content will no longer be available to students."
                        }
                    }
                }
            }
        },
        "contentHandler": {
            "description": "Extended settings specific to this content item's content handler.",
            "$ref": "#/definitions/blackboard.platform.rest.publicapi.v1.content.ContentHandler"
        },
        "subtype": {
            "type": "string",
            "description": "Optional assessment subtype for further differentiation. For example, a test can have the subtype 'assignment' in Ultra, alongside AI conversations and knowledge checks, ensuring type-agnostic categorization."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.plugin.content.rest.publicapi.v1.Content",
    "typeName": "BlackboardPluginContentRestPublicapiV1Content"
},
    requestType: "ContentUpdateContentRequest",
    isMultipart: false,
    originalName: "updateContent",
    isWrite: true
  } as ApiMethodInfo,

  getContentChildren: {
    description: "List all child content items directly beneath another content item.  This is only valid for content items that are allowed to have children (e.g. Folders).\n\nUsers with at least one of the following entitlements may access all child contents from a content item:\n\n- course.adaptiverelease.CREATE\n- course.adaptiverelease.DELETE\n- course.adaptiverelease.MODIFY\n- course.adaptiverelease.VIEW\n- course.configure-areas.EXECUTE\n- course.content-item.copy.EXECUTE\n- course.content.DELETE\n- course.content.MODIFY\n- course.learningstandards.alignment.CREATE\n- course.performance.dashboard.VIEW\nIn any of the following cases, the user may also get the child contents from a content item.\n\n- The user has a role in the course other than guest or observer, and doesn't have any of the previously mentioned entitlements.\n- The user has the role of observer, and both the course and the underlying content allow observer access.\n- The user accesses the course as guest, both the course and the underlying content allow guest access, further, the course content menu allows guest access as well for the original courses.\n</p>\n\nFor other users, permission to view the content item will depend on the availability settings of the course and  the content item. The following fields will be filtered out:\n\n- availability.available\n- availability.allowGuests\n- availability.adaptiveRelease\nInclude includeInActivityTracking to define if the content should be included in the activity tracking.  By default, this value is true so the content will be included in the activity tracking. </p>\n\nUsage of userMessageState field into expand, is only legal with a limit up to 10 items, a protection was set so that users can request the field  setting a limit &lt;= 10. In all the other cases, status BAD_REQUEST (400) will be returns to the client. </p>\n\n**Since**: 3000.1.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/children",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
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
        "name": "recursive",
        "type": "boolean",
        "description": "Search for child content recursively.  A value of 'true' indicates that search results should include all content descendants within the hierarchy of the specified parent.  A value of 'false' indicates results should be limited to immediate children only.  Not setting this field defaults to 'false' behavior; only including immediate children.\n\n**Since**: 3100.2.0",
        "required": false
    },
    {
        "name": "title",
        "type": "string",
        "description": "Search for content title. Will return all Content items whose title contains the supplied search value.\n\n**Since**: 3900.10.0",
        "required": false
    },
    {
        "name": "contentHandler",
        "type": "string",
        "description": "Search for the specific content handler.  Not setting this field will return all content handlers.\n\n**Since**: 3400.5.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for contents with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3700.1.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.1.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for contents with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3700.4.0",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "reviewable",
        "type": "boolean",
        "description": "Search contents by whether they are reviewable or not.\n\n**Since**: 3700.15.0",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "ContentGetContentChildrenRequest",
    isMultipart: false,
    originalName: "getContentChildren",
    isWrite: false
  } as ApiMethodInfo,

  createChild: {
    description: "Create a new child content item beneath an existing content item.  This is only valid for content items that are allowed to have children (e.g. Folders). Entitlement \"course.content.CREATE\" required to create Course Content.\n\n**Since**: 3000.1.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/children",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "allowChildCourseContent",
        "type": "boolean",
        "description": "By default, child courses of a cross listed course can not have their contents modified.  The allowChildCourseContent parameter can be sent as true in order to bypass this validation.",
        "required": false
    },
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
        "parentId": {
            "type": "string",
            "description": "The ID of the content's parent.  Note that top-level contents do not have parents. The 'parentId' field is a writable field as of the Bb Learn 3200.6.0 release.  Specifying a new value in PATCH requests allows the Content object to be moved from one parent to another."
        },
        "title": {
            "type": "string",
            "description": "The title or name of this content. Typically shown as the main text to click in the course outline when accessing the content."
        },
        "body": {
            "type": "string",
            "format": "BbML",
            "example": "<!-- {\"bbMLEditorVersion\":1} --><div data-bbid=\"bbml-editor-id_9c6a9556-80a5-496c-b10d-af2a9ab22d45\"> <h4>Header Large</h4>  <h5>Header Medium</h5>  <h6>Header Small</h6>  <p><strong>Bold&nbsp;</strong><em>Italic&nbsp;<span style=\"text-decoration: underline;\">Italic Underline</span></em></p> <ul>   <li><span style=\"text-decoration: underline;\"><em></em></span>Bullet 1</li>  <li>Bullet 2</li> </ul> <p>  <img src=\"@X@EmbeddedFile.requestUrlStub@X@bbcswebdav/xid-1217_1\">   <span>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</span> </p>  <p><span>&lt;braces test=\"values\" other=\"strange things\"&gt;</span></p> <p>Header Small</p> <ol>   <li>Number 1</li>   <li>Number 2</li> </ol>  <p>Just words followed by a formula</p>  <p><img align=\"middle\" alt=\"3 divided by 4 2 root of 7\" class=\"Wirisformula\" src=\"@X@EmbeddedFile.requestUrlStub@X@sessions/EA5F7FF3DF32D271D0E54AF0150D924A/anonymous/wiris/49728c9f5b4091622e2f4d183d857d35.png\" data-mathml=\"«math xmlns=¨http://www.w3.org/1998/Math/MathML¨»«mn»3«/mn»«mo»/«/mo»«mn»4«/mn»«mroot»«mn»7«/mn»«mn»2«/mn»«/mroot»«/math»\"></p> <p><a href=\"http://www.blackboard.com\">Blackboard</a></p> </div>",
            "description": "The body text associated with this content. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information."
        },
        "description": {
            "type": "string",
            "description": "The short description of this content.\n\nThis field is not used in Classic courses.  For Ultra courses this is used to show information directly on the course outline.",
            "maxLength": 750
        },
        "position": {
            "type": "integer",
            "format": "int32",
            "description": "The position of this content within its parent folder. Position values are zero-based (the first element has a position value of zero, not one). Default position is last in the list of child contents under the parent."
        },
        "launchInNewWindow": {
            "type": "boolean",
            "description": "Indicates whether the content is going to open in a new window.\n\n**Since**: 3800.10.0"
        },
        "reviewable": {
            "type": "boolean",
            "description": "Indicates whether Review Status is enabled for this content. Content items with review status enabled can be marked as reviewed by students in classic courses and content items with review status enabled in Ultra are either in a Forced Sequence or content that should be counted towards the progress tracking feature as of 3900.19 This can be used to track performance and in Adaptive Release rules to control the release of other content.\n\n**Since**: 3700.15.0"
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the content to students.",
            "title": "blackboard.plugin.content.rest.publicapi.v1.ContentV1.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the content is currently available to students.  Instructors can always access the content.  If set to 'PartiallyVisible', the title will be available to students but the body will not.  Defaults to Yes.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| PartiallyVisible |  |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "PartiallyVisible"
                    ]
                },
                "allowGuests": {
                    "type": "boolean",
                    "description": "Whether this content is available to users with the 'guest' role. Defaults to true."
                },
                "allowObservers": {
                    "type": "boolean",
                    "description": "Whether or not \"observers\" are allowed access to this Content. Defaults to true.\n\n**Since**: 3900.31.0"
                },
                "adaptiveRelease": {
                    "type": "object",
                    "description": "Settings controlling adaptive release of the content to students.",
                    "title": "blackboard.plugin.content.rest.publicapi.v1.ContentV1.Availability.AdaptiveRelease",
                    "properties": {
                        "start": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date when this content will become available to students."
                        },
                        "end": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The date when this content will no longer be available to students."
                        }
                    }
                }
            }
        },
        "contentHandler": {
            "description": "Extended settings specific to this content item's content handler.",
            "$ref": "#/definitions/blackboard.platform.rest.publicapi.v1.content.ContentHandler"
        },
        "subtype": {
            "type": "string",
            "description": "Optional assessment subtype for further differentiation. For example, a test can have the subtype 'assignment' in Ultra, alongside AI conversations and knowledge checks, ensuring type-agnostic categorization."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.content.rest.publicapi.v1.ContentV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginContentRestPublicapiV1ContentV1"
},
    requestType: "ContentCreateChildRequest",
    isMultipart: false,
    originalName: "createChild",
    isWrite: true
  } as ApiMethodInfo,

  getContentChildrenStateById: {
    description: "Gets the progress tracking states of a content parent's children. Content refers to the individual elements within an Ultra course and, the term children refers to the items that are contained within a parent content item. This endpoint only supports Ultra courses.\n\nAn authenticated user can see the progress tracking status on the children if they either own the content, or if the user have any of the following entitlements:\n\n- course.progress.information.VIEW\n- course.content.designer.VIEW\n- course.content.MODIFY\n- course.content.DELETE\n</p>\n\n**Since**: 3900.112.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/children/states/{userId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
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
    requestType: "ContentGetContentChildrenStateByIdRequest",
    isMultipart: false,
    originalName: "getContentChildrenStateById",
    isWrite: false
  } as ApiMethodInfo,

  updateContentState: {
    description: "Updates the progress tracking state for a non-participatory content. This endpoint only supports Ultra courses.\n\nThe user must be a student of the course.\n\n**Since**: 3900.112.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/states",
    pathParams: [
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
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
        "contentId": {
            "type": "string",
            "description": "ID of the content to which this state belongs."
        },
        "userId": {
            "type": "string",
            "description": "ID of the user that this state is associated with."
        },
        "state": {
            "type": "string",
            "description": "Current state value.\n\nPossible values are:\n\n- None: student can't open this content item.\n- Unlocked: student is able to open the content item.\n- Started: student have opened the content item.\n- Completed: student have finished or submitted the content item.\n\n\n| Type      | Description\n | --------- | --------- |\n| None |  |\n| Unlocked |  |\n| Started |  |\n| Completed |  |\n",
            "enum": [
                "None",
                "Unlocked",
                "Started",
                "Completed"
            ]
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.content.State",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1ContentState"
},
    requestType: "ContentUpdateContentStateRequest",
    isMultipart: false,
    originalName: "updateContentState",
    isWrite: true
  } as ApiMethodInfo,

  getContentStateById: {
    description: "Gets the user progress tracking state for the requested content. This endpoint only supports Ultra courses.\n\nThe authenticated user can see his/her own progress tracking state of the requested content or Users with the following entitlement may access any progress tracking state item:\n\n- course.progress.information.VIEW\n</p>\n\n**Since**: 3900.112.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/states/{userId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
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
    requestBodySchema: null,
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.content.State",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1ContentState"
},
    requestType: "ContentGetContentStateByIdRequest",
    isMultipart: false,
    originalName: "getContentStateById",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const ContentHandlers = {
  getContents: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentMethods.getContents;
    
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

  createContent: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentMethods.createContent;
    
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

  createAssignment: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentMethods.createAssignment;
    
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

  getContent: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentMethods.getContent;
    
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

  deleteContent: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentMethods.deleteContent;
    
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

  updateContent: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentMethods.updateContent;
    
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

  getContentChildren: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentMethods.getContentChildren;
    
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

  createChild: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentMethods.createChild;
    
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

  getContentChildrenStateById: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentMethods.getContentChildrenStateById;
    
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

  updateContentState: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentMethods.updateContentState;
    
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

  getContentStateById: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = ContentMethods.getContentStateById;
    
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
