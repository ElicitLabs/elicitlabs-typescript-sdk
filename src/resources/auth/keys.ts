// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * Create a new API key for the authenticated user.
   *
   *     This endpoint:
   *     - Validates the current API key authentication
   *     - Creates a new API key for the same user/organization
   *     - Returns the new API key (only shown once)
   *     - Supports optional labeling for key management
   *
   *     **Authentication**: Requires valid API key in Authorization header
   */
  create(body: KeyCreateParams, options?: RequestOptions): APIPromise<KeyCreateResponse> {
    return this._client.post('/v1/auth/keys', { body, ...options });
  }

  /**
   * Retrieve all API keys for the authenticated user.
   *
   *     This endpoint:
   *     - Validates the current API key authentication
   *     - Returns list of all API keys for the user (without the actual key values)
   *     - Includes metadata like creation time and last usage
   *
   *     **Authentication**: Requires valid API key in Authorization header
   */
  list(options?: RequestOptions): APIPromise<KeyListResponse> {
    return this._client.get('/v1/auth/keys', options);
  }

  /**
   * Revoke (delete) an API key for the authenticated user.
   *
   *     This endpoint:
   *     - Validates the current API key authentication
   *     - Revokes the specified API key (if it belongs to the user)
   *     - Returns confirmation of revocation
   *
   *     **Authentication**: Requires valid API key in Authorization header
   */
  revoke(apiKeyID: string, options?: RequestOptions): APIPromise<KeyRevokeResponse> {
    return this._client.delete(path`/v1/auth/keys/${apiKeyID}`, options);
  }
}

export interface KeyCreateResponse {
  /**
   * Unique identifier for the API key
   */
  id: string;

  /**
   * The actual API key (only shown once)
   */
  api_key: string;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Organization ID
   */
  org_id: string;

  /**
   * User ID
   */
  user_id: string;

  /**
   * Label for the API key
   */
  label?: string | null;

  /**
   * Indicates successful creation
   */
  success?: boolean;
}

export interface KeyListResponse {
  /**
   * List of API keys
   */
  api_keys: Array<KeyListResponse.APIKey>;

  /**
   * Indicates successful retrieval
   */
  success?: boolean;
}

export namespace KeyListResponse {
  export interface APIKey {
    /**
     * Unique identifier for the API key
     */
    id: string;

    /**
     * Creation timestamp
     */
    created_at: string;

    /**
     * Organization ID
     */
    org_id: string;

    /**
     * User ID
     */
    user_id: string;

    /**
     * Label for the API key
     */
    label?: string | null;

    /**
     * Last usage timestamp
     */
    last_used_at?: string | null;
  }
}

export interface KeyRevokeResponse {
  /**
   * Confirmation message
   */
  message: string;

  /**
   * Indicates successful revocation
   */
  success?: boolean;
}

export interface KeyCreateParams {
  /**
   * Optional label for the API key
   */
  label?: string | null;
}

export declare namespace Keys {
  export {
    type KeyCreateResponse as KeyCreateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyRevokeResponse as KeyRevokeResponse,
    type KeyCreateParams as KeyCreateParams,
  };
}
