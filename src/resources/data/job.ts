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

export interface JobCancelParams {
  /**
   * Unique identifier for the job to cancel
   */
  job_id: string;
}

export declare namespace Job {
  export { type JobCancelResponse as JobCancelResponse, type JobCancelParams as JobCancelParams };
}
