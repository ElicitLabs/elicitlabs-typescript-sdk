// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Create a new project for a user.
   *
   *     This endpoint:
   *     - Creates a new project with the provided name and description
   *     - Associates the project with the specified user_id, or the authenticated user if not provided
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
   *     - Verifies the authenticated user owns the project or belongs to the same org
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
  retrieve(
    projectID: string,
    query: ProjectRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/v1/projects/${projectID}`, { query, ...options });
  }

  /**
   * Get projects accessible to the caller.
   *
   *     This endpoint:
   *     - **No user_id param** (or user_id == root user): root user → returns **all** projects across the org
   *     - **user_id param** (sub-user): returns only that sub-user's projects
   *     - Includes project metadata (name, description, creation date)
   *
   *     **Authentication**: Requires valid API key or JWT token
   *
   * @example
   * ```ts
   * const projects = await client.projects.list();
   * ```
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/v1/projects', { query, ...options });
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
  delete(
    projectID: string,
    params: ProjectDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectDeleteResponse> {
    const { user_id } = params ?? {};
    return this._client.delete(path`/v1/projects/${projectID}`, { query: { user_id }, ...options });
  }

  /**
   * Deep-clone a project, including all its Neo4j memory graph data and referenced
   * GCS assets, into a new independent project.
   *
   *     This endpoint:
   *     - Creates a new project in PostgreSQL with the source project's metadata
   *     - Copies all GCS files (images, objects) under a new project path
   *     - Deep-copies all Neo4j nodes (episodes, entities, preferences, identity,
   *       hierarchical data, multimodal nodes) with new UUIDs
   *     - Rewrites GCS URLs in ImageNode/ObjectNode to point at the copied files
   *     - Recreates all inter-node relationships
   *
   *     The clone is fully independent — changes to one project do not affect the other.
   *
   *     **Authentication**: Requires valid API key or JWT token
   *
   * @example
   * ```ts
   * const response = await client.projects.clone({
   *   project_id: 'project_id',
   * });
   * ```
   */
  clone(body: ProjectCloneParams, options?: RequestOptions): APIPromise<ProjectCloneResponse> {
    return this._client.post('/v1/projects/clone', { body, ...options });
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

    /**
     * Project type override: 'creative_design' or 'general'. When set, skips LLM
     * classification.
     */
    project_type?: string | null;
  }
}

/**
 * Response model for retrieving a single project (consistent with create/update)
 */
export interface ProjectRetrieveResponse {
  /**
   * The retrieved project
   */
  project: ProjectRetrieveResponse.Project;
}

export namespace ProjectRetrieveResponse {
  /**
   * The retrieved project
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

    /**
     * Project type override: 'creative_design' or 'general'. When set, skips LLM
     * classification.
     */
    project_type?: string | null;
  }
}

/**
 * Response model for getting user projects
 */
export interface ProjectListResponse {
  /**
   * List of projects
   */
  projects: Array<ProjectListResponse.Project>;

  /**
   * Total number of projects
   */
  total_count: number;

  /**
   * Organization ID (set when returning org-wide projects)
   */
  org_id?: string | null;

  /**
   * User ID (set when filtering by user)
   */
  user_id?: string | null;
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

    /**
     * Project type override: 'creative_design' or 'general'. When set, skips LLM
     * classification.
     */
    project_type?: string | null;
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

/**
 * Response model for cloning a project
 */
export interface ProjectCloneResponse {
  /**
   * Job ID for tracking the clone operation status via /v1/data/job/status
   */
  job_id: string;

  /**
   * Success message
   */
  message: string;

  /**
   * The newly cloned project
   */
  project: ProjectCloneResponse.Project;

  /**
   * ID of the original project that was cloned
   */
  source_project_id: string;
}

export namespace ProjectCloneResponse {
  /**
   * The newly cloned project
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

    /**
     * Project type override: 'creative_design' or 'general'. When set, skips LLM
     * classification.
     */
    project_type?: string | null;
  }
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

  /**
   * Project type override. When set, skips LLM classification during content
   * ingestion. Use 'creative_design' for artistic/design projects, 'general' for
   * documentation/business content.
   */
  project_type?: 'creative_design' | 'general';

  /**
   * User ID to associate the project with. If not provided, uses the authenticated
   * user's ID.
   */
  user_id?: string | null;
}

export interface ProjectRetrieveParams {
  user_id?: string | null;
}

export interface ProjectListParams {
  user_id?: string | null;
}

export interface ProjectDeleteParams {
  user_id?: string | null;
}

export interface ProjectCloneParams {
  /**
   * ID of the project to clone
   */
  project_id: string;

  /**
   * Optional URL the server will POST to when the clone job reaches a terminal
   * state.
   */
  callback_url?: string | null;

  /**
   * Description for the cloned project. Defaults to the original's description.
   */
  description?: string | null;

  /**
   * Name for the cloned project. Defaults to '{original_name} (Copy)'.
   */
  name?: string | null;

  /**
   * Optional email address to notify when the clone job completes.
   */
  notification_email?: string | null;

  /**
   * User ID of the source project owner. If not provided, uses the authenticated
   * user's ID.
   */
  source_user_id?: string;

  /**
   * Target user ID to own the cloned project. If not provided, uses the
   * authenticated user.
   */
  target_user_id?: string | null;
}

export declare namespace Projects {
  export {
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectCloneResponse as ProjectCloneResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectListParams as ProjectListParams,
    type ProjectDeleteParams as ProjectDeleteParams,
    type ProjectCloneParams as ProjectCloneParams,
  };
}
