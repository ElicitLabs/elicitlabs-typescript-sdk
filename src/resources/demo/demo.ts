// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthAPI from './auth';
import { Auth, AuthAuthenticateWithGoogleParams, AuthAuthenticateWithGoogleResponse } from './auth';
import * as OrgAPI from './org';
import { Org, OrgListOrganizationMembersParams, OrgListOrganizationMembersResponse } from './org';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Demo extends APIResource {
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
  org: OrgAPI.Org = new OrgAPI.Org(this._client);

  /**
   * Create a new user account and return JWT authentication token.
   *
   *     This endpoint:
   *     - Creates a new user with email and password
   *     - Automatically creates a default organization if not provided
   *     - Generates JWT authentication token
   *     - Sends welcome email to the new user
   *     - Returns user information and access token
   *
   *     **Authentication**: No authentication required
   *
   * @example
   * ```ts
   * const response = await client.demo.createUser({
   *   email: 'user@example.com',
   *   name: 'John Doe',
   *   password: 'securepassword123',
   * });
   * ```
   */
  createUser(body: DemoCreateUserParams, options?: RequestOptions): APIPromise<DemoCreateUserResponse> {
    return this._client.post('/v1/demo/signup', { body, ...options });
  }

  /**
   * Generate password reset link for a user (for testing or admin purposes).
   *
   *     This endpoint:
   *     - Generates password reset token and URL
   *     - Returns the full reset link
   *     - Token expires after 1 hour
   *     - Useful for testing or admin tools
   *
   *     **Authentication**: No authentication required
   *
   * @example
   * ```ts
   * const response = await client.demo.generateResetLink({
   *   email: 'user@example.com',
   * });
   * ```
   */
  generateResetLink(
    body: DemoGenerateResetLinkParams,
    options?: RequestOptions,
  ): APIPromise<DemoGenerateResetLinkResponse> {
    return this._client.post('/v1/demo/get-reset-link', { body, ...options });
  }

  /**
   * Send password reset email to user's email address.
   *
   *     This endpoint:
   *     - Generates password reset token
   *     - Sends reset link via email
   *     - Token expires after 1 hour
   *     - Returns generic success message for security
   *
   *     **Authentication**: No authentication required
   *
   * @example
   * ```ts
   * const response = await client.demo.requestPasswordReset({
   *   email: 'user@example.com',
   * });
   * ```
   */
  requestPasswordReset(
    body: DemoRequestPasswordResetParams,
    options?: RequestOptions,
  ): APIPromise<DemoRequestPasswordResetResponse> {
    return this._client.post('/v1/demo/forgot-password', { body, ...options });
  }

  /**
   * Reset user password using the token from password reset email.
   *
   *     This endpoint:
   *     - Verifies the reset token validity
   *     - Updates user password
   *     - Sends password changed notification email
   *     - Invalidates the reset token after use
   *
   *     **Authentication**: Requires valid reset token (no user authentication)
   *
   * @example
   * ```ts
   * const response = await client.demo.resetPassword({
   *   token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...',
   *   confirm_password: 'newpassword456',
   *   new_password: 'newpassword456',
   * });
   * ```
   */
  resetPassword(
    body: DemoResetPasswordParams,
    options?: RequestOptions,
  ): APIPromise<DemoResetPasswordResponse> {
    return this._client.post('/v1/demo/reset-password', { body, ...options });
  }

  /**
   * Retrieve information about the currently authenticated user.
   *
   *     This endpoint:
   *     - Returns user profile information
   *     - Includes organization details
   *     - Requires valid JWT token
   *
   *     **Authentication**: Requires valid JWT token in Authorization header
   *
   * @example
   * ```ts
   * const response = await client.demo.retrieveCurrentUser();
   * ```
   */
  retrieveCurrentUser(options?: RequestOptions): APIPromise<DemoRetrieveCurrentUserResponse> {
    return this._client.get('/v1/demo/me', options);
  }

  /**
   * Authenticate user with email and password and return JWT token.
   *
   *     This endpoint:
   *     - Validates user credentials (email and password)
   *     - Generates JWT authentication token
   *     - Returns user information and access token
   *     - Token expires after 24 hours
   *
   *     **Authentication**: No authentication required
   *
   * @example
   * ```ts
   * const response = await client.demo.signIn({
   *   email: 'user@example.com',
   *   password: 'securepassword123',
   * });
   * ```
   */
  signIn(body: DemoSignInParams, options?: RequestOptions): APIPromise<DemoSignInResponse> {
    return this._client.post('/v1/demo/signin', { body, ...options });
  }

  /**
   * Submit an early access request for the platform.
   *
   *     This endpoint:
   *     - Accepts user information for early access
   *     - Stores the submission in the database
   *     - Returns confirmation with submission details
   *     - Prevents duplicate submissions by email
   *
   *     **Note**: Each email address can only submit once.
   *
   * @example
   * ```ts
   * const response = await client.demo.submitEarlyAccessRequest(
   *   { email: 'user@example.com', name: 'John Doe' },
   * );
   * ```
   */
  submitEarlyAccessRequest(
    body: DemoSubmitEarlyAccessRequestParams,
    options?: RequestOptions,
  ): APIPromise<DemoSubmitEarlyAccessRequestResponse> {
    return this._client.post('/v1/demo/early-access', { body, ...options });
  }
}

/**
 * Response model for authentication
 */
export interface DemoCreateUserResponse {
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

/**
 * Response model for password reset link
 */
export interface DemoGenerateResetLinkResponse {
  /**
   * Reset token
   */
  token: string;

  /**
   * Token expiration time in seconds
   */
  expires_in: number;

  /**
   * Password reset URL
   */
  reset_url: string;
}

/**
 * Response model for forgot password
 */
export interface DemoRequestPasswordResetResponse {
  /**
   * Success message
   */
  message: string;
}

/**
 * Response model for password reset
 */
export interface DemoResetPasswordResponse {
  /**
   * Success message
   */
  message: string;

  /**
   * When the password was reset
   */
  timestamp: string;
}

/**
 * Response model for user information
 */
export interface DemoRetrieveCurrentUserResponse {
  created_at: string;

  email: string;

  name: string | null;

  org_id: string | null;

  org_name: string | null;

  user_id: string;
}

/**
 * Response model for authentication
 */
export interface DemoSignInResponse {
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

/**
 * Response model for early access submission
 */
export interface DemoSubmitEarlyAccessRequestResponse {
  /**
   * Submission ID
   */
  id: string;

  /**
   * Submission timestamp
   */
  created_at: string;

  /**
   * User's email address
   */
  email: string;

  /**
   * Success message
   */
  message: string;

  /**
   * User's full name
   */
  name: string;

  /**
   * Company size range
   */
  company_size?: string | null;

  /**
   * User's industry
   */
  industry?: string | null;

  /**
   * User's role/job title
   */
  role?: string | null;
}

export interface DemoCreateUserParams {
  /**
   * User's email address
   */
  email: string;

  /**
   * User's full name
   */
  name: string;

  /**
   * User's password (minimum 6 characters)
   */
  password: string;

  /**
   * Optional organization ID. If not provided, a default organization will be
   * created automatically with the format 'Org: {user_name}'
   */
  org_id?: string | null;
}

export interface DemoGenerateResetLinkParams {
  /**
   * User's email address
   */
  email: string;
}

export interface DemoRequestPasswordResetParams {
  /**
   * User's email address
   */
  email: string;
}

export interface DemoResetPasswordParams {
  /**
   * Password reset token
   */
  token: string;

  /**
   * Confirmation of new password
   */
  confirm_password: string;

  /**
   * New password (minimum 6 characters)
   */
  new_password: string;
}

export interface DemoSignInParams {
  /**
   * User's email address
   */
  email: string;

  /**
   * User's password
   */
  password: string;
}

export interface DemoSubmitEarlyAccessRequestParams {
  /**
   * User's email address
   */
  email: string;

  /**
   * User's full name
   */
  name: string;

  /**
   * Company size range
   */
  company_size?: string | null;

  /**
   * User's industry
   */
  industry?: string | null;

  /**
   * User's role/job title
   */
  role?: string | null;
}

Demo.Auth = Auth;
Demo.Org = Org;

export declare namespace Demo {
  export {
    type DemoCreateUserResponse as DemoCreateUserResponse,
    type DemoGenerateResetLinkResponse as DemoGenerateResetLinkResponse,
    type DemoRequestPasswordResetResponse as DemoRequestPasswordResetResponse,
    type DemoResetPasswordResponse as DemoResetPasswordResponse,
    type DemoRetrieveCurrentUserResponse as DemoRetrieveCurrentUserResponse,
    type DemoSignInResponse as DemoSignInResponse,
    type DemoSubmitEarlyAccessRequestResponse as DemoSubmitEarlyAccessRequestResponse,
    type DemoCreateUserParams as DemoCreateUserParams,
    type DemoGenerateResetLinkParams as DemoGenerateResetLinkParams,
    type DemoRequestPasswordResetParams as DemoRequestPasswordResetParams,
    type DemoResetPasswordParams as DemoResetPasswordParams,
    type DemoSignInParams as DemoSignInParams,
    type DemoSubmitEarlyAccessRequestParams as DemoSubmitEarlyAccessRequestParams,
  };

  export {
    Auth as Auth,
    type AuthAuthenticateWithGoogleResponse as AuthAuthenticateWithGoogleResponse,
    type AuthAuthenticateWithGoogleParams as AuthAuthenticateWithGoogleParams,
  };

  export {
    Org as Org,
    type OrgListOrganizationMembersResponse as OrgListOrganizationMembersResponse,
    type OrgListOrganizationMembersParams as OrgListOrganizationMembersParams,
  };
}
