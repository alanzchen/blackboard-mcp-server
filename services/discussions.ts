import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter, ApiSchema } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const DiscussionsMethods: { [key: string]: ApiMethodInfo } = {
  getDiscussions: {
    description: "Get all discussions associated with the specified Ultra Course. The course must have ultra view enabled.\n\nRequires the following entitlement:\n\n- discussion.forum.VIEW\n</p> Enrolled users should be able to access this resource regardless of entitlement if the discussion is set to available. Any non-enrolled user with the required entitlements already mentioned above will be able to get an empty list response if consulted courseId does not have any discussion, otherwise, a 403 error should rise.\n\n**Since**: 3900.19.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/discussions",
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
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),available\" Supported fields are:\n\n- id\n- title\n- available\n- gradable\n- createdDate\n- modifiedDate\n- gradebookColumnId\n\n**Since**: 3900.19.0",
        "required": false
    },
    {
        "name": "title",
        "type": "string",
        "description": "Search for forums with title properties that contain this value.  Search is case-insensitive.\n\n**Since**: 3900.25.0",
        "required": false
    },
    {
        "name": "gradable",
        "type": "boolean",
        "description": "Search for forums which are configured to be gradable or not, based on input.\n\n**Since**: 3900.25.0",
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
    requestType: "DiscussionsGetDiscussionsRequest",
    isMultipart: false,
    originalName: "getDiscussions",
    isWrite: false
  } as ApiMethodInfo,

  createDiscussion: {
    description: "Create a discussion within the specified Ultra Course. If the discussion is created as gradable an associated gradebook column is also created. Such gradebook column can be updated via the course grades API.\n\nRequires the following entitlements:\n\n- discussion.forum.CREATE\n- discussion.post.CREATE\n- discussion.thread.CREATE\n- course.content.CREATE.\n</p>\n\n**Since**: 3900.27.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/discussions",
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
        "title": {
            "type": "string",
            "description": "Title given to the discussion forum",
            "maxLength": 333
        },
        "available": {
            "type": "boolean",
            "description": "Indicates if the discussion is available"
        },
        "gradable": {
            "type": "boolean",
            "description": "Indicates if the discussion allows grading"
        },
        "topic": {
            "description": "Topic of the Discussion. Only applicable to Ultra discussions.",
            "$ref": "#/definitions/blackboard.plugin.discussionboard.spring.rest.publicapi.v1.Topic"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.discussionboard.spring.rest.publicapi.v1.DiscussionV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1DiscussionV1"
},
    requestType: "DiscussionsCreateDiscussionRequest",
    isMultipart: false,
    originalName: "createDiscussion",
    isWrite: true
  } as ApiMethodInfo,

  getDiscussion: {
    description: "Get a discussion in the Ultra Course with the specified id.\n\nRequires the following entitlement:\n\n- discussion.forum.VIEW\n</p> Enrolled users should be able to access this resource regardless of entitlement if the discussion is set to available\n\n**Since**: 3900.19.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "discussionId",
        "type": "string",
        "description": "The discussion ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
    "ref": "blackboard.plugin.discussionboard.spring.rest.publicapi.v1.Discussion",
    "typeName": "BlackboardPluginDiscussionboardSpringRestPublicapiV1Discussion"
},
    requestType: "DiscussionsGetDiscussionRequest",
    isMultipart: false,
    originalName: "getDiscussion",
    isWrite: false
  } as ApiMethodInfo,

  updateDiscussion: {
    description: "Update a discussion in an Ultra Course.\n\nThis operation is always a partial-update. So user should only send data that he want to change. If the discussion is updated to be gradable an associated gradebook column is also created. Such gradebook column can be updated via the course grades API. List of entitlements which allow a logged on user to update a forum.\n\n- {@code discussion.forum.MODIFY}\n\n**Since**: 3900.27.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "discussionId",
        "type": "string",
        "description": "The discussion ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
            "description": "Title given to the discussion forum",
            "maxLength": 333
        },
        "available": {
            "type": "boolean",
            "description": "Indicates if the discussion is available"
        },
        "gradable": {
            "type": "boolean",
            "description": "Indicates if the discussion allows grading"
        },
        "topic": {
            "description": "Topic of the Discussion. Only applicable to Ultra discussions.",
            "$ref": "#/definitions/blackboard.plugin.discussionboard.spring.rest.publicapi.v1.Topic"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.plugin.discussionboard.spring.rest.publicapi.v1.Discussion",
    "typeName": "BlackboardPluginDiscussionboardSpringRestPublicapiV1Discussion"
},
    requestType: "DiscussionsUpdateDiscussionRequest",
    isMultipart: false,
    originalName: "updateDiscussion",
    isWrite: true
  } as ApiMethodInfo,

  getDiscussionGroups: {
    description: "Get the groups associated to a discussion from an Ultra Course, or an empty list if there are none.\n\nRequires the following entitlement:\n\n- course.content.designer.VIEW\n</p>\n\n**Since**: 3900.27.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/groups",
    pathParams: [
    {
        "name": "discussionId",
        "type": "string",
        "description": "The discussion ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"threadId(desc)\" Supported fields are:\n\n- groupId\n- threadId\n\n**Since**: 3900.27.0",
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
    requestType: "DiscussionsGetDiscussionGroupsRequest",
    isMultipart: false,
    originalName: "getDiscussionGroups",
    isWrite: false
  } as ApiMethodInfo,

  createDiscussionGroupAssociation: {
    description: "Sets the specified group inside a discussion from an Ultra Course. This will create a group thread. A discussion that already has messages, including drafts, will not be able to be changed into a group discussion. After the first group has been set, all subsequent groups must belong to the same group set. If the forum content is conditioned behind a memberships criteria, no group associations shall be created by this endpoint.\n\nRequires the following entitlement:\n\n- course.content.MODIFY\n</p>\n\n**Since**: 3900.27.0",
    method: "put",
    path: "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/groups/{groupId}",
    pathParams: [
    {
        "name": "discussionId",
        "type": "string",
        "description": "The discussion ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
    "ref": "org.springframework.http.ResponseEntity<blackboard.plugin.discussionboard.spring.rest.publicapi.v1.DiscussionGroupV1>",
    "typeName": "OrgSpringframeworkHttpResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1DiscussionGroupV1"
},
    requestType: "DiscussionsCreateDiscussionGroupAssociationRequest",
    isMultipart: false,
    originalName: "createDiscussionGroupAssociation",
    isWrite: true
  } as ApiMethodInfo,

  getDiscussionMessages: {
    description: "Get the messages of the specified discussion in an Ultra Course.\n\nRequires the following entitlement:\n\n- discussion.post.VIEW\n\nEnrolled users should be able to access this resource regardless of entitlement if the discussion is set to available For group discussions, students will be able to access only the messages associated with groups in which they are enrolled. Entitled users will have access to messages associated with all groups, but can filter returned messages based on groupId using the groupId query parameter A draft message can only be seen by its own author\n\n**Since**: 3900.19.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/messages",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "discussionId",
        "type": "string",
        "description": "The discussion ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "groupId",
        "type": "string",
        "description": "Search for messages which are associated with this groupId.\n\n**Since**: 3900.19.0",
        "required": false
    },
    {
        "name": "userId",
        "type": "string",
        "description": "Search for messages made by this userId.\n\n**Since**: 3900.25.0",
        "required": false
    },
    {
        "name": "status",
        "type": "string",
        "description": "Search for messages with status.\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Published | Message is published in the discussion and visible for all users. |\n| Deleted | Message is shown in the discussion as soft-deleted. |\n| Draft | Message is stored as a draft and only visible for the author user. |\n",
        "required": false
    },
    {
        "name": "isRead",
        "type": "boolean",
        "description": "Search for read or unread messages.\n\n**Since**: 3900.25.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for messages filtering by 'created'. If createdCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for messages filtering by 'modified'. If modifiedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
        "required": false
    },
    {
        "name": "posted",
        "type": "string",
        "description": "Search for messages filtering by 'posted'. If postedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
        "required": false
    },
    {
        "name": "edited",
        "type": "string",
        "description": "Search for messages filtering by 'edited'. If editedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Operation to be applied to 'created'. When not specified, it will perform as 'greaterOrEqual' by default if 'created' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Operation to be applied to 'modified'. When not specified, it will perform as 'greaterOrEqual' by default if 'modified' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "postedCompare",
        "type": "string",
        "description": "Operation to be applied to 'posted'. When not specified, it will perform as 'greaterOrEqual' by default if 'posted' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "editedCompare",
        "type": "string",
        "description": "Operation to be applied to 'edited'. When not specified, it will perform as 'greaterOrEqual' by default if 'edited' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"createdDate(desc),givenName\" Supported fields are:\n\n- id\n- discussionId\n- parentId\n- threadId\n- userId\n- groupId\n- givenName\n- familyName\n- status\n- body\n- createdDate\n- modifiedDate\n- isRead\n\n**Since**: 3900.19.0",
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
    requestType: "DiscussionsGetDiscussionMessagesRequest",
    isMultipart: false,
    originalName: "getDiscussionMessages",
    isWrite: false
  } as ApiMethodInfo,

  createMessage: {
    description: "Create a message in the main thread of a discussion from an Ultra Course. This corresponds to a direct reply to the topic.\n\nRequires the following entitlements:\n\n- discussion.post.CREATE\n\nFor group discussions, instructors must specify a valid group id for the message to be created in the specific group thread.\n\n**Since**: 3900.27.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/messages",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "discussionId",
        "type": "string",
        "description": "The discussion ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
        "groupId": {
            "type": "string",
            "description": "The Id of the group, only set for group discussions."
        },
        "status": {
            "type": "string",
            "description": "Status of the message.\n\n\n| Type      | Description\n | --------- | --------- |\n| Published | Message is published in the discussion and visible for all users. |\n| Deleted | Message is shown in the discussion as soft-deleted. |\n| Draft | Message is stored as a draft and only visible for the author user. |\n",
            "enum": [
                "Published",
                "Deleted",
                "Draft"
            ]
        },
        "body": {
            "type": "string",
            "description": "Body of the message, in BbML format."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "org.springframework.http.ResponseEntity<blackboard.plugin.discussionboard.spring.rest.publicapi.v1.MessageV1>",
    "typeName": "OrgSpringframeworkHttpResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1MessageV1"
},
    requestType: "DiscussionsCreateMessageRequest",
    isMultipart: false,
    originalName: "createMessage",
    isWrite: true
  } as ApiMethodInfo,

  deleteMessage: {
    description: "Deletes a message in a discussion from an Ultra Course. If the message has no replies, it is fully deleted. Otherwise, it is soft-deleted unless explicitly requested for complete deletion using the query parameter `deleteReplies`.\n\nRequires the following entitlement:\n\n- discussion.post.MODIFY\n- discussion.draft.DELETE\n- discussion.post.DELETE\n- discussion.post.author.DELETE\n- discussion.post.author.DELETE\n\n**Since**: 3900.27.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/messages/{messageId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "discussionId",
        "type": "string",
        "description": "The discussion ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "messageId",
        "type": "string",
        "description": "The message ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "deleteReplies",
        "type": "boolean",
        "description": "Whether the DELETE request should delete the replies or not. If true, the message and its replies are hard-deleted. Otherwise, the message is soft-deleted. If the message doesn't have replies, it is hard-deleted in any case.\n\n**Since**: 3900.27.0",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "reference",
    "ref": "org.springframework.http.ResponseEntity<blackboard.plugin.discussionboard.spring.rest.publicapi.v1.MessageV1>",
    "typeName": "OrgSpringframeworkHttpResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1MessageV1"
},
    requestType: "DiscussionsDeleteMessageRequest",
    isMultipart: false,
    originalName: "deleteMessage",
    isWrite: true
  } as ApiMethodInfo,

  updateMessage: {
    description: "Update a message of a discussion from an Ultra Course.\n\nRequires the following entitlement:\n\n- discussion.draft.MODIFY\n- discussion.post.MODIFY\n- discussion.post.author.MODIFY\n\n**Since**: 3900.27.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/messages/{messageId}",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "discussionId",
        "type": "string",
        "description": "The discussion ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "messageId",
        "type": "string",
        "description": "The message ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
            "description": "Status of the message.\n\n\n| Type      | Description\n | --------- | --------- |\n| Published | Message is published in the discussion and visible for all users. |\n| Deleted | Message is shown in the discussion as soft-deleted. |\n| Draft | Message is stored as a draft and only visible for the author user. |\n",
            "enum": [
                "Published",
                "Deleted",
                "Draft"
            ]
        },
        "body": {
            "type": "string",
            "description": "Body of the message, in BbML format."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.plugin.discussionboard.spring.rest.publicapi.v1.Message",
    "typeName": "BlackboardPluginDiscussionboardSpringRestPublicapiV1Message"
},
    requestType: "DiscussionsUpdateMessageRequest",
    isMultipart: false,
    originalName: "updateMessage",
    isWrite: true
  } as ApiMethodInfo,

  getMessageReplies: {
    description: "Get the replies of the specified message in a discussion from an Ultra Course.\n\nRequires the following entitlement:\n\n- discussion.post.VIEW\n\nEnrolled users should be able to access this resource regardless of entitlement if the discussion is set to available A draft message can only be seen by its own author\n\n**Since**: 3900.19.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/messages/{messageId}/replies",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "discussionId",
        "type": "string",
        "description": "The discussion ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "messageId",
        "type": "string",
        "description": "The message ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    }
],
    queryParams: [
    {
        "name": "groupId",
        "type": "string",
        "description": "Search for messages which are associated with this groupId.\n\n**Since**: 3900.19.0",
        "required": false
    },
    {
        "name": "userId",
        "type": "string",
        "description": "Search for messages made by this userId.\n\n**Since**: 3900.25.0",
        "required": false
    },
    {
        "name": "status",
        "type": "string",
        "description": "Search for messages with status.\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Published | Message is published in the discussion and visible for all users. |\n| Deleted | Message is shown in the discussion as soft-deleted. |\n| Draft | Message is stored as a draft and only visible for the author user. |\n",
        "required": false
    },
    {
        "name": "isRead",
        "type": "boolean",
        "description": "Search for read or unread messages.\n\n**Since**: 3900.25.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for messages filtering by 'created'. If createdCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for messages filtering by 'modified'. If modifiedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
        "required": false
    },
    {
        "name": "posted",
        "type": "string",
        "description": "Search for messages filtering by 'posted'. If postedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
        "required": false
    },
    {
        "name": "edited",
        "type": "string",
        "description": "Search for messages filtering by 'edited'. If editedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Operation to be applied to 'created'. When not specified, it will perform as 'greaterOrEqual' by default if 'created' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Operation to be applied to 'modified'. When not specified, it will perform as 'greaterOrEqual' by default if 'modified' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "postedCompare",
        "type": "string",
        "description": "Operation to be applied to 'posted'. When not specified, it will perform as 'greaterOrEqual' by default if 'posted' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "editedCompare",
        "type": "string",
        "description": "Operation to be applied to 'edited'. When not specified, it will perform as 'greaterOrEqual' by default if 'edited' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"createdDate(desc),givenName\" Supported fields are:\n\n- id\n- discussionId\n- parentId\n- threadId\n- userId\n- groupId\n- givenName\n- familyName\n- status\n- body\n- createdDate\n- modifiedDate\n- isRead\n\n**Since**: 3900.19.0",
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
    requestType: "DiscussionsGetMessageRepliesRequest",
    isMultipart: false,
    originalName: "getMessageReplies",
    isWrite: false
  } as ApiMethodInfo,

  createMessageReply: {
    description: "Create a reply to the specified message in a discussion from an Ultra Course.\n\nRequires the following entitlement:\n\n- discussion.post.CREATE\n\n**Since**: 3900.27.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/messages/{messageId}/replies",
    pathParams: [
    {
        "name": "courseId",
        "type": "string",
        "description": "The course or organization ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:math101                    |\n | courseId   | courseId:math101                      |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n ",
        "required": true
    },
    {
        "name": "discussionId",
        "type": "string",
        "description": "The discussion ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "messageId",
        "type": "string",
        "description": "The message ID.  This may be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
        "groupId": {
            "type": "string",
            "description": "The Id of the group, only set for group discussions."
        },
        "status": {
            "type": "string",
            "description": "Status of the message.\n\n\n| Type      | Description\n | --------- | --------- |\n| Published | Message is published in the discussion and visible for all users. |\n| Deleted | Message is shown in the discussion as soft-deleted. |\n| Draft | Message is stored as a draft and only visible for the author user. |\n",
            "enum": [
                "Published",
                "Deleted",
                "Draft"
            ]
        },
        "body": {
            "type": "string",
            "description": "Body of the message, in BbML format."
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "org.springframework.http.ResponseEntity<blackboard.plugin.discussionboard.spring.rest.publicapi.v1.MessageV1>",
    "typeName": "OrgSpringframeworkHttpResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1MessageV1"
},
    requestType: "DiscussionsCreateMessageReplyRequest",
    isMultipart: false,
    originalName: "createMessageReply",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const DiscussionsHandlers = {
  getDiscussions: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DiscussionsMethods.getDiscussions;
    
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

  createDiscussion: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DiscussionsMethods.createDiscussion;
    
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

  getDiscussion: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DiscussionsMethods.getDiscussion;
    
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

  updateDiscussion: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DiscussionsMethods.updateDiscussion;
    
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

  getDiscussionGroups: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DiscussionsMethods.getDiscussionGroups;
    
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

  createDiscussionGroupAssociation: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DiscussionsMethods.createDiscussionGroupAssociation;
    
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

  getDiscussionMessages: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DiscussionsMethods.getDiscussionMessages;
    
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

  createMessage: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DiscussionsMethods.createMessage;
    
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

  deleteMessage: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DiscussionsMethods.deleteMessage;
    
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

  updateMessage: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DiscussionsMethods.updateMessage;
    
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

  getMessageReplies: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DiscussionsMethods.getMessageReplies;
    
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

  createMessageReply: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = DiscussionsMethods.createMessageReply;
    
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
