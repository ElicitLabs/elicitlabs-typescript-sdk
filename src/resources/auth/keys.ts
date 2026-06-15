// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * Create a new API key
   */
  create(body: KeyCreateParams, options?: RequestOptions): APIPromise<KeyCreateResponse> {
    return this._client.post('/v1/auth/keys', { body, ...options });
  }

  /**
   * List the authenticated user's API keys
   */
  list(options?: RequestOptions): APIPromise<KeyListResponse> {
    return this._client.get('/v1/auth/keys', options);
  }

  /**
   * Revoke an API key
   */
  revoke(apiKeyID: string, options?: RequestOptions): APIPromise<KeyRevokeResponse> {
    return this._client.delete(path`/v1/auth/keys/${apiKeyID}`, options);
  }
}

export interface KeyCreateResponse {
  id: string;

  api_key: string;

  created_at: string;

  label: string | null;

  org_id: string;

  user_id: string;

  success?: boolean;
}

export interface KeyListResponse {
  api_keys: Array<KeyListResponse.APIKey>;

  success?: boolean;
}

export namespace KeyListResponse {
  export interface APIKey {
    id: string;

    created_at: string;

    label: string | null;

    last_used_at: string | null;

    org_id: string;

    user_id: string;
  }
}

export interface KeyRevokeResponse {
  message: string;

  success?: boolean;
}

export interface KeyCreateParams {
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
