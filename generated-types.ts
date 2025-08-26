// Generated TypeScript types from Blackboard Learn API Swagger specification
// This file is auto-generated. Do not edit manually.

export interface BlackboardPlatformRestPublicapiV1CommonFraction {
  /** The numerator of this fraction. */
  numerator?: JavaMathBigInteger;
  /** The denominator of this fraction. */
  denominator?: JavaMathBigInteger;
}

export interface BlackboardPlatformRestPublicapiV1ContentContentHandler {
  /** The content handler's ID.

Publicly supported handlers: 

 | ID                                 | Documentation                   | Since     |
 |------------------------------------|---------------------------------|-----------|
 | resource/x-bb-document             | ContentItemTOPubV1              |  3000.1.0 |
 | resource/x-bb-externallink         | ExternalLinkTOPubV1             |  3000.1.0 |
 | resource/x-bb-folder               | ContentFolderTOPubV1            |  3000.1.0 |
 | resource/x-bb-courselink           | CourseLinkTOPubV1               |  3100.5.0 |
 | resource/x-bb-forumlink            | DiscussionLinkTOPubV1           |  3100.6.0 |
 | resource/x-bb-blti-link            | BasicLTITOPubV1                 |  3200.6.0 |
 | resource/x-bb-file                 | ContentFileTOPubV1              |  3200.6.0 |
 | resource/x-bb-asmt-test-link       | TestLinkTOPubV1                 |  3300.5.0 |
 | resource/x-bb-assignment           | AssignmentTOPubV1               |  3400.9.0 |
 | resource/x-bb-blti-bltiplacement-* | BasicLTIPlacementContentTOPubV1 |  3600.0.0 |
 

For handlers that are not publicly supported yet, their ID will be shown here, and updates to common content attributes are allowed, but extended handler-specific attributes will not be visible. */
  id?: string;
}

export interface BlackboardPlatformRestPublicapiV1ContentOriginalityReportingTool {
  /** The Originality Reporting Tools handler id. */
  id?: string;
}

export interface BlackboardPlatformRestPublicapiV1SystemSystemTaskResult {
  /** The identifier used to determine type of the system task result. */
  id?: string;
}

export type BlackboardPlatformRestUtilRawText = Record<string, unknown>;

export interface BlackboardPlatformRestspringExceptionRestException {
  /** Represents HTTP Status code in the response header. */
  status?: string;
  /** The error code specific to a particular REST API. It is usually something that conveys information specific to the problem domain. For cases where the HTTP Status code conveys all the information required (such as a 404-Not Found) then the code may be omitted. */
  code?: string;
  /** Error message that should be easy to understand and convey a concise reason as to why the error occurred */
  message: string;
  /** Represents any technical information that a developer calling REST API might find useful. */
  developerMessage?: string;
  /** Indicates a URL that anyone seeing the error message can click in a browser. The target web page should describe the error condition fully, as well as potential solutions to help them resolve the error condition */
  extraInfo?: string;
}

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginAssessmentPublicapiV1QuestionsQuestionV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginAttendancePublicapiV1AttendanceRecordV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginAttendancePublicapiV1CourseMeetingV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginCalendarPublicapiV1CalendarItemV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginContentRestPublicapiV1ContentV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1DiscussionV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginFileRestPublicapiV1UploadedFileInfoV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginGroupspacePublicapiV1GroupsGroupMembershipV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginGroupspacePublicapiV1GroupsGroupV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginGroupspacePublicapiV2GroupsGroupV2 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginRubricSpringRestPublicapiV1ExtendedRubricDefinitionV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginRubricSpringRestPublicapiV1RubricAssociationV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginRubricSpringRestPublicapiV1RubricEvaluationExpandV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseACLUserPredicateV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseRuleCriteriaV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseRuleV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AnnouncementsAnnouncementV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AnnouncementsCourseAnnouncementV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CategoriesCategoryCourseMembershipV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CategoriesCategoryV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1ContentContentGroupV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1ContentCreateAssignmentResultV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CoursesCourseChildV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CoursesCourseTaskV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CoursesCourseV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1DatasourcesDataSourceV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyHierarchyNodeCourseV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyHierarchyNodeUserV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyInstitutionalHierarchyToolV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNodeAdminV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1LtiLTIDomainConfigV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1LtiLTIPlacementV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1MembershipsCourseMembershipV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1MessageCourseMessageV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1PronounsPronounV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1TermsTermV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1UsersUserV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV2CoursesCourseV2 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1AttemptFileV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradableItemOverrideV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradeColumnV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradeNotationV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradeSchemaV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GroupAttemptV1 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV2AttemptV2 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV2GradeColumnV2 = Record<string, unknown>;

export type BlackboardPlatformRestspringHttpRestResponseEntityjavaLangVoid = Record<string, unknown>;

export interface BlackboardPlatformRestspringPublicapiV1CommonParamsCourseIdParam {
  id?: string;
}

export interface BlackboardPluginAssessmentPublicapiV1ProctoringProctoringService {
  /** The ID associated with this proctoring service. */
  id?: string;
  /** The name of the proctoring service. */
  name?: string;
  /** The handle that uniquely identifies this proctoring service. */
  handle?: string;
  /** The vendors of the proctoring service.


| Type      | Description
 | --------- | --------- |
| Respondus | Respondus |
| Internal | For internal testing only.  For use with tests which require multiple proctoring services. |
| Lti | LTI Proctoring Placement  **Since**: 3900.12.0 |
 */
  vendor?: string;
  /** The url for the vendors assessment settings LTI tool. */
  assessmentSettingsUrl?: string;
  /** Custom launch parameters for the vendors assessment settings LTI tool. */
  assessmentSettingsCustomParameters?: JavaUtilMapjavaLangStringjavaLangString;
  /** The download url for the vendors secure browser. */
  browserDownloadUrl?: string;
  /** Settings controlling availability of the proctoring service. */
  availability?: Record<string, unknown>;
}

export interface BlackboardPluginAssessmentPublicapiV1QuestionsQuestion {
  /** The id of the question. */
  id?: string;
  /** The title of the question. */
  title?: string;
  /** The main text content for the question. It may include plain and formatted text, and all kinds of content supported by the full text editor. */
  text?: string;
  /** Position of the Question on the Assessment Canvas. */
  position?: number;
  /** The point value for the question. */
  points?: number;
  /** Feedback displayed to students when their submitted response is correct. */
  correctResponseFeedback?: string;
  /** Feedback displayed to students when their submitted response is incorrect. */
  incorrectResponseFeedback?: string;
  /** Text added to the question as a note for the instructor. It is not intended to be displayed to students. */
  instructorNotes?: string;
  questionHandler?: BlackboardPluginAssessmentPublicapiV1QuestionsHandlersQuestionHandler;
}

export interface BlackboardPluginAssessmentPublicapiV1QuestionsHandlersQuestionHandler {
  /** Type of Question supported.


| Type      | Description
 | --------- | --------- |
| Presentation |   **Since**: 3300.9.0 |
| EitherOr | Read Only  **Since**: 3300.9.0 |
| Essay | Read Only  **Since**: 3300.9.0 |
| MultipleAnswer | Read Only  **Since**: 3400.4.0 |
| Numeric | Read Only  **Since**: 3400.4.0 |
| MultipleChoice | Read Only  **Since**: 3400.4.0 |
| Ordering | Read Only  **Since**: 3400.4.0 |
| Matching | Read Only  **Since**: 3400.4.0 |
| FillInTheBlank | Read Only  **Since**: 3400.4.0 |
| Calculated | Read Only  **Since**: 3400.4.0 |
| FileResponse | Read Only  **Since**: 3400.4.0 |
| LikertOpinionScale | Read Only  **Since**: 3400.4.0 |
| QuizBowl | Read Only  **Since**: 3400.4.0 |
| HotSpot | Read Only  **Since**: 3400.4.0 |
| JumbledSentence | Read Only  **Since**: 3400.4.0 |
| FillInTheBlankPlus | Read Only  **Since**: 3400.4.0 |
| QuestionBlock | Read Only  **Since**: 3700.2.0 |
| PageBreak | Read Only  **Since**: 3900.51.0 |
| AiChat | AI Chat question  **Since**: 3900.95.0 |
 */
  type?: string;
}

export interface BlackboardPluginAttendancePublicapiV1AttendanceRecord {
  /** The primary ID of the attendance record. */
  id?: number;
  /** The primary id of the meeting. */
  meetingId?: string;
  /** The learn external id of the user. */
  userId?: string;
  /** The attendance status of the user.


| Type      | Description
 | --------- | --------- |
| Absent |  |
| Late |  |
| Present |  |
| Excused |  |
 */
  status?: string;
  /** The user id who last modified this attendance record */
  modifiedByUserId?: string;
  /** Created date timestamp for attendance record */
  createdTime?: string;
  /** Modified date timestamp for attendance record */
  modifiedTime?: string;
}

export interface BlackboardPluginAttendancePublicapiV1CourseMeeting {
  /** The primary ID of the meeting. */
  id?: number;
  /** The primary ID of the course. */
  courseId?: string;
  /** The title of the meeting */
  title?: string;
  /** The description of the meeting */
  description?: string;
  /** The start time of meeting */
  start?: string;
  /** The end time of meeting */
  end?: string;
  /** The externalLink of course meeting */
  externalLink?: string;
}

export interface BlackboardPluginAttendancePublicapiV1DownloadAttendanceDataDownloadUrl {
  /** The download url of attendance data file. */
  downloadUrl?: string;
}

export interface BlackboardPluginCalendarPublicapiV1CalendarItem {
  /** Calendar item identifier that indicates the id of the calendar item source which the item was created from. (Ex. '_417_1') */
  id?: string;
  /** The type of this Calendar Item.


| Type      | Description
 | --------- | --------- |
| Course |  |
| GradebookColumn | Read only. |
| Institution |  |
| OfficeHours |  |
| Personal |  |
 */
  type?: string;
  /** Calendar source identifier which indicates the calendar on which the calendar item was created. Examples of possible values : "PERSONAL", "INSTITUTION", and course id in the format of "_3_1". */
  calendarId?: string;
  /** Calendar source label/display name. */
  calendarName?: string;
  /** Title of the calendar item. Title length cannot exceed 255 characters. */
  title?: string;
  /** Description of the calendar item. */
  description?: string;
  /** Location of the calendar item and it cannot exceed 1024 characters. */
  location?: string;
  /** Start date of the calendar item either in the past if the calendar item is for an event that's already started OR in the future if it's for an event to start in the future. This is always set and should occur before the end date. */
  start?: string;
  /** End date of the calendar item either in the past if the calendar item is for an event that's already end OR in the future if it's for an event to end in the future. This is always set and should occur after the start date. */
  end?: string;
  /** Date when the calendar item was last modified. */
  modified?: string;
  /** Color to use for the calendar item. It's a shared setting for all calendar items with the same calendar source identifier. */
  color?: string;
  /** Whether resizing of the calendar item should NOT be allowed. */
  disableResizing?: boolean;
  /** Get the user who created this calendar item. This will be null for non-personal events when the creator has been deleted. */
  createdByUserId?: string;
  /** Extra calendar item properties if it is a GradebookColumn calendar item. */
  dynamicCalendarItemProps?: Record<string, unknown>;
  /** Recurring definition if the calendar item is a repeatable calendar item. This object must be defined for <code>OfficeHours</code> type calendar items. */
  recurrence?: BlackboardPluginCalendarPublicapiV1CalendarItemRecurrence;
  /** Learning Tools Interoperability (LTI) link definition if available. This object must be defined for <code>Course</code> type calendar item. */
  ltiLaunchDeepLink?: BlackboardPluginCalendarPublicapiV1LTILaunchDeepLink;
}

export interface BlackboardPluginCalendarPublicapiV1CalendarItemRecurrence {
  /** Recurrence count indicating how many times the calendar item should be repeated. Either this count OR the 'until' date is/'should be' set. When creating a calendar item, 'until' date will be used if both 'until' date and the count are set. */
  count?: number;
  /** Frequency of the calendar item repeated.


| Type      | Description
 | --------- | --------- |
| Monthly |  |
| Weekly |  |
| Daily |  |
 */
  frequency?: string;
  /** Interval between recurrences depends on the repeating type. For example, if the calendar times should be repeated every three weeks, you need set interval to 3 as well as frequency to "Weekly". Minimum and Maximum allowed Intervals are 1 and 100 respectively. */
  interval?: number;
  /** This property is used in conjunction with the 'Monthly' frequency and it indicates on which day of the month the calendar item is/'should be' repeated on. The valid values are valid month days, that is, 1 to 31. Either this OR both 'monthPosition' and 'repeatDay' should be set to create a recurring calendar item with 'Monthly' frequency. */
  monthRepeatDay?: number;
  /** This property is used in conjunction with the 'Monthly' frequency and it indicates that the calendar item is/'should be' repeated on nth occurrence of 'repeatDay' in the month. Valid values for 'monthPosition' are integers in the range of -1 and 4 inclusive: -1 for the last occurrence, 1 for the first occurrence, 2 for the second occurrence, and so on. 0 is not used. */
  monthPosition?: number;
  /** The original start date for the calendar item. */
  originalStart?: string;
  /** The original end date for the calendar item. */
  originalEnd?: string;
  /** Calendar item that's repeated is part of a recurring series of calendar events but the item has been changed since its original creation. In other words, the calendar item has been modified to no longer align with the recurring series (day/time changed for example) of events. This can only be {@code true} if the calendar item is repeatable. */
  repeatBroken?: boolean;
  /** For monthly recurring event, repeat by day of week.


| Type      | Description
 | --------- | --------- |
| Su |  |
| Mo |  |
| Tu |  |
| We |  |
| Th |  |
| Fr |  |
| Sa |  |
 */
  repeatDay?: string;
  /** The date the calendar item should be repeated until. Either this 'until' date OR the count is/'should be' set. When creating a calendar item, 'until' date will be used if both 'until' date and the count are set. */
  until?: string;
  /** This property is used in conjunction with the 'Weekly' frequency and it indicates the days of the week the calendar item should be repeated on. */
  weekDays?: JavaUtilListblackboardPluginCalendarRecurRecurringManagerBYDAY;
}

export interface BlackboardPluginCalendarPublicapiV1LTILaunchDeepLink {
  /** Placement handle Id of the Learning Tools Interoperability link */
  placementHandle?: string;
  /** Unique Id of the Learning Tools Interoperability link */
  uuid?: string;
  /** URL to launch of the Learning Tools Interoperability link */
  url?: string;
  /** Title of the Learning Tools Interoperability link */
  title?: string;
  /** Custom parameters of the Learning Tools Interoperability link */
  customParameters?: JavaUtilMapjavaLangStringjavaLangString;
}

export interface BlackboardPluginContentRestPublicapiV1Content {
  /** The ID of the content. */
  id?: string;
  /** The ID of the content's parent.  Note that top-level contents do not have parents. The 'parentId' field is a writable field as of the Bb Learn 3200.6.0 release.  Specifying a new value in PATCH requests allows the Content object to be moved from one parent to another. */
  parentId?: string;
  /** The title or name of this content. Typically shown as the main text to click in the course outline when accessing the content. */
  title?: string;
  /** The body text associated with this content. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information. */
  body?: string;
  /** The short description of this content.

This field is not used in Classic courses.  For Ultra courses this is used to show information directly on the course outline. */
  description?: string;
  /** The date this content was created. */
  created?: string;
  /** The date this content was modified.

**Since**: 3700.4.0 */
  modified?: string;
  /** The position of this content within its parent folder. Position values are zero-based (the first element has a position value of zero, not one). Default position is last in the list of child contents under the parent. */
  position?: number;
  /** Indicates whether this content is allowed to have child content items. */
  hasChildren?: boolean;
  /** Indicates whether this content item has one or more gradebook columns.

Associated gradebook columns can be accessed via /learn/api/public/v1/courses/$courseId/gradebook/columns?contentId=$contentId

**Since**: 3000.11.0 */
  hasGradebookColumns?: boolean;
  /** Indicates whether this content item has one or more associated groups.

Associated groups can be accessed via /learn/api/public/v1/courses/$courseId/contents/$contentId/groups

**Since**: 3100.4.0 */
  hasAssociatedGroups?: boolean;
  /** Indicates whether the content is going to open in a new window.

**Since**: 3800.10.0 */
  launchInNewWindow?: boolean;
  /** Indicates whether Review Status is enabled for this content. Content items with review status enabled can be marked as reviewed by students in classic courses and content items with review status enabled in Ultra are either in a Forced Sequence or content that should be counted towards the progress tracking feature as of 3900.19 This can be used to track performance and in Adaptive Release rules to control the release of other content.

**Since**: 3700.15.0 */
  reviewable?: boolean;
  /** Settings controlling availability of the content to students. */
  availability?: Record<string, unknown>;
  /** Extended settings specific to this content item's content handler. */
  contentHandler?: BlackboardPlatformRestPublicapiV1ContentContentHandler;
  /** A list of Content History entities in representation of the copy process the current content item might have if is an LTI content, ordered from newest to oldest content and its respective source course from which current object is a copy of. */
  copyHistory?: JavaUtilListblackboardPluginContentRestPublicapiV1ContentCopyHistoryV1;
  /** A list of links to resources related to this content item. Supported relation types include:

- alternate

**Since**: 3900.0.0 */
  links?: JavaUtilSetblackboardPlatformRestspringPublicapiV1CommonHateoasLinkV1;
  /** Optional assessment subtype for further differentiation. For example, a test can have the subtype 'assignment' in Ultra, alongside AI conversations and knowledge checks, ensuring type-agnostic categorization. */
  subtype?: string;
}

export interface BlackboardPluginContentRestPublicapiV1FileAttachment {
  id?: string;
  fileName?: string;
  mimeType?: string;
}

export interface BlackboardPluginDiscussionboardSpringRestPublicapiV1Discussion {
  /** The ID of the discussion. (Ex. '_65_1') */
  id?: string;
  /** Title given to the discussion forum */
  title?: string;
  /** Indicates if the discussion is available */
  available?: boolean;
  /** Indicates if the discussion allows grading */
  gradable?: boolean;
  /** Id of the Grade column associated to this discussion. */
  gradebookColumnId?: string;
  /** Indicates if the discussion is a group discussion */
  groupDiscussion?: boolean;
  /** Date in which the discussion was created. */
  createdDate?: string;
  /** Last date in which the discussion was updated. */
  modifiedDate?: string;
  /** Topic of the Discussion. Only applicable to Ultra discussions. */
  topic?: BlackboardPluginDiscussionboardSpringRestPublicapiV1Topic;
}

export interface BlackboardPluginDiscussionboardSpringRestPublicapiV1Message {
  /** The Id of the message. */
  id?: string;
  /** The Id of the discussion. */
  discussionId?: string;
  /** The Id of the parent message. */
  parentId?: string;
  /** The Id of the message thread. */
  threadId?: string;
  /** The Id of the user who created the message. */
  userId?: string;
  /** The Id of the group, only set for group discussions. */
  groupId?: string;
  /** Given name of the user who created the message. */
  givenName?: string;
  /** Family name of the user who created the message. */
  familyName?: string;
  /** Status of the message.


| Type      | Description
 | --------- | --------- |
| Published | Message is published in the discussion and visible for all users. |
| Deleted | Message is shown in the discussion as soft-deleted. |
| Draft | Message is stored as a draft and only visible for the author user. |
 */
  status?: string;
  /** Body of the message, in BbML format. */
  body?: string;
  /** Date in which the message was posted. */
  postDate?: string;
  /** Last Date in which the message was edited. */
  editDate?: string;
  /** Date in which the message was created. */
  createdDate?: string;
  /** Last Date in which the message was modified. */
  modifiedDate?: string;
  /** Whether the user in context has read the message. */
  isRead?: boolean;
}

export interface BlackboardPluginDiscussionboardSpringRestPublicapiV1Topic {
  /** Body of the message, in BbML format. */
  body?: string;
  /** The Id of the group, only set for group discussions. */
  groupId?: string;
  /** Status of the message.


| Type      | Description
 | --------- | --------- |
| Published | Message is published in the discussion and visible for all users. |
| Deleted | Message is shown in the discussion as soft-deleted. |
| Draft | Message is stored as a draft and only visible for the author user. |
 */
  status?: string;
  /** The Id of the message. */
  id?: string;
  /** The Id of the discussion. */
  discussionId?: string;
  /** The Id of the parent message. */
  parentId?: string;
  /** The Id of the message thread. */
  threadId?: string;
  /** The Id of the user who created the message. */
  userId?: string;
  /** Given name of the user who created the message. */
  givenName?: string;
  /** Family name of the user who created the message. */
  familyName?: string;
  /** Date in which the message was created. */
  createdDate?: string;
  /** Last Date in which the message was modified. */
  modifiedDate?: string;
  /** Whether the user in context has read the message. */
  isRead?: boolean;
  /** Date in which the message was posted. */
  postDate?: string;
  /** Last Date in which the message was edited. */
  editDate?: string;
}

export interface BlackboardPluginGoalWebRestPublicapiV1ModelsExpandedGoal {
  /** The goal's Id. */
  id?: string;
  /** The goal's external Id. */
  externalId?: string;
  /** The goal's set Id. */
  goalSetId?: string;
  /** The goal's set expanded object. */
  goalSet?: BlackboardPluginGoalWebRestPublicapiV1ModelsGoalSet;
  /** The goal's category Id. */
  categoryId?: string;
  /** The goal's category expanded object. */
  category?: BlackboardPluginGoalWebRestPublicapiV1ModelsGoalCategory;
  /** The parent goal Id. */
  parentId?: string;
  /** The goal's name. */
  title?: string;
  /** The goal's text. */
  text?: string;
  /** The goal's type. */
  type?: string;
  /** The goal's availability status. */
  availability?: BlackboardPluginGoalWebRestPublicapiV1ModelsGoalAvailability;
  /** A list of hypermedia links associated with this goal */
  links?: JavaUtilSetblackboardPlatformRestspringPublicapiV1CommonHateoasLinkV1;
}

export interface BlackboardPluginGoalWebRestPublicapiV1ModelsGoalAvailability {
  /** The availability status of the Goal or Goal Set.


| Type      | Description
 | --------- | --------- |
| Yes | The goal or goal set is marked as active. |
| No | The goal or goal set is marked as inactive. |
| Restricted | The goal or goal set is marked as Restricted. |
 */
  available?: string;
}

export interface BlackboardPluginGoalWebRestPublicapiV1ModelsGoalCategory {
  /** The goal category's Id. */
  id?: string;
  /** The goal category's name. */
  name?: string;
  /** The goal category's availability. */
  availability?: Record<string, unknown>;
}

export interface BlackboardPluginGoalWebRestPublicapiV1ModelsGoalSet {
  /** The goal set's Id. */
  id?: string;
  /** The goal set's name. */
  name?: string;
  /** The goal set's type Id. */
  typeId?: string;
  /** The goal set's availability status. */
  availability?: BlackboardPluginGoalWebRestPublicapiV1ModelsGoalAvailability;
}

export interface BlackboardPluginGroupspacePublicapiV1GroupsGroup {
  /** The primary ID of the group. */
  id?: string;
  /** An externally-defined unique ID for the group. Defaults to a random UUID if not provided during create. */
  externalId?: string;
  /** The primary ID of the group's parent group set. */
  parentId?: string;
  /** The title of the group. */
  name?: string;
  /** The description of the group. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information. */
  description?: string;
  /** Whether or not this is a group set.

**Since**: 3700.1.0 */
  isGroupSet?: boolean;
  /** Settings controlling availability of the group to students. */
  availability?: Record<string, unknown>;
  /** Settings controlling enrollment of the group to students. */
  enrollment?: Record<string, unknown>;
  /** A system-wide unique identifier created by Learn

**Since**: 3700.7.0 */
  uuid?: string;
}

export interface BlackboardPluginGroupspacePublicapiV1GroupsGroupMembership {
  /** The user Id associated with this GroupMembership. See {@link GroupMembershipTORest#getUserId()} */
  userId?: string;
  /** The user associated with this GroupMembership.

Shown when adding the query parameter: "expand=user". And can be filtered with the "fields" query parameter, for example "fields=user.uuid".

**Since**: 3900.19.0 */
  user?: BlackboardPluginGroupspacePublicapiV2GroupsParamsTemporaryUser;
}

export interface BlackboardPluginGroupspacePublicapiV2GroupsGroupV2 {
  /** The primary ID of the group. */
  id?: string;
  /** An externally-defined unique ID for the group. Defaults to a random UUID if not provided during create. */
  externalId?: string;
  /** The primary ID of the group's parent group set. */
  groupSetId?: string;
  /** The title of the group. */
  name?: string;
  /** The description of the group. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information. */
  description?: string;
  /** Settings controlling availability of the group to students. */
  availability?: Record<string, unknown>;
  /** Settings controlling enrollment of the group to students. */
  enrollment?: Record<string, unknown>;
  /** A system-wide unique identifier created by Learn */
  uuid?: string;
  /** Created date of the group

**Since**: 3800.8.0 */
  created?: string;
  /** Modified date of the group

**Since**: 3800.8.0 */
  modified?: string;
}

export interface BlackboardPluginGroupspacePublicapiV2GroupsParamsTemporaryUser {
  /** The primary ID of the user. */
  id?: string;
  /** A secondary unique ID for the user. Used by LTI launches and other inter-server operations. */
  uuid?: string;
}

export interface BlackboardPluginRubricSpringRestPublicapiV1ExtendedRubricDefinition {
  /** Get the Id associated to this rubric (Ex. '_2_1') */
  id?: string;
  /** Get the Id from the course associated to this rubric (Ex. '_3_1') */
  courseId?: string;
  /** Get the title for this rubric (Ex. 'Sample Rubric') */
  title?: string;
  /** Get the description for this rubric (Ex. 'A rubric for base evluation template') */
  description?: string;
  /** Get the creation date for this rubric (Ex. '2022-01-01') */
  created?: string;
  /** Get the nearest modification date for this rubric (Ex. '2022-01-01') */
  modified?: string;
  /** Get the rubric type, alas Numeric or Percentage type. (Ex. 'Numeric', 'Percentage', 'Percentage Range', 'Numeric Range')


| Type      | Description
 | --------- | --------- |
| Numeric |  |
| Nonnumeric |  |
| NumericRange |  |
| Percentage |  |
| PercentageRange |  |
 */
  rubricType?: string;
  /** Wheater a rubric is read-only or not. Rubric assigned to an already graded content should be read-only. */
  readOnly?: boolean;
  /** Rubric Column Headers list. */
  columns?: JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricColumnV1;
  /** Rubric Row Criteria list. */
  rows?: JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricRowV1;
  /** Rubric Cells list. */
  cells?: JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricCellV1;
}

export interface BlackboardPluginRubricSpringRestPublicapiV1RubricAssociation {
  /** Get the Id from this association (Ex. '_2_1') */
  id?: string;
  /** Get the Id from the rubric which holds this association (Ex. '_3_1') */
  rubricId?: string;
  /** Get the entity which represents the content holding this association. (Ex. '{   "gradebookColumnId": '_3_1' }') */
  associationEntity?: Record<string, unknown>;
  /** Tells if rubric is being used for grading content. (Ex. true) */
  usedForGrading?: boolean;
  /** States rubric's information and evalution visibility for students. (Ex. "VisibleWithScores") Possible values are:

- Disabled  - VisibleWithScores  - VisibleWithoutScores  - VisibleAfterGrading 


| Type      | Description
 | --------- | --------- |
| Disabled | Disabled: Implies that neither the rubric nor the rubric evaluation are visible to students. Default value for student visibility. |
| VisibleWithScores | VisibleWithScores: Implies that the rubric and the rubric evaluation are always visible to students. |
| VisibleWithoutScores | VisibleWithoutScores: Implies that the rubric is visible before and after grading. The rubric evaluation are not visible to students. |
| VisibleAfterGrading | VisibleAfterGrading: Implies that the rubric is only visible after grading. The rubric evaluation is visible once is available. |
 */
  rubricVisibility?: string;
  /** A list of hypermedia links associated with this resource */
  links?: JavaUtilSetblackboardPlatformRestspringPublicapiV1CommonHateoasLinkV1;
}

export interface BlackboardPluginRubricSpringRestPublicapiV1RubricEvaluationExpand {
  /** The ID from this rubric evaluation */
  id?: string;
  /** The ID from this rubric association */
  rubricAssociationId?: string;
  /** The evaluation entity which represents the content holding this rubric evaluation. */
  evaluationEntity?: Record<string, unknown>;
  /** Represents the maximum possible score that can be assigned to this evaluation as a fraction with a numerator and denominator. For example, if the maximum possible score is 100, then the fraction would be represented as numerator = 100 and denominator = 1. */
  possibleScore?: BlackboardPlatformRestPublicapiV1CommonFraction;
  /** The total score which was assigned to this evaluation as a fraction with a numerator and denominator. For example, if the total score is 100, then the fraction would be represented as numerator = 100 and denominator = 1. */
  totalScore?: BlackboardPlatformRestPublicapiV1CommonFraction;
  /** The submission date of this evaluation */
  submitted?: string;
  /** List of the selected scores for this evaluation, each rubric cell evaluation should be related with a rubric definition cell and row.

The selected score could vary depending on the rubric type, as shown in examples. For example,

- Numeric Rubrics, if selected score is 100, then the fraction would be numerator = 100 and denominator = 1.
- Numeric Range Rubrics, selected score is the percentage of the max row value in 0 to 1 normalization, So if 80 is the max row points and selected score is 40, the fraction would be numerator = 50 and denominator = 100.
- Percentage Rubrics, expects the values in 1 to 100 percent format, if selected percent is 40, the fraction would be numerator = 40 and denominator = 1.
- Percentage Range Rubrics, expects the values in 1 to 100 percent format, if selected percent is 60, the fraction would be numerator = 60 and denominator = 1. */
  cells?: JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricEvaluationCellV1;
}

export interface BlackboardPluginsApigatewayB2RestOAuth2AccessToken {
  /** The access token issued by the authorization server. */
  access_token?: string;
  /** The type of the token issued.  Value is case insensitive. */
  token_type?: string;
  /** The lifetime in seconds of the access token. */
  expires_in: number;
  /** The refresh token issued by the authorization server during OAuth2 authorization code workflow if 'offline' scope was granted. */
  refresh_token?: string;
  /** The scope of the access granted by this token. */
  scope?: string;
  /** The ID of the user granted access via token */
  user_id?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseRule {
  /** Rule item identifier that indicates the id of the rule item source which the item was created from. (Ex. '_48_1') */
  id?: string;
  /** Title given to the adaptive release rule */
  title?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseRuleCriteria {
  /** Internal Identifier of the Rule's criteria. */
  id?: string;
  /** The Type of the Criterion.


| Type      | Description
 | --------- | --------- |
| GradeRange |  |
| GradePercentage |  |
| DateRange |  |
| Memberships |  |
| ContentComplete |  |
| GradeCompleted |  |
| ContentReviewed |  |
 */
  type?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1AnnouncementsAnnouncement {
  /** Primary key identifier */
  id?: string;
  /** The title of this System Announcement. */
  title?: string;
  /** The message body of the System Announcement. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information. */
  body?: string;
  /** Settings controlling availability of the System Announcement. */
  availability?: Record<string, unknown>;
  /** Whether this System Announcement should be displayed on the login page. */
  showAtLogin?: boolean;
  /** Whether this System Announcement should be displayed on courses. */
  showInCourses?: boolean;
  /** The user Id who created or last updated the System Announcement. */
  creatorUserId?: string;
  /** The date that the System Announcement was created. */
  created?: string;
  modified?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1AnnouncementsCourseAnnouncement {
  /** Primary key identifier */
  id?: string;
  /** The title of this Announcement. */
  title?: string;
  /** The message body of the Announcement. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information. */
  body?: string;
  /** An indication of whether or not the Announcement is in draft status. */
  draft?: boolean;
  /** Settings controlling availability of the course to students. */
  availability?: Record<string, unknown>;
  /** The user Id who created or last updated the Course Announcement. */
  creatorUserId?: string;
  /** The date that the Announcement was created. */
  created?: string;
  modified?: string;
  /** The number of students that the Announcement will reach.

Shown when adding the query parameter: "expand=studentReadCount". */
  participants?: number;
  /** The position of the Announcement. */
  position?: number;
  /** The number of reads from students for the Announcement.

Shown when adding the query parameter: "expand=studentReadCount". */
  readCount?: number;
  /** The user that created the Announcement.

**Deprecated**: since 3900.89.0. Use creatorUserId instead. */
  creator?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1CategoriesCategory {
  id?: string;
  /** The ID of the data source of the category */
  dataSourceId?: string;
  /** The ID of this category's parent category */
  parentId?: string;
  /** The human-readable id of the category */
  categoryId?: string;
  /** The title of category */
  title?: string;
  /** The description of the category */
  description?: string;
  /** Type of category


| Type      | Description
 | --------- | --------- |
| Course |  |
| Organization |  |
 */
  type?: string;
  /** Boolean indicating whether or not the category should appear on the catalog front page */
  frontPage?: boolean;
  /** Boolean indicating whether or not the category is available */
  available?: boolean;
  /** Boolean indicating whether or not category is available to all roles, or restricted to a specific set of roles. */
  restricted?: boolean;
  /** The roles for which this category is available, if category is set to restricted. Not populated for lists of categories, only for individual category */
  institutionRoleIds?: JavaUtilListjavaLangString;
  /** The date and time at which the category was created */
  created?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1ContentContentGroup {
  /** The ID of the associated content. */
  contentId?: string;
  /** The ID of the association of content and group. */
  groupId?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1ContentReviewStatus {
  /** The ID of the content.

**Since**: 3700.16.0 */
  contentId?: string;
  /** The ID of the user.

**Since**: 3700.16.0 */
  userId?: string;
  /** The current status of the content's 'reviewed' attribute.

**Since**: 3700.16.0 */
  reviewed?: boolean;
  /** The date that the user marked the content as reviewed

**Since**: 3700.16.0 */
  reviewDate?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1ContentState {
  /** ID of the content to which this state belongs. */
  contentId?: string;
  /** ID of the user that this state is associated with. */
  userId?: string;
  /** Current state value.

Possible values are:

- None: student can't open this content item.
- Unlocked: student is able to open the content item.
- Started: student have opened the content item.
- Completed: student have finished or submitted the content item.


| Type      | Description
 | --------- | --------- |
| None |  |
| Unlocked |  |
| Started |  |
| Completed |  |
 */
  state?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1ContentCollectionContentCollectionResource {
  /** The primary ID the Resource. */
  id?: string;
  /** The primary ID of the resource in xythos format. */
  xid?: string;
  /** The name of the Resource. */
  name?: string;
  /** The type of the Resource; 'File' or 'Folder'


| Type      | Description
 | --------- | --------- |
| File |  |
| Folder |  |
 */
  type?: string;
  /** The size of the Resource in bytes. */
  size?: number;
  /** Whether the Resource has associated Course Content links. */
  hasLinks?: boolean;
  /** The Id of the Resource's parent folder. */
  parentId?: string;
  /** The Id of the User who created the Resource. */
  creatorId?: string;
  /** The date this Resource was created. */
  created?: string;
  /** The date this Resource was last modified. */
  modified?: string;
  /** The mime-type for this Resource; only set if the Resource is of type 'File' */
  mimeType?: string;
  /** The version number for this Resource; only set if the Resource is of type 'File' and is versioned. */
  version?: number;
  links?: JavaUtilSetblackboardWebappsBlackboardPublicapiV1ContentCollectionContentCollectionResourceV1ContentCollectionLinkTOPubV1;
  /** The downloadUrl for this Resource; only set if the Resource is of type 'File'. */
  downloadUrl?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1ContentResourcesResource {
  /** The primary ID the Resource. */
  id?: string;
  /** The primary ID of the resource in xythos format. */
  xid?: string;
  /** The name of the Resource. */
  name?: string;
  /** The type of the Resource; 'File' or 'Folder'


| Type      | Description
 | --------- | --------- |
| File |  |
| Folder |  |
 */
  type?: string;
  /** The size of the Resource in bytes. */
  size?: number;
  /** Whether the Resource has associated Course Content links. */
  hasLinks?: boolean;
  /** The Id of the Resource's parent folder. */
  parentId?: string;
  /** The Id of the User who created the Resource. */
  creatorId?: string;
  /** The date this Resource was created. */
  created?: string;
  /** The date this Resource was last modified. */
  modified?: string;
  /** The mime-type for this Resource; only set if the Resource is of type 'File' */
  mimeType?: string;
  /** The version number for this Resource; only set if the Resource is of type 'File' and is versioned. */
  version?: number;
  /** The downloadUrl for this Resource; only set if the Resource is of type 'File'. */
  downloadUrl?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1CourseRolesCourseRole {
  /** The primary ID of the course role */
  id?: string;
  /** The identifier used to assign the course role to a course enrollment.

For system defined course roles, this value will be one of Student, Instructor, TeachingAssistant, CourseBuilder, Grader or Guest

For custom course roles, this will be the roleId entered during the creation of the role. Allowed characters for the custom course roleId's are any letter, number, period, underscore and dash. */
  roleId?: string;
  /** The role name presented to users when the course role is associated with a course. */
  nameForCourses?: string;
  /** The role name presented to users when the course role is associated with an organization. */
  nameForOrganizations?: string;
  /** Optional description of the course role */
  description?: string;
  /** False if the course role exists as a system generated course role. True if the course role was created by an admin user.

Both custom and system generated course roles can be modified, but only custom course roles can be deleted. */
  custom?: boolean;
  /** Implies access to unavailable courses, display in the Course catalog, and receiving email enrollment requests */
  actAsInstructor?: boolean;
  availability?: Record<string, unknown>;
}

export interface BlackboardWebappsBlackboardPublicapiV1CourseTocCourseToc {
  /** Get the Id of the Course ToC (Ex. '_2_1') */
  id?: string;
  /** Get the Id of the Course (Ex. '_3_1') */
  courseId?: string;
  /** The Id of the Content Folder associated with this ToC entry. This will apply only if Course ToC Target Type is CONTENT, otherwise, this Id will be null. (Ex. '_2_1') */
  contentId?: string;
  /** The Label of the Course ToC, this is what user will see as menu option label. (Ex. 'Information') */
  label?: string;
  /** The URL representing the path to a specific resource, usually associated with a Content Folder. (Ex. 'path/to/resource') */
  url?: string;
  /** The Target Type for Course ToC entry. This will tell to this ToC register which kind of handler will be associated to its main menu's option. (Ex. 'CONTENT', ´MODULE´, `APPLICATION`)


| Type      | Description
 | --------- | --------- |
| Application | The Toc item references a built-in application or system extension. |
| Content | The Toc item references a content folder defined within the course. |
| ContentItem | The Toc item references a content item defined within the course. |
| Link | The Toc item is a link to another entity defined within the course. |
| StaffInfo | The Toc item references a staff information folder defined within the course. |
| Url | The Toc item is a URL to a resource. |
| Divider | The Toc item is a divider in the menu. |
| Subheader | The Toc item is a sub-header in the menu. |
| Module | The Toc item is a Course Module Page. |
 */
  targetType?: string;
  /** The position in which the main menu option associated with this ToC will be shown. (Ex. 0) */
  position?: number;
  /** Whether or not menu option will be launched in a new window (Ex. 0) */
  launchInNewWindow?: boolean;
  /** Boolean representing if main menu option associated with this ToC is able to be shown. */
  isEnabled?: boolean;
  /** Whether or not this ToC is an entry point. */
  isEntryPoint?: boolean;
  /** The internal handle for this Course ToC (Ex. 'content') */
  internalHandle?: string;
  /** Whether or not Guests can view this ToC. */
  allowGuests?: boolean;
  /** Whether or not Observers can view this ToC. */
  allowObservers?: boolean;
}

export interface BlackboardWebappsBlackboardPublicapiV1CoursesCourse {
  /** The primary ID of the course. */
  id?: string;
  /** A secondary unique ID for the course. Used by LTI launches and other inter-server operations. */
  uuid?: string;
  /** An optional externally-defined unique ID for the course. Defaults to the courseId.

Formerly known as 'batchUid'. */
  externalId?: string;
  /** The ID of the data source associated with this course. This may optionally be the data source's externalId using the syntax "externalId:math101". */
  dataSourceId?: string;
  /** The Course ID attribute, shown to users in the UI. */
  courseId?: string;
  /** The name of the course. */
  name?: string;
  /** The description of the course. */
  description?: string;
  /** The date this course was created. */
  created?: string;
  /** Whether this object represents an Organization. Defaults to false. */
  organization?: boolean;
  /** Whether the course is rendered using Classic or Ultra Course View.


| Type      | Description
 | --------- | --------- |
| Undecided | The ultra status is not decided. |
| Classic | The course is decided as classic. |
| Ultra | The course is decided as ultra |
| Ultrapreview | The course is currently in Ultra mode but during the preview state where it may still be reverted via a Restore to the classic state |
 */
  ultraStatus?: string;
  /** Whether guests (users with the role guest) are allowed access to the course. Modifiable only for Classic course. Defaults to {@code true} for Classic Courses and {@code false} for Ultra Courses. */
  allowGuests?: boolean;
  /** This status does not affect availability of the course for viewing in any way. readOnly is valid for both Ultra and Classic courses. If an Ultra course is in readOnly mode, updates are not possible. For a Classic course in readOnly mode, updates are still possible (through Web UI but not through REST i.e. closed is enforced for original courses when updated through REST the same way Ultra courses are blocked) but new notifications are not generated.

**Deprecated**: since 3400.8.0; use the v2 endpoint's closedComplete property instead */
  readOnly?: boolean;
  /** The ID of the term associated to this course. This may optionally be the term's externalId using the syntax "externalId:spring.2016". */
  termId?: string;
  /** Settings controlling availability of the course to students. */
  availability?: Record<string, unknown>;
  /** Settings controlling how students may enroll in the course. */
  enrollment?: Record<string, unknown>;
  /** Settings controlling localization within the course. */
  locale?: Record<string, unknown>;
  /** Whether the course has any cross-listed children.

**Since**: 3000.11.0 */
  hasChildren?: boolean;
  /** The cross-listed parentId associated with the course, if the course is a child course.

**Since**: 3000.11.0 */
  parentId?: string;
  /** A URL corresponding to the Course Page for the course.  Formatting varies based on whether the course is rendered using Classic or Ultra Course View

**Since**: 3200.3.0 */
  externalAccessUrl?: string;
  /** A URL for viewing the Course Page for the course as a guest.  Formatting varies based on whether the course is rendered using Classic or Ultra Course View

**Since**: 3200.3.0 */
  guestAccessUrl?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1CoursesCourseChild {
  /** The primary ID of the child course associated with this cross-listing. */
  id?: string;
  /** The primary ID of the parent course associated with this cross-listing. */
  parentId?: string;
  /** The ID of the data source associated with this course cross-listing.  This may optionally be the data source's externalId using the syntax "externalId:math101". */
  dataSourceId?: string;
  /** The date this course cross-listing was created. */
  created?: string;
  /** The child course associated with this cross-listing. */
  childCourse?: BlackboardWebappsBlackboardPublicapiV1CoursesCourse;
}

export interface BlackboardWebappsBlackboardPublicapiV1DatasourcesDataSource {
  /** The primary ID of the data source. */
  id?: string;
  /** An externally-defined unique ID for the data source.

Formerly known as 'batchUid'. */
  externalId?: string;
  /** The description of the data source. */
  description?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1FileUploadSettings {
  customFileUploadSettings?: JavaUtilListblackboardPlatformFilesystemRestrictionPojoFileUploadRestrictions;
  /** Whether or not to recommend alternative storage solutions */
  displayRecommendedAlternatives?: boolean;
  /** Whether or not to display support link */
  displaySupportLink?: boolean;
  /** Maximum size in bytes of a file uploaded via the Uploads API */
  maxUploadSizeInBytes?: number;
  /** Recommended alternative storage solutions */
  recommendedAlternatives?: string;
  /** Personalized support link. Must be a complete and valid URL. */
  supportLink?: string;
  /** Whether inline rendering is supported */
  supportsInlineRender: boolean;
}

export interface BlackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyHierarchyNodeCourse {
  /** The primary ID of the Hierarchy Node */
  nodeId?: string;
  /** The primary ID of the Course */
  courseId?: string;
  course?: BlackboardWebappsBlackboardPublicapiV2CoursesCourseV2;
  /** Whether or not this association represents the primary node association of the course */
  isPrimary?: boolean;
}

export interface BlackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNode {
  /** The primary ID of the Node in the database */
  id?: string;
  /** Node unique identifier */
  externalId?: string;
  /** Node display name */
  title?: string;
  /** Node description */
  description?: string;
  /** The ID of the Node parent in the database */
  parentId?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNodeAdmin {
  /** Id of the Node. */
  nodeId?: string;
  /** Id of the Node Admin User. */
  userId?: string;
  /** Expanded User object of the Node Admin. This is only a sparsely populated User object and must not be used in future calls to update a user object. */
  user?: BlackboardWebappsBlackboardPublicapiV1UsersUser;
  /** List of roles the Admin User has within the Node. */
  nodeRoles?: JavaUtilListjavaLangString;
}

export interface BlackboardWebappsBlackboardPublicapiV1InstitutionalhierarchySettingsAttribute {
  /** Whether the tool is available. */
  available?: boolean;
  /** Whether the tool is locked. */
  locked?: boolean;
  /** Whether the available and locked settings are applicable. */
  applicable?: boolean;
}

export interface BlackboardWebappsBlackboardPublicapiV1LtiLTIDomainConfig {
  /** The ID associated with this domainConfig. */
  id?: string;
  /** The primary domain name associated with this configuration. */
  primaryDomain?: string;
  /** The client id associated with this configuration. Only applicable for LTI versions 1.3+, excluding 2.0

**Since**: 3600.0.0 */
  clientId?: string;
  /** Enum that indicates if the set of domains associated with this config can or cannot be linked to.


| Type      | Description
 | --------- | --------- |
| Approved |  |
| Excluded |  |
| NeedsApproval |   **Since**: 3300.9.0 |
 */
  status?: string;
  /** If true, a new link to this LTI domain must supply its own key and secret. If false, the key and secret for this domain are already configured system-wide. This is a read-only property that is determined by the presence of a key and secret. */
  perLinkCredentials?: boolean;
  /** Enum indicating when user data can be sent to the LTI tool provider.


| Type      | Description
 | --------- | --------- |
| Never |  |
| Sslonly |  |
| Always |   **Since**: 3300.9.0 |
 */
  sendUserDataType?: string;
  /** Whether the user's role can be sent to the LTI tool provider. */
  sendRole?: boolean;
  /** Whether the user's name can be sent to the LTI tool provider. */
  sendName?: boolean;
  /** Whether the user's email address can be sent to the LTI tool provider. */
  sendEmail?: boolean;
  /** Whether a splash screen is shown before launching the LTI link.

Cannot be set to true if allowMembershipService is true. */
  useSplashScreen?: boolean;
  /** Whether the Tool is allowed to call the LTI Names and Roles service and get the course memberships. */
  allowMembershipService?: boolean;
  /** Whether the Tool is allowed to call the LTI Assignment and Grades service and manage line items and grades.

**Since**: 3600.0.0 */
  allowGradesService?: boolean;
  /** The public key of the tool, if specified. It is optional and can be null

**Since**: 3800.17.0 */
  publicKey?: string;
  /** The JWKS URL of the tool, if specified. It is optional and can be null

**Since**: 3800.17.0 */
  jwksUrl?: string;
  /** Whether this domain configuration is editable by system admins. The "internal" apps created by Blackboard are non-editable. They are created or updated automatically or via Dev Portal, and they are locked to system admins or anyone with public REST access to change them.

**Since**: 3800.17.0 */
  allowEdit?: boolean;
  /** The custom parameters for the given domain. */
  customParameters?: JavaUtilMapjavaLangStringjavaLangString;
  /** The name of the domain configuration

**Since**: 3900.23.0 */
  name?: string;
  /** The description of the domain configuration

**Since**: 3900.23.0 */
  description?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1LtiLTIPlacement {
  /** The ID associated with this placement. */
  id?: string;
  /** The name of the placement. Not required to be unique. Maximum length of 50 characters, BAD_REQUEST error with message is returned if greater than 50 characters. */
  name?: string;
  /** The description of the placement. Not required to be unique. Maximum length is 1000 characters, BAD_REQUEST error with message is returned if greater than 1000 characters. */
  description?: string;
  /** The URL of the icon for this placement, if any. Not required to be unique, must be a complete and valid URL. Maximum length is 255 characters, BAD_REQUEST error with message is returned if greater than 255 characters or incomplete URL. */
  iconUrl?: string;
  /** The handle that uniquely identifies this placement. Required to be unique. Maximum length is 32 characters, BAD_REQUEST error with message is returned if greater than 32 characters. */
  handle?: string;
  /** The type of placement.


| Type      | Description
 | --------- | --------- |
| Application | Application or Student Tool Placement |
| ContentHandler | Content Type placement |
| ContentItemMessage | Content-item Message placement (see IMSGlobal spec)  **Since**: 3300.5.0 |
| System | System-level Tools |
| Administrator | Administrator-level Tools  **Since**: 3400.1.0 |
| UltraUI | Ultra-UI Extensions  **Since**: 3700.6.0 |
| BaseNavigation | Base Navigation |
| CourseNavigation | Course Navigation |
| Proctoring | Proctoring  **Since**: 3900.10.0 |
| CloudDocument | Cloud Document Type Placement  **Since**: 3900.34.0 |
| AssetProcessor | Asset Processor Type Placement |
| OpenBadgeProvider | OpenBadge Provider Type Placement |
| Eulalaunch | EULA Launch Type Placement |
 */
  type?: string;
  /** The URL of the tool provider. Not required to be unique, must be a complete and valid URL. Maximum length is 1024 characters, BAD_REQUEST error with message is returned if greater than 1024 characters or incomplete URL. */
  url?: string;
  /** Id of the creator of the placement

**Deprecated**: since 3900.0 not used */
  authorId?: string;
  /** Whether an instructor created the placement or not (otherwise admin)

**Deprecated**: since 3900.0 not used */
  instructorCreated?: boolean;
  /** Whether the course tool is visible by students, or only to non-students (e.g. instructors). Defaults to true, allowing students to see the tool. */
  allowStudents?: boolean;
  /** Whether this placement can accept grades from the tool provider and a grade column can be created for it. This only applies to {@link Type#ContentHandler} types. All others don't support grading and will be set to false. */
  allowGrading?: boolean;
  /** Settings controlling availability of the placement. */
  availability?: Record<string, unknown>;
  /** Whether this placement link should be opened in a new window or not. */
  launchInNewWindow?: boolean;
  /** Generated launch link */
  launchLink?: string;
  /** Custom launch parameters for the tool. */
  customParameters?: JavaUtilMapjavaLangStringjavaLangString;
  /** The Id of the domain configuration associated with this placement

**Since**: 3900.46.0 */
  domainId?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1MembershipsAvailability {
  /** null


| Type      | Description
 | --------- | --------- |
| Yes |  |
| No |  |
| Disabled |   **Since**: 3100.0.0 |
 */
  available?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1MembershipsCourseMembership {
  /** The unique ID of this course/user relationship.

**Since**: 3700.14.0 */
  id?: string;
  /** The primary ID of the user. */
  userId?: string;
  /** The user associated with the membership.

Shown when adding the query parameter: "expand=user". And can be filtered with the "fields" query parameter, for example "fields=user.uuid,user.externalId".

**Since**: 3400.7.0 */
  user?: BlackboardWebappsBlackboardPublicapiV1UsersUser;
  /** The primary ID of the course. */
  courseId?: string;
  /** The primary ID of the child, cross-listed course, in which the user is directly enrolled. </p> This field is read only in Learn versions 3000.11.0 through 3400.0.0. As of 3400.1.0, this field is mutable.  </p> If this membership's course is a parent course in a cross-listed set, the childCourseId can be updated to move the membership enrollment between child courses and the parent course in  the set.  Patching the childCourseId to "null" will move the membership to the parent course.

**Since**: 3000.11.0 */
  childCourseId?: string;
  /** The ID of the data source associated with this course.  This may optionally be the data source's externalId using the syntax "externalId:math101". */
  dataSourceId?: string;
  /** The date this membership was created. */
  created?: string;
  /** The date this membership was modified.  A membership is considered modified only if an aspect of the membership itself changes (e.g.: availability or courseRoleId), and not if the Course or User alone is modified.

**Since**: 3800.8.0 */
  modified?: string;
  /** Settings controlling availability of the course membership. */
  availability?: BlackboardWebappsBlackboardPublicapiV1MembershipsAvailability;
  /** The user's role in the course.

These roles are also valid for an organization, although they are named differently in the UI.

Custom course roles may also be referenced by their IDs.


| Type      | Description
 | --------- | --------- |
| Instructor | Has access to all areas in the Control Panel. This role is generally given to those developing, teaching, or facilitating the class. Instructors may access a course that is unavailable to students. This role is customizable and may have different capabilities from what is documented here. |
| BbFacilitator | The facilitator is an instructor like role. Facilitators are restricted versions of an instructor, in that they are able to deliver course instruction and administer all aspects of a pre-constructed course, but are not allowed to modify or alter the course. This role is customizable and may have different capabilities from what is documented here. |
| TeachingAssistant | The teaching assistant role is that of a co-teacher. Teaching assistants are able to administer all areas of a course. Their only limitations are those imposed by the instructor or Blackboard administrator at your school. This role is customizable and may have different capabilities from what is documented here. |
| CourseBuilder | Manages the course without having access to student grades. This role is customizable and may have different capabilities from what is documented here. |
| Grader | Assists the instructor in the creation, management, delivery, and grading of items. This role is customizable and may have different capabilities from what is documented here. |
| Student |  |
| Guest | Has no access to the Control Panel. Areas within the course are made available to guests, but typically they can only view course materials; they do not have access to tests or assessments, and do not have permission to post on discussion boards. This role's behavior is immutable. |
 */
  courseRoleId?: string;
  /** If present, this date signals that the user associated with this membership has special access to the course regardless of the course's availability setting prior to the moment specified by this field. After the date has passed, the membership will respect the course's availability. */
  bypassCourseAvailabilityUntil?: string;
  /** This date signals the date this membership was used; in other words, the last date the user accessed the associated course or content contained by that course.

The recording of any activity which would lead to this date getting updated does happen asynchronously in batches. So, there may be some delay between an activity which would update this value and the availability of the new date. It is recommended when using this value to note that activity within the last 5 minutes may not be taken into account.

**Since**: 3300.9.0 */
  lastAccessed?: string;
  /** For primary instructor implementation, position or displayOrder cannot be negative, the minimum position is 1, with which is the primary instructor (aka. Leader instructor). Multiple primary instructor have the same displayOrder 1.

This operation only takes effect when the course role is non-student and non-guest roles, otherwise it's silently ignored, since <code>displayOrder</code> is for this design.

All cases violating the above restrictions will be set as <code>null</code> All display orders don't keep uniqueness, just save as-is. */
  displayOrder?: number;
}

export interface BlackboardWebappsBlackboardPublicapiV1MessageCourseMessage {
  /** The ID of the message */
  id?: string;
  /** The subject of the message. */
  subject?: string;
  /** The body text of the message. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information. */
  body?: string;
  /** The date this message was created. */
  postedDate?: string;
  /** Whether or not the message has been read */
  isRead?: boolean;
  /** Type of the message


| Type      | Description
 | --------- | --------- |
| System | Course message generated by the system, to be more specific, the message created when adding a new participant into the conversation. |
| Normal | Any course message sent by the course conversation participants will be considered as "NORMAL" type. |
 */
  type?: string;
  /** A full representation of the Sender. Only populated if the expand query parameter includes the sender property. */
  sender?: BlackboardWebappsBlackboardPublicapiV1UsersParticipantUser;
  /** The ID of the sender. */
  senderId?: string;
  /** Metadata for the file attached to the message, if one exists */
  attachment?: BlackboardWebappsBlackboardPublicapiV1MessageCourseMessageAttachment;
  /** The to participants of the message */
  toUsers?: JavaUtilListblackboardPlatformRestUtilIdTORest;
  /** The cc participants of the message */
  ccUsers?: JavaUtilListblackboardPlatformRestUtilIdTORest;
  /** The bcc participants of the message */
  bccUsers?: JavaUtilListblackboardPlatformRestUtilIdTORest;
  /** Whether or not the attachment is the existing attachment for the message */
  isExistingAttachment?: boolean;
  /** Whether or not this message is a reply to another message */
  isReply?: boolean;
}

export interface BlackboardWebappsBlackboardPublicapiV1MessageCourseMessageAttachment {
  /** The ID of file attachment */
  id?: string;
  /** The fileName of the attachment */
  fileName?: string;
  /** The mime type of the attachment */
  mimeType?: string;
  /** The location of the uploaded file */
  fileLocation?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1SystemSystemInfo {
  /** Gets the site ID for use when interacting with Platform services. This ID will be issued asynchronously after Learn installation and may be null initially. This value will not usually change after it is set, so callers should cache it when feasible. */
  siteId?: string;
  /** Gets the site's tenant ID for use when interacting with Platform services. This ID will be issued asynchronously after Learn installation and may be null initially. This value will not usually change after it is set, so callers should cache it when feasible. */
  tenantId?: string;
  /** Gets the region of this site for use when interacting with platform services. This value may be null initially after Learn installation. This value will not usually change after it is set, so callers should cache it when feasible. */
  region?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1SystemSystemTask {
  /** The ID of this task. */
  id?: string;
  /** The type value associated with the task. */
  type?: string;
  /** The status of the task.


| Type      | Description
 | --------- | --------- |
| Waiting | initial state of a task |
| Assigned |  |
| Running |  |
| Complete |  |
| CompleteErrors |  |
| Incomplete |  |
 */
  status?: string;
  /** Task progress, with 0 representing not started and 100 representing done. */
  percentComplete?: number;
  /** The date the task was started. */
  started?: string;
  /** The date the task was completed. */
  ended?: string;
  /** The results of the task execution. This may be {@code null} if execution is not yet complete or no results were saved. */
  results?: BlackboardPlatformRestPublicapiV1SystemSystemTaskResult;
}

export interface BlackboardWebappsBlackboardPublicapiV1SystemVersion {
  /** The 'major' version of this product.  Typically changes for releases with significant new features or breaking API changes. */
  major?: number;
  /** The 'minor' version of this product.  Typically changes for releases with minor feature updates. */
  minor?: number;
  /** The 'patch' version of this product.  Typically changes for backwards-compatible hotfixes. */
  patch?: number;
  /** An internal identifier for the build artifact backing this version. */
  build?: string;
}

export interface BlackboardWebappsBlackboardPublicapiV1SystemVersionInfo {
  /** The version of the Learn platform. */
  learn?: BlackboardWebappsBlackboardPublicapiV1SystemVersion;
}

export interface BlackboardWebappsBlackboardPublicapiV1SystemRolesSystemRole {
  /** The id associated with this system role. */
  id?: string;
  /** The identifier used to assign the system role.

For system generated roles, this value will be one of AccountAdmin, CourseCreator, CourseSupport, Guest, Integration, Observer, Portal, SystemAdmin, SystemSupport, or User

For custom system roles, this will be the roleId entered during the creation of the role. Allowed characters for the custom roleId's are any letter, number, period, underscore and dash. */
  roleId?: string;
  name?: string;
  /** The description of this system role. */
  description?: string;
  /** Indicates if this system role is custom. */
  custom?: boolean;
}

export interface BlackboardWebappsBlackboardPublicapiV1TermsTerm {
  /** The primary ID of the term. */
  id?: string;
  /** An externally-defined unique ID for the term.

Formerly known as 'sourcedidId'. */
  externalId?: string;
  /** The ID of the data source associated with this term.  This may optionally be the data source's externalId using the syntax "externalId:math101". */
  dataSourceId?: string;
  /** The name of the term. */
  name?: string;
  /** The description of the term. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information. */
  description?: string;
  /** Settings controlling availability of the term to students. */
  availability?: Record<string, unknown>;
}

export interface BlackboardWebappsBlackboardPublicapiV1UsersParticipantUser {
  id?: string;
  userName?: BlackboardPlatformRestUtilRawText;
  otherName?: BlackboardPlatformRestUtilRawText;
  givenName?: BlackboardPlatformRestUtilRawText;
  familyName?: BlackboardPlatformRestUtilRawText;
  middleName?: BlackboardPlatformRestUtilRawText;
  suffix?: BlackboardPlatformRestUtilRawText;
  title?: BlackboardPlatformRestUtilRawText;
  /** null


| Type      | Description
 | --------- | --------- |
| GivenName | User requests displaying givenName when formatting names for display. This is the default behavior. |
| OtherName | User requests displaying otherName when formatting names for display. |
| Both | User requests displaying otherName and givenName when formatting names for display. |
 */
  preferredDisplayName?: string;
  avatar?: Record<string, unknown>;
}

export interface BlackboardWebappsBlackboardPublicapiV1UsersUser {
  /** The primary ID of the user. */
  id?: string;
  /** A secondary unique ID for the user.  Used by LTI launches and other inter-server operations. */
  uuid?: string;
  /** An optional externally-defined unique ID for the user.  Defaults to the userName.

Formerly known as 'batchUid'. */
  externalId?: string;
  /** The ID of the data source associated with this user.  This may optionally be the data source's externalId using the syntax "externalId:math101". */
  dataSourceId?: string;
  /** The userName property, shown in the UI. */
  userName?: string;
  /** The user's student ID name or number as defined by the school or institution. */
  studentId?: string;
  /** The education level of this user.


| Type      | Description
 | --------- | --------- |
| K8 | Kindergarten through 8th grade |
| HighSchool | Grades 9 through 12. |
| Freshman | College or university freshman. |
| Sophomore | College or university sophomore. |
| Junior | College or university junior. |
| Senior | College or university senior. |
| GraduateSchool | Graduate school student. |
| PostGraduateSchool | Post-graduate school student. |
| Unknown | Education Level is not known, or not specified. |
 */
  educationLevel?: string;
  /** The gender of this user.


| Type      | Description
 | --------- | --------- |
| Female | Female |
| Male | Male |
| Other | Other  **Since**: 3900.32.0 |
| Unknown | Gender is not known, or not specified. |
 */
  gender?: string;
  /** The pronouns of this user.

**Since**: 3900.27.0 */
  pronouns?: string;
  /** The birth date of this user. Only the date portion of this value has significance, since a person's birthdate represents a full day and not a moment in time. Take care to ignore the zeroed time portion when deserializing this value to ensure it's not converted to the previous calendar day if your local time zone has a negative UTC offset. */
  birthDate?: string;
  /** The date this user was created. */
  created?: string;
  /** The date this user was last modified. */
  modified?: string;
  /** The date this user last logged in. */
  lastLogin?: string;
  /** The primary and secondary institution roles assigned to this user. The primary institution role is the first item in the list, followed by all secondary institution roles sorted alphabetically.

**Since**: 3300.3.0 */
  institutionRoleIds?: JavaUtilListjavaLangString;
  /** The system roles (the administrative user roles in the UI) for this user.  The first role in this list is the user's primary system role, while the remaining are secondary system roles. */
  systemRoleIds?: JavaUtilListblackboardDataUserUserSystemRole;
  /** Settings controlling availability of the user account. */
  availability?: Record<string, unknown>;
  /** Properties used to build the user's display name. */
  name?: Record<string, unknown>;
  /** The user's job information. */
  job?: Record<string, unknown>;
  /** The user's contact information. */
  contact?: Record<string, unknown>;
  /** The user's mailing address. */
  address?: Record<string, unknown>;
  /** The user's localization settings. */
  locale?: Record<string, unknown>;
  /** The user's avatar metadata

**Since**: 3800.13.0 */
  avatar?: Record<string, unknown>;
  /** Pronunciation text for user's name

**Since**: 3900.32.0 */
  pronunciation?: string;
  /** The nodes assigned to this user.

**Since**: 3300.3.0 */
  nodes?: JavaUtilListblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNodeV1;
  /** Pronunciation Audio file for user's name

**Since**: 3900.32.0 */
  pronunciationAudio?: Record<string, unknown>;
}

export interface BlackboardWebappsBlackboardPublicapiV2CoursesCourseV2 {
  /** The primary ID of the course. */
  id?: string;
  /** A secondary unique ID for the course. Used by LTI launches and other inter-server operations. */
  uuid?: string;
  /** An optional externally-defined unique ID for the course. Defaults to the courseId.

Formerly known as 'batchUid'. */
  externalId?: string;
  /** The ID of the data source associated with this course. This may optionally be the data source's externalId using the syntax "externalId:math101". */
  dataSourceId?: string;
  /** The Course ID attribute, shown to users in the UI. */
  courseId?: string;
  /** The name of the course. */
  name?: string;
  /** The description of the course. */
  description?: string;
  /** The date this course was created. */
  created?: string;
  /** The date this course was last modified.

**Since**: 3500.4.0 */
  modified?: string;
  /** Whether this object represents an Organization. Defaults to false. */
  organization?: boolean;
  /** Whether the course is rendered using Classic or Ultra Course View.


| Type      | Description
 | --------- | --------- |
| Undecided | The ultra status is not decided. |
| Classic | The course is decided as classic. |
| Ultra | The course is decided as ultra |
| Ultrapreview | The course is currently in Ultra mode but during the preview state where it may still be reverted via a Restore to the classic state |
 */
  ultraStatus?: string;
  /** Whether guests (users with the role guest) are allowed access to the course. Modifiable only for Classic course. Defaults to {@code true} for Classic Courses and {@code false} for Ultra Courses. */
  allowGuests?: boolean;
  /** Whether observers are allowed access to the course. Modifiable only for Classic course. Defaults to {@code false}.

**Since**: 3900.31.0 */
  allowObservers?: boolean;
  /** This status does not affect availability of the course for viewing in any way. closedComplete is valid for both Ultra and Classic courses. If an Ultra course is in closedComplete mode, updates are not possible. For a Classic course in closedComplete mode, updates are still possible (through Web UI but not through REST i.e. closed is enforced for original courses when updated through REST the same way Ultra courses are blocked) but new notifications are not generated. */
  closedComplete?: boolean;
  /** The ID of the term associated to this course. This may optionally be the term's externalId using the syntax "externalId:spring.2016". */
  termId?: string;
  /** Settings controlling availability of the course to students. */
  availability?: Record<string, unknown>;
  /** Settings controlling how students may enroll in the course. */
  enrollment?: Record<string, unknown>;
  /** Settings controlling localization within the course. */
  locale?: Record<string, unknown>;
  /** Whether the course has any cross-listed children.

**Since**: 3000.11.0 */
  hasChildren?: boolean;
  /** The cross-listed parentId associated with the course, if the course is a child course.

**Since**: 3000.11.0 */
  parentId?: string;
  /** A URL corresponding to the Course Page for the course.  Formatting varies based on whether the course is rendered using Classic or Ultra Course View

**Since**: 3200.3.0 */
  externalAccessUrl?: string;
  /** A URL for viewing the Course Page for the course as a guest.  Formatting varies based on whether the course is rendered using Classic or Ultra Course View

**Since**: 3200.3.0 */
  guestAccessUrl?: string;
  /** List of source courses UUIDs, populated only if the current course was created as the result of a course copy. */
  copyHistory?: JavaUtilListblackboardWebappsBlackboardPublicapiV2CoursesCourseV2SourceCourse;
}

export interface BlackboardWebappsGradebookPublicapiV1Attempt {
  /** The primary ID for this attempt. */
  id?: string;
  /** The user ID associated with this attempt. */
  userId?: string;
  /** The group attempt ID associated with this student attempt. */
  groupAttemptId?: string;
  /** Whether the score associated with this student attempt was overridden from the associated group attempt score. A value is only returned if the attempt grade is currently overridden. */
  groupOverride?: boolean;
  /** The status of this attempt.


| Type      | Description
 | --------- | --------- |
| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |
| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |
| InProgress | attempt activity has commenced, but has not been submitted for grading |
| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |
| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |
| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |
| Completed | a grade has been entered for the attempt |
| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |
| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |
 */
  status?: string;
  /** The text representation of grade for this attempt. */
  text?: string;
  /** The score associated with this attempt. */
  score?: number;
  /** The instructor notes associated with this attempt. */
  notes?: string;
  /** The instructor feedback associated with this attempt. */
  feedback?: string;
  /** The student comments associated with this attempt. */
  studentComments?: string;
  /** The student submission text associated with this attempt. */
  studentSubmission?: string;
  /** Whether the score associated with this attempt is ignored when computing the user's grade for the associated grade column. */
  exempt?: boolean;
  /** The date on which this attempt was created. */
  created?: string;
}

export interface BlackboardWebappsGradebookPublicapiV1AttemptReceipt {
  /** The ID of the receipt. */
  receiptId?: string;
  /** The date the associated attempt was submitted. */
  submissionDate?: string;
  /** The total size of the submission in bytes

**Since**: 3900.37.0 */
  submissionTotalSize?: number;
  /** The related course id

**Since**: 3900.37.0 */
  courseId?: string;
  /** The related gradable item id

**Since**: 3900.37.0 */
  gradableItemId?: string;
  /** The related attempt id

**Since**: 3900.37.0 */
  attemptId?: string;
  /** The related submitter user id

**Since**: 3900.37.0 */
  userId?: string;
  /** The related group attempt id

**Since**: 3900.37.0 */
  groupAttemptId?: string;
  /** The related group id

**Since**: 3900.37.0 */
  groupId?: string;
  /** Indicator of whether the submission is submitted automatically or not.


| Type      | Description
 | --------- | --------- |
| ManuallySubmitted |  |
| AutomaticallySubmittedByBrowser |  |
| AutomaticallySubmittedByServer |  |
| Unknown |  |
 */
  submissionType?: string;
  /** The associated response status

**Since**: 3900.37.0


| Type      | Description
 | --------- | --------- |
| ReceiptAndAttemptExist | Both the attempt receipt and the related attempt exist and there is access to both. |
| ReceiptExistsButAttemptDoesNot | The attempt receipt exist but the attempt was deleted and there is access to the attempt receipt through the course context. |
| ReceiptExistsNoAccessToAttempt | The attempt receipt exists but there is no access to the attempt. |
| ReceiptExistsColumnSoftDeleted | The attempt receipt exists but the column was deleted. |
 */
  responseStatus?: string;
}

export interface BlackboardWebappsGradebookPublicapiV1DisplayGrade {
  /** The type of Grade Column Grading Schema used when creating the displayed grade


| Type      | Description
 | --------- | --------- |
| Percent |  |
| Score |  |
| Tabular |  |
| Text |  |
| Complete |  |
 */
  scaleType?: string;
  /** The displayed score */
  score?: number;
  /** 

The maximum possible points. This property does not take the grading schema into account. Regardless of the schema (percentage, letter, etc), this property will only return the maximum points possible for the column.</p>

Only exception case is, when the Ultra Overall grade is overridden and has a non-score based schema. In that case, this method will return 100, since the override is stored/shown as a percentage</p>

In case the column's value is calculated from other columns, the value will not take into account the exempted columns' value.</p>

**Since**: 3900.41.0 */
  possible?: number;
  /** The displayed text grade, based on the Grade Column Grading Schema or Grade Notation description. */
  text?: string;
}

export interface BlackboardWebappsGradebookPublicapiV1EmbeddedAttemptReceipt {
  /** The ID of the receipt. */
  receiptId?: string;
  /** The date the associated attempt was submitted. */
  submissionDate?: string;
  /** The total size of the submission in bytes

**Since**: 3900.37.0 */
  submissionTotalSize?: number;
  /** The related course id

**Since**: 3900.37.0 */
  courseId?: string;
  /** The related gradable item id

**Since**: 3900.37.0 */
  gradableItemId?: string;
  /** The related attempt id

**Since**: 3900.37.0 */
  attemptId?: string;
  /** The related submitter user id

**Since**: 3900.37.0 */
  userId?: string;
  /** The related group attempt id

**Since**: 3900.37.0 */
  groupAttemptId?: string;
  /** The related group id

**Since**: 3900.37.0 */
  groupId?: string;
  /** The associated response status

**Since**: 3900.37.0


| Type      | Description
 | --------- | --------- |
| ReceiptAndAttemptExist | Both the attempt receipt and the related attempt exist and there is access to both. |
| ReceiptExistsButAttemptDoesNot | The attempt receipt exist but the attempt was deleted and there is access to the attempt receipt through the course context. |
| ReceiptExistsNoAccessToAttempt | The attempt receipt exists but there is no access to the attempt. |
| ReceiptExistsColumnSoftDeleted | The attempt receipt exists but the column was deleted. |
 */
  responseStatus?: string;
  /** Indicator of whether the submission is submitted automatically or not.


| Type      | Description
 | --------- | --------- |
| ManuallySubmitted |  |
| AutomaticallySubmittedByBrowser |  |
| AutomaticallySubmittedByServer |  |
| Unknown |  |
 */
  submissionType?: string;
}

export interface BlackboardWebappsGradebookPublicapiV1GradableItemOverride {
  /** ID of the course that this exception is associated with. */
  courseId?: string;
  /** ID of the column that this exception is associated with. */
  columnId?: string;
  /** The user ID associated with this exception. If null check the group ID. */
  userId?: string;
  /** The group ID associated with this exception. If null check the user ID. */
  groupId?: string;
  /** The due date for the related user and gradable column considering the exception and accomodation of the user. */
  effectiveDueDate?: string;
  /** Settings controlling date exception options of the gradable item to student. */
  gradableItemUserOptions?: Record<string, unknown>;
  /** Settings controlling exceptional availability of the content to students. It only applies for assessment gradable items. */
  availability?: Record<string, unknown>;
  /** Settings controlling exception options of the assessment to students. It only applies for assessment gradable items. */
  assessmentUserOptions?: Record<string, unknown>;
}

export interface BlackboardWebappsGradebookPublicapiV1Grade {
  /** The user ID associated with this grade. */
  userId?: string;
  /** The grade column ID for this grade. */
  columnId?: string;
  /** This historic field was incorrectly added to the public api despite being deprecated internally and never contained reliable data. Please stop using it immediately and determine the state using the rules you wish in the client based on the manual grade here, and the status of any associated attempts. (for example: some people treat 1 graded attempt and 2 ungraded attempts as logically \u2018graded\u2019; others want that to be \u2018needs grading\u2019).


| Type      | Description
 | --------- | --------- |
| Graded | Grade has been graded, corresponding to dbValue 1 |
| NeedsGrading | Grade needs grading, corresponding to dbValue 2 |
 */
  status?: string;
  /** The text representation of this grade. */
  text?: string;
  /** The score associated with this grade. */
  score?: number;
  /** The date on which the score associated with this grade was last overridden.  An ISODate value is only returned if this grade is currently overridden; otherwise, returns null. */
  overridden?: string;
  /** The instructor notes associated with this grade. This notes field is used for grades on manual grade columns.   That is, when column.grading.type = Manual.  It is also used when column.grading.type = Attempts and the grade has been manually overridden. */
  notes?: string;
  /** The instructor feedback associated with this grade.  This feedback is used for grades on manual grade columns.   That is, when column.grading.type = Manual.  It is also used when column.grading.type = Attempts and the grade has been manually overridden. */
  feedback?: string;
  /** Whether the score associated with this grade is ignored when computing the course grade. */
  exempt?: boolean;
  /** Whether the grade for a calculated column could be successfully computed. */
  corrupt?: boolean;
}

export interface BlackboardWebappsGradebookPublicapiV1GradeColumn {
  /** The primary ID of the grade column. */
  id?: string;
  /** The externalId for this grade column */
  externalId?: string;
  /** The name of the grade column. */
  name?: string;
  /** The description of the grade column. */
  description?: string;
  /** Whether this grade column is an external grade column. */
  externalGrade?: boolean;
  /** The date this grade column was created. */
  created?: string;
  /** For grade columns associated with a content item, the ID of the content item.

**Since**: 3000.11.0 */
  contentId?: string;
  /** Settings controlling the numerical scoring of this grade column. */
  score?: Record<string, unknown>;
  /** Settings controlling the availability/visibility of grade column data. */
  availability?: Record<string, unknown>;
  /** Settings controlling whether numerical and text grade values for this grade column are calculated, determined based on attempts, or manually entered. */
  grading?: Record<string, unknown>;
  /** Most recent date in which this column was modified. */
  modified?: string;
}

export interface BlackboardWebappsGradebookPublicapiV1GradeNotation {
  /** The primary key of the grade notation. */
  id?: string;
  /** The performance code associated with the grade notation. */
  code?: string;
  /** The description of the grade notation. */
  description?: string;
}

export interface BlackboardWebappsGradebookPublicapiV1GradeSchema {
  /** The id associated with this grade schema. */
  id?: string;
  /** The externalId associated with this grade schema. */
  externalId?: string;
  /** The title of this grade schema. */
  title?: string;
  /** The description of this grade schema. */
  description?: string;
  /** The scale type of this grade schema.


| Type      | Description
 | --------- | --------- |
| Percent |  |
| Score |  |
| Tabular |  |
| Text |  |
| Complete |  |
 */
  scaleType?: string;
  /** The list of grade symbols for this grade schema. Only returned for Tabular scaleType schemas. */
  symbols?: JavaUtilListblackboardWebappsGradebookPublicapiV1GradeSymbolV1;
}

export interface BlackboardWebappsGradebookPublicapiV1GradebookCategory {
  /** The ID of this gradebook category

**Since**: 3400.2.0 */
  id?: string;
  /** The title of this gradebook category, localized if applicable

**Since**: 3400.2.0 */
  title?: string;
}

export interface BlackboardWebappsGradebookPublicapiV1GradingPeriod {
  /** The REST Id object that uniquely identifies this grading period for REST usage */
  id?: string;
  /** The title of the grading period. Length is limited to 64 characters. */
  title?: string;
  /** The description of the grading period. Length is limited to 1000 characters. */
  description?: string;
  /** The relative position of the grading period to other grading periods when viewed in the grade book. */
  position?: number;
  /** Property may be set to DoNotUseDates to explicitly blank dates,  in which case startDate and endDate are ignored; otherwise set to  UseDates; in this case startDate and endDate must be included and valid.


| Type      | Description
 | --------- | --------- |
| DoNotUseDates | Do not use dates |
| UseDates | Use dates |
 */
  dateMode?: string;
  /** If start and end are set, and start is before end, these define temporal  coverage of grading period which may be used to associate GradableItems (Columns) by due date. Start dates will be persisted as starting at  00:00:00 on the submitted day. */
  start?: string;
  /** If start and end are set, and start is before end, these define temporal  coverage of grading period which may be used to associate GradableItems (Columns) by due date. End dates will be persisted as ending at  23:59:59 on the submitted day. */
  end?: string;
}

export interface BlackboardWebappsGradebookPublicapiV1GroupAttempt {
  /** The primary ID for this attempt. */
  id?: string;
  /** The Id of the User who submitted this Group Attempt. */
  userId?: string;
  /** The Id of the Group that owns this Group Attempt. */
  groupId?: string;
  /** The status of this attempt.


| Type      | Description
 | --------- | --------- |
| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |
| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |
| InProgress | attempt activity has commenced, but has not been submitted for grading |
| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |
| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |
| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |
| Completed | a grade has been entered for the attempt |
| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |
| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |
 */
  status?: string;
  /** The ready to post status of the group attempt. Only applicable to ultra courses and when the status of the attempt is 'needsgrading'. For any other attempt status values the readyToPost value is not applicable. In order for the attempt's final grade to be displayed, readyToPost value must be set to true. */
  readyToPost?: boolean;
  /** The display grade associated with this attempt. */
  displayGrade?: BlackboardWebappsGradebookPublicapiV1DisplayGrade;
  /** The score associated with this attempt. */
  score?: number;
  /** The instructor notes associated with this attempt. */
  notes?: string;
  /** The instructor feedback associated with this attempt. */
  feedback?: string;
  /** The group's comments associated with this Group Attempt. */
  groupComments?: string;
  /** The group's submission text associated with this Group Attempt. */
  groupSubmission?: string;
  /** The date on which this attempt was created. */
  created?: string;
  /** The attempt receipt associated with this attempt.

**Since**: 3900.22.0 */
  attemptReceipt?: BlackboardWebappsGradebookPublicapiV1EmbeddedAttemptReceipt;
  /** The text grade associated with this attempt. */
  text?: string;
  /** Return the attempt date associated with this attempt. */
  attemptDate?: string;
}

export interface BlackboardWebappsGradebookPublicapiV2AttemptV2 {
  /** The primary ID for this attempt. */
  id?: string;
  /** The user ID associated with this attempt.  Defaults to the authenticated user on create.  Can be specified as a user other than the authenticated user if the authenticated user has the "course.gradebook.MODIFY" entitlement and the authenticated application has the "course.attempt.nonowner.SUBMIT" entitlement. */
  userId?: string;
  /** The group attempt ID associated with this student attempt. */
  groupAttemptId?: string;
  /** Whether the score associated with this student attempt was overridden from the associated group attempt score. A value is only returned if the attempt grade is currently overridden. */
  groupOverride?: boolean;
  /** The status of this attempt.


| Type      | Description
 | --------- | --------- |
| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |
| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |
| InProgress | attempt activity has commenced, but has not been submitted for grading |
| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |
| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |
| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |
| Completed | a grade has been entered for the attempt |
| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |
| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |
 */
  status?: string;
  /** The ready to post status of the attempt. Only applicable to ultra courses and when the status of the attempt is 'needsgrading'. For any other attempt status values the readyToPost value is not applicable. */
  readyToPost?: boolean;
  /** The display grade associated with this attempt. */
  displayGrade?: BlackboardWebappsGradebookPublicapiV1DisplayGrade;
  /** The text grade associated with this attempt. */
  text?: string;
  /** The score associated with this attempt. */
  score?: number;
  /** The reconciliation mode to use when reconciling the attempt grade.  When modifying reconciliationMode, score is also required.  A new score will not be calculated based on the reconciliationMode

**Since**: 3700.2.0


| Type      | Description
 | --------- | --------- |
| Average |  |
| Highest |  |
| Lowest |  |
| Custom |  |
 */
  reconciliationMode?: string;
  /** The instructor notes associated with this attempt. */
  notes?: string;
  /** The instructor feedback associated with this attempt. */
  feedback?: string;
  /** The group attempt student comments associated with this attempt. */
  groupAttemptStudentComments?: string;
  /** The student comments associated with this attempt. */
  studentComments?: string;
  /** The student submission text associated with this attempt. */
  studentSubmission?: string;
  /** Whether the score associated with this attempt is ignored when computing the user's grade for the associated grade column. */
  exempt?: boolean;
  /** The date on which this attempt was created. */
  created?: string;
  /** Return the attempt date associated with this attempt. */
  attemptDate?: string;
  /** The date when the attempt was modified.

**Since**: 3800.0.0 */
  modified?: string;
  /** The attempt receipt associated with this attempt.

**Since**: 3900.22.0 */
  attemptReceipt?: BlackboardWebappsGradebookPublicapiV1EmbeddedAttemptReceipt;
}

export interface BlackboardWebappsGradebookPublicapiV2GradeColumnV2 {
  /** The primary ID of the grade column. */
  id?: string;
  /** The externalId for this grade column */
  externalId?: string;
  /** The externalId for this grade column

**Since**: 3500.2.0 */
  externalToolId?: string;
  /** The name of the grade column. */
  name?: string;
  /** The display name of the grade column. Only applicable for Classic courses. Ultra courses will simply use the `name` field.

**Since**: 3300.2.0 */
  displayName?: string;
  /** The description of the grade column. */
  description?: string;
  /** Whether this grade column is an external grade column. */
  externalGrade?: boolean;
  /** The date this grade column was created. */
  created?: string;
  /** Most recent date in which this column was modified. */
  modified?: string;
  /** For grade columns associated with a content item, the ID of the content item.

**Since**: 3000.11.0 */
  contentId?: string;
  /** Settings controlling the numerical scoring of this grade column. */
  score?: Record<string, unknown>;
  /** Settings controlling the availability/visibility of grade column data. */
  availability?: Record<string, unknown>;
  /** Settings controlling whether numerical and text grade values for this grade column are calculated, determined based on attempts, or manually entered. */
  grading?: Record<string, unknown>;
  /** The gradebook category ID for the grade column.

**Since**: 3400.2.0 */
  gradebookCategoryId?: string;
  /** The formula used for determining the value for the grade column, if it is a calculated column.

**Since**: 3400.5.0 */
  formula?: BlackboardWebappsGradebookPublicapiV2GradingFormulaV2;
  /** Indicates whether or not this column is included in gradebook calculations. Cannot be set for Ultra courses. Default: true

**Since**: 3800.4.0 */
  includeInCalculations?: boolean;
  /** Indicates whether or not column statistics are shown to students. Read-only for Ultra courses. Default: false

**Since**: 3800.4.0 */
  showStatisticsToStudents?: boolean;
  /** The score provider handle for the grade column.

**Since**: 3900.3.0 */
  scoreProviderHandle?: string;
  /** Settings controlling the learning outcome performance values for this grade column. */
  learningOutcome?: Record<string, unknown>;
}

export interface BlackboardWebappsGradebookPublicapiV2GradeV2 {
  /** The user ID associated with this grade. */
  userId?: string;
  /** The grade column ID for this grade. */
  columnId?: string;
  /** This historic field was incorrectly added to the public api despite being deprecated internally and never contained reliable data. Please stop using it immediately and determine the state using the rules you wish in the client based on the manual grade here, and the status of any associated attempts. (for example: some people treat 1 graded attempt and 2 ungraded attempts as logically \u2018graded\u2019; others want that to be \u2018needs grading\u2019).


| Type      | Description
 | --------- | --------- |
| Graded | Grade has been graded, corresponding to dbValue 1 |
| NeedsGrading | Grade needs grading, corresponding to dbValue 2 |
 */
  status?: string;
  /** The primary display grade associated with this grade. Secondary display grade is not exposed via API */
  displayGrade?: BlackboardWebappsGradebookPublicapiV1DisplayGrade;
  /** The overridden text representation of this grade. This field is only used for overriding the grade via text value */
  text?: string;
  /** The overridden score of this grade. This field is only used for overriding the grade */
  score?: number;
  /** The date on which the score associated with this grade was last overridden.  An ISODate value is only returned if this grade is currently overridden; otherwise, returns null. */
  overridden?: string;
  /** The instructor notes associated with this grade. This notes field is used for grades on manual grade columns.   That is, when column.grading.type = Manual.  It is also used when column.grading.type = Attempts and the grade has been manually overridden. */
  notes?: string;
  /** The instructor feedback associated with this grade.  This feedback is used for grades on manual grade columns.   That is, when column.grading.type = Manual.  It is also used when column.grading.type = Attempts and the grade has been manually overridden. */
  feedback?: string;
  /** Whether the score associated with this grade is ignored when computing the course grade. */
  exempt?: boolean;
  /** Whether the grade for a calculated column could be successfully computed. */
  corrupt?: boolean;
  /** The Id of a Grade Notation which can be optionally associated with this Grade. If a Grade Notation is specified for this Grade, then the DisplayGrade's Text attribute will contain the Grade Notation's Description. */
  gradeNotationId?: string;
  /** The change index associated with this grade which indicates what relative point in time the grade was created or last updated. */
  changeIndex?: number;
  /** The "firstRelevantDate" value is determined as follows: 1. The first recorded date when an attempt is scored. 2. The most recent date in which a final score is overridden. 3. In the event of a change in the instructor's aggregation model type after grading,    that date is also taken into account.

Note: First relevant dates do not apply to calculated columns.       Searching based on these dates will not return any calculated columns. */
  firstRelevantDate?: string;
  /** The "lastRelevantDate" value is determined as follows: 1. The date of the most recent modification of a grade when an attempt is scored. 2. The most recent date in which a final score is overridden. 3. In the event of a change in the instructor's aggregation model type after grading,    that date is also taken into account. 4. The latest date will be taken into account for all the mentioned scenarios.

Note: Last relevant dates do not apply to calculated columns.       Searching based on these dates will not return any calculated columns. */
  lastRelevantDate?: string;
}

export interface BlackboardWebappsGradebookPublicapiV2GradingFormulaV2 {
  formula?: string;
  aliases?: JavaUtilMapjavaLangStringblackboardPlatformRestUtilIdTORest;
}

export interface BlackboardWebappsPortalPublicapiV1InstitutionRole {
  /** The id associated with this institution role. */
  id?: string;
  /** The String role key associated with this institution role. */
  roleId?: string;
  /** The title of this institution role. */
  name?: string;
  /** The description of this institution role. */
  description?: string;
  /** Indicates if this institution role is custom. */
  custom?: boolean;
}

export type Int = Record<string, unknown>;

export interface JavaMathBigInteger {
  lowestSetBit: number;
}

export interface JavaUtilListblackboardDataUserUserSystemRole {
  empty: boolean;
}

export interface JavaUtilListblackboardPlatformFilesystemRestrictionPojoFileUploadRestrictions {
  empty: boolean;
}

export interface JavaUtilListblackboardPlatformRestUtilIdTORest {
  empty: boolean;
}

export interface JavaUtilListblackboardPluginCalendarRecurRecurringManagerBYDAY {
  empty: boolean;
}

export interface JavaUtilListblackboardPluginContentRestPublicapiV1ContentCopyHistoryV1 {
  empty: boolean;
}

export interface JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricCellV1 {
  empty: boolean;
}

export interface JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricColumnV1 {
  empty: boolean;
}

export interface JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricEvaluationCellV1 {
  empty: boolean;
}

export interface JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricRowV1 {
  empty: boolean;
}

export interface JavaUtilListblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNodeV1 {
  empty: boolean;
}

export interface JavaUtilListblackboardWebappsBlackboardPublicapiV2CoursesCourseV2SourceCourse {
  empty: boolean;
}

export interface JavaUtilListblackboardWebappsGradebookPublicapiV1GradeSymbolV1 {
  empty: boolean;
}

export interface JavaUtilListblackboardWebappsGradebookPublicapiV2RubricAssociationV1 {
  empty: boolean;
}

export interface JavaUtilListjavaLangString {
  empty: boolean;
}

export interface JavaUtilMapjavaLangStringblackboardPlatformRestUtilIdTORest {
  empty: boolean;
}

export interface JavaUtilMapjavaLangStringjavaLangString {
  empty: boolean;
}

export interface JavaUtilSetblackboardPlatformRestspringPublicapiV1CommonHateoasLinkV1 {
  empty: boolean;
}

export interface JavaUtilSetblackboardWebappsBlackboardPublicapiV1ContentCollectionContentCollectionResourceV1ContentCollectionLinkTOPubV1 {
  empty: boolean;
}

export interface OrgSpringframeworkHttpHttpStatusEnum {

}

export interface OrgSpringframeworkHttpResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1DiscussionGroupV1 {
  /** null


| Type      | Description
 | --------- | --------- |
| CONTINUE |  |
| SWITCHING_PROTOCOLS |  |
| PROCESSING |  |
| CHECKPOINT |  |
| OK |  |
| CREATED |  |
| ACCEPTED |  |
| NON_AUTHORITATIVE_INFORMATION |  |
| NO_CONTENT |  |
| RESET_CONTENT |  |
| PARTIAL_CONTENT |  |
| MULTI_STATUS |  |
| ALREADY_REPORTED |  |
| IM_USED |  |
| MULTIPLE_CHOICES |  |
| MOVED_PERMANENTLY |  |
| FOUND |  |
| MOVED_TEMPORARILY |  |
| SEE_OTHER |  |
| NOT_MODIFIED |  |
| USE_PROXY |  |
| TEMPORARY_REDIRECT |  |
| PERMANENT_REDIRECT |  |
| BAD_REQUEST |  |
| UNAUTHORIZED |  |
| PAYMENT_REQUIRED |  |
| FORBIDDEN |  |
| NOT_FOUND |  |
| METHOD_NOT_ALLOWED |  |
| NOT_ACCEPTABLE |  |
| PROXY_AUTHENTICATION_REQUIRED |  |
| REQUEST_TIMEOUT |  |
| CONFLICT |  |
| GONE |  |
| LENGTH_REQUIRED |  |
| PRECONDITION_FAILED |  |
| PAYLOAD_TOO_LARGE |  |
| REQUEST_ENTITY_TOO_LARGE |  |
| URI_TOO_LONG |  |
| REQUEST_URI_TOO_LONG |  |
| UNSUPPORTED_MEDIA_TYPE |  |
| REQUESTED_RANGE_NOT_SATISFIABLE |  |
| EXPECTATION_FAILED |  |
| I_AM_A_TEAPOT |  |
| INSUFFICIENT_SPACE_ON_RESOURCE |  |
| METHOD_FAILURE |  |
| DESTINATION_LOCKED |  |
| UNPROCESSABLE_ENTITY |  |
| LOCKED |  |
| FAILED_DEPENDENCY |  |
| TOO_EARLY |  |
| UPGRADE_REQUIRED |  |
| PRECONDITION_REQUIRED |  |
| TOO_MANY_REQUESTS |  |
| REQUEST_HEADER_FIELDS_TOO_LARGE |  |
| UNAVAILABLE_FOR_LEGAL_REASONS |  |
| INTERNAL_SERVER_ERROR |  |
| NOT_IMPLEMENTED |  |
| BAD_GATEWAY |  |
| SERVICE_UNAVAILABLE |  |
| GATEWAY_TIMEOUT |  |
| HTTP_VERSION_NOT_SUPPORTED |  |
| VARIANT_ALSO_NEGOTIATES |  |
| INSUFFICIENT_STORAGE |  |
| LOOP_DETECTED |  |
| BANDWIDTH_LIMIT_EXCEEDED |  |
| NOT_EXTENDED |  |
| NETWORK_AUTHENTICATION_REQUIRED |  |
 */
  statusCode?: string;
  statusCodeValue: number;
}

export interface OrgSpringframeworkHttpResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1MessageV1 {
  /** null


| Type      | Description
 | --------- | --------- |
| CONTINUE |  |
| SWITCHING_PROTOCOLS |  |
| PROCESSING |  |
| CHECKPOINT |  |
| OK |  |
| CREATED |  |
| ACCEPTED |  |
| NON_AUTHORITATIVE_INFORMATION |  |
| NO_CONTENT |  |
| RESET_CONTENT |  |
| PARTIAL_CONTENT |  |
| MULTI_STATUS |  |
| ALREADY_REPORTED |  |
| IM_USED |  |
| MULTIPLE_CHOICES |  |
| MOVED_PERMANENTLY |  |
| FOUND |  |
| MOVED_TEMPORARILY |  |
| SEE_OTHER |  |
| NOT_MODIFIED |  |
| USE_PROXY |  |
| TEMPORARY_REDIRECT |  |
| PERMANENT_REDIRECT |  |
| BAD_REQUEST |  |
| UNAUTHORIZED |  |
| PAYMENT_REQUIRED |  |
| FORBIDDEN |  |
| NOT_FOUND |  |
| METHOD_NOT_ALLOWED |  |
| NOT_ACCEPTABLE |  |
| PROXY_AUTHENTICATION_REQUIRED |  |
| REQUEST_TIMEOUT |  |
| CONFLICT |  |
| GONE |  |
| LENGTH_REQUIRED |  |
| PRECONDITION_FAILED |  |
| PAYLOAD_TOO_LARGE |  |
| REQUEST_ENTITY_TOO_LARGE |  |
| URI_TOO_LONG |  |
| REQUEST_URI_TOO_LONG |  |
| UNSUPPORTED_MEDIA_TYPE |  |
| REQUESTED_RANGE_NOT_SATISFIABLE |  |
| EXPECTATION_FAILED |  |
| I_AM_A_TEAPOT |  |
| INSUFFICIENT_SPACE_ON_RESOURCE |  |
| METHOD_FAILURE |  |
| DESTINATION_LOCKED |  |
| UNPROCESSABLE_ENTITY |  |
| LOCKED |  |
| FAILED_DEPENDENCY |  |
| TOO_EARLY |  |
| UPGRADE_REQUIRED |  |
| PRECONDITION_REQUIRED |  |
| TOO_MANY_REQUESTS |  |
| REQUEST_HEADER_FIELDS_TOO_LARGE |  |
| UNAVAILABLE_FOR_LEGAL_REASONS |  |
| INTERNAL_SERVER_ERROR |  |
| NOT_IMPLEMENTED |  |
| BAD_GATEWAY |  |
| SERVICE_UNAVAILABLE |  |
| GATEWAY_TIMEOUT |  |
| HTTP_VERSION_NOT_SUPPORTED |  |
| VARIANT_ALSO_NEGOTIATES |  |
| INSUFFICIENT_STORAGE |  |
| LOOP_DETECTED |  |
| BANDWIDTH_LIMIT_EXCEEDED |  |
| NOT_EXTENDED |  |
| NETWORK_AUTHENTICATION_REQUIRED |  |
 */
  statusCode?: string;
  statusCodeValue: number;
}

export interface OrgSpringframeworkHttpResponseEntityblackboardPluginRubricSpringRestPublicapiV1RubricEvaluationExpandV1 {
  /** null


| Type      | Description
 | --------- | --------- |
| CONTINUE |  |
| SWITCHING_PROTOCOLS |  |
| PROCESSING |  |
| CHECKPOINT |  |
| OK |  |
| CREATED |  |
| ACCEPTED |  |
| NON_AUTHORITATIVE_INFORMATION |  |
| NO_CONTENT |  |
| RESET_CONTENT |  |
| PARTIAL_CONTENT |  |
| MULTI_STATUS |  |
| ALREADY_REPORTED |  |
| IM_USED |  |
| MULTIPLE_CHOICES |  |
| MOVED_PERMANENTLY |  |
| FOUND |  |
| MOVED_TEMPORARILY |  |
| SEE_OTHER |  |
| NOT_MODIFIED |  |
| USE_PROXY |  |
| TEMPORARY_REDIRECT |  |
| PERMANENT_REDIRECT |  |
| BAD_REQUEST |  |
| UNAUTHORIZED |  |
| PAYMENT_REQUIRED |  |
| FORBIDDEN |  |
| NOT_FOUND |  |
| METHOD_NOT_ALLOWED |  |
| NOT_ACCEPTABLE |  |
| PROXY_AUTHENTICATION_REQUIRED |  |
| REQUEST_TIMEOUT |  |
| CONFLICT |  |
| GONE |  |
| LENGTH_REQUIRED |  |
| PRECONDITION_FAILED |  |
| PAYLOAD_TOO_LARGE |  |
| REQUEST_ENTITY_TOO_LARGE |  |
| URI_TOO_LONG |  |
| REQUEST_URI_TOO_LONG |  |
| UNSUPPORTED_MEDIA_TYPE |  |
| REQUESTED_RANGE_NOT_SATISFIABLE |  |
| EXPECTATION_FAILED |  |
| I_AM_A_TEAPOT |  |
| INSUFFICIENT_SPACE_ON_RESOURCE |  |
| METHOD_FAILURE |  |
| DESTINATION_LOCKED |  |
| UNPROCESSABLE_ENTITY |  |
| LOCKED |  |
| FAILED_DEPENDENCY |  |
| TOO_EARLY |  |
| UPGRADE_REQUIRED |  |
| PRECONDITION_REQUIRED |  |
| TOO_MANY_REQUESTS |  |
| REQUEST_HEADER_FIELDS_TOO_LARGE |  |
| UNAVAILABLE_FOR_LEGAL_REASONS |  |
| INTERNAL_SERVER_ERROR |  |
| NOT_IMPLEMENTED |  |
| BAD_GATEWAY |  |
| SERVICE_UNAVAILABLE |  |
| GATEWAY_TIMEOUT |  |
| HTTP_VERSION_NOT_SUPPORTED |  |
| VARIANT_ALSO_NEGOTIATES |  |
| INSUFFICIENT_STORAGE |  |
| LOOP_DETECTED |  |
| BANDWIDTH_LIMIT_EXCEEDED |  |
| NOT_EXTENDED |  |
| NETWORK_AUTHENTICATION_REQUIRED |  |
 */
  statusCode?: string;
  statusCodeValue: number;
}

export interface OrgSpringframeworkHttpResponseEntityblackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseACLGroupPredicateV1 {
  /** null


| Type      | Description
 | --------- | --------- |
| CONTINUE |  |
| SWITCHING_PROTOCOLS |  |
| PROCESSING |  |
| CHECKPOINT |  |
| OK |  |
| CREATED |  |
| ACCEPTED |  |
| NON_AUTHORITATIVE_INFORMATION |  |
| NO_CONTENT |  |
| RESET_CONTENT |  |
| PARTIAL_CONTENT |  |
| MULTI_STATUS |  |
| ALREADY_REPORTED |  |
| IM_USED |  |
| MULTIPLE_CHOICES |  |
| MOVED_PERMANENTLY |  |
| FOUND |  |
| MOVED_TEMPORARILY |  |
| SEE_OTHER |  |
| NOT_MODIFIED |  |
| USE_PROXY |  |
| TEMPORARY_REDIRECT |  |
| PERMANENT_REDIRECT |  |
| BAD_REQUEST |  |
| UNAUTHORIZED |  |
| PAYMENT_REQUIRED |  |
| FORBIDDEN |  |
| NOT_FOUND |  |
| METHOD_NOT_ALLOWED |  |
| NOT_ACCEPTABLE |  |
| PROXY_AUTHENTICATION_REQUIRED |  |
| REQUEST_TIMEOUT |  |
| CONFLICT |  |
| GONE |  |
| LENGTH_REQUIRED |  |
| PRECONDITION_FAILED |  |
| PAYLOAD_TOO_LARGE |  |
| REQUEST_ENTITY_TOO_LARGE |  |
| URI_TOO_LONG |  |
| REQUEST_URI_TOO_LONG |  |
| UNSUPPORTED_MEDIA_TYPE |  |
| REQUESTED_RANGE_NOT_SATISFIABLE |  |
| EXPECTATION_FAILED |  |
| I_AM_A_TEAPOT |  |
| INSUFFICIENT_SPACE_ON_RESOURCE |  |
| METHOD_FAILURE |  |
| DESTINATION_LOCKED |  |
| UNPROCESSABLE_ENTITY |  |
| LOCKED |  |
| FAILED_DEPENDENCY |  |
| TOO_EARLY |  |
| UPGRADE_REQUIRED |  |
| PRECONDITION_REQUIRED |  |
| TOO_MANY_REQUESTS |  |
| REQUEST_HEADER_FIELDS_TOO_LARGE |  |
| UNAVAILABLE_FOR_LEGAL_REASONS |  |
| INTERNAL_SERVER_ERROR |  |
| NOT_IMPLEMENTED |  |
| BAD_GATEWAY |  |
| SERVICE_UNAVAILABLE |  |
| GATEWAY_TIMEOUT |  |
| HTTP_VERSION_NOT_SUPPORTED |  |
| VARIANT_ALSO_NEGOTIATES |  |
| INSUFFICIENT_STORAGE |  |
| LOOP_DETECTED |  |
| BANDWIDTH_LIMIT_EXCEEDED |  |
| NOT_EXTENDED |  |
| NETWORK_AUTHENTICATION_REQUIRED |  |
 */
  statusCode?: string;
  statusCodeValue: number;
}

export interface OrgSpringframeworkHttpResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNodeV1 {
  /** null


| Type      | Description
 | --------- | --------- |
| CONTINUE |  |
| SWITCHING_PROTOCOLS |  |
| PROCESSING |  |
| CHECKPOINT |  |
| OK |  |
| CREATED |  |
| ACCEPTED |  |
| NON_AUTHORITATIVE_INFORMATION |  |
| NO_CONTENT |  |
| RESET_CONTENT |  |
| PARTIAL_CONTENT |  |
| MULTI_STATUS |  |
| ALREADY_REPORTED |  |
| IM_USED |  |
| MULTIPLE_CHOICES |  |
| MOVED_PERMANENTLY |  |
| FOUND |  |
| MOVED_TEMPORARILY |  |
| SEE_OTHER |  |
| NOT_MODIFIED |  |
| USE_PROXY |  |
| TEMPORARY_REDIRECT |  |
| PERMANENT_REDIRECT |  |
| BAD_REQUEST |  |
| UNAUTHORIZED |  |
| PAYMENT_REQUIRED |  |
| FORBIDDEN |  |
| NOT_FOUND |  |
| METHOD_NOT_ALLOWED |  |
| NOT_ACCEPTABLE |  |
| PROXY_AUTHENTICATION_REQUIRED |  |
| REQUEST_TIMEOUT |  |
| CONFLICT |  |
| GONE |  |
| LENGTH_REQUIRED |  |
| PRECONDITION_FAILED |  |
| PAYLOAD_TOO_LARGE |  |
| REQUEST_ENTITY_TOO_LARGE |  |
| URI_TOO_LONG |  |
| REQUEST_URI_TOO_LONG |  |
| UNSUPPORTED_MEDIA_TYPE |  |
| REQUESTED_RANGE_NOT_SATISFIABLE |  |
| EXPECTATION_FAILED |  |
| I_AM_A_TEAPOT |  |
| INSUFFICIENT_SPACE_ON_RESOURCE |  |
| METHOD_FAILURE |  |
| DESTINATION_LOCKED |  |
| UNPROCESSABLE_ENTITY |  |
| LOCKED |  |
| FAILED_DEPENDENCY |  |
| TOO_EARLY |  |
| UPGRADE_REQUIRED |  |
| PRECONDITION_REQUIRED |  |
| TOO_MANY_REQUESTS |  |
| REQUEST_HEADER_FIELDS_TOO_LARGE |  |
| UNAVAILABLE_FOR_LEGAL_REASONS |  |
| INTERNAL_SERVER_ERROR |  |
| NOT_IMPLEMENTED |  |
| BAD_GATEWAY |  |
| SERVICE_UNAVAILABLE |  |
| GATEWAY_TIMEOUT |  |
| HTTP_VERSION_NOT_SUPPORTED |  |
| VARIANT_ALSO_NEGOTIATES |  |
| INSUFFICIENT_STORAGE |  |
| LOOP_DETECTED |  |
| BANDWIDTH_LIMIT_EXCEEDED |  |
| NOT_EXTENDED |  |
| NETWORK_AUTHENTICATION_REQUIRED |  |
 */
  statusCode?: string;
  statusCodeValue: number;
}

export interface OrgSpringframeworkHttpResponseEntityblackboardWebappsGradebookPublicapiV1AttemptFileV1 {
  /** null


| Type      | Description
 | --------- | --------- |
| CONTINUE |  |
| SWITCHING_PROTOCOLS |  |
| PROCESSING |  |
| CHECKPOINT |  |
| OK |  |
| CREATED |  |
| ACCEPTED |  |
| NON_AUTHORITATIVE_INFORMATION |  |
| NO_CONTENT |  |
| RESET_CONTENT |  |
| PARTIAL_CONTENT |  |
| MULTI_STATUS |  |
| ALREADY_REPORTED |  |
| IM_USED |  |
| MULTIPLE_CHOICES |  |
| MOVED_PERMANENTLY |  |
| FOUND |  |
| MOVED_TEMPORARILY |  |
| SEE_OTHER |  |
| NOT_MODIFIED |  |
| USE_PROXY |  |
| TEMPORARY_REDIRECT |  |
| PERMANENT_REDIRECT |  |
| BAD_REQUEST |  |
| UNAUTHORIZED |  |
| PAYMENT_REQUIRED |  |
| FORBIDDEN |  |
| NOT_FOUND |  |
| METHOD_NOT_ALLOWED |  |
| NOT_ACCEPTABLE |  |
| PROXY_AUTHENTICATION_REQUIRED |  |
| REQUEST_TIMEOUT |  |
| CONFLICT |  |
| GONE |  |
| LENGTH_REQUIRED |  |
| PRECONDITION_FAILED |  |
| PAYLOAD_TOO_LARGE |  |
| REQUEST_ENTITY_TOO_LARGE |  |
| URI_TOO_LONG |  |
| REQUEST_URI_TOO_LONG |  |
| UNSUPPORTED_MEDIA_TYPE |  |
| REQUESTED_RANGE_NOT_SATISFIABLE |  |
| EXPECTATION_FAILED |  |
| I_AM_A_TEAPOT |  |
| INSUFFICIENT_SPACE_ON_RESOURCE |  |
| METHOD_FAILURE |  |
| DESTINATION_LOCKED |  |
| UNPROCESSABLE_ENTITY |  |
| LOCKED |  |
| FAILED_DEPENDENCY |  |
| TOO_EARLY |  |
| UPGRADE_REQUIRED |  |
| PRECONDITION_REQUIRED |  |
| TOO_MANY_REQUESTS |  |
| REQUEST_HEADER_FIELDS_TOO_LARGE |  |
| UNAVAILABLE_FOR_LEGAL_REASONS |  |
| INTERNAL_SERVER_ERROR |  |
| NOT_IMPLEMENTED |  |
| BAD_GATEWAY |  |
| SERVICE_UNAVAILABLE |  |
| GATEWAY_TIMEOUT |  |
| HTTP_VERSION_NOT_SUPPORTED |  |
| VARIANT_ALSO_NEGOTIATES |  |
| INSUFFICIENT_STORAGE |  |
| LOOP_DETECTED |  |
| BANDWIDTH_LIMIT_EXCEEDED |  |
| NOT_EXTENDED |  |
| NETWORK_AUTHENTICATION_REQUIRED |  |
 */
  statusCode?: string;
  statusCodeValue: number;
}

export const TypeMap: Record<string, any> = {
  "BlackboardPlatformRestPublicapiV1CommonFraction": {
    "name": "BlackboardPlatformRestPublicapiV1CommonFraction",
    "originalName": "blackboard.platform.rest.publicapi.v1.common.Fraction",
    "description": "",
    "type": "object",
    "properties": {
        "numerator": {
            "type": "unknown",
            "description": "The numerator of this fraction."
        },
        "denominator": {
            "type": "unknown",
            "description": "The denominator of this fraction."
        }
    }
},
  "BlackboardPlatformRestPublicapiV1ContentContentHandler": {
    "name": "BlackboardPlatformRestPublicapiV1ContentContentHandler",
    "originalName": "blackboard.platform.rest.publicapi.v1.content.ContentHandler",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The content handler's ID.\n\nPublicly supported handlers: \n\n | ID                                 | Documentation                   | Since     |\n |------------------------------------|---------------------------------|-----------|\n | resource/x-bb-document             | ContentItemTOPubV1              |  3000.1.0 |\n | resource/x-bb-externallink         | ExternalLinkTOPubV1             |  3000.1.0 |\n | resource/x-bb-folder               | ContentFolderTOPubV1            |  3000.1.0 |\n | resource/x-bb-courselink           | CourseLinkTOPubV1               |  3100.5.0 |\n | resource/x-bb-forumlink            | DiscussionLinkTOPubV1           |  3100.6.0 |\n | resource/x-bb-blti-link            | BasicLTITOPubV1                 |  3200.6.0 |\n | resource/x-bb-file                 | ContentFileTOPubV1              |  3200.6.0 |\n | resource/x-bb-asmt-test-link       | TestLinkTOPubV1                 |  3300.5.0 |\n | resource/x-bb-assignment           | AssignmentTOPubV1               |  3400.9.0 |\n | resource/x-bb-blti-bltiplacement-* | BasicLTIPlacementContentTOPubV1 |  3600.0.0 |\n \n\nFor handlers that are not publicly supported yet, their ID will be shown here, and updates to common content attributes are allowed, but extended handler-specific attributes will not be visible."
        }
    }
},
  "BlackboardPlatformRestPublicapiV1ContentOriginalityReportingTool": {
    "name": "BlackboardPlatformRestPublicapiV1ContentOriginalityReportingTool",
    "originalName": "blackboard.platform.rest.publicapi.v1.content.OriginalityReportingTool",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The Originality Reporting Tools handler id."
        }
    }
},
  "BlackboardPlatformRestPublicapiV1SystemSystemTaskResult": {
    "name": "BlackboardPlatformRestPublicapiV1SystemSystemTaskResult",
    "originalName": "blackboard.platform.rest.publicapi.v1.system.SystemTaskResult",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The identifier used to determine type of the system task result."
        }
    }
},
  "BlackboardPlatformRestUtilRawText": {
    "name": "BlackboardPlatformRestUtilRawText",
    "originalName": "blackboard.platform.rest.util.RawText",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringExceptionRestException": {
    "name": "BlackboardPlatformRestspringExceptionRestException",
    "originalName": "blackboard.platform.restspring.exception.RestException",
    "description": "",
    "type": "object",
    "properties": {
        "status": {
            "type": "string",
            "description": "Represents HTTP Status code in the response header.",
            "required": false
        },
        "code": {
            "type": "string",
            "description": "The error code specific to a particular REST API. It is usually something that conveys information specific to the problem domain. For cases where the HTTP Status code conveys all the information required (such as a 404-Not Found) then the code may be omitted.",
            "required": false
        },
        "message": {
            "type": "string",
            "description": "Error message that should be easy to understand and convey a concise reason as to why the error occurred",
            "required": true
        },
        "developerMessage": {
            "type": "string",
            "description": "Represents any technical information that a developer calling REST API might find useful.",
            "required": false
        },
        "extraInfo": {
            "type": "string",
            "description": "Indicates a URL that anyone seeing the error message can click in a browser. The target web page should describe the error condition fully, as well as potential solutions to help them resolve the error condition",
            "required": false
        }
    }
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginAssessmentPublicapiV1QuestionsQuestionV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginAssessmentPublicapiV1QuestionsQuestionV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.assessment.publicapi.v1.questions.QuestionV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginAttendancePublicapiV1AttendanceRecordV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginAttendancePublicapiV1AttendanceRecordV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.attendance.publicapi.v1.AttendanceRecordV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginAttendancePublicapiV1CourseMeetingV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginAttendancePublicapiV1CourseMeetingV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.attendance.publicapi.v1.CourseMeetingV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginCalendarPublicapiV1CalendarItemV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginCalendarPublicapiV1CalendarItemV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.calendar.publicapi.v1.CalendarItemV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginContentRestPublicapiV1ContentV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginContentRestPublicapiV1ContentV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.content.rest.publicapi.v1.ContentV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1DiscussionV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1DiscussionV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.discussionboard.spring.rest.publicapi.v1.DiscussionV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginFileRestPublicapiV1UploadedFileInfoV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginFileRestPublicapiV1UploadedFileInfoV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.file.rest.publicapi.v1.UploadedFileInfoV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginGroupspacePublicapiV1GroupsGroupMembershipV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginGroupspacePublicapiV1GroupsGroupMembershipV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.groupspace.publicapi.v1.groups.GroupMembershipV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginGroupspacePublicapiV1GroupsGroupV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginGroupspacePublicapiV1GroupsGroupV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.groupspace.publicapi.v1.groups.GroupV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginGroupspacePublicapiV2GroupsGroupV2": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginGroupspacePublicapiV2GroupsGroupV2",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginRubricSpringRestPublicapiV1ExtendedRubricDefinitionV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginRubricSpringRestPublicapiV1ExtendedRubricDefinitionV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.rubric.spring.rest.publicapi.v1.ExtendedRubricDefinitionV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginRubricSpringRestPublicapiV1RubricAssociationV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginRubricSpringRestPublicapiV1RubricAssociationV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricAssociationV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginRubricSpringRestPublicapiV1RubricEvaluationExpandV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardPluginRubricSpringRestPublicapiV1RubricEvaluationExpandV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricEvaluationExpandV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseACLUserPredicateV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseACLUserPredicateV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.adaptiveRelease.AdaptiveReleaseACLUserPredicateV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseRuleCriteriaV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseRuleCriteriaV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.adaptiveRelease.AdaptiveReleaseRuleCriteriaV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseRuleV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseRuleV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.adaptiveRelease.AdaptiveReleaseRuleV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AnnouncementsAnnouncementV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AnnouncementsAnnouncementV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.announcements.AnnouncementV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AnnouncementsCourseAnnouncementV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1AnnouncementsCourseAnnouncementV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.announcements.CourseAnnouncementV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CategoriesCategoryCourseMembershipV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CategoriesCategoryCourseMembershipV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.categories.CategoryCourseMembershipV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CategoriesCategoryV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CategoriesCategoryV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.categories.CategoryV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1ContentContentGroupV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1ContentContentGroupV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.content.ContentGroupV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1ContentCreateAssignmentResultV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1ContentCreateAssignmentResultV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.content.CreateAssignmentResultV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CoursesCourseChildV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CoursesCourseChildV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.courses.CourseChildV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CoursesCourseTaskV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CoursesCourseTaskV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.courses.CourseTaskV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CoursesCourseV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1CoursesCourseV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.courses.CourseV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1DatasourcesDataSourceV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1DatasourcesDataSourceV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.datasources.DataSourceV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyHierarchyNodeCourseV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyHierarchyNodeCourseV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.institutionalhierarchy.HierarchyNodeCourseV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyHierarchyNodeUserV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyHierarchyNodeUserV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.institutionalhierarchy.HierarchyNodeUserV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyInstitutionalHierarchyToolV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyInstitutionalHierarchyToolV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.institutionalhierarchy.InstitutionalHierarchyToolV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNodeAdminV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNodeAdminV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.institutionalhierarchy.NodeAdminV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1LtiLTIDomainConfigV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1LtiLTIDomainConfigV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.lti.LTIDomainConfigV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1LtiLTIPlacementV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1LtiLTIPlacementV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.lti.LTIPlacementV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1MembershipsCourseMembershipV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1MembershipsCourseMembershipV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.memberships.CourseMembershipV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1MessageCourseMessageV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1MessageCourseMessageV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.message.CourseMessageV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1PronounsPronounV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1PronounsPronounV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.pronouns.PronounV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1TermsTermV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1TermsTermV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.terms.TermV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1UsersUserV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV1UsersUserV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v1.users.UserV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV2CoursesCourseV2": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsBlackboardPublicapiV2CoursesCourseV2",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1AttemptFileV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1AttemptFileV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v1.AttemptFileV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradableItemOverrideV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradableItemOverrideV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v1.GradableItemOverrideV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradeColumnV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradeColumnV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v1.GradeColumnV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradeNotationV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradeNotationV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v1.GradeNotationV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradeSchemaV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GradeSchemaV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v1.GradeSchemaV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GroupAttemptV1": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV1GroupAttemptV1",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v1.GroupAttemptV1>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV2AttemptV2": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV2AttemptV2",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v2.AttemptV2>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV2GradeColumnV2": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityblackboardWebappsGradebookPublicapiV2GradeColumnV2",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringHttpRestResponseEntityjavaLangVoid": {
    "name": "BlackboardPlatformRestspringHttpRestResponseEntityjavaLangVoid",
    "originalName": "blackboard.platform.restspring.http.RestResponseEntity<java.lang.Void>",
    "description": "",
    "type": "object",
    "properties": {}
},
  "BlackboardPlatformRestspringPublicapiV1CommonParamsCourseIdParam": {
    "name": "BlackboardPlatformRestspringPublicapiV1CommonParamsCourseIdParam",
    "originalName": "blackboard.platform.restspring.publicapi.v1.common.params.CourseIdParam",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": ""
        }
    }
},
  "BlackboardPluginAssessmentPublicapiV1ProctoringProctoringService": {
    "name": "BlackboardPluginAssessmentPublicapiV1ProctoringProctoringService",
    "originalName": "blackboard.plugin.assessment.publicapi.v1.proctoring.ProctoringService",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The ID associated with this proctoring service."
        },
        "name": {
            "type": "string",
            "description": "The name of the proctoring service."
        },
        "handle": {
            "type": "string",
            "description": "The handle that uniquely identifies this proctoring service."
        },
        "vendor": {
            "type": "string",
            "description": "The vendors of the proctoring service.\n\n\n| Type      | Description\n | --------- | --------- |\n| Respondus | Respondus |\n| Internal | For internal testing only.  For use with tests which require multiple proctoring services. |\n| Lti | LTI Proctoring Placement  **Since**: 3900.12.0 |\n"
        },
        "assessmentSettingsUrl": {
            "type": "string",
            "description": "The url for the vendors assessment settings LTI tool."
        },
        "assessmentSettingsCustomParameters": {
            "type": "unknown",
            "description": "Custom launch parameters for the vendors assessment settings LTI tool."
        },
        "browserDownloadUrl": {
            "type": "string",
            "description": "The download url for the vendors secure browser."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the proctoring service."
        }
    }
},
  "BlackboardPluginAssessmentPublicapiV1QuestionsQuestion": {
    "name": "BlackboardPluginAssessmentPublicapiV1QuestionsQuestion",
    "originalName": "blackboard.plugin.assessment.publicapi.v1.questions.Question",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The id of the question."
        },
        "title": {
            "type": "string",
            "description": "The title of the question."
        },
        "text": {
            "type": "string",
            "description": "The main text content for the question. It may include plain and formatted text, and all kinds of content supported by the full text editor."
        },
        "position": {
            "type": "integer",
            "description": "Position of the Question on the Assessment Canvas.",
            "format": "int32"
        },
        "points": {
            "type": "number",
            "description": "The point value for the question."
        },
        "correctResponseFeedback": {
            "type": "string",
            "description": "Feedback displayed to students when their submitted response is correct."
        },
        "incorrectResponseFeedback": {
            "type": "string",
            "description": "Feedback displayed to students when their submitted response is incorrect."
        },
        "instructorNotes": {
            "type": "string",
            "description": "Text added to the question as a note for the instructor. It is not intended to be displayed to students."
        },
        "questionHandler": {
            "type": "unknown",
            "description": ""
        }
    }
},
  "BlackboardPluginAssessmentPublicapiV1QuestionsHandlersQuestionHandler": {
    "name": "BlackboardPluginAssessmentPublicapiV1QuestionsHandlersQuestionHandler",
    "originalName": "blackboard.plugin.assessment.publicapi.v1.questions.handlers.QuestionHandler",
    "description": "",
    "type": "object",
    "properties": {
        "type": {
            "type": "string",
            "description": "Type of Question supported.\n\n\n| Type      | Description\n | --------- | --------- |\n| Presentation |   **Since**: 3300.9.0 |\n| EitherOr | Read Only  **Since**: 3300.9.0 |\n| Essay | Read Only  **Since**: 3300.9.0 |\n| MultipleAnswer | Read Only  **Since**: 3400.4.0 |\n| Numeric | Read Only  **Since**: 3400.4.0 |\n| MultipleChoice | Read Only  **Since**: 3400.4.0 |\n| Ordering | Read Only  **Since**: 3400.4.0 |\n| Matching | Read Only  **Since**: 3400.4.0 |\n| FillInTheBlank | Read Only  **Since**: 3400.4.0 |\n| Calculated | Read Only  **Since**: 3400.4.0 |\n| FileResponse | Read Only  **Since**: 3400.4.0 |\n| LikertOpinionScale | Read Only  **Since**: 3400.4.0 |\n| QuizBowl | Read Only  **Since**: 3400.4.0 |\n| HotSpot | Read Only  **Since**: 3400.4.0 |\n| JumbledSentence | Read Only  **Since**: 3400.4.0 |\n| FillInTheBlankPlus | Read Only  **Since**: 3400.4.0 |\n| QuestionBlock | Read Only  **Since**: 3700.2.0 |\n| PageBreak | Read Only  **Since**: 3900.51.0 |\n| AiChat | AI Chat question  **Since**: 3900.95.0 |\n"
        }
    }
},
  "BlackboardPluginAttendancePublicapiV1AttendanceRecord": {
    "name": "BlackboardPluginAttendancePublicapiV1AttendanceRecord",
    "originalName": "blackboard.plugin.attendance.publicapi.v1.AttendanceRecord",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "integer",
            "description": "The primary ID of the attendance record.",
            "format": "int64"
        },
        "meetingId": {
            "type": "string",
            "description": "The primary id of the meeting."
        },
        "userId": {
            "type": "string",
            "description": "The learn external id of the user."
        },
        "status": {
            "type": "string",
            "description": "The attendance status of the user.\n\n\n| Type      | Description\n | --------- | --------- |\n| Absent |  |\n| Late |  |\n| Present |  |\n| Excused |  |\n"
        },
        "modifiedByUserId": {
            "type": "string",
            "description": "The user id who last modified this attendance record"
        },
        "createdTime": {
            "type": "string",
            "description": "Created date timestamp for attendance record",
            "format": "date-time"
        },
        "modifiedTime": {
            "type": "string",
            "description": "Modified date timestamp for attendance record",
            "format": "date-time"
        }
    }
},
  "BlackboardPluginAttendancePublicapiV1CourseMeeting": {
    "name": "BlackboardPluginAttendancePublicapiV1CourseMeeting",
    "originalName": "blackboard.plugin.attendance.publicapi.v1.CourseMeeting",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "integer",
            "description": "The primary ID of the meeting.",
            "format": "int64"
        },
        "courseId": {
            "type": "string",
            "description": "The primary ID of the course."
        },
        "title": {
            "type": "string",
            "description": "The title of the meeting"
        },
        "description": {
            "type": "string",
            "description": "The description of the meeting"
        },
        "start": {
            "type": "string",
            "description": "The start time of meeting",
            "format": "date-time"
        },
        "end": {
            "type": "string",
            "description": "The end time of meeting",
            "format": "date-time"
        },
        "externalLink": {
            "type": "string",
            "description": "The externalLink of course meeting"
        }
    }
},
  "BlackboardPluginAttendancePublicapiV1DownloadAttendanceDataDownloadUrl": {
    "name": "BlackboardPluginAttendancePublicapiV1DownloadAttendanceDataDownloadUrl",
    "originalName": "blackboard.plugin.attendance.publicapi.v1.download.AttendanceDataDownloadUrl",
    "description": "",
    "type": "object",
    "properties": {
        "downloadUrl": {
            "type": "string",
            "description": "The download url of attendance data file."
        }
    }
},
  "BlackboardPluginCalendarPublicapiV1CalendarItem": {
    "name": "BlackboardPluginCalendarPublicapiV1CalendarItem",
    "originalName": "blackboard.plugin.calendar.publicapi.v1.CalendarItem",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "Calendar item identifier that indicates the id of the calendar item source which the item was created from. (Ex. '_417_1')"
        },
        "type": {
            "type": "string",
            "description": "The type of this Calendar Item.\n\n\n| Type      | Description\n | --------- | --------- |\n| Course |  |\n| GradebookColumn | Read only. |\n| Institution |  |\n| OfficeHours |  |\n| Personal |  |\n"
        },
        "calendarId": {
            "type": "string",
            "description": "Calendar source identifier which indicates the calendar on which the calendar item was created. Examples of possible values : \"PERSONAL\", \"INSTITUTION\", and course id in the format of \"_3_1\"."
        },
        "calendarName": {
            "type": "string",
            "description": "Calendar source label/display name."
        },
        "title": {
            "type": "string",
            "description": "Title of the calendar item. Title length cannot exceed 255 characters."
        },
        "description": {
            "type": "string",
            "description": "Description of the calendar item."
        },
        "location": {
            "type": "string",
            "description": "Location of the calendar item and it cannot exceed 1024 characters."
        },
        "start": {
            "type": "string",
            "description": "Start date of the calendar item either in the past if the calendar item is for an event that's already started OR in the future if it's for an event to start in the future. This is always set and should occur before the end date.",
            "format": "date-time"
        },
        "end": {
            "type": "string",
            "description": "End date of the calendar item either in the past if the calendar item is for an event that's already end OR in the future if it's for an event to end in the future. This is always set and should occur after the start date.",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "description": "Date when the calendar item was last modified.",
            "format": "date-time"
        },
        "color": {
            "type": "string",
            "description": "Color to use for the calendar item. It's a shared setting for all calendar items with the same calendar source identifier."
        },
        "disableResizing": {
            "type": "boolean",
            "description": "Whether resizing of the calendar item should NOT be allowed."
        },
        "createdByUserId": {
            "type": "string",
            "description": "Get the user who created this calendar item. This will be null for non-personal events when the creator has been deleted."
        },
        "dynamicCalendarItemProps": {
            "type": "object",
            "description": "Extra calendar item properties if it is a GradebookColumn calendar item."
        },
        "recurrence": {
            "type": "unknown",
            "description": "Recurring definition if the calendar item is a repeatable calendar item. This object must be defined for <code>OfficeHours</code> type calendar items."
        },
        "ltiLaunchDeepLink": {
            "type": "unknown",
            "description": "Learning Tools Interoperability (LTI) link definition if available. This object must be defined for <code>Course</code> type calendar item."
        }
    }
},
  "BlackboardPluginCalendarPublicapiV1CalendarItemRecurrence": {
    "name": "BlackboardPluginCalendarPublicapiV1CalendarItemRecurrence",
    "originalName": "blackboard.plugin.calendar.publicapi.v1.CalendarItemRecurrence",
    "description": "",
    "type": "object",
    "properties": {
        "count": {
            "type": "integer",
            "description": "Recurrence count indicating how many times the calendar item should be repeated. Either this count OR the 'until' date is/'should be' set. When creating a calendar item, 'until' date will be used if both 'until' date and the count are set.",
            "format": "int32"
        },
        "frequency": {
            "type": "string",
            "description": "Frequency of the calendar item repeated.\n\n\n| Type      | Description\n | --------- | --------- |\n| Monthly |  |\n| Weekly |  |\n| Daily |  |\n"
        },
        "interval": {
            "type": "integer",
            "description": "Interval between recurrences depends on the repeating type. For example, if the calendar times should be repeated every three weeks, you need set interval to 3 as well as frequency to \"Weekly\". Minimum and Maximum allowed Intervals are 1 and 100 respectively.",
            "format": "int32"
        },
        "monthRepeatDay": {
            "type": "integer",
            "description": "This property is used in conjunction with the 'Monthly' frequency and it indicates on which day of the month the calendar item is/'should be' repeated on. The valid values are valid month days, that is, 1 to 31. Either this OR both 'monthPosition' and 'repeatDay' should be set to create a recurring calendar item with 'Monthly' frequency.",
            "format": "int32"
        },
        "monthPosition": {
            "type": "integer",
            "description": "This property is used in conjunction with the 'Monthly' frequency and it indicates that the calendar item is/'should be' repeated on nth occurrence of 'repeatDay' in the month. Valid values for 'monthPosition' are integers in the range of -1 and 4 inclusive: -1 for the last occurrence, 1 for the first occurrence, 2 for the second occurrence, and so on. 0 is not used.",
            "format": "int32"
        },
        "originalStart": {
            "type": "string",
            "description": "The original start date for the calendar item.",
            "format": "date-time"
        },
        "originalEnd": {
            "type": "string",
            "description": "The original end date for the calendar item.",
            "format": "date-time"
        },
        "repeatBroken": {
            "type": "boolean",
            "description": "Calendar item that's repeated is part of a recurring series of calendar events but the item has been changed since its original creation. In other words, the calendar item has been modified to no longer align with the recurring series (day/time changed for example) of events. This can only be {@code true} if the calendar item is repeatable."
        },
        "repeatDay": {
            "type": "string",
            "description": "For monthly recurring event, repeat by day of week.\n\n\n| Type      | Description\n | --------- | --------- |\n| Su |  |\n| Mo |  |\n| Tu |  |\n| We |  |\n| Th |  |\n| Fr |  |\n| Sa |  |\n"
        },
        "until": {
            "type": "string",
            "description": "The date the calendar item should be repeated until. Either this 'until' date OR the count is/'should be' set. When creating a calendar item, 'until' date will be used if both 'until' date and the count are set.",
            "format": "date-time"
        },
        "weekDays": {
            "type": "unknown",
            "description": "This property is used in conjunction with the 'Weekly' frequency and it indicates the days of the week the calendar item should be repeated on."
        }
    }
},
  "BlackboardPluginCalendarPublicapiV1LTILaunchDeepLink": {
    "name": "BlackboardPluginCalendarPublicapiV1LTILaunchDeepLink",
    "originalName": "blackboard.plugin.calendar.publicapi.v1.LTILaunchDeepLink",
    "description": "",
    "type": "object",
    "properties": {
        "placementHandle": {
            "type": "string",
            "description": "Placement handle Id of the Learning Tools Interoperability link"
        },
        "uuid": {
            "type": "string",
            "description": "Unique Id of the Learning Tools Interoperability link"
        },
        "url": {
            "type": "string",
            "description": "URL to launch of the Learning Tools Interoperability link"
        },
        "title": {
            "type": "string",
            "description": "Title of the Learning Tools Interoperability link"
        },
        "customParameters": {
            "type": "unknown",
            "description": "Custom parameters of the Learning Tools Interoperability link"
        }
    }
},
  "BlackboardPluginContentRestPublicapiV1Content": {
    "name": "BlackboardPluginContentRestPublicapiV1Content",
    "originalName": "blackboard.plugin.content.rest.publicapi.v1.Content",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The ID of the content."
        },
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
            "description": "The body text associated with this content. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information.",
            "format": "BbML"
        },
        "description": {
            "type": "string",
            "description": "The short description of this content.\n\nThis field is not used in Classic courses.  For Ultra courses this is used to show information directly on the course outline."
        },
        "created": {
            "type": "string",
            "description": "The date this content was created.",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "description": "The date this content was modified.\n\n**Since**: 3700.4.0",
            "format": "date-time"
        },
        "position": {
            "type": "integer",
            "description": "The position of this content within its parent folder. Position values are zero-based (the first element has a position value of zero, not one). Default position is last in the list of child contents under the parent.",
            "format": "int32"
        },
        "hasChildren": {
            "type": "boolean",
            "description": "Indicates whether this content is allowed to have child content items."
        },
        "hasGradebookColumns": {
            "type": "boolean",
            "description": "Indicates whether this content item has one or more gradebook columns.\n\nAssociated gradebook columns can be accessed via /learn/api/public/v1/courses/$courseId/gradebook/columns?contentId=$contentId\n\n**Since**: 3000.11.0"
        },
        "hasAssociatedGroups": {
            "type": "boolean",
            "description": "Indicates whether this content item has one or more associated groups.\n\nAssociated groups can be accessed via /learn/api/public/v1/courses/$courseId/contents/$contentId/groups\n\n**Since**: 3100.4.0"
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
            "description": "Settings controlling availability of the content to students."
        },
        "contentHandler": {
            "type": "unknown",
            "description": "Extended settings specific to this content item's content handler."
        },
        "copyHistory": {
            "type": "unknown",
            "description": "A list of Content History entities in representation of the copy process the current content item might have if is an LTI content, ordered from newest to oldest content and its respective source course from which current object is a copy of."
        },
        "links": {
            "type": "unknown",
            "description": "A list of links to resources related to this content item. Supported relation types include:\n\n- alternate\n\n**Since**: 3900.0.0"
        },
        "subtype": {
            "type": "string",
            "description": "Optional assessment subtype for further differentiation. For example, a test can have the subtype 'assignment' in Ultra, alongside AI conversations and knowledge checks, ensuring type-agnostic categorization."
        }
    }
},
  "BlackboardPluginContentRestPublicapiV1FileAttachment": {
    "name": "BlackboardPluginContentRestPublicapiV1FileAttachment",
    "originalName": "blackboard.plugin.content.rest.publicapi.v1.FileAttachment",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": ""
        },
        "fileName": {
            "type": "string",
            "description": ""
        },
        "mimeType": {
            "type": "string",
            "description": ""
        }
    }
},
  "BlackboardPluginDiscussionboardSpringRestPublicapiV1Discussion": {
    "name": "BlackboardPluginDiscussionboardSpringRestPublicapiV1Discussion",
    "originalName": "blackboard.plugin.discussionboard.spring.rest.publicapi.v1.Discussion",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The ID of the discussion. (Ex. '_65_1')"
        },
        "title": {
            "type": "string",
            "description": "Title given to the discussion forum"
        },
        "available": {
            "type": "boolean",
            "description": "Indicates if the discussion is available"
        },
        "gradable": {
            "type": "boolean",
            "description": "Indicates if the discussion allows grading"
        },
        "gradebookColumnId": {
            "type": "string",
            "description": "Id of the Grade column associated to this discussion."
        },
        "groupDiscussion": {
            "type": "boolean",
            "description": "Indicates if the discussion is a group discussion"
        },
        "createdDate": {
            "type": "string",
            "description": "Date in which the discussion was created.",
            "format": "date-time"
        },
        "modifiedDate": {
            "type": "string",
            "description": "Last date in which the discussion was updated.",
            "format": "date-time"
        },
        "topic": {
            "type": "unknown",
            "description": "Topic of the Discussion. Only applicable to Ultra discussions."
        }
    }
},
  "BlackboardPluginDiscussionboardSpringRestPublicapiV1Message": {
    "name": "BlackboardPluginDiscussionboardSpringRestPublicapiV1Message",
    "originalName": "blackboard.plugin.discussionboard.spring.rest.publicapi.v1.Message",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The Id of the message."
        },
        "discussionId": {
            "type": "string",
            "description": "The Id of the discussion."
        },
        "parentId": {
            "type": "string",
            "description": "The Id of the parent message."
        },
        "threadId": {
            "type": "string",
            "description": "The Id of the message thread."
        },
        "userId": {
            "type": "string",
            "description": "The Id of the user who created the message."
        },
        "groupId": {
            "type": "string",
            "description": "The Id of the group, only set for group discussions."
        },
        "givenName": {
            "type": "string",
            "description": "Given name of the user who created the message."
        },
        "familyName": {
            "type": "string",
            "description": "Family name of the user who created the message."
        },
        "status": {
            "type": "string",
            "description": "Status of the message.\n\n\n| Type      | Description\n | --------- | --------- |\n| Published | Message is published in the discussion and visible for all users. |\n| Deleted | Message is shown in the discussion as soft-deleted. |\n| Draft | Message is stored as a draft and only visible for the author user. |\n"
        },
        "body": {
            "type": "string",
            "description": "Body of the message, in BbML format."
        },
        "postDate": {
            "type": "string",
            "description": "Date in which the message was posted.",
            "format": "date-time"
        },
        "editDate": {
            "type": "string",
            "description": "Last Date in which the message was edited.",
            "format": "date-time"
        },
        "createdDate": {
            "type": "string",
            "description": "Date in which the message was created.",
            "format": "date-time"
        },
        "modifiedDate": {
            "type": "string",
            "description": "Last Date in which the message was modified.",
            "format": "date-time"
        },
        "isRead": {
            "type": "boolean",
            "description": "Whether the user in context has read the message."
        }
    }
},
  "BlackboardPluginDiscussionboardSpringRestPublicapiV1Topic": {
    "name": "BlackboardPluginDiscussionboardSpringRestPublicapiV1Topic",
    "originalName": "blackboard.plugin.discussionboard.spring.rest.publicapi.v1.Topic",
    "description": "",
    "type": "object",
    "properties": {
        "body": {
            "type": "string",
            "description": "Body of the message, in BbML format."
        },
        "groupId": {
            "type": "string",
            "description": "The Id of the group, only set for group discussions."
        },
        "status": {
            "type": "string",
            "description": "Status of the message.\n\n\n| Type      | Description\n | --------- | --------- |\n| Published | Message is published in the discussion and visible for all users. |\n| Deleted | Message is shown in the discussion as soft-deleted. |\n| Draft | Message is stored as a draft and only visible for the author user. |\n"
        },
        "id": {
            "type": "string",
            "description": "The Id of the message."
        },
        "discussionId": {
            "type": "string",
            "description": "The Id of the discussion."
        },
        "parentId": {
            "type": "string",
            "description": "The Id of the parent message."
        },
        "threadId": {
            "type": "string",
            "description": "The Id of the message thread."
        },
        "userId": {
            "type": "string",
            "description": "The Id of the user who created the message."
        },
        "givenName": {
            "type": "string",
            "description": "Given name of the user who created the message."
        },
        "familyName": {
            "type": "string",
            "description": "Family name of the user who created the message."
        },
        "createdDate": {
            "type": "string",
            "description": "Date in which the message was created.",
            "format": "date-time"
        },
        "modifiedDate": {
            "type": "string",
            "description": "Last Date in which the message was modified.",
            "format": "date-time"
        },
        "isRead": {
            "type": "boolean",
            "description": "Whether the user in context has read the message."
        },
        "postDate": {
            "type": "string",
            "description": "Date in which the message was posted.",
            "format": "date-time"
        },
        "editDate": {
            "type": "string",
            "description": "Last Date in which the message was edited.",
            "format": "date-time"
        }
    }
},
  "BlackboardPluginGoalWebRestPublicapiV1ModelsExpandedGoal": {
    "name": "BlackboardPluginGoalWebRestPublicapiV1ModelsExpandedGoal",
    "originalName": "blackboard.plugin.goal.web.rest.publicapi.v1.models.ExpandedGoal",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The goal's Id."
        },
        "externalId": {
            "type": "string",
            "description": "The goal's external Id."
        },
        "goalSetId": {
            "type": "string",
            "description": "The goal's set Id."
        },
        "goalSet": {
            "type": "unknown",
            "description": "The goal's set expanded object."
        },
        "categoryId": {
            "type": "string",
            "description": "The goal's category Id."
        },
        "category": {
            "type": "unknown",
            "description": "The goal's category expanded object."
        },
        "parentId": {
            "type": "string",
            "description": "The parent goal Id."
        },
        "title": {
            "type": "string",
            "description": "The goal's name."
        },
        "text": {
            "type": "string",
            "description": "The goal's text."
        },
        "type": {
            "type": "string",
            "description": "The goal's type."
        },
        "availability": {
            "type": "unknown",
            "description": "The goal's availability status."
        },
        "links": {
            "type": "unknown",
            "description": "A list of hypermedia links associated with this goal"
        }
    }
},
  "BlackboardPluginGoalWebRestPublicapiV1ModelsGoalAvailability": {
    "name": "BlackboardPluginGoalWebRestPublicapiV1ModelsGoalAvailability",
    "originalName": "blackboard.plugin.goal.web.rest.publicapi.v1.models.GoalAvailability",
    "description": "",
    "type": "object",
    "properties": {
        "available": {
            "type": "string",
            "description": "The availability status of the Goal or Goal Set.\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes | The goal or goal set is marked as active. |\n| No | The goal or goal set is marked as inactive. |\n| Restricted | The goal or goal set is marked as Restricted. |\n"
        }
    }
},
  "BlackboardPluginGoalWebRestPublicapiV1ModelsGoalCategory": {
    "name": "BlackboardPluginGoalWebRestPublicapiV1ModelsGoalCategory",
    "originalName": "blackboard.plugin.goal.web.rest.publicapi.v1.models.GoalCategory",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The goal category's Id."
        },
        "name": {
            "type": "string",
            "description": "The goal category's name."
        },
        "availability": {
            "type": "object",
            "description": "The goal category's availability."
        }
    }
},
  "BlackboardPluginGoalWebRestPublicapiV1ModelsGoalSet": {
    "name": "BlackboardPluginGoalWebRestPublicapiV1ModelsGoalSet",
    "originalName": "blackboard.plugin.goal.web.rest.publicapi.v1.models.GoalSet",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The goal set's Id."
        },
        "name": {
            "type": "string",
            "description": "The goal set's name."
        },
        "typeId": {
            "type": "string",
            "description": "The goal set's type Id."
        },
        "availability": {
            "type": "unknown",
            "description": "The goal set's availability status."
        }
    }
},
  "BlackboardPluginGroupspacePublicapiV1GroupsGroup": {
    "name": "BlackboardPluginGroupspacePublicapiV1GroupsGroup",
    "originalName": "blackboard.plugin.groupspace.publicapi.v1.groups.Group",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID of the group."
        },
        "externalId": {
            "type": "string",
            "description": "An externally-defined unique ID for the group. Defaults to a random UUID if not provided during create."
        },
        "parentId": {
            "type": "string",
            "description": "The primary ID of the group's parent group set."
        },
        "name": {
            "type": "string",
            "description": "The title of the group."
        },
        "description": {
            "type": "string",
            "description": "The description of the group. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information.",
            "format": "BbML"
        },
        "isGroupSet": {
            "type": "boolean",
            "description": "Whether or not this is a group set.\n\n**Since**: 3700.1.0"
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the group to students."
        },
        "enrollment": {
            "type": "object",
            "description": "Settings controlling enrollment of the group to students."
        },
        "uuid": {
            "type": "string",
            "description": "A system-wide unique identifier created by Learn\n\n**Since**: 3700.7.0"
        }
    }
},
  "BlackboardPluginGroupspacePublicapiV1GroupsGroupMembership": {
    "name": "BlackboardPluginGroupspacePublicapiV1GroupsGroupMembership",
    "originalName": "blackboard.plugin.groupspace.publicapi.v1.groups.GroupMembership",
    "description": "",
    "type": "object",
    "properties": {
        "userId": {
            "type": "string",
            "description": "The user Id associated with this GroupMembership. See {@link GroupMembershipTORest#getUserId()}"
        },
        "user": {
            "type": "unknown",
            "description": "The user associated with this GroupMembership.\n\nShown when adding the query parameter: \"expand=user\". And can be filtered with the \"fields\" query parameter, for example \"fields=user.uuid\".\n\n**Since**: 3900.19.0"
        }
    }
},
  "BlackboardPluginGroupspacePublicapiV2GroupsGroupV2": {
    "name": "BlackboardPluginGroupspacePublicapiV2GroupsGroupV2",
    "originalName": "blackboard.plugin.groupspace.publicapi.v2.groups.GroupV2",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID of the group."
        },
        "externalId": {
            "type": "string",
            "description": "An externally-defined unique ID for the group. Defaults to a random UUID if not provided during create."
        },
        "groupSetId": {
            "type": "string",
            "description": "The primary ID of the group's parent group set."
        },
        "name": {
            "type": "string",
            "description": "The title of the group."
        },
        "description": {
            "type": "string",
            "description": "The description of the group. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information.",
            "format": "BbML"
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the group to students."
        },
        "enrollment": {
            "type": "object",
            "description": "Settings controlling enrollment of the group to students."
        },
        "uuid": {
            "type": "string",
            "description": "A system-wide unique identifier created by Learn"
        },
        "created": {
            "type": "string",
            "description": "Created date of the group\n\n**Since**: 3800.8.0",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "description": "Modified date of the group\n\n**Since**: 3800.8.0",
            "format": "date-time"
        }
    }
},
  "BlackboardPluginGroupspacePublicapiV2GroupsParamsTemporaryUser": {
    "name": "BlackboardPluginGroupspacePublicapiV2GroupsParamsTemporaryUser",
    "originalName": "blackboard.plugin.groupspace.publicapi.v2.groups.params.TemporaryUser",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID of the user."
        },
        "uuid": {
            "type": "string",
            "description": "A secondary unique ID for the user. Used by LTI launches and other inter-server operations."
        }
    }
},
  "BlackboardPluginRubricSpringRestPublicapiV1ExtendedRubricDefinition": {
    "name": "BlackboardPluginRubricSpringRestPublicapiV1ExtendedRubricDefinition",
    "originalName": "blackboard.plugin.rubric.spring.rest.publicapi.v1.ExtendedRubricDefinition",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "Get the Id associated to this rubric (Ex. '_2_1')"
        },
        "courseId": {
            "type": "string",
            "description": "Get the Id from the course associated to this rubric (Ex. '_3_1')"
        },
        "title": {
            "type": "string",
            "description": "Get the title for this rubric (Ex. 'Sample Rubric')"
        },
        "description": {
            "type": "string",
            "description": "Get the description for this rubric (Ex. 'A rubric for base evluation template')"
        },
        "created": {
            "type": "string",
            "description": "Get the creation date for this rubric (Ex. '2022-01-01')",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "description": "Get the nearest modification date for this rubric (Ex. '2022-01-01')",
            "format": "date-time"
        },
        "rubricType": {
            "type": "string",
            "description": "Get the rubric type, alas Numeric or Percentage type. (Ex. 'Numeric', 'Percentage', 'Percentage Range', 'Numeric Range')\n\n\n| Type      | Description\n | --------- | --------- |\n| Numeric |  |\n| Nonnumeric |  |\n| NumericRange |  |\n| Percentage |  |\n| PercentageRange |  |\n"
        },
        "readOnly": {
            "type": "boolean",
            "description": "Wheater a rubric is read-only or not. Rubric assigned to an already graded content should be read-only."
        },
        "columns": {
            "type": "unknown",
            "description": "Rubric Column Headers list."
        },
        "rows": {
            "type": "unknown",
            "description": "Rubric Row Criteria list."
        },
        "cells": {
            "type": "unknown",
            "description": "Rubric Cells list."
        }
    }
},
  "BlackboardPluginRubricSpringRestPublicapiV1RubricAssociation": {
    "name": "BlackboardPluginRubricSpringRestPublicapiV1RubricAssociation",
    "originalName": "blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricAssociation",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "Get the Id from this association (Ex. '_2_1')"
        },
        "rubricId": {
            "type": "string",
            "description": "Get the Id from the rubric which holds this association (Ex. '_3_1')"
        },
        "associationEntity": {
            "type": "object",
            "description": "Get the entity which represents the content holding this association. (Ex. '{   \"gradebookColumnId\": '_3_1' }')"
        },
        "usedForGrading": {
            "type": "boolean",
            "description": "Tells if rubric is being used for grading content. (Ex. true)"
        },
        "rubricVisibility": {
            "type": "string",
            "description": "States rubric's information and evalution visibility for students. (Ex. \"VisibleWithScores\") Possible values are:\n\n- Disabled  - VisibleWithScores  - VisibleWithoutScores  - VisibleAfterGrading \n\n\n| Type      | Description\n | --------- | --------- |\n| Disabled | Disabled: Implies that neither the rubric nor the rubric evaluation are visible to students. Default value for student visibility. |\n| VisibleWithScores | VisibleWithScores: Implies that the rubric and the rubric evaluation are always visible to students. |\n| VisibleWithoutScores | VisibleWithoutScores: Implies that the rubric is visible before and after grading. The rubric evaluation are not visible to students. |\n| VisibleAfterGrading | VisibleAfterGrading: Implies that the rubric is only visible after grading. The rubric evaluation is visible once is available. |\n"
        },
        "links": {
            "type": "unknown",
            "description": "A list of hypermedia links associated with this resource"
        }
    }
},
  "BlackboardPluginRubricSpringRestPublicapiV1RubricEvaluationExpand": {
    "name": "BlackboardPluginRubricSpringRestPublicapiV1RubricEvaluationExpand",
    "originalName": "blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricEvaluationExpand",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The ID from this rubric evaluation"
        },
        "rubricAssociationId": {
            "type": "string",
            "description": "The ID from this rubric association"
        },
        "evaluationEntity": {
            "type": "object",
            "description": "The evaluation entity which represents the content holding this rubric evaluation."
        },
        "possibleScore": {
            "type": "unknown",
            "description": "Represents the maximum possible score that can be assigned to this evaluation as a fraction with a numerator and denominator. For example, if the maximum possible score is 100, then the fraction would be represented as numerator = 100 and denominator = 1."
        },
        "totalScore": {
            "type": "unknown",
            "description": "The total score which was assigned to this evaluation as a fraction with a numerator and denominator. For example, if the total score is 100, then the fraction would be represented as numerator = 100 and denominator = 1."
        },
        "submitted": {
            "type": "string",
            "description": "The submission date of this evaluation",
            "format": "date-time"
        },
        "cells": {
            "type": "unknown",
            "description": "List of the selected scores for this evaluation, each rubric cell evaluation should be related with a rubric definition cell and row.\n\nThe selected score could vary depending on the rubric type, as shown in examples. For example,\n\n- Numeric Rubrics, if selected score is 100, then the fraction would be numerator = 100 and denominator = 1.\n- Numeric Range Rubrics, selected score is the percentage of the max row value in 0 to 1 normalization, So if 80 is the max row points and selected score is 40, the fraction would be numerator = 50 and denominator = 100.\n- Percentage Rubrics, expects the values in 1 to 100 percent format, if selected percent is 40, the fraction would be numerator = 40 and denominator = 1.\n- Percentage Range Rubrics, expects the values in 1 to 100 percent format, if selected percent is 60, the fraction would be numerator = 60 and denominator = 1."
        }
    }
},
  "BlackboardPluginsApigatewayB2RestOAuth2AccessToken": {
    "name": "BlackboardPluginsApigatewayB2RestOAuth2AccessToken",
    "originalName": "blackboard.plugins.apigateway.b2.rest.OAuth2AccessToken",
    "description": "",
    "type": "object",
    "properties": {
        "access_token": {
            "type": "string",
            "description": "The access token issued by the authorization server.",
            "required": false
        },
        "token_type": {
            "type": "string",
            "description": "The type of the token issued.  Value is case insensitive.",
            "required": false
        },
        "expires_in": {
            "type": "integer",
            "description": "The lifetime in seconds of the access token.",
            "required": true,
            "format": "int32"
        },
        "refresh_token": {
            "type": "string",
            "description": "The refresh token issued by the authorization server during OAuth2 authorization code workflow if 'offline' scope was granted.",
            "required": false
        },
        "scope": {
            "type": "string",
            "description": "The scope of the access granted by this token.",
            "required": false
        },
        "user_id": {
            "type": "string",
            "description": "The ID of the user granted access via token",
            "required": false
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseRule": {
    "name": "BlackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseRule",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.adaptiveRelease.AdaptiveReleaseRule",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "Rule item identifier that indicates the id of the rule item source which the item was created from. (Ex. '_48_1')"
        },
        "title": {
            "type": "string",
            "description": "Title given to the adaptive release rule"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseRuleCriteria": {
    "name": "BlackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseRuleCriteria",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.adaptiveRelease.AdaptiveReleaseRuleCriteria",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "Internal Identifier of the Rule's criteria."
        },
        "type": {
            "type": "string",
            "description": "The Type of the Criterion.\n\n\n| Type      | Description\n | --------- | --------- |\n| GradeRange |  |\n| GradePercentage |  |\n| DateRange |  |\n| Memberships |  |\n| ContentComplete |  |\n| GradeCompleted |  |\n| ContentReviewed |  |\n"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1AnnouncementsAnnouncement": {
    "name": "BlackboardWebappsBlackboardPublicapiV1AnnouncementsAnnouncement",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.announcements.Announcement",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "Primary key identifier"
        },
        "title": {
            "type": "string",
            "description": "The title of this System Announcement."
        },
        "body": {
            "type": "string",
            "description": "The message body of the System Announcement. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information.",
            "format": "BbML"
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the System Announcement."
        },
        "showAtLogin": {
            "type": "boolean",
            "description": "Whether this System Announcement should be displayed on the login page."
        },
        "showInCourses": {
            "type": "boolean",
            "description": "Whether this System Announcement should be displayed on courses."
        },
        "creatorUserId": {
            "type": "string",
            "description": "The user Id who created or last updated the System Announcement."
        },
        "created": {
            "type": "string",
            "description": "The date that the System Announcement was created.",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "description": "",
            "format": "date-time"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1AnnouncementsCourseAnnouncement": {
    "name": "BlackboardWebappsBlackboardPublicapiV1AnnouncementsCourseAnnouncement",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.announcements.CourseAnnouncement",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "Primary key identifier"
        },
        "title": {
            "type": "string",
            "description": "The title of this Announcement."
        },
        "body": {
            "type": "string",
            "description": "The message body of the Announcement. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information.",
            "format": "BbML"
        },
        "draft": {
            "type": "boolean",
            "description": "An indication of whether or not the Announcement is in draft status."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the course to students."
        },
        "creatorUserId": {
            "type": "string",
            "description": "The user Id who created or last updated the Course Announcement."
        },
        "created": {
            "type": "string",
            "description": "The date that the Announcement was created.",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "description": "",
            "format": "date-time"
        },
        "participants": {
            "type": "integer",
            "description": "The number of students that the Announcement will reach.\n\nShown when adding the query parameter: \"expand=studentReadCount\".",
            "format": "int32"
        },
        "position": {
            "type": "integer",
            "description": "The position of the Announcement.",
            "format": "int32"
        },
        "readCount": {
            "type": "integer",
            "description": "The number of reads from students for the Announcement.\n\nShown when adding the query parameter: \"expand=studentReadCount\".",
            "format": "int32"
        },
        "creator": {
            "type": "string",
            "description": "The user that created the Announcement.\n\n**Deprecated**: since 3900.89.0. Use creatorUserId instead."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1CategoriesCategory": {
    "name": "BlackboardWebappsBlackboardPublicapiV1CategoriesCategory",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.categories.Category",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": ""
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source of the category"
        },
        "parentId": {
            "type": "string",
            "description": "The ID of this category's parent category"
        },
        "categoryId": {
            "type": "string",
            "description": "The human-readable id of the category"
        },
        "title": {
            "type": "string",
            "description": "The title of category"
        },
        "description": {
            "type": "string",
            "description": "The description of the category"
        },
        "type": {
            "type": "string",
            "description": "Type of category\n\n\n| Type      | Description\n | --------- | --------- |\n| Course |  |\n| Organization |  |\n"
        },
        "frontPage": {
            "type": "boolean",
            "description": "Boolean indicating whether or not the category should appear on the catalog front page"
        },
        "available": {
            "type": "boolean",
            "description": "Boolean indicating whether or not the category is available"
        },
        "restricted": {
            "type": "boolean",
            "description": "Boolean indicating whether or not category is available to all roles, or restricted to a specific set of roles."
        },
        "institutionRoleIds": {
            "type": "unknown",
            "description": "The roles for which this category is available, if category is set to restricted. Not populated for lists of categories, only for individual category"
        },
        "created": {
            "type": "string",
            "description": "The date and time at which the category was created",
            "format": "date-time"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1ContentContentGroup": {
    "name": "BlackboardWebappsBlackboardPublicapiV1ContentContentGroup",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.content.ContentGroup",
    "description": "",
    "type": "object",
    "properties": {
        "contentId": {
            "type": "string",
            "description": "The ID of the associated content."
        },
        "groupId": {
            "type": "string",
            "description": "The ID of the association of content and group."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1ContentReviewStatus": {
    "name": "BlackboardWebappsBlackboardPublicapiV1ContentReviewStatus",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.content.ReviewStatus",
    "description": "",
    "type": "object",
    "properties": {
        "contentId": {
            "type": "string",
            "description": "The ID of the content.\n\n**Since**: 3700.16.0"
        },
        "userId": {
            "type": "string",
            "description": "The ID of the user.\n\n**Since**: 3700.16.0"
        },
        "reviewed": {
            "type": "boolean",
            "description": "The current status of the content's 'reviewed' attribute.\n\n**Since**: 3700.16.0"
        },
        "reviewDate": {
            "type": "string",
            "description": "The date that the user marked the content as reviewed\n\n**Since**: 3700.16.0",
            "format": "date-time"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1ContentState": {
    "name": "BlackboardWebappsBlackboardPublicapiV1ContentState",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.content.State",
    "description": "",
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
            "description": "Current state value.\n\nPossible values are:\n\n- None: student can't open this content item.\n- Unlocked: student is able to open the content item.\n- Started: student have opened the content item.\n- Completed: student have finished or submitted the content item.\n\n\n| Type      | Description\n | --------- | --------- |\n| None |  |\n| Unlocked |  |\n| Started |  |\n| Completed |  |\n"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1ContentCollectionContentCollectionResource": {
    "name": "BlackboardWebappsBlackboardPublicapiV1ContentCollectionContentCollectionResource",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.contentCollection.ContentCollectionResource",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID the Resource."
        },
        "xid": {
            "type": "string",
            "description": "The primary ID of the resource in xythos format."
        },
        "name": {
            "type": "string",
            "description": "The name of the Resource."
        },
        "type": {
            "type": "string",
            "description": "The type of the Resource; 'File' or 'Folder'\n\n\n| Type      | Description\n | --------- | --------- |\n| File |  |\n| Folder |  |\n"
        },
        "size": {
            "type": "integer",
            "description": "The size of the Resource in bytes.",
            "format": "int64"
        },
        "hasLinks": {
            "type": "boolean",
            "description": "Whether the Resource has associated Course Content links."
        },
        "parentId": {
            "type": "string",
            "description": "The Id of the Resource's parent folder."
        },
        "creatorId": {
            "type": "string",
            "description": "The Id of the User who created the Resource."
        },
        "created": {
            "type": "string",
            "description": "The date this Resource was created.",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "description": "The date this Resource was last modified.",
            "format": "date-time"
        },
        "mimeType": {
            "type": "string",
            "description": "The mime-type for this Resource; only set if the Resource is of type 'File'"
        },
        "version": {
            "type": "integer",
            "description": "The version number for this Resource; only set if the Resource is of type 'File' and is versioned.",
            "format": "int32"
        },
        "links": {
            "type": "unknown",
            "description": ""
        },
        "downloadUrl": {
            "type": "string",
            "description": "The downloadUrl for this Resource; only set if the Resource is of type 'File'."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1ContentResourcesResource": {
    "name": "BlackboardWebappsBlackboardPublicapiV1ContentResourcesResource",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.contentResources.Resource",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID the Resource."
        },
        "xid": {
            "type": "string",
            "description": "The primary ID of the resource in xythos format."
        },
        "name": {
            "type": "string",
            "description": "The name of the Resource."
        },
        "type": {
            "type": "string",
            "description": "The type of the Resource; 'File' or 'Folder'\n\n\n| Type      | Description\n | --------- | --------- |\n| File |  |\n| Folder |  |\n"
        },
        "size": {
            "type": "integer",
            "description": "The size of the Resource in bytes.",
            "format": "int64"
        },
        "hasLinks": {
            "type": "boolean",
            "description": "Whether the Resource has associated Course Content links."
        },
        "parentId": {
            "type": "string",
            "description": "The Id of the Resource's parent folder."
        },
        "creatorId": {
            "type": "string",
            "description": "The Id of the User who created the Resource."
        },
        "created": {
            "type": "string",
            "description": "The date this Resource was created.",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "description": "The date this Resource was last modified.",
            "format": "date-time"
        },
        "mimeType": {
            "type": "string",
            "description": "The mime-type for this Resource; only set if the Resource is of type 'File'"
        },
        "version": {
            "type": "integer",
            "description": "The version number for this Resource; only set if the Resource is of type 'File' and is versioned.",
            "format": "int32"
        },
        "downloadUrl": {
            "type": "string",
            "description": "The downloadUrl for this Resource; only set if the Resource is of type 'File'."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1CourseRolesCourseRole": {
    "name": "BlackboardWebappsBlackboardPublicapiV1CourseRolesCourseRole",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.courseRoles.CourseRole",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID of the course role"
        },
        "roleId": {
            "type": "string",
            "description": "The identifier used to assign the course role to a course enrollment.\n\nFor system defined course roles, this value will be one of Student, Instructor, TeachingAssistant, CourseBuilder, Grader or Guest\n\nFor custom course roles, this will be the roleId entered during the creation of the role. Allowed characters for the custom course roleId's are any letter, number, period, underscore and dash."
        },
        "nameForCourses": {
            "type": "string",
            "description": "The role name presented to users when the course role is associated with a course."
        },
        "nameForOrganizations": {
            "type": "string",
            "description": "The role name presented to users when the course role is associated with an organization."
        },
        "description": {
            "type": "string",
            "description": "Optional description of the course role"
        },
        "custom": {
            "type": "boolean",
            "description": "False if the course role exists as a system generated course role. True if the course role was created by an admin user.\n\nBoth custom and system generated course roles can be modified, but only custom course roles can be deleted."
        },
        "actAsInstructor": {
            "type": "boolean",
            "description": "Implies access to unavailable courses, display in the Course catalog, and receiving email enrollment requests"
        },
        "availability": {
            "type": "object",
            "description": ""
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1CourseTocCourseToc": {
    "name": "BlackboardWebappsBlackboardPublicapiV1CourseTocCourseToc",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.courseToc.CourseToc",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "Get the Id of the Course ToC (Ex. '_2_1')"
        },
        "courseId": {
            "type": "string",
            "description": "Get the Id of the Course (Ex. '_3_1')"
        },
        "contentId": {
            "type": "string",
            "description": "The Id of the Content Folder associated with this ToC entry. This will apply only if Course ToC Target Type is CONTENT, otherwise, this Id will be null. (Ex. '_2_1')"
        },
        "label": {
            "type": "string",
            "description": "The Label of the Course ToC, this is what user will see as menu option label. (Ex. 'Information')"
        },
        "url": {
            "type": "string",
            "description": "The URL representing the path to a specific resource, usually associated with a Content Folder. (Ex. 'path/to/resource')"
        },
        "targetType": {
            "type": "string",
            "description": "The Target Type for Course ToC entry. This will tell to this ToC register which kind of handler will be associated to its main menu's option. (Ex. 'CONTENT', ´MODULE´, `APPLICATION`)\n\n\n| Type      | Description\n | --------- | --------- |\n| Application | The Toc item references a built-in application or system extension. |\n| Content | The Toc item references a content folder defined within the course. |\n| ContentItem | The Toc item references a content item defined within the course. |\n| Link | The Toc item is a link to another entity defined within the course. |\n| StaffInfo | The Toc item references a staff information folder defined within the course. |\n| Url | The Toc item is a URL to a resource. |\n| Divider | The Toc item is a divider in the menu. |\n| Subheader | The Toc item is a sub-header in the menu. |\n| Module | The Toc item is a Course Module Page. |\n"
        },
        "position": {
            "type": "integer",
            "description": "The position in which the main menu option associated with this ToC will be shown. (Ex. 0)",
            "format": "int32"
        },
        "launchInNewWindow": {
            "type": "boolean",
            "description": "Whether or not menu option will be launched in a new window (Ex. 0)"
        },
        "isEnabled": {
            "type": "boolean",
            "description": "Boolean representing if main menu option associated with this ToC is able to be shown."
        },
        "isEntryPoint": {
            "type": "boolean",
            "description": "Whether or not this ToC is an entry point."
        },
        "internalHandle": {
            "type": "string",
            "description": "The internal handle for this Course ToC (Ex. 'content')"
        },
        "allowGuests": {
            "type": "boolean",
            "description": "Whether or not Guests can view this ToC."
        },
        "allowObservers": {
            "type": "boolean",
            "description": "Whether or not Observers can view this ToC."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1CoursesCourse": {
    "name": "BlackboardWebappsBlackboardPublicapiV1CoursesCourse",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.courses.Course",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID of the course."
        },
        "uuid": {
            "type": "string",
            "description": "A secondary unique ID for the course. Used by LTI launches and other inter-server operations."
        },
        "externalId": {
            "type": "string",
            "description": "An optional externally-defined unique ID for the course. Defaults to the courseId.\n\nFormerly known as 'batchUid'."
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this course. This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "courseId": {
            "type": "string",
            "description": "The Course ID attribute, shown to users in the UI."
        },
        "name": {
            "type": "string",
            "description": "The name of the course."
        },
        "description": {
            "type": "string",
            "description": "The description of the course."
        },
        "created": {
            "type": "string",
            "description": "The date this course was created.",
            "format": "date-time"
        },
        "organization": {
            "type": "boolean",
            "description": "Whether this object represents an Organization. Defaults to false."
        },
        "ultraStatus": {
            "type": "string",
            "description": "Whether the course is rendered using Classic or Ultra Course View.\n\n\n| Type      | Description\n | --------- | --------- |\n| Undecided | The ultra status is not decided. |\n| Classic | The course is decided as classic. |\n| Ultra | The course is decided as ultra |\n| Ultrapreview | The course is currently in Ultra mode but during the preview state where it may still be reverted via a Restore to the classic state |\n"
        },
        "allowGuests": {
            "type": "boolean",
            "description": "Whether guests (users with the role guest) are allowed access to the course. Modifiable only for Classic course. Defaults to {@code true} for Classic Courses and {@code false} for Ultra Courses."
        },
        "readOnly": {
            "type": "boolean",
            "description": "This status does not affect availability of the course for viewing in any way. readOnly is valid for both Ultra and Classic courses. If an Ultra course is in readOnly mode, updates are not possible. For a Classic course in readOnly mode, updates are still possible (through Web UI but not through REST i.e. closed is enforced for original courses when updated through REST the same way Ultra courses are blocked) but new notifications are not generated.\n\n**Deprecated**: since 3400.8.0; use the v2 endpoint's closedComplete property instead"
        },
        "termId": {
            "type": "string",
            "description": "The ID of the term associated to this course. This may optionally be the term's externalId using the syntax \"externalId:spring.2016\"."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the course to students."
        },
        "enrollment": {
            "type": "object",
            "description": "Settings controlling how students may enroll in the course."
        },
        "locale": {
            "type": "object",
            "description": "Settings controlling localization within the course."
        },
        "hasChildren": {
            "type": "boolean",
            "description": "Whether the course has any cross-listed children.\n\n**Since**: 3000.11.0"
        },
        "parentId": {
            "type": "string",
            "description": "The cross-listed parentId associated with the course, if the course is a child course.\n\n**Since**: 3000.11.0"
        },
        "externalAccessUrl": {
            "type": "string",
            "description": "A URL corresponding to the Course Page for the course.  Formatting varies based on whether the course is rendered using Classic or Ultra Course View\n\n**Since**: 3200.3.0"
        },
        "guestAccessUrl": {
            "type": "string",
            "description": "A URL for viewing the Course Page for the course as a guest.  Formatting varies based on whether the course is rendered using Classic or Ultra Course View\n\n**Since**: 3200.3.0"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1CoursesCourseChild": {
    "name": "BlackboardWebappsBlackboardPublicapiV1CoursesCourseChild",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.courses.CourseChild",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID of the child course associated with this cross-listing."
        },
        "parentId": {
            "type": "string",
            "description": "The primary ID of the parent course associated with this cross-listing."
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this course cross-listing.  This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "created": {
            "type": "string",
            "description": "The date this course cross-listing was created.",
            "format": "date-time"
        },
        "childCourse": {
            "type": "unknown",
            "description": "The child course associated with this cross-listing."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1DatasourcesDataSource": {
    "name": "BlackboardWebappsBlackboardPublicapiV1DatasourcesDataSource",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.datasources.DataSource",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID of the data source."
        },
        "externalId": {
            "type": "string",
            "description": "An externally-defined unique ID for the data source.\n\nFormerly known as 'batchUid'."
        },
        "description": {
            "type": "string",
            "description": "The description of the data source."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1FileUploadSettings": {
    "name": "BlackboardWebappsBlackboardPublicapiV1FileUploadSettings",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.file.UploadSettings",
    "description": "",
    "type": "object",
    "properties": {
        "customFileUploadSettings": {
            "type": "unknown",
            "description": "",
            "required": false
        },
        "displayRecommendedAlternatives": {
            "type": "boolean",
            "description": "Whether or not to recommend alternative storage solutions",
            "required": false
        },
        "displaySupportLink": {
            "type": "boolean",
            "description": "Whether or not to display support link",
            "required": false
        },
        "maxUploadSizeInBytes": {
            "type": "integer",
            "description": "Maximum size in bytes of a file uploaded via the Uploads API",
            "required": false,
            "format": "int64"
        },
        "recommendedAlternatives": {
            "type": "string",
            "description": "Recommended alternative storage solutions",
            "required": false
        },
        "supportLink": {
            "type": "string",
            "description": "Personalized support link. Must be a complete and valid URL.",
            "required": false
        },
        "supportsInlineRender": {
            "type": "boolean",
            "description": "Whether inline rendering is supported",
            "required": true
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyHierarchyNodeCourse": {
    "name": "BlackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyHierarchyNodeCourse",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.institutionalhierarchy.HierarchyNodeCourse",
    "description": "",
    "type": "object",
    "properties": {
        "nodeId": {
            "type": "string",
            "description": "The primary ID of the Hierarchy Node"
        },
        "courseId": {
            "type": "string",
            "description": "The primary ID of the Course"
        },
        "course": {
            "type": "unknown",
            "description": ""
        },
        "isPrimary": {
            "type": "boolean",
            "description": "Whether or not this association represents the primary node association of the course"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNode": {
    "name": "BlackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNode",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.institutionalhierarchy.Node",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID of the Node in the database"
        },
        "externalId": {
            "type": "string",
            "description": "Node unique identifier"
        },
        "title": {
            "type": "string",
            "description": "Node display name"
        },
        "description": {
            "type": "string",
            "description": "Node description"
        },
        "parentId": {
            "type": "string",
            "description": "The ID of the Node parent in the database"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNodeAdmin": {
    "name": "BlackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNodeAdmin",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.institutionalhierarchy.NodeAdmin",
    "description": "",
    "type": "object",
    "properties": {
        "nodeId": {
            "type": "string",
            "description": "Id of the Node."
        },
        "userId": {
            "type": "string",
            "description": "Id of the Node Admin User."
        },
        "user": {
            "type": "unknown",
            "description": "Expanded User object of the Node Admin. This is only a sparsely populated User object and must not be used in future calls to update a user object."
        },
        "nodeRoles": {
            "type": "unknown",
            "description": "List of roles the Admin User has within the Node."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1InstitutionalhierarchySettingsAttribute": {
    "name": "BlackboardWebappsBlackboardPublicapiV1InstitutionalhierarchySettingsAttribute",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.institutionalhierarchy.SettingsAttribute",
    "description": "",
    "type": "object",
    "properties": {
        "available": {
            "type": "boolean",
            "description": "Whether the tool is available."
        },
        "locked": {
            "type": "boolean",
            "description": "Whether the tool is locked."
        },
        "applicable": {
            "type": "boolean",
            "description": "Whether the available and locked settings are applicable."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1LtiLTIDomainConfig": {
    "name": "BlackboardWebappsBlackboardPublicapiV1LtiLTIDomainConfig",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.lti.LTIDomainConfig",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The ID associated with this domainConfig."
        },
        "primaryDomain": {
            "type": "string",
            "description": "The primary domain name associated with this configuration."
        },
        "clientId": {
            "type": "string",
            "description": "The client id associated with this configuration. Only applicable for LTI versions 1.3+, excluding 2.0\n\n**Since**: 3600.0.0"
        },
        "status": {
            "type": "string",
            "description": "Enum that indicates if the set of domains associated with this config can or cannot be linked to.\n\n\n| Type      | Description\n | --------- | --------- |\n| Approved |  |\n| Excluded |  |\n| NeedsApproval |   **Since**: 3300.9.0 |\n"
        },
        "perLinkCredentials": {
            "type": "boolean",
            "description": "If true, a new link to this LTI domain must supply its own key and secret. If false, the key and secret for this domain are already configured system-wide. This is a read-only property that is determined by the presence of a key and secret."
        },
        "sendUserDataType": {
            "type": "string",
            "description": "Enum indicating when user data can be sent to the LTI tool provider.\n\n\n| Type      | Description\n | --------- | --------- |\n| Never |  |\n| Sslonly |  |\n| Always |   **Since**: 3300.9.0 |\n"
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
        "allowEdit": {
            "type": "boolean",
            "description": "Whether this domain configuration is editable by system admins. The \"internal\" apps created by Blackboard are non-editable. They are created or updated automatically or via Dev Portal, and they are locked to system admins or anyone with public REST access to change them.\n\n**Since**: 3800.17.0"
        },
        "customParameters": {
            "type": "unknown",
            "description": "The custom parameters for the given domain."
        },
        "name": {
            "type": "string",
            "description": "The name of the domain configuration\n\n**Since**: 3900.23.0"
        },
        "description": {
            "type": "string",
            "description": "The description of the domain configuration\n\n**Since**: 3900.23.0"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1LtiLTIPlacement": {
    "name": "BlackboardWebappsBlackboardPublicapiV1LtiLTIPlacement",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.lti.LTIPlacement",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The ID associated with this placement."
        },
        "name": {
            "type": "string",
            "description": "The name of the placement. Not required to be unique. Maximum length of 50 characters, BAD_REQUEST error with message is returned if greater than 50 characters."
        },
        "description": {
            "type": "string",
            "description": "The description of the placement. Not required to be unique. Maximum length is 1000 characters, BAD_REQUEST error with message is returned if greater than 1000 characters."
        },
        "iconUrl": {
            "type": "string",
            "description": "The URL of the icon for this placement, if any. Not required to be unique, must be a complete and valid URL. Maximum length is 255 characters, BAD_REQUEST error with message is returned if greater than 255 characters or incomplete URL."
        },
        "handle": {
            "type": "string",
            "description": "The handle that uniquely identifies this placement. Required to be unique. Maximum length is 32 characters, BAD_REQUEST error with message is returned if greater than 32 characters."
        },
        "type": {
            "type": "string",
            "description": "The type of placement.\n\n\n| Type      | Description\n | --------- | --------- |\n| Application | Application or Student Tool Placement |\n| ContentHandler | Content Type placement |\n| ContentItemMessage | Content-item Message placement (see IMSGlobal spec)  **Since**: 3300.5.0 |\n| System | System-level Tools |\n| Administrator | Administrator-level Tools  **Since**: 3400.1.0 |\n| UltraUI | Ultra-UI Extensions  **Since**: 3700.6.0 |\n| BaseNavigation | Base Navigation |\n| CourseNavigation | Course Navigation |\n| Proctoring | Proctoring  **Since**: 3900.10.0 |\n| CloudDocument | Cloud Document Type Placement  **Since**: 3900.34.0 |\n| AssetProcessor | Asset Processor Type Placement |\n| OpenBadgeProvider | OpenBadge Provider Type Placement |\n| Eulalaunch | EULA Launch Type Placement |\n"
        },
        "url": {
            "type": "string",
            "description": "The URL of the tool provider. Not required to be unique, must be a complete and valid URL. Maximum length is 1024 characters, BAD_REQUEST error with message is returned if greater than 1024 characters or incomplete URL."
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
            "description": "Settings controlling availability of the placement."
        },
        "launchInNewWindow": {
            "type": "boolean",
            "description": "Whether this placement link should be opened in a new window or not."
        },
        "launchLink": {
            "type": "string",
            "description": "Generated launch link"
        },
        "customParameters": {
            "type": "unknown",
            "description": "Custom launch parameters for the tool."
        },
        "domainId": {
            "type": "string",
            "description": "The Id of the domain configuration associated with this placement\n\n**Since**: 3900.46.0"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1MembershipsAvailability": {
    "name": "BlackboardWebappsBlackboardPublicapiV1MembershipsAvailability",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.memberships.Availability",
    "description": "",
    "type": "object",
    "properties": {
        "available": {
            "type": "string",
            "description": "null\n\n\n| Type      | Description\n | --------- | --------- |\n| Yes |  |\n| No |  |\n| Disabled |   **Since**: 3100.0.0 |\n"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1MembershipsCourseMembership": {
    "name": "BlackboardWebappsBlackboardPublicapiV1MembershipsCourseMembership",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.memberships.CourseMembership",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The unique ID of this course/user relationship.\n\n**Since**: 3700.14.0"
        },
        "userId": {
            "type": "string",
            "description": "The primary ID of the user."
        },
        "user": {
            "type": "unknown",
            "description": "The user associated with the membership.\n\nShown when adding the query parameter: \"expand=user\". And can be filtered with the \"fields\" query parameter, for example \"fields=user.uuid,user.externalId\".\n\n**Since**: 3400.7.0"
        },
        "courseId": {
            "type": "string",
            "description": "The primary ID of the course."
        },
        "childCourseId": {
            "type": "string",
            "description": "The primary ID of the child, cross-listed course, in which the user is directly enrolled. </p> This field is read only in Learn versions 3000.11.0 through 3400.0.0. As of 3400.1.0, this field is mutable.  </p> If this membership's course is a parent course in a cross-listed set, the childCourseId can be updated to move the membership enrollment between child courses and the parent course in  the set.  Patching the childCourseId to \"null\" will move the membership to the parent course.\n\n**Since**: 3000.11.0"
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this course.  This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "created": {
            "type": "string",
            "description": "The date this membership was created.",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "description": "The date this membership was modified.  A membership is considered modified only if an aspect of the membership itself changes (e.g.: availability or courseRoleId), and not if the Course or User alone is modified.\n\n**Since**: 3800.8.0",
            "format": "date-time"
        },
        "availability": {
            "type": "unknown",
            "description": "Settings controlling availability of the course membership."
        },
        "courseRoleId": {
            "type": "string",
            "description": "The user's role in the course.\n\nThese roles are also valid for an organization, although they are named differently in the UI.\n\nCustom course roles may also be referenced by their IDs.\n\n\n| Type      | Description\n | --------- | --------- |\n| Instructor | Has access to all areas in the Control Panel. This role is generally given to those developing, teaching, or facilitating the class. Instructors may access a course that is unavailable to students. This role is customizable and may have different capabilities from what is documented here. |\n| BbFacilitator | The facilitator is an instructor like role. Facilitators are restricted versions of an instructor, in that they are able to deliver course instruction and administer all aspects of a pre-constructed course, but are not allowed to modify or alter the course. This role is customizable and may have different capabilities from what is documented here. |\n| TeachingAssistant | The teaching assistant role is that of a co-teacher. Teaching assistants are able to administer all areas of a course. Their only limitations are those imposed by the instructor or Blackboard administrator at your school. This role is customizable and may have different capabilities from what is documented here. |\n| CourseBuilder | Manages the course without having access to student grades. This role is customizable and may have different capabilities from what is documented here. |\n| Grader | Assists the instructor in the creation, management, delivery, and grading of items. This role is customizable and may have different capabilities from what is documented here. |\n| Student |  |\n| Guest | Has no access to the Control Panel. Areas within the course are made available to guests, but typically they can only view course materials; they do not have access to tests or assessments, and do not have permission to post on discussion boards. This role's behavior is immutable. |\n"
        },
        "bypassCourseAvailabilityUntil": {
            "type": "string",
            "description": "If present, this date signals that the user associated with this membership has special access to the course regardless of the course's availability setting prior to the moment specified by this field. After the date has passed, the membership will respect the course's availability.",
            "format": "date-time"
        },
        "lastAccessed": {
            "type": "string",
            "description": "This date signals the date this membership was used; in other words, the last date the user accessed the associated course or content contained by that course.\n\nThe recording of any activity which would lead to this date getting updated does happen asynchronously in batches. So, there may be some delay between an activity which would update this value and the availability of the new date. It is recommended when using this value to note that activity within the last 5 minutes may not be taken into account.\n\n**Since**: 3300.9.0",
            "format": "date-time"
        },
        "displayOrder": {
            "type": "integer",
            "description": "For primary instructor implementation, position or displayOrder cannot be negative, the minimum position is 1, with which is the primary instructor (aka. Leader instructor). Multiple primary instructor have the same displayOrder 1.\n\nThis operation only takes effect when the course role is non-student and non-guest roles, otherwise it's silently ignored, since <code>displayOrder</code> is for this design.\n\nAll cases violating the above restrictions will be set as <code>null</code> All display orders don't keep uniqueness, just save as-is.",
            "format": "int32"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1MessageCourseMessage": {
    "name": "BlackboardWebappsBlackboardPublicapiV1MessageCourseMessage",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.message.CourseMessage",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The ID of the message"
        },
        "subject": {
            "type": "string",
            "description": "The subject of the message."
        },
        "body": {
            "type": "string",
            "description": "The body text of the message. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information.",
            "format": "BbML"
        },
        "postedDate": {
            "type": "string",
            "description": "The date this message was created.",
            "format": "date-time"
        },
        "isRead": {
            "type": "boolean",
            "description": "Whether or not the message has been read"
        },
        "type": {
            "type": "string",
            "description": "Type of the message\n\n\n| Type      | Description\n | --------- | --------- |\n| System | Course message generated by the system, to be more specific, the message created when adding a new participant into the conversation. |\n| Normal | Any course message sent by the course conversation participants will be considered as \"NORMAL\" type. |\n"
        },
        "sender": {
            "type": "unknown",
            "description": "A full representation of the Sender. Only populated if the expand query parameter includes the sender property."
        },
        "senderId": {
            "type": "string",
            "description": "The ID of the sender."
        },
        "attachment": {
            "type": "unknown",
            "description": "Metadata for the file attached to the message, if one exists"
        },
        "toUsers": {
            "type": "unknown",
            "description": "The to participants of the message"
        },
        "ccUsers": {
            "type": "unknown",
            "description": "The cc participants of the message"
        },
        "bccUsers": {
            "type": "unknown",
            "description": "The bcc participants of the message"
        },
        "isExistingAttachment": {
            "type": "boolean",
            "description": "Whether or not the attachment is the existing attachment for the message"
        },
        "isReply": {
            "type": "boolean",
            "description": "Whether or not this message is a reply to another message"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1MessageCourseMessageAttachment": {
    "name": "BlackboardWebappsBlackboardPublicapiV1MessageCourseMessageAttachment",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.message.CourseMessageAttachment",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The ID of file attachment"
        },
        "fileName": {
            "type": "string",
            "description": "The fileName of the attachment"
        },
        "mimeType": {
            "type": "string",
            "description": "The mime type of the attachment"
        },
        "fileLocation": {
            "type": "string",
            "description": "The location of the uploaded file"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1SystemSystemInfo": {
    "name": "BlackboardWebappsBlackboardPublicapiV1SystemSystemInfo",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.system.SystemInfo",
    "description": "",
    "type": "object",
    "properties": {
        "siteId": {
            "type": "string",
            "description": "Gets the site ID for use when interacting with Platform services. This ID will be issued asynchronously after Learn installation and may be null initially. This value will not usually change after it is set, so callers should cache it when feasible."
        },
        "tenantId": {
            "type": "string",
            "description": "Gets the site's tenant ID for use when interacting with Platform services. This ID will be issued asynchronously after Learn installation and may be null initially. This value will not usually change after it is set, so callers should cache it when feasible."
        },
        "region": {
            "type": "string",
            "description": "Gets the region of this site for use when interacting with platform services. This value may be null initially after Learn installation. This value will not usually change after it is set, so callers should cache it when feasible."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1SystemSystemTask": {
    "name": "BlackboardWebappsBlackboardPublicapiV1SystemSystemTask",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.system.SystemTask",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The ID of this task."
        },
        "type": {
            "type": "string",
            "description": "The type value associated with the task."
        },
        "status": {
            "type": "string",
            "description": "The status of the task.\n\n\n| Type      | Description\n | --------- | --------- |\n| Waiting | initial state of a task |\n| Assigned |  |\n| Running |  |\n| Complete |  |\n| CompleteErrors |  |\n| Incomplete |  |\n"
        },
        "percentComplete": {
            "type": "integer",
            "description": "Task progress, with 0 representing not started and 100 representing done.",
            "format": "int32"
        },
        "started": {
            "type": "string",
            "description": "The date the task was started.",
            "format": "date-time"
        },
        "ended": {
            "type": "string",
            "description": "The date the task was completed.",
            "format": "date-time"
        },
        "results": {
            "type": "unknown",
            "description": "The results of the task execution. This may be {@code null} if execution is not yet complete or no results were saved."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1SystemVersion": {
    "name": "BlackboardWebappsBlackboardPublicapiV1SystemVersion",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.system.Version",
    "description": "",
    "type": "object",
    "properties": {
        "major": {
            "type": "integer",
            "description": "The 'major' version of this product.  Typically changes for releases with significant new features or breaking API changes.",
            "format": "int32"
        },
        "minor": {
            "type": "integer",
            "description": "The 'minor' version of this product.  Typically changes for releases with minor feature updates.",
            "format": "int32"
        },
        "patch": {
            "type": "integer",
            "description": "The 'patch' version of this product.  Typically changes for backwards-compatible hotfixes.",
            "format": "int32"
        },
        "build": {
            "type": "string",
            "description": "An internal identifier for the build artifact backing this version."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1SystemVersionInfo": {
    "name": "BlackboardWebappsBlackboardPublicapiV1SystemVersionInfo",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.system.VersionInfo",
    "description": "",
    "type": "object",
    "properties": {
        "learn": {
            "type": "unknown",
            "description": "The version of the Learn platform."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1SystemRolesSystemRole": {
    "name": "BlackboardWebappsBlackboardPublicapiV1SystemRolesSystemRole",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.systemRoles.SystemRole",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The id associated with this system role."
        },
        "roleId": {
            "type": "string",
            "description": "The identifier used to assign the system role.\n\nFor system generated roles, this value will be one of AccountAdmin, CourseCreator, CourseSupport, Guest, Integration, Observer, Portal, SystemAdmin, SystemSupport, or User\n\nFor custom system roles, this will be the roleId entered during the creation of the role. Allowed characters for the custom roleId's are any letter, number, period, underscore and dash."
        },
        "name": {
            "type": "string",
            "description": ""
        },
        "description": {
            "type": "string",
            "description": "The description of this system role."
        },
        "custom": {
            "type": "boolean",
            "description": "Indicates if this system role is custom."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1TermsTerm": {
    "name": "BlackboardWebappsBlackboardPublicapiV1TermsTerm",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.terms.Term",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID of the term."
        },
        "externalId": {
            "type": "string",
            "description": "An externally-defined unique ID for the term.\n\nFormerly known as 'sourcedidId'."
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this term.  This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "name": {
            "type": "string",
            "description": "The name of the term."
        },
        "description": {
            "type": "string",
            "description": "The description of the term. This field supports BbML; see <a target='_blank' href='https://docs.anthology.com/docs/rest-apis/learn/advanced/bbml.html'>here</a> for more information.",
            "format": "BbML"
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the term to students."
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1UsersParticipantUser": {
    "name": "BlackboardWebappsBlackboardPublicapiV1UsersParticipantUser",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.users.ParticipantUser",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": ""
        },
        "userName": {
            "type": "unknown",
            "description": ""
        },
        "otherName": {
            "type": "unknown",
            "description": ""
        },
        "givenName": {
            "type": "unknown",
            "description": ""
        },
        "familyName": {
            "type": "unknown",
            "description": ""
        },
        "middleName": {
            "type": "unknown",
            "description": ""
        },
        "suffix": {
            "type": "unknown",
            "description": ""
        },
        "title": {
            "type": "unknown",
            "description": ""
        },
        "preferredDisplayName": {
            "type": "string",
            "description": "null\n\n\n| Type      | Description\n | --------- | --------- |\n| GivenName | User requests displaying givenName when formatting names for display. This is the default behavior. |\n| OtherName | User requests displaying otherName when formatting names for display. |\n| Both | User requests displaying otherName and givenName when formatting names for display. |\n"
        },
        "avatar": {
            "type": "object",
            "description": ""
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV1UsersUser": {
    "name": "BlackboardWebappsBlackboardPublicapiV1UsersUser",
    "originalName": "blackboard.webapps.blackboard.publicapi.v1.users.User",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID of the user."
        },
        "uuid": {
            "type": "string",
            "description": "A secondary unique ID for the user.  Used by LTI launches and other inter-server operations."
        },
        "externalId": {
            "type": "string",
            "description": "An optional externally-defined unique ID for the user.  Defaults to the userName.\n\nFormerly known as 'batchUid'."
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
            "description": "The user's student ID name or number as defined by the school or institution."
        },
        "educationLevel": {
            "type": "string",
            "description": "The education level of this user.\n\n\n| Type      | Description\n | --------- | --------- |\n| K8 | Kindergarten through 8th grade |\n| HighSchool | Grades 9 through 12. |\n| Freshman | College or university freshman. |\n| Sophomore | College or university sophomore. |\n| Junior | College or university junior. |\n| Senior | College or university senior. |\n| GraduateSchool | Graduate school student. |\n| PostGraduateSchool | Post-graduate school student. |\n| Unknown | Education Level is not known, or not specified. |\n"
        },
        "gender": {
            "type": "string",
            "description": "The gender of this user.\n\n\n| Type      | Description\n | --------- | --------- |\n| Female | Female |\n| Male | Male |\n| Other | Other  **Since**: 3900.32.0 |\n| Unknown | Gender is not known, or not specified. |\n"
        },
        "pronouns": {
            "type": "string",
            "description": "The pronouns of this user.\n\n**Since**: 3900.27.0"
        },
        "birthDate": {
            "type": "string",
            "description": "The birth date of this user. Only the date portion of this value has significance, since a person's birthdate represents a full day and not a moment in time. Take care to ignore the zeroed time portion when deserializing this value to ensure it's not converted to the previous calendar day if your local time zone has a negative UTC offset.",
            "format": "date-time"
        },
        "created": {
            "type": "string",
            "description": "The date this user was created.",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "description": "The date this user was last modified.",
            "format": "date-time"
        },
        "lastLogin": {
            "type": "string",
            "description": "The date this user last logged in.",
            "format": "date-time"
        },
        "institutionRoleIds": {
            "type": "unknown",
            "description": "The primary and secondary institution roles assigned to this user. The primary institution role is the first item in the list, followed by all secondary institution roles sorted alphabetically.\n\n**Since**: 3300.3.0"
        },
        "systemRoleIds": {
            "type": "unknown",
            "description": "The system roles (the administrative user roles in the UI) for this user.  The first role in this list is the user's primary system role, while the remaining are secondary system roles."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the user account."
        },
        "name": {
            "type": "object",
            "description": "Properties used to build the user's display name."
        },
        "job": {
            "type": "object",
            "description": "The user's job information."
        },
        "contact": {
            "type": "object",
            "description": "The user's contact information."
        },
        "address": {
            "type": "object",
            "description": "The user's mailing address."
        },
        "locale": {
            "type": "object",
            "description": "The user's localization settings."
        },
        "avatar": {
            "type": "object",
            "description": "The user's avatar metadata\n\n**Since**: 3800.13.0"
        },
        "pronunciation": {
            "type": "string",
            "description": "Pronunciation text for user's name\n\n**Since**: 3900.32.0"
        },
        "nodes": {
            "type": "unknown",
            "description": "The nodes assigned to this user.\n\n**Since**: 3300.3.0"
        },
        "pronunciationAudio": {
            "type": "object",
            "description": "Pronunciation Audio file for user's name\n\n**Since**: 3900.32.0"
        }
    }
},
  "BlackboardWebappsBlackboardPublicapiV2CoursesCourseV2": {
    "name": "BlackboardWebappsBlackboardPublicapiV2CoursesCourseV2",
    "originalName": "blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID of the course."
        },
        "uuid": {
            "type": "string",
            "description": "A secondary unique ID for the course. Used by LTI launches and other inter-server operations."
        },
        "externalId": {
            "type": "string",
            "description": "An optional externally-defined unique ID for the course. Defaults to the courseId.\n\nFormerly known as 'batchUid'."
        },
        "dataSourceId": {
            "type": "string",
            "description": "The ID of the data source associated with this course. This may optionally be the data source's externalId using the syntax \"externalId:math101\"."
        },
        "courseId": {
            "type": "string",
            "description": "The Course ID attribute, shown to users in the UI."
        },
        "name": {
            "type": "string",
            "description": "The name of the course."
        },
        "description": {
            "type": "string",
            "description": "The description of the course."
        },
        "created": {
            "type": "string",
            "description": "The date this course was created.",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "description": "The date this course was last modified.\n\n**Since**: 3500.4.0",
            "format": "date-time"
        },
        "organization": {
            "type": "boolean",
            "description": "Whether this object represents an Organization. Defaults to false."
        },
        "ultraStatus": {
            "type": "string",
            "description": "Whether the course is rendered using Classic or Ultra Course View.\n\n\n| Type      | Description\n | --------- | --------- |\n| Undecided | The ultra status is not decided. |\n| Classic | The course is decided as classic. |\n| Ultra | The course is decided as ultra |\n| Ultrapreview | The course is currently in Ultra mode but during the preview state where it may still be reverted via a Restore to the classic state |\n"
        },
        "allowGuests": {
            "type": "boolean",
            "description": "Whether guests (users with the role guest) are allowed access to the course. Modifiable only for Classic course. Defaults to {@code true} for Classic Courses and {@code false} for Ultra Courses."
        },
        "allowObservers": {
            "type": "boolean",
            "description": "Whether observers are allowed access to the course. Modifiable only for Classic course. Defaults to {@code false}.\n\n**Since**: 3900.31.0"
        },
        "closedComplete": {
            "type": "boolean",
            "description": "This status does not affect availability of the course for viewing in any way. closedComplete is valid for both Ultra and Classic courses. If an Ultra course is in closedComplete mode, updates are not possible. For a Classic course in closedComplete mode, updates are still possible (through Web UI but not through REST i.e. closed is enforced for original courses when updated through REST the same way Ultra courses are blocked) but new notifications are not generated."
        },
        "termId": {
            "type": "string",
            "description": "The ID of the term associated to this course. This may optionally be the term's externalId using the syntax \"externalId:spring.2016\"."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling availability of the course to students."
        },
        "enrollment": {
            "type": "object",
            "description": "Settings controlling how students may enroll in the course."
        },
        "locale": {
            "type": "object",
            "description": "Settings controlling localization within the course."
        },
        "hasChildren": {
            "type": "boolean",
            "description": "Whether the course has any cross-listed children.\n\n**Since**: 3000.11.0"
        },
        "parentId": {
            "type": "string",
            "description": "The cross-listed parentId associated with the course, if the course is a child course.\n\n**Since**: 3000.11.0"
        },
        "externalAccessUrl": {
            "type": "string",
            "description": "A URL corresponding to the Course Page for the course.  Formatting varies based on whether the course is rendered using Classic or Ultra Course View\n\n**Since**: 3200.3.0"
        },
        "guestAccessUrl": {
            "type": "string",
            "description": "A URL for viewing the Course Page for the course as a guest.  Formatting varies based on whether the course is rendered using Classic or Ultra Course View\n\n**Since**: 3200.3.0"
        },
        "copyHistory": {
            "type": "unknown",
            "description": "List of source courses UUIDs, populated only if the current course was created as the result of a course copy."
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV1Attempt": {
    "name": "BlackboardWebappsGradebookPublicapiV1Attempt",
    "originalName": "blackboard.webapps.gradebook.publicapi.v1.Attempt",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID for this attempt."
        },
        "userId": {
            "type": "string",
            "description": "The user ID associated with this attempt."
        },
        "groupAttemptId": {
            "type": "string",
            "description": "The group attempt ID associated with this student attempt."
        },
        "groupOverride": {
            "type": "boolean",
            "description": "Whether the score associated with this student attempt was overridden from the associated group attempt score. A value is only returned if the attempt grade is currently overridden."
        },
        "status": {
            "type": "string",
            "description": "The status of this attempt.\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n"
        },
        "text": {
            "type": "string",
            "description": "The text representation of grade for this attempt."
        },
        "score": {
            "type": "number",
            "description": "The score associated with this attempt."
        },
        "notes": {
            "type": "string",
            "description": "The instructor notes associated with this attempt."
        },
        "feedback": {
            "type": "string",
            "description": "The instructor feedback associated with this attempt."
        },
        "studentComments": {
            "type": "string",
            "description": "The student comments associated with this attempt."
        },
        "studentSubmission": {
            "type": "string",
            "description": "The student submission text associated with this attempt."
        },
        "exempt": {
            "type": "boolean",
            "description": "Whether the score associated with this attempt is ignored when computing the user's grade for the associated grade column."
        },
        "created": {
            "type": "string",
            "description": "The date on which this attempt was created.",
            "format": "date-time"
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV1AttemptReceipt": {
    "name": "BlackboardWebappsGradebookPublicapiV1AttemptReceipt",
    "originalName": "blackboard.webapps.gradebook.publicapi.v1.AttemptReceipt",
    "description": "",
    "type": "object",
    "properties": {
        "receiptId": {
            "type": "string",
            "description": "The ID of the receipt."
        },
        "submissionDate": {
            "type": "string",
            "description": "The date the associated attempt was submitted.",
            "format": "date-time"
        },
        "submissionTotalSize": {
            "type": "integer",
            "description": "The total size of the submission in bytes\n\n**Since**: 3900.37.0",
            "format": "int64"
        },
        "courseId": {
            "type": "string",
            "description": "The related course id\n\n**Since**: 3900.37.0"
        },
        "gradableItemId": {
            "type": "string",
            "description": "The related gradable item id\n\n**Since**: 3900.37.0"
        },
        "attemptId": {
            "type": "string",
            "description": "The related attempt id\n\n**Since**: 3900.37.0"
        },
        "userId": {
            "type": "string",
            "description": "The related submitter user id\n\n**Since**: 3900.37.0"
        },
        "groupAttemptId": {
            "type": "string",
            "description": "The related group attempt id\n\n**Since**: 3900.37.0"
        },
        "groupId": {
            "type": "string",
            "description": "The related group id\n\n**Since**: 3900.37.0"
        },
        "submissionType": {
            "type": "string",
            "description": "Indicator of whether the submission is submitted automatically or not.\n\n\n| Type      | Description\n | --------- | --------- |\n| ManuallySubmitted |  |\n| AutomaticallySubmittedByBrowser |  |\n| AutomaticallySubmittedByServer |  |\n| Unknown |  |\n"
        },
        "responseStatus": {
            "type": "string",
            "description": "The associated response status\n\n**Since**: 3900.37.0\n\n\n| Type      | Description\n | --------- | --------- |\n| ReceiptAndAttemptExist | Both the attempt receipt and the related attempt exist and there is access to both. |\n| ReceiptExistsButAttemptDoesNot | The attempt receipt exist but the attempt was deleted and there is access to the attempt receipt through the course context. |\n| ReceiptExistsNoAccessToAttempt | The attempt receipt exists but there is no access to the attempt. |\n| ReceiptExistsColumnSoftDeleted | The attempt receipt exists but the column was deleted. |\n"
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV1DisplayGrade": {
    "name": "BlackboardWebappsGradebookPublicapiV1DisplayGrade",
    "originalName": "blackboard.webapps.gradebook.publicapi.v1.DisplayGrade",
    "description": "",
    "type": "object",
    "properties": {
        "scaleType": {
            "type": "string",
            "description": "The type of Grade Column Grading Schema used when creating the displayed grade\n\n\n| Type      | Description\n | --------- | --------- |\n| Percent |  |\n| Score |  |\n| Tabular |  |\n| Text |  |\n| Complete |  |\n"
        },
        "score": {
            "type": "number",
            "description": "The displayed score"
        },
        "possible": {
            "type": "number",
            "description": "\n\nThe maximum possible points. This property does not take the grading schema into account. Regardless of the schema (percentage, letter, etc), this property will only return the maximum points possible for the column.</p>\n\nOnly exception case is, when the Ultra Overall grade is overridden and has a non-score based schema. In that case, this method will return 100, since the override is stored/shown as a percentage</p>\n\nIn case the column's value is calculated from other columns, the value will not take into account the exempted columns' value.</p>\n\n**Since**: 3900.41.0"
        },
        "text": {
            "type": "string",
            "description": "The displayed text grade, based on the Grade Column Grading Schema or Grade Notation description."
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV1EmbeddedAttemptReceipt": {
    "name": "BlackboardWebappsGradebookPublicapiV1EmbeddedAttemptReceipt",
    "originalName": "blackboard.webapps.gradebook.publicapi.v1.EmbeddedAttemptReceipt",
    "description": "",
    "type": "object",
    "properties": {
        "receiptId": {
            "type": "string",
            "description": "The ID of the receipt."
        },
        "submissionDate": {
            "type": "string",
            "description": "The date the associated attempt was submitted.",
            "format": "date-time"
        },
        "submissionTotalSize": {
            "type": "integer",
            "description": "The total size of the submission in bytes\n\n**Since**: 3900.37.0",
            "format": "int64"
        },
        "courseId": {
            "type": "string",
            "description": "The related course id\n\n**Since**: 3900.37.0"
        },
        "gradableItemId": {
            "type": "string",
            "description": "The related gradable item id\n\n**Since**: 3900.37.0"
        },
        "attemptId": {
            "type": "string",
            "description": "The related attempt id\n\n**Since**: 3900.37.0"
        },
        "userId": {
            "type": "string",
            "description": "The related submitter user id\n\n**Since**: 3900.37.0"
        },
        "groupAttemptId": {
            "type": "string",
            "description": "The related group attempt id\n\n**Since**: 3900.37.0"
        },
        "groupId": {
            "type": "string",
            "description": "The related group id\n\n**Since**: 3900.37.0"
        },
        "responseStatus": {
            "type": "string",
            "description": "The associated response status\n\n**Since**: 3900.37.0\n\n\n| Type      | Description\n | --------- | --------- |\n| ReceiptAndAttemptExist | Both the attempt receipt and the related attempt exist and there is access to both. |\n| ReceiptExistsButAttemptDoesNot | The attempt receipt exist but the attempt was deleted and there is access to the attempt receipt through the course context. |\n| ReceiptExistsNoAccessToAttempt | The attempt receipt exists but there is no access to the attempt. |\n| ReceiptExistsColumnSoftDeleted | The attempt receipt exists but the column was deleted. |\n"
        },
        "submissionType": {
            "type": "string",
            "description": "Indicator of whether the submission is submitted automatically or not.\n\n\n| Type      | Description\n | --------- | --------- |\n| ManuallySubmitted |  |\n| AutomaticallySubmittedByBrowser |  |\n| AutomaticallySubmittedByServer |  |\n| Unknown |  |\n"
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV1GradableItemOverride": {
    "name": "BlackboardWebappsGradebookPublicapiV1GradableItemOverride",
    "originalName": "blackboard.webapps.gradebook.publicapi.v1.GradableItemOverride",
    "description": "",
    "type": "object",
    "properties": {
        "courseId": {
            "type": "string",
            "description": "ID of the course that this exception is associated with."
        },
        "columnId": {
            "type": "string",
            "description": "ID of the column that this exception is associated with."
        },
        "userId": {
            "type": "string",
            "description": "The user ID associated with this exception. If null check the group ID."
        },
        "groupId": {
            "type": "string",
            "description": "The group ID associated with this exception. If null check the user ID."
        },
        "effectiveDueDate": {
            "type": "string",
            "description": "The due date for the related user and gradable column considering the exception and accomodation of the user.",
            "format": "date-time"
        },
        "gradableItemUserOptions": {
            "type": "object",
            "description": "Settings controlling date exception options of the gradable item to student."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling exceptional availability of the content to students. It only applies for assessment gradable items."
        },
        "assessmentUserOptions": {
            "type": "object",
            "description": "Settings controlling exception options of the assessment to students. It only applies for assessment gradable items."
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV1Grade": {
    "name": "BlackboardWebappsGradebookPublicapiV1Grade",
    "originalName": "blackboard.webapps.gradebook.publicapi.v1.Grade",
    "description": "",
    "type": "object",
    "properties": {
        "userId": {
            "type": "string",
            "description": "The user ID associated with this grade."
        },
        "columnId": {
            "type": "string",
            "description": "The grade column ID for this grade."
        },
        "status": {
            "type": "string",
            "description": "This historic field was incorrectly added to the public api despite being deprecated internally and never contained reliable data. Please stop using it immediately and determine the state using the rules you wish in the client based on the manual grade here, and the status of any associated attempts. (for example: some people treat 1 graded attempt and 2 ungraded attempts as logically \\u2018graded\\u2019; others want that to be \\u2018needs grading\\u2019).\n\n\n| Type      | Description\n | --------- | --------- |\n| Graded | Grade has been graded, corresponding to dbValue 1 |\n| NeedsGrading | Grade needs grading, corresponding to dbValue 2 |\n"
        },
        "text": {
            "type": "string",
            "description": "The text representation of this grade."
        },
        "score": {
            "type": "number",
            "description": "The score associated with this grade."
        },
        "overridden": {
            "type": "string",
            "description": "The date on which the score associated with this grade was last overridden.  An ISODate value is only returned if this grade is currently overridden; otherwise, returns null.",
            "format": "date-time"
        },
        "notes": {
            "type": "string",
            "description": "The instructor notes associated with this grade. This notes field is used for grades on manual grade columns.   That is, when column.grading.type = Manual.  It is also used when column.grading.type = Attempts and the grade has been manually overridden."
        },
        "feedback": {
            "type": "string",
            "description": "The instructor feedback associated with this grade.  This feedback is used for grades on manual grade columns.   That is, when column.grading.type = Manual.  It is also used when column.grading.type = Attempts and the grade has been manually overridden."
        },
        "exempt": {
            "type": "boolean",
            "description": "Whether the score associated with this grade is ignored when computing the course grade."
        },
        "corrupt": {
            "type": "boolean",
            "description": "Whether the grade for a calculated column could be successfully computed."
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV1GradeColumn": {
    "name": "BlackboardWebappsGradebookPublicapiV1GradeColumn",
    "originalName": "blackboard.webapps.gradebook.publicapi.v1.GradeColumn",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID of the grade column."
        },
        "externalId": {
            "type": "string",
            "description": "The externalId for this grade column"
        },
        "name": {
            "type": "string",
            "description": "The name of the grade column."
        },
        "description": {
            "type": "string",
            "description": "The description of the grade column."
        },
        "externalGrade": {
            "type": "boolean",
            "description": "Whether this grade column is an external grade column."
        },
        "created": {
            "type": "string",
            "description": "The date this grade column was created.",
            "format": "date-time"
        },
        "contentId": {
            "type": "string",
            "description": "For grade columns associated with a content item, the ID of the content item.\n\n**Since**: 3000.11.0"
        },
        "score": {
            "type": "object",
            "description": "Settings controlling the numerical scoring of this grade column."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling the availability/visibility of grade column data."
        },
        "grading": {
            "type": "object",
            "description": "Settings controlling whether numerical and text grade values for this grade column are calculated, determined based on attempts, or manually entered."
        },
        "modified": {
            "type": "string",
            "description": "Most recent date in which this column was modified.",
            "format": "date-time"
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV1GradeNotation": {
    "name": "BlackboardWebappsGradebookPublicapiV1GradeNotation",
    "originalName": "blackboard.webapps.gradebook.publicapi.v1.GradeNotation",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary key of the grade notation."
        },
        "code": {
            "type": "string",
            "description": "The performance code associated with the grade notation."
        },
        "description": {
            "type": "string",
            "description": "The description of the grade notation."
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV1GradeSchema": {
    "name": "BlackboardWebappsGradebookPublicapiV1GradeSchema",
    "originalName": "blackboard.webapps.gradebook.publicapi.v1.GradeSchema",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The id associated with this grade schema."
        },
        "externalId": {
            "type": "string",
            "description": "The externalId associated with this grade schema."
        },
        "title": {
            "type": "string",
            "description": "The title of this grade schema."
        },
        "description": {
            "type": "string",
            "description": "The description of this grade schema."
        },
        "scaleType": {
            "type": "string",
            "description": "The scale type of this grade schema.\n\n\n| Type      | Description\n | --------- | --------- |\n| Percent |  |\n| Score |  |\n| Tabular |  |\n| Text |  |\n| Complete |  |\n"
        },
        "symbols": {
            "type": "unknown",
            "description": "The list of grade symbols for this grade schema. Only returned for Tabular scaleType schemas."
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV1GradebookCategory": {
    "name": "BlackboardWebappsGradebookPublicapiV1GradebookCategory",
    "originalName": "blackboard.webapps.gradebook.publicapi.v1.GradebookCategory",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The ID of this gradebook category\n\n**Since**: 3400.2.0"
        },
        "title": {
            "type": "string",
            "description": "The title of this gradebook category, localized if applicable\n\n**Since**: 3400.2.0"
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV1GradingPeriod": {
    "name": "BlackboardWebappsGradebookPublicapiV1GradingPeriod",
    "originalName": "blackboard.webapps.gradebook.publicapi.v1.GradingPeriod",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The REST Id object that uniquely identifies this grading period for REST usage"
        },
        "title": {
            "type": "string",
            "description": "The title of the grading period. Length is limited to 64 characters."
        },
        "description": {
            "type": "string",
            "description": "The description of the grading period. Length is limited to 1000 characters."
        },
        "position": {
            "type": "integer",
            "description": "The relative position of the grading period to other grading periods when viewed in the grade book.",
            "format": "int32"
        },
        "dateMode": {
            "type": "string",
            "description": "Property may be set to DoNotUseDates to explicitly blank dates,  in which case startDate and endDate are ignored; otherwise set to  UseDates; in this case startDate and endDate must be included and valid.\n\n\n| Type      | Description\n | --------- | --------- |\n| DoNotUseDates | Do not use dates |\n| UseDates | Use dates |\n"
        },
        "start": {
            "type": "string",
            "description": "If start and end are set, and start is before end, these define temporal  coverage of grading period which may be used to associate GradableItems (Columns) by due date. Start dates will be persisted as starting at  00:00:00 on the submitted day.",
            "format": "date-time"
        },
        "end": {
            "type": "string",
            "description": "If start and end are set, and start is before end, these define temporal  coverage of grading period which may be used to associate GradableItems (Columns) by due date. End dates will be persisted as ending at  23:59:59 on the submitted day.",
            "format": "date-time"
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV1GroupAttempt": {
    "name": "BlackboardWebappsGradebookPublicapiV1GroupAttempt",
    "originalName": "blackboard.webapps.gradebook.publicapi.v1.GroupAttempt",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID for this attempt."
        },
        "userId": {
            "type": "string",
            "description": "The Id of the User who submitted this Group Attempt."
        },
        "groupId": {
            "type": "string",
            "description": "The Id of the Group that owns this Group Attempt."
        },
        "status": {
            "type": "string",
            "description": "The status of this attempt.\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n"
        },
        "readyToPost": {
            "type": "boolean",
            "description": "The ready to post status of the group attempt. Only applicable to ultra courses and when the status of the attempt is 'needsgrading'. For any other attempt status values the readyToPost value is not applicable. In order for the attempt's final grade to be displayed, readyToPost value must be set to true."
        },
        "displayGrade": {
            "type": "unknown",
            "description": "The display grade associated with this attempt."
        },
        "score": {
            "type": "number",
            "description": "The score associated with this attempt."
        },
        "notes": {
            "type": "string",
            "description": "The instructor notes associated with this attempt."
        },
        "feedback": {
            "type": "string",
            "description": "The instructor feedback associated with this attempt."
        },
        "groupComments": {
            "type": "string",
            "description": "The group's comments associated with this Group Attempt."
        },
        "groupSubmission": {
            "type": "string",
            "description": "The group's submission text associated with this Group Attempt."
        },
        "created": {
            "type": "string",
            "description": "The date on which this attempt was created.",
            "format": "date-time"
        },
        "attemptReceipt": {
            "type": "unknown",
            "description": "The attempt receipt associated with this attempt.\n\n**Since**: 3900.22.0"
        },
        "text": {
            "type": "string",
            "description": "The text grade associated with this attempt."
        },
        "attemptDate": {
            "type": "string",
            "description": "Return the attempt date associated with this attempt.",
            "format": "date-time"
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV2AttemptV2": {
    "name": "BlackboardWebappsGradebookPublicapiV2AttemptV2",
    "originalName": "blackboard.webapps.gradebook.publicapi.v2.AttemptV2",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID for this attempt."
        },
        "userId": {
            "type": "string",
            "description": "The user ID associated with this attempt.  Defaults to the authenticated user on create.  Can be specified as a user other than the authenticated user if the authenticated user has the \"course.gradebook.MODIFY\" entitlement and the authenticated application has the \"course.attempt.nonowner.SUBMIT\" entitlement."
        },
        "groupAttemptId": {
            "type": "string",
            "description": "The group attempt ID associated with this student attempt."
        },
        "groupOverride": {
            "type": "boolean",
            "description": "Whether the score associated with this student attempt was overridden from the associated group attempt score. A value is only returned if the attempt grade is currently overridden."
        },
        "status": {
            "type": "string",
            "description": "The status of this attempt.\n\n\n| Type      | Description\n | --------- | --------- |\n| NotAttempted | none of the students in a group has submitted an attempt; applies only to group assessments |\n| Abandoned |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| InProgress | attempt activity has commenced, but has not been submitted for grading |\n| Suspended |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| Canceled |   **Deprecated**: Since 9.1 SP8 unsupported status, undetermined behavior if used. |\n| NeedsGrading | attempt has been submitted for grading, but has not been fully graded |\n| Completed | a grade has been entered for the attempt |\n| InMoreProgress | attempt has been graded, but more student activity occurred after the grade was entered; applies only to collaborative tools such as discussions |\n| NeedsMoreGrading | additional student activity occurring after a grade was entered requires that the attempt be regraded; applies only to collaborative tools such as discussions |\n"
        },
        "readyToPost": {
            "type": "boolean",
            "description": "The ready to post status of the attempt. Only applicable to ultra courses and when the status of the attempt is 'needsgrading'. For any other attempt status values the readyToPost value is not applicable."
        },
        "displayGrade": {
            "type": "unknown",
            "description": "The display grade associated with this attempt."
        },
        "text": {
            "type": "string",
            "description": "The text grade associated with this attempt."
        },
        "score": {
            "type": "number",
            "description": "The score associated with this attempt."
        },
        "reconciliationMode": {
            "type": "string",
            "description": "The reconciliation mode to use when reconciling the attempt grade.  When modifying reconciliationMode, score is also required.  A new score will not be calculated based on the reconciliationMode\n\n**Since**: 3700.2.0\n\n\n| Type      | Description\n | --------- | --------- |\n| Average |  |\n| Highest |  |\n| Lowest |  |\n| Custom |  |\n"
        },
        "notes": {
            "type": "string",
            "description": "The instructor notes associated with this attempt."
        },
        "feedback": {
            "type": "string",
            "description": "The instructor feedback associated with this attempt."
        },
        "groupAttemptStudentComments": {
            "type": "string",
            "description": "The group attempt student comments associated with this attempt."
        },
        "studentComments": {
            "type": "string",
            "description": "The student comments associated with this attempt."
        },
        "studentSubmission": {
            "type": "string",
            "description": "The student submission text associated with this attempt."
        },
        "exempt": {
            "type": "boolean",
            "description": "Whether the score associated with this attempt is ignored when computing the user's grade for the associated grade column."
        },
        "created": {
            "type": "string",
            "description": "The date on which this attempt was created.",
            "format": "date-time"
        },
        "attemptDate": {
            "type": "string",
            "description": "Return the attempt date associated with this attempt.",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "description": "The date when the attempt was modified.\n\n**Since**: 3800.0.0",
            "format": "date-time"
        },
        "attemptReceipt": {
            "type": "unknown",
            "description": "The attempt receipt associated with this attempt.\n\n**Since**: 3900.22.0"
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV2GradeColumnV2": {
    "name": "BlackboardWebappsGradebookPublicapiV2GradeColumnV2",
    "originalName": "blackboard.webapps.gradebook.publicapi.v2.GradeColumnV2",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The primary ID of the grade column."
        },
        "externalId": {
            "type": "string",
            "description": "The externalId for this grade column"
        },
        "externalToolId": {
            "type": "string",
            "description": "The externalId for this grade column\n\n**Since**: 3500.2.0"
        },
        "name": {
            "type": "string",
            "description": "The name of the grade column."
        },
        "displayName": {
            "type": "string",
            "description": "The display name of the grade column. Only applicable for Classic courses. Ultra courses will simply use the `name` field.\n\n**Since**: 3300.2.0"
        },
        "description": {
            "type": "string",
            "description": "The description of the grade column."
        },
        "externalGrade": {
            "type": "boolean",
            "description": "Whether this grade column is an external grade column."
        },
        "created": {
            "type": "string",
            "description": "The date this grade column was created.",
            "format": "date-time"
        },
        "modified": {
            "type": "string",
            "description": "Most recent date in which this column was modified.",
            "format": "date-time"
        },
        "contentId": {
            "type": "string",
            "description": "For grade columns associated with a content item, the ID of the content item.\n\n**Since**: 3000.11.0"
        },
        "score": {
            "type": "object",
            "description": "Settings controlling the numerical scoring of this grade column."
        },
        "availability": {
            "type": "object",
            "description": "Settings controlling the availability/visibility of grade column data."
        },
        "grading": {
            "type": "object",
            "description": "Settings controlling whether numerical and text grade values for this grade column are calculated, determined based on attempts, or manually entered."
        },
        "gradebookCategoryId": {
            "type": "string",
            "description": "The gradebook category ID for the grade column.\n\n**Since**: 3400.2.0"
        },
        "formula": {
            "type": "unknown",
            "description": "The formula used for determining the value for the grade column, if it is a calculated column.\n\n**Since**: 3400.5.0"
        },
        "includeInCalculations": {
            "type": "boolean",
            "description": "Indicates whether or not this column is included in gradebook calculations. Cannot be set for Ultra courses. Default: true\n\n**Since**: 3800.4.0"
        },
        "showStatisticsToStudents": {
            "type": "boolean",
            "description": "Indicates whether or not column statistics are shown to students. Read-only for Ultra courses. Default: false\n\n**Since**: 3800.4.0"
        },
        "scoreProviderHandle": {
            "type": "string",
            "description": "The score provider handle for the grade column.\n\n**Since**: 3900.3.0"
        },
        "learningOutcome": {
            "type": "object",
            "description": "Settings controlling the learning outcome performance values for this grade column."
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV2GradeV2": {
    "name": "BlackboardWebappsGradebookPublicapiV2GradeV2",
    "originalName": "blackboard.webapps.gradebook.publicapi.v2.GradeV2",
    "description": "",
    "type": "object",
    "properties": {
        "userId": {
            "type": "string",
            "description": "The user ID associated with this grade."
        },
        "columnId": {
            "type": "string",
            "description": "The grade column ID for this grade."
        },
        "status": {
            "type": "string",
            "description": "This historic field was incorrectly added to the public api despite being deprecated internally and never contained reliable data. Please stop using it immediately and determine the state using the rules you wish in the client based on the manual grade here, and the status of any associated attempts. (for example: some people treat 1 graded attempt and 2 ungraded attempts as logically \\u2018graded\\u2019; others want that to be \\u2018needs grading\\u2019).\n\n\n| Type      | Description\n | --------- | --------- |\n| Graded | Grade has been graded, corresponding to dbValue 1 |\n| NeedsGrading | Grade needs grading, corresponding to dbValue 2 |\n"
        },
        "displayGrade": {
            "type": "unknown",
            "description": "The primary display grade associated with this grade. Secondary display grade is not exposed via API"
        },
        "text": {
            "type": "string",
            "description": "The overridden text representation of this grade. This field is only used for overriding the grade via text value"
        },
        "score": {
            "type": "number",
            "description": "The overridden score of this grade. This field is only used for overriding the grade"
        },
        "overridden": {
            "type": "string",
            "description": "The date on which the score associated with this grade was last overridden.  An ISODate value is only returned if this grade is currently overridden; otherwise, returns null.",
            "format": "date-time"
        },
        "notes": {
            "type": "string",
            "description": "The instructor notes associated with this grade. This notes field is used for grades on manual grade columns.   That is, when column.grading.type = Manual.  It is also used when column.grading.type = Attempts and the grade has been manually overridden."
        },
        "feedback": {
            "type": "string",
            "description": "The instructor feedback associated with this grade.  This feedback is used for grades on manual grade columns.   That is, when column.grading.type = Manual.  It is also used when column.grading.type = Attempts and the grade has been manually overridden."
        },
        "exempt": {
            "type": "boolean",
            "description": "Whether the score associated with this grade is ignored when computing the course grade."
        },
        "corrupt": {
            "type": "boolean",
            "description": "Whether the grade for a calculated column could be successfully computed."
        },
        "gradeNotationId": {
            "type": "string",
            "description": "The Id of a Grade Notation which can be optionally associated with this Grade. If a Grade Notation is specified for this Grade, then the DisplayGrade's Text attribute will contain the Grade Notation's Description."
        },
        "changeIndex": {
            "type": "integer",
            "description": "The change index associated with this grade which indicates what relative point in time the grade was created or last updated.",
            "format": "int64"
        },
        "firstRelevantDate": {
            "type": "string",
            "description": "The \"firstRelevantDate\" value is determined as follows: 1. The first recorded date when an attempt is scored. 2. The most recent date in which a final score is overridden. 3. In the event of a change in the instructor's aggregation model type after grading,    that date is also taken into account.\n\nNote: First relevant dates do not apply to calculated columns.       Searching based on these dates will not return any calculated columns.",
            "format": "date-time"
        },
        "lastRelevantDate": {
            "type": "string",
            "description": "The \"lastRelevantDate\" value is determined as follows: 1. The date of the most recent modification of a grade when an attempt is scored. 2. The most recent date in which a final score is overridden. 3. In the event of a change in the instructor's aggregation model type after grading,    that date is also taken into account. 4. The latest date will be taken into account for all the mentioned scenarios.\n\nNote: Last relevant dates do not apply to calculated columns.       Searching based on these dates will not return any calculated columns.",
            "format": "date-time"
        }
    }
},
  "BlackboardWebappsGradebookPublicapiV2GradingFormulaV2": {
    "name": "BlackboardWebappsGradebookPublicapiV2GradingFormulaV2",
    "originalName": "blackboard.webapps.gradebook.publicapi.v2.GradingFormulaV2",
    "description": "",
    "type": "object",
    "properties": {
        "formula": {
            "type": "string",
            "description": ""
        },
        "aliases": {
            "type": "unknown",
            "description": ""
        }
    }
},
  "BlackboardWebappsPortalPublicapiV1InstitutionRole": {
    "name": "BlackboardWebappsPortalPublicapiV1InstitutionRole",
    "originalName": "blackboard.webapps.portal.publicapi.v1.InstitutionRole",
    "description": "",
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The id associated with this institution role."
        },
        "roleId": {
            "type": "string",
            "description": "The String role key associated with this institution role."
        },
        "name": {
            "type": "string",
            "description": "The title of this institution role."
        },
        "description": {
            "type": "string",
            "description": "The description of this institution role."
        },
        "custom": {
            "type": "boolean",
            "description": "Indicates if this institution role is custom."
        }
    }
},
  "Int": {
    "name": "Int",
    "originalName": "int",
    "description": "",
    "type": "object",
    "properties": {}
},
  "JavaMathBigInteger": {
    "name": "JavaMathBigInteger",
    "originalName": "java.math.BigInteger",
    "description": "",
    "type": "object",
    "properties": {
        "lowestSetBit": {
            "type": "integer",
            "description": "",
            "required": true,
            "format": "int32"
        }
    }
},
  "JavaUtilListblackboardDataUserUserSystemRole": {
    "name": "JavaUtilListblackboardDataUserUserSystemRole",
    "originalName": "java.util.List<blackboard.data.user.User.SystemRole>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilListblackboardPlatformFilesystemRestrictionPojoFileUploadRestrictions": {
    "name": "JavaUtilListblackboardPlatformFilesystemRestrictionPojoFileUploadRestrictions",
    "originalName": "java.util.List<blackboard.platform.filesystem.restriction.pojo.FileUploadRestrictions>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilListblackboardPlatformRestUtilIdTORest": {
    "name": "JavaUtilListblackboardPlatformRestUtilIdTORest",
    "originalName": "java.util.List<blackboard.platform.rest.util.IdTORest>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilListblackboardPluginCalendarRecurRecurringManagerBYDAY": {
    "name": "JavaUtilListblackboardPluginCalendarRecurRecurringManagerBYDAY",
    "originalName": "java.util.List<blackboard.plugin.calendar.recur.RecurringManager.BYDAY>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilListblackboardPluginContentRestPublicapiV1ContentCopyHistoryV1": {
    "name": "JavaUtilListblackboardPluginContentRestPublicapiV1ContentCopyHistoryV1",
    "originalName": "java.util.List<blackboard.plugin.content.rest.publicapi.v1.ContentCopyHistoryV1>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricCellV1": {
    "name": "JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricCellV1",
    "originalName": "java.util.List<blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricCellV1>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricColumnV1": {
    "name": "JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricColumnV1",
    "originalName": "java.util.List<blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricColumnV1>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricEvaluationCellV1": {
    "name": "JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricEvaluationCellV1",
    "originalName": "java.util.List<blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricEvaluationCellV1>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricRowV1": {
    "name": "JavaUtilListblackboardPluginRubricSpringRestPublicapiV1RubricRowV1",
    "originalName": "java.util.List<blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricRowV1>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilListblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNodeV1": {
    "name": "JavaUtilListblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNodeV1",
    "originalName": "java.util.List<blackboard.webapps.blackboard.publicapi.v1.institutionalhierarchy.NodeV1>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilListblackboardWebappsBlackboardPublicapiV2CoursesCourseV2SourceCourse": {
    "name": "JavaUtilListblackboardWebappsBlackboardPublicapiV2CoursesCourseV2SourceCourse",
    "originalName": "java.util.List<blackboard.webapps.blackboard.publicapi.v2.courses.CourseV2.SourceCourse>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilListblackboardWebappsGradebookPublicapiV1GradeSymbolV1": {
    "name": "JavaUtilListblackboardWebappsGradebookPublicapiV1GradeSymbolV1",
    "originalName": "java.util.List<blackboard.webapps.gradebook.publicapi.v1.GradeSymbolV1>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilListblackboardWebappsGradebookPublicapiV2RubricAssociationV1": {
    "name": "JavaUtilListblackboardWebappsGradebookPublicapiV2RubricAssociationV1",
    "originalName": "java.util.List<blackboard.webapps.gradebook.publicapi.v2.RubricAssociationV1>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilListjavaLangString": {
    "name": "JavaUtilListjavaLangString",
    "originalName": "java.util.List<java.lang.String>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilMapjavaLangStringblackboardPlatformRestUtilIdTORest": {
    "name": "JavaUtilMapjavaLangStringblackboardPlatformRestUtilIdTORest",
    "originalName": "java.util.Map<java.lang.String,blackboard.platform.rest.util.IdTORest>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilMapjavaLangStringjavaLangString": {
    "name": "JavaUtilMapjavaLangStringjavaLangString",
    "originalName": "java.util.Map<java.lang.String,java.lang.String>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilSetblackboardPlatformRestspringPublicapiV1CommonHateoasLinkV1": {
    "name": "JavaUtilSetblackboardPlatformRestspringPublicapiV1CommonHateoasLinkV1",
    "originalName": "java.util.Set<blackboard.platform.restspring.publicapi.v1.common.hateoas.LinkV1>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "JavaUtilSetblackboardWebappsBlackboardPublicapiV1ContentCollectionContentCollectionResourceV1ContentCollectionLinkTOPubV1": {
    "name": "JavaUtilSetblackboardWebappsBlackboardPublicapiV1ContentCollectionContentCollectionResourceV1ContentCollectionLinkTOPubV1",
    "originalName": "java.util.Set<blackboard.webapps.blackboard.publicapi.v1.contentCollection.ContentCollectionResourceV1.ContentCollectionLinkTOPubV1>",
    "description": "",
    "type": "object",
    "properties": {
        "empty": {
            "type": "boolean",
            "description": "",
            "required": true
        }
    }
},
  "OrgSpringframeworkHttpHttpStatusEnum": {
    "name": "OrgSpringframeworkHttpHttpStatusEnum",
    "originalName": "org.springframework.http.HttpStatusEnum",
    "description": "",
    "type": "string",
    "properties": {}
},
  "OrgSpringframeworkHttpResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1DiscussionGroupV1": {
    "name": "OrgSpringframeworkHttpResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1DiscussionGroupV1",
    "originalName": "org.springframework.http.ResponseEntity<blackboard.plugin.discussionboard.spring.rest.publicapi.v1.DiscussionGroupV1>",
    "description": "",
    "type": "object",
    "properties": {
        "statusCode": {
            "type": "string",
            "description": "null\n\n\n| Type      | Description\n | --------- | --------- |\n| CONTINUE |  |\n| SWITCHING_PROTOCOLS |  |\n| PROCESSING |  |\n| CHECKPOINT |  |\n| OK |  |\n| CREATED |  |\n| ACCEPTED |  |\n| NON_AUTHORITATIVE_INFORMATION |  |\n| NO_CONTENT |  |\n| RESET_CONTENT |  |\n| PARTIAL_CONTENT |  |\n| MULTI_STATUS |  |\n| ALREADY_REPORTED |  |\n| IM_USED |  |\n| MULTIPLE_CHOICES |  |\n| MOVED_PERMANENTLY |  |\n| FOUND |  |\n| MOVED_TEMPORARILY |  |\n| SEE_OTHER |  |\n| NOT_MODIFIED |  |\n| USE_PROXY |  |\n| TEMPORARY_REDIRECT |  |\n| PERMANENT_REDIRECT |  |\n| BAD_REQUEST |  |\n| UNAUTHORIZED |  |\n| PAYMENT_REQUIRED |  |\n| FORBIDDEN |  |\n| NOT_FOUND |  |\n| METHOD_NOT_ALLOWED |  |\n| NOT_ACCEPTABLE |  |\n| PROXY_AUTHENTICATION_REQUIRED |  |\n| REQUEST_TIMEOUT |  |\n| CONFLICT |  |\n| GONE |  |\n| LENGTH_REQUIRED |  |\n| PRECONDITION_FAILED |  |\n| PAYLOAD_TOO_LARGE |  |\n| REQUEST_ENTITY_TOO_LARGE |  |\n| URI_TOO_LONG |  |\n| REQUEST_URI_TOO_LONG |  |\n| UNSUPPORTED_MEDIA_TYPE |  |\n| REQUESTED_RANGE_NOT_SATISFIABLE |  |\n| EXPECTATION_FAILED |  |\n| I_AM_A_TEAPOT |  |\n| INSUFFICIENT_SPACE_ON_RESOURCE |  |\n| METHOD_FAILURE |  |\n| DESTINATION_LOCKED |  |\n| UNPROCESSABLE_ENTITY |  |\n| LOCKED |  |\n| FAILED_DEPENDENCY |  |\n| TOO_EARLY |  |\n| UPGRADE_REQUIRED |  |\n| PRECONDITION_REQUIRED |  |\n| TOO_MANY_REQUESTS |  |\n| REQUEST_HEADER_FIELDS_TOO_LARGE |  |\n| UNAVAILABLE_FOR_LEGAL_REASONS |  |\n| INTERNAL_SERVER_ERROR |  |\n| NOT_IMPLEMENTED |  |\n| BAD_GATEWAY |  |\n| SERVICE_UNAVAILABLE |  |\n| GATEWAY_TIMEOUT |  |\n| HTTP_VERSION_NOT_SUPPORTED |  |\n| VARIANT_ALSO_NEGOTIATES |  |\n| INSUFFICIENT_STORAGE |  |\n| LOOP_DETECTED |  |\n| BANDWIDTH_LIMIT_EXCEEDED |  |\n| NOT_EXTENDED |  |\n| NETWORK_AUTHENTICATION_REQUIRED |  |\n",
            "required": false
        },
        "statusCodeValue": {
            "type": "integer",
            "description": "",
            "required": true,
            "format": "int32"
        }
    }
},
  "OrgSpringframeworkHttpResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1MessageV1": {
    "name": "OrgSpringframeworkHttpResponseEntityblackboardPluginDiscussionboardSpringRestPublicapiV1MessageV1",
    "originalName": "org.springframework.http.ResponseEntity<blackboard.plugin.discussionboard.spring.rest.publicapi.v1.MessageV1>",
    "description": "",
    "type": "object",
    "properties": {
        "statusCode": {
            "type": "string",
            "description": "null\n\n\n| Type      | Description\n | --------- | --------- |\n| CONTINUE |  |\n| SWITCHING_PROTOCOLS |  |\n| PROCESSING |  |\n| CHECKPOINT |  |\n| OK |  |\n| CREATED |  |\n| ACCEPTED |  |\n| NON_AUTHORITATIVE_INFORMATION |  |\n| NO_CONTENT |  |\n| RESET_CONTENT |  |\n| PARTIAL_CONTENT |  |\n| MULTI_STATUS |  |\n| ALREADY_REPORTED |  |\n| IM_USED |  |\n| MULTIPLE_CHOICES |  |\n| MOVED_PERMANENTLY |  |\n| FOUND |  |\n| MOVED_TEMPORARILY |  |\n| SEE_OTHER |  |\n| NOT_MODIFIED |  |\n| USE_PROXY |  |\n| TEMPORARY_REDIRECT |  |\n| PERMANENT_REDIRECT |  |\n| BAD_REQUEST |  |\n| UNAUTHORIZED |  |\n| PAYMENT_REQUIRED |  |\n| FORBIDDEN |  |\n| NOT_FOUND |  |\n| METHOD_NOT_ALLOWED |  |\n| NOT_ACCEPTABLE |  |\n| PROXY_AUTHENTICATION_REQUIRED |  |\n| REQUEST_TIMEOUT |  |\n| CONFLICT |  |\n| GONE |  |\n| LENGTH_REQUIRED |  |\n| PRECONDITION_FAILED |  |\n| PAYLOAD_TOO_LARGE |  |\n| REQUEST_ENTITY_TOO_LARGE |  |\n| URI_TOO_LONG |  |\n| REQUEST_URI_TOO_LONG |  |\n| UNSUPPORTED_MEDIA_TYPE |  |\n| REQUESTED_RANGE_NOT_SATISFIABLE |  |\n| EXPECTATION_FAILED |  |\n| I_AM_A_TEAPOT |  |\n| INSUFFICIENT_SPACE_ON_RESOURCE |  |\n| METHOD_FAILURE |  |\n| DESTINATION_LOCKED |  |\n| UNPROCESSABLE_ENTITY |  |\n| LOCKED |  |\n| FAILED_DEPENDENCY |  |\n| TOO_EARLY |  |\n| UPGRADE_REQUIRED |  |\n| PRECONDITION_REQUIRED |  |\n| TOO_MANY_REQUESTS |  |\n| REQUEST_HEADER_FIELDS_TOO_LARGE |  |\n| UNAVAILABLE_FOR_LEGAL_REASONS |  |\n| INTERNAL_SERVER_ERROR |  |\n| NOT_IMPLEMENTED |  |\n| BAD_GATEWAY |  |\n| SERVICE_UNAVAILABLE |  |\n| GATEWAY_TIMEOUT |  |\n| HTTP_VERSION_NOT_SUPPORTED |  |\n| VARIANT_ALSO_NEGOTIATES |  |\n| INSUFFICIENT_STORAGE |  |\n| LOOP_DETECTED |  |\n| BANDWIDTH_LIMIT_EXCEEDED |  |\n| NOT_EXTENDED |  |\n| NETWORK_AUTHENTICATION_REQUIRED |  |\n",
            "required": false
        },
        "statusCodeValue": {
            "type": "integer",
            "description": "",
            "required": true,
            "format": "int32"
        }
    }
},
  "OrgSpringframeworkHttpResponseEntityblackboardPluginRubricSpringRestPublicapiV1RubricEvaluationExpandV1": {
    "name": "OrgSpringframeworkHttpResponseEntityblackboardPluginRubricSpringRestPublicapiV1RubricEvaluationExpandV1",
    "originalName": "org.springframework.http.ResponseEntity<blackboard.plugin.rubric.spring.rest.publicapi.v1.RubricEvaluationExpandV1>",
    "description": "",
    "type": "object",
    "properties": {
        "statusCode": {
            "type": "string",
            "description": "null\n\n\n| Type      | Description\n | --------- | --------- |\n| CONTINUE |  |\n| SWITCHING_PROTOCOLS |  |\n| PROCESSING |  |\n| CHECKPOINT |  |\n| OK |  |\n| CREATED |  |\n| ACCEPTED |  |\n| NON_AUTHORITATIVE_INFORMATION |  |\n| NO_CONTENT |  |\n| RESET_CONTENT |  |\n| PARTIAL_CONTENT |  |\n| MULTI_STATUS |  |\n| ALREADY_REPORTED |  |\n| IM_USED |  |\n| MULTIPLE_CHOICES |  |\n| MOVED_PERMANENTLY |  |\n| FOUND |  |\n| MOVED_TEMPORARILY |  |\n| SEE_OTHER |  |\n| NOT_MODIFIED |  |\n| USE_PROXY |  |\n| TEMPORARY_REDIRECT |  |\n| PERMANENT_REDIRECT |  |\n| BAD_REQUEST |  |\n| UNAUTHORIZED |  |\n| PAYMENT_REQUIRED |  |\n| FORBIDDEN |  |\n| NOT_FOUND |  |\n| METHOD_NOT_ALLOWED |  |\n| NOT_ACCEPTABLE |  |\n| PROXY_AUTHENTICATION_REQUIRED |  |\n| REQUEST_TIMEOUT |  |\n| CONFLICT |  |\n| GONE |  |\n| LENGTH_REQUIRED |  |\n| PRECONDITION_FAILED |  |\n| PAYLOAD_TOO_LARGE |  |\n| REQUEST_ENTITY_TOO_LARGE |  |\n| URI_TOO_LONG |  |\n| REQUEST_URI_TOO_LONG |  |\n| UNSUPPORTED_MEDIA_TYPE |  |\n| REQUESTED_RANGE_NOT_SATISFIABLE |  |\n| EXPECTATION_FAILED |  |\n| I_AM_A_TEAPOT |  |\n| INSUFFICIENT_SPACE_ON_RESOURCE |  |\n| METHOD_FAILURE |  |\n| DESTINATION_LOCKED |  |\n| UNPROCESSABLE_ENTITY |  |\n| LOCKED |  |\n| FAILED_DEPENDENCY |  |\n| TOO_EARLY |  |\n| UPGRADE_REQUIRED |  |\n| PRECONDITION_REQUIRED |  |\n| TOO_MANY_REQUESTS |  |\n| REQUEST_HEADER_FIELDS_TOO_LARGE |  |\n| UNAVAILABLE_FOR_LEGAL_REASONS |  |\n| INTERNAL_SERVER_ERROR |  |\n| NOT_IMPLEMENTED |  |\n| BAD_GATEWAY |  |\n| SERVICE_UNAVAILABLE |  |\n| GATEWAY_TIMEOUT |  |\n| HTTP_VERSION_NOT_SUPPORTED |  |\n| VARIANT_ALSO_NEGOTIATES |  |\n| INSUFFICIENT_STORAGE |  |\n| LOOP_DETECTED |  |\n| BANDWIDTH_LIMIT_EXCEEDED |  |\n| NOT_EXTENDED |  |\n| NETWORK_AUTHENTICATION_REQUIRED |  |\n",
            "required": false
        },
        "statusCodeValue": {
            "type": "integer",
            "description": "",
            "required": true,
            "format": "int32"
        }
    }
},
  "OrgSpringframeworkHttpResponseEntityblackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseACLGroupPredicateV1": {
    "name": "OrgSpringframeworkHttpResponseEntityblackboardWebappsBlackboardPublicapiV1AdaptiveReleaseAdaptiveReleaseACLGroupPredicateV1",
    "originalName": "org.springframework.http.ResponseEntity<blackboard.webapps.blackboard.publicapi.v1.adaptiveRelease.AdaptiveReleaseACLGroupPredicateV1>",
    "description": "",
    "type": "object",
    "properties": {
        "statusCode": {
            "type": "string",
            "description": "null\n\n\n| Type      | Description\n | --------- | --------- |\n| CONTINUE |  |\n| SWITCHING_PROTOCOLS |  |\n| PROCESSING |  |\n| CHECKPOINT |  |\n| OK |  |\n| CREATED |  |\n| ACCEPTED |  |\n| NON_AUTHORITATIVE_INFORMATION |  |\n| NO_CONTENT |  |\n| RESET_CONTENT |  |\n| PARTIAL_CONTENT |  |\n| MULTI_STATUS |  |\n| ALREADY_REPORTED |  |\n| IM_USED |  |\n| MULTIPLE_CHOICES |  |\n| MOVED_PERMANENTLY |  |\n| FOUND |  |\n| MOVED_TEMPORARILY |  |\n| SEE_OTHER |  |\n| NOT_MODIFIED |  |\n| USE_PROXY |  |\n| TEMPORARY_REDIRECT |  |\n| PERMANENT_REDIRECT |  |\n| BAD_REQUEST |  |\n| UNAUTHORIZED |  |\n| PAYMENT_REQUIRED |  |\n| FORBIDDEN |  |\n| NOT_FOUND |  |\n| METHOD_NOT_ALLOWED |  |\n| NOT_ACCEPTABLE |  |\n| PROXY_AUTHENTICATION_REQUIRED |  |\n| REQUEST_TIMEOUT |  |\n| CONFLICT |  |\n| GONE |  |\n| LENGTH_REQUIRED |  |\n| PRECONDITION_FAILED |  |\n| PAYLOAD_TOO_LARGE |  |\n| REQUEST_ENTITY_TOO_LARGE |  |\n| URI_TOO_LONG |  |\n| REQUEST_URI_TOO_LONG |  |\n| UNSUPPORTED_MEDIA_TYPE |  |\n| REQUESTED_RANGE_NOT_SATISFIABLE |  |\n| EXPECTATION_FAILED |  |\n| I_AM_A_TEAPOT |  |\n| INSUFFICIENT_SPACE_ON_RESOURCE |  |\n| METHOD_FAILURE |  |\n| DESTINATION_LOCKED |  |\n| UNPROCESSABLE_ENTITY |  |\n| LOCKED |  |\n| FAILED_DEPENDENCY |  |\n| TOO_EARLY |  |\n| UPGRADE_REQUIRED |  |\n| PRECONDITION_REQUIRED |  |\n| TOO_MANY_REQUESTS |  |\n| REQUEST_HEADER_FIELDS_TOO_LARGE |  |\n| UNAVAILABLE_FOR_LEGAL_REASONS |  |\n| INTERNAL_SERVER_ERROR |  |\n| NOT_IMPLEMENTED |  |\n| BAD_GATEWAY |  |\n| SERVICE_UNAVAILABLE |  |\n| GATEWAY_TIMEOUT |  |\n| HTTP_VERSION_NOT_SUPPORTED |  |\n| VARIANT_ALSO_NEGOTIATES |  |\n| INSUFFICIENT_STORAGE |  |\n| LOOP_DETECTED |  |\n| BANDWIDTH_LIMIT_EXCEEDED |  |\n| NOT_EXTENDED |  |\n| NETWORK_AUTHENTICATION_REQUIRED |  |\n",
            "required": false
        },
        "statusCodeValue": {
            "type": "integer",
            "description": "",
            "required": true,
            "format": "int32"
        }
    }
},
  "OrgSpringframeworkHttpResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNodeV1": {
    "name": "OrgSpringframeworkHttpResponseEntityblackboardWebappsBlackboardPublicapiV1InstitutionalhierarchyNodeV1",
    "originalName": "org.springframework.http.ResponseEntity<blackboard.webapps.blackboard.publicapi.v1.institutionalhierarchy.NodeV1>",
    "description": "",
    "type": "object",
    "properties": {
        "statusCode": {
            "type": "string",
            "description": "null\n\n\n| Type      | Description\n | --------- | --------- |\n| CONTINUE |  |\n| SWITCHING_PROTOCOLS |  |\n| PROCESSING |  |\n| CHECKPOINT |  |\n| OK |  |\n| CREATED |  |\n| ACCEPTED |  |\n| NON_AUTHORITATIVE_INFORMATION |  |\n| NO_CONTENT |  |\n| RESET_CONTENT |  |\n| PARTIAL_CONTENT |  |\n| MULTI_STATUS |  |\n| ALREADY_REPORTED |  |\n| IM_USED |  |\n| MULTIPLE_CHOICES |  |\n| MOVED_PERMANENTLY |  |\n| FOUND |  |\n| MOVED_TEMPORARILY |  |\n| SEE_OTHER |  |\n| NOT_MODIFIED |  |\n| USE_PROXY |  |\n| TEMPORARY_REDIRECT |  |\n| PERMANENT_REDIRECT |  |\n| BAD_REQUEST |  |\n| UNAUTHORIZED |  |\n| PAYMENT_REQUIRED |  |\n| FORBIDDEN |  |\n| NOT_FOUND |  |\n| METHOD_NOT_ALLOWED |  |\n| NOT_ACCEPTABLE |  |\n| PROXY_AUTHENTICATION_REQUIRED |  |\n| REQUEST_TIMEOUT |  |\n| CONFLICT |  |\n| GONE |  |\n| LENGTH_REQUIRED |  |\n| PRECONDITION_FAILED |  |\n| PAYLOAD_TOO_LARGE |  |\n| REQUEST_ENTITY_TOO_LARGE |  |\n| URI_TOO_LONG |  |\n| REQUEST_URI_TOO_LONG |  |\n| UNSUPPORTED_MEDIA_TYPE |  |\n| REQUESTED_RANGE_NOT_SATISFIABLE |  |\n| EXPECTATION_FAILED |  |\n| I_AM_A_TEAPOT |  |\n| INSUFFICIENT_SPACE_ON_RESOURCE |  |\n| METHOD_FAILURE |  |\n| DESTINATION_LOCKED |  |\n| UNPROCESSABLE_ENTITY |  |\n| LOCKED |  |\n| FAILED_DEPENDENCY |  |\n| TOO_EARLY |  |\n| UPGRADE_REQUIRED |  |\n| PRECONDITION_REQUIRED |  |\n| TOO_MANY_REQUESTS |  |\n| REQUEST_HEADER_FIELDS_TOO_LARGE |  |\n| UNAVAILABLE_FOR_LEGAL_REASONS |  |\n| INTERNAL_SERVER_ERROR |  |\n| NOT_IMPLEMENTED |  |\n| BAD_GATEWAY |  |\n| SERVICE_UNAVAILABLE |  |\n| GATEWAY_TIMEOUT |  |\n| HTTP_VERSION_NOT_SUPPORTED |  |\n| VARIANT_ALSO_NEGOTIATES |  |\n| INSUFFICIENT_STORAGE |  |\n| LOOP_DETECTED |  |\n| BANDWIDTH_LIMIT_EXCEEDED |  |\n| NOT_EXTENDED |  |\n| NETWORK_AUTHENTICATION_REQUIRED |  |\n",
            "required": false
        },
        "statusCodeValue": {
            "type": "integer",
            "description": "",
            "required": true,
            "format": "int32"
        }
    }
},
  "OrgSpringframeworkHttpResponseEntityblackboardWebappsGradebookPublicapiV1AttemptFileV1": {
    "name": "OrgSpringframeworkHttpResponseEntityblackboardWebappsGradebookPublicapiV1AttemptFileV1",
    "originalName": "org.springframework.http.ResponseEntity<blackboard.webapps.gradebook.publicapi.v1.AttemptFileV1>",
    "description": "",
    "type": "object",
    "properties": {
        "statusCode": {
            "type": "string",
            "description": "null\n\n\n| Type      | Description\n | --------- | --------- |\n| CONTINUE |  |\n| SWITCHING_PROTOCOLS |  |\n| PROCESSING |  |\n| CHECKPOINT |  |\n| OK |  |\n| CREATED |  |\n| ACCEPTED |  |\n| NON_AUTHORITATIVE_INFORMATION |  |\n| NO_CONTENT |  |\n| RESET_CONTENT |  |\n| PARTIAL_CONTENT |  |\n| MULTI_STATUS |  |\n| ALREADY_REPORTED |  |\n| IM_USED |  |\n| MULTIPLE_CHOICES |  |\n| MOVED_PERMANENTLY |  |\n| FOUND |  |\n| MOVED_TEMPORARILY |  |\n| SEE_OTHER |  |\n| NOT_MODIFIED |  |\n| USE_PROXY |  |\n| TEMPORARY_REDIRECT |  |\n| PERMANENT_REDIRECT |  |\n| BAD_REQUEST |  |\n| UNAUTHORIZED |  |\n| PAYMENT_REQUIRED |  |\n| FORBIDDEN |  |\n| NOT_FOUND |  |\n| METHOD_NOT_ALLOWED |  |\n| NOT_ACCEPTABLE |  |\n| PROXY_AUTHENTICATION_REQUIRED |  |\n| REQUEST_TIMEOUT |  |\n| CONFLICT |  |\n| GONE |  |\n| LENGTH_REQUIRED |  |\n| PRECONDITION_FAILED |  |\n| PAYLOAD_TOO_LARGE |  |\n| REQUEST_ENTITY_TOO_LARGE |  |\n| URI_TOO_LONG |  |\n| REQUEST_URI_TOO_LONG |  |\n| UNSUPPORTED_MEDIA_TYPE |  |\n| REQUESTED_RANGE_NOT_SATISFIABLE |  |\n| EXPECTATION_FAILED |  |\n| I_AM_A_TEAPOT |  |\n| INSUFFICIENT_SPACE_ON_RESOURCE |  |\n| METHOD_FAILURE |  |\n| DESTINATION_LOCKED |  |\n| UNPROCESSABLE_ENTITY |  |\n| LOCKED |  |\n| FAILED_DEPENDENCY |  |\n| TOO_EARLY |  |\n| UPGRADE_REQUIRED |  |\n| PRECONDITION_REQUIRED |  |\n| TOO_MANY_REQUESTS |  |\n| REQUEST_HEADER_FIELDS_TOO_LARGE |  |\n| UNAVAILABLE_FOR_LEGAL_REASONS |  |\n| INTERNAL_SERVER_ERROR |  |\n| NOT_IMPLEMENTED |  |\n| BAD_GATEWAY |  |\n| SERVICE_UNAVAILABLE |  |\n| GATEWAY_TIMEOUT |  |\n| HTTP_VERSION_NOT_SUPPORTED |  |\n| VARIANT_ALSO_NEGOTIATES |  |\n| INSUFFICIENT_STORAGE |  |\n| LOOP_DETECTED |  |\n| BANDWIDTH_LIMIT_EXCEEDED |  |\n| NOT_EXTENDED |  |\n| NETWORK_AUTHENTICATION_REQUIRED |  |\n",
            "required": false
        },
        "statusCodeValue": {
            "type": "integer",
            "description": "",
            "required": true,
            "format": "int32"
        }
    }
}
};

// Helper function to get type information for LLMs
export function getTypeInfo(typeName: string) {
  return TypeMap[typeName];
}

// Helper function to list all available types
export function getAllTypes() {
  return Object.keys(TypeMap);
}
