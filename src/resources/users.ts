// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Users extends APIResource {
  /**
   * Create a new user in the UPL system or return existing user.
   *
   *     This endpoint:
   *     - Validates authentication tokens
   *     - Creates a new user with unique email OR returns existing user if email already exists
   *     - Returns user details upon successful creation or retrieval
   *     - Uses "create or get" pattern for idempotent behavior
   *
   *     **Authentication**: Requires valid API key or JWT token in Authorization header
   *
   * @example
   * ```ts
   * const response = await client.users.createOrGet({
   *   email: 'user@example.com',
   *   name: 'John Doe',
   * });
   * ```
   */
  createOrGet(body: UserCreateOrGetParams, options?: RequestOptions): APIPromise<UserCreateOrGetResponse> {
    return this._client.post('/v1/users', { body, ...options });
  }
}

/**
 * Response model for user creation
 */
export interface UserCreateOrGetResponse {
  /**
   * User creation timestamp
   */
  created_at: string;

  /**
   * User's email address
   */
  email: string;

  /**
   * User's name
   */
  name: string;

  /**
   * Generated user ID
   */
  user_id: string;

  /**
   * Organization-specific user ID
   */
  org_user_id?: string | null;

  /**
   * Whether the user was created successfully
   */
  success?: boolean;
}

export interface UserCreateOrGetParams {
  /**
   * User's email address
   */
  email: string;

  /**
   * User's full name
   */
  name: string;

  /**
   * Organization-specific user ID
   */
  org_user_id?: string | null;
}

export declare namespace Users {
  export {
    type UserCreateOrGetResponse as UserCreateOrGetResponse,
    type UserCreateOrGetParams as UserCreateOrGetParams,
  };
}
