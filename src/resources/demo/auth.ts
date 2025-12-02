// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  /**
   * Authenticate user with Google OAuth and return JWT token.
   *
   *     This endpoint:
   *     - Verifies Google OAuth credential
   *     - Creates new user if doesn't exist or links existing account
   *     - Generates JWT authentication token
   *     - Sends welcome email for new Google users
   *     - Returns user information and access token
   *
   *     **Authentication**: No authentication required
   *
   * @example
   * ```ts
   * const response =
   *   await client.demo.auth.authenticateWithGoogle({
   *     credential: 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ij...',
   *   });
   * ```
   */
  authenticateWithGoogle(
    body: AuthAuthenticateWithGoogleParams,
    options?: RequestOptions,
  ): APIPromise<AuthAuthenticateWithGoogleResponse> {
    return this._client.post('/v1/demo/auth/google', { body, ...options });
  }
}

/**
 * Response model for authentication
 */
export interface AuthAuthenticateWithGoogleResponse {
  /**
   * JWT access token
   */
  access_token: string;

  /**
   * Token expiration time in seconds
   */
  expires_in: number;

  /**
   * User information
   */
  user: { [key: string]: unknown };

  /**
   * Token type
   */
  token_type?: string;
}

export interface AuthAuthenticateWithGoogleParams {
  /**
   * JWT token from Google Sign-In
   */
  credential: string;
}

export declare namespace Auth {
  export {
    type AuthAuthenticateWithGoogleResponse as AuthAuthenticateWithGoogleResponse,
    type AuthAuthenticateWithGoogleParams as AuthAuthenticateWithGoogleParams,
  };
}
