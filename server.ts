#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import express from "express";
import cors from 'cors';
import crypto from 'crypto';
import { Server } from "http"
import { typeMap } from './utils/type-map.js';
import { ApiMethodInfo, ApiParameter } from './api-types.js';
import escapeHtml from 'escape-html';

// Blackboard Learn API Services
import { AdaptiveReleaseMethods, AdaptiveReleaseHandlers } from './services/adaptiverelease.js';
import { AnnouncementsMethods, AnnouncementsHandlers } from './services/announcements.js';
import { AttemptReceiptMethods, AttemptReceiptHandlers } from './services/attemptreceipt.js';
import { AttendanceMethods, AttendanceHandlers } from './services/attendance.js';
import { CalendarMethods, CalendarHandlers } from './services/calendar.js';
import { ColumnExceptionsMethods, ColumnExceptionsHandlers } from './services/columnexceptions.js';
import { ContentMethods, ContentHandlers } from './services/content.js';
import { ContentCollectionResourcesMethods, ContentCollectionResourcesHandlers } from './services/contentcollectionresources.js';
import { ContentFileAttachmentsMethods, ContentFileAttachmentsHandlers } from './services/contentfileattachments.js';
import { ContentGroupAssignmentsMethods, ContentGroupAssignmentsHandlers } from './services/contentgroupassignments.js';
import { ContentResourcesMethods, ContentResourcesHandlers } from './services/contentresources.js';
import { ContentReviewMethods, ContentReviewHandlers } from './services/contentreview.js';
import { CourseAnnouncementsMethods, CourseAnnouncementsHandlers } from './services/courseannouncements.js';
import { CourseAssessmentsMethods, CourseAssessmentsHandlers } from './services/courseassessments.js';
import { CourseCategoriesMethods, CourseCategoriesHandlers } from './services/coursecategories.js';
import { CourseGradeAttemptsMethods, CourseGradeAttemptsHandlers } from './services/coursegradeattempts.js';
import { CourseGradebookCategoriesMethods, CourseGradebookCategoriesHandlers } from './services/coursegradebookcategories.js';
import { CourseGradeNotationsMethods, CourseGradeNotationsHandlers } from './services/coursegradenotations.js';
import { CourseGradesMethods, CourseGradesHandlers } from './services/coursegrades.js';
import { CourseGradingPeriodsMethods, CourseGradingPeriodsHandlers } from './services/coursegradingperiods.js';
import { CourseGroupsMethods, CourseGroupsHandlers } from './services/coursegroups.js';
import { CourseGroupUsersMethods, CourseGroupUsersHandlers } from './services/coursegroupusers.js';
import { CourseMembershipsMethods, CourseMembershipsHandlers } from './services/coursememberships.js';
import { CourseMessagesMethods, CourseMessagesHandlers } from './services/coursemessages.js';
import { CoursesMethods, CoursesHandlers } from './services/courses.js';
import { CourseTocMethods, CourseTocHandlers } from './services/coursetoc.js';
import { DataSourcesMethods, DataSourcesHandlers } from './services/datasources.js';
import { DeprecatedCourseGradesMethods, DeprecatedCourseGradesHandlers } from './services/deprecatedcoursegrades.js';
import { DeprecatedCourseGroupsMethods, DeprecatedCourseGroupsHandlers } from './services/deprecatedcoursegroups.js';
import { DeprecatedCourseGroupUsersMethods, DeprecatedCourseGroupUsersHandlers } from './services/deprecatedcoursegroupusers.js';
import { DeprecatedCoursesMethods, DeprecatedCoursesHandlers } from './services/deprecatedcourses.js';
import { DiscussionsMethods, DiscussionsHandlers } from './services/discussions.js';
import { GoalsMethods, GoalsHandlers } from './services/goals.js';
import { InstitutionalHierarchyMethods, InstitutionalHierarchyHandlers } from './services/institutionalhierarchy.js';
import { InstitutionalHierarchyAdministratorsMethods, InstitutionalHierarchyAdministratorsHandlers } from './services/institutionalhierarchyadministrators.js';
import { LtiMethods, LtiHandlers } from './services/lti.js';
import { OauthMethods, OauthHandlers } from './services/oauth.js';
import { PerformanceDashboardMethods, PerformanceDashboardHandlers } from './services/performancedashboard.js';
import { PerformanceScaleMethods, PerformanceScaleHandlers } from './services/performancescale.js';
import { ProctoringMethods, ProctoringHandlers } from './services/proctoring.js';
import { PronounsMethods, PronounsHandlers } from './services/pronouns.js';
import { RolesMethods, RolesHandlers } from './services/roles.js';
import { RubricAssociationsMethods, RubricAssociationsHandlers } from './services/rubricassociations.js';
import { RubricEvaluationsMethods, RubricEvaluationsHandlers } from './services/rubricevaluations.js';
import { RubricsMethods, RubricsHandlers } from './services/rubrics.js';
import { SessionsMethods, SessionsHandlers } from './services/sessions.js';
import { SISLogsMethods, SISLogsHandlers } from './services/sislogs.js';
import { SystemMethods, SystemHandlers } from './services/system.js';
import { TermsMethods, TermsHandlers } from './services/terms.js';
import { UploadsMethods, UploadsHandlers } from './services/uploads.js';
import { UsersMethods, UsersHandlers } from './services/users.js';

// Create MCP server
const server = new McpServer(
  {
    name: "blackboard-mcp",
    version: "1.0.0"
  }
);

// Target-specific code
/**
 * PUBLIC API
 * 
 * This MCP server is designed for public use with the Blackboard Learn API.
 * It provides a standard interface for accessing Blackboard Learn services
 * through the Model Context Protocol.
 * 
 * For questions or support, visit the Blackboard Developer Community:
 * https://community.blackboard.com/developers
 */

const accessToken: string | undefined = process.env.ACCESS_TOKEN;

async function getAccessToken(): Promise<string> {
  return accessToken || '';
}

export function setBaseUrl() {
  let baseUrl = "https://blackboard.myschool.edu";

  // Allow override via environment variable
  if (process.env.BLACKBOARD_BASE_URL) {
    baseUrl = process.env.BLACKBOARD_BASE_URL;
  }

  return baseUrl
}
setBaseUrl()

// Define types for service maps
type ServiceMethods = { [key: string]: { [key: string]: ApiMethodInfo } };
type ServiceHandlers = { [key: string]: { [key: string]: (accessToken: string, args: Record<string, unknown>) => Promise<unknown> } };

// Create a mapping of service methods and handlers
export const serviceMethodsMap: ServiceMethods = {
  "Adaptive Release": AdaptiveReleaseMethods,
  "Announcements": AnnouncementsMethods,
  "Attempt Receipt": AttemptReceiptMethods,
  "Attendance": AttendanceMethods,
  "Calendar": CalendarMethods,
  "Column Exceptions": ColumnExceptionsMethods,
  "Content": ContentMethods,
  "Content Collection Resources": ContentCollectionResourcesMethods,
  "Content File Attachments": ContentFileAttachmentsMethods,
  "Content Group Assignments": ContentGroupAssignmentsMethods,
  "Content Resources": ContentResourcesMethods,
  "Content Review": ContentReviewMethods,
  "Course Announcements": CourseAnnouncementsMethods,
  "Course Assessments": CourseAssessmentsMethods,
  "Course Categories": CourseCategoriesMethods,
  "Course Grade Attempts": CourseGradeAttemptsMethods,
  "Course Gradebook Categories": CourseGradebookCategoriesMethods,
  "Course Grade Notations": CourseGradeNotationsMethods,
  "Course Grades": CourseGradesMethods,
  "Course Grading Periods": CourseGradingPeriodsMethods,
  "Course Groups": CourseGroupsMethods,
  "Course Group Users": CourseGroupUsersMethods,
  "Course Memberships": CourseMembershipsMethods,
  "Course Messages": CourseMessagesMethods,
  "Courses": CoursesMethods,
  "Course Toc": CourseTocMethods,
  "Data Sources": DataSourcesMethods,
  "Deprecated Course Grades": DeprecatedCourseGradesMethods,
  "Deprecated Course Groups": DeprecatedCourseGroupsMethods,
  "Deprecated Course Group Users": DeprecatedCourseGroupUsersMethods,
  "Deprecated Courses": DeprecatedCoursesMethods,
  "Discussions": DiscussionsMethods,
  "Goals": GoalsMethods,
  "Institutional Hierarchy": InstitutionalHierarchyMethods,
  "Institutional Hierarchy Administrators": InstitutionalHierarchyAdministratorsMethods,
  "LTI": LtiMethods,
  "OAuth": OauthMethods,
  "Performance Dashboard": PerformanceDashboardMethods,
  "Performance Scale": PerformanceScaleMethods,
  "Proctoring": ProctoringMethods,
  "Pronouns": PronounsMethods,
  "Roles": RolesMethods,
  "Rubric Associations": RubricAssociationsMethods,
  "Rubric Evaluations": RubricEvaluationsMethods,
  "Rubrics": RubricsMethods,
  "Sessions": SessionsMethods,
  "SIS Logs": SISLogsMethods,
  "System": SystemMethods,
  "Terms": TermsMethods,
  "Uploads": UploadsMethods,
  "Users": UsersMethods
};

export const serviceHandlersMap: ServiceHandlers = {
  "Adaptive Release": AdaptiveReleaseHandlers,
  "Announcements": AnnouncementsHandlers,
  "Attempt Receipt": AttemptReceiptHandlers,
  "Attendance": AttendanceHandlers,
  "Calendar": CalendarHandlers,
  "Column Exceptions": ColumnExceptionsHandlers,
  "Content": ContentHandlers,
  "Content Collection Resources": ContentCollectionResourcesHandlers,
  "Content File Attachments": ContentFileAttachmentsHandlers,
  "Content Group Assignments": ContentGroupAssignmentsHandlers,
  "Content Resources": ContentResourcesHandlers,
  "Content Review": ContentReviewHandlers,
  "Course Announcements": CourseAnnouncementsHandlers,
  "Course Assessments": CourseAssessmentsHandlers,
  "Course Categories": CourseCategoriesHandlers,
  "Course Grade Attempts": CourseGradeAttemptsHandlers,
  "Course Gradebook Categories": CourseGradebookCategoriesHandlers,
  "Course Grade Notations": CourseGradeNotationsHandlers,
  "Course Grades": CourseGradesHandlers,
  "Course Grading Periods": CourseGradingPeriodsHandlers,
  "Course Groups": CourseGroupsHandlers,
  "Course Group Users": CourseGroupUsersHandlers,
  "Course Memberships": CourseMembershipsHandlers,
  "Course Messages": CourseMessagesHandlers,
  "Courses": CoursesHandlers,
  "Course Toc": CourseTocHandlers,
  "Data Sources": DataSourcesHandlers,
  "Deprecated Course Grades": DeprecatedCourseGradesHandlers,
  "Deprecated Course Groups": DeprecatedCourseGroupsHandlers,
  "Deprecated Course Group Users": DeprecatedCourseGroupUsersHandlers,
  "Deprecated Courses": DeprecatedCoursesHandlers,
  "Discussions": DiscussionsHandlers,
  "Goals": GoalsHandlers,
  "Institutional Hierarchy": InstitutionalHierarchyHandlers,
  "Institutional Hierarchy Administrators": InstitutionalHierarchyAdministratorsHandlers,
  "LTI": LtiHandlers,
  "OAuth": OauthHandlers,
  "Performance Dashboard": PerformanceDashboardHandlers,
  "Performance Scale": PerformanceScaleHandlers,
  "Proctoring": ProctoringHandlers,
  "Pronouns": PronounsHandlers,
  "Roles": RolesHandlers,
  "Rubric Associations": RubricAssociationsHandlers,
  "Rubric Evaluations": RubricEvaluationsHandlers,
  "Rubrics": RubricsHandlers,
  "Sessions": SessionsHandlers,
  "SIS Logs": SISLogsHandlers,
  "System": SystemHandlers,
  "Terms": TermsHandlers,
  "Uploads": UploadsHandlers,
  "Users": UsersHandlers
};

// Register unified Blackboard Learn API tool
server.tool(
  "make_api_request",
  `Unified tool for all Blackboard Learn API operations. Be sure to get types before calling. Available services:
  ${Object.keys(serviceMethodsMap).map(name => name.toLowerCase()).join(", ")}.`,
  {
    service: z.string().describe("The Blackboard Learn API service category (e.g., 'courses', 'users')"),
    method: z.string().describe("The API method to call (e.g., 'getCourse', 'createUser')"),
    request: z.object({}).passthrough().optional().describe("The request object for the API call.")
  },
  async (params) => {
    try {
      const { service, method, request } = params;
      const serviceName = service.charAt(0).toUpperCase() + service.slice(1);
      
      const methods = serviceMethodsMap[serviceName];
      if (!methods) {
        throw new Error(`Invalid service: ${service}. Available services: ${JSON.stringify(Object.keys(serviceMethodsMap), null, 2)}`);
      }

      const handlers = serviceHandlersMap[serviceName];
      if (!methods[method]) {
        throw new Error(`Invalid method ${method} for service ${service}. Available methods: ${JSON.stringify(Object.keys(methods), null, 2)}`);
      }
      

      // Support read-only mode if desired
      const methodInfo = methods[method];
      if (process.env.DISALLOW_WRITES == "true" && methodInfo?.isWrite) {
        throw new Error(`Write operations are not allowed in this environment. Please set DISALLOW_WRITES to false to enable write operations. Attempted operation: ${service}.${method}`);
      }

      const handler = handlers[method];
      if (!handler) {
        throw new Error(`No handler found for ${service}.${method}`);
      }

      const token = await getAccessToken();
      const result = await handler(token, request || {});

      return {
        content: [{
          type: "text",
          text: result as string
        }]
      };
    } catch (err: any) {
      return {
        content: [{
          type: "text",
          text: JSON.stringify({
            error: err.message,
            details: err.errors || err.stack
          }, null, 2)
        }],
        isError: true
      };
    }
  });

// Register get_request_type tool
server.tool(
  "get_type_info",
  "Get type information for a Square API method. You must call this before calling the make_api_request tool.",
  {
    service: z.string().describe("The Square API service category (e.g., 'catalog', 'payments')"),
    method: z.string().describe("The API method to call (e.g., 'list', 'create')")
  },
  async (params) => {
    try {
      const { service, method } = params;
      const serviceName = service.charAt(0).toUpperCase() + service.slice(1);
      
      const methods = serviceMethodsMap[serviceName];
      if (!methods) {
        throw new Error(`Invalid service: ${service}. Available services: ${JSON.stringify(Object.keys(serviceMethodsMap), null, 2)}`);
      }

      if (!methods[method]) {
        throw new Error(`Invalid method ${method} for service ${service}. Available methods: ${JSON.stringify(Object.keys(methods), null, 2)}`);
      }

      const methodInfo = methods[method];
      const requestTypeName = methodInfo.requestType;
      
      const typeInfo = typeMap[requestTypeName];
      if (!typeInfo) {
        throw new Error(`Type information not found for ${requestTypeName}`);
      }

      return {
        content: [{
          type: "text",
          text: JSON.stringify(typeInfo, null, 2)
        }]
      };
    } catch (err: any) {
      return {
        content: [{
          type: "text",
          text: JSON.stringify({
            error: err.message,
            details: err.errors || err.stack
          }, null, 2)
        }],
        isError: true
      };
    }
  }
);

// register service info tool
server.tool(
  "get_service_info",
  "Get information about a Square API service. Call me before trying to get type info",
  {
    service: z.string().describe("The Square API service category (e.g., 'catalog', 'payments')")
  },
  async (params) => {
    try {
      const { service } = params;
      const serviceName = service.charAt(0).toUpperCase() + service.slice(1);
      
      const methods = serviceMethodsMap[serviceName];
      if (!methods) {
        throw new Error(`Invalid service: ${service}. Available services: ${JSON.stringify(Object.keys(serviceMethodsMap), null, 2)}`);
      }

      // Create a map of method names to their descriptions
      const methodInfo = Object.entries(methods).reduce((acc, [methodName, info]) => {
        acc[methodName] = {
          description: info.description
        };
        return acc;
      }, {} as Record<string, { description: string }>);

      return {
        content: [{
          type: "text",
          text: JSON.stringify(methodInfo, null, 2)
        }]
      };
    } catch (err: any) {
      return {
        content: [{
          type: "text",
          text: JSON.stringify({
            error: err.message,
            details: err.errors || err.stack
          }, null, 2)
        }],
        isError: true
      };
    }
  }
);

export async function startServer() {
  // Connect to the transport and start listening
  await server.connect(new StdioServerTransport());
}