// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Create a new project for the authenticated user.
   *
   *     This endpoint:
   *     - Creates a new project with the provided name and description
   *     - Associates the project with the authenticated user
   *     - The project will have access to user's preferences, episodes, and identity
   *     - Returns the created project with all metadata
   *
   *     **Authentication**: Requires valid API key or JWT token
   *
   * @example
   * ```ts
   * const project = await client.projects.create({
   *   name: 'My Research Project',
   * });
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.post('/v1/projects', { body, ...options });
  }

  /**
   * Retrieve details of a specific project by its unique identifier.
   *
   *     This endpoint:
   *     - Returns full project information including metadata
   *     - Includes user information for the project owner
   *     - Verifies the authenticated user owns the project
   *     - Returns 404 if project is not found
   *
   *     **Authentication**: Requires valid API key or JWT token in Authorization header
   *
   * @example
   * ```ts
   * const project = await client.projects.retrieve(
   *   'project_id',
   * );
   * ```
   */
  retrieve(projectID: string, options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/v1/projects/${projectID}`, options);
  }

  /**
   * Get all projects belonging to the authenticated user.
   *
   *     This endpoint:
   *     - Returns all projects created by the authenticated user
   *     - Includes project metadata (name, description, creation date)
   *     - Projects inherit access to user's preferences, episodes, and identity
   *
   *     **Authentication**: Requires valid API key or JWT token
   *
   * @example
   * ```ts
   * const projects = await client.projects.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/v1/projects', options);
  }

  /**
   * Delete a project by its ID.
   *
   *     This endpoint:
   *     - Permanently deletes the project
   *     - Verifies the authenticated user owns the project
   *     - Returns confirmation of deletion
   *
   *     **Note**: This action cannot be undone.
   *
   *     **Authentication**: Requires valid API key or JWT token
   *
   * @example
   * ```ts
   * const project = await client.projects.delete('project_id');
   * ```
   */
  delete(projectID: string, options?: RequestOptions): APIPromise<ProjectDeleteResponse> {
    return this._client.delete(path`/v1/projects/${projectID}`, options);
  }
}

/**
 * Response model for creating a project
 */
export interface ProjectCreateResponse {
  /**
   * Success message
   */
  message: string;

  /**
   * The created project
   */
  project: ProjectCreateResponse.Project;
}

export namespace ProjectCreateResponse {
  /**
   * The created project
   */
  export interface Project {
    created_at: string;

    description: string | null;

    name: string;

    project_id: string;

    updated_at: string | null;

    user_email: string | null;

    user_id: string;

    user_name: string | null;
  }
}

/**
 * Response model for project information
 */
export interface ProjectRetrieveResponse {
  created_at: string;

  description: string | null;

  name: string;

  project_id: string;

  updated_at: string | null;

  user_email: string | null;

  user_id: string;

  user_name: string | null;
}

/**
 * Response model for getting user projects
 */
export interface ProjectListResponse {
  /**
   * List of projects for the user
   */
  projects: Array<ProjectListResponse.Project>;

  /**
   * Total number of projects for the user
   */
  total_count: number;

  /**
   * User ID
   */
  user_id: string;
}

export namespace ProjectListResponse {
  /**
   * Response model for project information
   */
  export interface Project {
    created_at: string;

    description: string | null;

    name: string;

    project_id: string;

    updated_at: string | null;

    user_email: string | null;

    user_id: string;

    user_name: string | null;
  }
}

/**
 * Response model for deleting a project
 */
export interface ProjectDeleteResponse {
  /**
   * Success message
   */
  message: string;

  /**
   * ID of deleted project
   */
  project_id: string;
}

export interface ProjectCreateParams {
  /**
   * Project name
   */
  name: string;

  /**
   * Optional project description
   */
  description?: string | null;
}

export declare namespace Projects {
  export {
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectCreateParams as ProjectCreateParams,
  };
}
