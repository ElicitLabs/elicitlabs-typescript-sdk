// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Link extends APIResource {
  /**
   * Link a user to a persona by creating a personal clone of the template persona's
   * knowledge graph. The clone has its own persona_id and diverges independently as
   * new data is ingested.
   *
   *     When the user later calls any endpoint with the *template* persona_id,
   *     the system transparently routes to the clone.
   *
   * @example
   * ```ts
   * const link = await client.personas.link.create(
   *   'persona_id',
   *   { user_id: 'user_id' },
   * );
   * ```
   */
  create(
    personaID: string,
    body: LinkCreateParams,
    options?: RequestOptions,
  ): APIPromise<LinkCreateResponse> {
    return this._client.post(path`/v1/personas/${personaID}/link`, { body, ...options });
  }

  /**
   * Remove a user's link to a persona. The user will no longer see the persona's
   * memories.
   *
   * @example
   * ```ts
   * const link = await client.personas.link.delete('user_id', {
   *   persona_id: 'persona_id',
   * });
   * ```
   */
  delete(userID: string, params: LinkDeleteParams, options?: RequestOptions): APIPromise<LinkDeleteResponse> {
    const { persona_id } = params;
    return this._client.delete(path`/v1/personas/${persona_id}/link/${userID}`, options);
  }
}

/**
 * Response model for linking a user to a persona
 */
export interface LinkCreateResponse {
  message: string;

  persona_id: string;

  user_id: string;

  cloned_persona_id?: string | null;

  /**
   * Job ID for tracking the clone operation status via /v1/data/job/status
   */
  job_id?: string | null;
}

/**
 * Response model for linking a user to a persona
 */
export interface LinkDeleteResponse {
  message: string;

  persona_id: string;

  user_id: string;

  cloned_persona_id?: string | null;

  /**
   * Job ID for tracking the clone operation status via /v1/data/job/status
   */
  job_id?: string | null;
}

export interface LinkCreateParams {
  /**
   * The user ID to link
   */
  user_id: string;

  /**
   * Optional URL the server will POST to when the clone job reaches a terminal
   * state.
   */
  callback_url?: string | null;

  /**
   * Optional email address to notify when the clone job completes.
   */
  notification_email?: string | null;
}

export interface LinkDeleteParams {
  persona_id: string;
}

export declare namespace Link {
  export {
    type LinkCreateResponse as LinkCreateResponse,
    type LinkDeleteResponse as LinkDeleteResponse,
    type LinkCreateParams as LinkCreateParams,
    type LinkDeleteParams as LinkDeleteParams,
  };
}
