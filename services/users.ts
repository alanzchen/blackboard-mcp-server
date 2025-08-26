import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter, ApiSchema } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Method information for each API endpoint
 */
export const UsersMethods: { [key: string]: ApiMethodInfo } = {
  getUsers: {
    description: "Returns a list of users.\n\nAt least one of the entitlements 'system.user.VIEW' or 'user.VIEW' are needed.\n\nNote: Users with the 'SystemAdmin' role are only included in the results if the logged on user also has this role.\n\n**Since**: 3000.1.0",
    method: "get",
    path: "/learn/api/public/v1/users",
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
        "name": "userName",
        "type": "string",
        "description": "Search for users with userName properties that contain this value.\n\n**Since**: 3000.11.0",
        "required": false
    },
    {
        "name": "externalId",
        "type": "string",
        "description": "Search for users with externalId properties that contain this value.\n\n**Since**: 3000.11.0",
        "required": false
    },
    {
        "name": "created",
        "type": "string",
        "description": "Search for users with a created date relative to this value.  'createdCompare' may also be sent to control search behavior.\n\n**Since**: 3000.11.0",
        "required": false
    },
    {
        "name": "modified",
        "type": "string",
        "description": "Search for users with a modified date relative to this value.  'modifiedCompare' may also be sent to control search behavior.\n\n**Since**: 3700.1.0",
        "required": false
    },
    {
        "name": "lastLogin",
        "type": "string",
        "description": "Search for users with a last login date relative to this value.  'lastLoginCompare' may also be sent to control search behavior. A user who has never logged in would have a null last login date.  This is not considered to be greater than, less than, or equal to a valid date. Such users will be filtered out any time this filter is used.\n\n**Since**: 3900.9.0",
        "required": false
    },
    {
        "name": "createdCompare",
        "type": "string",
        "description": "Used alongside the 'created' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\n\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3000.11.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "modifiedCompare",
        "type": "string",
        "description": "Used alongside the 'modified' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "lastLoginCompare",
        "type": "string",
        "description": "Used alongside the 'lastLoginDate' search parameter.  Supported values:\n\n- lessThan\n- greaterOrEqual\nDefaults to greaterOrEqual if not specified.\n\n**Since**: 3900.9.0\n\n\n| Type      | Description\n | --------- | --------- |\n| lessThan |  |\n| greaterOrEqual |  |\n",
        "required": false
    },
    {
        "name": "dataSourceId",
        "type": "string",
        "description": "Search for users with this dataSourceId.  This may optionally be the data source's externalId using the syntax \"externalId:math101\".\n\n**Since**: 3000.11.0",
        "required": false
    },
    {
        "name": "institutionRoleIds",
        "type": "ref",
        "description": "Search for users with the specified institutionRoleIds.  This may be a comma separated list of institution role ids.\n\n**Since**: 3900.61.0",
        "required": false
    },
    {
        "name": "name.family",
        "type": "string",
        "description": "Search for users with name.family properties that contain this value.\n\n**Since**: 3000.11.0",
        "required": false
    },
    {
        "name": "studentId",
        "type": "string",
        "description": "Search for users with the specified studentId.\n\n**Since**: 3900.80.00",
        "required": false
    },
    {
        "name": "contact.email",
        "type": "string",
        "description": "Search for users with the specified contact.email value. Only users with the entitlement \"system.user.properties.MODIFY\" are allowed to filter by this attribute, the query parameter is ignored otherwise.\n\n**Since**: 3900.80.00",
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
        "description": "Properties to sort by. This is a comma-delimited list of JSON properties, with an optional \"(desc)\" suffix to request a descending sort for that property. e.g. \"name.family(desc),created\" Supported fields are:\n\n- userName\n- name.family\n- externalId\n- dataSourceId\n- created\n\n**Since**: 3100.0.0",
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
    requestType: "UsersGetUsersRequest",
    isMultipart: false,
    originalName: "getUsers",
    isWrite: false
  } as ApiMethodInfo,

  createUser: {
    description: "Creates a user.\n\nThe 'system.user.CREATE' entitlement is needed.\n\n**Since**: 2015.11.0",
    method: "post",
    path: "/learn/api/public/v1/users",
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
            "description": "An optional externally-defined unique ID for the user.  Defaults to the userName.\n\nFormerly known as 'batchUid'.",
            "maxLength": 256
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this user.  This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "userName": {
            "type": "string",
            "description": "The userName property, shown in the UI."
        },
        "studentId": {
            "type": "string",
            "description": "The user's student ID name or number as defined by the school or institution.",
            "maxLength": 100
        },
        "password": {
            "type": "string",
            "description": "The user's login password."
        },
        "educationLevel": {
            "type": "string",
            "description": "The education level of this user.\n\n\n| Type      | Description\n | --------- | --------- |\n| K8 | Kindergarten through 8th grade |\n| HighSchool | Grades 9 through 12. |\n| Freshman | College or university freshman. |\n| Sophomore | College or university sophomore. |\n| Junior | College or university junior. |\n| Senior | College or university senior. |\n| GraduateSchool | Graduate school student. |\n| PostGraduateSchool | Post-graduate school student. |\n| Unknown | Education Level is not known, or not specified. |\n",
            "enum": [
                "K8",
                "HighSchool",
                "Freshman",
                "Sophomore",
                "Junior",
                "Senior",
                "GraduateSchool",
                "PostGraduateSchool",
                "Unknown"
            ]
        },
        "gender": {
            "type": "string",
            "description": "The gender of this user.\n\n\n| Type      | Description\n | --------- | --------- |\n| Female | Female |\n| Male | Male |\n| Other | Other  **Since**: 3900.32.0 |\n| Unknown | Gender is not known, or not specified. |\n",
            "enum": [
                "Female",
                "Male",
                "Other",
                "Unknown"
            ]
        },
        "pronouns": {
            "type": "string",
            "description": "The pronouns of this user.\n\n**Since**: 3900.27.0",
            "maxLength": 1000
        },
        "birthDate": {
            "type": "string",
            "format": "date-time",
            "description": "The birth date of this user. Only the date portion of this value has significance, since a person's birthdate represents a full day and not a moment in time. Take care to ignore the zeroed time portion when deserializing this value to ensure it's not converted to the previous calendar day if your local time zone has a negative UTC offset."
        },
        "institutionRoleIds": {
            "description": "The primary and secondary institution roles assigned to this user. The primary institution role is the first item in the list, followed by all secondary institution roles sorted alphabetically.\n\n**Since**: 3300.3.0",
            "$ref": "#/definitions/java.util.List<java.lang.String>"
        },
        "systemRoleIds": {
            "description": "The system roles (the administrative user roles in the UI) for this user.  The first role in this list is the user's primary system role, while the remaining are secondary system roles.",
            "$ref": "#/definitions/java.util.List<blackboard.data.user.User.SystemRole>"
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the user account.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the user is available within the system. Unavailable users cannot log in.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| Disabled |   **Since**: 3100.0.0 |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "Disabled"
                    ]
                }
            }
        },
        "name": {
            "type": "object",
            "description": "Properties used to build the user's display name.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.Name",
            "properties": {
                "given": {
                    "type": "string",
                    "description": "The given (first) name of this user.",
                    "maxLength": 100
                },
                "family": {
                    "type": "string",
                    "description": "The family (last) name of this user.",
                    "maxLength": 100
                },
                "middle": {
                    "type": "string",
                    "description": "The middle name of this user.",
                    "maxLength": 100
                },
                "other": {
                    "type": "string",
                    "description": "The other name (nickname) of this user.",
                    "maxLength": 100
                },
                "suffix": {
                    "type": "string",
                    "description": "The suffix of this user's name.  Examples: Jr., III, PhD.",
                    "maxLength": 100
                },
                "title": {
                    "type": "string",
                    "description": "The title of this user.  Examples: Mr., Ms., Dr.",
                    "maxLength": 100
                },
                "preferredDisplayName": {
                    "type": "string",
                    "description": "The preferred display name of this user.\n\n**Since**: 3900.48.0\n\n\n| Type      | Description\n | --------- | --------- |\n| GivenName | User requests displaying givenName when formatting names for display. This is the default behavior. |\n| OtherName | User requests displaying otherName when formatting names for display. |\n| Both | User requests displaying otherName and givenName when formatting names for display. |\n",
                    "enum": [
                        "GivenName",
                        "OtherName",
                        "Both"
                    ]
                }
            },
            "required": [
                "family",
                "given"
            ]
        },
        "job": {
            "type": "object",
            "description": "The user's job information.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.Job",
            "properties": {
                "title": {
                    "type": "string",
                    "description": "The user's job title.",
                    "maxLength": 100
                },
                "department": {
                    "type": "string",
                    "description": "The department the user belongs to.",
                    "maxLength": 100
                },
                "company": {
                    "type": "string",
                    "description": "The company the user works for.",
                    "maxLength": 100
                }
            }
        },
        "contact": {
            "type": "object",
            "description": "The user's contact information.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.Contact",
            "properties": {
                "homePhone": {
                    "type": "string",
                    "description": "The user's home phone number.",
                    "maxLength": 50
                },
                "mobilePhone": {
                    "type": "string",
                    "description": "The user's mobile phone number.",
                    "maxLength": 50
                },
                "businessPhone": {
                    "type": "string",
                    "description": "The user's business phone number.",
                    "maxLength": 50
                },
                "businessFax": {
                    "type": "string",
                    "description": "The user's business fax number.",
                    "maxLength": 50
                },
                "email": {
                    "type": "string",
                    "description": "The user's email address.",
                    "maxLength": 100
                },
                "institutionEmail": {
                    "type": "string",
                    "description": "The user's institutional email address.\n\n**Since**: 3900.19.0",
                    "maxLength": 254
                },
                "webPage": {
                    "type": "string",
                    "description": "The URL of the user's personal website.",
                    "maxLength": 100
                }
            }
        },
        "address": {
            "type": "object",
            "description": "The user's mailing address.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.Address",
            "properties": {
                "street1": {
                    "type": "string",
                    "description": "The street address of the user.",
                    "maxLength": 100
                },
                "street2": {
                    "type": "string",
                    "description": "An additional field to store the street address of the user.",
                    "maxLength": 100
                },
                "city": {
                    "type": "string",
                    "description": "The city the user resides in.",
                    "maxLength": 50
                },
                "state": {
                    "type": "string",
                    "description": "The state or province the user resides in.",
                    "maxLength": 50
                },
                "zipCode": {
                    "type": "string",
                    "description": "The zip code or postal code the user resides in.",
                    "maxLength": 50
                },
                "country": {
                    "type": "string",
                    "description": "The country the user resides in.",
                    "maxLength": 50
                }
            }
        },
        "locale": {
            "type": "object",
            "description": "The user's localization settings.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.Locale",
            "properties": {
                "id": {
                    "type": "string",
                    "description": "The locale specified by the user.  This locale will be used anywhere the user is allowed to customize their locale; courses may force a specific locale, overriding the user's locale preference."
                },
                "calendar": {
                    "type": "string",
                    "description": "The calendar type specified by the user.\n\n\n| Type      | Description\n | --------- | --------- |\n| Gregorian | Gregorian |\n| GregorianHijri | Gregorian &amp; Hijri |\n| Hijri | Hijri |\n| HijriGregorian | Hijri &amp; Gregorian |\n",
                    "enum": [
                        "Gregorian",
                        "GregorianHijri",
                        "Hijri",
                        "HijriGregorian"
                    ]
                },
                "firstDayOfWeek": {
                    "type": "string",
                    "description": "The user's preferred first day of the week.\n\n\n| Type      | Description\n | --------- | --------- |\n| 0 | Sunday |\n| 1 | Monday |\n| 6 | Saturday |\n",
                    "enum": [
                        "0",
                        "1",
                        "6"
                    ]
                }
            }
        },
        "avatar": {
            "type": "object",
            "description": "The user's avatar metadata\n\n**Since**: 3800.13.0",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.AvatarTOPub",
            "properties": {
                "source": {
                    "type": "string",
                    "description": "The source of the user's avatar\n\n**Since**: 3800.13.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Default | The server default avatar |\n| User | The user set his/her own avatar |\n| System | A privileged user set the user's avatar to something other than default |\n",
                    "enum": [
                        "Default",
                        "User",
                        "System"
                    ]
                },
                "uploadId": {
                    "type": "string",
                    "description": "The upload id of the avatar image file, if referencing a newly-uploaded file\n\n**Since**: 3800.13.0"
                },
                "resourceId": {
                    "type": "string",
                    "description": "The resource file id of the user's avatar, if referencing a Content Collection Resource\n\n**Since**: 3900.50.0"
                }
            }
        },
        "pronunciation": {
            "type": "string",
            "description": "Pronunciation text for user's name\n\n**Since**: 3900.32.0"
        },
        "pronunciationAudio": {
            "type": "object",
            "description": "Pronunciation Audio file for user's name\n\n**Since**: 3900.32.0",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.PronunciationAudioTOPub",
            "properties": {
                "uploadId": {
                    "type": "string"
                }
            }
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.users.UserV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1UsersUserV1"
},
    requestType: "UsersCreateUserRequest",
    isMultipart: false,
    originalName: "createUser",
    isWrite: true
  } as ApiMethodInfo,

  getUser: {
    description: "Loads a user.\n\nProperties returned will depend on the caller's entitlements.\n\nCallers with the entitlement 'user.VIEW' will always get a minimal set of core properties:\n\n- id\n- name.given\n- name.family\n- name.middle\n- systemRoleIds\n\nDepending on the Learn administrator customizable user field display settings, as well as the target user's personal visibility settings, the following fields might also be included:\n\n- userName\n- educationLevel\n- gender\n- birthDate\n- name.other\n- name.suffix\n- name.title\n- job.*\n- contact.*\n- address.*\n\nCallers asking for their own user record get all fields listed above, plus:\n\n- locale.*\n\nAll user properties are provided to callers with one of the entitlements 'system.user.properties.MODIFY', 'system.useradmin.generic.VIEW', or 'system.user.VIEW'.\n\n**Since**: 2015.11.0",
    method: "get",
    path: "/learn/api/public/v1/users/{userId}",
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
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.users.User",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1UsersUser"
},
    requestType: "UsersGetUserRequest",
    isMultipart: false,
    originalName: "getUser",
    isWrite: false
  } as ApiMethodInfo,

  deleteUser: {
    description: "Deletes a user.\n\nThe 'system.user.DELETE' entitlement is needed.\n\n**Since**: 2015.11.0",
    method: "delete",
    path: "/learn/api/public/v1/users/{userId}",
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
        "name": "fields",
        "type": "string",
        "description": "A comma-delimited list of fields to include in the response. If not specified, all fields will be returned.",
        "required": false
    }
],
    requestBodySchema: null,
    responseSchema: null,
    requestType: "UsersDeleteUserRequest",
    isMultipart: false,
    originalName: "deleteUser",
    isWrite: true
  } as ApiMethodInfo,

  updateUser: {
    description: "Updates a user.\n\nCallers may update their own user record if they have the 'self.user.MODIFY' entitlement.  Updating other users requires the 'system.user.properties.MODIFY' entitlement.\n\nCertain properties may be edited by callers with more finely grained entitlements: \n\n | Field                  | Entitlements Required                               |\n |------------------------|-----------------------------------------------------|\n | systemRoleIds          | system.user.MODIFY, system.user-system-role.MODIFY  |\n | availability.available | system.user.MODIFY, system.user.availability.MODIFY |\n | password               | system.user.MODIFY, system.user-password.MODIFY     |\n \n\n**Since**: 2015.11.0",
    method: "patch",
    path: "/learn/api/public/v1/users/{userId}",
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
            "description": "An optional externally-defined unique ID for the user.  Defaults to the userName.\n\nFormerly known as 'batchUid'.",
            "maxLength": 256
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this user.  This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "userName": {
            "type": "string",
            "description": "The userName property, shown in the UI."
        },
        "studentId": {
            "type": "string",
            "description": "The user's student ID name or number as defined by the school or institution.",
            "maxLength": 100
        },
        "password": {
            "type": "string",
            "description": "The user's login password."
        },
        "educationLevel": {
            "type": "string",
            "description": "The education level of this user.\n\n\n| Type      | Description\n | --------- | --------- |\n| K8 | Kindergarten through 8th grade |\n| HighSchool | Grades 9 through 12. |\n| Freshman | College or university freshman. |\n| Sophomore | College or university sophomore. |\n| Junior | College or university junior. |\n| Senior | College or university senior. |\n| GraduateSchool | Graduate school student. |\n| PostGraduateSchool | Post-graduate school student. |\n| Unknown | Education Level is not known, or not specified. |\n",
            "enum": [
                "K8",
                "HighSchool",
                "Freshman",
                "Sophomore",
                "Junior",
                "Senior",
                "GraduateSchool",
                "PostGraduateSchool",
                "Unknown"
            ]
        },
        "gender": {
            "type": "string",
            "description": "The gender of this user.\n\n\n| Type      | Description\n | --------- | --------- |\n| Female | Female |\n| Male | Male |\n| Other | Other  **Since**: 3900.32.0 |\n| Unknown | Gender is not known, or not specified. |\n",
            "enum": [
                "Female",
                "Male",
                "Other",
                "Unknown"
            ]
        },
        "pronouns": {
            "type": "string",
            "description": "The pronouns of this user.\n\n**Since**: 3900.27.0",
            "maxLength": 1000
        },
        "birthDate": {
            "type": "string",
            "format": "date-time",
            "description": "The birth date of this user. Only the date portion of this value has significance, since a person's birthdate represents a full day and not a moment in time. Take care to ignore the zeroed time portion when deserializing this value to ensure it's not converted to the previous calendar day if your local time zone has a negative UTC offset."
        },
        "institutionRoleIds": {
            "description": "The primary and secondary institution roles assigned to this user. The primary institution role is the first item in the list, followed by all secondary institution roles sorted alphabetically.\n\n**Since**: 3300.3.0",
            "$ref": "#/definitions/java.util.List<java.lang.String>"
        },
        "systemRoleIds": {
            "description": "The system roles (the administrative user roles in the UI) for this user.  The first role in this list is the user's primary system role, while the remaining are secondary system roles.",
            "$ref": "#/definitions/java.util.List<blackboard.data.user.User.SystemRole>"
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the user account.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.Availability",
            "properties": {
                "available": {
                    "type": "string",
                    "description": "Whether the user is available within the system. Unavailable users cannot log in.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| Disabled |   **Since**: 3100.0.0 |\n",
                    "enum": [
                        "Yes",
                        "No",
                        "Disabled"
                    ]
                }
            }
        },
        "name": {
            "type": "object",
            "description": "Properties used to build the user's display name.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.Name",
            "properties": {
                "given": {
                    "type": "string",
                    "description": "The given (first) name of this user.",
                    "maxLength": 100
                },
                "family": {
                    "type": "string",
                    "description": "The family (last) name of this user.",
                    "maxLength": 100
                },
                "middle": {
                    "type": "string",
                    "description": "The middle name of this user.",
                    "maxLength": 100
                },
                "other": {
                    "type": "string",
                    "description": "The other name (nickname) of this user.",
                    "maxLength": 100
                },
                "suffix": {
                    "type": "string",
                    "description": "The suffix of this user's name.  Examples: Jr., III, PhD.",
                    "maxLength": 100
                },
                "title": {
                    "type": "string",
                    "description": "The title of this user.  Examples: Mr., Ms., Dr.",
                    "maxLength": 100
                },
                "preferredDisplayName": {
                    "type": "string",
                    "description": "The preferred display name of this user.\n\n**Since**: 3900.48.0\n\n\n| Type      | Description\n | --------- | --------- |\n| GivenName | User requests displaying givenName when formatting names for display. This is the default behavior. |\n| OtherName | User requests displaying otherName when formatting names for display. |\n| Both | User requests displaying otherName and givenName when formatting names for display. |\n",
                    "enum": [
                        "GivenName",
                        "OtherName",
                        "Both"
                    ]
                }
            }
        },
        "job": {
            "type": "object",
            "description": "The user's job information.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.Job",
            "properties": {
                "title": {
                    "type": "string",
                    "description": "The user's job title.",
                    "maxLength": 100
                },
                "department": {
                    "type": "string",
                    "description": "The department the user belongs to.",
                    "maxLength": 100
                },
                "company": {
                    "type": "string",
                    "description": "The company the user works for.",
                    "maxLength": 100
                }
            }
        },
        "contact": {
            "type": "object",
            "description": "The user's contact information.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.Contact",
            "properties": {
                "homePhone": {
                    "type": "string",
                    "description": "The user's home phone number.",
                    "maxLength": 50
                },
                "mobilePhone": {
                    "type": "string",
                    "description": "The user's mobile phone number.",
                    "maxLength": 50
                },
                "businessPhone": {
                    "type": "string",
                    "description": "The user's business phone number.",
                    "maxLength": 50
                },
                "businessFax": {
                    "type": "string",
                    "description": "The user's business fax number.",
                    "maxLength": 50
                },
                "email": {
                    "type": "string",
                    "description": "The user's email address.",
                    "maxLength": 100
                },
                "institutionEmail": {
                    "type": "string",
                    "description": "The user's institutional email address.\n\n**Since**: 3900.19.0",
                    "maxLength": 254
                },
                "webPage": {
                    "type": "string",
                    "description": "The URL of the user's personal website.",
                    "maxLength": 100
                }
            }
        },
        "address": {
            "type": "object",
            "description": "The user's mailing address.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.Address",
            "properties": {
                "street1": {
                    "type": "string",
                    "description": "The street address of the user.",
                    "maxLength": 100
                },
                "street2": {
                    "type": "string",
                    "description": "An additional field to store the street address of the user.",
                    "maxLength": 100
                },
                "city": {
                    "type": "string",
                    "description": "The city the user resides in.",
                    "maxLength": 50
                },
                "state": {
                    "type": "string",
                    "description": "The state or province the user resides in.",
                    "maxLength": 50
                },
                "zipCode": {
                    "type": "string",
                    "description": "The zip code or postal code the user resides in.",
                    "maxLength": 50
                },
                "country": {
                    "type": "string",
                    "description": "The country the user resides in.",
                    "maxLength": 50
                }
            }
        },
        "locale": {
            "type": "object",
            "description": "The user's localization settings.",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.Locale",
            "properties": {
                "id": {
                    "type": "string",
                    "description": "The locale specified by the user.  This locale will be used anywhere the user is allowed to customize their locale; courses may force a specific locale, overriding the user's locale preference."
                },
                "calendar": {
                    "type": "string",
                    "description": "The calendar type specified by the user.\n\n\n| Type      | Description\n | --------- | --------- |\n| Gregorian | Gregorian |\n| GregorianHijri | Gregorian &amp; Hijri |\n| Hijri | Hijri |\n| HijriGregorian | Hijri &amp; Gregorian |\n",
                    "enum": [
                        "Gregorian",
                        "GregorianHijri",
                        "Hijri",
                        "HijriGregorian"
                    ]
                },
                "firstDayOfWeek": {
                    "type": "string",
                    "description": "The user's preferred first day of the week.\n\n\n| Type      | Description\n | --------- | --------- |\n| 0 | Sunday |\n| 1 | Monday |\n| 6 | Saturday |\n",
                    "enum": [
                        "0",
                        "1",
                        "6"
                    ]
                }
            }
        },
        "avatar": {
            "type": "object",
            "description": "The user's avatar metadata\n\n**Since**: 3800.13.0",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.AvatarTOPub",
            "properties": {
                "source": {
                    "type": "string",
                    "description": "The source of the user's avatar\n\n**Since**: 3800.13.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Default | The server default avatar |\n| User | The user set his/her own avatar |\n| System | A privileged user set the user's avatar to something other than default |\n",
                    "enum": [
                        "Default",
                        "User",
                        "System"
                    ]
                },
                "uploadId": {
                    "type": "string",
                    "description": "The upload id of the avatar image file, if referencing a newly-uploaded file\n\n**Since**: 3800.13.0"
                },
                "resourceId": {
                    "type": "string",
                    "description": "The resource file id of the user's avatar, if referencing a Content Collection Resource\n\n**Since**: 3900.50.0"
                }
            }
        },
        "pronunciation": {
            "type": "string",
            "description": "Pronunciation text for user's name\n\n**Since**: 3900.32.0"
        },
        "pronunciationAudio": {
            "type": "object",
            "description": "Pronunciation Audio file for user's name\n\n**Since**: 3900.32.0",
            "title": "blackboard.webapps.blackboard.publicapi.v1.users.UserV1.PronunciationAudioTOPub",
            "properties": {
                "uploadId": {
                    "type": "string"
                }
            }
        }
    },
    "description": ""
},
    responseSchema: {
    "type": "reference",
    "ref": "blackboard.webapps.blackboard.publicapi.v1.users.User",
    "typeName": "BlackboardWebappsBlackboardPublicapiV1UsersUser"
},
    requestType: "UsersUpdateUserRequest",
    isMultipart: false,
    originalName: "updateUser",
    isWrite: true
  } as ApiMethodInfo,

  getUserAvatar: {
    description: "Gets a user's avatar image.\n\nThe response is an HTTP redirect rather then image raw data. It is up to the caller of the api to follow the redirect and download the image.\n\nThe redirect link returned is signed on behalf of the user of the API. It is expiring, so it is not recommended for bookmarking. The caller of this API is checked for permissions to see the requested user's resource.\n\n**Since**: 3800.10.0",
    method: "get",
    path: "/learn/api/public/v1/users/{userId}/avatar",
    pathParams: [
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
    requestType: "UsersGetUserAvatarRequest",
    isMultipart: false,
    originalName: "getUserAvatar",
    isWrite: false
  } as ApiMethodInfo,

  getObservees: {
    description: "Returns a list of users being observed by a given user.\n\nThe 'observer.associations.VIEW' entitlement is needed as well as being able to view the provided user.\n\n**Since**: 3500.5.0",
    method: "get",
    path: "/learn/api/public/v1/users/{userId}/observees",
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
    requestType: "UsersGetObserveesRequest",
    isMultipart: false,
    originalName: "getObservees",
    isWrite: false
  } as ApiMethodInfo,

  getObservers: {
    description: "Returns a list of users observing a given user.\n\nThe 'observer.associations.VIEW' entitlement is needed as well as being able to view the provided user.\n\n**Since**: 3500.5.0",
    method: "get",
    path: "/learn/api/public/v1/users/{userId}/observers",
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
    requestType: "UsersGetObserversRequest",
    isMultipart: false,
    originalName: "getObservers",
    isWrite: false
  } as ApiMethodInfo,

  createObserver: {
    description: "Creates an observer/observee association. The user identified by userId must not have the OBSERVER system role. Similarly, the user identified by observerId must have the OBSERVER system role.\n\nThe 'system.observer_user.CREATE' entitlement is needed as well as being able to view the provided users.\n\n**Since**: 3500.5.0",
    method: "put",
    path: "/learn/api/public/v1/users/{userId}/observers/{observerId}",
    pathParams: [
    {
        "name": "userId",
        "type": "string",
        "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>primary</td> <td>_123_1</td>         </tr>         <tr>           <td>externalId</td> <td>externalId:jsmith</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>uuid</td> <td>uuid:915c7567d76d444abf1eed56aad3beb5</td>         </tr>       </tbody>   </table> </div> The following id prefixes require that the caller have the system.user.properties.MODIFY entitlement to use and will fail with a security error if attempted to be used without that.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>institutionEmail</td> <td>institutionEmail:name@example.com</td>         </tr>         <tr>           <td>email</td> <td>email:name@example.com</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>studentId</td> <td>studentId:123456 </td>         </tr>       </tbody>   </table> </div>",
        "required": true
    },
    {
        "name": "observerId",
        "type": "string",
        "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:jsmith                     |\n | userName   | userName:jsmith                       |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n \n\n**Since**: 3500.5.0",
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
    "ref": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.users.UserV1>",
    "typeName": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1UsersUserV1"
},
    requestType: "UsersCreateObserverRequest",
    isMultipart: false,
    originalName: "createObserver",
    isWrite: true
  } as ApiMethodInfo,

  deleteObserver: {
    description: "Removes an observer/observee association.\n\nThe 'system.observer_user.DELETE' entitlement is needed as well as being able to view the provided users.\n\n**Since**: 3500.5.0",
    method: "delete",
    path: "/learn/api/public/v1/users/{userId}/observers/{observerId}",
    pathParams: [
    {
        "name": "userId",
        "type": "string",
        "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>primary</td> <td>_123_1</td>         </tr>         <tr>           <td>externalId</td> <td>externalId:jsmith</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>uuid</td> <td>uuid:915c7567d76d444abf1eed56aad3beb5</td>         </tr>       </tbody>   </table> </div> The following id prefixes require that the caller have the system.user.properties.MODIFY entitlement to use and will fail with a security error if attempted to be used without that.   <div style=\"overflow-x:auto;\">   <table>     <tr>       <th>ID type</th>       <th>Example</th>     </tr>       <tbody>         <tr>           <td>institutionEmail</td> <td>institutionEmail:name@example.com</td>         </tr>         <tr>           <td>email</td> <td>email:name@example.com</td>         </tr>         <tr>           <td>userName</td> <td>userName:jsmith</td>         </tr>         <tr>           <td>studentId</td> <td>studentId:123456 </td>         </tr>       </tbody>   </table> </div>",
        "required": true
    },
    {
        "name": "observerId",
        "type": "string",
        "description": "The user ID.  This may be the primary ID, or any of the secondary IDs prefixed with the ID type. \n\n | ID type    | Example                               |\n |------------|---------------------------------------|\n | primary    | _123_1                                |\n | externalId | externalId:jsmith                     |\n | userName   | userName:jsmith                       |\n | uuid       | uuid:915c7567d76d444abf1eed56aad3beb5 |\n \n\n**Since**: 3500.5.0",
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
    requestType: "UsersDeleteObserverRequest",
    isMultipart: false,
    originalName: "deleteObserver",
    isWrite: true
  } as ApiMethodInfo,

  getUserPronunciationAudio: {
    description: "Gets a user's pronunciation audio\n\nThe response is an HTTP redirect rather than an audio file. It is up to the caller of the api to follow the redirect and download the image.\n\nThe redirect link returned is signed on behalf of the user of the API. It is expiring, so it is not recommended for bookmarking. The caller of this API is checked for permissions to see the requested user's resource.\n\n**Since**: 3900.32.0",
    method: "get",
    path: "/learn/api/public/v1/users/{userId}/pronunciationAudio",
    pathParams: [
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
    requestType: "UsersGetUserPronunciationAudioRequest",
    isMultipart: false,
    originalName: "getUserPronunciationAudio",
    isWrite: false
  } as ApiMethodInfo,

  getCurrentActiveUserById: {
    description: "Displays active session information for a specific user.\n\nThe entitlement system.user.sessions.VIEW is needed to request a user's active sessions.\n\n**Since**: 3800.4.0",
    method: "get",
    path: "/learn/api/public/v1/users/{userId}/sessions",
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
    requestType: "UsersGetCurrentActiveUserByIdRequest",
    isMultipart: false,
    originalName: "getCurrentActiveUserById",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const UsersHandlers = {
  getUsers: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UsersMethods.getUsers;
    
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

  createUser: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UsersMethods.createUser;
    
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

  getUser: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UsersMethods.getUser;
    
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

  deleteUser: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UsersMethods.deleteUser;
    
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

  updateUser: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UsersMethods.updateUser;
    
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

  getUserAvatar: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UsersMethods.getUserAvatar;
    
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

  getObservees: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UsersMethods.getObservees;
    
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

  getObservers: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UsersMethods.getObservers;
    
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

  createObserver: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UsersMethods.createObserver;
    
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

  deleteObserver: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UsersMethods.deleteObserver;
    
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

  getUserPronunciationAudio: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UsersMethods.getUserPronunciationAudio;
    
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

  getCurrentActiveUserById: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = UsersMethods.getCurrentActiveUserById;
    
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
