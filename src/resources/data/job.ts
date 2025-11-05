// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Job extends APIResource {
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
 * Response model for job completion percentage
 */
export interface JobRetrieveStatusResponse {
  /**
   * The job ID
   */
  job_id: string;

  /**
   * Current job status
   */
  status: string;
}

export interface JobRetrieveStatusParams {
  /**
   * Unique identifier for the job
   */
  job_id: string;
}

export declare namespace Job {
  export {
    type JobRetrieveStatusResponse as JobRetrieveStatusResponse,
    type JobRetrieveStatusParams as JobRetrieveStatusParams,
  };
}
