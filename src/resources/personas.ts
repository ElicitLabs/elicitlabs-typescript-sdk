// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Personas extends APIResource {
  /**
   * Create a new persona for the authenticated user.
   *
   *     This endpoint:
   *     - Creates a new persona with the provided name and description
   *     - Associates the persona with the authenticated user
   *     - Returns the created persona with all metadata
   *
   *     **Authentication**: Requires valid API key or JWT token
   *
   * @example
   * ```ts
   * const persona = await client.personas.create({
   *   name: 'Creative Writer',
   * });
   * ```
   */
  create(body: PersonaCreateParams, options?: RequestOptions): APIPromise<PersonaCreateResponse> {
    return this._client.post('/v1/personas', { body, ...options });
  }

  /**
   * Retrieve details of a specific persona by its unique identifier.
   *
   *     This endpoint:
   *     - Returns full persona information including metadata
   *     - Any user in the same organization can access any persona
   *     - Returns 404 if persona is not found
   *
   *     **Authentication**: Requires valid API key or JWT token in Authorization header
   *
   * @example
   * ```ts
   * const persona = await client.personas.retrieve(
   *   'persona_id',
   * );
   * ```
   */
  retrieve(personaID: string, options?: RequestOptions): APIPromise<PersonaRetrieveResponse> {
    return this._client.get(path`/v1/personas/${personaID}`, options);
  }

  /**
   * Get all personas accessible to the caller.
   *
   *     This endpoint:
   *     - Returns **all** personas across the organization (personas are shared org-wide)
   *     - All users in the org can see all org personas
   *     - Includes persona metadata (name, description, creation date)
   *
   *     **Authentication**: Requires valid API key or JWT token
   *
   * @example
   * ```ts
   * const personas = await client.personas.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<PersonaListResponse> {
    return this._client.get('/v1/personas', options);
  }
}

/**
 * Response model for creating a persona
 */
export interface PersonaCreateResponse {
  /**
   * Success message
   */
  message: string;

  /**
   * The created persona
   */
  persona: PersonaCreateResponse.Persona;
}

export namespace PersonaCreateResponse {
  /**
   * The created persona
   */
  export interface Persona {
    created_at: string;

    description: string | null;

    name: string;

    persona_id: string;

    user_email: string | null;

    user_id: string;

    user_name: string | null;
  }
}

/**
 * Response model for retrieving a single persona (consistent with create/update)
 */
export interface PersonaRetrieveResponse {
  /**
   * The retrieved persona
   */
  persona: PersonaRetrieveResponse.Persona;
}

export namespace PersonaRetrieveResponse {
  /**
   * The retrieved persona
   */
  export interface Persona {
    created_at: string;

    description: string | null;

    name: string;

    persona_id: string;

    user_email: string | null;

    user_id: string;

    user_name: string | null;
  }
}

/**
 * Response model for getting personas
 */
export interface PersonaListResponse {
  /**
   * List of personas
   */
  personas: Array<PersonaListResponse.Persona>;

  /**
   * Total number of personas
   */
  total_count: number;

  /**
   * Organization ID (set when returning org-wide personas)
   */
  org_id?: string | null;

  /**
   * User ID (set when filtering by user)
   */
  user_id?: string | null;
}

export namespace PersonaListResponse {
  /**
   * Response model for persona information
   */
  export interface Persona {
    created_at: string;

    description: string | null;

    name: string;

    persona_id: string;

    user_email: string | null;

    user_id: string;

    user_name: string | null;
  }
}

export interface PersonaCreateParams {
  /**
   * Persona name
   */
  name: string;

  /**
   * Optional persona description
   */
  description?: string | null;
}

export declare namespace Personas {
  export {
    type PersonaCreateResponse as PersonaCreateResponse,
    type PersonaRetrieveResponse as PersonaRetrieveResponse,
    type PersonaListResponse as PersonaListResponse,
    type PersonaCreateParams as PersonaCreateParams,
  };
}
