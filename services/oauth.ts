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
export const OauthMethods: { [key: string]: ApiMethodInfo } = {
  authorizationCode: {
    description: "Requests an OAuth 2 authorization code. Use of PKCE standard is optional, but highly recommended.\n\n**Since**: 3200.7.0",
    method: "get",
    path: "/learn/api/public/v1/oauth2/authorizationcode",
    pathParams: [],
    queryParams: [
    {
        "name": "redirect_uri",
        "type": "string",
        "description": "the redirectUri to send the end user to once an authorization code response is made in Oauth2 Authorization Code Workflow",
        "required": false
    },
    {
        "name": "response_type",
        "type": "string",
        "description": "Required. The response_type expected which must to be set to \"code\"",
        "required": false
    },
    {
        "name": "client_id",
        "type": "string",
        "description": "Required. The client identifier for the registered application.",
        "required": false
    },
    {
        "name": "scope",
        "type": "string",
        "description": "the space delimited scope(s) being requested for this authorization. Example value: \"read write offline\"",
        "required": false
    },
    {
        "name": "state",
        "type": "string",
        "description": "Opaque value used by client to maintain state between request and callback. Used to prevent cross-site request forgery.",
        "required": false
    },
    {
        "name": "code_challenge",
        "type": "string",
        "description": "A code challenge to verify credentials along with the granted authorization code. It is used with the PKCE standard.\n\n**Since**: 3700.4.0",
        "required": false
    },
    {
        "name": "code_challenge_method",
        "type": "string",
        "description": "This is the method used to verify the code challenge using the PKCE standard. Blackboard only supports s256 as the code challenge method.\n\n**Since**: 3700.4.0",
        "required": false
    },
    {
        "name": "one_time_session_token",
        "type": "string",
        "description": "Token used to retrieve the session that generated this Oauth2 Code request. Used when session cookies are not sent due to privacy settings of the browser.\n\n**Since**: 3900.13.0",
        "required": false
    }
],
    requestType: "OauthAuthorizationCodeRequest",
    isMultipart: false,
    originalName: "authorizationCode",
    isWrite: false
  } as ApiMethodInfo,

  requestToken: {
    description: "Requests an OAuth 2 access token.\n\n**Since**: 2015.11.0",
    method: "post",
    path: "/learn/api/public/v1/oauth2/token",
    pathParams: [],
    queryParams: [
    {
        "name": "grant_type",
        "type": "string",
        "description": "The Grant Type. Acceptable values include: 'client_credentials', 'authorization_code' (since 3200.7.0), or 'refresh_token' (since 3200.7.0).",
        "required": false
    },
    {
        "name": "code",
        "type": "string",
        "description": "The authorization code granted by an end user for use by an application in Oauth2 Authorization Code Workflow",
        "required": false
    },
    {
        "name": "redirect_uri",
        "type": "string",
        "description": "The redirectUri to send the end user to once an access token response is made in Oauth2 Authorization Code Workflow\n\n**Since**: 3200.7.0",
        "required": false
    },
    {
        "name": "refresh_token",
        "type": "string",
        "description": "The refresh token granted for use by an application in Oauth2 Refresh Token Workflow\n\n**Since**: 3200.7.0",
        "required": false
    },
    {
        "name": "code_verifier",
        "type": "string",
        "description": "The code_verifier to be passed along with authorization code if PKCE standard was used to grant the authorization code.\n\n**Since**: 3700.4.0",
        "required": false
    }
],
    requestType: "OauthRequestTokenRequest",
    isMultipart: false,
    originalName: "requestToken",
    isWrite: true
  } as ApiMethodInfo,

  getTokenInfo: {
    description: "Requests an OAuth 2 access token info.\n\n**Since**: 3700.6.0",
    method: "get",
    path: "/learn/api/public/v1/oauth2/tokeninfo",
    pathParams: [],
    queryParams: [],
    requestType: "OauthGetTokenInfoRequest",
    isMultipart: false,
    originalName: "getTokenInfo",
    isWrite: false
  } as ApiMethodInfo
};

/**
 * Handlers for each API endpoint
 */
export const OauthHandlers = {
  authorizationCode: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = OauthMethods.authorizationCode;
    
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

  requestToken: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = OauthMethods.requestToken;
    
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

  getTokenInfo: async (accessToken: string, args: Record<string, unknown>) => {
    const methodInfo = OauthMethods.getTokenInfo;
    
    // Simple endpoint with no path or query parameters
    const url = methodInfo.path;

    // Make regular JSON request
    const response = await fetch(`${baseUrl}${url}`, {
      method: methodInfo.method.toUpperCase(),
      headers: getRequestHeaders(accessToken),
      ...(Object.keys(args).length > 0 && ['post', 'put', 'patch'].includes(methodInfo.method.toLowerCase()) && { body: JSON.stringify(args) })
    });
    return await handleResponse(response)
  }
};
