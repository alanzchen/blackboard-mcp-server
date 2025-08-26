/**
 * Property definition in a type
 */
interface TypeProperty {
  /** Property name */
  name: string;
  /** Property type */
  type: string;
  /** Property description */
  description: string;
  /** Whether the property is read-only */
  readOnly: boolean;
  /** Whether the property is required */
  required: boolean;
  /** Array item type (if property is an array) */
  arrayType?: string;
  /** Whether this property represents a file path */
  isFile?: boolean;
}

/**
 * Type definition
 */
interface TypeDefinition {
  /** Type name */
  name: string;
  /** Type properties */
  properties: TypeProperty[];
}

/**
 * Type map
 */
interface TypeMap {
  /** Type definitions by request type */
  [key: string]: TypeDefinition[];
}

/**
 * Type map for all Blackboard Learn API request types
 */
export const typeMap: TypeMap = {
  "OauthAuthorizationCodeRequest": [
    {
      "name": "OauthAuthorizationCodeRequest",
      "properties": [
        {
          "name": "code_challenge",
          "type": "string",
          "description": "A code challenge to verify credentials along with the granted authorization code. It is used with the PKCE standard.\n\n**Since**: 3700.4.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "code_challenge_method",
          "type": "string",
          "description": "This is the method used to verify the code challenge using the PKCE standard. Blackboard only supports s256 as the code challenge method.\n\n**Since**: 3700.4.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "one_time_session_token",
          "type": "string",
          "description": "Token used to retrieve the session that generated this Oauth2 Code request. Used when session cookies are not sent due to privacy settings of the browser.\n\n**Since**: 3900.13.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "OauthRequestTokenRequest": [
    {
      "name": "OauthRequestTokenRequest",
      "properties": [
        {
          "name": "redirect_uri",
          "type": "string",
          "description": "The redirectUri to send the end user to once an access token response is made in Oauth2 Authorization Code Workflow\n\n**Since**: 3200.7.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "refresh_token",
          "type": "string",
          "description": "The refresh token granted for use by an application in Oauth2 Refresh Token Workflow\n\n**Since**: 3200.7.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "code_verifier",
          "type": "string",
          "description": "The code_verifier to be passed along with authorization code if PKCE standard was used to grant the authorization code.\n\n**Since**: 3700.4.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "OauthGetTokenInfoRequest": [
    {
      "name": "OauthGetTokenInfoRequest",
      "properties": []
    }
  ],
  "AdaptiveReleaseGetRulesRequest": [
    {
      "name": "AdaptiveReleaseGetRulesRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n- title\n\n**Since**: 3900.23.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "AdaptiveReleaseCreateRuleRequest": [
    {
      "name": "AdaptiveReleaseCreateRuleRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AdaptiveReleaseGetRuleRequest": [
    {
      "name": "AdaptiveReleaseGetRuleRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AdaptiveReleaseDeleteRuleRequest": [
    {
      "name": "AdaptiveReleaseDeleteRuleRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AdaptiveReleaseUpdateRuleRequest": [
    {
      "name": "AdaptiveReleaseUpdateRuleRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AdaptiveReleaseGetCriteriaRequest": [
    {
      "name": "AdaptiveReleaseGetCriteriaRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.23.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "AdaptiveReleaseCreateAdaptiveReleaseRuleCriteriaRequest": [
    {
      "name": "AdaptiveReleaseCreateAdaptiveReleaseRuleCriteriaRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AdaptiveReleaseGetAdaptiveReleaseRuleCriterionRequest": [
    {
      "name": "AdaptiveReleaseGetAdaptiveReleaseRuleCriterionRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "criterionId",
          "type": "string",
          "description": "Path parameter: criterionId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AdaptiveReleaseDeleteAdaptiveReleaseRuleCriterionRequest": [
    {
      "name": "AdaptiveReleaseDeleteAdaptiveReleaseRuleCriterionRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "criterionId",
          "type": "string",
          "description": "Path parameter: criterionId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AdaptiveReleaseUpdateAdaptiveReleaseRuleCriterionRequest": [
    {
      "name": "AdaptiveReleaseUpdateAdaptiveReleaseRuleCriterionRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "criterionId",
          "type": "string",
          "description": "Path parameter: criterionId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AdaptiveReleaseGetAdaptiveReleaseAclGroupPredicatesRequest": [
    {
      "name": "AdaptiveReleaseGetAdaptiveReleaseAclGroupPredicatesRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "criterionId",
          "type": "string",
          "description": "Path parameter: criterionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"groupId(desc)\" Supported fields are:\n\n- groupId\n\n**Since**: 3900.32.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "AdaptiveReleaseSetGroupPredicateListRequest": [
    {
      "name": "AdaptiveReleaseSetGroupPredicateListRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "criterionId",
          "type": "string",
          "description": "Path parameter: criterionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AdaptiveReleaseCreateGroupPredicateRequest": [
    {
      "name": "AdaptiveReleaseCreateGroupPredicateRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "criterionId",
          "type": "string",
          "description": "Path parameter: criterionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AdaptiveReleaseDeleteGroupPredicateRequest": [
    {
      "name": "AdaptiveReleaseDeleteGroupPredicateRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "criterionId",
          "type": "string",
          "description": "Path parameter: criterionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AdaptiveReleaseGetAdaptiveReleaseAclUserPredicatesRequest": [
    {
      "name": "AdaptiveReleaseGetAdaptiveReleaseAclUserPredicatesRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "criterionId",
          "type": "string",
          "description": "Path parameter: criterionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"userId(desc)\" Supported fields are:\n\n- userId\n\n**Since**: 3900.32.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "AdaptiveReleaseSetAdaptiveReleaseAclUsersPredicatesListRequest": [
    {
      "name": "AdaptiveReleaseSetAdaptiveReleaseAclUsersPredicatesListRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "criterionId",
          "type": "string",
          "description": "Path parameter: criterionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AdaptiveReleaseCreateAdaptiveReleaseAclUserPredicateRequest": [
    {
      "name": "AdaptiveReleaseCreateAdaptiveReleaseAclUserPredicateRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "criterionId",
          "type": "string",
          "description": "Path parameter: criterionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AdaptiveReleaseDeleteAclUserPredicateRequest": [
    {
      "name": "AdaptiveReleaseDeleteAclUserPredicateRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "ruleId",
          "type": "string",
          "description": "Path parameter: ruleId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "criterionId",
          "type": "string",
          "description": "Path parameter: criterionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AnnouncementsGetAnnouncementsRequest": [
    {
      "name": "AnnouncementsGetAnnouncementsRequest",
      "properties": [
        {
          "name": "creatorUserId",
          "type": "string",
          "description": "Search for announcements with creator user id equal to this value.\n\n**Since**: 3900.89.0.",
          "readOnly": false,
          "required": false
        },
        {
          "name": "creatorUsername",
          "type": "string",
          "description": "Search for announcements with creator username equal to this value.\n\n**Since**: 3900.89.0.",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for announcements with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3500.3.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdUntil",
          "type": "string",
          "description": "Search announcements with created date less than or equal to this value. 'createdCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3500.3.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for announcements with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3500.3.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedUntil",
          "type": "string",
          "description": "Search announcements with modified date less than or equal to this value. 'modifiedCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3500.3.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for announcements with a title like the provided value.\n\n**Since**: 3500.3.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "startDate",
          "type": "string",
          "description": "Search announcements with start date relative to this value. 'startAnnouncementsDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.92.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "startDateUntil",
          "type": "string",
          "description": "Search announcements with start date relative to this value. 'startAnnouncementsDateCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "startDateCompare",
          "type": "string",
          "description": "Used alongside the 'startDate' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3900.92.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "endDate",
          "type": "string",
          "description": "Search announcements with end date relative to this value. 'endAnnouncementsDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.92.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "endDateUntil",
          "type": "string",
          "description": "Search announcements with end date relative to this value. 'endAnnouncementsDateCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "endDateCompare",
          "type": "string",
          "description": "Used alongside the 'endDate' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3900.92.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "AnnouncementsCreateAnnouncementRequest": [
    {
      "name": "AnnouncementsCreateAnnouncementRequest",
      "properties": [
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AnnouncementsGetAnnouncementRequest": [
    {
      "name": "AnnouncementsGetAnnouncementRequest",
      "properties": [
        {
          "name": "announcementId",
          "type": "string",
          "description": "Path parameter: announcementId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AnnouncementsDeleteAnnouncementRequest": [
    {
      "name": "AnnouncementsDeleteAnnouncementRequest",
      "properties": [
        {
          "name": "announcementId",
          "type": "string",
          "description": "Path parameter: announcementId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AnnouncementsUpdateAnnouncementRequest": [
    {
      "name": "AnnouncementsUpdateAnnouncementRequest",
      "properties": [
        {
          "name": "announcementId",
          "type": "string",
          "description": "Path parameter: announcementId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttemptReceiptGetAttemptReceiptRequest": [
    {
      "name": "AttemptReceiptGetAttemptReceiptRequest",
      "properties": [
        {
          "name": "attemptReceiptId",
          "type": "string",
          "description": "Path parameter: attemptReceiptId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttemptReceiptGetAttemptReceipt2Request": [
    {
      "name": "AttemptReceiptGetAttemptReceipt2Request",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attemptReceiptId",
          "type": "string",
          "description": "Path parameter: attemptReceiptId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceGetCourseMeetingsRequest": [
    {
      "name": "AttendanceGetCourseMeetingsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceCreateCourseMeetingRequest": [
    {
      "name": "AttendanceCreateCourseMeetingRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceDeleteAllMeetingsInCourseRequest": [
    {
      "name": "AttendanceDeleteAllMeetingsInCourseRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceGenerateAttendanceDataDownloadUrlRequest": [
    {
      "name": "AttendanceGenerateAttendanceDataDownloadUrlRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceGetAttendanceRecordsByUserIdRequest": [
    {
      "name": "AttendanceGetAttendanceRecordsByUserIdRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceDeleteAllAttendanceRecordsByCourseAndUserIdRequest": [
    {
      "name": "AttendanceDeleteAllAttendanceRecordsByCourseAndUserIdRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceDeleteAllAttendanceByUserIdRequest": [
    {
      "name": "AttendanceDeleteAllAttendanceByUserIdRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceGetCourseMeetingRequest": [
    {
      "name": "AttendanceGetCourseMeetingRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "meetingId",
          "type": "string",
          "description": "Path parameter: meetingId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceDeleteCourseMeetingRequest": [
    {
      "name": "AttendanceDeleteCourseMeetingRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "meetingId",
          "type": "string",
          "description": "Path parameter: meetingId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceUpdateCourseMeetingRequest": [
    {
      "name": "AttendanceUpdateCourseMeetingRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "meetingId",
          "type": "string",
          "description": "Path parameter: meetingId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceGetAttendanceRecordsByMeetingIdRequest": [
    {
      "name": "AttendanceGetAttendanceRecordsByMeetingIdRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "meetingId",
          "type": "string",
          "description": "Path parameter: meetingId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceCreateAttendanceRecordRequest": [
    {
      "name": "AttendanceCreateAttendanceRecordRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "meetingId",
          "type": "string",
          "description": "Path parameter: meetingId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceDeleteAllRecordsInMeetingRequest": [
    {
      "name": "AttendanceDeleteAllRecordsInMeetingRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "meetingId",
          "type": "string",
          "description": "Path parameter: meetingId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceUpdateAttendanceRecordsRequest": [
    {
      "name": "AttendanceUpdateAttendanceRecordsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "meetingId",
          "type": "string",
          "description": "Path parameter: meetingId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceGetAttendanceRecordRequest": [
    {
      "name": "AttendanceGetAttendanceRecordRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "meetingId",
          "type": "string",
          "description": "Path parameter: meetingId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceDeleteAttendanceRecordRequest": [
    {
      "name": "AttendanceDeleteAttendanceRecordRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "meetingId",
          "type": "string",
          "description": "Path parameter: meetingId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "AttendanceUpdateAttendanceRecordRequest": [
    {
      "name": "AttendanceUpdateAttendanceRecordRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "meetingId",
          "type": "string",
          "description": "Path parameter: meetingId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CalendarGetCalendarsRequest": [
    {
      "name": "CalendarGetCalendarsRequest",
      "properties": []
    }
  ],
  "CalendarGetCalendarItemsRequest": [
    {
      "name": "CalendarGetCalendarItemsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Specifies only calendar items associated with 'courseId' are to be returned. NOTE: This is the course.id, not the course.courseId\n\n**Since**: 3400.9.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "type",
          "type": "string",
          "description": "Specifies only calendar items with the given type.\n\n**Since**: 3400.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Course |  |\n| GradebookColumn | Read only. |\n| Institution |  |\n| OfficeHours |  |\n| Personal |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "since",
          "type": "string",
          "description": "Specifies only calendar items after the 'since' date (inclusive) are to be returned. Maximum of 16 weeks after the 'since' date will be returned. ISO-8601 date-time format is expected: [yyyy-MM-dd|yyyyMMdd][T(hh:mm[:ss[.sss]]|hhmm[ss[.sss]])]?[Z|[+-]hh:mm]]\n\n**Since**: 3400.9.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "until",
          "type": "string",
          "description": "Specifies only calendar items before the 'until' date (inclusive) are to be returned. Maximum of 16 weeks prior to the 'until' date will be returned. ISO-8601 date-time format is expected: [yyyy-MM-dd|yyyyMMdd][T(hh:mm[:ss[.sss]]|hhmm[ss[.sss]])]?[Z|[+-]hh:mm]]\n\n**Since**: 3400.9.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),start\" Supported fields are:\n\n- id\n- calendarId\n- title\n- start\n- end\n- modified\n\n**Since**: 3400.9.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CalendarCreateCalendarItemRequest": [
    {
      "name": "CalendarCreateCalendarItemRequest",
      "properties": [
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CalendarGetCalendarItemRequest": [
    {
      "name": "CalendarGetCalendarItemRequest",
      "properties": [
        {
          "name": "calendarItemType",
          "type": "string",
          "description": "Path parameter: calendarItemType",
          "readOnly": false,
          "required": true
        },
        {
          "name": "calendarItemId",
          "type": "string",
          "description": "Path parameter: calendarItemId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CalendarDeleteCalendarItemRequest": [
    {
      "name": "CalendarDeleteCalendarItemRequest",
      "properties": [
        {
          "name": "calendarItemType",
          "type": "string",
          "description": "Path parameter: calendarItemType",
          "readOnly": false,
          "required": true
        },
        {
          "name": "calendarItemId",
          "type": "string",
          "description": "Path parameter: calendarItemId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CalendarUpdateCalendarItemRequest": [
    {
      "name": "CalendarUpdateCalendarItemRequest",
      "properties": [
        {
          "name": "calendarItemType",
          "type": "string",
          "description": "Path parameter: calendarItemType",
          "readOnly": false,
          "required": true
        },
        {
          "name": "calendarItemId",
          "type": "string",
          "description": "Path parameter: calendarItemId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ColumnExceptionsGetExceptionsByIdsRequest": [
    {
      "name": "ColumnExceptionsGetExceptionsByIdsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ColumnExceptionsGetUserExceptionRequest": [
    {
      "name": "ColumnExceptionsGetUserExceptionRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ColumnExceptionsPutExceptionsRequest": [
    {
      "name": "ColumnExceptionsPutExceptionsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ColumnExceptionsDeleteUserExceptionRequest": [
    {
      "name": "ColumnExceptionsDeleteUserExceptionRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentGetContentsRequest": [
    {
      "name": "ContentGetContentsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "recursive",
          "type": "boolean",
          "description": "Search for child content recursively.  A value of 'true' indicates that search results should include all content descendants within the hierarchy of the specified parent.  A value of 'false' indicates results should be limited to immediate children only.  Not setting this field defaults to 'false' behavior; only including immediate children.\n\n**Since**: 3100.2.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for content title. Will return all Content items whose title contains the supplied search value.\n\n**Since**: 3900.10.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "contentHandler",
          "type": "string",
          "description": "Search for the specific content handler.  Not setting this field will return all content handlers.\n\n**Since**: 3400.5.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for contents with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3700.1.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.1.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for contents with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3700.4.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "reviewable",
          "type": "boolean",
          "description": "Search contents by whether they are reviewable or not.\n\n**Since**: 3700.15.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "ContentCreateContentRequest": [
    {
      "name": "ContentCreateContentRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentCreateAssignmentRequest": [
    {
      "name": "ContentCreateAssignmentRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentGetContentRequest": [
    {
      "name": "ContentGetContentRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentDeleteContentRequest": [
    {
      "name": "ContentDeleteContentRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentUpdateContentRequest": [
    {
      "name": "ContentUpdateContentRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentGetContentChildrenRequest": [
    {
      "name": "ContentGetContentChildrenRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "recursive",
          "type": "boolean",
          "description": "Search for child content recursively.  A value of 'true' indicates that search results should include all content descendants within the hierarchy of the specified parent.  A value of 'false' indicates results should be limited to immediate children only.  Not setting this field defaults to 'false' behavior; only including immediate children.\n\n**Since**: 3100.2.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for content title. Will return all Content items whose title contains the supplied search value.\n\n**Since**: 3900.10.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "contentHandler",
          "type": "string",
          "description": "Search for the specific content handler.  Not setting this field will return all content handlers.\n\n**Since**: 3400.5.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for contents with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3700.1.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.1.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for contents with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3700.4.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "reviewable",
          "type": "boolean",
          "description": "Search contents by whether they are reviewable or not.\n\n**Since**: 3700.15.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "ContentCreateChildRequest": [
    {
      "name": "ContentCreateChildRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentGetContentChildrenStateByIdRequest": [
    {
      "name": "ContentGetContentChildrenStateByIdRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentUpdateContentStateRequest": [
    {
      "name": "ContentUpdateContentStateRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentGetContentStateByIdRequest": [
    {
      "name": "ContentGetContentStateByIdRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentCollectionResourcesGetResourcesRequest": [
    {
      "name": "ContentCollectionResourcesGetResourcesRequest",
      "properties": [
        {
          "name": "modified",
          "type": "string",
          "description": "Search by 'modified' date. Can be used along with 'modifiedCompare'.\n\n**Since**: 3900.41.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search by 'created' date. Can be used along with 'createdCompare'.\n\n**Since**: 3900.41.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Search criteria to be applied to 'modified', When not specified, it will perform as 'greaterOrEqual' by default if 'modified' contains a valid date. Must be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Search criteria to be applied to 'created', When not specified, it will perform as 'greaterOrEqual' by default if 'created' contains a valid date. Must be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "size",
          "type": "integer",
          "description": "Search by file 'size'. Can be used along 'sizeCompare'. If specified, no folders will be retrieved.\n\n**Since**: 3900.41.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "creatorId",
          "type": "string",
          "description": "Search files by 'creatorId'\n\n**Since**: 3900.41.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sizeCompare",
          "type": "string",
          "description": "Search operator to be applied to 'size', When not specified, it will perform as 'equals' by default if 'size' is specified. Must be one of the following:\n\n- equals - optional\n- notEquals\n- greaterOrEqual\n- greaterThan\n- lessOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| greaterOrEqual |  |\n| greaterThan |  |\n| lessOrEqual |  |\n| lessThan |  |\n",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "ContentCollectionResourcesGetContentCollectionResourceRequest": [
    {
      "name": "ContentCollectionResourcesGetContentCollectionResourceRequest",
      "properties": [
        {
          "name": "resourceId",
          "type": "string",
          "description": "Path parameter: resourceId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentCollectionResourcesGetResourceChildrenRequest": [
    {
      "name": "ContentCollectionResourcesGetResourceChildrenRequest",
      "properties": [
        {
          "name": "resourceId",
          "type": "string",
          "description": "Path parameter: resourceId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search by 'modified' date. Can be used along with 'modifiedCompare'.\n\n**Since**: 3900.41.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search by 'created' date. Can be used along with 'createdCompare'.\n\n**Since**: 3900.41.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Search criteria to be applied to 'modified', When not specified, it will perform as 'greaterOrEqual' by default if 'modified' contains a valid date. Must be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Search criteria to be applied to 'created', When not specified, it will perform as 'greaterOrEqual' by default if 'created' contains a valid date. Must be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "size",
          "type": "integer",
          "description": "Search by file 'size'. Can be used along 'sizeCompare'. If specified, no folders will be retrieved.\n\n**Since**: 3900.41.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "creatorId",
          "type": "string",
          "description": "Search files by 'creatorId'\n\n**Since**: 3900.41.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sizeCompare",
          "type": "string",
          "description": "Search operator to be applied to 'size', When not specified, it will perform as 'equals' by default if 'size' is specified. Must be one of the following:\n\n- equals - optional\n- notEquals\n- greaterOrEqual\n- greaterThan\n- lessOrEqual\n- lessThan\n\n**Since**: 3900.41.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| greaterOrEqual |  |\n| greaterThan |  |\n| lessOrEqual |  |\n| lessThan |  |\n",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "ContentFileAttachmentsGetFileAttachmentsRequest": [
    {
      "name": "ContentFileAttachmentsGetFileAttachmentsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentFileAttachmentsCreateFileAttachmentRequest": [
    {
      "name": "ContentFileAttachmentsCreateFileAttachmentRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentFileAttachmentsGetFileAttachmentRequest": [
    {
      "name": "ContentFileAttachmentsGetFileAttachmentRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attachmentId",
          "type": "string",
          "description": "Path parameter: attachmentId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentFileAttachmentsDeleteFileAttachmentRequest": [
    {
      "name": "ContentFileAttachmentsDeleteFileAttachmentRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attachmentId",
          "type": "string",
          "description": "Path parameter: attachmentId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentFileAttachmentsDownloadRequest": [
    {
      "name": "ContentFileAttachmentsDownloadRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attachmentId",
          "type": "string",
          "description": "Path parameter: attachmentId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentGroupAssignmentsGetContentGroupsRequest": [
    {
      "name": "ContentGroupAssignmentsGetContentGroupsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentGroupAssignmentsGetContentGroupRequest": [
    {
      "name": "ContentGroupAssignmentsGetContentGroupRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentGroupAssignmentsCreateContentGroupRequest": [
    {
      "name": "ContentGroupAssignmentsCreateContentGroupRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentGroupAssignmentsDeleteContentGroupRequest": [
    {
      "name": "ContentGroupAssignmentsDeleteContentGroupRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentResourcesGetTopLevelCourseResourcesRequest": [
    {
      "name": "ContentResourcesGetTopLevelCourseResourcesRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentResourcesGetCourseResourceRequest": [
    {
      "name": "ContentResourcesGetCourseResourceRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "resourceId",
          "type": "string",
          "description": "Path parameter: resourceId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentResourcesGetCourseResourceChildrenRequest": [
    {
      "name": "ContentResourcesGetCourseResourceChildrenRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "resourceId",
          "type": "string",
          "description": "Path parameter: resourceId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentReviewGetReviewStatusRequest": [
    {
      "name": "ContentReviewGetReviewStatusRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "ContentReviewUpdateReviewStatusRequest": [
    {
      "name": "ContentReviewUpdateReviewStatusRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Path parameter: contentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseAnnouncementsGetAnnouncementsRequest": [
    {
      "name": "CourseAnnouncementsGetAnnouncementsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "creatorUserId",
          "type": "string",
          "description": "Search for announcements with creator user id equal to this value.\n\n**Since**: 3900.89.0.",
          "readOnly": false,
          "required": false
        },
        {
          "name": "creatorUsername",
          "type": "string",
          "description": "Search for announcements with creator username equal to this value.\n\n**Since**: 3900.89.0.",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for announcements with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3500.3.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdUntil",
          "type": "string",
          "description": "Search announcements with created date less than or equal to this value. 'createdCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3500.3.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for announcements with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3500.3.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedUntil",
          "type": "string",
          "description": "Search announcements with modified date less than or equal to this value. 'modifiedCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3500.3.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for announcements with a title like the provided value.\n\n**Since**: 3500.3.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "startDate",
          "type": "string",
          "description": "Search announcements with start date relative to this value. 'startAnnouncementsDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.92.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "startDateUntil",
          "type": "string",
          "description": "Search announcements with start date relative to this value. 'startAnnouncementsDateCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "startDateCompare",
          "type": "string",
          "description": "Used alongside the 'startDate' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3900.92.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "endDate",
          "type": "string",
          "description": "Search announcements with end date relative to this value. 'endAnnouncementsDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.92.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "endDateUntil",
          "type": "string",
          "description": "Search announcements with end date relative to this value. 'endAnnouncementsDateCompare' needs to be set to 'between' to perform the search correctly.\n\n**Since**: 3900.92.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "endDateCompare",
          "type": "string",
          "description": "Used alongside the 'endDate' search parameter. Defaults to greaterOrEqual if not specified. 'lessThan', 'between' are also accepted values.\n\n**Since**: 3900.92.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n| between |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),created\" Supported fields are:\n\n- title\n- modified\n\n**Since**: 3500.3.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>studentReadCount</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseAnnouncementsCreateAnnouncementRequest": [
    {
      "name": "CourseAnnouncementsCreateAnnouncementRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseAnnouncementsGetAnnouncementRequest": [
    {
      "name": "CourseAnnouncementsGetAnnouncementRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "announcementId",
          "type": "string",
          "description": "Path parameter: announcementId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>studentReadCount</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseAnnouncementsDeleteAnnouncementRequest": [
    {
      "name": "CourseAnnouncementsDeleteAnnouncementRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "announcementId",
          "type": "string",
          "description": "Path parameter: announcementId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseAnnouncementsUpdateAnnouncementRequest": [
    {
      "name": "CourseAnnouncementsUpdateAnnouncementRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "announcementId",
          "type": "string",
          "description": "Path parameter: announcementId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseAssessmentsGetQuestionsRequest": [
    {
      "name": "CourseAssessmentsGetQuestionsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "assessmentId",
          "type": "string",
          "description": "Path parameter: assessmentId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseAssessmentsCreateQuestionRequest": [
    {
      "name": "CourseAssessmentsCreateQuestionRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "assessmentId",
          "type": "string",
          "description": "Path parameter: assessmentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseAssessmentsGetQuestionByIdRequest": [
    {
      "name": "CourseAssessmentsGetQuestionByIdRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "assessmentId",
          "type": "string",
          "description": "Path parameter: assessmentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "questionId",
          "type": "string",
          "description": "Path parameter: questionId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseAssessmentsDeleteQuestionRequest": [
    {
      "name": "CourseAssessmentsDeleteQuestionRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "assessmentId",
          "type": "string",
          "description": "Path parameter: assessmentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "questionId",
          "type": "string",
          "description": "Path parameter: questionId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseAssessmentsUpdateQuestionRequest": [
    {
      "name": "CourseAssessmentsUpdateQuestionRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "assessmentId",
          "type": "string",
          "description": "Path parameter: assessmentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "questionId",
          "type": "string",
          "description": "Path parameter: questionId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseCategoriesGetCategoriesRequest": [
    {
      "name": "CourseCategoriesGetCategoriesRequest",
      "properties": [
        {
          "name": "categoryType",
          "type": "string",
          "description": "Path parameter: categoryType",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),start\" Supported fields are:\n\n- id\n- categoryId\n- title\n- available\n- created\n\n**Since**: 3700.6.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for categories with titles that contain this value.\n\n**Since**: 3700.8.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Search for categories with category IDs that contain this value.\n\n**Since**: 3700.8.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for categories with a created date relative to this value.\n\n**Since**: 3700.8.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for categories with a data source id matching this value.\n\n**Since**: 3700.9.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "frontPage",
          "type": "boolean",
          "description": "Search for categories with a front page indicator matching this value.\n\n**Since**: 3700.9.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "available",
          "type": "boolean",
          "description": "Search for categories with availability matching this value.\n\n**Since**: 3700.9.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseCategoriesCreateCategoryRequest": [
    {
      "name": "CourseCategoriesCreateCategoryRequest",
      "properties": [
        {
          "name": "categoryType",
          "type": "string",
          "description": "Path parameter: categoryType",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseCategoriesGetCategoryRequest": [
    {
      "name": "CourseCategoriesGetCategoryRequest",
      "properties": [
        {
          "name": "categoryType",
          "type": "string",
          "description": "Path parameter: categoryType",
          "readOnly": false,
          "required": true
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Path parameter: categoryId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseCategoriesDeleteCategoryRequest": [
    {
      "name": "CourseCategoriesDeleteCategoryRequest",
      "properties": [
        {
          "name": "categoryType",
          "type": "string",
          "description": "Path parameter: categoryType",
          "readOnly": false,
          "required": true
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Path parameter: categoryId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseCategoriesUpdateCategoryRequest": [
    {
      "name": "CourseCategoriesUpdateCategoryRequest",
      "properties": [
        {
          "name": "categoryType",
          "type": "string",
          "description": "Path parameter: categoryType",
          "readOnly": false,
          "required": true
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Path parameter: categoryId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseCategoriesGetMembershipsRequest": [
    {
      "name": "CourseCategoriesGetMembershipsRequest",
      "properties": [
        {
          "name": "categoryType",
          "type": "string",
          "description": "Path parameter: categoryType",
          "readOnly": false,
          "required": true
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Path parameter: categoryId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>course</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseCategoriesCreateMembershipRequest": [
    {
      "name": "CourseCategoriesCreateMembershipRequest",
      "properties": [
        {
          "name": "categoryType",
          "type": "string",
          "description": "Path parameter: categoryType",
          "readOnly": false,
          "required": true
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Path parameter: categoryId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseCategoriesDeleteMembershipRequest": [
    {
      "name": "CourseCategoriesDeleteMembershipRequest",
      "properties": [
        {
          "name": "categoryType",
          "type": "string",
          "description": "Path parameter: categoryType",
          "readOnly": false,
          "required": true
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Path parameter: categoryId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseCategoriesGetChildCategoriesRequest": [
    {
      "name": "CourseCategoriesGetChildCategoriesRequest",
      "properties": [
        {
          "name": "categoryType",
          "type": "string",
          "description": "Path parameter: categoryType",
          "readOnly": false,
          "required": true
        },
        {
          "name": "parentId",
          "type": "string",
          "description": "Path parameter: parentId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),start\" Supported fields are:\n\n- id\n- categoryId\n- title\n- available\n- created\n\n**Since**: 3700.6.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for categories with titles that contain this value.\n\n**Since**: 3700.8.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Search for categories with category IDs that contain this value.\n\n**Since**: 3700.8.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for categories with a created date relative to this value.\n\n**Since**: 3700.8.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3700.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for categories with a data source id matching this value.\n\n**Since**: 3700.9.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "frontPage",
          "type": "boolean",
          "description": "Search for categories with a front page indicator matching this value.\n\n**Since**: 3700.9.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "available",
          "type": "boolean",
          "description": "Search for categories with availability matching this value.\n\n**Since**: 3700.9.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseCategoriesGetMemberships2Request": [
    {
      "name": "CourseCategoriesGetMemberships2Request",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>category</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGradeAttemptsGetAttemptFileMetaDataListRequest": [
    {
      "name": "CourseGradeAttemptsGetAttemptFileMetaDataListRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attemptId",
          "type": "string",
          "description": "Path parameter: attemptId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradeAttemptsAttachFileRequest": [
    {
      "name": "CourseGradeAttemptsAttachFileRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attemptId",
          "type": "string",
          "description": "Path parameter: attemptId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradeAttemptsGetAttemptFileMetaDataRequest": [
    {
      "name": "CourseGradeAttemptsGetAttemptFileMetaDataRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attemptId",
          "type": "string",
          "description": "Path parameter: attemptId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attemptFileId",
          "type": "string",
          "description": "Path parameter: attemptFileId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradeAttemptsDeleteAttachmentRequest": [
    {
      "name": "CourseGradeAttemptsDeleteAttachmentRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attemptId",
          "type": "string",
          "description": "Path parameter: attemptId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attemptFileId",
          "type": "string",
          "description": "Path parameter: attemptFileId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradeAttemptsDownloadRequest": [
    {
      "name": "CourseGradeAttemptsDownloadRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attemptId",
          "type": "string",
          "description": "Path parameter: attemptId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attemptFileId",
          "type": "string",
          "description": "Path parameter: attemptFileId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradeNotationsGetGradeNotationsRequest": [
    {
      "name": "CourseGradeNotationsGetGradeNotationsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradeNotationsCreateGradeNotationRequest": [
    {
      "name": "CourseGradeNotationsCreateGradeNotationRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradeNotationsGetGradeNotationRequest": [
    {
      "name": "CourseGradeNotationsGetGradeNotationRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "gradeNotationId",
          "type": "string",
          "description": "Path parameter: gradeNotationId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradeNotationsDeleteGradeNotationRequest": [
    {
      "name": "CourseGradeNotationsDeleteGradeNotationRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "gradeNotationId",
          "type": "string",
          "description": "Path parameter: gradeNotationId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradeNotationsUpdateGradeNotationRequest": [
    {
      "name": "CourseGradeNotationsUpdateGradeNotationRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "gradeNotationId",
          "type": "string",
          "description": "Path parameter: gradeNotationId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradebookCategoriesGetGradebookCategoriesRequest": [
    {
      "name": "CourseGradebookCategoriesGetGradebookCategoriesRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradebookCategoriesGetGradebookCategoryRequest": [
    {
      "name": "CourseGradebookCategoriesGetGradebookCategoryRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Path parameter: categoryId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesGetColumnGroupAttemptsRequest": [
    {
      "name": "CourseGradesGetColumnGroupAttemptsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Search for grade column group attempts submitted by this group. This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                                    |\n |------------|--------------------------------------------|\n | primary    | _123_1                                     |\n | externalId | externalId:915c7567d76d444abf1eed56aad3beb5|\n \n\n**Since**: 3100.10.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Search for group column attempts submitted by this user.\n\n**Since**: 3900.98.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for attempts with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3900.98.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3900.98.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for attempts with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3900.98.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3900.98.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "attemptDate",
          "type": "string",
          "description": "Search for attempts with attempt date relative to this value. 'attemptDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.98.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "attemptDateCompare",
          "type": "string",
          "description": "Used alongside the 'attemptDate' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3900.98.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "attemptStatuses",
          "type": "string",
          "description": "Search for grade column attempts with one of these statuses.\n\n**Since**: 3900.121.0\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGradesCreateColumnGroupAttemptRequest": [
    {
      "name": "CourseGradesCreateColumnGroupAttemptRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesGetColumnGroupAttemptRequest": [
    {
      "name": "CourseGradesGetColumnGroupAttemptRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupAttemptId",
          "type": "string",
          "description": "Path parameter: groupAttemptId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesDeleteColumnGroupAttemptRequest": [
    {
      "name": "CourseGradesDeleteColumnGroupAttemptRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupAttemptId",
          "type": "string",
          "description": "Path parameter: groupAttemptId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesUpdateColumnGroupAttemptRequest": [
    {
      "name": "CourseGradesUpdateColumnGroupAttemptRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupAttemptId",
          "type": "string",
          "description": "Path parameter: groupAttemptId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesGetCourseGradebookLogsByGradebookColumnIdRequest": [
    {
      "name": "CourseGradesGetCourseGradebookLogsByGradebookColumnIdRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n- gradebookColumnId\n- logged\n\n**Since**: 3900.71.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGradesGetCourseGradebookLogsRequest": [
    {
      "name": "CourseGradesGetCourseGradebookLogsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n- gradebookColumnId\n- logged\n\n**Since**: 3900.71.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGradesGetGradeSchemasRequest": [
    {
      "name": "CourseGradesGetGradeSchemasRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesCreateGradeSchemaRequest": [
    {
      "name": "CourseGradesCreateGradeSchemaRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesGetGradeSchemaRequest": [
    {
      "name": "CourseGradesGetGradeSchemaRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "schemaId",
          "type": "string",
          "description": "Path parameter: schemaId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesDeleteGradeSchemaRequest": [
    {
      "name": "CourseGradesDeleteGradeSchemaRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "schemaId",
          "type": "string",
          "description": "Path parameter: schemaId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesUpdateGradeSchemaRequest": [
    {
      "name": "CourseGradesUpdateGradeSchemaRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "schemaId",
          "type": "string",
          "description": "Path parameter: schemaId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesGetGradeColumnsRequest": [
    {
      "name": "CourseGradesGetGradeColumnsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Search for grade columns associated with this content item.\n\n**Since**: 3000.11.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "displayName",
          "type": "string",
          "description": "The 'displayName' value to use as search criteria.\n\nCurrently only supports 'contains' searches.\n\n**Since**: 3300.2.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "name",
          "type": "string",
          "description": "The 'name' value to use as search criteria.\n\nCurrently only supports 'contains' searches.\n\n**Since**: 3900.11.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "gradebookCategoryId",
          "type": "ref",
          "description": "Search for grade columns associated with the 'gradebookCategoryId'.\n\ncomma-delimited list of the gradebook category ids.\n\n**Since**: 3900.11.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for grade columns with a created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3900.76.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.76.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for grade columns with a modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3900.76.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.76.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>rubricAssociations</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGradesCreateGradeColumnRequest": [
    {
      "name": "CourseGradesCreateGradeColumnRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesGetGradeColumnRequest": [
    {
      "name": "CourseGradesGetGradeColumnRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>rubricAssociations</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGradesDeleteGradeColumnRequest": [
    {
      "name": "CourseGradesDeleteGradeColumnRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesUpdateGradeColumnRequest": [
    {
      "name": "CourseGradesUpdateGradeColumnRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesGetColumnAttemptsRequest": [
    {
      "name": "CourseGradesGetColumnAttemptsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Search for grade column attempts submitted by this user. This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:jsmith                     |\n | userName   | userName:jsmith                       |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n \n\n**Since**: 3100.4.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "attemptStatuses",
          "type": "string",
          "description": "Search for grade column attempts with one of these statuses.\n\n**Since**: 3100.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for attempts with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for attempts with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "attemptDate",
          "type": "string",
          "description": "Search for attempts with attempt date relative to this value. 'attemptDateCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "attemptDateCompare",
          "type": "string",
          "description": "Used alongside the 'attemptDate' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGradesCreateColumnAttemptRequest": [
    {
      "name": "CourseGradesCreateColumnAttemptRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesGetColumnAttemptRequest": [
    {
      "name": "CourseGradesGetColumnAttemptRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attemptId",
          "type": "string",
          "description": "Path parameter: attemptId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesUpdateColumnAttemptRequest": [
    {
      "name": "CourseGradesUpdateColumnAttemptRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attemptId",
          "type": "string",
          "description": "Path parameter: attemptId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesGetColumnGradesRequest": [
    {
      "name": "CourseGradesGetColumnGradesRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "changeIndex",
          "type": "integer",
          "description": "Retrieve only items modified after the given change index.\n\n**Since**: 3300.4.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "includeUnpostedGrades",
          "type": "boolean",
          "description": "If true, calculated columns exposed in the response will be processed such that any unposted grades are included in their calculations. If false, only posted grades will be included in calculations. Entitlements course.gradebook-grades.VIEW, course.gradebook.MODIFY and course.gradebook-grades.EXECUTE are required to use this parameter.\n\n**Since**: 3800.4.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "firstRelevantDate",
          "type": "string",
          "description": "Set the search criteria to the search value of the firstRelevantDate.\n\n**Since**: 3900.78.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "firstRelevantDateCompare",
          "type": "string",
          "description": "Assign the compare value to the search criteria, and it works along with the firstRelevantDate. Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.78.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "lastRelevantDate",
          "type": "string",
          "description": "Set the search criteria to the search value of the lastRelevantDate.\n\n**Since**: 3900.78.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "lastRelevantDateCompare",
          "type": "string",
          "description": "Assign the compare value to the search criteria, and it works along with the lastRelevantDate. Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.78.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGradesGetColumnGradeLastChangedRequest": [
    {
      "name": "CourseGradesGetColumnGradeLastChangedRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesGetColumnGradeRequest": [
    {
      "name": "CourseGradesGetColumnGradeRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesUpdateColumnGradeRequest": [
    {
      "name": "CourseGradesUpdateColumnGradeRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradesGetUserGradesRequest": [
    {
      "name": "CourseGradesGetUserGradesRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "firstRelevantDate",
          "type": "string",
          "description": "Search for grades with a firstRelevantDate date relative to this value. 'firstRelevantDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.78.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "firstRelevantDateCompare",
          "type": "string",
          "description": "Used alongside the 'firstRelevantDate' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.78.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "lastRelevantDate",
          "type": "string",
          "description": "Search for grades with a lastRelevantDate date relative to this value. 'lastRelevantDateCompare' may also be sent to control search behavior.\n\n**Since**: 3900.78.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "lastRelevantDateCompare",
          "type": "string",
          "description": "Used alongside the 'lastRelevantDate' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.78.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGradingPeriodsGetGradingPeriodsRequest": [
    {
      "name": "CourseGradingPeriodsGetGradingPeriodsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties,  with an optional \"(desc)\" or \"(asc)\" suffix to request an ascending or descending sort for that property. e.g. \"title(desc),description\" Supported fields are:\n\n- id\n- title\n- position\n- dateMode\n- description\n\n**Since**: 3300.2.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGradingPeriodsCreateGradingPeriodRequest": [
    {
      "name": "CourseGradingPeriodsCreateGradingPeriodRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradingPeriodsGetGradingPeriodRequest": [
    {
      "name": "CourseGradingPeriodsGetGradingPeriodRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "periodId",
          "type": "string",
          "description": "Path parameter: periodId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradingPeriodsDeleteGradingPeriodRequest": [
    {
      "name": "CourseGradingPeriodsDeleteGradingPeriodRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "periodId",
          "type": "string",
          "description": "Path parameter: periodId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGradingPeriodsUpdateGradingPeriodRequest": [
    {
      "name": "CourseGradingPeriodsUpdateGradingPeriodRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "periodId",
          "type": "string",
          "description": "Path parameter: periodId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGroupUsersGetGroupMembershipsRequest": [
    {
      "name": "CourseGroupUsersGetGroupMembershipsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGroupUsersGetGroupMembershipRequest": [
    {
      "name": "CourseGroupUsersGetGroupMembershipRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGroupUsersCreateGroupMembershipRequest": [
    {
      "name": "CourseGroupUsersCreateGroupMembershipRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGroupUsersDeleteGroupMembershipRequest": [
    {
      "name": "CourseGroupUsersDeleteGroupMembershipRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGroupsGetGroupsRequest": [
    {
      "name": "CourseGroupsGetGroupsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "name",
          "type": "string",
          "description": "The group 'name' value to use as search criteria.  See also: nameCompare.\n\n**Since**: 3900.10.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "nameCompare",
          "type": "string",
          "description": "Used alongside the 'name' search parameter.\n\nDefaults to StartsWith if not specified.\n\n**Since**: 3900.10.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| contains |  |\n| notContains |  |\n| startsWith |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "inGroupSet",
          "type": "boolean",
          "description": "Indicates whether only groups in a GroupSet (or groups NOT in a GroupSet) should be included\n\n**Since**: 3900.10.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for groups with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for groups with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "nonEmptyGroupSets",
          "type": "boolean",
          "description": "Search group sets whose student count is greater than 0.\n\n**Since**: 3900.71.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "onlyAvailableGroupSets",
          "type": "boolean",
          "description": "Search only group sets that are available.\n\n**Since**: 3900.71.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- name\n- externalId\n\n**Since**: 3100.4.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGroupsCreateGroupRequest": [
    {
      "name": "CourseGroupsCreateGroupRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGroupsGetGroupSetsRequest": [
    {
      "name": "CourseGroupsGetGroupSetsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "name",
          "type": "string",
          "description": "The group 'name' value to use as search criteria.  See also: nameCompare.\n\n**Since**: 3900.10.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "nameCompare",
          "type": "string",
          "description": "Used alongside the 'name' search parameter.\n\nDefaults to StartsWith if not specified.\n\n**Since**: 3900.10.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| contains |  |\n| notContains |  |\n| startsWith |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for groups with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for groups with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "nonEmptyGroupSets",
          "type": "boolean",
          "description": "Search group sets whose student count is greater than 0.\n\n**Since**: 3900.71.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "onlyAvailableGroupSets",
          "type": "boolean",
          "description": "Search only group sets that are available.\n\n**Since**: 3900.71.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- name\n- externalId\n\n**Since**: 3100.4.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGroupsCreateGroupSetRequest": [
    {
      "name": "CourseGroupsCreateGroupSetRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGroupsGetGroupSetRequest": [
    {
      "name": "CourseGroupsGetGroupSetRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGroupsDeleteGroupSetRequest": [
    {
      "name": "CourseGroupsDeleteGroupSetRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGroupsUpdateGroupSetRequest": [
    {
      "name": "CourseGroupsUpdateGroupSetRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGroupsGetGroupSetChildrenRequest": [
    {
      "name": "CourseGroupsGetGroupSetChildrenRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "name",
          "type": "string",
          "description": "The group 'name' value to use as search criteria.  See also: nameCompare.\n\n**Since**: 3900.10.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "nameCompare",
          "type": "string",
          "description": "Used alongside the 'name' search parameter.\n\nDefaults to StartsWith if not specified.\n\n**Since**: 3900.10.0\n\n\n| Type      | Description\n | --------- | --------- |\n| equals |  |\n| notEquals |  |\n| contains |  |\n| notContains |  |\n| startsWith |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for groups with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for groups with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.8.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter.\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.8.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "nonEmptyGroupSets",
          "type": "boolean",
          "description": "Search group sets whose student count is greater than 0.\n\n**Since**: 3900.71.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "onlyAvailableGroupSets",
          "type": "boolean",
          "description": "Search only group sets that are available.\n\n**Since**: 3900.71.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- name\n- externalId\n\n**Since**: 3100.4.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseGroupsCreateGroupSetChildRequest": [
    {
      "name": "CourseGroupsCreateGroupSetChildRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGroupsGetGroupRequest": [
    {
      "name": "CourseGroupsGetGroupRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGroupsDeleteGroupRequest": [
    {
      "name": "CourseGroupsDeleteGroupRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseGroupsUpdateGroupRequest": [
    {
      "name": "CourseGroupsUpdateGroupRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseMembershipsGetCourseMembershipsRequest": [
    {
      "name": "CourseMembershipsGetCourseMembershipsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "role",
          "type": "string",
          "description": "Search for memberships with a course role id that matches this value.\n\n**Since**: 3500.5.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for memberships with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for memberships with a modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.9.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for memberships with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "lastAccessed",
          "type": "string",
          "description": "Search for memberships with a last accessed date relative to this value.  'lastAccessedCompare' may also be sent to control search behavior.\n\n**Since**: 3300.9.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "lastAccessedCompare",
          "type": "string",
          "description": "Used alongside the 'lastAccessed' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3300.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for users with availability.available properties that contain this value.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| Disabled |   **Since**: 3100.0.0 |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"created(desc)\" Supported fields are:\n\n- created\n- lastAccessed (Since 3300.9.0)\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseMembershipsGetMembershipRequest": [
    {
      "name": "CourseMembershipsGetMembershipRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseMembershipsCreateMembershipRequest": [
    {
      "name": "CourseMembershipsCreateMembershipRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseMembershipsDeleteMembershipRequest": [
    {
      "name": "CourseMembershipsDeleteMembershipRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseMembershipsUpdateMembershipRequest": [
    {
      "name": "CourseMembershipsUpdateMembershipRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseMembershipsGetUserMembershipsRequest": [
    {
      "name": "CourseMembershipsGetUserMembershipsRequest",
      "properties": [
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "role",
          "type": "string",
          "description": "Search for memberships with a course role id that matches this value.\n\n**Since**: 3500.5.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for memberships with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for memberships with a modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.9.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3800.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for memberships with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "lastAccessed",
          "type": "string",
          "description": "Search for memberships with a last accessed date relative to this value.  'lastAccessedCompare' may also be sent to control search behavior.\n\n**Since**: 3300.9.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "lastAccessedCompare",
          "type": "string",
          "description": "Used alongside the 'lastAccessed' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3300.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for users with availability.available properties that contain this value.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| Disabled |   **Since**: 3100.0.0 |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"created(desc)\" Supported fields are:\n\n- created\n- lastAccessed (Since 3300.9.0)\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>course</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseMessagesGetMessagesRequest": [
    {
      "name": "CourseMessagesGetMessagesRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"isRead(desc),start\" Supported fields are:\n\n- isRead\n- postedDate\n\n**Since**: 3900.2.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>sender</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseMessagesCreateMessageRequest": [
    {
      "name": "CourseMessagesCreateMessageRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseMessagesGetFoldersRequest": [
    {
      "name": "CourseMessagesGetFoldersRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseMessagesDeleteMessageRequest": [
    {
      "name": "CourseMessagesDeleteMessageRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "messageId",
          "type": "string",
          "description": "Path parameter: messageId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseMessagesUpdateMessageRequest": [
    {
      "name": "CourseMessagesUpdateMessageRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "messageId",
          "type": "string",
          "description": "Path parameter: messageId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseMessagesGetMessageParticipantsRequest": [
    {
      "name": "CourseMessagesGetMessageParticipantsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "messageId",
          "type": "string",
          "description": "Path parameter: messageId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "participationType",
          "type": "string",
          "description": "Search the participation type\n\n**Since**: 3800.20.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"PARTICIPATION_TYPE(desc),start\" Supported fields are:\n\n- participationType\n\n**Since**: 3900.2.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CourseTocGetTocItemsRequest": [
    {
      "name": "CourseTocGetTocItemsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CourseTocUpdateTocItemRequest": [
    {
      "name": "CourseTocUpdateTocItemRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "tocId",
          "type": "string",
          "description": "Path parameter: tocId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CoursesGetCourseChildrenRequest": [
    {
      "name": "CoursesGetCourseChildrenRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>childCourse</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CoursesGetChildRequest": [
    {
      "name": "CoursesGetChildRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "childCourseId",
          "type": "string",
          "description": "Path parameter: childCourseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>childCourse</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CoursesAddChildCourseRequest": [
    {
      "name": "CoursesAddChildCourseRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "childCourseId",
          "type": "string",
          "description": "Path parameter: childCourseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CoursesRemoveChildCourseRequest": [
    {
      "name": "CoursesRemoveChildCourseRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "childCourseId",
          "type": "string",
          "description": "Path parameter: childCourseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "separationStyle",
          "type": "string",
          "description": "The method by which the courses will be separated.  Default: CompleteSeparation\n\n**Since**: 3900.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| completeSeparation | Re-enable the child course with enrollments and remove all the child enrollments from the master course. |\n| enrollmentsInBoth | Re-enable the child course with enrollments but leave all the child enrollments in the master course as well, marking them as unavailable. |\n",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CoursesGetCrossListSetRequest": [
    {
      "name": "CoursesGetCrossListSetRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CoursesGetTaskRequest": [
    {
      "name": "CoursesGetTaskRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "taskId",
          "type": "string",
          "description": "Path parameter: taskId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CoursesCopyCourseRequest": [
    {
      "name": "CoursesCopyCourseRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CoursesGetCoursesRequest": [
    {
      "name": "CoursesGetCoursesRequest",
      "properties": [
        {
          "name": "modified",
          "type": "string",
          "description": "Search for courses with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3500.4.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3500.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "courseId",
          "type": "string",
          "description": "Search for courses with courseId properties that contain this value.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "name",
          "type": "string",
          "description": "Search for courses with name properties that contain this value.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "description",
          "type": "string",
          "description": "Search for courses with description properties that contain this value.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "externalId",
          "type": "string",
          "description": "Search for courses with externalId properties that contain this value.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for courses with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "allowGuests",
          "type": "boolean",
          "description": "Search for courses which are configured to allow/disallow guest access, based on input.  Default: n/a (return courses regardless of guests allowed)\n\n**Since**: 3200.3.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Defaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for courses with availability.available properties that contain this value.\n\n**Since**: 3000.13.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the course. |\n| No | Students may not access the course. |\n| Disabled | Disabled by the SIS. Students may not access the course.  **Since**: 3100.0.0 |\n| Term | Availability is inherited from the term settings. Requires a termId be set. |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for courses with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "termId",
          "type": "string",
          "description": "Search for courses with this termId.  This may optionally be the term's externalId using the syntax \"externalId:spring2015\".\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "organization",
          "type": "boolean",
          "description": "Search for courses by organization flag.  A value of 'true' indicates that search results should be limited to only Organizations.  A value of 'false' indicates results should be limited to Courses.  Not setting this field indicates that both Courses and Organizations should be returned.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc),created\" Supported fields are:\n\n- courseId\n- name\n- externalId\n- created\n- modified\n\n**Since**: 3400.8.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "CoursesCreateCourseRequest": [
    {
      "name": "CoursesCreateCourseRequest",
      "properties": [
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CoursesGetCourseRequest": [
    {
      "name": "CoursesGetCourseRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CoursesDeleteCourseRequest": [
    {
      "name": "CoursesDeleteCourseRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "CoursesUpdateCourseRequest": [
    {
      "name": "CoursesUpdateCourseRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DataSourcesGetDataSourcesRequest": [
    {
      "name": "DataSourcesGetDataSourcesRequest",
      "properties": []
    }
  ],
  "DataSourcesCreateDataSourceRequest": [
    {
      "name": "DataSourcesCreateDataSourceRequest",
      "properties": [
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DataSourcesGetDataSourceRequest": [
    {
      "name": "DataSourcesGetDataSourceRequest",
      "properties": [
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Path parameter: dataSourceId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DataSourcesDeleteDataSourceRequest": [
    {
      "name": "DataSourcesDeleteDataSourceRequest",
      "properties": [
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Path parameter: dataSourceId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DataSourcesUpdateDataSourceRequest": [
    {
      "name": "DataSourcesUpdateDataSourceRequest",
      "properties": [
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Path parameter: dataSourceId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DiscussionsGetDiscussionsRequest": [
    {
      "name": "DiscussionsGetDiscussionsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc),available\" Supported fields are:\n\n- id\n- title\n- available\n- gradable\n- createdDate\n- modifiedDate\n- gradebookColumnId\n\n**Since**: 3900.19.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "title",
          "type": "string",
          "description": "Search for forums with title properties that contain this value.  Search is case-insensitive.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "gradable",
          "type": "boolean",
          "description": "Search for forums which are configured to be gradable or not, based on input.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "DiscussionsCreateDiscussionRequest": [
    {
      "name": "DiscussionsCreateDiscussionRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DiscussionsGetDiscussionRequest": [
    {
      "name": "DiscussionsGetDiscussionRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Path parameter: discussionId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DiscussionsUpdateDiscussionRequest": [
    {
      "name": "DiscussionsUpdateDiscussionRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Path parameter: discussionId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DiscussionsGetDiscussionGroupsRequest": [
    {
      "name": "DiscussionsGetDiscussionGroupsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Path parameter: discussionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"threadId(desc)\" Supported fields are:\n\n- groupId\n- threadId\n\n**Since**: 3900.27.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "DiscussionsCreateDiscussionGroupAssociationRequest": [
    {
      "name": "DiscussionsCreateDiscussionGroupAssociationRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Path parameter: discussionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DiscussionsGetDiscussionMessagesRequest": [
    {
      "name": "DiscussionsGetDiscussionMessagesRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Path parameter: discussionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Search for messages which are associated with this groupId.\n\n**Since**: 3900.19.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Search for messages made by this userId.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "status",
          "type": "string",
          "description": "Search for messages with status.\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Published | Message is published in the discussion and visible for all users. |\n| Deleted | Message is shown in the discussion as soft-deleted. |\n| Draft | Message is stored as a draft and only visible for the author user. |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "isRead",
          "type": "boolean",
          "description": "Search for read or unread messages.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for messages filtering by 'created'. If createdCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for messages filtering by 'modified'. If modifiedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "posted",
          "type": "string",
          "description": "Search for messages filtering by 'posted'. If postedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "edited",
          "type": "string",
          "description": "Search for messages filtering by 'edited'. If editedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Operation to be applied to 'created'. When not specified, it will perform as 'greaterOrEqual' by default if 'created' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Operation to be applied to 'modified'. When not specified, it will perform as 'greaterOrEqual' by default if 'modified' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "postedCompare",
          "type": "string",
          "description": "Operation to be applied to 'posted'. When not specified, it will perform as 'greaterOrEqual' by default if 'posted' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "editedCompare",
          "type": "string",
          "description": "Operation to be applied to 'edited'. When not specified, it will perform as 'greaterOrEqual' by default if 'edited' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"createdDate(desc),givenName\" Supported fields are:\n\n- id\n- discussionId\n- parentId\n- threadId\n- userId\n- groupId\n- givenName\n- familyName\n- status\n- body\n- createdDate\n- modifiedDate\n- isRead\n\n**Since**: 3900.19.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "DiscussionsCreateMessageRequest": [
    {
      "name": "DiscussionsCreateMessageRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Path parameter: discussionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DiscussionsDeleteMessageRequest": [
    {
      "name": "DiscussionsDeleteMessageRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Path parameter: discussionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "messageId",
          "type": "string",
          "description": "Path parameter: messageId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "deleteReplies",
          "type": "boolean",
          "description": "Whether the DELETE request should delete the replies or not. If true, the message and its replies are hard-deleted. Otherwise, the message is soft-deleted. If the message doesn't have replies, it is hard-deleted in any case.\n\n**Since**: 3900.27.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "DiscussionsUpdateMessageRequest": [
    {
      "name": "DiscussionsUpdateMessageRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Path parameter: discussionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "messageId",
          "type": "string",
          "description": "Path parameter: messageId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DiscussionsGetMessageRepliesRequest": [
    {
      "name": "DiscussionsGetMessageRepliesRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Path parameter: discussionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "messageId",
          "type": "string",
          "description": "Path parameter: messageId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Search for messages which are associated with this groupId.\n\n**Since**: 3900.19.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Search for messages made by this userId.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "status",
          "type": "string",
          "description": "Search for messages with status.\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Published | Message is published in the discussion and visible for all users. |\n| Deleted | Message is shown in the discussion as soft-deleted. |\n| Draft | Message is stored as a draft and only visible for the author user. |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "isRead",
          "type": "boolean",
          "description": "Search for read or unread messages.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for messages filtering by 'created'. If createdCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for messages filtering by 'modified'. If modifiedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "posted",
          "type": "string",
          "description": "Search for messages filtering by 'posted'. If postedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "edited",
          "type": "string",
          "description": "Search for messages filtering by 'edited'. If editedCompare is not set, it will perform as 'greaterOrEqual' by default.\n\n**Since**: 3900.25.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Operation to be applied to 'created'. When not specified, it will perform as 'greaterOrEqual' by default if 'created' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Operation to be applied to 'modified'. When not specified, it will perform as 'greaterOrEqual' by default if 'modified' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "postedCompare",
          "type": "string",
          "description": "Operation to be applied to 'posted'. When not specified, it will perform as 'greaterOrEqual' by default if 'posted' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "editedCompare",
          "type": "string",
          "description": "Operation to be applied to 'edited'. When not specified, it will perform as 'greaterOrEqual' by default if 'edited' contains a valid date\n\nMust be one of the following:\n\n- greaterOrEqual\n- lessThan\n\n**Since**: 3900.25.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"createdDate(desc),givenName\" Supported fields are:\n\n- id\n- discussionId\n- parentId\n- threadId\n- userId\n- groupId\n- givenName\n- familyName\n- status\n- body\n- createdDate\n- modifiedDate\n- isRead\n\n**Since**: 3900.19.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "DiscussionsCreateMessageReplyRequest": [
    {
      "name": "DiscussionsCreateMessageReplyRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Path parameter: discussionId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "messageId",
          "type": "string",
          "description": "Path parameter: messageId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "GoalsGetCourseGoalAlignmentsRequest": [
    {
      "name": "GoalsGetCourseGoalAlignmentsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "goalId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "blogId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by blog id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by course content id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by discussion id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "gradebookColumnId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by gradebook column id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "messageId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by message/thread id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "questionId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by assessment/question id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "resourceId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by resource id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "reference",
          "type": "string",
          "description": "Optional search criteria parameter to filter by reference.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "rubricRowId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by rubric row id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by rubric id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "type",
          "type": "string",
          "description": "Optional search criteria parameter to filter by type.\n\n**Since**: 3900.62.00\n\n\n| Type      | Description\n | --------- | --------- |\n| Blog | Blog Content Type |\n| CourseContent | Course Content Type |\n| ContentCollectionResource | Content Collection Resourse Type |\n| Discussion | Discussion Content Type |\n| DiscussionThread | Message/Thread Content Type |\n| Assessment | Assessment/Question Content Type |\n| GradebookColumn | Gradebook Column Content Type |\n| RubricRow | Rubric Row Content Type |\n| Rubric | Rubric Content Type |\n| Other | Other Content Type |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n- goalId\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "GoalsGetGoalsRequest": [
    {
      "name": "GoalsGetGoalsRequest",
      "properties": [
        {
          "name": "categoryId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by category id.\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "goalSetId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal set id.\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "type",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal type.\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n- title\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "GoalsGetGoalSetsRequest": [
    {
      "name": "GoalsGetGoalSetsRequest",
      "properties": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "GoalsGetTypesRequest": [
    {
      "name": "GoalsGetTypesRequest",
      "properties": []
    }
  ],
  "GoalsGetGoalSetByIdRequest": [
    {
      "name": "GoalsGetGoalSetByIdRequest",
      "properties": [
        {
          "name": "goalSetId",
          "type": "string",
          "description": "Path parameter: goalSetId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "GoalsGetCategoriesRequest": [
    {
      "name": "GoalsGetCategoriesRequest",
      "properties": [
        {
          "name": "goalSetId",
          "type": "string",
          "description": "Path parameter: goalSetId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "GoalsGetGoalSetCategoryByIdRequest": [
    {
      "name": "GoalsGetGoalSetCategoryByIdRequest",
      "properties": [
        {
          "name": "goalSetId",
          "type": "string",
          "description": "Path parameter: goalSetId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "goalSetCategoryId",
          "type": "string",
          "description": "Path parameter: goalSetCategoryId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "GoalsGetGoalsFromSetAndCategoryRequest": [
    {
      "name": "GoalsGetGoalsFromSetAndCategoryRequest",
      "properties": [
        {
          "name": "goalSetId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal set id.\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": true
        },
        {
          "name": "goalSetCategoryId",
          "type": "string",
          "description": "Path parameter: goalSetCategoryId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "recursive",
          "type": "boolean",
          "description": "Search for child goals recursively. A value of 'true' return all top-level goals and any descendant goals. A value of 'false', only top-level goals are returned and this is the default behavior.\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by category id.\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "type",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal type.\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n- title\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "GoalsGetGoalByIdRequest": [
    {
      "name": "GoalsGetGoalByIdRequest",
      "properties": [
        {
          "name": "goalId",
          "type": "string",
          "description": "Path parameter: goalId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>category</li><li>goalSet</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "GoalsGetGoalAlignmentsRequest": [
    {
      "name": "GoalsGetGoalAlignmentsRequest",
      "properties": [
        {
          "name": "goalId",
          "type": "string",
          "description": "Path parameter: goalId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "courseId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by course id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "blogId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by blog id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by course content id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "discussionId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by discussion id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "gradebookColumnId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by gradebook column id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "messageId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by message/thread id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "questionId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by assessment/question id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "resourceId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by resource id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "reference",
          "type": "string",
          "description": "Optional search criteria parameter to filter by reference.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "rubricRowId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by rubric row id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by rubric id.\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "type",
          "type": "string",
          "description": "Optional search criteria parameter to filter by type.\n\n**Since**: 3900.62.00\n\n\n| Type      | Description\n | --------- | --------- |\n| Blog | Blog Content Type |\n| CourseContent | Course Content Type |\n| ContentCollectionResource | Content Collection Resourse Type |\n| Discussion | Discussion Content Type |\n| DiscussionThread | Message/Thread Content Type |\n| Assessment | Assessment/Question Content Type |\n| GradebookColumn | Gradebook Column Content Type |\n| RubricRow | Rubric Row Content Type |\n| Rubric | Rubric Content Type |\n| Other | Other Content Type |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n- goalId\n\n**Since**: 3900.62.00",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "GoalsGetChildrenGoalsRequest": [
    {
      "name": "GoalsGetChildrenGoalsRequest",
      "properties": [
        {
          "name": "goalId",
          "type": "string",
          "description": "Path parameter: goalId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "categoryId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by category id.\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "goalSetId",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal set id.\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "type",
          "type": "string",
          "description": "Optional search criteria parameter to filter by goal type.\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n- title\n\n**Since**: 3900.53.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "InstitutionalHierarchyGetNodesForCourseRequest": [
    {
      "name": "InstitutionalHierarchyGetNodesForCourseRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>node</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "InstitutionalHierarchyGetNodesRequest": [
    {
      "name": "InstitutionalHierarchyGetNodesRequest",
      "properties": [
        {
          "name": "recursive",
          "type": "boolean",
          "description": "Search Institutional Hierarchy Nodes recursively. If true, returns all descendant nodes of the specified Node. If false, only immediate children are returned (defualt: false)\n\n**Since**: 3800.14.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "InstitutionalHierarchyCreateNodeRequest": [
    {
      "name": "InstitutionalHierarchyCreateNodeRequest",
      "properties": [
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "InstitutionalHierarchyGetNodeRequest": [
    {
      "name": "InstitutionalHierarchyGetNodeRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "InstitutionalHierarchyDeleteNodeRequest": [
    {
      "name": "InstitutionalHierarchyDeleteNodeRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "InstitutionalHierarchyUpdateNodeRequest": [
    {
      "name": "InstitutionalHierarchyUpdateNodeRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "InstitutionalHierarchyGetNodeChildrenRequest": [
    {
      "name": "InstitutionalHierarchyGetNodeChildrenRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "recursive",
          "type": "boolean",
          "description": "Search Institutional Hierarchy Nodes recursively. If true, returns all descendant nodes of the specified Node. If false, only immediate children are returned (defualt: false)\n\n**Since**: 3800.14.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "InstitutionalHierarchyCreateChildNodeRequest": [
    {
      "name": "InstitutionalHierarchyCreateChildNodeRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "InstitutionalHierarchyGetNodeCourseAssociationsRequest": [
    {
      "name": "InstitutionalHierarchyGetNodeCourseAssociationsRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>course</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "InstitutionalHierarchyCreateNodeCourseAssociationRequest": [
    {
      "name": "InstitutionalHierarchyCreateNodeCourseAssociationRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "InstitutionalHierarchyDeleteNodeCourseAssociationRequest": [
    {
      "name": "InstitutionalHierarchyDeleteNodeCourseAssociationRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "InstitutionalHierarchyUpdateNodeCourseAssociationRequest": [
    {
      "name": "InstitutionalHierarchyUpdateNodeCourseAssociationRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "InstitutionalHierarchyGetToolsRequest": [
    {
      "name": "InstitutionalHierarchyGetToolsRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "toolType",
          "type": "string",
          "description": "Path parameter: toolType",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "InstitutionalHierarchyPatchToolRequest": [
    {
      "name": "InstitutionalHierarchyPatchToolRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "toolType",
          "type": "string",
          "description": "Path parameter: toolType",
          "readOnly": false,
          "required": true
        },
        {
          "name": "toolId",
          "type": "string",
          "description": "Path parameter: toolId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "updateExistingOriginalCourses",
          "type": "boolean",
          "description": "Scope of updated Tool Settings. By default if the parameter is not present or is set as false, the updated settings will be applied to new Original courses and all Ultra courses (new and existing). If present and value is true, the updated settings will be applied to all new and existing courses (Original and Ultra).\n\n**Since**: 3900.16.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "InstitutionalHierarchyGetNodeUserAssociationsRequest": [
    {
      "name": "InstitutionalHierarchyGetNodeUserAssociationsRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "InstitutionalHierarchyCreateNodeUserAssociationRequest": [
    {
      "name": "InstitutionalHierarchyCreateNodeUserAssociationRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "InstitutionalHierarchyDeleteNodeUserAssociationRequest": [
    {
      "name": "InstitutionalHierarchyDeleteNodeUserAssociationRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "InstitutionalHierarchyGetNodesForUserRequest": [
    {
      "name": "InstitutionalHierarchyGetNodesForUserRequest",
      "properties": [
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>node</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "InstitutionalHierarchyAdministratorsGetNodeAdminsRequest": [
    {
      "name": "InstitutionalHierarchyAdministratorsGetNodeAdminsRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- userId\n\n**Since**: 3900.37.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "InstitutionalHierarchyAdministratorsGetNodeAdminRequest": [
    {
      "name": "InstitutionalHierarchyAdministratorsGetNodeAdminRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "InstitutionalHierarchyAdministratorsSetNodeAdminAssociationRequest": [
    {
      "name": "InstitutionalHierarchyAdministratorsSetNodeAdminAssociationRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "InstitutionalHierarchyAdministratorsDeleteNodeAdminRequest": [
    {
      "name": "InstitutionalHierarchyAdministratorsDeleteNodeAdminRequest",
      "properties": [
        {
          "name": "nodeId",
          "type": "string",
          "description": "Path parameter: nodeId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "LtiGetDomainConfigsRequest": [
    {
      "name": "LtiGetDomainConfigsRequest",
      "properties": []
    }
  ],
  "LtiCreateDomainConfigRequest": [
    {
      "name": "LtiCreateDomainConfigRequest",
      "properties": [
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "LtiGetDomainConfigRequest": [
    {
      "name": "LtiGetDomainConfigRequest",
      "properties": [
        {
          "name": "domainId",
          "type": "string",
          "description": "Path parameter: domainId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "LtiDeleteDomainConfigRequest": [
    {
      "name": "LtiDeleteDomainConfigRequest",
      "properties": [
        {
          "name": "domainId",
          "type": "string",
          "description": "Path parameter: domainId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "LtiUpdateDomainConfigRequest": [
    {
      "name": "LtiUpdateDomainConfigRequest",
      "properties": [
        {
          "name": "domainId",
          "type": "string",
          "description": "Path parameter: domainId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "LtiGetPlacementsRequest": [
    {
      "name": "LtiGetPlacementsRequest",
      "properties": [
        {
          "name": "handle",
          "type": "string",
          "description": "Search for placements with handle properties that contain this value.\n\n**Since**: 3200.12.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "name",
          "type": "string",
          "description": "Search for placements with name properties that contain this value.\n\n**Since**: 3200.12.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "type",
          "type": "string",
          "description": "Search for placements with type properties that contain this value.\n\n**Since**: 3200.12.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Application | Application or Student Tool Placement |\n| ContentHandler | Content Type placement |\n| ContentItemMessage | Content-item Message placement (see IMSGlobal spec)  **Since**: 3300.5.0 |\n| System | System-level Tools |\n| Administrator | Administrator-level Tools  **Since**: 3400.1.0 |\n| UltraUI | Ultra-UI Extensions  **Since**: 3700.6.0 |\n| BaseNavigation | Base Navigation |\n| CourseNavigation | Course Navigation |\n| Proctoring | Proctoring  **Since**: 3900.10.0 |\n| CloudDocument | Cloud Document Type Placement  **Since**: 3900.34.0 |\n| AssetProcessor | Asset Processor Type Placement |\n| OpenBadgeProvider | OpenBadge Provider Type Placement |\n| Eulalaunch | EULA Launch Type Placement |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "authorId",
          "type": "string",
          "description": "Search for placements with author ID properties that contain this value.\n\n**Since**: 3200.12.0\n\n**Deprecated**: since 3900.0.0; Field was never used and has been removed",
          "readOnly": false,
          "required": false
        },
        {
          "name": "courseId",
          "type": "string",
          "description": "Search for LTI placements that are available for this course. Note this only applies to Application, ContentHandler, and ContentItemMessage types currently\n\n**Since**: 3900.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "domainId",
          "type": "string",
          "description": "Search for LTI placements that are associated to a specific domainId\n\n**Since**: 3900.46.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for placements with a specific availability value\n\n**Since**: 3900.46.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\"\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "LtiCreatePlacementRequest": [
    {
      "name": "LtiCreatePlacementRequest",
      "properties": [
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "LtiGetPlacementRequest": [
    {
      "name": "LtiGetPlacementRequest",
      "properties": [
        {
          "name": "placementId",
          "type": "string",
          "description": "Path parameter: placementId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "LtiDeletePlacementRequest": [
    {
      "name": "LtiDeletePlacementRequest",
      "properties": [
        {
          "name": "placementId",
          "type": "string",
          "description": "Path parameter: placementId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "LtiUpdatePlacementRequest": [
    {
      "name": "LtiUpdatePlacementRequest",
      "properties": [
        {
          "name": "placementId",
          "type": "string",
          "description": "Path parameter: placementId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "PerformanceDashboardGetReviewStatusByCourseIdRequest": [
    {
      "name": "PerformanceDashboardGetReviewStatusByCourseIdRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Optional search criteria to filter by user id.\n\n**Since**: 3700.15.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "PerformanceScaleGetPerformanceScaleSettingsRequest": [
    {
      "name": "PerformanceScaleGetPerformanceScaleSettingsRequest",
      "properties": []
    }
  ],
  "ProctoringGetProctoringServicesRequest": [
    {
      "name": "ProctoringGetProctoringServicesRequest",
      "properties": []
    }
  ],
  "ProctoringGetProctoringServiceRequest": [
    {
      "name": "ProctoringGetProctoringServiceRequest",
      "properties": [
        {
          "name": "proctoringServiceId",
          "type": "string",
          "description": "Path parameter: proctoringServiceId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "PronounsGetPronounsRequest": [
    {
      "name": "PronounsGetPronounsRequest",
      "properties": []
    }
  ],
  "PronounsCreatePronounRequest": [
    {
      "name": "PronounsCreatePronounRequest",
      "properties": [
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "PronounsDeletePronounRequest": [
    {
      "name": "PronounsDeletePronounRequest",
      "properties": [
        {
          "name": "pronounId",
          "type": "string",
          "description": "Path parameter: pronounId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "PronounsUpdatePronounRequest": [
    {
      "name": "PronounsUpdatePronounRequest",
      "properties": [
        {
          "name": "pronounId",
          "type": "string",
          "description": "Path parameter: pronounId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RolesGetCourseRolesRequest": [
    {
      "name": "RolesGetCourseRolesRequest",
      "properties": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\"\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "custom",
          "type": "boolean",
          "description": "Search course roles by whether they are a custom or system generated course role.\n\n**Since**: 3300.5.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "roleId",
          "type": "string",
          "description": "Search course roles using their roleId's.  Any course role with a roleId that contains the given string will be returned.  The search is case insensitive.\n\n**Since**: 3300.5.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "RolesGetCourseRoleRequest": [
    {
      "name": "RolesGetCourseRoleRequest",
      "properties": [
        {
          "name": "roleId",
          "type": "string",
          "description": "The course role ID.  This may be the primary ID, or the roleId. The suffix \":custom\" will be appended to the roleId of a custom course role if that roleId conflicts with the roleId of a system generated course role.  For example, if a custom role roleId is specified as \"Student\" then the roleId will actually be \"Student:custom\" since there is already a system generated course role with the roleId of \"Student\".  \n\n | ID type    | Examples                                                   |\n |------------|------------------------------------------------------------|\n | primary    | _123_1                                                     |\n | roleId     | roleId:Student, roleId:MyCustomRole, roleId:Student:custom |\n \n\n**Since**: 3300.5.0",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RolesGetInstitutionRolesRequest": [
    {
      "name": "RolesGetInstitutionRolesRequest",
      "properties": [
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"roleId(desc)\" Supported fields are:\n\n- roleId\n- custom\n\n**Since**: 3300.4.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "roleId",
          "type": "string",
          "description": "Search for institution roles with roleId properties that contain this value.\n\n**Since**: 3300.4.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "custom",
          "type": "boolean",
          "description": "Search for institution roles by custom flag.  A value of 'true' indicates that search results should be limited to only custom roles.  A value of 'false' indicates results should be limited to built-in roles.  Not setting this field indicates that all institution roles should be returned.\n\n**Since**: 3300.4.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "RolesGetInstitutionRoleRequest": [
    {
      "name": "RolesGetInstitutionRoleRequest",
      "properties": [
        {
          "name": "roleId",
          "type": "string",
          "description": "The institution role ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | roleId     | roleId:STUDENT                        |\n \n\n**Since**: 3300.5.0",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RolesGetSystemRolesRequest": [
    {
      "name": "RolesGetSystemRolesRequest",
      "properties": [
        {
          "name": "roleId",
          "type": "string",
          "description": "Search for system roles with roleId\n\n**Since**: 3300.5.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "custom",
          "type": "boolean",
          "description": "Search for system roles by custom flag.  A value of 'true' indicates that search results should be limited to only custom roles.  A value of 'false' indicates results should be limited to built-in roles.  Not setting this field indicates that all system roles should be returned.\n\n**Since**: 3300.5.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"roleId(desc)\"\n\nSupported fields are:\n\n<ul - roleId\n- custom\n\n**Since**: 3300.5.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "RolesGetSystemRoleRequest": [
    {
      "name": "RolesGetSystemRoleRequest",
      "properties": [
        {
          "name": "roleId",
          "type": "string",
          "description": "The System Role ID.  This may be the primary ID, or the secondary roleId type. The suffix \":custom\" will be appended to the roleId of a custom system role if that roleId conflicts with the roleId of a system generated role.  For example, if a custom role roleId is specified as \"Guest\" then the roleId will actually be \"Guest:custom\" since there is already a system generated role with the roleId of \"Guest\". \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | roleId     | roleId:column1                        |\n \n\n**Since**: 3300.5.0",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RubricAssociationsGetRubricAssociationsByColumnIdRequest": [
    {
      "name": "RubricAssociationsGetRubricAssociationsByColumnIdRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RubricAssociationsGetRubricAssociationsRequest": [
    {
      "name": "RubricAssociationsGetRubricAssociationsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Path parameter: rubricId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\"\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "RubricAssociationsCreateRubricAssociationRequest": [
    {
      "name": "RubricAssociationsCreateRubricAssociationRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Path parameter: rubricId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RubricAssociationsGetRubricAssociationByIdRequest": [
    {
      "name": "RubricAssociationsGetRubricAssociationByIdRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Path parameter: rubricId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricAssociationId",
          "type": "string",
          "description": "Path parameter: rubricAssociationId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RubricAssociationsDeleteRubricAssociationRequest": [
    {
      "name": "RubricAssociationsDeleteRubricAssociationRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Path parameter: rubricId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricAssociationId",
          "type": "string",
          "description": "Path parameter: rubricAssociationId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RubricAssociationsUpdateRubricAssociationRequest": [
    {
      "name": "RubricAssociationsUpdateRubricAssociationRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Path parameter: rubricId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricAssociationId",
          "type": "string",
          "description": "Path parameter: rubricAssociationId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RubricEvaluationsGetRubricEvaluationsRequest": [
    {
      "name": "RubricEvaluationsGetRubricEvaluationsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attemptId",
          "type": "string",
          "description": "Path parameter: attemptId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.69.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "RubricEvaluationsGetRubricEvaluations2Request": [
    {
      "name": "RubricEvaluationsGetRubricEvaluations2Request",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupAttemptId",
          "type": "string",
          "description": "Path parameter: groupAttemptId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.69.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "RubricEvaluationsGetRubricEvaluations3Request": [
    {
      "name": "RubricEvaluationsGetRubricEvaluations3Request",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Path parameter: rubricId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricAssociationId",
          "type": "string",
          "description": "Path parameter: rubricAssociationId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"id(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.69.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "RubricEvaluationsCreateRubricEvaluationsRequest": [
    {
      "name": "RubricEvaluationsCreateRubricEvaluationsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Path parameter: rubricId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricAssociationId",
          "type": "string",
          "description": "Path parameter: rubricAssociationId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RubricEvaluationsGetRubricEvaluationByIdRequest": [
    {
      "name": "RubricEvaluationsGetRubricEvaluationByIdRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Path parameter: rubricId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricAssociationId",
          "type": "string",
          "description": "Path parameter: rubricAssociationId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricEvaluationId",
          "type": "string",
          "description": "Path parameter: rubricEvaluationId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>cells</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "RubricEvaluationsUpdateRubricEvaluationRequest": [
    {
      "name": "RubricEvaluationsUpdateRubricEvaluationRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Path parameter: rubricId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricAssociationId",
          "type": "string",
          "description": "Path parameter: rubricAssociationId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricEvaluationId",
          "type": "string",
          "description": "Path parameter: rubricEvaluationId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RubricsGetRubricsRequest": [
    {
      "name": "RubricsGetRubricsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RubricsCreateRubricRequest": [
    {
      "name": "RubricsCreateRubricRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RubricsGetRubricByIdRequest": [
    {
      "name": "RubricsGetRubricByIdRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Path parameter: rubricId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>cells</li><li>columns</li><li>rows</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "RubricsDeleteRubricRequest": [
    {
      "name": "RubricsDeleteRubricRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Path parameter: rubricId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "RubricsUpdateRubricRequest": [
    {
      "name": "RubricsUpdateRubricRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "rubricId",
          "type": "string",
          "description": "Path parameter: rubricId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "SessionsGetLoginAsSessionsRequest": [
    {
      "name": "SessionsGetLoginAsSessionsRequest",
      "properties": []
    }
  ],
  "SessionsGetActiveSessionsRequest": [
    {
      "name": "SessionsGetActiveSessionsRequest",
      "properties": [
        {
          "name": "expand",
          "type": "string",
          "description": "A comma-delimited list of fields to expand as part of the response. Expanded fields may cause additional load time. Supported fields are:<br><ul><li>user</li></ul>",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "SISLogsGetSisLogsByDataSetUidRequest": [
    {
      "name": "SISLogsGetSisLogsByDataSetUidRequest",
      "properties": [
        {
          "name": "id",
          "type": "string",
          "description": "Path parameter: id",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "SystemGetInfoRequest": [
    {
      "name": "SystemGetInfoRequest",
      "properties": []
    }
  ],
  "SystemGetPoliciesRequest": [
    {
      "name": "SystemGetPoliciesRequest",
      "properties": []
    }
  ],
  "SystemGetSystemTaskRequest": [
    {
      "name": "SystemGetSystemTaskRequest",
      "properties": [
        {
          "name": "taskId",
          "type": "string",
          "description": "Path parameter: taskId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "SystemGetVersionRequest": [
    {
      "name": "SystemGetVersionRequest",
      "properties": []
    }
  ],
  "TermsGetTermsRequest": [
    {
      "name": "TermsGetTermsRequest",
      "properties": [
        {
          "name": "externalId",
          "type": "string",
          "description": "Search for term with externalId properties that contain this value.\n\n**Since**: 3100.6.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for term with this dataSourceId.\n\n**Since**: 3100.6.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for users with availability.available properties that contain this value.\n\n**Since**: 3100.6.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the term and the courses it contains. |\n| No | Students may not access the term or the courses it contains. |\n",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "TermsCreateTermRequest": [
    {
      "name": "TermsCreateTermRequest",
      "properties": [
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "TermsGetTermRequest": [
    {
      "name": "TermsGetTermRequest",
      "properties": [
        {
          "name": "termId",
          "type": "string",
          "description": "Path parameter: termId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "TermsDeleteTermRequest": [
    {
      "name": "TermsDeleteTermRequest",
      "properties": [
        {
          "name": "termId",
          "type": "string",
          "description": "Path parameter: termId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "TermsUpdateTermRequest": [
    {
      "name": "TermsUpdateTermRequest",
      "properties": [
        {
          "name": "termId",
          "type": "string",
          "description": "Path parameter: termId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "UploadsUploadRequest": [
    {
      "name": "UploadsUploadRequest",
      "properties": [
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "UploadsGetSettingsRequest": [
    {
      "name": "UploadsGetSettingsRequest",
      "properties": []
    }
  ],
  "UsersGetUsersRequest": [
    {
      "name": "UsersGetUsersRequest",
      "properties": [
        {
          "name": "userName",
          "type": "string",
          "description": "Search for users with userName properties that contain this value.\n\n**Since**: 3000.11.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "externalId",
          "type": "string",
          "description": "Search for users with externalId properties that contain this value.\n\n**Since**: 3000.11.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for users with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3000.11.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for users with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3700.1.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "lastLogin",
          "type": "string",
          "description": "Search for users with a last login date relative to this value.  'lastLoginCompare' may also be sent to control search behavior. A user who has never logged in would have a null last login date.  This is not considered to be greater than, less than, or equal to a valid date. Such users will be filtered out any time this filter is used.\n\n**Since**: 3900.9.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3000.11.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "lastLoginCompare",
          "type": "string",
          "description": "Used alongside the 'lastLoginDate' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for users with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3000.11.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "institutionRoleIds",
          "type": "ref",
          "description": "Search for users with the specified institutionRoleIds.  This may be a comma separated list of institution role ids.\n\n**Since**: 3900.61.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "name.family",
          "type": "string",
          "description": "Search for users with name.family properties that contain this value.\n\n**Since**: 3000.11.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "studentId",
          "type": "string",
          "description": "Search for users with the specified studentId.\n\n**Since**: 3900.80.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "contact.email",
          "type": "string",
          "description": "Search for users with the specified contact.email value. Only users with the entitlement \"system.user.properties.MODIFY\" are allowed to filter by this attribute, the query parameter is ignored otherwise.\n\n**Since**: 3900.80.00",
          "readOnly": false,
          "required": false
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for users with availability.available properties that contain this value.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| Disabled |   **Since**: 3100.0.0 |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\" Supported fields are:\n\n- userName\n- name.family\n- externalId\n- dataSourceId\n- created\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "UsersCreateUserRequest": [
    {
      "name": "UsersCreateUserRequest",
      "properties": [
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "UsersGetUserRequest": [
    {
      "name": "UsersGetUserRequest",
      "properties": [
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "UsersDeleteUserRequest": [
    {
      "name": "UsersDeleteUserRequest",
      "properties": [
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "UsersUpdateUserRequest": [
    {
      "name": "UsersUpdateUserRequest",
      "properties": [
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "UsersGetUserAvatarRequest": [
    {
      "name": "UsersGetUserAvatarRequest",
      "properties": [
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "UsersGetObserveesRequest": [
    {
      "name": "UsersGetObserveesRequest",
      "properties": [
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "UsersGetObserversRequest": [
    {
      "name": "UsersGetObserversRequest",
      "properties": [
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "UsersCreateObserverRequest": [
    {
      "name": "UsersCreateObserverRequest",
      "properties": [
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "observerId",
          "type": "string",
          "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:jsmith                     |\n | userName   | userName:jsmith                       |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n \n\n**Since**: 3500.5.0",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "UsersDeleteObserverRequest": [
    {
      "name": "UsersDeleteObserverRequest",
      "properties": [
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "observerId",
          "type": "string",
          "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:jsmith                     |\n | userName   | userName:jsmith                       |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n \n\n**Since**: 3500.5.0",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "UsersGetUserPronunciationAudioRequest": [
    {
      "name": "UsersGetUserPronunciationAudioRequest",
      "properties": [
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "UsersGetCurrentActiveUserByIdRequest": [
    {
      "name": "UsersGetCurrentActiveUserByIdRequest",
      "properties": [
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGradesGetGradeColumnsRequest": [
    {
      "name": "DeprecatedCourseGradesGetGradeColumnsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "contentId",
          "type": "string",
          "description": "Search for grade columns associated with this content item.\n\n**Since**: 3000.11.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "DeprecatedCourseGradesCreateGradeColumnRequest": [
    {
      "name": "DeprecatedCourseGradesCreateGradeColumnRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGradesGetGradeColumnRequest": [
    {
      "name": "DeprecatedCourseGradesGetGradeColumnRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGradesDeleteGradeColumnRequest": [
    {
      "name": "DeprecatedCourseGradesDeleteGradeColumnRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGradesUpdateGradeColumnRequest": [
    {
      "name": "DeprecatedCourseGradesUpdateGradeColumnRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGradesGetColumnAttemptsRequest": [
    {
      "name": "DeprecatedCourseGradesGetColumnAttemptsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Search for grade column attempts submitted by this user. This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:jsmith                     |\n | userName   | userName:jsmith                       |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n \n\n**Since**: 3100.4.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "attemptStatuses",
          "type": "string",
          "description": "Search for grade column attempts with one of these statuses.\n\n**Since**: 3100.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for attempts with created date relative to this value. 'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modified",
          "type": "string",
          "description": "Search for attempts with modified date relative to this value. 'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "attemptDate",
          "type": "string",
          "description": "Search for attempts with attempt date relative to this value. 'attemptDateCompare' may also be sent to control search behavior.\n\n**Since**: 3800.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "attemptDateCompare",
          "type": "string",
          "description": "Used alongside the 'attemptDate' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3800.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "DeprecatedCourseGradesGetColumnAttemptRequest": [
    {
      "name": "DeprecatedCourseGradesGetColumnAttemptRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "attemptId",
          "type": "string",
          "description": "Path parameter: attemptId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGradesGetColumnGradesRequest": [
    {
      "name": "DeprecatedCourseGradesGetColumnGradesRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGradesGetColumnGradeRequest": [
    {
      "name": "DeprecatedCourseGradesGetColumnGradeRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGradesUpdateColumnGradeRequest": [
    {
      "name": "DeprecatedCourseGradesUpdateColumnGradeRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "columnId",
          "type": "string",
          "description": "Path parameter: columnId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGradesGetUserGradesRequest": [
    {
      "name": "DeprecatedCourseGradesGetUserGradesRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGroupUsersGetGroupMembershipsRequest": [
    {
      "name": "DeprecatedCourseGroupUsersGetGroupMembershipsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGroupUsersGetGroupMembershipRequest": [
    {
      "name": "DeprecatedCourseGroupUsersGetGroupMembershipRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGroupUsersCreateGroupMembershipRequest": [
    {
      "name": "DeprecatedCourseGroupUsersCreateGroupMembershipRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGroupUsersDeleteGroupMembershipRequest": [
    {
      "name": "DeprecatedCourseGroupUsersDeleteGroupMembershipRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "userId",
          "type": "string",
          "description": "Path parameter: userId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGroupsGetGroupsRequest": [
    {
      "name": "DeprecatedCourseGroupsGetGroupsRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc)\" Supported fields are:\n\n- name\n- externalId\n\n**Since**: 3100.4.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "DeprecatedCourseGroupsCreateGroupRequest": [
    {
      "name": "DeprecatedCourseGroupsCreateGroupRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGroupsGetGroupRequest": [
    {
      "name": "DeprecatedCourseGroupsGetGroupRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGroupsDeleteGroupRequest": [
    {
      "name": "DeprecatedCourseGroupsDeleteGroupRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCourseGroupsUpdateGroupRequest": [
    {
      "name": "DeprecatedCourseGroupsUpdateGroupRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "groupId",
          "type": "string",
          "description": "Path parameter: groupId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCoursesGetCoursesRequest": [
    {
      "name": "DeprecatedCoursesGetCoursesRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Search for courses with courseId properties that contain this value.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "name",
          "type": "string",
          "description": "Search for courses with name properties that contain this value.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "description",
          "type": "string",
          "description": "Search for courses with description properties that contain this value.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "externalId",
          "type": "string",
          "description": "Search for courses with externalId properties that contain this value.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for courses with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "allowGuests",
          "type": "boolean",
          "description": "Search for courses which are configured to allow/disallow guest access, based on input.  Default: n/a (return courses regardless of guests allowed)\n\n**Since**: 3200.3.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Defaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for courses with availability.available properties that contain this value.\n\n**Since**: 3000.13.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the course. |\n| No | Students may not access the course. |\n| Disabled | Disabled by the SIS. Students may not access the course.  **Since**: 3100.0.0 |\n| Term | Availability is inherited from the term settings. Requires a termId be set. |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for courses with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "termId",
          "type": "string",
          "description": "Search for courses with this termId.  This may optionally be the term's externalId using the syntax \"externalId:spring2015\".\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "organization",
          "type": "boolean",
          "description": "Search for courses by organization flag.  A value of 'true' indicates that search results should be limited to only Organizations.  A value of 'false' indicates results should be limited to Courses.  Not setting this field indicates that both Courses and Organizations should be returned.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc),created\" Supported fields are:\n\n- courseId\n- name\n- externalId\n- created\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "DeprecatedCoursesCreateCourseRequest": [
    {
      "name": "DeprecatedCoursesCreateCourseRequest",
      "properties": [
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCoursesGetCourseRequest": [
    {
      "name": "DeprecatedCoursesGetCourseRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCoursesDeleteCourseRequest": [
    {
      "name": "DeprecatedCoursesDeleteCourseRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCoursesUpdateCourseRequest": [
    {
      "name": "DeprecatedCoursesUpdateCourseRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCoursesCopyCourseRequest": [
    {
      "name": "DeprecatedCoursesCopyCourseRequest",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        },
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCoursesGetCourses2Request": [
    {
      "name": "DeprecatedCoursesGetCourses2Request",
      "properties": [
        {
          "name": "modified",
          "type": "string",
          "description": "Search for courses with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3500.4.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "modifiedCompare",
          "type": "string",
          "description": "Used alongside the 'modified' search parameter. Defaults to greaterOrEqual if not specified.\n\n**Since**: 3500.4.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "courseId",
          "type": "string",
          "description": "Search for courses with courseId properties that contain this value.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "name",
          "type": "string",
          "description": "Search for courses with name properties that contain this value.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "description",
          "type": "string",
          "description": "Search for courses with description properties that contain this value.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "externalId",
          "type": "string",
          "description": "Search for courses with externalId properties that contain this value.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "created",
          "type": "string",
          "description": "Search for courses with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "allowGuests",
          "type": "boolean",
          "description": "Search for courses which are configured to allow/disallow guest access, based on input.  Default: n/a (return courses regardless of guests allowed)\n\n**Since**: 3200.3.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "createdCompare",
          "type": "string",
          "description": "Used alongside the 'created' search parameter.  Defaults to greaterOrEqual if not specified.\n\n**Since**: 3100.0.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "availability.available",
          "type": "string",
          "description": "Search for courses with availability.available properties that contain this value.\n\n**Since**: 3000.13.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | Students may access the course. |\n| No | Students may not access the course. |\n| Disabled | Disabled by the SIS. Students may not access the course.  **Since**: 3100.0.0 |\n| Term | Availability is inherited from the term settings. Requires a termId be set. |\n",
          "readOnly": false,
          "required": false
        },
        {
          "name": "dataSourceId",
          "type": "string",
          "description": "Search for courses with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "termId",
          "type": "string",
          "description": "Search for courses with this termId.  This may optionally be the term's externalId using the syntax \"externalId:spring2015\".\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "organization",
          "type": "boolean",
          "description": "Search for courses by organization flag.  A value of 'true' indicates that search results should be limited to only Organizations.  A value of 'false' indicates results should be limited to Courses.  Not setting this field indicates that both Courses and Organizations should be returned.\n\n**Since**: 3100.0.0",
          "readOnly": false,
          "required": false
        },
        {
          "name": "sort",
          "type": "string",
          "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name(desc),created\" Supported fields are:\n\n- courseId\n- name\n- externalId\n- created\n- modified\n\n**Since**: 3400.8.0",
          "readOnly": false,
          "required": false
        }
      ]
    }
  ],
  "DeprecatedCoursesCreateCourse2Request": [
    {
      "name": "DeprecatedCoursesCreateCourse2Request",
      "properties": [
        {
          "name": "body",
          "type": "object",
          "description": "Request body data",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCoursesGetCourse2Request": [
    {
      "name": "DeprecatedCoursesGetCourse2Request",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCoursesDeleteCourse2Request": [
    {
      "name": "DeprecatedCoursesDeleteCourse2Request",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ],
  "DeprecatedCoursesUpdateCourse2Request": [
    {
      "name": "DeprecatedCoursesUpdateCourse2Request",
      "properties": [
        {
          "name": "courseId",
          "type": "string",
          "description": "Path parameter: courseId",
          "readOnly": false,
          "required": true
        }
      ]
    }
  ]
};
