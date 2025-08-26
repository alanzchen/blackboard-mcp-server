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
