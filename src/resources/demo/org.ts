// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Org extends APIResource {
  /**
   * Retrieve all users and personas belonging to a specific organization.
   *
   *     This endpoint:
   *     - Returns all users in the organization
   *     - Includes all personas created by those users
   *     - Provides metadata for each user and persona
   *     - Returns total count of all members
   *
   *     **Authentication**: No authentication required
   *
   * @example
   * ```ts
   * const response =
   *   await client.demo.org.listOrganizationMembers({
   *     org_id: '123e4567-e89b-12d3-a456-426614174000',
   *   });
   * ```
   */
  listOrganizationMembers(
    body: OrgListOrganizationMembersParams,
    options?: RequestOptions,
  ): APIPromise<OrgListOrganizationMembersResponse> {
    return this._client.post('/v1/demo/org/users', { body, ...options });
  }
}

/**
 * Response model for getting users and personas by organization
 */
export interface OrgListOrganizationMembersResponse {
  /**
   * Organization ID
   */
  org_id: string;

  /**
   * Total number of users and personas in the organization
   */
  total_count: number;

  /**
   * List of users and personas in the organization
   */
  users: Array<OrgListOrganizationMembersResponse.User>;
}

export namespace OrgListOrganizationMembersResponse {
  /**
   * Response model for organization member (user or persona)
   */
  export interface User {
    /**
     * User ID or Persona ID
     */
    id: string;

    /**
     * Creation timestamp
     */
    created_at: string;

    /**
     * Type: 'user' or 'persona'
     */
    type: string;

    /**
     * Description (for personas only)
     */
    description?: string | null;

    /**
     * Email (for users only)
     */
    email?: string | null;

    /**
     * Name of user or persona
     */
    name?: string | null;

    /**
     * Organization ID (for users only)
     */
    org_id?: string | null;

    /**
     * Organization name (for users only)
     */
    org_name?: string | null;

    /**
     * Owner user ID (for personas only)
     */
    user_id?: string | null;
  }
}

export interface OrgListOrganizationMembersParams {
  /**
   * Organization ID
   */
  org_id: string;
}

export declare namespace Org {
  export {
    type OrgListOrganizationMembersResponse as OrgListOrganizationMembersResponse,
    type OrgListOrganizationMembersParams as OrgListOrganizationMembersParams,
  };
}
