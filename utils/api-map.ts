import { ApiInfo, ApiEndpoint } from '../api-types.js';

/**
 * API map for all Blackboard Learn API endpoints
 */
export const apiMap: ApiInfo[] = [
  {
    "api": {
      "name": "Oauth",
      "description": "Blackboard Learn oauth API provides endpoints for managing oauth related operations."
    },
    "endpoint": {
      "name": "GetOauth2Authorizationcode",
      "description": "Requests an OAuth 2 authorization code. Use of PKCE standard is optional, but highly recommended.\n\n**Since**: 3200.7.0",
      "method": "get",
      "path": "/learn/api/public/v1/oauth2/authorizationcode",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "code_challenge",
          "type": "string",
          "description": "A code challenge to verify credentials along with the granted authorization code. It is used with the PKCE standard.\n\n**Since**: 3700.4.0"
        },
        {
          "name": "code_challenge_method",
          "type": "string",
          "description": "This is the method used to verify the code challenge using the PKCE standard. Blackboard only supports s256 as the code challenge method.\n\n**Since**: 3700.4.0"
        },
        {
          "name": "one_time_session_token",
          "type": "string",
          "description": "Token used to retrieve the session that generated this Oauth2 Code request. Used when session cookies are not sent due to privacy settings of the browser.\n\n**Since**: 3900.13.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Oauth",
      "description": "Blackboard Learn oauth API provides endpoints for managing oauth related operations."
    },
    "endpoint": {
      "name": "PostOauth2Token",
      "description": "Requests an OAuth 2 access token.\n\n**Since**: 2015.11.0",
      "method": "post",
      "path": "/learn/api/public/v1/oauth2/token",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "redirect_uri",
          "type": "string",
          "description": "The redirectUri to send the end user to once an access token response is made in Oauth2 Authorization Code Workflow\n\n**Since**: 3200.7.0"
        },
        {
          "name": "refresh_token",
          "type": "string",
          "description": "The refresh token granted for use by an application in Oauth2 Refresh Token Workflow\n\n**Since**: 3200.7.0"
        },
        {
          "name": "code_verifier",
          "type": "string",
          "description": "The code_verifier to be passed along with authorization code if PKCE standard was used to grant the authorization code.\n\n**Since**: 3700.4.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Oauth",
      "description": "Blackboard Learn oauth API provides endpoints for managing oauth related operations."
    },
    "endpoint": {
      "name": "GetOauth2Tokeninfo",
      "description": "Requests an OAuth 2 access token info.\n\n**Since**: 3700.6.0",
      "method": "get",
      "path": "/learn/api/public/v1/oauth2/tokeninfo",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsAdaptivereleaseRules",
      "description": "Get all the adaptive release rules associated with the given content in the specified course. Users with all the following entitlements may access this resource:\n\n- course.adaptiverelease.VIEW\nThe requesting user must also be enrolled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.23.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n- title\n\n**Since**: 3900.23.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "PostCoursesContentsAdaptivereleaseRules",
      "description": "Create a new adaptive release rule with the given title. Users with all the following entitlements may access this resource:\n\n- course.content.availability.MODIFY\n- course.adaptiverelease.CREATE\nThe requesting user must also be enrolled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.23.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules",
      "pathParameters": [
        {
          "name": "courseId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsAdaptivereleaseRules",
      "description": "Get the adaptive release rule associated with the given content in the specified course corresponding to the rule id. Users with all the following entitlements may access this resource:\n\n- course.adaptiverelease.VIEW\nThe requesting user must also be enrolled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.23.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesContentsAdaptivereleaseRules",
      "description": "Delete an adaptive release rule. Users with all the following entitlements may access this resource:\n\n- course.content.availability.MODIFY\n- course.adaptiverelease.DELETE\n\n**Since**: 3900.28.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "PatchCoursesContentsAdaptivereleaseRules",
      "description": "Updates an adaptive release rule. Users with all the following entitlements may update this resource:\n\n- course.content.availability.MODIFY\n- course.adaptiverelease.MODIFY\nThe requesting user must also be enrolled in the course, or have the system.course.MODIFY entitlement in order to update adaptive release rules.\n\n**Since**: 3900.28.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsAdaptivereleaseRulesCriteria",
      "description": "Get the criteria list from the adaptive release rule associated with the given content in the specified course corresponding to the rule id Users with all of the following entitlements may access this resource:\n\n- course.content.VIEW\n- course.adaptiverelease.VIEW\nNote: ACL criteria is not fully supported by this API.\n\n**Since**: 3900.23.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.23.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "PostCoursesContentsAdaptivereleaseRulesCriteria",
      "description": "Create a new adaptive release rule criteria. Users with the following entitlements may create resources. For each criteria type the corresponding entitlement is checked:\n\n- course.adaptiverelease.CREATE\n- course.content.availability.MODIFY\n- course.adaptiverelease.acl.CREATE\n- course.adaptiverelease.dates.CREATE\n- course.adaptiverelease.performance.CREATE\nNote: ACL criteria is not fully supported by this API.\n\n**Since**: 3900.23.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsAdaptivereleaseRulesCriteria",
      "description": "Get a single criterion by the specified Id, from the adaptive release rule associated to the given content Users with all of the following entitlements may access this resource:\n\n- course.content.VIEW\n- course.adaptiverelease.VIEW\nNote: ACL criteria is not fully supported by this API.\n\n**Since**: 3900.23.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesContentsAdaptivereleaseRulesCriteria",
      "description": "Delete a single criterion by the specified Id, from the adaptive release rule associated to the given content. Users with the following entitlements may delete the resource:\n\n- system.course.MODIFY\n- course.adaptiverelease.DELETE\n- course.content.availability.MODIFY\nUser may need one of the following entitlements depending on the criterion being deleted:\n\n- course.adaptiverelease.acl.DELETE\n- course.adaptiverelease.dates.DELETE\n- course.adaptiverelease.performance.DELETE\n\n**Since**: 3900.28.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "PatchCoursesContentsAdaptivereleaseRulesCriteria",
      "description": "Update a single criterion by the specified Id, from the adaptive release rule associated to the given content. Users with the following entitlements may update the resource:\n\n- system.course.MODIFY\n- course.adaptiverelease.MODIFY\n- course.content.availability.MODIFY\nUser may need one of the following entitlements depending on the criterion being updated:\n\n- course.adaptiverelease.acl.MODIFY\n- course.adaptiverelease.dates.MODIFY\n- course.adaptiverelease.performance.MODIFY\nFor updating criteria of type {@link GradeCompletedCriteria}, user may need any one of the following entitlements:\n\n- course.gradebook-metadata.VIEW\n- course.gradebook.MODIFY\nDateRange and DateRange criteria will behave differently if any of the range defining values are set to null, explicitly. For GradeRange criteria:\n\n- If maxScore is set to null, it will be understood as 'minScore or higher'.\n- minScore cannot be set to null, regardless of maxScore's value.\nFor DateRange criteria:\n\n- If startDate is set to null, it will be understood as 'before endDate'.\n- If endDate is set to null, it will be understood as 'after startDate'.\n- At least one date must be valid.\n\n**Since**: 3900.28.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsAdaptivereleaseRulesCriteriaGroups",
      "description": "Retrieve the list of groups included in the specified Membership criterion. Users with all the following entitlements may access this resource:\n\n- course.content.VIEW\n- course.adaptiverelease.VIEW\nThe requesting user must also be enroled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.32.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/groups",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"groupId(desc)\" Supported fields are:\n\n- groupId\n\n**Since**: 3900.32.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "PutCoursesContentsAdaptivereleaseRulesCriteriaGroups",
      "description": "Sets the list of group predicates associated with this criterion. The list must not exceed a size of 100. Groups not included in this list will be removed. Groups which are in the list and already associated will remain unchanged. A new association will be created for Groups which are in this list but not associated with the criterion. Users with all the following entitlements may access this resource:\n\n- course.adaptiverelease.acl.modify\nNote: The specified criterion must be of type Memberships.\n\n**Since**: 3900.34.0",
      "method": "put",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/groups",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "PutCoursesContentsAdaptivereleaseRulesCriteriaGroups",
      "description": "Create an association between the specified group and Membership criterion. A single criterion can hold up to a maximum of 100 group associations. Users with all the following entitlements may access this resource:\n\n- course.adaptiverelease.acl.modify\nNote: The specified criterion must be of type Memberships.\n\n**Since**: 3900.32.0",
      "method": "put",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/groups/{groupId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesContentsAdaptivereleaseRulesCriteriaGroups",
      "description": "Delete the association between the specified group and Membership criterion. Users with all the following entitlements may access this resource:\n\n- course.adaptiverelease.acl.modify\nNote: The specified criterion must be of type Memberships.\n\n**Since**: 3900.32.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/groups/{groupId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsAdaptivereleaseRulesCriteriaUsers",
      "description": "Retrieve a list of users who are included in the specified Membership criterion. Users with all the following entitlements may access this resource:\n\n- course.content.VIEW\n- course.adaptiverelease.VIEW\nThe requesting user must also be enroled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.32.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/users",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"userId(desc)\" Supported fields are:\n\n- userId\n\n**Since**: 3900.32.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "PutCoursesContentsAdaptivereleaseRulesCriteriaUsers",
      "description": "Sets the list of user predicates associated with the specified criterion. Users not included in this list will be removed. Users which are in this list and associated with the criterion will remain unchanged. Users which are in this list but not associated with the criterion will be added. Users with all the following entitlements may use this endpoint:\n\n- course.adaptiverelease.acl.modify\nThe specified users must be enroled in the course with a role that is neither \"Guest\" nor treated as \"Instructor\". The requesting user must also be enroled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.34.0",
      "method": "put",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/users",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "PutCoursesContentsAdaptivereleaseRulesCriteriaUsers",
      "description": "Create an association between the specified user and Membership criterion. A single criterion can hold up to a maximum of 100 user associations. Users with all the following entitlements may access this resource:\n\n- course.adaptiverelease.acl.modify\nThe specified user must be enroled in the course with a role that is neither \"Guest\" nor treated as \"Instructor\". The requesting user must also be enroled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.32.0",
      "method": "put",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Adaptive release",
      "description": "Blackboard Learn adaptive release API provides endpoints for managing adaptive release related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesContentsAdaptivereleaseRulesCriteriaUsers",
      "description": "Delete association between user and Membership criterion. The following entitlements are required\n\n- course.adaptiverelease.acl.modify\n\n**Since**: 3900.32.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Announcements",
      "description": "Blackboard Learn announcements API provides endpoints for managing announcements related operations."
    },
    "endpoint": {
      "name": "GetAnnouncements",
      "description": "Return a list of System Announcements. Users with the 'system.announcements.VIEW' entitlement can view 'available' System Announcements. Users with the 'system.announcements.admin.VIEW' entitlement can view 'available' &amp; 'unavailable' System Announcements.\n\n**Since**: 3100.7.0",
      "method": "get",
      "path": "/learn/api/public/v1/announcements",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "creatorUserId",
          "type": "string",
          "description": "Search for announcements with creator user id equal to this value.\n\n**Since**: 3900.89.0."
        },
        {
          "name": "creatorUsername",
          "type": "string",
          "description": "Search for announcements with creator username equal to this value.\n\n**Since**: 3900.89.0."
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for announcements with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3500.3.0"
        },
        {
          "name": "createdUntil",
          "type": "string",
          "description": "Search announcements with created date less than or equal to this value. 'createdCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3500.3.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for announcements with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3500.3.0"
        },
        {
          "name": "modifiedUntil",
          "type": "string",
          "description": "Search announcements with modified date less than or equal to this value. 'modifiedCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3500.3.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for announcements with a title like the provided value.\n\n**Since**: 3500.3.0"
        },
        {
          "name": "startDate",
          "type": "string",
          "description": "Search announcements with start date relative to this value. 'startAnnouncementsDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.92.0"
        },
        {
          "name": "startDateUntil",
          "type": "string",
          "description": "Search announcements with start date relative to this value. 'startAnnouncementsDateCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0"
        },
        {
          "name": "startDateCompare",
          "type": "string",
          "description": "Used alongside the 'startDate' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3900.92.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n"
        },
        {
          "name": "endDate",
          "type": "string",
          "description": "Search announcements with end date relative to this value. 'endAnnouncementsDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.92.0"
        },
        {
          "name": "endDateUntil",
          "type": "string",
          "description": "Search announcements with end date relative to this value. 'endAnnouncementsDateCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0"
        },
        {
          "name": "endDateCompare",
          "type": "string",
          "description": "Used alongside the 'endDate' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3900.92.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Announcements",
      "description": "Blackboard Learn announcements API provides endpoints for managing announcements related operations."
    },
    "endpoint": {
      "name": "PostAnnouncements",
      "description": "Create a System Announcement. Users with the 'system.announcements.CREATE' entitlement can create System Announcements.\n\n**Since**: 3100.7.0",
      "method": "post",
      "path": "/learn/api/public/v1/announcements",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Announcements",
      "description": "Blackboard Learn announcements API provides endpoints for managing announcements related operations."
    },
    "endpoint": {
      "name": "GetAnnouncements",
      "description": "Get a System Announcement. Users with the 'system.announcements.VIEW' entitlement can view 'available' System Announcements. Users with the 'system.announcements.admin.VIEW' entitlement can view 'available' &amp; 'unavailable' System Announcements.\n\n**Since**: 3100.7.0",
      "method": "get",
      "path": "/learn/api/public/v1/announcements/{announcementId}",
      "pathParameters": [
        {
          "name": "announcementId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Announcements",
      "description": "Blackboard Learn announcements API provides endpoints for managing announcements related operations."
    },
    "endpoint": {
      "name": "DeleteAnnouncements",
      "description": "Delete a System Announcement. Users with the 'system.announcements.DELETE' entitlement can delete System Announcements.\n\n**Since**: 3100.7.0",
      "method": "delete",
      "path": "/learn/api/public/v1/announcements/{announcementId}",
      "pathParameters": [
        {
          "name": "announcementId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Announcements",
      "description": "Blackboard Learn announcements API provides endpoints for managing announcements related operations."
    },
    "endpoint": {
      "name": "PatchAnnouncements",
      "description": "Update a System Announcement. Users with the 'system.announcements.MODIFY' entitlement can update System Announcements.\n\n**Since**: 3100.7.0",
      "method": "patch",
      "path": "/learn/api/public/v1/announcements/{announcementId}",
      "pathParameters": [
        {
          "name": "announcementId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attempt receipt",
      "description": "Blackboard Learn attempt receipt API provides endpoints for managing attempt receipt related operations."
    },
    "endpoint": {
      "name": "GetAttemptreceipts",
      "description": "Get the attempt receipt associated with the @param attemptReceiptIdParam\n\nUsers with all the following entitlements may access this resource:\n\n- GradebookEntitlement.ViewAttempts\n\n**Since**: 3900.37.0",
      "method": "get",
      "path": "/learn/api/public/v1/attemptReceipts/{attemptReceiptId}",
      "pathParameters": [
        {
          "name": "attemptReceiptId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attempt receipt",
      "description": "Blackboard Learn attempt receipt API provides endpoints for managing attempt receipt related operations."
    },
    "endpoint": {
      "name": "GetCoursesAttemptreceipts",
      "description": "Get the attempt receipt associated with the @param attemptReceiptIdParam If the attempt receipt is not found in the current course but exists in another course, the response will still include an attempt receipt with information the user is allowed to see relative to that course.\n\nUsers with the following entitlement may access this resource:\n\n- {@code GradebookEntitlement.ViewAttempts}\n\n**Since**: 3900.113.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/attemptReceipts/{attemptReceiptId}",
      "pathParameters": [
        {
          "name": "attemptReceiptId",
          "type": "string",
          "description": ""
        },
        {
          "name": "courseId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "GetCoursesMeetings",
      "description": "Returns a list of course meetings for a given course id.\n\nThe \"course.attendance.VIEW\" entitlement is required to view a Course Meeting.\n\n**Since**: 3500.7.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "PostCoursesMeetings",
      "description": "Creates a new Course Meeting within the provided Course/Organization Id. An attendance grade book column will automatically be generated if one does not exist.\n\nThe \"course.attendance.CREATE\" entitlement is required to create a Course Meeting.\n\n**Since**: 3500.7.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesMeetings",
      "description": "Deletes all course meetings in the course for the given course Id.\n\nThe 'course.attendance.DELETE' entitlement is required to delete Course Meetings.\n\n**Since**: 3500.7.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "GetCoursesMeetingsDownloadurl",
      "description": "Generate Download URL for Attendance Data.\n\nThe \"course.attendance.CREATE\" entitlement is required to generate download URL for attendance data.\n\n**Since**: ????",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/downloadUrl",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "GetCoursesMeetingsUsers",
      "description": "Returns a list of All Attendance Meeting records for a given user id (where the student participates and the user making the request has access to), regardless of courses and meetings.\n\nThe \"course.attendance.VIEW\" entitlement is required to view a Course Meeting attendance. <b>* Please notice that result list is not filtered by Course Id, courseId parameter in the URL is needed for permissions and entitlement check.</b>\n\n**Since**: 3500.7.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesMeetingsUsers",
      "description": "Deletes all attendance records for the user in specific course.\n\nThe 'course.attendance.DELETE' entitlement is required to delete attendance records.\n\n**Since**: 3500.7.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesMeetingsUsersAll",
      "description": "Deletes All Attendance Meeting records for a given user id (where the student participates and the user making the request has access to). It will delete meeting attendance regardless of course.\n\nThe 'course.attendance.DELETE' entitlement is required to delete attendance records. <b>* Please notice that delete operation here is not filtered by Course Id, courseId parameter in the URL is needed for permissions and entitlement check.</b>\n\n**Since**: 3500.7.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/users/{userId}/all",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "GetCoursesMeetings",
      "description": "Returns a Course Meeting for the given meeting Id.\n\nThe \"course.attendance.VIEW\" entitlement is required to view a Course Meeting.\n\n**Since**: 3500.7.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/{meetingId}",
      "pathParameters": [
        {
          "name": "meetingId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesMeetings",
      "description": "Delete the Course Meeting for the given course meeting Id.\n\nThe 'course.attendance.DELETE' entitlement is required to delete Course Meetings.\n\n**Since**: 3500.7.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/{meetingId}",
      "pathParameters": [
        {
          "name": "meetingId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "PatchCoursesMeetings",
      "description": "Update the Course Meeting for the given Course/Organization.\n\nThe \"course.attendance.MODIFY\" entitlement is required to update a Course Meeting. The \"course.attendance.VIEW\" entitlement is required to view a Course Meeting.\n\n**Since**: 3500.7.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/{meetingId}",
      "pathParameters": [
        {
          "name": "meetingId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "GetCoursesMeetingsUsers",
      "description": "Returns a list of Course Meeting Attendance for a given meeting id.\n\nThe \"course.attendance.VIEW\" entitlement is required to view a Course Meeting attendance.\n\n**Since**: 3500.7.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/{meetingId}/users",
      "pathParameters": [
        {
          "name": "meetingId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "PostCoursesMeetingsUsers",
      "description": "Creates a new Course Meeting Attendance within the provided Course/Organization Id.\n\nThe \"course.attendance.CREATE\" entitlement is required to create a Course Meeting Attendance.\n\n**Since**: 3500.7.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/{meetingId}/users",
      "pathParameters": [
        {
          "name": "meetingId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesMeetingsUsers",
      "description": "Deletes all attendance records in the course meeting for a given meeting Id.\n\nThe 'course.attendance.DELETE' entitlement is required to delete attendance records.\n\n**Since**: 3500.7.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/{meetingId}/users",
      "pathParameters": [
        {
          "name": "meetingId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "PostCoursesMeetingsUsersBulk",
      "description": "Creates or updates attendance records for the meeting for all users in the course.\n\nUser required both of the entitlements below. If the user does not have the required entitlements,no records are created or modified.  Entitlement | User Access ------------|-----------  course.attendance.CREATE | Create Course/Organization Course Meeting Attendance course.attendance.MODIFY | Update Course/Organization Meeting Attendance\n\n**Since**: 3500.7.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/{meetingId}/users/bulk",
      "pathParameters": [
        {
          "name": "meetingId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "GetCoursesMeetingsUsers",
      "description": "Returns a Course Meeting Attendance information for the given meeting and user Id.\n\nThe \"course.attendance.VIEW\" entitlement is required to view a Course Meeting Attendance.\n\n**Since**: 3500.7.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/{meetingId}/users/{userId}",
      "pathParameters": [
        {
          "name": "meetingId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesMeetingsUsers",
      "description": "Delete attendance record for meeting.It will delete meeting attendance within a course meeting.\n\nThe 'course.attendance.DELETE' entitlement is required to delete Attendance Record.\n\n**Since**: 3500.7.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/{meetingId}/users/{userId}",
      "pathParameters": [
        {
          "name": "meetingId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Attendance",
      "description": "Blackboard Learn attendance API provides endpoints for managing attendance related operations."
    },
    "endpoint": {
      "name": "PatchCoursesMeetingsUsers",
      "description": "Update the Course Meeting Attendance data for the given Course/Organization.\n\nThe \"course.attendance.MODIFY\" entitlement is required to update a Course Meeting Attendance. The \"course.attendance.VIEW\" entitlement is required to view a Course Meeting attendance.\n\n**Since**: 3500.7.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/meetings/{meetingId}/users/{userId}",
      "pathParameters": [
        {
          "name": "meetingId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Calendar",
      "description": "Blackboard Learn calendar API provides endpoints for managing calendar related operations."
    },
    "endpoint": {
      "name": "GetCalendars",
      "description": "Get the list of calendars. This endpoint will return all calendars viewable by the user. All users can request a list of calendars viewable to them.\n\n**Since**: 3400.9.0",
      "method": "get",
      "path": "/learn/api/public/v1/calendars",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Calendar",
      "description": "Blackboard Learn calendar API provides endpoints for managing calendar related operations."
    },
    "endpoint": {
      "name": "GetCalendarsItems",
      "description": "Get the list of calendar items. This endpoint will return all types of CalendarItems viewable by the user unless a specific <code>type</code> is specified as a query parameter.\n\nIf <code>since</code> and <code>since</code> are not provided this endpoint will default to the upcoming two week timeframe from now. </p>\n\nIf only <code>since</code> is provided this endpoint will default the <code>until</code> parameter two weeks after <code>since</code>. </p>\n\nIf only <code>until</code> is provided this endpoint will default the <code>since</code> parameter two prior to <code>until</code>. </p>\n\nMaximum timespan between <code>since</code> and <code>until</code> is 16 weeks. </p>\n\nCalendarItems of type <code>GradebookColumn</code> are a representation of a specific gradable item and therefore read-only. Modifications to GradebookColumn items performed via the Gradebook Column endpoints will be reflected in the CalendarItems endpoints. </p>\n\nThe CalendarItem <code>id</code> can be used as the <code>columnId</code> on the Gradebook Column endpoints found here: <code>/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}</code>. </p> Example requests:\n\n- <code>GET ../items?since=2018-01-01T00:00:00.000Z&until2018-02-01T00:00:00.000Z // all calendar items for a given timeframe</code>\n- <code>GET ../items?since=2018-01-01T00:00:00.000Z&until2018-02-01T00:00:00.000Z&courseId=_123_1 // all calendar items for a given course (including Course, OfficeHours, GradebookColumn types)</code>\n- <code>GET ../items?since=2018-01-01T00:00:00.000Z&until2018-02-01T00:00:00.000Z&courseId=_123_1&type=GradebookColumn // all GradebookColumn items for a course</code>\n- <code>GET ../items?since=2018-01-01T00:00:00.000Z&until2018-02-01T00:00:00.000Z&courseId=_123_1&type=OfficeHours // all OfficeHours for a course</code>\n- <code>GET ../items?since=2018-01-01T00:00:00.000Z&until2018-02-01T00:00:00.000Z&type=GradebookColumn // all gradebook columns due within the given timeframe</code>\n- <code>GET ../items?since=2018-01-01T00:00:00.000Z&until2018-02-01T00:00:00.000Z&type=OfficeHours // all OfficeHours available to current user for a given timeframe</code>\nThe following must be true in order to view the following calendar item types:\n\n- Institution\n-\n\n- All users can view Institution calendar items\n\n- Personal\n-\n\n- Any user may view their own calendar items, but not other user's calendar items\n\n- Course\n-\n\n- The user must have the 'course.calendar.VIEW' entitlement\n- The course calendar must be enabled for the course the calendar item is associated with\n\n- GradebookColumn\n-\n\n- The user must be enrolled in the course or have either the    *       `course.gradebook-metadata.VIEW` or `course.gradebook.MODIFY` entitlement\n- The user must have the 'course.calendar.VIEW' entitlement\n- The course calendar must be enabled for the course the GradebookColumn is associated with\n\n- OfficeHours\n-\n\n- If the OfficeHours are created for a course calendar (calendarId = a course id) the user must be enrolled in the course\n- If the OfficeHours are created for a all courses (calendarId = PERSONAL) the user must be enrolled in any course that the user owning the OfficeHours is also enrolled in\n- In either case above the course calendar must be enabled\n\n</p>\n\n**Since**: 3400.9.0",
      "method": "get",
      "path": "/learn/api/public/v1/calendars/items",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Specifies only calendar items associated with 'courseId' are to be returned. NOTE: This is the course.id, not the course.courseId\n\n**Since**: 3400.9.0"
        },
        {
          "name": "type",
          "type": "string",
          "description": "Specifies only calendar items with the given type.\n\n**Since**: 3400.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Course |  |\n| GradebookColumn | Read only. |\n| Institution |  |\n| OfficeHours |  |\n| Personal |  |\n"
        },
        {
          "name": "since",
          "type": "string",
          "description": "Specifies only calendar items after the 'since' date (inclusive) are to be returned. Maximum of 16 weeks after the 'since' date will be returned. ISO-8601 date-time format is expected: [yyyy-MM-dd|yyyyMMdd][T(hh:mm[:ss[.sss]]|hhmm[ss[.sss]])]?[Z|[+-]hh:mm]]\n\n**Since**: 3400.9.0"
        },
        {
          "name": "until",
          "type": "string",
          "description": "Specifies only calendar items before the 'until' date (inclusive) are to be returned. Maximum of 16 weeks prior to the 'until' date will be returned. ISO-8601 date-time format is expected: [yyyy-MM-dd|yyyyMMdd][T(hh:mm[:ss[.sss]]|hhmm[ss[.sss]])]?[Z|[+-]hh:mm]]\n\n**Since**: 3400.9.0"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),start\" Supported fields are:\n\n- id\n- calendarId\n- title\n- start\n- end\n- modified\n\n**Since**: 3400.9.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Calendar",
      "description": "Blackboard Learn calendar API provides endpoints for managing calendar related operations."
    },
    "endpoint": {
      "name": "PostCalendarsItems",
      "description": "\n\nCreate a calendar item. Calendar items may be single or recurring. </p>\n\nCalendarItems of type <code>OfficeHours</code> will be assigned to the current user. </p> The following must be true in order to create a calendar item:\n\n- Institution\n-\n\n- The user must have the 'system.calendar-item.EXECUTE' entitlement\n\n- Personal\n-\n\n- Any user may create their own calendar items\n\n- Course\n-\n\n- The user may be enrolled or unenrolled in the course\n- The user must have the 'course.calendar-entry.CREATE' entitlement\n- The course calendar must be enabled for the specified course\n\n- GradebookColumn\n-\n\n- GradebookColumns must be created using the Gradebook API endpoint: <code>POST /learn/api/public/v2/courses/{courseId}/gradebook/columns</code>\n\n- OfficeHours\n-\n\n- The user must have the 'course.calendar-entry.CREATE' entitlement\n- If calendarId = a course id the user may be enrolled or unenrolled in the course but should have the 'course.calendar-entry.CREATE' entitlement and the calendar must be enabled to create event\n- Note: To create for all enrolled courses calendarId must be set to PERSONAL\n\nIf the course calendar includes LTI deep link definition  it will be included in the calendar item. </p>\n\n**Since**: 3400.9.0",
      "method": "post",
      "path": "/learn/api/public/v1/calendars/items",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Calendar",
      "description": "Blackboard Learn calendar API provides endpoints for managing calendar related operations."
    },
    "endpoint": {
      "name": "GetCalendarsItems",
      "description": "\n\nGet a course calendar item. </p>\n\nCalendarItems of type <code>GradebookColumn</code> are a representation of a specific gradable item and therefore read-only. Modifications to GradebookColumn items performed via the Gradebook Column endpoints will be reflected in the CalendarItems endpoints. </p>\n\nThe CalendarItem <code>id</code> can be used as the <code>columnId</code> on the Gradebook Column endpoints found here: <code>/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}</code>. </p> The following must be true in order to view the following calendar items types:\n\n- Institution\n-\n\n- All users can view Institution calendar items\n\n- Personal\n-\n\n- Any user may view their own calendar items, but not other user's calendar items\n\n- Course\n-\n\n- The user must have the 'course.calendar.VIEW' entitlement\n- The course calendar must be enabled for the course the calendar item is associated with\n\n- GradebookColumn\n-\n\n- The user must be enrolled in the course OR they must have either the       `course.gradebook-metadata.VIEW` or `course.gradebook.MODIFY` entitlement\n- The user must have the 'course.calendar.VIEW' entitlement\n- The course calendar must be enabled for the course the GradebookColumn is associated with\n\n- OfficeHours\n-\n\n- If the OfficeHours are created for a course calendar (calendarId = a course id) the user must be enrolled in the course\n- If the OfficeHours are created for a all courses (calendarId = PERSONAL) the user must be enrolled in any course that the user owning the OfficeHours is also enrolled in\n- In either case above the course calendar must be enabled\n\n**Since**: 3400.9.0",
      "method": "get",
      "path": "/learn/api/public/v1/calendars/items/{calendarItemType}/{calendarItemId}",
      "pathParameters": [
        {
          "name": "calendarItemType",
          "type": "string",
          "description": ""
        },
        {
          "name": "calendarItemId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Calendar",
      "description": "Blackboard Learn calendar API provides endpoints for managing calendar related operations."
    },
    "endpoint": {
      "name": "DeleteCalendarsItems",
      "description": "\n\nDelete a calendar item or series. </p> The following must be true in order to delete a calendar item:\n\n- Institution\n-\n\n- The user must have the 'system.calendar-item.EXECUTE' entitlement\n\n- Personal\n-\n\n- Any user may delete their own calendar items\n\n- Course\n-\n\n- The user may be enrolled or unenrolled in the course\n- The user must have the 'course.calendar.VIEW' entitlement\n- The user must have the 'course.calendar-entry.DELETE' entitlement\n- The course calendar must be enabled for the specified course\n\n- GradebookColumn\n-\n\n- GradebookColumns must be deleted using the Gradebook API endpoint: <code>DELETE /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}</code>\n\n- OfficeHours\n-\n\n- The user must have the 'course.calendar-entry.MODIFY' entitlement\n- The user must own the calendarItem\n- The calendar must be enabled if the calendarItem is associated with a course calendar.\n\n**Since**: 3400.9.0",
      "method": "delete",
      "path": "/learn/api/public/v1/calendars/items/{calendarItemType}/{calendarItemId}",
      "pathParameters": [
        {
          "name": "calendarItemType",
          "type": "string",
          "description": ""
        },
        {
          "name": "calendarItemId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Calendar",
      "description": "Blackboard Learn calendar API provides endpoints for managing calendar related operations."
    },
    "endpoint": {
      "name": "PatchCalendarsItems",
      "description": "\n\nUpdate a calendar item or series. </p>\n\nWhen updating the series the existing CalendarItems will be removed and a new set of CalendarItems will be created. This is the same behavior as experienced via the UI. </p> The following must be true in order to update a calendar item:\n\n- Institution\n-\n\n- The user must have the 'system.calendar-item.EXECUTE' entitlement\n\n- Personal\n-\n\n- Any user may update their own calendar items\n\n- Course\n-\n\n- The user may be enrolled or unenrolled in the course\n- The user must have the 'course.calendar-entry.MODIFY' entitlement\n- The user must have the 'course.calendar.VIEW' entitlement\n- The course calendar must be enabled for the specified course\n\n- GradebookColumn\n-\n\n- GradebookColumns must be updated using the Gradebook API endpoint: <code>PATCH /learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}</code>\n\n- OfficeHours\n-\n\n- The user must have the 'course.calendar-entry.MODIFY' entitlement\n- If calendarId = a course id the user may be enrolled or unenrolled in the course but should have the 'course.calendar-entry.MODIFY' entitlement  and the calendar must be enabled\n\nIf the course calendar includes LTI deep link definition  it will be updated in the calendar item.\n\n**Since**: 3400.9.0",
      "method": "patch",
      "path": "/learn/api/public/v1/calendars/items/{calendarItemType}/{calendarItemId}",
      "pathParameters": [
        {
          "name": "calendarItemType",
          "type": "string",
          "description": ""
        },
        {
          "name": "calendarItemId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Column exceptions",
      "description": "Blackboard Learn column exceptions API provides endpoints for managing column exceptions related operations."
    },
    "endpoint": {
      "name": "PostCoursesGradebookColumnsExceptions",
      "description": "Returns a paged list of all user exceptions associated with the course and gradebook column. The entitlement(course.gradebook-item.exceptions.VIEW) and be enrolled to the course is needed. </pre>\n\n**Since**: 3900.103.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/exceptions",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Column exceptions",
      "description": "Blackboard Learn column exceptions API provides endpoints for managing column exceptions related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsExceptionsUsers",
      "description": "Returns specific user exception associated with the course and gradebook column. The entitlement(course.gradebook-item.exceptions.VIEW) and be enrolled to the course is needed. </pre>\n\n**Since**: 3900.103.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/exceptions/users/{userId}",
      "pathParameters": [
        {
          "name": "userId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Column exceptions",
      "description": "Blackboard Learn column exceptions API provides endpoints for managing column exceptions related operations."
    },
    "endpoint": {
      "name": "PutCoursesGradebookColumnsExceptionsUsers",
      "description": "Creates/updates an exception associated with the course and gradable item for a user The entitlement(course.gradebook-item.exceptions.MODIFY) is checked.\n\n**Since**: 3900.103.0",
      "method": "put",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/exceptions/users/{userId}",
      "pathParameters": [
        {
          "name": "columnId",
          "type": "string",
          "description": ""
        },
        {
          "name": "userId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Column exceptions",
      "description": "Blackboard Learn column exceptions API provides endpoints for managing column exceptions related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesGradebookColumnsExceptionsUsers",
      "description": "Deletes an exception associated with the course and gradable item for a user. The entitlement(course.gradebook-item.exceptions.MODIFY) is checked.\n\n**Since**: 3900.103.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/exceptions/users/{userId}",
      "pathParameters": [
        {
          "name": "userId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content",
      "description": "Blackboard Learn content API provides endpoints for managing content related operations."
    },
    "endpoint": {
      "name": "GetCoursesContents",
      "description": "List top-level content items in a course.\n\nUsers with at least one of the following entitlements may access any content item:\n\n- course.adaptiverelease.CREATE\n- course.adaptiverelease.DELETE\n- course.adaptiverelease.MODIFY\n- course.adaptiverelease.VIEW\n- course.configure-areas.EXECUTE\n- course.content-item.copy.EXECUTE\n- course.content.DELETE\n- course.content.MODIFY\n- course.learningstandards.alignment.CREATE\n- course.performance.dashboard.VIEW\n</p>\n\nFor other users, permission to view the content item will depend on the availability settings of the course and  the content item.  The following fields will be filtered out:\n\n- availability.available\n- availability.allowGuests\n- availability.adaptiveRelease\n</p>\n\n**Since**: 3000.1.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "recursive",
          "type": "boolean",
          "description": "Search for child content recursively.  A value of 'true' indicates that search results should include all content descendants within the hierarchy of the specified parent.  A value of 'false' indicates results should be limited to immediate children only.  Not setting this field defaults to 'false' behavior; only including immediate children.\n\n**Since**: 3100.2.0"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for content title. Will return all Content items whose title contains the supplied search value.\n\n**Since**: 3900.10.0"
        },
        {
          "name": "contentHandler",
          "type": "string",
          "description": "Search for the specific content handler.  Not setting this field will return all content handlers.\n\n**Since**: 3400.5.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for contents with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3700.1.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.1.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for contents with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3700.4.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "reviewable",
          "type": "boolean",
          "description": "Search contents by whether they are reviewable or not.\n\n**Since**: 3700.15.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content",
      "description": "Blackboard Learn content API provides endpoints for managing content related operations."
    },
    "endpoint": {
      "name": "PostCoursesContents",
      "description": "Create a new top-level content item. Currently only folders may be created as top-level content items in a Classic course. For Ultra courses any content item is allowed and will be placed under the ROOT folder. Entitlement \"course.content.CREATE\" required to create Course Content.\n\n**Since**: 3000.7.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/contents",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content",
      "description": "Blackboard Learn content API provides endpoints for managing content related operations."
    },
    "endpoint": {
      "name": "PostCoursesContentsCreateassignment",
      "description": "Create assignment content, grade column and file attachments in one POST. Any files specified with assignment creation must be previously uploaded using the uploads endpoint. Ultra courses supported since 3300.9.0 Classic courses supported since 3400.9.0 </p> For Ultra courses, this will create:\n\n- A content item with a contentHandler.id = resource/x-bb-asmt-test-link\n- A gradebook column with contentId = id of the new content\n- In the new Ultra assignment, instructions are saved as assignment instructions only, unlike in the old Ultra assignment where instructions were created as presentation questions.\n</p> The following entitlements are required to create an assignment in Ultra:\n\n- course.content.CREATE\n- course.assessment.CREATE\n- course.content.assessment.deploy.EXECUTE\n- course.gradebook.MODIFY\n- course.assessment.MODIFY, if instructions or files are specified\n</p> For Classic courses, this will create:\n\n- A content item with contentHandler.id = resource/x-bb-assignment\n- A gradebook column with contentId = id of the new content\n- A file attachment for each given file attachment id\nThe following entitlements are required to create a Classic assignment:\n\n- course.content.CREATE\n- course.gradebook.MODIFY\n- course.content.MODIFY, if files are specified\n</p>\n\n**Since**: 3300.9.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/createAssignment",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content",
      "description": "Blackboard Learn content API provides endpoints for managing content related operations."
    },
    "endpoint": {
      "name": "GetCoursesContents",
      "description": "Load a specific content item from a course.\n\nUsers with at least one of the following entitlements may access any content item:\n\n- course.adaptiverelease.CREATE\n- course.adaptiverelease.DELETE\n- course.adaptiverelease.MODIFY\n- course.adaptiverelease.VIEW\n- course.configure-areas.EXECUTE\n- course.content-item.copy.EXECUTE\n- course.content.DELETE\n- course.content.MODIFY\n- course.learningstandards.alignment.CREATE\n- course.performance.dashboard.VIEW\n</p>\n\nFor other users, permission to view the content item will depend on the availability settings of the course and the content item.  The following fields will be filtered out:\n\n- availability.available\n- availability.allowGuests\n- availability.adaptiveRelease\nInclude includeInActivityTracking to define if the content should be included in the activity tracking. By default, this value is true so the content will be included in the activity tracking. </p>\n\n**Since**: 3000.1.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content",
      "description": "Blackboard Learn content API provides endpoints for managing content related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesContents",
      "description": "Delete a content item.\n\nThe 'course.content.DELETE' entitlement is required.\n\n**Since**: 3000.1.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content",
      "description": "Blackboard Learn content API provides endpoints for managing content related operations."
    },
    "endpoint": {
      "name": "PatchCoursesContents",
      "description": "Update a content item.\n\nThe 'course.content.MODIFY' entitlement is required.\n\n**Since**: 3000.1.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content",
      "description": "Blackboard Learn content API provides endpoints for managing content related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsChildren",
      "description": "List all child content items directly beneath another content item.  This is only valid for content items that are allowed to have children (e.g. Folders).\n\nUsers with at least one of the following entitlements may access all child contents from a content item:\n\n- course.adaptiverelease.CREATE\n- course.adaptiverelease.DELETE\n- course.adaptiverelease.MODIFY\n- course.adaptiverelease.VIEW\n- course.configure-areas.EXECUTE\n- course.content-item.copy.EXECUTE\n- course.content.DELETE\n- course.content.MODIFY\n- course.learningstandards.alignment.CREATE\n- course.performance.dashboard.VIEW\nIn any of the following cases, the user may also get the child contents from a content item.\n\n- The user has a role in the course other than guest or observer, and doesn't have any of the previously mentioned entitlements.\n- The user has the role of observer, and both the course and the underlying content allow observer access.\n- The user accesses the course as guest, both the course and the underlying content allow guest access, further, the course content menu allows guest access as well for the original courses.\n</p>\n\nFor other users, permission to view the content item will depend on the availability settings of the course and  the content item. The following fields will be filtered out:\n\n- availability.available\n- availability.allowGuests\n- availability.adaptiveRelease\nInclude includeInActivityTracking to define if the content should be included in the activity tracking.  By default, this value is true so the content will be included in the activity tracking. </p>\n\nUsage of userMessageState field into expand, is only legal with a limit up to 10 items, a protection was set so that users can request the field  setting a limit &lt;= 10. In all the other cases, status BAD_REQUEST (400) will be returns to the client. </p>\n\n**Since**: 3000.1.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/children",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "recursive",
          "type": "boolean",
          "description": "Search for child content recursively.  A value of 'true' indicates that search results should include all content descendants within the hierarchy of the specified parent.  A value of 'false' indicates results should be limited to immediate children only.  Not setting this field defaults to 'false' behavior; only including immediate children.\n\n**Since**: 3100.2.0"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for content title. Will return all Content items whose title contains the supplied search value.\n\n**Since**: 3900.10.0"
        },
        {
          "name": "contentHandler",
          "type": "string",
          "description": "Search for the specific content handler.  Not setting this field will return all content handlers.\n\n**Since**: 3400.5.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for contents with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3700.1.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.1.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for contents with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3700.4.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "reviewable",
          "type": "boolean",
          "description": "Search contents by whether they are reviewable or not.\n\n**Since**: 3700.15.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content",
      "description": "Blackboard Learn content API provides endpoints for managing content related operations."
    },
    "endpoint": {
      "name": "PostCoursesContentsChildren",
      "description": "Create a new child content item beneath an existing content item.  This is only valid for content items that are allowed to have children (e.g. Folders). Entitlement \"course.content.CREATE\" required to create Course Content.\n\n**Since**: 3000.1.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/children",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content",
      "description": "Blackboard Learn content API provides endpoints for managing content related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsChildrenStates",
      "description": "Gets the progress tracking states of a content parent's children. Content refers to the individual elements within an Ultra course and, the term children refers to the items that are contained within a parent content item. This endpoint only supports Ultra courses.\n\nAn authenticated user can see the progress tracking status on the children if they either own the content, or if the user have any of the following entitlements:\n\n- course.progress.information.VIEW\n- course.content.designer.VIEW\n- course.content.MODIFY\n- course.content.DELETE\n</p>\n\n**Since**: 3900.112.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/children/states/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content",
      "description": "Blackboard Learn content API provides endpoints for managing content related operations."
    },
    "endpoint": {
      "name": "PatchCoursesContentsStates",
      "description": "Updates the progress tracking state for a non-participatory content. This endpoint only supports Ultra courses.\n\nThe user must be a student of the course.\n\n**Since**: 3900.112.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/states",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content",
      "description": "Blackboard Learn content API provides endpoints for managing content related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsStates",
      "description": "Gets the user progress tracking state for the requested content. This endpoint only supports Ultra courses.\n\nThe authenticated user can see his/her own progress tracking state of the requested content or Users with the following entitlement may access any progress tracking state item:\n\n- course.progress.information.VIEW\n</p>\n\n**Since**: 3900.112.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/states/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content collection resources",
      "description": "Blackboard Learn content collection resources API provides endpoints for managing content collection resources related operations."
    },
    "endpoint": {
      "name": "GetContentcollectionResources",
      "description": "Get the top-level content collection folders.\n\nUsers with the entitlement 'bbcms.cs.filesystem.REST.VIEW' or filesystem access can use this endpoint.\n\n**Since**: 3900.41.0",
      "method": "get",
      "path": "/learn/api/public/v1/contentCollection/resources",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "modified",
          "type": "string",
          "description": "Search by 'modified' date. Can be used along with 'modifiedCompare'.\n\n**Since**: 3900.41.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search by 'created' date. Can be used along with 'createdCompare'.\n\n**Since**: 3900.41.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Search criteria to be applied to 'modified', When not specified, it will perform as 'greaterOrEqual' by default if 'modified' contains a valid date. Must be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Search criteria to be applied to 'created', When not specified, it will perform as 'greaterOrEqual' by default if 'created' contains a valid date. Must be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "size",
          "type": "integer",
          "description": "Search by file 'size'. Can be used along 'sizeCompare'. If specified, no folders will be retrieved.\n\n**Since**: 3900.41.0"
        },
        {
          "name": "creatorId",
          "type": "string",
          "description": "Search files by 'creatorId'\n\n**Since**: 3900.41.0"
        },
        {
          "name": "sizeCompare",
          "type": "string",
          "description": "Search operator to be applied to 'size', When not specified, it will perform as 'equals' by default if 'size' is specified. Must be one of the following:\n\n- equals - optional\n- notEquals\n- greaterOrEqual\n- greaterThan\n- lessOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| greaterOrEqual |  |\n| greaterThan |  |\n| lessOrEqual |  |\n| lessThan |  |\n"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content collection resources",
      "description": "Blackboard Learn content collection resources API provides endpoints for managing content collection resources related operations."
    },
    "endpoint": {
      "name": "GetContentcollectionResources",
      "description": "Retrieves a content collection resource by id.\n\nResource objects only returned if the requesting User has been granted 'Read' permission on the Resource, or the User has the 'bbcms.cs.fileSystem.REST.VIEW' entitlement.\n\n**Since**: 3900.41.0",
      "method": "get",
      "path": "/learn/api/public/v1/contentCollection/resources/{resourceId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content collection resources",
      "description": "Blackboard Learn content collection resources API provides endpoints for managing content collection resources related operations."
    },
    "endpoint": {
      "name": "GetContentcollectionResourcesChildren",
      "description": "Get the direct children resources of the specified content collection resource. The specified resource must be a folder.\n\nUsers with the entitlement 'bbcms.cs.filesystem.REST.VIEW' or filesystem access can use this endpoint.\n\n**Since**: 3900.41.0",
      "method": "get",
      "path": "/learn/api/public/v1/contentCollection/resources/{resourceId}/children",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "modified",
          "type": "string",
          "description": "Search by 'modified' date. Can be used along with 'modifiedCompare'.\n\n**Since**: 3900.41.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search by 'created' date. Can be used along with 'createdCompare'.\n\n**Since**: 3900.41.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Search criteria to be applied to 'modified', When not specified, it will perform as 'greaterOrEqual' by default if 'modified' contains a valid date. Must be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Search criteria to be applied to 'created', When not specified, it will perform as 'greaterOrEqual' by default if 'created' contains a valid date. Must be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "size",
          "type": "integer",
          "description": "Search by file 'size'. Can be used along 'sizeCompare'. If specified, no folders will be retrieved.\n\n**Since**: 3900.41.0"
        },
        {
          "name": "creatorId",
          "type": "string",
          "description": "Search files by 'creatorId'\n\n**Since**: 3900.41.0"
        },
        {
          "name": "sizeCompare",
          "type": "string",
          "description": "Search operator to be applied to 'size', When not specified, it will perform as 'equals' by default if 'size' is specified. Must be one of the following:\n\n- equals - optional\n- notEquals\n- greaterOrEqual\n- greaterThan\n- lessOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| greaterOrEqual |  |\n| greaterThan |  |\n| lessOrEqual |  |\n| lessThan |  |\n"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content file attachments",
      "description": "Blackboard Learn content file attachments API provides endpoints for managing content file attachments related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsAttachments",
      "description": "Get the file attachment meta data associated to the Content Item\n\nSupported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment (resource/x-bb-assignment) (Since 3400.9.0) for a Classic Course\n\n**Since**: 3200.8.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content file attachments",
      "description": "Blackboard Learn content file attachments API provides endpoints for managing content file attachments related operations."
    },
    "endpoint": {
      "name": "PostCoursesContentsAttachments",
      "description": "Attach an uploaded file to a Content item.\n\nSupported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment (resource/x-bb-assignment) for a Classic Course\n\n**Since**: 3400.9.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content file attachments",
      "description": "Blackboard Learn content file attachments API provides endpoints for managing content file attachments related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsAttachments",
      "description": "Get the file attachment meta data by an attachment ID\n\nSupported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment(resource/x-bb-assignment) (Since 3400.9.0) for a Classic Course\n\n**Since**: 3200.8.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments/{attachmentId}",
      "pathParameters": [
        {
          "name": "attachmentId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content file attachments",
      "description": "Blackboard Learn content file attachments API provides endpoints for managing content file attachments related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesContentsAttachments",
      "description": "Delete file attachment meta data by attachment ID\n\nSupported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment(resource/x-bb-assignment) for a Classic Course\n\n**Since**: 3400.9.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments/{attachmentId}",
      "pathParameters": [
        {
          "name": "attachmentId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content file attachments",
      "description": "Blackboard Learn content file attachments API provides endpoints for managing content file attachments related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsAttachmentsDownload",
      "description": "Download the contents of a Content Item.\n\nSupported Content Item Types: Content File (resource/x-bb-file), Document (resource/x-bb-document), Classic Assignment (resource/x-bb-assignment) (Since 3400.9.0) for a Classic Course\n\n**Since**: 3200.8.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/attachments/{attachmentId}/download",
      "pathParameters": [
        {
          "name": "attachmentId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content group assignments",
      "description": "Blackboard Learn content group assignments API provides endpoints for managing content group assignments related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsGroups",
      "description": "Returns a list of content group associations for the specified content.\n\nCallers not enrolled in the course must have at least one of the following entitlements:\n\n- course.content.designer.VIEW  Callers enrolled in the course will only be able to see Groups that are available to them.\n\n**Since**: 3100.5.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/groups",
      "pathParameters": [
        {
          "name": "contentId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content group assignments",
      "description": "Blackboard Learn content group assignments API provides endpoints for managing content group assignments related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsGroups",
      "description": "Returns a content group association for the specified content and group.\n\nCallers not enrolled in the course must have at least one of the following entitlements:\n\n- course.content.designer.VIEW  Callers enrolled in the course will only be able to see Groups that are available to them.\n\n**Since**: 3100.5.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/groups/{groupId}",
      "pathParameters": [
        {
          "name": "contentId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content group assignments",
      "description": "Blackboard Learn content group assignments API provides endpoints for managing content group assignments related operations."
    },
    "endpoint": {
      "name": "PutCoursesContentsGroups",
      "description": "Creates a content group association.\n\nCallers not enrolled in the course must have at least one of the following entitlements:\n\n- course.content.MODIFY  If the content is going to be accessed in Ultra, the following rules should be followed by the caller:\n\n- If the group is part of a set, all groups with the set should be associated with the content. - The content should be associated exclusively to individual groups or groups within a set, but not both.\n\n**Since**: 3100.5.0",
      "method": "put",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/groups/{groupId}",
      "pathParameters": [
        {
          "name": "contentId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content group assignments",
      "description": "Blackboard Learn content group assignments API provides endpoints for managing content group assignments related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesContentsGroups",
      "description": "Deletes a content group association.\n\nIndividual Groups without Content association are not supported in Ultra. Groups existing in this state have undefined behavior, and may be removed.  In Ultra courses, for best performance, immediately either delete the associated group, or associated it with a new Content item.\n\nIf the content is going to be accessed in Ultra, and the group being removed is part of a group set, then the caller should ensure that all groups within that set are removed from the content.\n\nRequired entitlements:\n\n- course.content.DELETE\n\n**Since**: 3100.5.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/groups/{groupId}",
      "pathParameters": [
        {
          "name": "contentId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content resources",
      "description": "Blackboard Learn content resources API provides endpoints for managing content resources related operations."
    },
    "endpoint": {
      "name": "GetCoursesResources",
      "description": "Returns a list of the top-level course resources.\n\nUsers with the 'bbcms.cs.fileSystem.REST.VIEW' entitlement can view all resources.\n\nAll other users can view resources for which they have been granted the 'Read' permission.\n\n**Since**: 3700.12.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/resources",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content resources",
      "description": "Blackboard Learn content resources API provides endpoints for managing content resources related operations."
    },
    "endpoint": {
      "name": "GetCoursesResources",
      "description": "Loads a Course Resource by Id.\n\nUsers with the 'bbcms.cs.fileSystem.REST.VIEW' entitlement can view all resources.\n\nAll other users can view resources for which they have been granted the 'Read' permission.\n\n**Since**: 3700.13.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/resources/{resourceId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content resources",
      "description": "Blackboard Learn content resources API provides endpoints for managing content resources related operations."
    },
    "endpoint": {
      "name": "GetCoursesResourcesChildren",
      "description": "Returns a list of Course Resources that are children of the specified Resource.\n\nUsers with the 'bbcms.cs.fileSystem.REST.VIEW' entitlement can view all resources.\n\nAll other users can view resources for which they have been granted the 'Read' permission.\n\n**Since**: 3700.13.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/resources/{resourceId}/children",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content review",
      "description": "Blackboard Learn content review API provides endpoints for managing content review related operations."
    },
    "endpoint": {
      "name": "GetCoursesContentsUsersReviewstatus",
      "description": "Obtain the review status for a content item. This endpoint will only fetch the reviewStatus if the corresponding content was previously marked as reviewable.\n\n**Since**: 3700.16.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/users/{userId}/reviewStatus",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Content review",
      "description": "Blackboard Learn content review API provides endpoints for managing content review related operations."
    },
    "endpoint": {
      "name": "PatchCoursesContentsUsersReviewstatus",
      "description": "Update the review status for a content item. This endpoint will only update the reviewStatus if the corresponding content was previously marked as reviewable. Updating a content's review status to be reviewed is allowed in an Ultra course but updating a content item as unreviewed is not allowed in an Ultra course starting in 3900.19.0\n\n**Since**: 3700.16.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/users/{userId}/reviewStatus",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course announcements",
      "description": "Blackboard Learn course announcements API provides endpoints for managing course announcements related operations."
    },
    "endpoint": {
      "name": "GetCoursesAnnouncements",
      "description": "Return a list of Course Announcements. Users with the 'course.announcements.VIEW' entitlement can view 'available' Course Announcements. Users with the 'course.announcements.VIEW' &amp; 'course.announcements.MODIFY' entitlement can view 'available' &amp; 'unavailable' Course Announcements.\n\nThe response supports the <code>expand=readCount</code> query parameter. When specified, each announcement in the result will include the <code>readCount</code> field, indicating the number of users who have viewed the announcement. For draft announcements or when read tracking is disabled, the <code>readCount</code> field will be set to <code>-1</code>. </p>\n\n**Since**: 3500.3.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/announcements",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "creatorUserId",
          "type": "string",
          "description": "Search for announcements with creator user id equal to this value.\n\n**Since**: 3900.89.0."
        },
        {
          "name": "creatorUsername",
          "type": "string",
          "description": "Search for announcements with creator username equal to this value.\n\n**Since**: 3900.89.0."
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for announcements with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3500.3.0"
        },
        {
          "name": "createdUntil",
          "type": "string",
          "description": "Search announcements with created date less than or equal to this value. 'createdCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3500.3.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for announcements with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3500.3.0"
        },
        {
          "name": "modifiedUntil",
          "type": "string",
          "description": "Search announcements with modified date less than or equal to this value. 'modifiedCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3500.3.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for announcements with a title like the provided value.\n\n**Since**: 3500.3.0"
        },
        {
          "name": "startDate",
          "type": "string",
          "description": "Search announcements with start date relative to this value. 'startAnnouncementsDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.92.0"
        },
        {
          "name": "startDateUntil",
          "type": "string",
          "description": "Search announcements with start date relative to this value. 'startAnnouncementsDateCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0"
        },
        {
          "name": "startDateCompare",
          "type": "string",
          "description": "Used alongside the 'startDate' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3900.92.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n"
        },
        {
          "name": "endDate",
          "type": "string",
          "description": "Search announcements with end date relative to this value. 'endAnnouncementsDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.92.0"
        },
        {
          "name": "endDateUntil",
          "type": "string",
          "description": "Search announcements with end date relative to this value. 'endAnnouncementsDateCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0"
        },
        {
          "name": "endDateCompare",
          "type": "string",
          "description": "Used alongside the 'endDate' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3900.92.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),created\" Supported fields are:\n\n- title\n- modified\n\n**Since**: 3500.3.0"
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>studentReadCount</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course announcements",
      "description": "Blackboard Learn course announcements API provides endpoints for managing course announcements related operations."
    },
    "endpoint": {
      "name": "PostCoursesAnnouncements",
      "description": "Create a Course Announcement. Users with the 'course.announcements.CREATE' and 'course.announcements.VIEW' entitlements can create Course Announcements.\n\n**Since**: 3500.3.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/announcements",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course announcements",
      "description": "Blackboard Learn course announcements API provides endpoints for managing course announcements related operations."
    },
    "endpoint": {
      "name": "GetCoursesAnnouncements",
      "description": "Get a Course Announcement. Users with the 'course.announcements.VIEW' entitlement can view 'available' Course Announcements. Users with the 'course.announcements.VIEW' &amp; 'course.announcements.MODIFY' entitlement can view 'available' &amp; 'unavailable' Course Announcements.\n\n**Since**: 3500.3.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/announcements/{announcementId}",
      "pathParameters": [
        {
          "name": "announcementId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>studentReadCount</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course announcements",
      "description": "Blackboard Learn course announcements API provides endpoints for managing course announcements related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesAnnouncements",
      "description": "Delete a Course Announcement. Users with the 'course.announcements.DELETE' and 'course.announcements.VIEW' entitlements can delete Course Announcements.\n\n**Since**: 3500.3.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/announcements/{announcementId}",
      "pathParameters": [
        {
          "name": "announcementId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course announcements",
      "description": "Blackboard Learn course announcements API provides endpoints for managing course announcements related operations."
    },
    "endpoint": {
      "name": "PatchCoursesAnnouncements",
      "description": "Update a Course Announcement. Users with the 'course.announcements.MODIFY' and 'course.announcements.VIEW' entitlements can update Course Announcements.\n\n**Since**: 3500.3.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/announcements/{announcementId}",
      "pathParameters": [
        {
          "name": "announcementId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course assessments",
      "description": "Blackboard Learn course assessments API provides endpoints for managing course assessments related operations."
    },
    "endpoint": {
      "name": "GetCoursesAssessmentsQuestions",
      "description": "Get the list of questions for an Ultra Assessment.\n\nEither 'course.assessment.CREATE' or 'course.assessment.MODIFY' entitlement is needed to view questions. If the assessment has the external submissions setting enabled, then either the 'course.assessment.VIEW' or 'course.assessment.EXECUTE' entitlement is needed to view questions, and only presentation questions are returned.\n\n**Since**: 3300.9.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions",
      "pathParameters": [
        {
          "name": "assessmentId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course assessments",
      "description": "Blackboard Learn course assessments API provides endpoints for managing course assessments related operations."
    },
    "endpoint": {
      "name": "PostCoursesAssessmentsQuestions",
      "description": "Creates a question for an Ultra Assessment.\n\nThe 'course.assessment.MODIFY' entitlement is needed to create a question.\n\n**Since**: 3300.9.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions",
      "pathParameters": [
        {
          "name": "assessmentId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course assessments",
      "description": "Blackboard Learn course assessments API provides endpoints for managing course assessments related operations."
    },
    "endpoint": {
      "name": "GetCoursesAssessmentsQuestions",
      "description": "Get a question by Id from an Ultra Assessment.\n\nEither 'course.assessment.CREATE' or 'course.assessment.MODIFY' entitlement is needed to view a question.\n\n**Since**: 3300.9.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions/{questionId}",
      "pathParameters": [
        {
          "name": "assessmentId",
          "type": "string",
          "description": ""
        },
        {
          "name": "questionId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course assessments",
      "description": "Blackboard Learn course assessments API provides endpoints for managing course assessments related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesAssessmentsQuestions",
      "description": "Delete a question, specified by Id, from an Ultra Assessment.\n\nThe 'course.assessment.DELETE' entitlement is needed to perform the operation.\n\n**Since**: 3300.9.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions/{questionId}",
      "pathParameters": [
        {
          "name": "assessmentId",
          "type": "string",
          "description": ""
        },
        {
          "name": "questionId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course assessments",
      "description": "Blackboard Learn course assessments API provides endpoints for managing course assessments related operations."
    },
    "endpoint": {
      "name": "PatchCoursesAssessmentsQuestions",
      "description": "Update a Presentation Question, specified by Id, from an Ultra Assessment.\n\nThe 'course.assessment.MODIFY' entitlement is needed to perform the operation.\n\n**Since**: 3300.9.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/assessments/{assessmentId}/questions/{questionId}",
      "pathParameters": [
        {
          "name": "assessmentId",
          "type": "string",
          "description": ""
        },
        {
          "name": "questionId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course categories",
      "description": "Blackboard Learn course categories API provides endpoints for managing course categories related operations."
    },
    "endpoint": {
      "name": "GetCatalogCategories",
      "description": "Returns a list of categories of the provided type (course or organization)\n\nEntitlement system.course-categories.VIEW required\n\nUsers with entitlement \"system.course.categories.MODIFY\" for course categories, or \"system.org.categories.MODIFY\" for organization categories can view all fields and all categories.\n\nUsers with system.course-categories.VIEW but not the corresponding MODIFY entitlements have read access to all properties except:\n\n- restricted\n- institutionRoleIds\nIn addition, users without the corresponding MODIFY entitlement have access to a restricted category only if their institution role matches one of the roles in the institutionRoleIds list for that category.\n\n**Since**: 3600.0.0",
      "method": "get",
      "path": "/learn/api/public/v1/catalog/categories/{categoryType}",
      "pathParameters": [
        {
          "name": "categoryType",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),start\" Supported fields are:\n\n- id\n- categoryId\n- title\n- available\n- created\n\n**Since**: 3700.6.0"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for categories with titles that contain this value.\n\n**Since**: 3700.8.0"
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Search for categories with category IDs that contain this value.\n\n**Since**: 3700.8.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for categories with a created date relative to this value.\n\n**Since**: 3700.8.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for categories with a data source id matching this value.\n\n**Since**: 3700.9.0"
        },
        {
          "name": "frontPage",
          "type": "boolean",
          "description": "Search for categories with a front page indicator matching this value.\n\n**Since**: 3700.9.0"
        },
        {
          "name": "available",
          "type": "boolean",
          "description": "Search for categories with availability matching this value.\n\n**Since**: 3700.9.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course categories",
      "description": "Blackboard Learn course categories API provides endpoints for managing course categories related operations."
    },
    "endpoint": {
      "name": "PostCatalogCategories",
      "description": "Creates a new category of the provided type as defined in the request body\n\nEntitlement system.course.categories.MODIFY required to create course categories Entitlement system.org.categories.MODIFY required to create organization categories\n\n**Since**: 3600.0.0",
      "method": "post",
      "path": "/learn/api/public/v1/catalog/categories/{categoryType}",
      "pathParameters": [
        {
          "name": "categoryType",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course categories",
      "description": "Blackboard Learn course categories API provides endpoints for managing course categories related operations."
    },
    "endpoint": {
      "name": "GetCatalogCategories",
      "description": "Returns the category corresponding the provided type (course or organization) and ID\n\nEntitlement system.course-categories.VIEW required\n\nUsers with entitlement \"system.course.categories.MODIFY\" for course categories, or \"system.org.categories.MODIFY\" for organization categories can view all fields and all categories.\n\nUsers with system.course-categories.VIEW but not the corresponding MODIFY entitlements have read access to all properties except:\n\n- restricted\n- institutionRoleIds\nIn addition, users without the corresponding MODIFY entitlement have access to a restricted category only if their institution role matches one of the roles in the institutionRoleIds list for that category.\n\n**Since**: 3600.0.0",
      "method": "get",
      "path": "/learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}",
      "pathParameters": [
        {
          "name": "categoryType",
          "type": "string",
          "description": ""
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course categories",
      "description": "Blackboard Learn course categories API provides endpoints for managing course categories related operations."
    },
    "endpoint": {
      "name": "DeleteCatalogCategories",
      "description": "Deletes the category corresponding to the provided type and id\n\nEntitlement system.course.categories.MODIFY required to delete a course category Entitlement system.org.categories.MODIFY required to delete an organization category\n\n**Since**: 3600.0.0",
      "method": "delete",
      "path": "/learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}",
      "pathParameters": [
        {
          "name": "categoryType",
          "type": "string",
          "description": ""
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course categories",
      "description": "Blackboard Learn course categories API provides endpoints for managing course categories related operations."
    },
    "endpoint": {
      "name": "PatchCatalogCategories",
      "description": "Updates the category corresponding to the provided type and id.\n\nEntitlement system.course.categories.MODIFY required to modify course categories Entitlement system.org.categories.MODIFY required to modify organization categories\n\n**Since**: 3600.0.0",
      "method": "patch",
      "path": "/learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}",
      "pathParameters": [
        {
          "name": "categoryType",
          "type": "string",
          "description": ""
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course categories",
      "description": "Blackboard Learn course categories API provides endpoints for managing course categories related operations."
    },
    "endpoint": {
      "name": "GetCatalogCategoriesCourses",
      "description": "Get courses associated with the provided category. Entitlement system.course-categories.VIEW required\n\n**Since**: 3600.0.0",
      "method": "get",
      "path": "/learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}/courses",
      "pathParameters": [
        {
          "name": "categoryType",
          "type": "string",
          "description": ""
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>course</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course categories",
      "description": "Blackboard Learn course categories API provides endpoints for managing course categories related operations."
    },
    "endpoint": {
      "name": "PutCatalogCategoriesCourses",
      "description": "Creates a category/course association. The course defined by courseId must match the categoryType.\n\nThe 'admin.course.categorize.MODIFY' entitlement is needed for course associations The 'admin.org.categorize.MODIFY' entitlement is needed for organization associations\n\n**Since**: 3600.0.0",
      "method": "put",
      "path": "/learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}/courses/{courseId}",
      "pathParameters": [
        {
          "name": "categoryType",
          "type": "string",
          "description": ""
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course categories",
      "description": "Blackboard Learn course categories API provides endpoints for managing course categories related operations."
    },
    "endpoint": {
      "name": "DeleteCatalogCategoriesCourses",
      "description": "Deletes a category/course association\n\nThe 'admin.course.categorize.MODIFY' entitlement is needed for course associations The 'admin.org.categorize.MODIFY' entitlement is needed for organization associations\n\n**Since**: 3600.0.0",
      "method": "delete",
      "path": "/learn/api/public/v1/catalog/categories/{categoryType}/{categoryId}/courses/{courseId}",
      "pathParameters": [
        {
          "name": "categoryType",
          "type": "string",
          "description": ""
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course categories",
      "description": "Blackboard Learn course categories API provides endpoints for managing course categories related operations."
    },
    "endpoint": {
      "name": "GetCatalogCategoriesChildren",
      "description": "Returns a list of categories which are children of the category corresponding to the provided type (course or organization) and Id\n\nEntitlement system.course-categories.VIEW required\n\nUsers with entitlement \"system.course.categories.MODIFY\" for course categories, or \"system.org.categories.MODIFY\" for organization categories can view all fields and all categories.\n\nUsers with system.course-categories.VIEW but not the corresponding MODIFY entitlements have read access to all properties except:\n\n- restricted\n- institutionRoleIds\nIn addition, users without the corresponding MODIFY entitlement have access to a restricted category only if their institution role matches one of the roles in the institutionRoleIds list for that category.\n\n**Since**: 3600.0.0",
      "method": "get",
      "path": "/learn/api/public/v1/catalog/categories/{categoryType}/{parentId}/children",
      "pathParameters": [
        {
          "name": "categoryType",
          "type": "string",
          "description": ""
        },
        {
          "name": "parentId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),start\" Supported fields are:\n\n- id\n- categoryId\n- title\n- available\n- created\n\n**Since**: 3700.6.0"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for categories with titles that contain this value.\n\n**Since**: 3700.8.0"
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Search for categories with category IDs that contain this value.\n\n**Since**: 3700.8.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for categories with a created date relative to this value.\n\n**Since**: 3700.8.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for categories with a data source id matching this value.\n\n**Since**: 3700.9.0"
        },
        {
          "name": "frontPage",
          "type": "boolean",
          "description": "Search for categories with a front page indicator matching this value.\n\n**Since**: 3700.9.0"
        },
        {
          "name": "available",
          "type": "boolean",
          "description": "Search for categories with availability matching this value.\n\n**Since**: 3700.9.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course categories",
      "description": "Blackboard Learn course categories API provides endpoints for managing course categories related operations."
    },
    "endpoint": {
      "name": "GetCoursesCategories",
      "description": "Get categories associated with the provided course. Entitlement system.course-categories.VIEW required\n\n**Since**: 3600.0.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/categories",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>category</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grade attempts",
      "description": "Blackboard Learn course grade attempts API provides endpoints for managing course grade attempts related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookAttemptsFiles",
      "description": "Get the list of file metadata for a Student Submission associated to the course and attempt.\n\n- Id\n- Name\n\n**Since**: 3400.6.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/attempts/{attemptId}/files",
      "pathParameters": [
        {
          "name": "attemptId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grade attempts",
      "description": "Blackboard Learn course grade attempts API provides endpoints for managing course grade attempts related operations."
    },
    "endpoint": {
      "name": "PostCoursesGradebookAttemptsFiles",
      "description": "\n\nAttach a file to an Attempt for a Student Submission. Currently only supports Classic/9.1 Course Assignments. </p>\n\n**Since**: 3500.7.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/attempts/{attemptId}/files",
      "pathParameters": [
        {
          "name": "attemptId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grade attempts",
      "description": "Blackboard Learn course grade attempts API provides endpoints for managing course grade attempts related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookAttemptsFiles",
      "description": "Get the file metadata for a Student Submission associated to the course and attempt.\n\n- Id\n- Name\n\n**Since**: 3400.6.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/attempts/{attemptId}/files/{attemptFileId}",
      "pathParameters": [
        {
          "name": "attemptId",
          "type": "string",
          "description": ""
        },
        {
          "name": "attemptFileId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grade attempts",
      "description": "Blackboard Learn course grade attempts API provides endpoints for managing course grade attempts related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesGradebookAttemptsFiles",
      "description": "Delete the file for a Student Submission associated to an attempt.\n\nThe student who owns the file can delete it while the attempt is in progress.\n\n**Since**: 3500.2.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/attempts/{attemptId}/files/{attemptFileId}",
      "pathParameters": [
        {
          "name": "attemptId",
          "type": "string",
          "description": ""
        },
        {
          "name": "attemptFileId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grade attempts",
      "description": "Blackboard Learn course grade attempts API provides endpoints for managing course grade attempts related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookAttemptsFilesDownload",
      "description": "Download the contents of the file for a Student Submission.\n\n**Since**: 3400.6.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/attempts/{attemptId}/files/{attemptFileId}/download",
      "pathParameters": [
        {
          "name": "attemptId",
          "type": "string",
          "description": ""
        },
        {
          "name": "attemptFileId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grade notations",
      "description": "Blackboard Learn course grade notations API provides endpoints for managing course grade notations related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookGradenotations",
      "description": "Returns a list of grade notations.\n\n**Since**: 3200.13.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/gradeNotations",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grade notations",
      "description": "Blackboard Learn course grade notations API provides endpoints for managing course grade notations related operations."
    },
    "endpoint": {
      "name": "PostCoursesGradebookGradenotations",
      "description": "Create a grade notation on this course.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3200.13.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/gradeNotations",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grade notations",
      "description": "Blackboard Learn course grade notations API provides endpoints for managing course grade notations related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookGradenotations",
      "description": "Returns a specific grade notation.\n\n**Since**: 3200.13.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/gradeNotations/{gradeNotationId}",
      "pathParameters": [
        {
          "name": "gradeNotationId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grade notations",
      "description": "Blackboard Learn course grade notations API provides endpoints for managing course grade notations related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesGradebookGradenotations",
      "description": "Delete a specific grade notation.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3200.13.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/gradeNotations/{gradeNotationId}",
      "pathParameters": [
        {
          "name": "gradeNotationId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grade notations",
      "description": "Blackboard Learn course grade notations API provides endpoints for managing course grade notations related operations."
    },
    "endpoint": {
      "name": "PatchCoursesGradebookGradenotations",
      "description": "Update a grade notation on this course.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3200.14.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/gradeNotations/{gradeNotationId}",
      "pathParameters": [
        {
          "name": "gradeNotationId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course gradebook categories",
      "description": "Blackboard Learn course gradebook categories API provides endpoints for managing course gradebook categories related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookCategories",
      "description": "Returns a list of gradebook categories in a particular course.\n\nUsers with entitlements 'course.gradebook.MODIFY' or 'course.user.grades.VIEW', or users enrolled in the specified course can retrieve the list of gradebook categories.\n\n**Since**: 3400.2.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/categories",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course gradebook categories",
      "description": "Blackboard Learn course gradebook categories API provides endpoints for managing course gradebook categories related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookCategories",
      "description": "Returns the details of a gradebook category\n\nUsers with entitlements 'course.gradebook.MODIFY' or 'course.user.grades.VIEW', or users enrolled in the specified course can retrieve gradebook category details.\n\n**Since**: 3400.2.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/categories/{categoryId}",
      "pathParameters": [
        {
          "name": "categoryId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsGroupattempts",
      "description": "Returns a list of Group Attempts for the specified Course and Column. Group Attempts with a 'NeedsGrading' status will be filtered out if they are associated with a 'Manual' Grade Column.\n\nUser must have the following entitlement in order to view group attempts.\n\n- {@code course.gradebook.attempts.VIEW}\n- {@code course.gradebook-grades.VIEW}\n- {@code course.gradebook-grades.EXECUTE}\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.98.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/groupAttempts",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "groupId",
          "type": "string",
          "description": "Search for grade column group attempts submitted by this group. This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                                    |\n |------------|--------------------------------------------|\n | primary    | _123_1                                     |\n | externalId | externalId:915c7567d76d444abf1eed56aad3beb5|\n \n\n**Since**: 3100.10.0"
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Search for group column attempts submitted by this user.\n\n**Since**: 3900.98.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for attempts with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3900.98.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3900.98.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for attempts with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3900.98.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3900.98.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "attemptDate",
          "type": "string",
          "description": "Search for attempts with attempt date relative to this value. 'attemptDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.98.0"
        },
        {
          "name": "attemptDateCompare",
          "type": "string",
          "description": "Used alongside the 'attemptDate' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3900.98.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "attemptStatuses",
          "type": "string",
          "description": "Search for grade column attempts with one of these statuses.\n\n**Since**: 3900.121.0\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "PostCoursesGradebookColumnsGroupattempts",
      "description": "Creates a Group Attempt for the specified Course and grade column.\n\nUser must have the following entitlement in order to create a group attempt.\n\n- {@code course.gradebook-grades.EXECUTE}\n- {@code course.gradebook.MODIFY}\n- {@code course.assessment.MODIFY}\n\n**Since**: 3900.98.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/groupAttempts",
      "pathParameters": [
        {
          "name": "courseId",
          "type": "string",
          "description": ""
        },
        {
          "name": "columnId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsGroupattempts",
      "description": "Return a Group Attempt for the specified Course & Group Attempt Id. Users with the 'course.gradebook.MODIFY' entitlement can view Group Attempts for the specified Course and Column. If user does not have 'course.gradebook.MODIFY' entitlement, then they can view the GroupAttempt if: [1] User is a member of the Group Attempt's Group [2] User is in set of Users who have made a submission for this Group Attempt (excluding Group members who were not a member at the time of submission)\n\n**Since**: 3900.98.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/groupAttempts/{groupAttemptId}",
      "pathParameters": [
        {
          "name": "groupAttemptId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesGradebookColumnsGroupattempts",
      "description": "Deletes a group attempt for a given course.\n\nUser must have the following entitlements in order to delete the group attempt in a course.\n\n- {@code course.assessment.MODIFY}\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.98.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/groupAttempts/{groupAttemptId}",
      "pathParameters": [
        {
          "name": "courseId",
          "type": "string",
          "description": ""
        },
        {
          "name": "columnId",
          "type": "string",
          "description": ""
        },
        {
          "name": "groupAttemptId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "PatchCoursesGradebookColumnsGroupattempts",
      "description": "Update an existing group Attempt on a Grade Column. </p> Students can only modify the groupSubmission, groupComments and status of their own attempt if the status is InProgress. Moving status to NeedsGrading is the equivalent of submitting the attempt. </p>\n\nNot enrolled users with the required entitlements are only able to submit the attempt (change status to NeedsGrading). Required entitlements:\n\n- {@code course.gradebook.MODIFY}\n- {@code course.assessment.MODIFY}\n</p>\n\n**Since**: 3900.98.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/groupAttempts/{groupAttemptId}",
      "pathParameters": [
        {
          "name": "groupAttemptId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsLogs",
      "description": "Returns a list of log entries related to the provided Gradebook Column.\n\nUser must have the following entitlements in order to see the provided course's GradebookLog.\n\n- {@code course.gradebook-grades.VIEW}\n- {@code course.gradebook.MODIFY}\n- {@code course.gradebook-grades.EXECUTE}\n\n**Since**: 3900.71.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/logs",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n- gradebookColumnId\n- logged\n\n**Since**: 3900.71.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookLogs",
      "description": "Returns a list of Gradebook Logs for a given course ID.\n\nUser must have the following entitlements in order to see the provided course's GradebookLog.\n\n- {@code course.gradebook-grades.VIEW}\n- {@code course.gradebook.MODIFY}\n- {@code course.gradebook-grades.EXECUTE}\n\n**Since**: 3900.71.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/logs",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n- gradebookColumnId\n- logged\n\n**Since**: 3900.71.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookSchemas",
      "description": "Returns a list of grade schemas associated with the specified course.\n\nUsers with entitlements 'course.gradebook.MODIFY' or 'course.user.grades.VIEW', or users enrolled in the specified course can retrieve grade schema details.\n\nA subset of the schema properties are available to enrolled users without the 'course.gradebook.MODIFY' entitlement:\n\n- id\n- scaleType\n\n**Since**: 3300.2.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/schemas",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "PostCoursesGradebookSchemas",
      "description": "Create a Tabular Grade Schema on this course. Currently only supports Classic/9.1 Courses.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3300.2.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/schemas",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookSchemas",
      "description": "Loads the grade schema associated with the specified course and schema Id.\n\nUsers with entitlements 'course.gradebook.MODIFY' or 'course.user.grades.VIEW', or users enrolled in the specified course can retrieve the grade schema details.\n\nA subset of the schema properties are available to enrolled users without the 'course.gradebook.MODIFY' entitlement:\n\n- id\n- scaleType\n\n**Since**: 3300.2.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/schemas/{schemaId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesGradebookSchemas",
      "description": "Deletes the grade schema associated with the specified course and schema Id.\n\nRequires entitlement 'course.gradebook.MODIFY'\n\nGrade schemas in Ultra courses may not be deleted\n\nA schema must be removable (not in-use, and either tabular or user-created) to be deleted\n\n**Since**: 3300.2.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/schemas/{schemaId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "PatchCoursesGradebookSchemas",
      "description": "\n\nUpdates the grade schema associated with the specified course and schema Id. </p>\n\nRequires entitlement 'course.gradebook.MODIFY' </p>\n\nA schema must have a scaleType of Tabular to be updated </p>\n\nIf updating the symbols field, the following criteria must be true:\n\n- All symbols for the schema must be included. Any existing symbols not included in the patch will be deleted.\n- There must be at least 1 symbol for schemas associated with Classic courses, and 2 for Ultra courses.\n- When sorted descending by lowerBound, The lowerBound of a symbol must be equal to the upperBound of the following symbol.  In other words,      there should be no gaps or overlaps between the symbols.\n- The lowerBound, upperBound and absoluteValue of all symbols must be nonnegative.\n- The text field must be unique for each symbol in a schema.\n- The lowerBound and upperBound fields must have a maximum of 3 digits after the decimal point.\n- The absoluteValue field must have a maximum of 3 digits after the decimal point for Classic courses, and 4 for Ultra courses.-  -  </p>\n\n**Since**: 3300.2.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/schemas/{schemaId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumns",
      "description": "Returns a list of grade columns.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed. Alternatively, student users may view the grade columns if they are enrolled in the course, and the mygrade tool is available in the course, and the columns are visible to the student. Observers may view grade columns if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.\n\nStudent or observer users may view a limited subset of grade column fields:\n\n- id\n- name\n- displayName\n- description\n- externalGrade\n- contentId\n- score.possible\n- scoreProviderHandle\n- grading.type\n- grading.due\n- grading.attemptsAllowed\n- grading.scoringModel\n- formula\n- availability.available\n- learningOutcome.signature\n\n**Since**: 3200.10.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/columns",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "contentId",
          "type": "string",
          "description": "Search for grade columns associated with this content item.\n\n**Since**: 3000.11.0"
        },
        {
          "name": "displayName",
          "type": "string",
          "description": "The 'displayName' value to use as search criteria.\n\nCurrently only supports 'contains' searches.\n\n**Since**: 3300.2.0"
        },
        {
          "name": "name",
          "type": "string",
          "description": "The 'name' value to use as search criteria.\n\nCurrently only supports 'contains' searches.\n\n**Since**: 3900.11.0"
        },
        {
          "name": "gradebookCategoryId",
          "type": "ref",
          "description": "Search for grade columns associated with the 'gradebookCategoryId'.\n\ncomma-delimited list of the gradebook category ids.\n\n**Since**: 3900.11.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for grade columns with a created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3900.76.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.76.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for grade columns with a modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3900.76.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.76.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>rubricAssociations</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "PostCoursesGradebookColumns",
      "description": "Create a manual grade column. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3200.10.0",
      "method": "post",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/columns",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumns",
      "description": "Loads a specific grade column.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed. Alternatively, student users may view the grade column if they are enrolled in the course, and the mygrade tool is available in the course, and the column is visible to the student. Observers may view the grade column if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.\n\nStudent or observer users may view a limited subset of grade column fields:\n\n- id\n- name\n- description\n- externalGrade\n- contentId\n- score.possible\n- grading.type\n- grading.due\n- grading.attemptsAllowed\n- grading.scoringModel\n- formula\n- availability.available\n\n**Since**: 3200.10.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>rubricAssociations</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesGradebookColumns",
      "description": "Delete a specific grade column. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3200.10.0",
      "method": "delete",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "PatchCoursesGradebookColumns",
      "description": "Update a manual grade column. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3200.10.0",
      "method": "patch",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsAttempts",
      "description": "Returns a list of attempts associated with the specified grade column.\n\nThe 'course.gradebook.MODIFY' entitlement is needed to view column attempts. Alternatively, if the 'userId' query parameter is specified, and the user making the request matches the specified 'userId', then the user may view his/her own attempt.  When querying an anonymous grade column, if the release criteria has not yet been met, then the 'userId' attribute will not be populated for the returned column attempts.  If the release criteria has not been met and the 'userId' query parameter is specified, a 403 response is returned, unless the requesting user matches the specified 'userId' value.\n\nA subset of attempt properties are available to a student when requesting his or her own attempts:\n\n- id\n- userId\n- groupAttemptId\n- status\n- displayGrade.scaleType\n- displayGrade.score\n- displayGrade.text\n- groupOverride\n- feedback\n- studentComments\n- studentSubmission\n- exempt\n- created\n\nWhen this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student's submission & comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student's submission & comments are visible to the API Gateway User. </p> If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\nIf the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\n**Since**: 3300.0.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/attempts",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "userId",
          "type": "string",
          "description": "Search for grade column attempts submitted by this user. This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:jsmith                     |\n | userName   | userName:jsmith                       |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n \n\n**Since**: 3100.4.0"
        },
        {
          "name": "attemptStatuses",
          "type": "string",
          "description": "Search for grade column attempts with one of these statuses.\n\n**Since**: 3100.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for attempts with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for attempts with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "attemptDate",
          "type": "string",
          "description": "Search for attempts with attempt date relative to this value. 'attemptDateCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0"
        },
        {
          "name": "attemptDateCompare",
          "type": "string",
          "description": "Used alongside the 'attemptDate' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "PostCoursesGradebookColumnsAttempts",
      "description": "Create an Attempt on the specified Grade Column. Currently supports Classic and Ultra Course Assignments. Student attributes (studentSubmission & studentComments) can only be specified by Student Users. Grader attributes (text, score, notes & feedback, attemptDate) can only be specified by Grader Users. Graders must have the entitlement \"course.gradebook.MODIFY\" for the course.  Graders are allowed to create attempts that contain \"studentSubmission\" text on behalf of a student if the authenticated application for this request has the \"course.attempt.nonowner.SUBMIT\" entitlement and the attempt has a \"status\" of NeedsGrading. </p> If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, then the caller must be in a secure browser in order to create the attempt.\n\n**Since**: 3300.12.0",
      "method": "post",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/attempts",
      "pathParameters": [
        {
          "name": "columnId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsAttempts",
      "description": "Loads the grade column attempt for the specified id.\n\nThe 'course.gradebook.MODIFY' entitlement is needed to view an attempt. Alternatively, if the user making the request is also the user associated with the attempt grade, then the user may view his/her own attempt.  When accessing an anonymous grade column attempt, if the release criteria has not yet been met, then the 'userId' attribute will not be populated for the returned attempt.\n\nA subset of attempt properties are available to a student when requesting his or her own attempt:\n\n- id\n- userId\n- groupAttemptId\n- status\n- displayGrade.scaleType\n- displayGrade.score\n- displayGrade.text\n- groupOverride\n- feedback\n- studentComments\n- studentSubmission\n- exempt\n- created\n\nWhen this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student's submission & comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student's submission & comments are visible to the API Gateway User. </p> If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\nIf the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\n**Since**: 3300.0.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/attempts/{attemptId}",
      "pathParameters": [
        {
          "name": "attemptId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "PatchCoursesGradebookColumnsAttempts",
      "description": "Update an existing Attempt on a Grade Column. </p> Students can only modify the studentSubmission, studentComments and status of their own attempt if the status is InProgress. The status can only be set to NeedsGrading.  Doing so is the equivalent of submitting the attempt. </p> Instructors can modify all mutable fields but studentSubmission and studentComments as long as the status is not InProgress. Setting the status to Complete is the equivalent of posting a graded attempt.  The \"course.gradebook.MODIFY\" entitlement is required to update score, text, notes, feedback and set the status to Complete. </p> If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, then the caller must be in a secure browser in order to create the attempt. Classic course support since 3500.2.0\n\n**Since**: 3300.12.0",
      "method": "patch",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/attempts/{attemptId}",
      "pathParameters": [
        {
          "name": "columnId",
          "type": "string",
          "description": ""
        },
        {
          "name": "attemptId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsUsers",
      "description": "Returns a list of grades associated with the specified grade column. By default, this operation does not include 'ReadyToPost' grades when returning grade details for calculated grade columns. This can be changed by setting the query parameter \"includeUnpostedGrades\" to true. The columns considered as 'ReadyToPost' are those which have a grade associated but have the status NEEDS_GRADING. By default, grade details for disabled memberships will not be included while returning. The query parameter \"includeDisabledMemberships\" has to be set to true to return grade details of disabled memberships.\n\nUsers with entitlement 'course.gradebook.MODIFY' can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \"403 - Forbidden.\"\n\nEnrolled users without the 'course.gradebook.MODIFY' entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \"403 - Forbidden.\".  A subset of grade properties are available to a student when requesting his or her own grades:\n\n- userId\n- columnId\n- status\n- displayGrade\n- exempt\n- feedback\n- changeIndex\n\n**Since**: 3300.0.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "changeIndex",
          "type": "integer",
          "description": "Retrieve only items modified after the given change index.\n\n**Since**: 3300.4.0"
        },
        {
          "name": "includeUnpostedGrades",
          "type": "boolean",
          "description": "If true, calculated columns exposed in the response will be processed such that any unposted grades are included in their calculations. If false, only posted grades will be included in calculations. Entitlements course.gradebook-grades.VIEW, course.gradebook.MODIFY and course.gradebook-grades.EXECUTE are required to use this parameter.\n\n**Since**: 3800.4.0"
        },
        {
          "name": "firstRelevantDate",
          "type": "string",
          "description": "Set the search criteria to the search value of the firstRelevantDate.\n\n**Since**: 3900.78.0"
        },
        {
          "name": "firstRelevantDateCompare",
          "type": "string",
          "description": "Assign the compare value to the search criteria, and it works along with the firstRelevantDate. Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.78.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "lastRelevantDate",
          "type": "string",
          "description": "Set the search criteria to the search value of the lastRelevantDate.\n\n**Since**: 3900.78.0"
        },
        {
          "name": "lastRelevantDateCompare",
          "type": "string",
          "description": "Assign the compare value to the search criteria, and it works along with the lastRelevantDate. Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.78.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsUsersLastchanged",
      "description": "Loads the grade column grade with the maximum change index. This change index can be used to determine the relative order in which the grades were created and/or updated. This operation does not include 'ReadyToPost' grades when determining the maximum change index grade.\n\nUsers with entitlement 'course.gradebook.MODIFY' can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \"403 - Forbidden.\"\n\nEnrolled users without the 'course.gradebook.MODIFY' entitlement may only view their own grade; such users cannot retrieve grades of other users. A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \"403 - Forbidden.\".\n\n**Since**: 3300.4.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users/lastChanged",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsUsers",
      "description": "Loads the grade column grade for a specific user.  If grade details have yet to be entered for the specified user, then no grade details will be included in the returned grade object.  This operation does not include 'ReadyToPost' grades when returning grade details for calculated grade columns.\n\nUsers with entitlement 'course.gradebook.MODIFY' can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \"403 - Forbidden.\"\n\nEnrolled users without the 'course.gradebook.MODIFY' entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \"403 - Forbidden.\".  A subset of grade properties are available to a student when requesting his or her own grades:\n\n- userId\n- columnId\n- status\n- displayGrade\n- exempt\n- feedback\n- changeIndex\n\n**Since**: 3300.0.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "PatchCoursesGradebookColumnsUsers",
      "description": "Update the grade column grade for a specific user, including the text grade, score, instructor notes and feedback, and exempt status.  When updating text grade or score, the resulting grade is always marked as 'Posted'.  This end-point, currently, does not support marking the grade as 'ReadyToPost'.  Grade overrides may be cleared by either specifying the 'score' attribute as null, or the 'text'; attribute as null, '', or '-' in the body of the request. The entitlement 'course.gradebook.MODIFY' is required to perform this operation.\n\n**Since**: 3300.0.0",
      "method": "patch",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/columns/{columnId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grades",
      "description": "Blackboard Learn course grades API provides endpoints for managing course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookUsers",
      "description": "Loads the course grades for a specific user.\n\nUsers with entitlement \"course.gradebook.MODIFY\" have read access to all the properties of the collection results.\n\nUsers without entitlement \"course.gradebook.MODIFY\" requesting grades for themselves (i.e., userId = current user id) have read access to a restricted subset of properties of the collections result. These are the properties available to a student when requesting his or her own grades:\n\n- userId\n- columnId\n- status\n- text\n- score\n- exempt\n- feedback\n\n**Since**: 3300.0.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/gradebook/users/{userId}",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "firstRelevantDate",
          "type": "string",
          "description": "Search for grades with a firstRelevantDate date relative to this value. 'firstRelevantDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.78.0"
        },
        {
          "name": "firstRelevantDateCompare",
          "type": "string",
          "description": "Used alongside the 'firstRelevantDate' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.78.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "lastRelevantDate",
          "type": "string",
          "description": "Search for grades with a lastRelevantDate date relative to this value. 'lastRelevantDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.78.0"
        },
        {
          "name": "lastRelevantDateCompare",
          "type": "string",
          "description": "Used alongside the 'lastRelevantDate' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.78.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grading periods",
      "description": "Blackboard Learn course grading periods API provides endpoints for managing course grading periods related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookPeriods",
      "description": "Returns a list of grading periods.\n\nThe entitlement \"course.gradebook.MODIFY\" or \"course.gradebook-metadata.VIEW\" is needed. Note that grading period Ids may be visible on GradableItems based on GradableItem (column / assignment) entitlement restrictions.\n\nThis endpoint supports paging, sorting, and the filtering of fields returned on result object.\n\n**Since**: 3300.3.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/periods",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties,  with an optional \"(desc)\" or \"(asc)\" suffix to request an ascending or descending sort for that property. e.g. \"title(desc),description\" Supported fields are:\n\n- id\n- title\n- position\n- dateMode\n- description\n\n**Since**: 3300.2.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grading periods",
      "description": "Blackboard Learn course grading periods API provides endpoints for managing course grading periods related operations."
    },
    "endpoint": {
      "name": "PostCoursesGradebookPeriods",
      "description": "Create a grading period.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed.\n\nThis endpoint supports the filtering of fields returned on result object.\n\nThis endpoint has an optional request parameter \"associate\", which will default false. If associate=true, then when the period is updated all assignments in this course  with a due date within the bounds of the grading period's start and end dates (if set)  will associate themselves to the updated grading period.\n\n**Since**: 3300.3.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/periods",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grading periods",
      "description": "Blackboard Learn course grading periods API provides endpoints for managing course grading periods related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookPeriods",
      "description": "Returns a specific grading period.\n\nThe entitlement \"course.gradebook.MODIFY\" or \"course.gradebook-metadata.VIEW\" is needed. Note that grading period Ids may be visible on GradableItems based on GradableItem (column / assignment) entitlement restrictions.\n\nThis endpoint supports the filtering of fields returned on result object.\n\n**Since**: 3300.3.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/periods/{periodId}",
      "pathParameters": [
        {
          "name": "periodId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grading periods",
      "description": "Blackboard Learn course grading periods API provides endpoints for managing course grading periods related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesGradebookPeriods",
      "description": "Delete a specific grading period. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3300.3.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/periods/{periodId}",
      "pathParameters": [
        {
          "name": "periodId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course grading periods",
      "description": "Blackboard Learn course grading periods API provides endpoints for managing course grading periods related operations."
    },
    "endpoint": {
      "name": "PatchCoursesGradebookPeriods",
      "description": "Update a grading period. The entitlement \"course.gradebook.MODIFY\" is needed.\n\nThis endpoint supports the filtering of fields returned on result object.\n\nThis endpoint has an optional request parameter \"associate\", which will default false. If associate=true, then when the period is updated all assignments in this course  with a due date within the bounds of the grading period's start and end dates (if set)  will associate themselves to the updated grading period.\n\n**Since**: 3300.3.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/periods/{periodId}",
      "pathParameters": [
        {
          "name": "periodId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course group users",
      "description": "Blackboard Learn course group users API provides endpoints for managing course group users related operations."
    },
    "endpoint": {
      "name": "GetCoursesGroupsUsers",
      "description": "Returns a list of group memberships objects for the specified group.\n\nCallers not enrolled in the group must have at least one of the following entitlements:\n\n- course.group.VIEW\n\n**Since**: 3600.0.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/{groupId}/users",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course group users",
      "description": "Blackboard Learn course group users API provides endpoints for managing course group users related operations."
    },
    "endpoint": {
      "name": "GetCoursesGroupsUsers",
      "description": "Loads a group membership in the specified group.\n\nCallers not enrolled in the group must have at least one of the following entitlements:\n\n- course.group.VIEW\n\n**Since**: 3600.0.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/{groupId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course group users",
      "description": "Blackboard Learn course group users API provides endpoints for managing course group users related operations."
    },
    "endpoint": {
      "name": "PutCoursesGroupsUsers",
      "description": "Creates a group membership in the specified group for the user. For Ultra if the user is already enrolled in another group of the same content item (of the group he wishes to enroll) previously to creating the new membership the previous one is deleted (Move operation). If the conditions for the join operation are not fullfilled the operation will be canceled and a 409 Conflict error returned with a message specifying the reason.\n\nMinimal entitlements required:\n\n- course.group-user.manage.EXECUTE\n\n**Since**: 3600.0.0",
      "method": "put",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/{groupId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course group users",
      "description": "Blackboard Learn course group users API provides endpoints for managing course group users related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesGroupsUsers",
      "description": "Deletes a group from the specified course.\n\nRequired entitlements:\n\n- course.group-user.manage.EXECUTE\n\n**Since**: 3600.0.0",
      "method": "delete",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/{groupId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course groups",
      "description": "Blackboard Learn course groups API provides endpoints for managing course groups related operations."
    },
    "endpoint": {
      "name": "GetCoursesGroups",
      "description": "Returns a list of all top-level groups in the specified course.\n\nCallers with the following entitlement can view all groups in the course:\n\n- course.groups.VIEW\nCallers enrolled in course can view all groups they're enrolled in, and all self-enrollment groups\n\n**Since**: 3800.6.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/groups",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "name",
          "type": "string",
          "description": "The group 'name' value to use as search criteria.  See also: nameCompare.\n\n**Since**: 3900.10.0"
        },
        {
          "name": "nameCompare",
          "type": "string",
          "description": "Used alongside the 'name' search parameter.\n\nDefaults to StartsWith if not specified.\n\n**Since**: 3900.10.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| contains |  |\n| notContains |  |\n| startsWith |  |\n"
        },
        {
          "name": "inGroupSet",
          "type": "boolean",
          "description": "Indicates whether only groups in a GroupSet (or groups NOT in a GroupSet) should be included\n\n**Since**: 3900.10.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for groups with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for groups with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "nonEmptyGroupSets",
          "type": "boolean",
          "description": "Search group sets whose student count is greater than 0.\n\n**Since**: 3900.71.0"
        },
        {
          "name": "onlyAvailableGroupSets",
          "type": "boolean",
          "description": "Search only group sets that are available.\n\n**Since**: 3900.71.0"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- name\n- externalId\n\n**Since**: 3100.4.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course groups",
      "description": "Blackboard Learn course groups API provides endpoints for managing course groups related operations."
    },
    "endpoint": {
      "name": "PostCoursesGroups",
      "description": "Creates a group in the specified course.\n\nFor Ultra Courses, Individual Groups are only supported when associated with a Content Item. To avoid undefined behavior, groups created this way in Ultra courses should be linked to Content Items via the Create Content Group endpoint as soon as possible after creation.\n\nIndividual Groups without Content association cannot be copied to Ultra courses, and will be removed as part of the Course Conversion process if converted to Ultra.\n\nCallers must have the following entitlement:\n\n- 'course.groups.CREATE'\n\n**Since**: 3800.6.0",
      "method": "post",
      "path": "/learn/api/public/v2/courses/{courseId}/groups",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course groups",
      "description": "Blackboard Learn course groups API provides endpoints for managing course groups related operations."
    },
    "endpoint": {
      "name": "GetCoursesGroupsSets",
      "description": "Returns a list of all groupsets\n\nCallers not enrolled in the course must have the following entitlement:\n\n- course.groups.VIEW\n- course.groups.admin.VIEW\n\n**Since**: 3800.6.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/sets",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "name",
          "type": "string",
          "description": "The group 'name' value to use as search criteria.  See also: nameCompare.\n\n**Since**: 3900.10.0"
        },
        {
          "name": "nameCompare",
          "type": "string",
          "description": "Used alongside the 'name' search parameter.\n\nDefaults to StartsWith if not specified.\n\n**Since**: 3900.10.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| contains |  |\n| notContains |  |\n| startsWith |  |\n"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for groups with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for groups with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "nonEmptyGroupSets",
          "type": "boolean",
          "description": "Search group sets whose student count is greater than 0.\n\n**Since**: 3900.71.0"
        },
        {
          "name": "onlyAvailableGroupSets",
          "type": "boolean",
          "description": "Search only group sets that are available.\n\n**Since**: 3900.71.0"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- name\n- externalId\n\n**Since**: 3100.4.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course groups",
      "description": "Blackboard Learn course groups API provides endpoints for managing course groups related operations."
    },
    "endpoint": {
      "name": "PostCoursesGroupsSets",
      "description": "Creates a groupset in the specified course.\n\nCallers must have the following entitlement:\n\n- 'course.groups.CREATE'\n\n**Since**: 3800.6.0",
      "method": "post",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/sets",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course groups",
      "description": "Blackboard Learn course groups API provides endpoints for managing course groups related operations."
    },
    "endpoint": {
      "name": "GetCoursesGroupsSets",
      "description": "Loads a groupset in the specified course.\n\nUsers calling this end point should meet at least one of these entitlement checks.\n\n- course.groups.VIEW\n- course.groups.admin.VIEW\n\n**Since**: 3800.6.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/sets/{groupId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course groups",
      "description": "Blackboard Learn course groups API provides endpoints for managing course groups related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesGroupsSets",
      "description": "Deletes a groupset from the specified course.\n\nRequired entitlements:\n\n- course.group.DELETE\n\n**Since**: 3800.6.0",
      "method": "delete",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/sets/{groupId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course groups",
      "description": "Blackboard Learn course groups API provides endpoints for managing course groups related operations."
    },
    "endpoint": {
      "name": "PatchCoursesGroupsSets",
      "description": "Updates a groupset in the specified course.\n\nMinimal entitlements required:\n\n- course.group.MODIFY\n\n**Since**: 3800.6.0",
      "method": "patch",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/sets/{groupId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course groups",
      "description": "Blackboard Learn course groups API provides endpoints for managing course groups related operations."
    },
    "endpoint": {
      "name": "GetCoursesGroupsSetsGroups",
      "description": "Returns a list of all groups within a groupset\n\nCallers not enrolled in the group must have the following entitlement:\n\n- course.groups.VIEW\n\n**Since**: 3800.6.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/sets/{groupId}/groups",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "name",
          "type": "string",
          "description": "The group 'name' value to use as search criteria.  See also: nameCompare.\n\n**Since**: 3900.10.0"
        },
        {
          "name": "nameCompare",
          "type": "string",
          "description": "Used alongside the 'name' search parameter.\n\nDefaults to StartsWith if not specified.\n\n**Since**: 3900.10.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| contains |  |\n| notContains |  |\n| startsWith |  |\n"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for groups with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for groups with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "nonEmptyGroupSets",
          "type": "boolean",
          "description": "Search group sets whose student count is greater than 0.\n\n**Since**: 3900.71.0"
        },
        {
          "name": "onlyAvailableGroupSets",
          "type": "boolean",
          "description": "Search only group sets that are available.\n\n**Since**: 3900.71.0"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- name\n- externalId\n\n**Since**: 3100.4.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course groups",
      "description": "Blackboard Learn course groups API provides endpoints for managing course groups related operations."
    },
    "endpoint": {
      "name": "PostCoursesGroupsSetsGroups",
      "description": "Creates a group within a groupset.\n\nCallers must have the following entitlement:\n\n- 'course.groups.CREATE'\n\n**Since**: 3800.6.0",
      "method": "post",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/sets/{groupId}/groups",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course groups",
      "description": "Blackboard Learn course groups API provides endpoints for managing course groups related operations."
    },
    "endpoint": {
      "name": "GetCoursesGroups",
      "description": "Loads a group in the specified course.\n\nCallers not enrolled in the course must have the following entitlement:\n\n- course.groups.VIEW\n\n**Since**: 3800.6.0",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/{groupId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course groups",
      "description": "Blackboard Learn course groups API provides endpoints for managing course groups related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesGroups",
      "description": "Deletes a groupset from the specified course.\n\nRequired entitlements:\n\n- course.group.DELETE\n\n**Since**: 3800.6.0",
      "method": "delete",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/{groupId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course groups",
      "description": "Blackboard Learn course groups API provides endpoints for managing course groups related operations."
    },
    "endpoint": {
      "name": "PatchCoursesGroups",
      "description": "Updates a group in the specified course.\n\nMinimal entitlements required:\n\n- course.group.MODIFY\n\n**Since**: 3800.6.0",
      "method": "patch",
      "path": "/learn/api/public/v2/courses/{courseId}/groups/{groupId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course memberships",
      "description": "Blackboard Learn course memberships API provides endpoints for managing course memberships related operations."
    },
    "endpoint": {
      "name": "GetCoursesUsers",
      "description": "Returns a list of user memberships for the specified course or organization.\n\nCallers not enrolled in the course must have at least one of the following entitlements:\n\n- For courses: 'course.user.VIEW', 'system.user.course.enrollment.VIEW', or 'system.courseuserlist.VIEW'\n- For organizations: 'course.user.VIEW', 'system.user.org.enrollment.VIEW', or 'system.orguserlist.VIEW'\nCallers enrolled in the course will only be able to see memberships that are available and that have opted to be included in the course roster.\n\nFor callers enrolled in the course as well as those with the 'course.user.VIEW' entitlement, system fields such as externalId and dataSourceId will not be visible.\n\n**Since**: 3000.1.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/users",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "role",
          "type": "string",
          "description": "Search for memberships with a course role id that matches this value.\n\n**Since**: 3500.5.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for memberships with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for memberships with a modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.9.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for memberships with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0"
        },
        {
          "name": "lastAccessed",
          "type": "string",
          "description": "Search for memberships with a last accessed date relative to this value.  'lastAccessedCompare' may also be sent to control search behavior.\n\n**Since**: 3300.9.0"
        },
        {
          "name": "lastAccessedCompare",
          "type": "string",
          "description": "Used alongside the 'lastAccessed' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3300.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for users with availability.available properties that contain this value.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| Disabled |   **Since**: 3100.0.0 |\n"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"created(desc)\" Supported fields are:\n\n- created\n- lastAccessed (Since 3300.9.0)\n\n**Since**: 3100.0.0"
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course memberships",
      "description": "Blackboard Learn course memberships API provides endpoints for managing course memberships related operations."
    },
    "endpoint": {
      "name": "GetCoursesUsers",
      "description": "Loads a user membership in the specified course.\n\nEntitlement and field visibility rules are the same as those when loading the memberships collection.\n\n**Since**: 2015.11.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course memberships",
      "description": "Blackboard Learn course memberships API provides endpoints for managing course memberships related operations."
    },
    "endpoint": {
      "name": "PutCoursesUsers",
      "description": "Creates a user membership in the specified course.\n\nMinimal entitlements required:\n\n- For courses: 'system.enrollment.CREATE' with 'system.user.VIEW' or just 'course.user-enroll.EXECUTE' - For organizations: 'org.enrollment.CREATE' with 'system.user.VIEW' or just 'course.user-enroll.EXECUTE' - For courses or organizations that have enabled self enrollment: 'system.generic.VIEW'\nIf 'system.enrollment.CREATE' or 'org.enrollment.CREATE' are present, the user must be in the same domain as the logged on user.\n\nBy default courseRoleId is Student and availability.available is Yes.  Providing different values for these fields requires extra entitlements:\n\n- For courses: 'course.user-role.MODIFY' or 'course.user.MODIFY'\n- For organizations: 'course.user-role.MODIFY' or 'org.user.MODIFY'\n\n**Since**: 2015.11.0",
      "method": "put",
      "path": "/learn/api/public/v1/courses/{courseId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course memberships",
      "description": "Blackboard Learn course memberships API provides endpoints for managing course memberships related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesUsers",
      "description": "Deletes a user membership from the specified course.\n\nRequired entitlements:\n\n- For courses: 'system.enrollment.DELETE' or 'course.user.DELETE'\n- For organizations: 'system.enrollment.DELETE' or 'org.enrollment.DELETE'\n\n**Since**: 2015.11.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course memberships",
      "description": "Blackboard Learn course memberships API provides endpoints for managing course memberships related operations."
    },
    "endpoint": {
      "name": "PatchCoursesUsers",
      "description": "Updates a user membership in the specified course. \n\n | Field                  | Entitlements Required                                                                    |\n |------------------------|------------------------------------------------------------------------------------------|\n | dataSourceId           | 'course.user.MODIFY' or 'org.user.MODIFY'                                                |\n | childCourseId          | 'course.user.MODIFY' or 'org.user.MODIFY'                                                |\n | courseRoleId           | 'course.user.MODIFY', 'org.user.MODIFY', or 'course.user-role.MODIFY'                    |\n | availability.available | 'course.user.MODIFY', 'org.user.MODIFY', or 'course.course-availability.MODIFY'          |\n | displayOrder           | 'course.user.MODIFY', 'org.user.MODIFY', or 'course.user-role.primary-instructor.MODIFY' |\n \n\nIn addition, callers must have standard view entitlements to receive a response.  Without view entitlements the operation will be performed but an empty result object will be returned.\n\n**Since**: 2015.11.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course memberships",
      "description": "Blackboard Learn course memberships API provides endpoints for managing course memberships related operations."
    },
    "endpoint": {
      "name": "GetUsersCourses",
      "description": "Returns a list of course and organization memberships for the specified user.\n\nUsers can always view their own memberships.  Callers viewing the memberships of another user require at least one of the following entitlements:\n\n- 'system.user.course.enrollment.VIEW' allows callers to see course memberships\n- 'system.user.org.enrollment.VIEW' allows callers to see organization memberships\n\n**Since**: 2015.11.0",
      "method": "get",
      "path": "/learn/api/public/v1/users/{userId}/courses",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "role",
          "type": "string",
          "description": "Search for memberships with a course role id that matches this value.\n\n**Since**: 3500.5.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for memberships with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for memberships with a modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.9.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for memberships with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0"
        },
        {
          "name": "lastAccessed",
          "type": "string",
          "description": "Search for memberships with a last accessed date relative to this value.  'lastAccessedCompare' may also be sent to control search behavior.\n\n**Since**: 3300.9.0"
        },
        {
          "name": "lastAccessedCompare",
          "type": "string",
          "description": "Used alongside the 'lastAccessed' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3300.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for users with availability.available properties that contain this value.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| Disabled |   **Since**: 3100.0.0 |\n"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"created(desc)\" Supported fields are:\n\n- created\n- lastAccessed (Since 3300.9.0)\n\n**Since**: 3100.0.0"
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>course</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course messages",
      "description": "Blackboard Learn course messages API provides endpoints for managing course messages related operations."
    },
    "endpoint": {
      "name": "GetCoursesMessages",
      "description": "Retrieve all the messages for a course by specified folder. This endpoint currently supports only Original courses.\n\nThe \"course.message.VIEW\" entitlement is required to view Course Messages.\n\n**Since**: 3900.2.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/messages",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"isRead(desc),start\" Supported fields are:\n\n- isRead\n- postedDate\n\n**Since**: 3900.2.0"
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>sender</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course messages",
      "description": "Blackboard Learn course messages API provides endpoints for managing course messages related operations."
    },
    "endpoint": {
      "name": "PostCoursesMessages",
      "description": "Creates a new Course Message. This endpoint currently supports only Original courses.\n\nThe \"course.message.CREATE\" entitlement is required to create or reply a course message\n\n**Since**: 3900.2.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/messages",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course messages",
      "description": "Blackboard Learn course messages API provides endpoints for managing course messages related operations."
    },
    "endpoint": {
      "name": "GetCoursesMessagesFolders",
      "description": "Retrieve all the folders for a course. This endpoint currently supports only Original courses.\n\nThe \"course.message.VIEW\" entitlement is required to view a Course Message folders.\n\n**Since**: 3900.2.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/messages/folders",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course messages",
      "description": "Blackboard Learn course messages API provides endpoints for managing course messages related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesMessages",
      "description": "Delete a message.\n\nThe 'course.message.DELETE' entitlement is required to delete the message.\n\n**Since**: 3900.2.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/messages/{messageId}",
      "pathParameters": [
        {
          "name": "messageId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course messages",
      "description": "Blackboard Learn course messages API provides endpoints for managing course messages related operations."
    },
    "endpoint": {
      "name": "PatchCoursesMessages",
      "description": "Update the read status of the message. This endpoint currently supports only Original courses.\n\n**Since**: 3900.2.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/messages/{messageId}",
      "pathParameters": [
        {
          "name": "messageId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course messages",
      "description": "Blackboard Learn course messages API provides endpoints for managing course messages related operations."
    },
    "endpoint": {
      "name": "GetCoursesMessagesParticipants",
      "description": "Retrieve all participants for the specified message.\n\nThe \"course.message.VIEW\" entitlement is required to view a Course Message participants.\n\n**Since**: 3900.2.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/messages/{messageId}/participants",
      "pathParameters": [
        {
          "name": "messageId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [
        {
          "name": "participationType",
          "type": "string",
          "description": "Search the participation type\n\n**Since**: 3800.20.0"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"PARTICIPATION_TYPE(desc),start\" Supported fields are:\n\n- participationType\n\n**Since**: 3900.2.0"
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course toc",
      "description": "Blackboard Learn course toc API provides endpoints for managing course toc related operations."
    },
    "endpoint": {
      "name": "GetCoursesTocitems",
      "description": "Returns a list of Course TOC entries associated to a course.\n\nEntitlement course.configure-areas.EXECUTE required\n\n**Since**: 3900.31.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/tocItems",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Course toc",
      "description": "Blackboard Learn course toc API provides endpoints for managing course toc related operations."
    },
    "endpoint": {
      "name": "PatchCoursesTocitems",
      "description": "Updates a specific TOC entry. Only allowGuests and allowObservers flags are modifiable, the remaining fields are read-only. User should keep in mind that in order to modify such TOC fields, Course's allowGuest and allowObservers configuration must be enabled. Also, if user wants to update a TOC register's allowGuest flag and TOC is associated to a CONTENT or APPLICATION target type, Course Tool Settings must have allowGuests flag enabled. If user wants to update a TOC register's allowObserver flag and TOC is associated to an APPLICATION target type, Course Tool Settings must have allowObservers flag enabled.\n\nEntitlement course.configure-areas.EXECUTE required\n\n**Since**: 3900.31.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/tocItems/{tocId}",
      "pathParameters": [
        {
          "name": "tocId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Courses",
      "description": "Blackboard Learn courses API provides endpoints for managing courses related operations."
    },
    "endpoint": {
      "name": "GetCoursesChildren",
      "description": "Returns a list of course cross-listings.\n\nThe 'system.course.cross-list.VIEW' or 'system.org.cross-list.VIEW' or 'course.children.VIEW' entitlement is needed.\n\n**Since**: 3000.11.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/children",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>childCourse</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Courses",
      "description": "Blackboard Learn courses API provides endpoints for managing courses related operations."
    },
    "endpoint": {
      "name": "GetCoursesChildren",
      "description": "Loads a specific course cross-listing.\n\nThe 'system.course.cross-list.VIEW' or 'system.org.cross-list.VIEW' entitlement is needed.\n\n**Since**: 3000.11.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/children/{childCourseId}",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>childCourse</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Courses",
      "description": "Blackboard Learn courses API provides endpoints for managing courses related operations."
    },
    "endpoint": {
      "name": "PutCoursesChildren",
      "description": "Merges two courses (or organizations) together. Commonly referred to as cross-listing. Only a single level of parent/child relationship is supported (ie. Parent courses may not become children, similarly, a child cannot become a parent)\n\nMinimal entitlements required:\n\n- For courses: 'system.course.cross-list.VIEW'\n- For organizations: 'system.org.cross-list.VIEW'\n\nUpon being merged, all enrollments in the child course are replicated in the parent course, and any future enrollment changes in the child course are also synchronized automatically with the parent course. Duplicate student enrollments will result in a 409 CONFLICT unless the 'ignoreEnrollmentErrors' query parameter is set to true. Users in other roles, such as grader, teaching assistant, or guest, are assigned roles based on the last time they are added to the parent course.\n\n**Since**: 3400.1.0",
      "method": "put",
      "path": "/learn/api/public/v1/courses/{courseId}/children/{childCourseId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Courses",
      "description": "Blackboard Learn courses API provides endpoints for managing courses related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesChildren",
      "description": "Delete a course-course relationship, resulting in two unrelated courses.\n\nMinimal entitlements required:\n\n- For courses: 'system.course.separate-out.VIEW'\n- For organizations: 'system.org.separate-out.VIEW'\n\n**Since**: 3900.4.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/children/{childCourseId}",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "separationStyle",
          "type": "string",
          "description": "The method by which the courses will be separated.  Default: CompleteSeparation\n\n**Since**: 3900.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| completeSeparation | Re-enable the child course with enrollments and remove all the child enrollments from the master course. |\n| enrollmentsInBoth | Re-enable the child course with enrollments but leave all the child enrollments in the master course as well, marking them as unavailable. |\n"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Courses",
      "description": "Blackboard Learn courses API provides endpoints for managing courses related operations."
    },
    "endpoint": {
      "name": "GetCoursesCrosslistset",
      "description": "Returns the course cross-listing set for the specified course. This will return any and all parent/child associations regardless of the specified course being a parent or child course. The result will be empty if the specified course is not cross-listed.\n\nThe 'system.course.cross-list.VIEW' or 'system.org.cross-list.VIEW' entitlement is needed.\n\n**Since**: 3400.1.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/crossListSet",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Courses",
      "description": "Blackboard Learn courses API provides endpoints for managing courses related operations."
    },
    "endpoint": {
      "name": "GetCoursesTasks",
      "description": "Check the status of a queued task associated with a Course. Returns 200 unless task is complete. If task is complete this endpoint will return a 303 SEE OTHER with a Location header providing a URI to the GET Course endpoint. Statistical data shows that the average copy task duration is under a second. However, very large courses can take several minutes. Also important to note is that these background tasks can potentially be queued behind other system tasks therefore prolonging the time a task stays in the `Queued` status. We recommend that this endpoint be polled every 60 seconds while waiting for a Course copy to complete.\n\nUsers with entitlements 'system.course.copy.EXECUTE' can view the task status.\n\n**Since**: 3300.0.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/tasks/{taskId}",
      "pathParameters": [
        {
          "name": "taskId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Courses",
      "description": "Blackboard Learn courses API provides endpoints for managing courses related operations."
    },
    "endpoint": {
      "name": "PostCoursesCopy",
      "description": "Creates a copy of an existing Course into a new Course or an existing course. It is possible to limit the course content to be copied using options.\n\nUsing the payload without the \"copy\" object is equivalent to doing an exact copy of the course, which means all course settings will be replicated.\n\nFor a partial copy, set true in the supported settings inside the \"copy\" object.\n\nUsers with entitlements 'system.course.copy.EXECUTE' can create a course copy. Users with entitlements 'system.org.copy.EXECUTE' can create an organization copy. Users with entitlement 'course.content.copy.exact.EXECUTE' can copy Course/Organization materials to a new or existing course Users with entitlement 'course.content.copy.new.EXECUTE' can copy Course/Organization materials to a new course. All users's must also have 'course.content.copy.EXECUTE' entitlement associated with the specified source courseId.\n\n**Since**: 3800.2.0",
      "method": "post",
      "path": "/learn/api/public/v2/courses/{courseId}/copy",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Courses",
      "description": "Blackboard Learn courses API provides endpoints for managing courses related operations."
    },
    "endpoint": {
      "name": "GetCourses",
      "description": "Returns a list of courses and organizations.\n\nTo view disabled courses a user must have the entitlement 'system.course.VIEW'.\n\nUsers with the 'course.configure-properties.EXECUTE' course entitlement, or the 'system.course.properties.MODIFY' system entitlement can access all course properties.\n\nUsers enrolled in the course have read access to all properties except:\n\n- uuid\n- externalId\n- dataSourceId\n- created\n- allowGuests\n- enrollment.accessCode\n\nUsers who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:\n\n- id\n- courseId\n- name\n- description\n- organization\n- readOnly\n- termId\n- availability.available\n- availability.duration.type\n- availability.duration.start\n- availability.duration.end\n- availability.duration.daysOfUse\nWhen courses are child courses, parent course data is also returned to provide a complete data representation of course relationships.\n\nIf the course enrollment is self-enroll, all users can view the course as though they were enrolled.\n\n**Since**: 3800.1.0",
      "method": "get",
      "path": "/learn/api/public/v3/courses",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "modified",
          "type": "string",
          "description": "Search for courses with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3500.4.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3500.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "courseId",
          "type": "string",
          "description": "Search for courses with courseId properties that contain this value.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "name",
          "type": "string",
          "description": "Search for courses with name properties that contain this value.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "description",
          "type": "string",
          "description": "Search for courses with description properties that contain this value.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "externalId",
          "type": "string",
          "description": "Search for courses with externalId properties that contain this value.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for courses with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "allowGuests",
          "type": "boolean",
          "description": "Search for courses which are configured to allow/disallow guest access, based on input.  Default: n/a (return courses regardless of guests allowed)\n\n**Since**: 3200.3.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Defaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for courses with availability.available properties that contain this value.\n\n**Since**: 3000.13.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the course. |\n| No | Students may not access the course. |\n| Disabled | Disabled by the SIS. Students may not access the course.  **Since**: 3100.0.0 |\n| Term | Availability is inherited from the term settings. Requires a termId be set. |\n"
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for courses with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0"
        },
        {
          "name": "termId",
          "type": "string",
          "description": "Search for courses with this termId.  This may optionally be the term's externalId using the syntax \"externalId:spring2015\".\n\n**Since**: 3100.0.0"
        },
        {
          "name": "organization",
          "type": "boolean",
          "description": "Search for courses by organization flag.  A value of 'true' indicates that search results should be limited to only Organizations.  A value of 'false' indicates results should be limited to Courses.  Not setting this field indicates that both Courses and Organizations should be returned.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc),created\" Supported fields are:\n\n- courseId\n- name\n- externalId\n- created\n- modified\n\n**Since**: 3400.8.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Courses",
      "description": "Blackboard Learn courses API provides endpoints for managing courses related operations."
    },
    "endpoint": {
      "name": "PostCourses",
      "description": "Creates a course or organization.\n\nThe 'system.course.CREATE' entitlement is needed to create a course, while 'system.org.CREATE' is needed for an organization.\n\n**Since**: 3800.1.0",
      "method": "post",
      "path": "/learn/api/public/v3/courses",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Courses",
      "description": "Blackboard Learn courses API provides endpoints for managing courses related operations."
    },
    "endpoint": {
      "name": "GetCourses",
      "description": "Loads a specific course or organization.\n\nTo view disabled courses a user must have the entitlement 'system.course.VIEW'.\n\nUsers with the 'course.configure-properties.EXECUTE' entitlement can access all course properties.\n\nUsers enrolled in the course have read access to all properties except:\n\n- uuid\n- externalId\n- dataSourceId\n- created\n- allowGuests\n- enrollment.accessCode\n\nUsers with no access to the course only have read access to the following properties:\n\n- id\n- courseId\n- name\n- description\n- organization\n- closedComplete\n- termId\n- availability.available\n- availability.duration.type\n- availability.duration.start\n- availability.duration.end\n- availability.duration.daysOfUse\nIf the course enrollment is self-enroll, all users can view the course as though they were enrolled.\n\n**Since**: 3800.1.0",
      "method": "get",
      "path": "/learn/api/public/v3/courses/{courseId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Courses",
      "description": "Blackboard Learn courses API provides endpoints for managing courses related operations."
    },
    "endpoint": {
      "name": "DeleteCourses",
      "description": "Registers a queued task to delete a course or organization in asynchronous fashion.\n\nThe 'system.course.DELETE' entitlement is needed to delete a course, while 'system.org.DELETE' is needed for an organization.\n\n**Since**: 3800.1.0",
      "method": "delete",
      "path": "/learn/api/public/v3/courses/{courseId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Courses",
      "description": "Blackboard Learn courses API provides endpoints for managing courses related operations."
    },
    "endpoint": {
      "name": "PatchCourses",
      "description": "Updates a course or organization.\n\nTo update a course, the user must have either 'system.course|org.properties.MODIFY' or 'course.configure-properties.EXECUTE' entitlements.  However, if the user has the latter entitlement, then additional entitlements are needed to be able to update certain fields, as shown below: \n\n | Field                           | Entitlements Required                                                  |\n |---------------------------------|------------------------------------------------------------------------|\n | name                            | course.name.MODIFY                                                     |\n | description                     | course.name.MODIFY                                                     |\n | allowGuests                     | course.configure-guest-access.EXECUTE                                  |\n | enrollment.type                 | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.start                | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.end                  | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.accessCode           | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | availability.available          | course.configure-properties.EXECUTE, course.availability.MODIFY        |\n | locale.id                       | course.configure-properties.EXECUTE, course.locale.MODIFY              |\n | locale.force                    | course.configure-properties.EXECUTE, course.locale.MODIFY              |\n | availability.duration.type      | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.start     | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.end       | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.daysOfUse | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n \n\n**Since**: 3800.1.0",
      "method": "patch",
      "path": "/learn/api/public/v3/courses/{courseId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Data sources",
      "description": "Blackboard Learn data sources API provides endpoints for managing data sources related operations."
    },
    "endpoint": {
      "name": "GetDatasources",
      "description": "Returns a list of data sources.\n\nThe 'system.datasource.manager.VIEW' entitlement is needed.\n\n**Since**: 3000.1.0",
      "method": "get",
      "path": "/learn/api/public/v1/dataSources",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Data sources",
      "description": "Blackboard Learn data sources API provides endpoints for managing data sources related operations."
    },
    "endpoint": {
      "name": "PostDatasources",
      "description": "Creates a data source.\n\nThe 'system.datasource.manager.VIEW' entitlement is needed.\n\n**Since**: 2015.11.0",
      "method": "post",
      "path": "/learn/api/public/v1/dataSources",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Data sources",
      "description": "Blackboard Learn data sources API provides endpoints for managing data sources related operations."
    },
    "endpoint": {
      "name": "GetDatasources",
      "description": "Loads a data source.\n\nThe 'system.datasource.manager.VIEW' entitlement is needed.\n\n**Since**: 2015.11.0",
      "method": "get",
      "path": "/learn/api/public/v1/dataSources/{dataSourceId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Data sources",
      "description": "Blackboard Learn data sources API provides endpoints for managing data sources related operations."
    },
    "endpoint": {
      "name": "DeleteDatasources",
      "description": "Deletes a data source.\n\nThe 'system.datasource.manager.VIEW' entitlement is needed.\n\n**Since**: 2015.11.0",
      "method": "delete",
      "path": "/learn/api/public/v1/dataSources/{dataSourceId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Data sources",
      "description": "Blackboard Learn data sources API provides endpoints for managing data sources related operations."
    },
    "endpoint": {
      "name": "PatchDatasources",
      "description": "Updates a data source.\n\nThe 'system.datasource.manager.VIEW' entitlement is needed.\n\n**Since**: 2015.11.0",
      "method": "patch",
      "path": "/learn/api/public/v1/dataSources/{dataSourceId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Discussions",
      "description": "Blackboard Learn discussions API provides endpoints for managing discussions related operations."
    },
    "endpoint": {
      "name": "GetCoursesDiscussions",
      "description": "Get all discussions associated with the specified Ultra Course. The course must have ultra view enabled.\n\nRequires the following entitlement:\n\n- discussion.forum.VIEW\n</p> Enrolled users should be able to access this resource regardless of entitlement if the discussion is set to available. Any non-enrolled user with the required entitlements already mentioned above will be able to get an empty list response if consulted courseId does not have any discussion, otherwise, a 403 error should rise.\n\n**Since**: 3900.19.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/discussions",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),available\" Supported fields are:\n\n- id\n- title\n- available\n- gradable\n- createdDate\n- modifiedDate\n- gradebookColumnId\n\n**Since**: 3900.19.0"
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for forums with title properties that contain this value.  Search is case-insensitive.\n\n**Since**: 3900.25.0"
        },
        {
          "name": "gradable",
          "type": "boolean",
          "description": "Search for forums which are configured to be gradable or not, based on input.\n\n**Since**: 3900.25.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Discussions",
      "description": "Blackboard Learn discussions API provides endpoints for managing discussions related operations."
    },
    "endpoint": {
      "name": "PostCoursesDiscussions",
      "description": "Create a discussion within the specified Ultra Course. If the discussion is created as gradable an associated gradebook column is also created. Such gradebook column can be updated via the course grades API.\n\nRequires the following entitlements:\n\n- discussion.forum.CREATE\n- discussion.post.CREATE\n- discussion.thread.CREATE\n- course.content.CREATE.\n</p>\n\n**Since**: 3900.27.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/discussions",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Discussions",
      "description": "Blackboard Learn discussions API provides endpoints for managing discussions related operations."
    },
    "endpoint": {
      "name": "GetCoursesDiscussions",
      "description": "Get a discussion in the Ultra Course with the specified id.\n\nRequires the following entitlement:\n\n- discussion.forum.VIEW\n</p> Enrolled users should be able to access this resource regardless of entitlement if the discussion is set to available\n\n**Since**: 3900.19.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Discussions",
      "description": "Blackboard Learn discussions API provides endpoints for managing discussions related operations."
    },
    "endpoint": {
      "name": "PatchCoursesDiscussions",
      "description": "Update a discussion in an Ultra Course.\n\nThis operation is always a partial-update. So user should only send data that he want to change. If the discussion is updated to be gradable an associated gradebook column is also created. Such gradebook column can be updated via the course grades API. List of entitlements which allow a logged on user to update a forum.\n\n- {@code discussion.forum.MODIFY}\n\n**Since**: 3900.27.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Discussions",
      "description": "Blackboard Learn discussions API provides endpoints for managing discussions related operations."
    },
    "endpoint": {
      "name": "GetCoursesDiscussionsGroups",
      "description": "Get the groups associated to a discussion from an Ultra Course, or an empty list if there are none.\n\nRequires the following entitlement:\n\n- course.content.designer.VIEW\n</p>\n\n**Since**: 3900.27.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/groups",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"threadId(desc)\" Supported fields are:\n\n- groupId\n- threadId\n\n**Since**: 3900.27.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Discussions",
      "description": "Blackboard Learn discussions API provides endpoints for managing discussions related operations."
    },
    "endpoint": {
      "name": "PutCoursesDiscussionsGroups",
      "description": "Sets the specified group inside a discussion from an Ultra Course. This will create a group thread. A discussion that already has messages, including drafts, will not be able to be changed into a group discussion. After the first group has been set, all subsequent groups must belong to the same group set. If the forum content is conditioned behind a memberships criteria, no group associations shall be created by this endpoint.\n\nRequires the following entitlement:\n\n- course.content.MODIFY\n</p>\n\n**Since**: 3900.27.0",
      "method": "put",
      "path": "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/groups/{groupId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Discussions",
      "description": "Blackboard Learn discussions API provides endpoints for managing discussions related operations."
    },
    "endpoint": {
      "name": "GetCoursesDiscussionsMessages",
      "description": "Get the messages of the specified discussion in an Ultra Course.\n\nRequires the following entitlement:\n\n- discussion.post.VIEW\n\nEnrolled users should be able to access this resource regardless of entitlement if the discussion is set to available For group discussions, students will be able to access only the messages associated with groups in which they are enrolled. Entitled users will have access to messages associated with all groups, but can filter returned messages based on groupId using the groupId query parameter A draft message can only be seen by its own author\n\n**Since**: 3900.19.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/messages",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "groupId",
          "type": "string",
          "description": "Search for messages which are associated with this groupId.\n\n**Since**: 3900.19.0"
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Search for messages made by this userId.\n\n**Since**: 3900.25.0"
        },
        {
          "name": "status",
          "type": "string",
          "description": "Search for messages with status.\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Published | Message is published in the discussion and visible for all users. |\n| Deleted | Message is shown in the discussion as soft-deleted. |\n| Draft | Message is stored as a draft and only visible for the author user. |\n"
        },
        {
          "name": "isRead",
          "type": "boolean",
          "description": "Search for read or unread messages.\n\n**Since**: 3900.25.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for messages filtering by 'created'. If createdCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for messages filtering by 'modified'. If modifiedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0"
        },
        {
          "name": "posted",
          "type": "string",
          "description": "Search for messages filtering by 'posted'. If postedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0"
        },
        {
          "name": "edited",
          "type": "string",
          "description": "Search for messages filtering by 'edited'. If editedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Operation to be applied to 'created'. When not specified, it will perform as 'greaterOrEqual' by default if 'created' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Operation to be applied to 'modified'. When not specified, it will perform as 'greaterOrEqual' by default if 'modified' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "postedCompare",
          "type": "string",
          "description": "Operation to be applied to 'posted'. When not specified, it will perform as 'greaterOrEqual' by default if 'posted' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "editedCompare",
          "type": "string",
          "description": "Operation to be applied to 'edited'. When not specified, it will perform as 'greaterOrEqual' by default if 'edited' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"createdDate(desc),givenName\" Supported fields are:\n\n- id\n- discussionId\n- parentId\n- threadId\n- userId\n- groupId\n- givenName\n- familyName\n- status\n- body\n- createdDate\n- modifiedDate\n- isRead\n\n**Since**: 3900.19.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Discussions",
      "description": "Blackboard Learn discussions API provides endpoints for managing discussions related operations."
    },
    "endpoint": {
      "name": "PostCoursesDiscussionsMessages",
      "description": "Create a message in the main thread of a discussion from an Ultra Course. This corresponds to a direct reply to the topic.\n\nRequires the following entitlements:\n\n- discussion.post.CREATE\n\nFor group discussions, instructors must specify a valid group id for the message to be created in the specific group thread.\n\n**Since**: 3900.27.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/messages",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Discussions",
      "description": "Blackboard Learn discussions API provides endpoints for managing discussions related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesDiscussionsMessages",
      "description": "Deletes a message in a discussion from an Ultra Course. If the message has no replies, it is fully deleted. Otherwise, it is soft-deleted unless explicitly requested for complete deletion using the query parameter `deleteReplies`.\n\nRequires the following entitlement:\n\n- discussion.post.MODIFY\n- discussion.draft.DELETE\n- discussion.post.DELETE\n- discussion.post.author.DELETE\n- discussion.post.author.DELETE\n\n**Since**: 3900.27.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/messages/{messageId}",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "deleteReplies",
          "type": "boolean",
          "description": "Whether the DELETE request should delete the replies or not. If true, the message and its replies are hard-deleted. Otherwise, the message is soft-deleted. If the message doesn't have replies, it is hard-deleted in any case.\n\n**Since**: 3900.27.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Discussions",
      "description": "Blackboard Learn discussions API provides endpoints for managing discussions related operations."
    },
    "endpoint": {
      "name": "PatchCoursesDiscussionsMessages",
      "description": "Update a message of a discussion from an Ultra Course.\n\nRequires the following entitlement:\n\n- discussion.draft.MODIFY\n- discussion.post.MODIFY\n- discussion.post.author.MODIFY\n\n**Since**: 3900.27.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/messages/{messageId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Discussions",
      "description": "Blackboard Learn discussions API provides endpoints for managing discussions related operations."
    },
    "endpoint": {
      "name": "GetCoursesDiscussionsMessagesReplies",
      "description": "Get the replies of the specified message in a discussion from an Ultra Course.\n\nRequires the following entitlement:\n\n- discussion.post.VIEW\n\nEnrolled users should be able to access this resource regardless of entitlement if the discussion is set to available A draft message can only be seen by its own author\n\n**Since**: 3900.19.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/messages/{messageId}/replies",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "groupId",
          "type": "string",
          "description": "Search for messages which are associated with this groupId.\n\n**Since**: 3900.19.0"
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Search for messages made by this userId.\n\n**Since**: 3900.25.0"
        },
        {
          "name": "status",
          "type": "string",
          "description": "Search for messages with status.\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Published | Message is published in the discussion and visible for all users. |\n| Deleted | Message is shown in the discussion as soft-deleted. |\n| Draft | Message is stored as a draft and only visible for the author user. |\n"
        },
        {
          "name": "isRead",
          "type": "boolean",
          "description": "Search for read or unread messages.\n\n**Since**: 3900.25.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for messages filtering by 'created'. If createdCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for messages filtering by 'modified'. If modifiedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0"
        },
        {
          "name": "posted",
          "type": "string",
          "description": "Search for messages filtering by 'posted'. If postedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0"
        },
        {
          "name": "edited",
          "type": "string",
          "description": "Search for messages filtering by 'edited'. If editedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Operation to be applied to 'created'. When not specified, it will perform as 'greaterOrEqual' by default if 'created' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Operation to be applied to 'modified'. When not specified, it will perform as 'greaterOrEqual' by default if 'modified' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "postedCompare",
          "type": "string",
          "description": "Operation to be applied to 'posted'. When not specified, it will perform as 'greaterOrEqual' by default if 'posted' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "editedCompare",
          "type": "string",
          "description": "Operation to be applied to 'edited'. When not specified, it will perform as 'greaterOrEqual' by default if 'edited' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"createdDate(desc),givenName\" Supported fields are:\n\n- id\n- discussionId\n- parentId\n- threadId\n- userId\n- groupId\n- givenName\n- familyName\n- status\n- body\n- createdDate\n- modifiedDate\n- isRead\n\n**Since**: 3900.19.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Discussions",
      "description": "Blackboard Learn discussions API provides endpoints for managing discussions related operations."
    },
    "endpoint": {
      "name": "PostCoursesDiscussionsMessagesReplies",
      "description": "Create a reply to the specified message in a discussion from an Ultra Course.\n\nRequires the following entitlement:\n\n- discussion.post.CREATE\n\n**Since**: 3900.27.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/discussions/{discussionId}/messages/{messageId}/replies",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Goals",
      "description": "Blackboard Learn goals API provides endpoints for managing goals related operations."
    },
    "endpoint": {
      "name": "GetCoursesAlignments",
      "description": "Returns the list of Goal Alignments for the course specified by Id in the URL.\n\nThe 'course.learningstandards.alignment.VIEW' or 'course.learningstandards.alignment.student.VIEW' entitlement is required.\n\n**Since**: 3900.62.00",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/alignments",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "goalId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "blogId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by blog id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by course content id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by discussion id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "gradebookColumnId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by gradebook column id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "messageId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by message/thread id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "questionId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by assessment/question id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "resourceId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by resource id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "reference",
          "type": "string",
          "description": "Optional search criteria parameter to filter by reference.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "rubricRowId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by rubric row id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by rubric id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "type",
          "type": "string",
          "description": "Optional search criteria parameter to filter by type.\n\n**Since**: 3900.62.00\n\n\n| Type      | Description\n | --------- | --------- |\n| Blog | Blog Content Type |\n| CourseContent | Course Content Type |\n| ContentCollectionResource | Content Collection Resourse Type |\n| Discussion | Discussion Content Type |\n| DiscussionThread | Message/Thread Content Type |\n| Assessment | Assessment/Question Content Type |\n| GradebookColumn | Gradebook Column Content Type |\n| RubricRow | Rubric Row Content Type |\n| Rubric | Rubric Content Type |\n| Other | Other Content Type |\n"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n- goalId\n\n**Since**: 3900.62.00"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Goals",
      "description": "Blackboard Learn goals API provides endpoints for managing goals related operations."
    },
    "endpoint": {
      "name": "GetGoals",
      "description": "Returns a list of Goals.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
      "method": "get",
      "path": "/learn/api/public/v1/goals",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "categoryId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by category id.\n\n**Since**: 3900.53.0"
        },
        {
          "name": "goalSetId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal set id.\n\n**Since**: 3900.53.0"
        },
        {
          "name": "type",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal type.\n\n**Since**: 3900.53.0"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n- title\n\n**Since**: 3900.53.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Goals",
      "description": "Blackboard Learn goals API provides endpoints for managing goals related operations."
    },
    "endpoint": {
      "name": "GetGoalsSets",
      "description": "Returns a list of Goal Sets.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
      "method": "get",
      "path": "/learn/api/public/v1/goals/sets",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.53.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Goals",
      "description": "Blackboard Learn goals API provides endpoints for managing goals related operations."
    },
    "endpoint": {
      "name": "GetGoalsSetsTypes",
      "description": "Returns a list of Goals Set Types.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
      "method": "get",
      "path": "/learn/api/public/v1/goals/sets/types",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Goals",
      "description": "Blackboard Learn goals API provides endpoints for managing goals related operations."
    },
    "endpoint": {
      "name": "GetGoalsSets",
      "description": "Returns the Goal Set specified by Id.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
      "method": "get",
      "path": "/learn/api/public/v1/goals/sets/{goalSetId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Goals",
      "description": "Blackboard Learn goals API provides endpoints for managing goals related operations."
    },
    "endpoint": {
      "name": "GetGoalsSetsCategories",
      "description": "Returns a list of Categories for a given Goal Set.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
      "method": "get",
      "path": "/learn/api/public/v1/goals/sets/{goalSetId}/categories",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Goals",
      "description": "Blackboard Learn goals API provides endpoints for managing goals related operations."
    },
    "endpoint": {
      "name": "GetGoalsSetsCategories",
      "description": "Returns the Goal Set Category specified by Id.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
      "method": "get",
      "path": "/learn/api/public/v1/goals/sets/{goalSetId}/categories/{goalSetCategoryId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Goals",
      "description": "Blackboard Learn goals API provides endpoints for managing goals related operations."
    },
    "endpoint": {
      "name": "GetGoalsSetsCategoriesGoals",
      "description": "Returns a list of Goals from a Goal Set and Category\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
      "method": "get",
      "path": "/learn/api/public/v1/goals/sets/{goalSetId}/categories/{goalSetCategoryId}/goals",
      "pathParameters": [
        {
          "name": "goalSetId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal set id.\n\n**Since**: 3900.53.0"
        }
      ],
      "queryParameters": [
        {
          "name": "recursive",
          "type": "boolean",
          "description": "Search for child goals recursively. A value of 'true' return all top-level goals and any descendant goals. A value of 'false', only top-level goals are returned and this is the default behavior.\n\n**Since**: 3900.53.0"
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by category id.\n\n**Since**: 3900.53.0"
        },
        {
          "name": "type",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal type.\n\n**Since**: 3900.53.0"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n- title\n\n**Since**: 3900.53.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Goals",
      "description": "Blackboard Learn goals API provides endpoints for managing goals related operations."
    },
    "endpoint": {
      "name": "GetGoals",
      "description": "Returns the Goal specified by Id.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
      "method": "get",
      "path": "/learn/api/public/v1/goals/{goalId}",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>category</li><li>goalSet</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Goals",
      "description": "Blackboard Learn goals API provides endpoints for managing goals related operations."
    },
    "endpoint": {
      "name": "GetGoalsAlignments",
      "description": "Returns a list of Goal Alignments.\n\nThe 'system.goal.align.VIEW' entitlement is required.\n\n**Since**: 3900.62.00",
      "method": "get",
      "path": "/learn/api/public/v1/goals/{goalId}/alignments",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by course id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "blogId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by blog id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by course content id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by discussion id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "gradebookColumnId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by gradebook column id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "messageId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by message/thread id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "questionId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by assessment/question id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "resourceId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by resource id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "reference",
          "type": "string",
          "description": "Optional search criteria parameter to filter by reference.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "rubricRowId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by rubric row id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by rubric id.\n\n**Since**: 3900.62.00"
        },
        {
          "name": "type",
          "type": "string",
          "description": "Optional search criteria parameter to filter by type.\n\n**Since**: 3900.62.00\n\n\n| Type      | Description\n | --------- | --------- |\n| Blog | Blog Content Type |\n| CourseContent | Course Content Type |\n| ContentCollectionResource | Content Collection Resourse Type |\n| Discussion | Discussion Content Type |\n| DiscussionThread | Message/Thread Content Type |\n| Assessment | Assessment/Question Content Type |\n| GradebookColumn | Gradebook Column Content Type |\n| RubricRow | Rubric Row Content Type |\n| Rubric | Rubric Content Type |\n| Other | Other Content Type |\n"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n- goalId\n\n**Since**: 3900.62.00"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Goals",
      "description": "Blackboard Learn goals API provides endpoints for managing goals related operations."
    },
    "endpoint": {
      "name": "GetGoalsChildren",
      "description": "Returns the list of Children Goals from the specified Parent Goal.\n\nThe 'system.learningstandards.VIEW' entitlement is required.\n\n**Since**: 3900.53.0",
      "method": "get",
      "path": "/learn/api/public/v1/goals/{goalId}/children",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "categoryId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by category id.\n\n**Since**: 3900.53.0"
        },
        {
          "name": "goalSetId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal set id.\n\n**Since**: 3900.53.0"
        },
        {
          "name": "type",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal type.\n\n**Since**: 3900.53.0"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n- title\n\n**Since**: 3900.53.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "GetCoursesNodes",
      "description": "Obtains a list of nodes to which a given course is directly associated.\n\nUsers with the 'system.multiinst.node.course.association.VIEW' entitlement and the 'system.multiinst.node.org.association.VIEW' system entitlement can access all node association information.\n\n**Since**: 3800.10.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/nodes",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>node</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "GetInstitutionalhierarchyNodes",
      "description": "Returns the Top-level institutional hierarchy nodes\n\nEntitlement system.multiinst.hierarchy.manager.VIEW required\n\nUsers with entitlement \"system.multiinst.hierarchy.manager.VIEW\" for Node management can view all fields.\n\n**Since**: 3800.10.0",
      "method": "get",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "recursive",
          "type": "boolean",
          "description": "Search Institutional Hierarchy Nodes recursively. If true, returns all descendant nodes of the specified Node. If false, only immediate children are returned (defualt: false)\n\n**Since**: 3800.14.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "PostInstitutionalhierarchyNodes",
      "description": "Creates a new institutional hierarchy node\n\nEntitlement system.multiinst.hierarchy.manager.CREATE required\n\nUsers with entitlement \"system.multiinst.hierarchy.manager.CREATE\" for Node management can create a new Node.\n\n**Since**: 3800.15.0",
      "method": "post",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "GetInstitutionalhierarchyNodes",
      "description": "Returns the institutional hierarchy node corresponding the provided ID\n\nEntitlement system.multiinst.hierarchy.manager.VIEW required\n\nUsers with entitlement \"system.multiinst.hierarchy.manager.VIEW\" for Node management can view all fields.\n\n**Since**: 3800.10.0",
      "method": "get",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "DeleteInstitutionalhierarchyNodes",
      "description": "Deletes an institutional hierarchy node. The root node cannot be deleted. This deletes orphan children in a cascading fashion.\n\nThe 'system.multiinst.hierarchy.manager.DELETE' entitlement is required.\n\n**Since**: 3800.15.0",
      "method": "delete",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "PatchInstitutionalhierarchyNodes",
      "description": "Updates Institutional Hierarchy Node information.\n\nIf parentId is sent a move node task would be processed on background, this returns a location header where this task status can be consulted.\n\nEntitlement system.multiinst.hierarchy.manager.MODIFY is required\n\n**Since**: 3800.15.0",
      "method": "patch",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "GetInstitutionalhierarchyNodesChildren",
      "description": "Returns the children of the institutional hierarchy node corresponding to the provided ID\n\nEntitlement system.multiinst.hierarchy.manager.VIEW required\n\nUsers with entitlement \"system.multiinst.hierarchy.manager.VIEW\" for Node management can view all fields.\n\n**Since**: 3800.10.0",
      "method": "get",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/children",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "recursive",
          "type": "boolean",
          "description": "Search Institutional Hierarchy Nodes recursively. If true, returns all descendant nodes of the specified Node. If false, only immediate children are returned (defualt: false)\n\n**Since**: 3800.14.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "PostInstitutionalhierarchyNodesChildren",
      "description": "Create a new institutional hierarchy node whose parent corresponds to the supplied nodeId\n\nEntitlement system.multiinst.hierarchy.manager.CREATE required\n\nUsers with entitlement \"system.multiinst.hierarchy.manager.CREATE\" for Node management can create a new Node.\n\n**Since**: 3800.15.0",
      "method": "post",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/children",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "GetInstitutionalhierarchyNodesCourses",
      "description": "Returns a list of node-course relationships for the specified node.\n\nUsers with the 'system.multiinst.node.course.association.VIEW' entitlement and the 'system.multiinst.node.org.association.VIEW' system entitlement can access all node association information.\n\n**Since**: 3800.10.0",
      "method": "get",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/courses",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>course</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "PutInstitutionalhierarchyNodesCourses",
      "description": "Creates a node-course relationship for the specified node and course.\n\nUsers with the 'system.multiinst.node.course.association.CREATE' entitlement can create Course - Hierarchy Node associations. Users with the 'system.multiinst.node.org.association.CREATE' entitlement can create Organization - Hierarchy Node associations\n\n**Since**: 3800.17.0",
      "method": "put",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/courses/{courseId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "DeleteInstitutionalhierarchyNodesCourses",
      "description": "Deletes the association between a given Node and a Course\n\nEntitlement system.multiinst.node.course.association.DELETE required to delete Node-Course associations Entitlement system.multiinst.node.org.association.DELETE required to delete Node-Organization associations\n\n**Since**: 3800.17.0",
      "method": "delete",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/courses/{courseId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "PatchInstitutionalhierarchyNodesCourses",
      "description": "Update a specified node-course association.\n\nUsers with the 'system.multiinst.node.course.association.CREATE' entitlement can update Course - Hierarchy Node associations Users with the 'system.multiinst.node.org.association.CREATE' entitlement can update Organization - Hierarchy Node associations\n\n**Since**: 3800.17.0",
      "method": "patch",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/courses/{courseId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "GetInstitutionalhierarchyNodesTools",
      "description": "Returns a list of tools associated to a node\n\nEntitlement system.multiinst.node.tools.MODIFY required\n\nUsers with entitlement \"system.multiinst.node.tools.MODIFY\" for Node management can make use of this Endpoint.\n\n**Since**: 3900.16.0",
      "method": "get",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/tools/{toolType}",
      "pathParameters": [
        {
          "name": "toolType",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "PatchInstitutionalhierarchyNodesTools",
      "description": "Modifies a tool related to a specific node and tool type. The modified tool is returned if modification runs succesfuly\n\nEntitlements system.multiinst.node.tools.MODIFY and system.multiinst.node.tools.lock.override.MODIFY are required\n\nUsers with entitlement \"system.multiinst.node.tools.MODIFY\" and \"system.multiinst.node.tools.lock.override.MODIFY\" for Node management can make use of this Endpoint.\n\n**Since**: 3900.16.0",
      "method": "patch",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/tools/{toolType}/{toolId}",
      "pathParameters": [
        {
          "name": "toolType",
          "type": "string",
          "description": ""
        },
        {
          "name": "toolId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [
        {
          "name": "updateExistingOriginalCourses",
          "type": "boolean",
          "description": "Scope of updated Tool Settings. By default if the parameter is not present or is set as false, the updated settings will be applied to new Original courses and all Ultra courses (new and existing). If present and value is true, the updated settings will be applied to all new and existing courses (Original and Ultra).\n\n**Since**: 3900.16.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "GetInstitutionalhierarchyNodesUsers",
      "description": "Returns a list of node-user relationships for the specified node.\n\nUsers with the 'system.multiinst.node.user.association.VIEW' entitlement can access all node association information.\n\n**Since**: 3900.8.0",
      "method": "get",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/users",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "PutInstitutionalhierarchyNodesUsers",
      "description": "Creates the association between a given Node and a User.\n\nEntitlement 'system.multiinst.node.user.association.CREATE' is required.\n\n**Since**: 3900.8.0",
      "method": "put",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "DeleteInstitutionalhierarchyNodesUsers",
      "description": "Deletes the association between a given Node and a User.\n\nEntitlement 'system.multiinst.node.user.association.DELETE' is required.\n\n**Since**: 3900.8.0",
      "method": "delete",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy",
      "description": "Blackboard Learn institutional hierarchy API provides endpoints for managing institutional hierarchy related operations."
    },
    "endpoint": {
      "name": "GetUsersNodes",
      "description": "Obtains the Institutional Hierarchy Nodes associated to a User.\n\nEntitlement system.multiinst.node.user.association.VIEW is required\n\n**Since**: 3900.8.0",
      "method": "get",
      "path": "/learn/api/public/v1/users/{userId}/nodes",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>node</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy administrators",
      "description": "Blackboard Learn institutional hierarchy administrators API provides endpoints for managing institutional hierarchy administrators related operations."
    },
    "endpoint": {
      "name": "GetInstitutionalhierarchyNodesAdmins",
      "description": "Lists all the Administrators from an Institutional Hierarchy Node.\n\nThe 'system.multiinst.node.admin.association.VIEW' entitlement is required.\n\n**Since**: 3900.37.0",
      "method": "get",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/admins",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- userId\n\n**Since**: 3900.37.0"
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy administrators",
      "description": "Blackboard Learn institutional hierarchy administrators API provides endpoints for managing institutional hierarchy administrators related operations."
    },
    "endpoint": {
      "name": "GetInstitutionalhierarchyNodesAdmins",
      "description": "Gets information of the specified user as an administrator of the specified node.\n\nThe 'system.multiinst.node.admin.association.VIEW' entitlement is required.\n\n**Since**: 3900.37.0",
      "method": "get",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/admins/{userId}",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy administrators",
      "description": "Blackboard Learn institutional hierarchy administrators API provides endpoints for managing institutional hierarchy administrators related operations."
    },
    "endpoint": {
      "name": "PutInstitutionalhierarchyNodesAdmins",
      "description": "Create an association between the specified user as an administrator and the specified node with the provided system roles, giving a <strong>201 CREATED</strong> status code as a result. If the association already exists, system roles are updated giving a <strong>200 OK</strong> code as a result. Custom roles are supported, also by adding ´:custom´ as role sufix, for example 'aCustomRole:custom'. This sufix helps to distinguish custom roles with same name as system-created roles, for example: 'SystemSupport:custom' would be taken as a custom role, otherwise will be taken as System Support role. Non-administrative system roles (Guest, Integration, User/None, Observer) are not supported. </p> User with 'system.multiinst.node.admin.association.shared.roles.CREATE' entitlement are able to create associations on nodes where they are currently administrators and only with System Roles they already have. </p> User with 'system.multiinst.node.admin.association.all.roles.CREATE' entitlement can assign any administrators to any nodes without restrictions and with any amount of administrative System Roles.\n\n**Since**: 3900.37.0",
      "method": "put",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/admins/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Institutional hierarchy administrators",
      "description": "Blackboard Learn institutional hierarchy administrators API provides endpoints for managing institutional hierarchy administrators related operations."
    },
    "endpoint": {
      "name": "DeleteInstitutionalhierarchyNodesAdmins",
      "description": "Removes an user as node administrator.\n\nThe 'system.multiinst.node.admin.association.DELETE' entitlement is required.\n\n**Since**: 3900.37.0",
      "method": "delete",
      "path": "/learn/api/public/v1/institutionalHierarchy/nodes/{nodeId}/admins/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Lti",
      "description": "Blackboard Learn lti API provides endpoints for managing lti related operations."
    },
    "endpoint": {
      "name": "GetLtiDomains",
      "description": "This endpoint returns the list of LTI domain configs\n\nNo entitlements required to view the data exposed by this endpoint (Since: 3900.46.0)\n\nEntitlement system.administration.VIEW required for versions 3900.45.0 and before\n\n**Since**: 3300.9.0",
      "method": "get",
      "path": "/learn/api/public/v1/lti/domains",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Lti",
      "description": "Blackboard Learn lti API provides endpoints for managing lti related operations."
    },
    "endpoint": {
      "name": "PostLtiDomains",
      "description": "Creates an LTI Domain Config.\n\nThe 'system.administration.VIEW' entitlement is needed to create a domain.\n\n**Since**: 3300.9.0",
      "method": "post",
      "path": "/learn/api/public/v1/lti/domains",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Lti",
      "description": "Blackboard Learn lti API provides endpoints for managing lti related operations."
    },
    "endpoint": {
      "name": "GetLtiDomains",
      "description": "This endpoint returns the LTI domain config with the specified Id\n\nNo entitlements required to view the data exposed by this endpoint (Since: 3900.46.0)\n\nEntitlement system.administration.VIEW required for versions 3900.45.0 and before\n\n**Since**: 3300.9.0",
      "method": "get",
      "path": "/learn/api/public/v1/lti/domains/{domainId}",
      "pathParameters": [
        {
          "name": "domainId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Lti",
      "description": "Blackboard Learn lti API provides endpoints for managing lti related operations."
    },
    "endpoint": {
      "name": "DeleteLtiDomains",
      "description": "Deletes an LTI Domain Config.\n\nThe 'system.administration.VIEW' entitlement is needed to delete a domain.\n\n**Since**: 3300.9.0",
      "method": "delete",
      "path": "/learn/api/public/v1/lti/domains/{domainId}",
      "pathParameters": [
        {
          "name": "domainId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Lti",
      "description": "Blackboard Learn lti API provides endpoints for managing lti related operations."
    },
    "endpoint": {
      "name": "PatchLtiDomains",
      "description": "Updates an LTI Domain Config.\n\nThe 'system.administration.VIEW' entitlement is needed to update a domain.\n\n**Since**: 3300.9.0",
      "method": "patch",
      "path": "/learn/api/public/v1/lti/domains/{domainId}",
      "pathParameters": [
        {
          "name": "domainId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Lti",
      "description": "Blackboard Learn lti API provides endpoints for managing lti related operations."
    },
    "endpoint": {
      "name": "GetLtiPlacements",
      "description": "Returns a list of LTI placements\n\nSupports the standard paging and sorting query parameters, with a maximum page size of 1000.\n\n**Since**: 3300.0.0",
      "method": "get",
      "path": "/learn/api/public/v1/lti/placements",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "handle",
          "type": "string",
          "description": "Search for placements with handle properties that contain this value.\n\n**Since**: 3200.12.0"
        },
        {
          "name": "name",
          "type": "string",
          "description": "Search for placements with name properties that contain this value.\n\n**Since**: 3200.12.0"
        },
        {
          "name": "type",
          "type": "string",
          "description": "Search for placements with type properties that contain this value.\n\n**Since**: 3200.12.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Application | Application or Student Tool Placement |\n| ContentHandler | Content Type placement |\n| ContentItemMessage | Content-item Message placement (see IMSGlobal spec)  **Since**: 3300.5.0 |\n| System | System-level Tools |\n| Administrator | Administrator-level Tools  **Since**: 3400.1.0 |\n| UltraUI | Ultra-UI Extensions  **Since**: 3700.6.0 |\n| BaseNavigation | Base Navigation |\n| CourseNavigation | Course Navigation |\n| Proctoring | Proctoring  **Since**: 3900.10.0 |\n| CloudDocument | Cloud Document Type Placement  **Since**: 3900.34.0 |\n| AssetProcessor | Asset Processor Type Placement |\n| OpenBadgeProvider | OpenBadge Provider Type Placement |\n| Eulalaunch | EULA Launch Type Placement |\n"
        },
        {
          "name": "authorId",
          "type": "string",
          "description": "Search for placements with author ID properties that contain this value.\n\n**Since**: 3200.12.0\n\n**Deprecated**: since 3900.0.0; Field was never used and has been removed"
        },
        {
          "name": "courseId",
          "type": "string",
          "description": "Search for LTI placements that are available for this course. Note this only applies to Application, ContentHandler, and ContentItemMessage types currently\n\n**Since**: 3900.0.0"
        },
        {
          "name": "domainId",
          "type": "string",
          "description": "Search for LTI placements that are associated to a specific domainId\n\n**Since**: 3900.46.0"
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for placements with a specific availability value\n\n**Since**: 3900.46.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\"\n\n**Since**: 3100.0.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Lti",
      "description": "Blackboard Learn lti API provides endpoints for managing lti related operations."
    },
    "endpoint": {
      "name": "PostLtiPlacements",
      "description": "Creates an LTI placement\n\nThe 'system.administration.VIEW' entitlement is required to create placements\n\n**Since**: 3300.0.0",
      "method": "post",
      "path": "/learn/api/public/v1/lti/placements",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Lti",
      "description": "Blackboard Learn lti API provides endpoints for managing lti related operations."
    },
    "endpoint": {
      "name": "GetLtiPlacements",
      "description": "Returns the LTI placement with the specified Id\n\n**Since**: 3300.0.0",
      "method": "get",
      "path": "/learn/api/public/v1/lti/placements/{placementId}",
      "pathParameters": [
        {
          "name": "placementId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Lti",
      "description": "Blackboard Learn lti API provides endpoints for managing lti related operations."
    },
    "endpoint": {
      "name": "DeleteLtiPlacements",
      "description": "Deletes an LTI placement with the specified Id\n\nThe 'system.administration.VIEW' entitlement is required to delete placements\n\n**Since**: 3300.0.0",
      "method": "delete",
      "path": "/learn/api/public/v1/lti/placements/{placementId}",
      "pathParameters": [
        {
          "name": "placementId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Lti",
      "description": "Blackboard Learn lti API provides endpoints for managing lti related operations."
    },
    "endpoint": {
      "name": "PatchLtiPlacements",
      "description": "Updates an LTI placement with the given Id\n\nThe 'system.administration.VIEW' entitlement is required to update placements\n\n**Since**: 3300.0.0",
      "method": "patch",
      "path": "/learn/api/public/v1/lti/placements/{placementId}",
      "pathParameters": [
        {
          "name": "placementId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Performance dashboard",
      "description": "Blackboard Learn performance dashboard API provides endpoints for managing performance dashboard related operations."
    },
    "endpoint": {
      "name": "GetCoursesPerformanceContentreviewstatus",
      "description": "List the content review statuses for all the users enrolled in a course. Users calling this endpoint must have the following entitlement: this entitlement check.\n\n- {@code course.performance.dashboard.VIEW}\n\n**Since**: 3700.15.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/performance/contentReviewStatus",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "userId",
          "type": "string",
          "description": "Optional search criteria to filter by user id.\n\n**Since**: 3700.15.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Performance scale",
      "description": "Blackboard Learn performance scale API provides endpoints for managing performance scale related operations."
    },
    "endpoint": {
      "name": "GetCoursesSettingsGoalperformanceScale",
      "description": "Returns the list of the goal performance scale configuration.\n\nNo entitlement is required to use this endpoint.\n\n**Since**: 3900.105.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/settings/goalperformance/scale",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Proctoring",
      "description": "Blackboard Learn proctoring API provides endpoints for managing proctoring related operations."
    },
    "endpoint": {
      "name": "GetProctoringServices",
      "description": "Returns a list of proctoring services Supports the standard paging query parameters, with a maximum page size of 1000. No entitlement check is performed as this data is not restricted. Any secure fields such as keys/secrets are not included in the results.\n\n**Since**: 3500.6.0",
      "method": "get",
      "path": "/learn/api/public/v1/proctoring/services",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Proctoring",
      "description": "Blackboard Learn proctoring API provides endpoints for managing proctoring related operations."
    },
    "endpoint": {
      "name": "GetProctoringServices",
      "description": "Returns the proctoring service with the specified Id No entitlement check is performed as this data is not restricted. Any secure fields such as keys/secrets are not included in the results.\n\n**Since**: 3500.6.0",
      "method": "get",
      "path": "/learn/api/public/v1/proctoring/services/{proctoringServiceId}",
      "pathParameters": [
        {
          "name": "proctoringServiceId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Pronouns",
      "description": "Blackboard Learn pronouns API provides endpoints for managing pronouns related operations."
    },
    "endpoint": {
      "name": "GetPronouns",
      "description": "Returns a list of pronouns\n\nSupports the standard paging query parameters, with a maximum page size of 200.\n\n**Since**: 3900.26.0",
      "method": "get",
      "path": "/learn/api/public/v1/pronouns",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Pronouns",
      "description": "Blackboard Learn pronouns API provides endpoints for managing pronouns related operations."
    },
    "endpoint": {
      "name": "PostPronouns",
      "description": "Create a pronoun\n\nUsers with the 'system.pronouns.MODIFY' entitlement can create pronouns.\n\nPending pronouns created will be submitted to the System Administrator for approval and will not be immediately added to the list, regardless of entitlement.\n\n**Since**: 3900.26.0",
      "method": "post",
      "path": "/learn/api/public/v1/pronouns",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Pronouns",
      "description": "Blackboard Learn pronouns API provides endpoints for managing pronouns related operations."
    },
    "endpoint": {
      "name": "DeletePronouns",
      "description": "Delete a pronoun\n\nThe 'system.pronouns.MODIFY' entitlement is needed in order to delete the pronoun.\n\n**Since**: 3900.26.0",
      "method": "delete",
      "path": "/learn/api/public/v1/pronouns/{pronounId}",
      "pathParameters": [
        {
          "name": "pronounId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Pronouns",
      "description": "Blackboard Learn pronouns API provides endpoints for managing pronouns related operations."
    },
    "endpoint": {
      "name": "PatchPronouns",
      "description": "Update a pronoun\n\nThe 'system.pronouns.MODIFY' entitlement is needed in order to update the pronoun.\n\n**Since**: 3900.26.0",
      "method": "patch",
      "path": "/learn/api/public/v1/pronouns/{pronounId}",
      "pathParameters": [
        {
          "name": "pronounId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Roles",
      "description": "Blackboard Learn roles API provides endpoints for managing roles related operations."
    },
    "endpoint": {
      "name": "GetCourseroles",
      "description": "\n\nReturns a list of course roles.  This list will contain all the course roles the context user has access to see. </p>\n\nIf the context user has this entitlement, then the user can see all course roles:\n\n- system.enrollment.CREATE\n</p>\n\nOtherwise, at least one of these course role entitlements are checked for any course the context user is enrolled in:\n\n- course.user-enroll.EXECUTE\n- system.enrollment.CREATE\n- course.user-role.MODIFY\n</p>\n\nIf the logged in user has at least one of those course role entitlements for a Course where Course.organization = false, then the user can see course roles where Availability.Available = Course or CourseAndOrganization </p>\n\nIf the logged in user has any of those course role entitlements for a Course where Course.organization = true, then the user can see course roles where Availability.Available = Organization or CourseAndOrganization </p>\n\nNote that these entitlements will not grant the user the ability to create, modify or delete course roles without permission. </p>\n\n**Since**: 3300.5.0",
      "method": "get",
      "path": "/learn/api/public/v1/courseRoles",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\"\n\n**Since**: 3100.0.0"
        },
        {
          "name": "custom",
          "type": "boolean",
          "description": "Search course roles by whether they are a custom or system generated course role.\n\n**Since**: 3300.5.0"
        },
        {
          "name": "roleId",
          "type": "string",
          "description": "Search course roles using their roleId's.  Any course role with a roleId that contains the given string will be returned.  The search is case insensitive.\n\n**Since**: 3300.5.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Roles",
      "description": "Blackboard Learn roles API provides endpoints for managing roles related operations."
    },
    "endpoint": {
      "name": "GetCourseroles",
      "description": "\n\nReturns a single course role.  The path id can be either the CourseRole.id field like \"/courseRoles/_5_1\" or the CourseRole.roleId field like \"/courseRoles/roleId:Student\". </p>\n\nA 403 (FORBIDDEN) status is returned if the context user does not have access to see the course role. </p>\n\nIf the context user has this entitlement, then the user can see all course roles:\n\n- system.enrollment.CREATE\n</p>\n\nOtherwise, at least one of these course role entitlements are checked for any course the context user is enrolled in:\n\n- course.user-enroll.EXECUTE\n- system.enrollment.CREATE\n- course.user-role.MODIFY\n</p>\n\nIf the logged in user has at least one of those course role entitlements for a Course where Course.organization = false, then the user can see course roles where Availability.Available = Course or CourseAndOrganization </p>\n\nIf the logged in user has any of those course role entitlements for a Course where Course.organization = true, then the user can see course roles where Availability.Available = Organization or CourseAndOrganization </p>\n\nNote that these entitlements will not grant the user the ability to create, modify or delete course roles without permission. </p>\n\n**Since**: 3300.5.0",
      "method": "get",
      "path": "/learn/api/public/v1/courseRoles/{roleId}",
      "pathParameters": [
        {
          "name": "roleId",
          "type": "string",
          "description": "The course role ID.  This may be the primary ID, or the roleId. The suffix \":custom\" will be appended to the roleId of a custom course role if that roleId conflicts with the roleId of a system generated course role.  For example, if a custom role roleId is specified as \"Student\" then the roleId will actually be \"Student:custom\" since there is already a system generated course role with the roleId of \"Student\".  \n\n | ID type    | Examples                                                   |\n |------------|------------------------------------------------------------|\n | primary    | _123_1                                                     |\n | roleId     | roleId:Student, roleId:MyCustomRole, roleId:Student:custom |\n \n\n**Since**: 3300.5.0"
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Roles",
      "description": "Blackboard Learn roles API provides endpoints for managing roles related operations."
    },
    "endpoint": {
      "name": "GetInstitutionroles",
      "description": "Returns a list of institution roles.\n\nUsers must have the entitlement 'system.institutionrole.VIEW' to access this endpoint.\n\n**Since**: 3300.4.0",
      "method": "get",
      "path": "/learn/api/public/v1/institutionRoles",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"roleId(desc)\" Supported fields are:\n\n- roleId\n- custom\n\n**Since**: 3300.4.0"
        },
        {
          "name": "roleId",
          "type": "string",
          "description": "Search for institution roles with roleId properties that contain this value.\n\n**Since**: 3300.4.0"
        },
        {
          "name": "custom",
          "type": "boolean",
          "description": "Search for institution roles by custom flag.  A value of 'true' indicates that search results should be limited to only custom roles.  A value of 'false' indicates results should be limited to built-in roles.  Not setting this field indicates that all institution roles should be returned.\n\n**Since**: 3300.4.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Roles",
      "description": "Blackboard Learn roles API provides endpoints for managing roles related operations."
    },
    "endpoint": {
      "name": "GetInstitutionroles",
      "description": "Loads a specific institution role.\n\nUsers must have the entitlement 'system.institutionrole.VIEW' to access this endpoint.\n\n**Since**: 3300.4.0",
      "method": "get",
      "path": "/learn/api/public/v1/institutionRoles/{roleId}",
      "pathParameters": [
        {
          "name": "roleId",
          "type": "string",
          "description": "The institution role ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | roleId     | roleId:STUDENT                        |\n \n\n**Since**: 3300.5.0"
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Roles",
      "description": "Blackboard Learn roles API provides endpoints for managing roles related operations."
    },
    "endpoint": {
      "name": "GetSystemroles",
      "description": "Returns a list of system roles.\n\nUsers must have the 'system.systemrole.manager.VIEW' entitlement to access this endpoint.\n\n**Since**: 3300.5.0",
      "method": "get",
      "path": "/learn/api/public/v1/systemRoles",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "roleId",
          "type": "string",
          "description": "Search for system roles with roleId\n\n**Since**: 3300.5.0"
        },
        {
          "name": "custom",
          "type": "boolean",
          "description": "Search for system roles by custom flag.  A value of 'true' indicates that search results should be limited to only custom roles.  A value of 'false' indicates results should be limited to built-in roles.  Not setting this field indicates that all system roles should be returned.\n\n**Since**: 3300.5.0"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"roleId(desc)\"\n\nSupported fields are:\n\n<ul - roleId\n- custom\n\n**Since**: 3300.5.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Roles",
      "description": "Blackboard Learn roles API provides endpoints for managing roles related operations."
    },
    "endpoint": {
      "name": "GetSystemroles",
      "description": "Get a specific system role by roleId. See the roleId parameter for valid roleId formats.\n\nUsers must have the 'system.systemrole.manager.VIEW' entitlement to access this endpoint.\n\n**Since**: 3300.5.0",
      "method": "get",
      "path": "/learn/api/public/v1/systemRoles/{roleId}",
      "pathParameters": [
        {
          "name": "roleId",
          "type": "string",
          "description": "The System Role ID.  This may be the primary ID, or the secondary roleId type. The suffix \":custom\" will be appended to the roleId of a custom system role if that roleId conflicts with the roleId of a system generated role.  For example, if a custom role roleId is specified as \"Guest\" then the roleId will actually be \"Guest:custom\" since there is already a system generated role with the roleId of \"Guest\". \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | roleId     | roleId:column1                        |\n \n\n**Since**: 3300.5.0"
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubric associations",
      "description": "Blackboard Learn rubric associations API provides endpoints for managing rubric associations related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsRubricsAssociations",
      "description": "Returns the list of Rubric Associations related to the specified gradebook column within the specified course.\n\nUser must have the following entitlements in order to see the associations.\n\n- {@code course.rubrics.VIEW}\n- {@code course.gradebook-metadata.VIEW}\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.60.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/rubrics/associations",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubric associations",
      "description": "Blackboard Learn rubric associations API provides endpoints for managing rubric associations related operations."
    },
    "endpoint": {
      "name": "GetCoursesRubricsAssociations",
      "description": "Returns a list of rubric associations for a given course Id and rubric Id. If provided course Id is from an Original course, associations might include both Gradebook and Assessments entities. If provided course Id is from an Ultra course, only associations with Gradebook entities will be fetched.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.VIEW}\n\n**Since**: 3900.60.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\"\n\n**Since**: 3100.0.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubric associations",
      "description": "Blackboard Learn rubric associations API provides endpoints for managing rubric associations related operations."
    },
    "endpoint": {
      "name": "PostCoursesRubricsAssociations",
      "description": "Creates a rubric association for a given course Id, rubric Id and association entity Id (can be a gradebook column or question Id).\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.CREATE}\n\n**Since**: 3900.86.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubric associations",
      "description": "Blackboard Learn rubric associations API provides endpoints for managing rubric associations related operations."
    },
    "endpoint": {
      "name": "GetCoursesRubricsAssociations",
      "description": "Returns a rubric association for a given course Id, rubric Id and rubric association Id.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.VIEW}\n\n**Since**: 3900.60.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubric associations",
      "description": "Blackboard Learn rubric associations API provides endpoints for managing rubric associations related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesRubricsAssociations",
      "description": "Deletes a rubric association for a given course Id, rubric Id and rubric association Id.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.DELETE}\n\n**Since**: 3900.86.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubric associations",
      "description": "Blackboard Learn rubric associations API provides endpoints for managing rubric associations related operations."
    },
    "endpoint": {
      "name": "PatchCoursesRubricsAssociations",
      "description": "Updates a rubric association for a given course Id, rubric Id and rubric association Id. The associated entity cannot be changed through this endpoint. Use create and delete to move rubric associations entities.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.MODIFY}\n\n**Since**: 3900.86.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubric evaluations",
      "description": "Blackboard Learn rubric evaluations API provides endpoints for managing rubric evaluations related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsAttemptsRubricEvaluations",
      "description": "Returns the list of Rubric Evaluations related to the specified attempt.\n\nUser must have the following entitlement in order to see the evaluations.\n\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.69.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/attempts/{attemptId}/rubric/evaluations",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.69.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubric evaluations",
      "description": "Blackboard Learn rubric evaluations API provides endpoints for managing rubric evaluations related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsGroupattemptsRubricEvaluations",
      "description": "Returns the list of Rubric Evaluations related to the specified group attempt.\n\nUser must have the following entitlement in order to see the evaluations.\n\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.100.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/groupAttempts/{groupAttemptId}/rubric/evaluations",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.69.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubric evaluations",
      "description": "Blackboard Learn rubric evaluations API provides endpoints for managing rubric evaluations related operations."
    },
    "endpoint": {
      "name": "GetCoursesRubricsAssociationsEvaluations",
      "description": "Returns a list of rubric evaluations for a given course Id, rubric Id and rubric association Id.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.69.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}/evaluations",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.69.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubric evaluations",
      "description": "Blackboard Learn rubric evaluations API provides endpoints for managing rubric evaluations related operations."
    },
    "endpoint": {
      "name": "PostCoursesRubricsAssociationsEvaluations",
      "description": "Creates a rubric evaluation related with the given course Id, rubric Id, rubric association Id and evaluation Id. This endpoint only supports Ultra courses in Blackboard Learn.\n\nCreation require the selected scores for all rubric evaluation cells.\n\nUser must have the following entitlement in order to create the provided rubric evaluation.\n\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.89.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}/evaluations",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubric evaluations",
      "description": "Blackboard Learn rubric evaluations API provides endpoints for managing rubric evaluations related operations."
    },
    "endpoint": {
      "name": "GetCoursesRubricsAssociationsEvaluations",
      "description": "Returns a rubric evaluation for a given course Id, rubric Id, rubric association Id and evaluation Id.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.69.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}/evaluations/{rubricEvaluationId}",
      "pathParameters": [
        {
          "name": "rubricEvaluationId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>cells</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubric evaluations",
      "description": "Blackboard Learn rubric evaluations API provides endpoints for managing rubric evaluations related operations."
    },
    "endpoint": {
      "name": "PatchCoursesRubricsAssociationsEvaluations",
      "description": "Updates a rubric evaluation related with the given course Id, rubric Id, rubric association Id and evaluation Id. This endpoint only supports Ultra courses in Blackboard Learn.\n\nPartial update is allowed, it accepts 1 to all cells in the rubric evaluation body.\n\nUser must have the following entitlement in order to update the provided rubric evaluation.\n\n- {@code course.gradebook.MODIFY}\n\n**Since**: 3900.89.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}/associations/{rubricAssociationId}/evaluations/{rubricEvaluationId}",
      "pathParameters": [
        {
          "name": "rubricEvaluationId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubrics",
      "description": "Blackboard Learn rubrics API provides endpoints for managing rubrics related operations."
    },
    "endpoint": {
      "name": "GetCoursesRubrics",
      "description": "Returns a list of rubrics for a given course.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.VIEW}\n\n**Since**: 3900.46.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubrics",
      "description": "Blackboard Learn rubrics API provides endpoints for managing rubrics related operations."
    },
    "endpoint": {
      "name": "PostCoursesRubrics",
      "description": "Creates a new rubric for a given course. This endpoint only supports Ultra courses in Blackboard Learn.\n\nUser must have the following entitlement in order to create the rubric in the course.\n\n- {@code course.rubrics.CREATE}\n\n**Since**: 3900.89.0",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubrics",
      "description": "Blackboard Learn rubrics API provides endpoints for managing rubrics related operations."
    },
    "endpoint": {
      "name": "GetCoursesRubrics",
      "description": "Returns a rubric for a given course Id and a rubric Id.\n\nUser must have the following entitlement in order to see the provided course's rubrics.\n\n- {@code course.rubrics.VIEW}\n\n**Since**: 3900.46.0",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>cells</li><li>columns</li><li>rows</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubrics",
      "description": "Blackboard Learn rubrics API provides endpoints for managing rubrics related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesRubrics",
      "description": "Deletes a rubric for a given course. This endpoint only supports Ultra courses in Blackboard Learn.\n\nUser must have the following entitlement in order to delete the rubric in a course.\n\n- {@code course.rubrics.DELETE}\n\n**Since**: 3900.89.0",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Rubrics",
      "description": "Blackboard Learn rubrics API provides endpoints for managing rubrics related operations."
    },
    "endpoint": {
      "name": "PatchCoursesRubrics",
      "description": "Updates a rubric for a given course. This endpoint only supports Ultra courses in Blackboard Learn.\n\nUser must have the following entitlement in order to update the rubric in the course.\n\n- {@code course.rubrics.MODIFY}\n\n**Since**: 3900.89.0",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/rubrics/{rubricId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Sessions",
      "description": "Blackboard Learn sessions API provides endpoints for managing sessions related operations."
    },
    "endpoint": {
      "name": "GetLoginasSessions",
      "description": "List of historic login-as-user sessions in Learn.\n\nUsers with the following entitlement can view login as sessions:\n\n- system.user.impersonate.VIEW\n</p>\n\n**Since**: 3900.58.0",
      "method": "get",
      "path": "/learn/api/public/v1/loginAs/sessions",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Sessions",
      "description": "Blackboard Learn sessions API provides endpoints for managing sessions related operations."
    },
    "endpoint": {
      "name": "GetSessions",
      "description": "List active user sessions in Learn.\n\nUsers with the following entitlement can view others session:\n\n- system.user.sessions.VIEW\n</p>\n\nAlso with users with any of the following entitlements can view the users information using the expand param:\n\n- system.user.VIEW\n- user.VIEW\n</p>\n\n**Since**: 3800.4.0",
      "method": "get",
      "path": "/learn/api/public/v1/sessions",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "SIS Logs",
      "description": "Blackboard Learn SIS Logs API provides endpoints for managing sis logs related operations."
    },
    "endpoint": {
      "name": "GetLogsSisDatasets",
      "description": "\n\nReturns a list of SIS Integration logs. Users with 'system.dataintegrations.log.VIEW' entitlement can view these logs. </p> </p> NOTE: If integration is processing the feed file then 423 (LOCKED) will be returned as response.\n\n**Since**: 3200.0.1",
      "method": "get",
      "path": "/learn/api/public/v1/logs/sis/dataSets/{id}",
      "pathParameters": [
        {
          "name": "id",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "System",
      "description": "Blackboard Learn system API provides endpoints for managing system related operations."
    },
    "endpoint": {
      "name": "GetSystemInfo",
      "description": "Gets the values of Cloud settings that are needed for interacting with platform services.\n\n**Since**: 3900.56.0",
      "method": "get",
      "path": "/learn/api/public/v1/system/info",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "System",
      "description": "Blackboard Learn system API provides endpoints for managing system related operations."
    },
    "endpoint": {
      "name": "GetSystemPoliciesPrivacy",
      "description": "Returns the links to the Blackboard and Institution privacy policies\n\n**Since**: 3400.5.0",
      "method": "get",
      "path": "/learn/api/public/v1/system/policies/privacy",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "System",
      "description": "Blackboard Learn system API provides endpoints for managing system related operations."
    },
    "endpoint": {
      "name": "GetSystemTasks",
      "description": "Get the background task by the given task Id.\n\n**Since**: 3800.1.0",
      "method": "get",
      "path": "/learn/api/public/v1/system/tasks/{taskId}",
      "pathParameters": [
        {
          "name": "taskId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "System",
      "description": "Blackboard Learn system API provides endpoints for managing system related operations."
    },
    "endpoint": {
      "name": "GetSystemVersion",
      "description": "Gets the current Learn server version.\n\n**Since**: 3000.3.0",
      "method": "get",
      "path": "/learn/api/public/v1/system/version",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Terms",
      "description": "Blackboard Learn terms API provides endpoints for managing terms related operations."
    },
    "endpoint": {
      "name": "GetTerms",
      "description": "Returns a list of terms.\n\nProperties returned for each term will depend on whether or not the caller has one of the term entitlements.\n\nCallers without either the entitlements 'term.VIEW' or 'term.MODIFY' will always get a minimal set of core properties:\n\n- id\n- name\n- description\n- availability.*\n\nIf the user has one of the entitlements, they will also get the following properties:\n\n- externalId\n- dataSourceId\n\n**Since**: 3000.1.0",
      "method": "get",
      "path": "/learn/api/public/v1/terms",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "externalId",
          "type": "string",
          "description": "Search for term with externalId properties that contain this value.\n\n**Since**: 3100.6.0"
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for term with this dataSourceId.\n\n**Since**: 3100.6.0"
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for users with availability.available properties that contain this value.\n\n**Since**: 3100.6.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the term and the courses it contains. |\n| No | Students may not access the term or the courses it contains. |\n"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Terms",
      "description": "Blackboard Learn terms API provides endpoints for managing terms related operations."
    },
    "endpoint": {
      "name": "PostTerms",
      "description": "Creates a term.\n\nThe 'system.term.MODIFY' entitlement is needed.\n\n**Since**: 2015.11.0",
      "method": "post",
      "path": "/learn/api/public/v1/terms",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Terms",
      "description": "Blackboard Learn terms API provides endpoints for managing terms related operations."
    },
    "endpoint": {
      "name": "GetTerms",
      "description": "Loads a term.\n\nProperties returned will depend on whether or not the caller has one of the term entitlements.\n\nCallers without either the entitlements 'term.VIEW' or 'term.MODIFY' will always get a minimal set of core properties:\n\n- id\n- name\n- description\n- availability.*\n\nIf the user has one of the entitlements, they will also get the following properties:\n\n- externalId\n- dataSourceId\n\n**Since**: 2015.11.0",
      "method": "get",
      "path": "/learn/api/public/v1/terms/{termId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Terms",
      "description": "Blackboard Learn terms API provides endpoints for managing terms related operations."
    },
    "endpoint": {
      "name": "DeleteTerms",
      "description": "Deletes a term.\n\nThe 'system.term.MODIFY' entitlement is needed.\n\n**Since**: 2015.11.0",
      "method": "delete",
      "path": "/learn/api/public/v1/terms/{termId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Terms",
      "description": "Blackboard Learn terms API provides endpoints for managing terms related operations."
    },
    "endpoint": {
      "name": "PatchTerms",
      "description": "Updates a term.\n\nThe 'system.term.MODIFY' entitlement is needed.\n\n**Since**: 2015.11.0",
      "method": "patch",
      "path": "/learn/api/public/v1/terms/{termId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Uploads",
      "description": "Blackboard Learn uploads API provides endpoints for managing uploads related operations."
    },
    "endpoint": {
      "name": "PostUploads",
      "description": "Upload a file to temporary storage. The request is a multipart/form-data POST following RFC 1867. (https://www.ietf.org/rfc/rfc1867.txt)\n\nThe uploaded file will be scanned for potential security threats by the system's XSS filters. If the file is deemed as unsafe, the request will be rejected and an HTTP Status of 422 is returned.\n\nReturns an ID of the file reference, so it can be used for processing by a different service.\n\nExample Request: <pre> {@code curl -X POST -H 'Authorization: Bearer your_token' -F 'file=@/path/to/your/file' https://YOUR_LEARN_INSTANCE/learn/api/public/v1/uploads } </pre>\n\n**Since**: 3100.12.0",
      "method": "post",
      "path": "/learn/api/public/v1/uploads",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Uploads",
      "description": "Blackboard Learn uploads API provides endpoints for managing uploads related operations."
    },
    "endpoint": {
      "name": "GetUploadsSettings",
      "description": "Retrieve all settings of upload file service\n\n**Since**: 3900.41.0",
      "method": "get",
      "path": "/learn/api/public/v1/uploads/settings",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Users",
      "description": "Blackboard Learn users API provides endpoints for managing users related operations."
    },
    "endpoint": {
      "name": "GetUsers",
      "description": "Returns a list of users.\n\nAt least one of the entitlements 'system.user.VIEW' or 'user.VIEW' are needed.\n\nNote: Users with the 'SystemAdmin' role are only included in the results if the logged on user also has this role.\n\n**Since**: 3000.1.0",
      "method": "get",
      "path": "/learn/api/public/v1/users",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "userName",
          "type": "string",
          "description": "Search for users with userName properties that contain this value.\n\n**Since**: 3000.11.0"
        },
        {
          "name": "externalId",
          "type": "string",
          "description": "Search for users with externalId properties that contain this value.\n\n**Since**: 3000.11.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for users with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3000.11.0"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for users with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3700.1.0"
        },
        {
          "name": "lastLogin",
          "type": "string",
          "description": "Search for users with a last login date relative to this value.  'lastLoginCompare' may also be sent to control search behavior. A user who has never logged in would have a null last login date.  This is not considered to be greater than, less than, or equal to a valid date. Such users will be filtered out any time this filter is used.\n\n**Since**: 3900.9.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3000.11.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "lastLoginCompare",
          "type": "string",
          "description": "Used alongside the 'lastLoginDate' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for users with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3000.11.0"
        },
        {
          "name": "institutionRoleIds",
          "type": "ref",
          "description": "Search for users with the specified institutionRoleIds.  This may be a comma separated list of institution role ids.\n\n**Since**: 3900.61.0"
        },
        {
          "name": "name.family",
          "type": "string",
          "description": "Search for users with name.family properties that contain this value.\n\n**Since**: 3000.11.0"
        },
        {
          "name": "studentId",
          "type": "string",
          "description": "Search for users with the specified studentId.\n\n**Since**: 3900.80.00"
        },
        {
          "name": "contact.email",
          "type": "string",
          "description": "Search for users with the specified contact.email value. Only users with the entitlement \"system.user.properties.MODIFY\" are allowed to filter by this attribute, the query parameter is ignored otherwise.\n\n**Since**: 3900.80.00"
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for users with availability.available properties that contain this value.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| Disabled |   **Since**: 3100.0.0 |\n"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\" Supported fields are:\n\n- userName\n- name.family\n- externalId\n- dataSourceId\n- created\n\n**Since**: 3100.0.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Users",
      "description": "Blackboard Learn users API provides endpoints for managing users related operations."
    },
    "endpoint": {
      "name": "PostUsers",
      "description": "Creates a user.\n\nThe 'system.user.CREATE' entitlement is needed.\n\n**Since**: 2015.11.0",
      "method": "post",
      "path": "/learn/api/public/v1/users",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Users",
      "description": "Blackboard Learn users API provides endpoints for managing users related operations."
    },
    "endpoint": {
      "name": "GetUsers",
      "description": "Loads a user.\n\nProperties returned will depend on the caller's entitlements.\n\nCallers with the entitlement 'user.VIEW' will always get a minimal set of core properties:\n\n- id\n- name.given\n- name.family\n- name.middle\n- systemRoleIds\n\nDepending on the Learn administrator customizable user field display settings, as well as the target user's personal visibility settings, the following fields might also be included:\n\n- userName\n- educationLevel\n- gender\n- birthDate\n- name.other\n- name.suffix\n- name.title\n- job.*\n- contact.*\n- address.*\n\nCallers asking for their own user record get all fields listed above, plus:\n\n- locale.*\n\nAll user properties are provided to callers with one of the entitlements 'system.user.properties.MODIFY', 'system.useradmin.generic.VIEW', or 'system.user.VIEW'.\n\n**Since**: 2015.11.0",
      "method": "get",
      "path": "/learn/api/public/v1/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Users",
      "description": "Blackboard Learn users API provides endpoints for managing users related operations."
    },
    "endpoint": {
      "name": "DeleteUsers",
      "description": "Deletes a user.\n\nThe 'system.user.DELETE' entitlement is needed.\n\n**Since**: 2015.11.0",
      "method": "delete",
      "path": "/learn/api/public/v1/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Users",
      "description": "Blackboard Learn users API provides endpoints for managing users related operations."
    },
    "endpoint": {
      "name": "PatchUsers",
      "description": "Updates a user.\n\nCallers may update their own user record if they have the 'self.user.MODIFY' entitlement.  Updating other users requires the 'system.user.properties.MODIFY' entitlement.\n\nCertain properties may be edited by callers with more finely grained entitlements: \n\n | Field                  | Entitlements Required                               |\n |------------------------|-----------------------------------------------------|\n | systemRoleIds          | system.user.MODIFY, system.user-system-role.MODIFY  |\n | availability.available | system.user.MODIFY, system.user.availability.MODIFY |\n | password               | system.user.MODIFY, system.user-password.MODIFY     |\n \n\n**Since**: 2015.11.0",
      "method": "patch",
      "path": "/learn/api/public/v1/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Users",
      "description": "Blackboard Learn users API provides endpoints for managing users related operations."
    },
    "endpoint": {
      "name": "GetUsersAvatar",
      "description": "Gets a user's avatar image.\n\nThe response is an HTTP redirect rather then image raw data. It is up to the caller of the api to follow the redirect and download the image.\n\nThe redirect link returned is signed on behalf of the user of the API. It is expiring, so it is not recommended for bookmarking. The caller of this API is checked for permissions to see the requested user's resource.\n\n**Since**: 3800.10.0",
      "method": "get",
      "path": "/learn/api/public/v1/users/{userId}/avatar",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Users",
      "description": "Blackboard Learn users API provides endpoints for managing users related operations."
    },
    "endpoint": {
      "name": "GetUsersObservees",
      "description": "Returns a list of users being observed by a given user.\n\nThe 'observer.associations.VIEW' entitlement is needed as well as being able to view the provided user.\n\n**Since**: 3500.5.0",
      "method": "get",
      "path": "/learn/api/public/v1/users/{userId}/observees",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Users",
      "description": "Blackboard Learn users API provides endpoints for managing users related operations."
    },
    "endpoint": {
      "name": "GetUsersObservers",
      "description": "Returns a list of users observing a given user.\n\nThe 'observer.associations.VIEW' entitlement is needed as well as being able to view the provided user.\n\n**Since**: 3500.5.0",
      "method": "get",
      "path": "/learn/api/public/v1/users/{userId}/observers",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Users",
      "description": "Blackboard Learn users API provides endpoints for managing users related operations."
    },
    "endpoint": {
      "name": "PutUsersObservers",
      "description": "Creates an observer/observee association. The user identified by userId must not have the OBSERVER system role. Similarly, the user identified by observerId must have the OBSERVER system role.\n\nThe 'system.observer_user.CREATE' entitlement is needed as well as being able to view the provided users.\n\n**Since**: 3500.5.0",
      "method": "put",
      "path": "/learn/api/public/v1/users/{userId}/observers/{observerId}",
      "pathParameters": [
        {
          "name": "observerId",
          "type": "string",
          "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:jsmith                     |\n | userName   | userName:jsmith                       |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n \n\n**Since**: 3500.5.0"
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Users",
      "description": "Blackboard Learn users API provides endpoints for managing users related operations."
    },
    "endpoint": {
      "name": "DeleteUsersObservers",
      "description": "Removes an observer/observee association.\n\nThe 'system.observer_user.DELETE' entitlement is needed as well as being able to view the provided users.\n\n**Since**: 3500.5.0",
      "method": "delete",
      "path": "/learn/api/public/v1/users/{userId}/observers/{observerId}",
      "pathParameters": [
        {
          "name": "observerId",
          "type": "string",
          "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:jsmith                     |\n | userName   | userName:jsmith                       |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n \n\n**Since**: 3500.5.0"
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Users",
      "description": "Blackboard Learn users API provides endpoints for managing users related operations."
    },
    "endpoint": {
      "name": "GetUsersPronunciationaudio",
      "description": "Gets a user's pronunciation audio\n\nThe response is an HTTP redirect rather than an audio file. It is up to the caller of the api to follow the redirect and download the image.\n\nThe redirect link returned is signed on behalf of the user of the API. It is expiring, so it is not recommended for bookmarking. The caller of this API is checked for permissions to see the requested user's resource.\n\n**Since**: 3900.32.0",
      "method": "get",
      "path": "/learn/api/public/v1/users/{userId}/pronunciationAudio",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Users",
      "description": "Blackboard Learn users API provides endpoints for managing users related operations."
    },
    "endpoint": {
      "name": "GetUsersSessions",
      "description": "Displays active session information for a specific user.\n\nThe entitlement system.user.sessions.VIEW is needed to request a user's active sessions.\n\n**Since**: 3800.4.0",
      "method": "get",
      "path": "/learn/api/public/v1/users/{userId}/sessions",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course grades",
      "description": "Blackboard Learn deprecated - course grades API provides endpoints for managing deprecated - course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumns",
      "description": "Returns a list of grade columns.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed. Alternatively, student users may view the grade columns if they are enrolled in the course, and the mygrade tool is available in the course, and the columns are visible to the student. Observers may view grade columns if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.\n\nStudent or observer users may view a limited subset of grade column fields:\n\n- id\n- name\n- description\n- externalGrade\n- contentId\n- score.possible\n- grading.type\n- grading.due\n- grading.attemptsAllowed\n- grading.scoringModel\n- availability.available\n\n**Since**: 3000.3.0\n\n**Deprecated**: since 3200.10.0; use the v2 end-point instead",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "contentId",
          "type": "string",
          "description": "Search for grade columns associated with this content item.\n\n**Since**: 3000.11.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course grades",
      "description": "Blackboard Learn deprecated - course grades API provides endpoints for managing deprecated - course grades related operations."
    },
    "endpoint": {
      "name": "PostCoursesGradebookColumns",
      "description": "Create a manual grade column. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3000.7.0\n\n**Deprecated**: since 3200.10.0; use the v2 end-point instead",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course grades",
      "description": "Blackboard Learn deprecated - course grades API provides endpoints for managing deprecated - course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumns",
      "description": "Loads a specific grade column.\n\nThe entitlement \"course.gradebook.MODIFY\" is needed. Alternatively, student users may view the grade column if they are enrolled in the course, and the mygrade tool is available in the course, and the column is visible to the student. Observers may view the grade column if course access is allowed for observers and the associated observee is a student that satisfies all conditions required by a student user to view grade columns.\n\nStudent or observer users may view a limited subset of grade column fields:\n\n- id\n- name\n- description\n- externalGrade\n- contentId\n- score.possible\n- grading.type\n- grading.due\n- grading.attemptsAllowed\n- grading.scoringModel\n- availability.available\n\n**Since**: 3000.3.0\n\n**Deprecated**: since 3200.10.0; use the v2 end-point instead",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course grades",
      "description": "Blackboard Learn deprecated - course grades API provides endpoints for managing deprecated - course grades related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesGradebookColumns",
      "description": "Delete a specific grade column. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3000.7.0\n\n**Deprecated**: since 3200.10.0; use the v2 end-point instead",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course grades",
      "description": "Blackboard Learn deprecated - course grades API provides endpoints for managing deprecated - course grades related operations."
    },
    "endpoint": {
      "name": "PatchCoursesGradebookColumns",
      "description": "Update a manual grade column. The entitlement \"course.gradebook.MODIFY\" is needed.\n\n**Since**: 3000.7.0\n\n**Deprecated**: since 3200.10.0; use the v2 end-point instead",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course grades",
      "description": "Blackboard Learn deprecated - course grades API provides endpoints for managing deprecated - course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsAttempts",
      "description": "Returns a list of attempts associated with the specified grade column.\n\nThe 'course.gradebook.MODIFY' entitlement is needed to view column attempts. Alternatively, if the 'userId' query parameter is specified, and the user making the request matches the specified 'userId', then the user may view his/her own attempt.  When querying an anonymous grade column, if the release criteria has not yet been met, then the 'userId' attribute will not be populated for the returned column attempts.  If the release criteria has not been met and the 'userId' query parameter is specified, a 403 response is returned, unless the requesting user matches the specified 'userId' value.\n\nA subset of attempt properties are available to a student when requesting his or her own attempts:\n\n- id\n- userId\n- groupAttemptId\n- status\n- text\n- score\n- groupOverride\n- feedback\n- studentComments\n- studentSubmission\n- exempt\n- created\nWhen this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student's submission & comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student's submission & comments are visible to the API Gateway User.\n\nIf the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\nIf the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\n**Since**: 3100.4.0\n\n**Deprecated**: since 3300.0.0; use the v2 end-point instead",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/attempts",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "userId",
          "type": "string",
          "description": "Search for grade column attempts submitted by this user. This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:jsmith                     |\n | userName   | userName:jsmith                       |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n \n\n**Since**: 3100.4.0"
        },
        {
          "name": "attemptStatuses",
          "type": "string",
          "description": "Search for grade column attempts with one of these statuses.\n\n**Since**: 3100.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for attempts with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for attempts with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "attemptDate",
          "type": "string",
          "description": "Search for attempts with attempt date relative to this value. 'attemptDateCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0"
        },
        {
          "name": "attemptDateCompare",
          "type": "string",
          "description": "Used alongside the 'attemptDate' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course grades",
      "description": "Blackboard Learn deprecated - course grades API provides endpoints for managing deprecated - course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsAttempts",
      "description": "Loads the grade column attempt for the specified id.\n\nThe 'course.gradebook.MODIFY' entitlement is needed to view an attempt. Alternatively, if the user making the request is also the user associated with the attempt grade, then the user may view his/her own attempt.  When accessing an anonymous grade column attempt, if the release criteria has not yet been met, then the 'userId' attribute will not be populated for the returned attempt.\n\nA subset of attempt properties are available to a student when requesting his or her own attempt:\n\n- id\n- userId\n- groupAttemptId\n- status\n- text\n- score\n- groupOverride\n- feedback\n- studentComments\n- studentSubmission\n- exempt\n- created\nWhen this endpoint is called by the API Gateway User, the response will only contain attributes visible to a Grader. If an Attempt is InProgress, then a Student's submission & comments would not be visible to the API Gateway User. If an Attempt is NeedsGrading, then a Student's submission & comments are visible to the API Gateway User. </p> If the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure taking is enabled, and the attempt status is InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\nIf the caller has the course.assessment.EXECUTE entitlement, and the attempt is associated with an assessment where the flag to require secure reviewing is enabled, and the attempt status is not InProgress, then the studentSubmission is omitted unless the call comes from a secure browser.\n\n**Since**: 3100.4.0\n\n**Deprecated**: since 3300.0.0; use the v2 end-point instead",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/attempts/{attemptId}",
      "pathParameters": [
        {
          "name": "attemptId",
          "type": "string",
          "description": ""
        }
      ],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course grades",
      "description": "Blackboard Learn deprecated - course grades API provides endpoints for managing deprecated - course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsUsers",
      "description": "Returns a list of grades associated with the specified grade column.  This operation does not include 'ReadyToPost' grades when returning grade details for calculated grade columns.\n\nUsers with entitlement 'course.gradebook.MODIFY' can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \"403 - Forbidden.\"\n\nEnrolled users without the 'course.gradebook.MODIFY' entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \"403 - Forbidden.\".  A subset of grade properties are available to a student when requesting his or her own grades:\n\n- userId\n- columnId\n- status\n- text\n- score\n- exempt\n- feedback\n\n**Since**: 3000.3.0\n\n**Deprecated**: since 3300.0.0; use the v2 end-point instead",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/users",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course grades",
      "description": "Blackboard Learn deprecated - course grades API provides endpoints for managing deprecated - course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookColumnsUsers",
      "description": "Loads the grade column grade for a specific user.  If grade details have yet to be entered for the specified user, then no grade details will be included in the returned grade object.  This operation does not include 'ReadyToPost' grades when returning grade details for calculated grade columns.\n\nUsers with entitlement 'course.gradebook.MODIFY' can retrieve grades for any or all enrolled users. Requests for grades in a columns whose attempts are not visible to instructors will return with a status of \"403 - Forbidden.\"\n\nEnrolled users without the 'course.gradebook.MODIFY' entitlement may only view their own grade; such users cannot retrieve grades of other users.  A request for the grade in a columns that has been hidden from students in the gradebook will return with a status \"403 - Forbidden.\".  A subset of grade properties are available to a student when requesting his or her own grades:\n\n- userId\n- columnId\n- status\n- text\n- score\n- exempt\n- feedback\n\n**Since**: 3000.3.0\n\n**Deprecated**: since 3300.0.0; use the v2 end-point instead",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course grades",
      "description": "Blackboard Learn deprecated - course grades API provides endpoints for managing deprecated - course grades related operations."
    },
    "endpoint": {
      "name": "PatchCoursesGradebookColumnsUsers",
      "description": "Update the grade column grade for a specific user, including the text grade, score, instructor notes and feedback, and exempt status.  When updating text grade or score, the resulting grade is always marked as 'Posted'.  This end-point, currently, does not support marking the grade as 'ReadyToPost'.  Grade overrides may be cleared by either specifying the 'score' attribute as null, or the 'text'; attribute as null, '', or '-' in the body of the request. The entitlement 'course.gradebook.MODIFY' is required to perform this operation.\n\n**Since**: 3000.5.0\n\n**Deprecated**: since 3300.0.0; use the v2 end-point instead",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/columns/{columnId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course grades",
      "description": "Blackboard Learn deprecated - course grades API provides endpoints for managing deprecated - course grades related operations."
    },
    "endpoint": {
      "name": "GetCoursesGradebookUsers",
      "description": "Loads the course grades for a specific user.\n\nUsers with entitlement \"course.gradebook.MODIFY\" have read access to all the properties of the collection results.\n\nUsers without entitlement \"course.gradebook.MODIFY\" requesting grades for themselves (i.e., userId = current user id) have read access to a restricted subset of properties of the collections result. These are the properties available to a student when requesting his or her own grades:\n\n- userId\n- columnId\n- status\n- text\n- score\n- exempt\n- feedback\n\n**Since**: 3000.3.0\n\n**Deprecated**: since 3300.0.0; use the v2 end-point instead",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/gradebook/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course group users",
      "description": "Blackboard Learn deprecated - course group users API provides endpoints for managing deprecated - course group users related operations."
    },
    "endpoint": {
      "name": "GetCoursesGroupsUsers",
      "description": "Returns a list of group memberships objects for the specified group.\n\nCallers not enrolled in the group must have at least one of the following entitlements:\n\n- course.group.VIEW\n\n**Since**: 3100.6.0\n\n**Deprecated**: since 3600.0.0; use the v2 end-point instead",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/groups/{groupId}/users",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course group users",
      "description": "Blackboard Learn deprecated - course group users API provides endpoints for managing deprecated - course group users related operations."
    },
    "endpoint": {
      "name": "GetCoursesGroupsUsers",
      "description": "Loads a group membership in the specified group.\n\nCallers not enrolled in the group must have at least one of the following entitlements:\n\n- course.group.VIEW\n\n**Since**: 3100.6.0\n\n**Deprecated**: since 3600.0.0; use the v2 end-point instead",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/groups/{groupId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course group users",
      "description": "Blackboard Learn deprecated - course group users API provides endpoints for managing deprecated - course group users related operations."
    },
    "endpoint": {
      "name": "PutCoursesGroupsUsers",
      "description": "Creates a group membership in the specified group.\n\nMinimal entitlements required:\n\n- course.group.MODIFY\n\n**Since**: 3100.6.0\n\n**Deprecated**: since 3600.0.0; use the v2 end-point instead",
      "method": "put",
      "path": "/learn/api/public/v1/courses/{courseId}/groups/{groupId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course group users",
      "description": "Blackboard Learn deprecated - course group users API provides endpoints for managing deprecated - course group users related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesGroupsUsers",
      "description": "Deletes a group from the specified course.\n\nRequired entitlements:\n\n- course.group.MODIFY\n\n**Since**: 3100.6.0\n\n**Deprecated**: since 3600.0.0; use the v2 end-point instead",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/groups/{groupId}/users/{userId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course groups",
      "description": "Blackboard Learn deprecated - course groups API provides endpoints for managing deprecated - course groups related operations."
    },
    "endpoint": {
      "name": "GetCoursesGroups",
      "description": "Callers with the following entitlement can view all groups in the course:\n\n- course.groups.VIEW\nCallers enrolled in course can view all groups they're enrolled in, and all self-enrollment groups\n\n**Since**: 3100.5.0\n\n**Deprecated**: since 3800.6.0; use the v2 end-point instead.",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/groups",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- name\n- externalId\n\n**Since**: 3100.4.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course groups",
      "description": "Blackboard Learn deprecated - course groups API provides endpoints for managing deprecated - course groups related operations."
    },
    "endpoint": {
      "name": "PostCoursesGroups",
      "description": "Creates a group in the specified course.\n\nMinimal entitlements required:\n\n- course.group.CREATE\n\n**Since**: 3100.5.0\n\n**Deprecated**: since 3800.6.0; use the v2 end-point instead.",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/groups",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course groups",
      "description": "Blackboard Learn deprecated - course groups API provides endpoints for managing deprecated - course groups related operations."
    },
    "endpoint": {
      "name": "GetCoursesGroups",
      "description": "Loads a group in the specified course.\n\nEntitlement and field visibility rules are the same as those when loading the groups collection.\n\n**Since**: 3100.5.0\n\n**Deprecated**: since 3800.6.0; use the v2 end-point instead.",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}/groups/{groupId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course groups",
      "description": "Blackboard Learn deprecated - course groups API provides endpoints for managing deprecated - course groups related operations."
    },
    "endpoint": {
      "name": "DeleteCoursesGroups",
      "description": "Deletes a group from the specified course.\n\nRequired entitlements:\n\n- course.group.DELETE\n\n**Since**: 3100.5.0\n\n**Deprecated**: since 3800.6.0; use the v2 end-point instead.",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}/groups/{groupId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - course groups",
      "description": "Blackboard Learn deprecated - course groups API provides endpoints for managing deprecated - course groups related operations."
    },
    "endpoint": {
      "name": "PatchCoursesGroups",
      "description": "Updates a group in the specified course.\n\nMinimal entitlements required:\n\n- course.group.MODIFY\n\n**Since**: 3100.5.0\n\n**Deprecated**: since 3800.6.0; use the v2 end-point instead.",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}/groups/{groupId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - courses",
      "description": "Blackboard Learn deprecated - courses API provides endpoints for managing deprecated - courses related operations."
    },
    "endpoint": {
      "name": "GetCourses",
      "description": "Returns a list of courses and organizations.\n\nTo view disabled courses a user must have the entitlement 'system.course.VIEW'.\n\nUsers with the 'course.configure-properties.EXECUTE' entitlement can access all course properties.\n\nUsers enrolled in the course have read access to all properties except:\n\n- uuid\n- externalId\n- dataSourceId\n- created\n- allowGuests\n- enrollment.accessCode\n\nUsers who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:\n\n- id\n- courseId\n- name\n- description\n- organization\n- readOnly\n- termId\n- availability.available\n- availability.duration.type\n- availability.duration.start\n- availability.duration.end\n- availability.duration.daysOfUse\nWhen courses are child courses, parent course data is also returned to provide a complete data representation of course relationships.\n\nIf the course enrollment is self-enroll, all users can view the course as though they were enrolled.\n\n**Since**: 3000.1.0\n\n**Deprecated**: since 3400.8.0; use the v2 end-point instead",
      "method": "get",
      "path": "/learn/api/public/v1/courses",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Search for courses with courseId properties that contain this value.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "name",
          "type": "string",
          "description": "Search for courses with name properties that contain this value.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "description",
          "type": "string",
          "description": "Search for courses with description properties that contain this value.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "externalId",
          "type": "string",
          "description": "Search for courses with externalId properties that contain this value.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for courses with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "allowGuests",
          "type": "boolean",
          "description": "Search for courses which are configured to allow/disallow guest access, based on input.  Default: n/a (return courses regardless of guests allowed)\n\n**Since**: 3200.3.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Defaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for courses with availability.available properties that contain this value.\n\n**Since**: 3000.13.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the course. |\n| No | Students may not access the course. |\n| Disabled | Disabled by the SIS. Students may not access the course.  **Since**: 3100.0.0 |\n| Term | Availability is inherited from the term settings. Requires a termId be set. |\n"
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for courses with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0"
        },
        {
          "name": "termId",
          "type": "string",
          "description": "Search for courses with this termId.  This may optionally be the term's externalId using the syntax \"externalId:spring2015\".\n\n**Since**: 3100.0.0"
        },
        {
          "name": "organization",
          "type": "boolean",
          "description": "Search for courses by organization flag.  A value of 'true' indicates that search results should be limited to only Organizations.  A value of 'false' indicates results should be limited to Courses.  Not setting this field indicates that both Courses and Organizations should be returned.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc),created\" Supported fields are:\n\n- courseId\n- name\n- externalId\n- created\n\n**Since**: 3100.0.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - courses",
      "description": "Blackboard Learn deprecated - courses API provides endpoints for managing deprecated - courses related operations."
    },
    "endpoint": {
      "name": "PostCourses",
      "description": "Creates a course or organization.\n\nThe 'system.course.CREATE' entitlement is needed to create a course, while 'system.org.CREATE' is needed for an organization.\n\n**Since**: 2015.11.0\n\n**Deprecated**: since 3400.8.0; use the v2 end-point instead",
      "method": "post",
      "path": "/learn/api/public/v1/courses",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - courses",
      "description": "Blackboard Learn deprecated - courses API provides endpoints for managing deprecated - courses related operations."
    },
    "endpoint": {
      "name": "GetCourses",
      "description": "Loads a specific course or organization.\n\nTo view disabled courses a user must have the entitlement 'system.course.VIEW'.\n\nUsers with the 'course.configure-properties.EXECUTE' entitlement can access all course properties.\n\nUsers enrolled in the course have read access to all properties except:\n\n- uuid\n- externalId\n- dataSourceId\n- created\n- allowGuests\n- enrollment.accessCode\n\nUsers who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:\n\n- id\n- courseId\n- name\n- description\n- organization\n- readOnly\n- termId\n- availability.available\n- availability.duration.type\n- availability.duration.start\n- availability.duration.end\n- availability.duration.daysOfUse\nIf the course enrollment is self-enroll, all users can view the course as though they were enrolled.\n\n**Since**: 2015.11.0\n\n**Deprecated**: since 3400.8.0; use the v2 end-point instead",
      "method": "get",
      "path": "/learn/api/public/v1/courses/{courseId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - courses",
      "description": "Blackboard Learn deprecated - courses API provides endpoints for managing deprecated - courses related operations."
    },
    "endpoint": {
      "name": "DeleteCourses",
      "description": "Deletes a course or organization in synchronous fashion.\n\nThe 'system.course.DELETE' entitlement is needed to delete a course, while 'system.org.DELETE' is needed for an organization.\n\n**Since**: 2015.11.0\n\n**Deprecated**: since 3400.8.0; use the v2 end-point instead",
      "method": "delete",
      "path": "/learn/api/public/v1/courses/{courseId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - courses",
      "description": "Blackboard Learn deprecated - courses API provides endpoints for managing deprecated - courses related operations."
    },
    "endpoint": {
      "name": "PatchCourses",
      "description": "Updates a course or organization.\n\nTo update a course, the user must have either 'system.course|org.properties.MODIFY' or 'course.configure-properties.EXECUTE' entitlements.  However, if the user has the latter entitlement, then additional entitlements are needed to be able to update certain fields, as shown below: \n\n | Field                           | Entitlements Required                                                  |\n |---------------------------------|------------------------------------------------------------------------|\n | name                            | course.name.MODIFY                                                     |\n | description                     | course.name.MODIFY                                                     |\n | allowGuests                     | course.configure-guest-access.EXECUTE                                  |\n | enrollment.type                 | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.start                | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.end                  | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.accessCode           | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | availability.available          | course.configure-properties.EXECUTE, course.availability.MODIFY        |\n | locale.id                       | course.configure-properties.EXECUTE, course.locale.MODIFY              |\n | locale.force                    | course.configure-properties.EXECUTE, course.locale.MODIFY              |\n | availability.duration.type      | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.start     | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.end       | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.daysOfUse | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n \n\n**Since**: 2015.11.0\n\n**Deprecated**: since 3400.8.0; use the v2 end-point instead",
      "method": "patch",
      "path": "/learn/api/public/v1/courses/{courseId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - courses",
      "description": "Blackboard Learn deprecated - courses API provides endpoints for managing deprecated - courses related operations."
    },
    "endpoint": {
      "name": "PostCoursesCopy",
      "description": "Creates an exact copy of an existing Course into a new Course.\n\nUsers with entitlements 'system.course.copy.EXECUTE' can create a course copy. Users with entitlements 'system.org.copy.EXECUTE' can create an organization copy. All users's must also have 'course.content.copy.EXECUTE' entitlement associated with the specified source courseId.\n\n**Since**: 3300.0.0\n\n**Deprecated**: since 3800.0.0; use the v2 end-point instead.",
      "method": "post",
      "path": "/learn/api/public/v1/courses/{courseId}/copy",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - courses",
      "description": "Blackboard Learn deprecated - courses API provides endpoints for managing deprecated - courses related operations."
    },
    "endpoint": {
      "name": "GetCourses",
      "description": "Returns a list of courses and organizations.\n\nTo view disabled courses a user must have the entitlement 'system.course.VIEW'.\n\nUsers with the 'course.configure-properties.EXECUTE' course entitlement, or the 'system.course.properties.MODIFY' system entitlement can access all course properties.\n\nUsers enrolled in the course have read access to all properties except:\n\n- uuid\n- externalId\n- dataSourceId\n- created\n- allowGuests\n- enrollment.accessCode\n\nUsers who are not enrolled in the course and do not have associated entitlements only have read access to the following properties:\n\n- id\n- courseId\n- name\n- description\n- organization\n- readOnly\n- termId\n- availability.available\n- availability.duration.type\n- availability.duration.start\n- availability.duration.end\n- availability.duration.daysOfUse\nWhen courses are child courses, parent course data is also returned to provide a complete data representation of course relationships.\n\nIf the course enrollment is self-enroll, all users can view the course as though they were enrolled.\n\n**Since**: 3400.8.0\n\n**Deprecated**: since 3800.1.0; use the v3 end-point instead",
      "method": "get",
      "path": "/learn/api/public/v2/courses",
      "pathParameters": [],
      "queryParameters": [
        {
          "name": "modified",
          "type": "string",
          "description": "Search for courses with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3500.4.0"
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3500.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "courseId",
          "type": "string",
          "description": "Search for courses with courseId properties that contain this value.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "name",
          "type": "string",
          "description": "Search for courses with name properties that contain this value.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "description",
          "type": "string",
          "description": "Search for courses with description properties that contain this value.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "externalId",
          "type": "string",
          "description": "Search for courses with externalId properties that contain this value.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for courses with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "allowGuests",
          "type": "boolean",
          "description": "Search for courses which are configured to allow/disallow guest access, based on input.  Default: n/a (return courses regardless of guests allowed)\n\n**Since**: 3200.3.0"
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Defaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n"
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for courses with availability.available properties that contain this value.\n\n**Since**: 3000.13.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the course. |\n| No | Students may not access the course. |\n| Disabled | Disabled by the SIS. Students may not access the course.  **Since**: 3100.0.0 |\n| Term | Availability is inherited from the term settings. Requires a termId be set. |\n"
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for courses with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0"
        },
        {
          "name": "termId",
          "type": "string",
          "description": "Search for courses with this termId.  This may optionally be the term's externalId using the syntax \"externalId:spring2015\".\n\n**Since**: 3100.0.0"
        },
        {
          "name": "organization",
          "type": "boolean",
          "description": "Search for courses by organization flag.  A value of 'true' indicates that search results should be limited to only Organizations.  A value of 'false' indicates results should be limited to Courses.  Not setting this field indicates that both Courses and Organizations should be returned.\n\n**Since**: 3100.0.0"
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc),created\" Supported fields are:\n\n- courseId\n- name\n- externalId\n- created\n- modified\n\n**Since**: 3400.8.0"
        }
      ],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - courses",
      "description": "Blackboard Learn deprecated - courses API provides endpoints for managing deprecated - courses related operations."
    },
    "endpoint": {
      "name": "PostCourses",
      "description": "Creates a course or organization.\n\nThe 'system.course.CREATE' entitlement is needed to create a course, while 'system.org.CREATE' is needed for an organization.\n\n**Since**: 3400.8.0\n\n**Deprecated**: since 3800.1.0; use the v3 end-point instead",
      "method": "post",
      "path": "/learn/api/public/v2/courses",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - courses",
      "description": "Blackboard Learn deprecated - courses API provides endpoints for managing deprecated - courses related operations."
    },
    "endpoint": {
      "name": "GetCourses",
      "description": "Loads a specific course or organization.\n\nTo view disabled courses a user must have the entitlement 'system.course.VIEW'.\n\nUsers with the 'course.configure-properties.EXECUTE' entitlement can access all course properties.\n\nUsers enrolled in the course have read access to all properties except:\n\n- uuid\n- externalId\n- dataSourceId\n- created\n- allowGuests\n- enrollment.accessCode\n\nUsers with no access to the course only have read access to the following properties:\n\n- id\n- courseId\n- name\n- description\n- organization\n- closedComplete\n- termId\n- availability.available\n- availability.duration.type\n- availability.duration.start\n- availability.duration.end\n- availability.duration.daysOfUse\nIf the course enrollment is self-enroll, all users can view the course as though they were enrolled.\n\n**Since**: 3400.8.0\n\n**Deprecated**: since 3800.1.0; use the v3 end-point instead",
      "method": "get",
      "path": "/learn/api/public/v2/courses/{courseId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - courses",
      "description": "Blackboard Learn deprecated - courses API provides endpoints for managing deprecated - courses related operations."
    },
    "endpoint": {
      "name": "DeleteCourses",
      "description": "Deletes a course or organization in synchronous fashion.\n\nThe 'system.course.DELETE' entitlement is needed to delete a course, while 'system.org.DELETE' is needed for an organization.\n\n**Since**: 3400.8.0\n\n**Deprecated**: since 3800.1.0; use the v3 end-point instead",
      "method": "delete",
      "path": "/learn/api/public/v2/courses/{courseId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  },
  {
    "api": {
      "name": "Deprecated - courses",
      "description": "Blackboard Learn deprecated - courses API provides endpoints for managing deprecated - courses related operations."
    },
    "endpoint": {
      "name": "PatchCourses",
      "description": "Updates a course or organization.\n\nTo update a course, the user must have either 'system.course|org.properties.MODIFY' or 'course.configure-properties.EXECUTE' entitlements.  However, if the user has the latter entitlement, then additional entitlements are needed to be able to update certain fields, as shown below: \n\n | Field                           | Entitlements Required                                                  |\n |---------------------------------|------------------------------------------------------------------------|\n | name                            | course.name.MODIFY                                                     |\n | description                     | course.name.MODIFY                                                     |\n | allowGuests                     | course.configure-guest-access.EXECUTE                                  |\n | enrollment.type                 | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.start                | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.end                  | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | enrollment.accessCode           | course.configure-properties.EXECUTE, course.enrollment.MODIFY          |\n | availability.available          | course.configure-properties.EXECUTE, course.availability.MODIFY        |\n | locale.id                       | course.configure-properties.EXECUTE, course.locale.MODIFY              |\n | locale.force                    | course.configure-properties.EXECUTE, course.locale.MODIFY              |\n | availability.duration.type      | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.start     | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.end       | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n | availability.duration.daysOfUse | course.configure-properties.EXECUTE, course.configure-duration.EXECUTE |\n \n\n**Since**: 3400.8.0\n\n**Deprecated**: since 3800.1.0; use the v3 end-point instead",
      "method": "patch",
      "path": "/learn/api/public/v2/courses/{courseId}",
      "pathParameters": [],
      "queryParameters": [],
      "releaseStatus": "PUBLIC",
      "isMultipart": false
    }
  }
];
