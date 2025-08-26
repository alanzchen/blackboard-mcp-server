import fetch from 'node-fetch';
import { ApiMethodInfo, ApiParameter } from '../api-types.js';
import FormData from 'form-data';
import { baseUrl, apiVersion, getRequestHeaders, handleResponse } from '../config.js';
import * as fs from 'fs';
import * as path from 'path';
import { typeMap } from '../utils/type-map.js';

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
