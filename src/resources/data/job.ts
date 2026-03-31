// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Job extends APIResource {
  /**
   * Cancel a running or queued ingestion job and all of its descendant sub-jobs.
   *
   *     Jobs that are already completed ('done') or failed ('error') will not be affected.
   *     Cancelled jobs will be skipped by the ingester when Cloud Tasks delivers them.
   *
   *     **Request Parameters:**
   *     - job_id (str, required): The root job ID to cancel (returned from /ingest)
   *
   *     **Response:**
   *     - job_id (str): The root job ID
   *     - cancelled_count (int): Number of jobs cancelled (parent + descendants)
   *     - status (str): 'cancelled' if any jobs were cancelled, 'already_terminal' if all were already done/error
   *
   *     Requires JWT authentication.
   *
   * @example
   * ```ts
   * const response = await client.data.job.cancel({
   *   job_id: '456e7890-e89b-12d3-a456-426614174001',
   * });
   * ```
   */
  cancel(body: JobCancelParams, options?: RequestOptions): APIPromise<JobCancelResponse> {
    return this._client.post('/v1/data/job/cancel', { body, ...options });
  }

  /**
   * Retrieve the current processing status of an ingestion job.
   *
   *     Use the job_id returned from /ingest to check if processing is complete.
   *
   *     **Request Parameters:**
   *     - job_id (str, required): Unique identifier from /ingest response
   *
   *     **Response:**
   *     - job_id (str): The requested job identifier
   *     - status (str): Current status - "queued", "processing", "completed", "failed", or "cancelled"
   *
   *     **Example:**
   *     ```json
   *     {
   *         "job_id": "123e4567-e89b-12d3-a456-426614174000"
   *     }
   *     ```
   *
   *     Returns 200 OK with current status. Poll periodically until status is "completed" or "failed".
   *     Requires JWT authentication.
   *
   * @example
   * ```ts
   * const response = await client.data.job.retrieveStatus({
   *   job_id: '456e7890-e89b-12d3-a456-426614174001',
   * });
   * ```
   */
  retrieveStatus(
    body: JobRetrieveStatusParams,
    options?: RequestOptions,
  ): APIPromise<JobRetrieveStatusResponse> {
    return this._client.post('/v1/data/job/status', { body, ...options });
  }
}

/**
 * Response model for job cancellation
 */
export interface JobCancelResponse {
  /**
   * Number of jobs cancelled (including descendants)
   */
  cancelled_count: number;

  /**
   * The root job ID that was cancelled
   */
  job_id: string;

  /**
   * Result status: 'cancelled' or 'already_terminal'
   */
  status: string;
}

/**
 * Response model for job completion percentage
 */
export interface JobRetrieveStatusResponse {
  /**
   * The job ID
   */
  job_id: string;

  /**
   * Current job status: done, partial, processing, not started, error, cancelled
   */
  status: string;

  /**
   * Completion percentage (0-100)
   */
  completion?: number;

  /**
   * Error details (available when status is 'error')
   */
  error_details?: string | null;

  /**
   * Type of job (e.g. 'ingest', 'clone_project', 'generation_image')
   */
  job_type?: string | null;

  /**
   * Job result data (available when status is 'done')
   */
  result?: { [key: string]: unknown } | null;
}

export interface JobCancelParams {
  /**
   * Unique identifier for the job to cancel
   */
  job_id: string;
}

export interface JobRetrieveStatusParams {
  /**
   * Unique identifier for the job
   */
  job_id: string;
}

export declare namespace Job {
  export {
    type JobCancelResponse as JobCancelResponse,
    type JobRetrieveStatusResponse as JobRetrieveStatusResponse,
    type JobCancelParams as JobCancelParams,
    type JobRetrieveStatusParams as JobRetrieveStatusParams,
  };
}
