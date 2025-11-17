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
   *     - Includes user information for the persona owner
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
   * Get all personas belonging to the authenticated user.
   *
   *     This endpoint:
   *     - Returns all personas created by the authenticated user
   *     - Includes persona metadata (name, description, creation date)
   *     - Provides user information for each persona
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
 * Response model for persona information
 */
export interface PersonaRetrieveResponse {
  created_at: string;

  description: string | null;

  name: string;

  persona_id: string;

  user_email: string | null;

  user_id: string;

  user_name: string | null;
}

/**
 * Response model for getting user personas
 */
export interface PersonaListResponse {
  /**
   * List of personas for the user
   */
  personas: Array<PersonaListResponse.Persona>;

  /**
   * Total number of personas for the user
   */
  total_count: number;

  /**
   * User ID
   */
  user_id: string;
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
