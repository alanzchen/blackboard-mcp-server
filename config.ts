/**
 * Shared configuration for Blackboard Learn API services
 */
import { Response } from 'node-fetch';
import { setBaseUrl } from './server.js';

/**
 * Configure base URL based on environment
 */
export const baseUrl = setBaseUrl()

/**
 * Blackboard Learn API version to use
 */
export const apiVersion = process.env.BLACKBOARD_VERSION || 'v1';

/**
 * Standard request headers for Blackboard Learn API
 * @param accessToken Blackboard Learn API access token
 * @returns Headers object
 */
export function getRequestHeaders(accessToken: string): Record<string, string> {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
    'User-Agent': 'Blackboard-MCP-Server/0.1.2'
  };
}

/**
 * Handle API response
 * @param response node-fetch Response object
 * @returns Response text
 */
export async function handleResponse(response: Response): Promise<string> {
  // Handle response
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || response.statusText);
  }

  // Return raw response text
  return await response.text().catch(() => {
    // Handle empty responses
    return '{"success": true}';
  });
}