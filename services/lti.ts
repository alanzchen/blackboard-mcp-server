import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter, ApiSchema } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const LtiMethods: { [key: string]: ApiMethodInfo } = {
  getDomainConfigs: {
    description: "This endpoint returns the list of LTI domain configs\n\nNo entitlements required to view the data exposed by this endpoint (Since: 3900.46.0)\n\nEntitlement system.administration.VIEW required for versions 3900.45.0 and before\n\n**Since**: 3300.9.0",
    method: "get",
    path: "/learn/api/public/v1/lti/domains",
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
    requestType: "LtiGetDomainConfigsRequest",
    isMultipart: false,
    originalName: "getDomainConfigs",
    isWrite: false
  } as ApiMethodInfo,

  createDomainConfig: {
    description: "Creates an LTI Domain Config.\n\nThe 'system.administration.VIEW' entitlement is needed to create a domain.\n\n**Since**: 3300.9.0",
    method: "post",
    path: "/learn/api/public/v1/lti/domains",
    pathParams: [],
    queryParams: [],
    requestBodySchema: {
    "type": "object",
    "properties": {
        "primaryDomain": {
            "type": "string",
            "description": "The primary domain name associated with this configuration."
        },
        "clientId": {
            "type": "string",
            "description": "The client id associated with this configuration. Only applicable for LTI versions 1.3+, excluding 2.0\n\n**Since**: 3600.0.0"
        },
        "key": {
            "type": "string"
        },
        "secret": {
            "type": "string"
        },
        "status": {
            "type": "string",
            "description": "Enum that indicates if the set of domains associated with this config can or cannot be linked to.\n\n\n| Type      | Description\n | --------- | --------- |\n| Approved |  |\n| Excluded |  |\n| NeedsApproval |   **Since**: 3300.9.0 |\n",
            "enum": [
                "Approved",
                "Excluded",
                "NeedsApproval"
            ]
        },
        "sendUserDataType": {
            "type": "string",
            "description": "Enum indicating when user data can be sent to the LTI tool provider.\n\n\n| Type      | Description\n | --------- | --------- |\n| Never |  |\n| Sslonly |  |\n| Always |   **Since**: 3300.9.0 |\n",
            "enum": [
                "Never",
                "Sslonly",
                "Always"
            ]
        },
        "sendRole": {
            "type": "boolean",
            "description": "Whether the user's role can be sent to the LTI tool provider."
        },
        "sendName": {
            "type": "boolean",
            "description": "Whether the user's name can be sent to the LTI tool provider."
        },
        "sendEmail": {
            "type": "boolean",
            "description": "Whether the user's email address can be sent to the LTI tool provider."
        },
        "useSplashScreen": {
            "type": "boolean",
            "description": "Whether a splash screen is shown before launching the LTI link.\n\nCannot be set to true if allowMembershipService is true."
        },
        "allowMembershipService": {
            "type": "boolean",
            "description": "Whether the Tool is allowed to call the LTI Names and Roles service and get the course memberships."
        },
        "allowGradesService": {
            "type": "boolean",
            "description": "Whether the Tool is allowed to call the LTI Assignment and Grades service and manage line items and grades.\n\n**Since**: 3600.0.0"
        },
        "publicKey": {
            "type": "string",
            "description": "The public key of the tool, if specified. It is optional and can be null\n\n**Since**: 3800.17.0"
        },
        "jwksUrl": {
            "type": "string",
            "description": "The JWKS URL of the tool, if specified. It is optional and can be null\n\n**Since**: 3800.17.0"
        },
        "customParameters": {
            "description": "The custom parameters for the given domain.",
            "$ref": "#/definitions/java.util.Map<java.lang.String,java.lang.String>"
        },
        "name": {
            "type": "string",
            "description": "The name of the domain configuration\n\n**Since**: 3900.23.0"
        },
        "description": {
            "type": "string",
            "description": "The description of the domain configuration\n\n**Since**: 3900.23.0"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.lti.LTIDomainConfigV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1LtiLTIDomainConfigV1"
},
    requestType: "LtiCreateDomainConfigRequest",
    isMultipart: false,
    originalName: "createDomainConfig",
    isWrite: true
  } as ApiMethodInfo,

  getDomainConfig: {
    description: "This endpoint returns the LTI domain config with the specified Id\n\nNo entitlements required to view the data exposed by this endpoint (Since: 3900.46.0)\n\nEntitlement system.administration.VIEW required for versions 3900.45.0 and before\n\n**Since**: 3300.9.0",
    method: "get",
    path: "/learn/api/public/v1/lti/domains/{domainId}",
    pathParams: [
    {
        "name": "domainId",
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
    "ref": "blackboard.webapps.blackboard.publicapi.v1.lti.LTIDomainConfig",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1LtiLTIDomainConfig"
},
    requestType: "LtiGetDomainConfigRequest",
    isMultipart: false,
    originalName: "getDomainConfig",
    isWrite: false
  } as ApiMethodInfo,

  deleteDomainConfig: {
    description: "Deletes an LTI Domain Config.\n\nThe 'system.administration.VIEW' entitlement is needed to delete a domain.\n\n**Since**: 3300.9.0",
    method: "delete",
    path: "/learn/api/public/v1/lti/domains/{domainId}",
    pathParams: [
    {
        "name": "domainId",
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
    responseSchema: null,
    requestType: "LtiDeleteDomainConfigRequest",
    isMultipart: false,
    originalName: "deleteDomainConfig",
    isWrite: true
  } as ApiMethodInfo,

  updateDomainConfig: {
    description: "Updates an LTI Domain Config.\n\nThe 'system.administration.VIEW' entitlement is needed to update a domain.\n\n**Since**: 3300.9.0",
    method: "patch",
    path: "/learn/api/public/v1/lti/domains/{domainId}",
    pathParams: [
    {
        "name": "domainId",
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
    requestBodySchema: {
    "type": "object",
    "properties": {
        "primaryDomain": {
            "type": "string",
            "description": "The primary domain name associated with this configuration."
        },
        "clientId": {
            "type": "string",
            "description": "The client id associated with this configuration. Only applicable for LTI versions 1.3+, excluding 2.0\n\n**Since**: 3600.0.0"
        },
        "key": {
            "type": "string"
        },
        "secret": {
            "type": "string"
        },
        "status": {
            "type": "string",
            "description": "Enum that indicates if the set of domains associated with this config can or cannot be linked to.\n\n\n| Type      | Description\n | --------- | --------- |\n| Approved |  |\n| Excluded |  |\n| NeedsApproval |   **Since**: 3300.9.0 |\n",
            "enum": [
                "Approved",
                "Excluded",
                "NeedsApproval"
            ]
        },
        "sendUserDataType": {
            "type": "string",
            "description": "Enum indicating when user data can be sent to the LTI tool provider.\n\n\n| Type      | Description\n | --------- | --------- |\n| Never |  |\n| Sslonly |  |\n| Always |   **Since**: 3300.9.0 |\n",
            "enum": [
                "Never",
                "Sslonly",
                "Always"
            ]
        },
        "sendRole": {
            "type": "boolean",
            "description": "Whether the user's role can be sent to the LTI tool provider."
        },
        "sendName": {
            "type": "boolean",
            "description": "Whether the user's name can be sent to the LTI tool provider."
        },
        "sendEmail": {
            "type": "boolean",
            "description": "Whether the user's email address can be sent to the LTI tool provider."
        },
        "useSplashScreen": {
            "type": "boolean",
            "description": "Whether a splash screen is shown before launching the LTI link.\n\nCannot be set to true if allowMembershipService is true."
        },
        "allowMembershipService": {
            "type": "boolean",
            "description": "Whether the Tool is allowed to call the LTI Names and Roles service and get the course memberships."
        },
        "allowGradesService": {
            "type": "boolean",
            "description": "Whether the Tool is allowed to call the LTI Assignment and Grades service and manage line items and grades.\n\n**Since**: 3600.0.0"
        },
        "publicKey": {
            "type": "string",
            "description": "The public key of the tool, if specified. It is optional and can be null\n\n**Since**: 3800.17.0"
        },
        "jwksUrl": {
            "type": "string",
            "description": "The JWKS URL of the tool, if specified. It is optional and can be null\n\n**Since**: 3800.17.0"
        },
        "customParameters": {
            "description": "The custom parameters for the given domain.",
            "$ref": "#/definitions/java.util.Map<java.lang.String,java.lang.String>"
        },
        "name": {
            "type": "string",
            "description": "The name of the domain configuration\n\n**Since**: 3900.23.0"
        },
        "description": {
            "type": "string",
            "description": "The description of the domain configuration\n\n**Since**: 3900.23.0"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.lti.LTIDomainConfig",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1LtiLTIDomainConfig"
},
    requestType: "LtiUpdateDomainConfigRequest",
    isMultipart: false,
    originalName: "updateDomainConfig",
    isWrite: true
  } as ApiMethodInfo,

  getPlacements: {
    description: "Returns a list of LTI placements\n\nSupports the standard paging and sorting query parameters, with a maximum page size of 1000.\n\n**Since**: 3300.0.0",
    method: "get",
    path: "/learn/api/public/v1/lti/placements",
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
        "name": "handle",
        "type": "string",
        "description": "Search for placements with handle properties that contain this value.\n\n**Since**: 3200.12.0",
        "required": false
    },
    {
        "name": "name",
        "type": "string",
        "description": "Search for placements with name properties that contain this value.\n\n**Since**: 3200.12.0",
        "required": false
    },
    {
        "name": "type",
        "type": "string",
        "description": "Search for placements with type properties that contain this value.\n\n**Since**: 3200.12.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Application | Application or Student Tool Placement |\n| ContentHandler | Content Type placement |\n| ContentItemMessage | Content-item Message placement (see IMSGlobal spec)  **Since**: 3300.5.0 |\n| System | System-level Tools |\n| Administrator | Administrator-level Tools  **Since**: 3400.1.0 |\n| UltraUI | Ultra-UI Extensions  **Since**: 3700.6.0 |\n| BaseNavigation | Base Navigation |\n| CourseNavigation | Course Navigation |\n| Proctoring | Proctoring  **Since**: 3900.10.0 |\n| CloudDocument | Cloud Document Type Placement  **Since**: 3900.34.0 |\n| AssetProcessor | Asset Processor Type Placement |\n| OpenBadgeProvider | OpenBadge Provider Type Placement |\n| Eulalaunch | EULA Launch Type Placement |\n",
        "required": false
    },
    {
        "name": "authorId",
        "type": "string",
        "description": "Search for placements with author ID properties that contain this value.\n\n**Since**: 3200.12.0\n\n**Deprecated**: since 3900.0.0; Field was never used and has been removed",
        "required": false
    },
    {
        "name": "courseId",
        "type": "string",
        "description": "Search for LTI placements that are available for this course. Note this only applies to Application, ContentHandler, and ContentItemMessage types currently\n\n**Since**: 3900.0.0",
        "required": false
    },
    {
        "name": "domainId",
        "type": "string",
        "description": "Search for LTI placements that are associated to a specific domainId\n\n**Since**: 3900.46.0",
        "required": false
    },
    {
        "name": "availability.available",
        "type": "string",
        "description": "Search for placements with a specific availability value\n\n**Since**: 3900.46.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n",
        "required": false
    },
    {
        "name": "sort",
        "type": "string",
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\"\n\n**Since**: 3100.0.0",
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
    requestType: "LtiGetPlacementsRequest",
    isMultipart: false,
    originalName: "getPlacements",
    isWrite: false
  } as ApiMethodInfo,

  createPlacement: {
    description: "Creates an LTI placement\n\nThe 'system.administration.VIEW' entitlement is required to create placements\n\n**Since**: 3300.0.0",
    method: "post",
    path: "/learn/api/public/v1/lti/placements",
    pathParams: [],
    queryParams: [],
    requestBodySchema: {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "The name of the placement. Not required to be unique. Maximum length of 50 characters, BAD_REQUEST error with message is returned if greater than 50 characters.",
            "maxLength": 50
        },
        "description": {
            "type": "string",
            "description": "The description of the placement. Not required to be unique. Maximum length is 1000 characters, BAD_REQUEST error with message is returned if greater than 1000 characters.",
            "maxLength": 1000
        },
        "iconUrl": {
            "type": "string",
            "description": "The URL of the icon for this placement, if any. Not required to be unique, must be a complete and valid URL. Maximum length is 255 characters, BAD_REQUEST error with message is returned if greater than 255 characters or incomplete URL.",
            "maxLength": 255
        },
        "handle": {
            "type": "string",
            "description": "The handle that uniquely identifies this placement. Required to be unique. Maximum length is 32 characters, BAD_REQUEST error with message is returned if greater than 32 characters.",
            "maxLength": 32
        },
        "type": {
            "type": "string",
            "description": "The type of placement.\n\n\n| Type      | Description\n | --------- | --------- |\n| Application | Application or Student Tool Placement |\n| ContentHandler | Content Type placement |\n| ContentItemMessage | Content-item Message placement (see IMSGlobal spec)  **Since**: 3300.5.0 |\n| System | System-level Tools |\n| Administrator | Administrator-level Tools  **Since**: 3400.1.0 |\n| UltraUI | Ultra-UI Extensions  **Since**: 3700.6.0 |\n| BaseNavigation | Base Navigation |\n| CourseNavigation | Course Navigation |\n| Proctoring | Proctoring  **Since**: 3900.10.0 |\n| CloudDocument | Cloud Document Type Placement  **Since**: 3900.34.0 |\n| AssetProcessor | Asset Processor Type Placement |\n| OpenBadgeProvider | OpenBadge Provider Type Placement |\n| Eulalaunch | EULA Launch Type Placement |\n",
            "enum": [
                "Application",
                "ContentHandler",
                "ContentItemMessage",
                "System",
                "Administrator",
                "UltraUI",
                "BaseNavigation",
                "CourseNavigation",
                "Proctoring",
                "CloudDocument",
                "AssetProcessor",
                "OpenBadgeProvider",
                "Eulalaunch"
            ]
        },
        "url": {
            "type": "string",
            "description": "The URL of the tool provider. Not required to be unique, must be a complete and valid URL. Maximum length is 1024 characters, BAD_REQUEST error with message is returned if greater than 1024 characters or incomplete URL.",
            "maxLength": 1024
        },
        "key": {
            "type": "string"
        },
        "secret": {
            "type": "string"
        },
        "authorId": {
            "type": "string",
            "description": "Id of the creator of the placement\n\n**Deprecated**: since 3900.0 not used"
        },
        "instructorCreated": {
            "type": "boolean",
            "description": "Whether an instructor created the placement or not (otherwise admin)\n\n**Deprecated**: since 3900.0 not used"
        },
        "allowStudents": {
            "type": "boolean",
            "description": "Whether the course tool is visible by students, or only to non-students (e.g. instructors). Defaults to true, allowing students to see the tool."
        },
        "allowGrading": {
            "type": "boolean",
            "description": "Whether this placement can accept grades from the tool provider and a grade column can be created for it. This only applies to {@link Type#ContentHandler} types. All others don't support grading and will be set to false."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the placement.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.lti.LTIPlacementV1.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the placement is available within the system.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n",
                    "enum": [
                        "Yes",
                        "No"
                    ]
                }
            }
        },
        "launchInNewWindow": {
            "type": "boolean",
            "description": "Whether this placement link should be opened in a new window or not."
        },
        "customParameters": {
            "description": "Custom launch parameters for the tool.",
            "$ref": "#/definitions/java.util.Map<java.lang.String,java.lang.String>"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.lti.LTIPlacementV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1LtiLTIPlacementV1"
},
    requestType: "LtiCreatePlacementRequest",
    isMultipart: false,
    originalName: "createPlacement",
    isWrite: true
  } as ApiMethodInfo,

  getPlacement: {
    description: "Returns the LTI placement with the specified Id\n\n**Since**: 3300.0.0",
    method: "get",
    path: "/learn/api/public/v1/lti/placements/{placementId}",
    pathParams: [
    {
        "name": "placementId",
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
    "ref": "blackboard.webapps.blackboard.publicapi.v1.lti.LTIPlacement",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1LtiLTIPlacement"
},
    requestType: "LtiGetPlacementRequest",
    isMultipart: false,
    originalName: "getPlacement",
    isWrite: false
  } as ApiMethodInfo,

  deletePlacement: {
    description: "Deletes an LTI placement with the specified Id\n\nThe 'system.administration.VIEW' entitlement is required to delete placements\n\n**Since**: 3300.0.0",
    method: "delete",
    path: "/learn/api/public/v1/lti/placements/{placementId}",
    pathParams: [
    {
        "name": "placementId",
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
    responseSchema: null,
    requestType: "LtiDeletePlacementRequest",
    isMultipart: false,
    originalName: "deletePlacement",
    isWrite: true
  } as ApiMethodInfo,

  updatePlacement: {
    description: "Updates an LTI placement with the given Id\n\nThe 'system.administration.VIEW' entitlement is required to update placements\n\n**Since**: 3300.0.0",
    method: "patch",
    path: "/learn/api/public/v1/lti/placements/{placementId}",
    pathParams: [
    {
        "name": "placementId",
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
    requestBodySchema: {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "The name of the placement. Not required to be unique. Maximum length of 50 characters, BAD_REQUEST error with message is returned if greater than 50 characters.",
            "maxLength": 50
        },
        "description": {
            "type": "string",
            "description": "The description of the placement. Not required to be unique. Maximum length is 1000 characters, BAD_REQUEST error with message is returned if greater than 1000 characters.",
            "maxLength": 1000
        },
        "iconUrl": {
            "type": "string",
            "description": "The URL of the icon for this placement, if any. Not required to be unique, must be a complete and valid URL. Maximum length is 255 characters, BAD_REQUEST error with message is returned if greater than 255 characters or incomplete URL.",
            "maxLength": 255
        },
        "url": {
            "type": "string",
            "description": "The URL of the tool provider. Not required to be unique, must be a complete and valid URL. Maximum length is 1024 characters, BAD_REQUEST error with message is returned if greater than 1024 characters or incomplete URL.",
            "maxLength": 1024
        },
        "key": {
            "type": "string"
        },
        "secret": {
            "type": "string"
        },
        "authorId": {
            "type": "string",
            "description": "Id of the creator of the placement\n\n**Deprecated**: since 3900.0 not used"
        },
        "instructorCreated": {
            "type": "boolean",
            "description": "Whether an instructor created the placement or not (otherwise admin)\n\n**Deprecated**: since 3900.0 not used"
        },
        "allowStudents": {
            "type": "boolean",
            "description": "Whether the course tool is visible by students, or only to non-students (e.g. instructors). Defaults to true, allowing students to see the tool."
        },
        "allowGrading": {
            "type": "boolean",
            "description": "Whether this placement can accept grades from the tool provider and a grade column can be created for it. This only applies to {@link Type#ContentHandler} types. All others don't support grading and will be set to false."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the placement.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.lti.LTIPlacementV1.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the placement is available within the system.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n",
                    "enum": [
                        "Yes",
                        "No"
                    ]
                }
            }
        },
        "launchInNewWindow": {
            "type": "boolean",
            "description": "Whether this placement link should be opened in a new window or not."
        },
        "customParameters": {
            "description": "Custom launch parameters for the tool.",
            "$ref": "#/definitions/java.util.Map<java.lang.String,java.lang.String>"
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.lti.LTIPlacement",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1LtiLTIPlacement"
},
    requestType: "LtiUpdatePlacementRequest",
    isMultipart: false,
    originalName: "updatePlacement",
    isWrite: true
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const LtiHandlers = {
  getDomainConfigs: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = LtiMethods.getDomainConfigs;
    
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

  createDomainConfig: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = LtiMethods.createDomainConfig;
    
    // Simple endpoint with no path or query parameters
    const url = methodInfo.path;

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  getDomainConfig: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = LtiMethods.getDomainConfig;
    
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

  deleteDomainConfig: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = LtiMethods.deleteDomainConfig;
    
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

  updateDomainConfig: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = LtiMethods.updateDomainConfig;
    
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

  getPlacements: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = LtiMethods.getPlacements;
    
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

  createPlacement: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = LtiMethods.createPlacement;
    
    // Simple endpoint with no path or query parameters
    const url = methodInfo.path;

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  },

  getPlacement: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = LtiMethods.getPlacement;
    
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

  deletePlacement: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = LtiMethods.deletePlacement;
    
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

  updatePlacement: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = LtiMethods.updatePlacement;
    
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
