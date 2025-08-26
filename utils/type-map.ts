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
  "GetAuthorizationcodeRequest": [
    {
      "name": "GetAuthorizationcodeRequest",
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
  "PostTokenRequest": [
    {
      "name": "PostTokenRequest",
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
  "GetTokeninfoRequest": [
    {
      "name": "GetTokeninfoRequest",
      "properties": []
    }
  ],
  "GetContentsAdaptivereleaseRulesRequest": [
    {
      "name": "GetContentsAdaptivereleaseRulesRequest",
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
  "PostContentsAdaptivereleaseRulesRequest": [
    {
      "name": "PostContentsAdaptivereleaseRulesRequest",
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
  "DeleteContentsAdaptivereleaseRulesRequest": [
    {
      "name": "DeleteContentsAdaptivereleaseRulesRequest",
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
  "PatchContentsAdaptivereleaseRulesRequest": [
    {
      "name": "PatchContentsAdaptivereleaseRulesRequest",
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
  "GetContentsAdaptivereleaseRulesCriteriaRequest": [
    {
      "name": "GetContentsAdaptivereleaseRulesCriteriaRequest",
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
  "PostContentsAdaptivereleaseRulesCriteriaRequest": [
    {
      "name": "PostContentsAdaptivereleaseRulesCriteriaRequest",
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
  "DeleteContentsAdaptivereleaseRulesCriteriaRequest": [
    {
      "name": "DeleteContentsAdaptivereleaseRulesCriteriaRequest",
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
  "PatchContentsAdaptivereleaseRulesCriteriaRequest": [
    {
      "name": "PatchContentsAdaptivereleaseRulesCriteriaRequest",
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
  "GetContentsAdaptivereleaseRulesCriteriaGroupsRequest": [
    {
      "name": "GetContentsAdaptivereleaseRulesCriteriaGroupsRequest",
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
  "PutContentsAdaptivereleaseRulesCriteriaGroupsRequest": [
    {
      "name": "PutContentsAdaptivereleaseRulesCriteriaGroupsRequest",
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
  "DeleteContentsAdaptivereleaseRulesCriteriaGroupsRequest": [
    {
      "name": "DeleteContentsAdaptivereleaseRulesCriteriaGroupsRequest",
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
  "GetContentsAdaptivereleaseRulesCriteriaUsersRequest": [
    {
      "name": "GetContentsAdaptivereleaseRulesCriteriaUsersRequest",
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
  "PutContentsAdaptivereleaseRulesCriteriaUsersRequest": [
    {
      "name": "PutContentsAdaptivereleaseRulesCriteriaUsersRequest",
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
  "DeleteContentsAdaptivereleaseRulesCriteriaUsersRequest": [
    {
      "name": "DeleteContentsAdaptivereleaseRulesCriteriaUsersRequest",
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
  "getRequest": [
    {
      "name": "getRequest",
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
  "postRequest": [
    {
      "name": "postRequest",
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
  "deleteRequest": [
    {
      "name": "deleteRequest",
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
  "patchRequest": [
    {
      "name": "patchRequest",
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
  "GetAttemptreceiptsRequest": [
    {
      "name": "GetAttemptreceiptsRequest",
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
  "GetMeetingsRequest": [
    {
      "name": "GetMeetingsRequest",
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
  "PostMeetingsRequest": [
    {
      "name": "PostMeetingsRequest",
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
  "DeleteMeetingsRequest": [
    {
      "name": "DeleteMeetingsRequest",
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
  "GetMeetingsDownloadurlRequest": [
    {
      "name": "GetMeetingsDownloadurlRequest",
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
  "GetMeetingsUsersRequest": [
    {
      "name": "GetMeetingsUsersRequest",
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
  "DeleteMeetingsUsersRequest": [
    {
      "name": "DeleteMeetingsUsersRequest",
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
  "DeleteMeetingsUsersAllRequest": [
    {
      "name": "DeleteMeetingsUsersAllRequest",
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
  "PatchMeetingsRequest": [
    {
      "name": "PatchMeetingsRequest",
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
  "PostMeetingsUsersRequest": [
    {
      "name": "PostMeetingsUsersRequest",
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
  "PostMeetingsUsersBulkRequest": [
    {
      "name": "PostMeetingsUsersBulkRequest",
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
  "PatchMeetingsUsersRequest": [
    {
      "name": "PatchMeetingsUsersRequest",
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
  "GetItemsRequest": [
    {
      "name": "GetItemsRequest",
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
  "PostItemsRequest": [
    {
      "name": "PostItemsRequest",
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
  "DeleteItemsRequest": [
    {
      "name": "DeleteItemsRequest",
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
  "PatchItemsRequest": [
    {
      "name": "PatchItemsRequest",
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
  "PostGradebookColumnsExceptionsRequest": [
    {
      "name": "PostGradebookColumnsExceptionsRequest",
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
  "GetGradebookColumnsExceptionsUsersRequest": [
    {
      "name": "GetGradebookColumnsExceptionsUsersRequest",
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
  "PutGradebookColumnsExceptionsUsersRequest": [
    {
      "name": "PutGradebookColumnsExceptionsUsersRequest",
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
  "DeleteGradebookColumnsExceptionsUsersRequest": [
    {
      "name": "DeleteGradebookColumnsExceptionsUsersRequest",
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
  "GetContentsRequest": [
    {
      "name": "GetContentsRequest",
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
  "PostContentsRequest": [
    {
      "name": "PostContentsRequest",
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
  "PostContentsCreateassignmentRequest": [
    {
      "name": "PostContentsCreateassignmentRequest",
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
  "DeleteContentsRequest": [
    {
      "name": "DeleteContentsRequest",
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
  "PatchContentsRequest": [
    {
      "name": "PatchContentsRequest",
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
  "GetContentsChildrenRequest": [
    {
      "name": "GetContentsChildrenRequest",
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
  "PostContentsChildrenRequest": [
    {
      "name": "PostContentsChildrenRequest",
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
  "GetContentsChildrenStatesRequest": [
    {
      "name": "GetContentsChildrenStatesRequest",
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
  "PatchContentsStatesRequest": [
    {
      "name": "PatchContentsStatesRequest",
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
  "GetContentsStatesRequest": [
    {
      "name": "GetContentsStatesRequest",
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
  "GetResourcesRequest": [
    {
      "name": "GetResourcesRequest",
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
  "GetResourcesChildrenRequest": [
    {
      "name": "GetResourcesChildrenRequest",
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
  "GetContentsAttachmentsRequest": [
    {
      "name": "GetContentsAttachmentsRequest",
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
  "PostContentsAttachmentsRequest": [
    {
      "name": "PostContentsAttachmentsRequest",
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
  "DeleteContentsAttachmentsRequest": [
    {
      "name": "DeleteContentsAttachmentsRequest",
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
  "GetContentsAttachmentsDownloadRequest": [
    {
      "name": "GetContentsAttachmentsDownloadRequest",
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
  "GetContentsGroupsRequest": [
    {
      "name": "GetContentsGroupsRequest",
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
  "PutContentsGroupsRequest": [
    {
      "name": "PutContentsGroupsRequest",
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
  "DeleteContentsGroupsRequest": [
    {
      "name": "DeleteContentsGroupsRequest",
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
  "GetContentsUsersReviewstatusRequest": [
    {
      "name": "GetContentsUsersReviewstatusRequest",
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
  "PatchContentsUsersReviewstatusRequest": [
    {
      "name": "PatchContentsUsersReviewstatusRequest",
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
  "GetAnnouncementsRequest": [
    {
      "name": "GetAnnouncementsRequest",
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
  "PostAnnouncementsRequest": [
    {
      "name": "PostAnnouncementsRequest",
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
  "DeleteAnnouncementsRequest": [
    {
      "name": "DeleteAnnouncementsRequest",
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
  "PatchAnnouncementsRequest": [
    {
      "name": "PatchAnnouncementsRequest",
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
  "GetAssessmentsQuestionsRequest": [
    {
      "name": "GetAssessmentsQuestionsRequest",
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
  "PostAssessmentsQuestionsRequest": [
    {
      "name": "PostAssessmentsQuestionsRequest",
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
  "DeleteAssessmentsQuestionsRequest": [
    {
      "name": "DeleteAssessmentsQuestionsRequest",
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
  "PatchAssessmentsQuestionsRequest": [
    {
      "name": "PatchAssessmentsQuestionsRequest",
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
  "GetCategoriesRequest": [
    {
      "name": "GetCategoriesRequest",
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
  "PostCategoriesRequest": [
    {
      "name": "PostCategoriesRequest",
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
  "DeleteCategoriesRequest": [
    {
      "name": "DeleteCategoriesRequest",
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
  "PatchCategoriesRequest": [
    {
      "name": "PatchCategoriesRequest",
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
  "GetCategoriesCoursesRequest": [
    {
      "name": "GetCategoriesCoursesRequest",
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
  "PutCategoriesCoursesRequest": [
    {
      "name": "PutCategoriesCoursesRequest",
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
  "DeleteCategoriesCoursesRequest": [
    {
      "name": "DeleteCategoriesCoursesRequest",
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
  "GetCategoriesChildrenRequest": [
    {
      "name": "GetCategoriesChildrenRequest",
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
  "GetGradebookAttemptsFilesRequest": [
    {
      "name": "GetGradebookAttemptsFilesRequest",
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
  "PostGradebookAttemptsFilesRequest": [
    {
      "name": "PostGradebookAttemptsFilesRequest",
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
  "DeleteGradebookAttemptsFilesRequest": [
    {
      "name": "DeleteGradebookAttemptsFilesRequest",
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
  "GetGradebookAttemptsFilesDownloadRequest": [
    {
      "name": "GetGradebookAttemptsFilesDownloadRequest",
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
  "GetGradebookGradenotationsRequest": [
    {
      "name": "GetGradebookGradenotationsRequest",
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
  "PostGradebookGradenotationsRequest": [
    {
      "name": "PostGradebookGradenotationsRequest",
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
  "DeleteGradebookGradenotationsRequest": [
    {
      "name": "DeleteGradebookGradenotationsRequest",
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
  "PatchGradebookGradenotationsRequest": [
    {
      "name": "PatchGradebookGradenotationsRequest",
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
  "GetGradebookCategoriesRequest": [
    {
      "name": "GetGradebookCategoriesRequest",
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
  "GetGradebookColumnsGroupattemptsRequest": [
    {
      "name": "GetGradebookColumnsGroupattemptsRequest",
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
  "PostGradebookColumnsGroupattemptsRequest": [
    {
      "name": "PostGradebookColumnsGroupattemptsRequest",
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
  "DeleteGradebookColumnsGroupattemptsRequest": [
    {
      "name": "DeleteGradebookColumnsGroupattemptsRequest",
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
  "PatchGradebookColumnsGroupattemptsRequest": [
    {
      "name": "PatchGradebookColumnsGroupattemptsRequest",
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
  "GetGradebookColumnsLogsRequest": [
    {
      "name": "GetGradebookColumnsLogsRequest",
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
  "GetGradebookLogsRequest": [
    {
      "name": "GetGradebookLogsRequest",
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
  "GetGradebookSchemasRequest": [
    {
      "name": "GetGradebookSchemasRequest",
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
  "PostGradebookSchemasRequest": [
    {
      "name": "PostGradebookSchemasRequest",
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
  "DeleteGradebookSchemasRequest": [
    {
      "name": "DeleteGradebookSchemasRequest",
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
  "PatchGradebookSchemasRequest": [
    {
      "name": "PatchGradebookSchemasRequest",
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
  "GetGradebookColumnsRequest": [
    {
      "name": "GetGradebookColumnsRequest",
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
  "PostGradebookColumnsRequest": [
    {
      "name": "PostGradebookColumnsRequest",
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
  "DeleteGradebookColumnsRequest": [
    {
      "name": "DeleteGradebookColumnsRequest",
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
  "PatchGradebookColumnsRequest": [
    {
      "name": "PatchGradebookColumnsRequest",
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
  "GetGradebookColumnsAttemptsRequest": [
    {
      "name": "GetGradebookColumnsAttemptsRequest",
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
  "PostGradebookColumnsAttemptsRequest": [
    {
      "name": "PostGradebookColumnsAttemptsRequest",
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
  "PatchGradebookColumnsAttemptsRequest": [
    {
      "name": "PatchGradebookColumnsAttemptsRequest",
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
  "GetGradebookColumnsUsersRequest": [
    {
      "name": "GetGradebookColumnsUsersRequest",
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
  "GetGradebookColumnsUsersLastchangedRequest": [
    {
      "name": "GetGradebookColumnsUsersLastchangedRequest",
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
  "PatchGradebookColumnsUsersRequest": [
    {
      "name": "PatchGradebookColumnsUsersRequest",
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
  "GetGradebookUsersRequest": [
    {
      "name": "GetGradebookUsersRequest",
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
  "GetGradebookPeriodsRequest": [
    {
      "name": "GetGradebookPeriodsRequest",
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
  "PostGradebookPeriodsRequest": [
    {
      "name": "PostGradebookPeriodsRequest",
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
  "DeleteGradebookPeriodsRequest": [
    {
      "name": "DeleteGradebookPeriodsRequest",
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
  "PatchGradebookPeriodsRequest": [
    {
      "name": "PatchGradebookPeriodsRequest",
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
  "GetGroupsUsersRequest": [
    {
      "name": "GetGroupsUsersRequest",
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
  "PutGroupsUsersRequest": [
    {
      "name": "PutGroupsUsersRequest",
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
  "DeleteGroupsUsersRequest": [
    {
      "name": "DeleteGroupsUsersRequest",
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
  "GetGroupsRequest": [
    {
      "name": "GetGroupsRequest",
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
  "PostGroupsRequest": [
    {
      "name": "PostGroupsRequest",
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
  "GetGroupsSetsRequest": [
    {
      "name": "GetGroupsSetsRequest",
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
  "PostGroupsSetsRequest": [
    {
      "name": "PostGroupsSetsRequest",
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
  "DeleteGroupsSetsRequest": [
    {
      "name": "DeleteGroupsSetsRequest",
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
  "PatchGroupsSetsRequest": [
    {
      "name": "PatchGroupsSetsRequest",
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
  "GetGroupsSetsGroupsRequest": [
    {
      "name": "GetGroupsSetsGroupsRequest",
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
  "PostGroupsSetsGroupsRequest": [
    {
      "name": "PostGroupsSetsGroupsRequest",
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
  "DeleteGroupsRequest": [
    {
      "name": "DeleteGroupsRequest",
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
  "PatchGroupsRequest": [
    {
      "name": "PatchGroupsRequest",
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
  "GetUsersRequest": [
    {
      "name": "GetUsersRequest",
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
  "PutUsersRequest": [
    {
      "name": "PutUsersRequest",
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
  "DeleteUsersRequest": [
    {
      "name": "DeleteUsersRequest",
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
  "PatchUsersRequest": [
    {
      "name": "PatchUsersRequest",
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
  "GetCoursesRequest": [
    {
      "name": "GetCoursesRequest",
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
  "GetMessagesRequest": [
    {
      "name": "GetMessagesRequest",
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
  "PostMessagesRequest": [
    {
      "name": "PostMessagesRequest",
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
  "GetMessagesFoldersRequest": [
    {
      "name": "GetMessagesFoldersRequest",
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
  "DeleteMessagesRequest": [
    {
      "name": "DeleteMessagesRequest",
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
  "PatchMessagesRequest": [
    {
      "name": "PatchMessagesRequest",
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
  "GetMessagesParticipantsRequest": [
    {
      "name": "GetMessagesParticipantsRequest",
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
  "GetTocitemsRequest": [
    {
      "name": "GetTocitemsRequest",
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
  "PatchTocitemsRequest": [
    {
      "name": "PatchTocitemsRequest",
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
  "GetChildrenRequest": [
    {
      "name": "GetChildrenRequest",
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
  "PutChildrenRequest": [
    {
      "name": "PutChildrenRequest",
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
  "DeleteChildrenRequest": [
    {
      "name": "DeleteChildrenRequest",
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
  "GetCrosslistsetRequest": [
    {
      "name": "GetCrosslistsetRequest",
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
  "GetTasksRequest": [
    {
      "name": "GetTasksRequest",
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
  "PostCopyRequest": [
    {
      "name": "PostCopyRequest",
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
  "GetDiscussionsRequest": [
    {
      "name": "GetDiscussionsRequest",
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
  "PostDiscussionsRequest": [
    {
      "name": "PostDiscussionsRequest",
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
  "PatchDiscussionsRequest": [
    {
      "name": "PatchDiscussionsRequest",
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
  "GetDiscussionsGroupsRequest": [
    {
      "name": "GetDiscussionsGroupsRequest",
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
  "PutDiscussionsGroupsRequest": [
    {
      "name": "PutDiscussionsGroupsRequest",
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
  "GetDiscussionsMessagesRequest": [
    {
      "name": "GetDiscussionsMessagesRequest",
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
  "PostDiscussionsMessagesRequest": [
    {
      "name": "PostDiscussionsMessagesRequest",
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
  "DeleteDiscussionsMessagesRequest": [
    {
      "name": "DeleteDiscussionsMessagesRequest",
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
  "PatchDiscussionsMessagesRequest": [
    {
      "name": "PatchDiscussionsMessagesRequest",
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
  "GetDiscussionsMessagesRepliesRequest": [
    {
      "name": "GetDiscussionsMessagesRepliesRequest",
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
  "PostDiscussionsMessagesRepliesRequest": [
    {
      "name": "PostDiscussionsMessagesRepliesRequest",
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
  "GetAlignmentsRequest": [
    {
      "name": "GetAlignmentsRequest",
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
  "GetSetsRequest": [
    {
      "name": "GetSetsRequest",
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
  "GetSetsTypesRequest": [
    {
      "name": "GetSetsTypesRequest",
      "properties": []
    }
  ],
  "GetSetsCategoriesRequest": [
    {
      "name": "GetSetsCategoriesRequest",
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
  "GetSetsCategoriesGoalsRequest": [
    {
      "name": "GetSetsCategoriesGoalsRequest",
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
  "GetNodesRequest": [
    {
      "name": "GetNodesRequest",
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
  "PostNodesRequest": [
    {
      "name": "PostNodesRequest",
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
  "DeleteNodesRequest": [
    {
      "name": "DeleteNodesRequest",
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
  "PatchNodesRequest": [
    {
      "name": "PatchNodesRequest",
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
  "GetNodesChildrenRequest": [
    {
      "name": "GetNodesChildrenRequest",
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
  "PostNodesChildrenRequest": [
    {
      "name": "PostNodesChildrenRequest",
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
  "GetNodesCoursesRequest": [
    {
      "name": "GetNodesCoursesRequest",
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
  "PutNodesCoursesRequest": [
    {
      "name": "PutNodesCoursesRequest",
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
  "DeleteNodesCoursesRequest": [
    {
      "name": "DeleteNodesCoursesRequest",
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
  "PatchNodesCoursesRequest": [
    {
      "name": "PatchNodesCoursesRequest",
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
  "GetNodesToolsRequest": [
    {
      "name": "GetNodesToolsRequest",
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
  "PatchNodesToolsRequest": [
    {
      "name": "PatchNodesToolsRequest",
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
  "GetNodesUsersRequest": [
    {
      "name": "GetNodesUsersRequest",
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
  "PutNodesUsersRequest": [
    {
      "name": "PutNodesUsersRequest",
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
  "DeleteNodesUsersRequest": [
    {
      "name": "DeleteNodesUsersRequest",
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
  "GetNodesAdminsRequest": [
    {
      "name": "GetNodesAdminsRequest",
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
  "PutNodesAdminsRequest": [
    {
      "name": "PutNodesAdminsRequest",
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
  "DeleteNodesAdminsRequest": [
    {
      "name": "DeleteNodesAdminsRequest",
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
  "GetDomainsRequest": [
    {
      "name": "GetDomainsRequest",
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
  "PostDomainsRequest": [
    {
      "name": "PostDomainsRequest",
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
  "DeleteDomainsRequest": [
    {
      "name": "DeleteDomainsRequest",
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
  "PatchDomainsRequest": [
    {
      "name": "PatchDomainsRequest",
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
  "GetPlacementsRequest": [
    {
      "name": "GetPlacementsRequest",
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
  "PostPlacementsRequest": [
    {
      "name": "PostPlacementsRequest",
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
  "DeletePlacementsRequest": [
    {
      "name": "DeletePlacementsRequest",
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
  "PatchPlacementsRequest": [
    {
      "name": "PatchPlacementsRequest",
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
  "GetPerformanceContentreviewstatusRequest": [
    {
      "name": "GetPerformanceContentreviewstatusRequest",
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
  "GetSettingsGoalperformanceScaleRequest": [
    {
      "name": "GetSettingsGoalperformanceScaleRequest",
      "properties": []
    }
  ],
  "GetServicesRequest": [
    {
      "name": "GetServicesRequest",
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
  "GetGradebookColumnsRubricsAssociationsRequest": [
    {
      "name": "GetGradebookColumnsRubricsAssociationsRequest",
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
  "GetRubricsAssociationsRequest": [
    {
      "name": "GetRubricsAssociationsRequest",
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
  "PostRubricsAssociationsRequest": [
    {
      "name": "PostRubricsAssociationsRequest",
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
  "DeleteRubricsAssociationsRequest": [
    {
      "name": "DeleteRubricsAssociationsRequest",
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
  "PatchRubricsAssociationsRequest": [
    {
      "name": "PatchRubricsAssociationsRequest",
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
  "GetGradebookColumnsAttemptsRubricEvaluationsRequest": [
    {
      "name": "GetGradebookColumnsAttemptsRubricEvaluationsRequest",
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
  "GetGradebookColumnsGroupattemptsRubricEvaluationsRequest": [
    {
      "name": "GetGradebookColumnsGroupattemptsRubricEvaluationsRequest",
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
  "GetRubricsAssociationsEvaluationsRequest": [
    {
      "name": "GetRubricsAssociationsEvaluationsRequest",
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
  "PostRubricsAssociationsEvaluationsRequest": [
    {
      "name": "PostRubricsAssociationsEvaluationsRequest",
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
  "PatchRubricsAssociationsEvaluationsRequest": [
    {
      "name": "PatchRubricsAssociationsEvaluationsRequest",
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
  "GetRubricsRequest": [
    {
      "name": "GetRubricsRequest",
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
  "PostRubricsRequest": [
    {
      "name": "PostRubricsRequest",
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
  "DeleteRubricsRequest": [
    {
      "name": "DeleteRubricsRequest",
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
  "PatchRubricsRequest": [
    {
      "name": "PatchRubricsRequest",
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
  "GetSessionsRequest": [
    {
      "name": "GetSessionsRequest",
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
  "GetSisDatasetsRequest": [
    {
      "name": "GetSisDatasetsRequest",
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
  "GetInfoRequest": [
    {
      "name": "GetInfoRequest",
      "properties": []
    }
  ],
  "GetPoliciesPrivacyRequest": [
    {
      "name": "GetPoliciesPrivacyRequest",
      "properties": []
    }
  ],
  "GetSettingsRequest": [
    {
      "name": "GetSettingsRequest",
      "properties": []
    }
  ],
  "GetAvatarRequest": [
    {
      "name": "GetAvatarRequest",
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
  "GetObserveesRequest": [
    {
      "name": "GetObserveesRequest",
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
  "GetObserversRequest": [
    {
      "name": "GetObserversRequest",
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
  "PutObserversRequest": [
    {
      "name": "PutObserversRequest",
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
  "DeleteObserversRequest": [
    {
      "name": "DeleteObserversRequest",
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
  "GetPronunciationaudioRequest": [
    {
      "name": "GetPronunciationaudioRequest",
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
  ]
};
