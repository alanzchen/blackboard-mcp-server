import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const AdaptiveReleaseMethods: { [key: string]: ApiMethodInfo } = {
  getRules: {
    description: "Get all the adaptive release rules associated with the given content in the specified course. Users with all the following entitlements may access this resource:\n\n- course.adaptiverelease.VIEW\nThe requesting user must also be enrolled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.23.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules",
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
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n- title\n\n**Since**: 3900.23.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "AdaptiveReleaseGetRulesRequest",
    isMultipart: false,
    originalName: "getRules",
    isWrite: false
  } as ApiMethodInfo,

  createRule: {
    description: "Create a new adaptive release rule with the given title. Users with all the following entitlements may access this resource:\n\n- course.content.availability.MODIFY\n- course.adaptiverelease.CREATE\nThe requesting user must also be enrolled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.23.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules",
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
        "name": "courseId",
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
    requestType: "AdaptiveReleaseCreateRuleRequest",
    isMultipart: false,
    originalName: "createRule",
    isWrite: true
  } as ApiMethodInfo,

  getRule: {
    description: "Get the adaptive release rule associated with the given content in the specified course corresponding to the rule id. Users with all the following entitlements may access this resource:\n\n- course.adaptiverelease.VIEW\nThe requesting user must also be enrolled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.23.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
    requestType: "AdaptiveReleaseGetRuleRequest",
    isMultipart: false,
    originalName: "getRule",
    isWrite: false
  } as ApiMethodInfo,

  deleteRule: {
    description: "Delete an adaptive release rule. Users with all the following entitlements may access this resource:\n\n- course.content.availability.MODIFY\n- course.adaptiverelease.DELETE\n\n**Since**: 3900.28.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}",
    pathParams: [
    {
        "name": "contentId",
        "type": "string",
        "description": "The Content ID.  This may be the primary ID, or any of the following keywords: interactive, indirect, root. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | keyword    | root                                  |\n ",
        "required": true
    },
    {
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
    requestType: "AdaptiveReleaseDeleteRuleRequest",
    isMultipart: false,
    originalName: "deleteRule",
    isWrite: true
  } as ApiMethodInfo,

  updateRule: {
    description: "Updates an adaptive release rule. Users with all the following entitlements may update this resource:\n\n- course.content.availability.MODIFY\n- course.adaptiverelease.MODIFY\nThe requesting user must also be enrolled in the course, or have the system.course.MODIFY entitlement in order to update adaptive release rules.\n\n**Since**: 3900.28.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
    requestType: "AdaptiveReleaseUpdateRuleRequest",
    isMultipart: false,
    originalName: "updateRule",
    isWrite: true
  } as ApiMethodInfo,

  getCriteria: {
    description: "Get the criteria list from the adaptive release rule associated with the given content in the specified course corresponding to the rule id Users with all of the following entitlements may access this resource:\n\n- course.content.VIEW\n- course.adaptiverelease.VIEW\nNote: ACL criteria is not fully supported by this API.\n\n**Since**: 3900.23.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"title(desc)\" Supported fields are:\n\n- id\n\n**Since**: 3900.23.0",
        "required": false
    }
],
    requestType: "AdaptiveReleaseGetCriteriaRequest",
    isMultipart: false,
    originalName: "getCriteria",
    isWrite: false
  } as ApiMethodInfo,

  createAdaptiveReleaseRuleCriteria: {
    description: "Create a new adaptive release rule criteria. Users with the following entitlements may create resources. For each criteria type the corresponding entitlement is checked:\n\n- course.adaptiverelease.CREATE\n- course.content.availability.MODIFY\n- course.adaptiverelease.acl.CREATE\n- course.adaptiverelease.dates.CREATE\n- course.adaptiverelease.performance.CREATE\nNote: ACL criteria is not fully supported by this API.\n\n**Since**: 3900.23.0",
    method: "post",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    }
],
    queryParams: [],
    requestType: "AdaptiveReleaseCreateAdaptiveReleaseRuleCriteriaRequest",
    isMultipart: false,
    originalName: "createAdaptiveReleaseRuleCriteria",
    isWrite: true
  } as ApiMethodInfo,

  getAdaptiveReleaseRuleCriterion: {
    description: "Get a single criterion by the specified Id, from the adaptive release rule associated to the given content Users with all of the following entitlements may access this resource:\n\n- course.content.VIEW\n- course.adaptiverelease.VIEW\nNote: ACL criteria is not fully supported by this API.\n\n**Since**: 3900.23.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "criterionId",
        "type": "string",
        "description": "The adaptive release criterion ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    }
],
    queryParams: [],
    requestType: "AdaptiveReleaseGetAdaptiveReleaseRuleCriterionRequest",
    isMultipart: false,
    originalName: "getAdaptiveReleaseRuleCriterion",
    isWrite: false
  } as ApiMethodInfo,

  deleteAdaptiveReleaseRuleCriterion: {
    description: "Delete a single criterion by the specified Id, from the adaptive release rule associated to the given content. Users with the following entitlements may delete the resource:\n\n- system.course.MODIFY\n- course.adaptiverelease.DELETE\n- course.content.availability.MODIFY\nUser may need one of the following entitlements depending on the criterion being deleted:\n\n- course.adaptiverelease.acl.DELETE\n- course.adaptiverelease.dates.DELETE\n- course.adaptiverelease.performance.DELETE\n\n**Since**: 3900.28.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "criterionId",
        "type": "string",
        "description": "The adaptive release criterion ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    }
],
    queryParams: [],
    requestType: "AdaptiveReleaseDeleteAdaptiveReleaseRuleCriterionRequest",
    isMultipart: false,
    originalName: "deleteAdaptiveReleaseRuleCriterion",
    isWrite: true
  } as ApiMethodInfo,

  updateAdaptiveReleaseRuleCriterion: {
    description: "Update a single criterion by the specified Id, from the adaptive release rule associated to the given content. Users with the following entitlements may update the resource:\n\n- system.course.MODIFY\n- course.adaptiverelease.MODIFY\n- course.content.availability.MODIFY\nUser may need one of the following entitlements depending on the criterion being updated:\n\n- course.adaptiverelease.acl.MODIFY\n- course.adaptiverelease.dates.MODIFY\n- course.adaptiverelease.performance.MODIFY\nFor updating criteria of type {@link GradeCompletedCriteria}, user may need any one of the following entitlements:\n\n- course.gradebook-metadata.VIEW\n- course.gradebook.MODIFY\nDateRange and DateRange criteria will behave differently if any of the range defining values are set to null, explicitly. For GradeRange criteria:\n\n- If maxScore is set to null, it will be understood as 'minScore or higher'.\n- minScore cannot be set to null, regardless of maxScore's value.\nFor DateRange criteria:\n\n- If startDate is set to null, it will be understood as 'before endDate'.\n- If endDate is set to null, it will be understood as 'after startDate'.\n- At least one date must be valid.\n\n**Since**: 3900.28.0",
    method: "patch",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "criterionId",
        "type": "string",
        "description": "The adaptive release criterion ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    }
],
    queryParams: [],
    requestType: "AdaptiveReleaseUpdateAdaptiveReleaseRuleCriterionRequest",
    isMultipart: false,
    originalName: "updateAdaptiveReleaseRuleCriterion",
    isWrite: true
  } as ApiMethodInfo,

  getAdaptiveReleaseAclGroupPredicates: {
    description: "Retrieve the list of groups included in the specified Membership criterion. Users with all the following entitlements may access this resource:\n\n- course.content.VIEW\n- course.adaptiverelease.VIEW\nThe requesting user must also be enroled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.32.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/groups",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "criterionId",
        "type": "string",
        "description": "The adaptive release criterion ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"groupId(desc)\" Supported fields are:\n\n- groupId\n\n**Since**: 3900.32.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "AdaptiveReleaseGetAdaptiveReleaseAclGroupPredicatesRequest",
    isMultipart: false,
    originalName: "getAdaptiveReleaseAclGroupPredicates",
    isWrite: false
  } as ApiMethodInfo,

  setGroupPredicateList: {
    description: "Sets the list of group predicates associated with this criterion. The list must not exceed a size of 100. Groups not included in this list will be removed. Groups which are in the list and already associated will remain unchanged. A new association will be created for Groups which are in this list but not associated with the criterion. Users with all the following entitlements may access this resource:\n\n- course.adaptiverelease.acl.modify\nNote: The specified criterion must be of type Memberships.\n\n**Since**: 3900.34.0",
    method: "put",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/groups",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "criterionId",
        "type": "string",
        "description": "The adaptive release criterion ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    }
],
    queryParams: [],
    requestType: "AdaptiveReleaseSetGroupPredicateListRequest",
    isMultipart: false,
    originalName: "setGroupPredicateList",
    isWrite: true
  } as ApiMethodInfo,

  createGroupPredicate: {
    description: "Create an association between the specified group and Membership criterion. A single criterion can hold up to a maximum of 100 group associations. Users with all the following entitlements may access this resource:\n\n- course.adaptiverelease.acl.modify\nNote: The specified criterion must be of type Memberships.\n\n**Since**: 3900.32.0",
    method: "put",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/groups/{groupId}",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "criterionId",
        "type": "string",
        "description": "The adaptive release criterion ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
    requestType: "AdaptiveReleaseCreateGroupPredicateRequest",
    isMultipart: false,
    originalName: "createGroupPredicate",
    isWrite: true
  } as ApiMethodInfo,

  deleteGroupPredicate: {
    description: "Delete the association between the specified group and Membership criterion. Users with all the following entitlements may access this resource:\n\n- course.adaptiverelease.acl.modify\nNote: The specified criterion must be of type Memberships.\n\n**Since**: 3900.32.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/groups/{groupId}",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "criterionId",
        "type": "string",
        "description": "The adaptive release criterion ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
    requestType: "AdaptiveReleaseDeleteGroupPredicateRequest",
    isMultipart: false,
    originalName: "deleteGroupPredicate",
    isWrite: true
  } as ApiMethodInfo,

  getAdaptiveReleaseAclUserPredicates: {
    description: "Retrieve a list of users who are included in the specified Membership criterion. Users with all the following entitlements may access this resource:\n\n- course.content.VIEW\n- course.adaptiverelease.VIEW\nThe requesting user must also be enroled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.32.0",
    method: "get",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/users",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "criterionId",
        "type": "string",
        "description": "The adaptive release criterion ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"userId(desc)\" Supported fields are:\n\n- userId\n\n**Since**: 3900.32.0",
        "required": false
    },
    {
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestType: "AdaptiveReleaseGetAdaptiveReleaseAclUserPredicatesRequest",
    isMultipart: false,
    originalName: "getAdaptiveReleaseAclUserPredicates",
    isWrite: false
  } as ApiMethodInfo,

  setAdaptiveReleaseAclUsersPredicatesList: {
    description: "Sets the list of user predicates associated with the specified criterion. Users not included in this list will be removed. Users which are in this list and associated with the criterion will remain unchanged. Users which are in this list but not associated with the criterion will be added. Users with all the following entitlements may use this endpoint:\n\n- course.adaptiverelease.acl.modify\nThe specified users must be enroled in the course with a role that is neither \"Guest\" nor treated as \"Instructor\". The requesting user must also be enroled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.34.0",
    method: "put",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/users",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "criterionId",
        "type": "string",
        "description": "The adaptive release criterion ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    }
],
    queryParams: [],
    requestType: "AdaptiveReleaseSetAdaptiveReleaseAclUsersPredicatesListRequest",
    isMultipart: false,
    originalName: "setAdaptiveReleaseAclUsersPredicatesList",
    isWrite: true
  } as ApiMethodInfo,

  createAdaptiveReleaseAclUserPredicate: {
    description: "Create an association between the specified user and Membership criterion. A single criterion can hold up to a maximum of 100 user associations. Users with all the following entitlements may access this resource:\n\n- course.adaptiverelease.acl.modify\nThe specified user must be enroled in the course with a role that is neither \"Guest\" nor treated as \"Instructor\". The requesting user must also be enroled in the course, or have the system.course.MODIFY entitlement.\n\n**Since**: 3900.32.0",
    method: "put",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/users/{userId}",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "criterionId",
        "type": "string",
        "description": "The adaptive release criterion ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
    requestType: "AdaptiveReleaseCreateAdaptiveReleaseAclUserPredicateRequest",
    isMultipart: false,
    originalName: "createAdaptiveReleaseAclUserPredicate",
    isWrite: true
  } as ApiMethodInfo,

  deleteAclUserPredicate: {
    description: "Delete association between user and Membership criterion. The following entitlements are required\n\n- course.adaptiverelease.acl.modify\n\n**Since**: 3900.32.0",
    method: "delete",
    path: "/learn/api/public/v1/courses/{courseId}/contents/{contentId}/adaptiveRelease/rules/{ruleId}/criteria/{criterionId}/users/{userId}",
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
        "name": "ruleId",
        "type": "string",
        "description": "The rule ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
        "required": true
    },
    {
        "name": "criterionId",
        "type": "string",
        "description": "The adaptive release criterion ID. This should be the primary ID. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n ",
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
    requestType: "AdaptiveReleaseDeleteAclUserPredicateRequest",
    isMultipart: false,
    originalName: "deleteAclUserPredicate",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const AdaptiveReleaseHandlers = {
  getRules: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.getRules;
    
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

  createRule: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.createRule;
    
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

  getRule: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.getRule;
    
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

  deleteRule: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.deleteRule;
    
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

  updateRule: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.updateRule;
    
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

  getCriteria: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.getCriteria;
    
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

  createAdaptiveReleaseRuleCriteria: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.createAdaptiveReleaseRuleCriteria;
    
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

  getAdaptiveReleaseRuleCriterion: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.getAdaptiveReleaseRuleCriterion;
    
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

  deleteAdaptiveReleaseRuleCriterion: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.deleteAdaptiveReleaseRuleCriterion;
    
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

  updateAdaptiveReleaseRuleCriterion: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.updateAdaptiveReleaseRuleCriterion;
    
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

  getAdaptiveReleaseAclGroupPredicates: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.getAdaptiveReleaseAclGroupPredicates;
    
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

  setGroupPredicateList: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.setGroupPredicateList;
    
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

  createGroupPredicate: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.createGroupPredicate;
    
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

  deleteGroupPredicate: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.deleteGroupPredicate;
    
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

  getAdaptiveReleaseAclUserPredicates: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.getAdaptiveReleaseAclUserPredicates;
    
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

  setAdaptiveReleaseAclUsersPredicatesList: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.setAdaptiveReleaseAclUsersPredicatesList;
    
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

  createAdaptiveReleaseAclUserPredicate: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.createAdaptiveReleaseAclUserPredicate;
    
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

  deleteAclUserPredicate: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = AdaptiveReleaseMethods.deleteAclUserPredicate;
    
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
  }
};
