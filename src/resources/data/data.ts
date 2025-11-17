// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobAPI from './job';
import { Job, JobRetrieveStatusParams, JobRetrieveStatusResponse } from './job';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Data extends APIResource {
  job: JobAPI.Job = new JobAPI.Job(this._client);

  /**
   * Ingest data for asynchronous processing and memory integration.
   *
   *     Accepts various content types (text, messages, files) and processes them to extract information
   *     and integrate it into the user's memory system. Returns a job_id for tracking status.
   *
   *     **Request Parameters:**
   *     - user_id (str, required): User or persona ID
   *     - content_type (str, required): One of: "text", "messages", "pdf", "word", "image", "video", "audio", "file"
   *     - payload (str|dict|list, required): Content data (text string, message list, or base64 for files)
   *     - session_id (str, optional): Groups related content for session-based retrieval
   *     - timestamp (str, optional): ISO-8601 timestamp for historical data
   *     - filename (str, optional): Original filename for file uploads
   *
   *     **Response:**
   *     - job_id (str): Unique identifier for tracking the processing job
   *     - user_id (str): Confirmed user ID
   *     - content_type (str): Confirmed content type
   *     - status (str): Job status ('queued', 'accepted')
   *     - message (str): Status message
   *     - created_at (str): ISO-8601 timestamp
   *     - success (bool): True if accepted
   *
   *     **Example:**
   *     ```json
   *     {
   *         "user_id": "user-123",
   *         "content_type": "text",
   *         "payload": "Meeting notes from today's discussion"
   *     }
   *     ```
   *
   *     Returns 202 Accepted with job_id. Use /job/status to check processing status.
   *     Max payload: 5MB (JSON), 20MB (multipart). Requires JWT authentication.
   *
   * @example
   * ```ts
   * const response = await client.data.ingest({
   *   content_type: 'text',
   *   payload:
   *     'From: john@example.com\nTo: jane@example.com\nSubject: Hello\n\nHello Jane!',
   *   user_id: 'abc-123',
   * });
   * ```
   */
  ingest(body: DataIngestParams, options?: RequestOptions): APIPromise<DataIngestResponse> {
    return this._client.post('/v1/data/ingest', { body, ...options });
  }
}

/**
 * Response model for data ingestion
 */
export interface DataIngestResponse {
  /**
   * Content type that was processed
   */
  content_type: string;

  /**
   * Timestamp when job was created
   */
  created_at: string;

  /**
   * Unique job identifier for tracking
   */
  job_id: string;

  /**
   * Processing status ('accepted', 'queued', 'failed')
   */
  status: string;

  /**
   * User ID associated with the data
   */
  user_id: string;

  /**
   * Additional status or error message
   */
  message?: string | null;

  /**
   * Whether the request was accepted successfully
   */
  success?: boolean;
}

export interface DataIngestParams {
  /**
   * Content type (e.g., 'text', 'image', 'video', 'pdf', 'word', 'audio',
   * 'messages', 'file')
   */
  content_type: string;

  /**
   * Raw content as string, object, list (for messages), or base64 encoded data
   */
  payload: string | { [key: string]: unknown } | Array<unknown>;

  /**
   * User ID to associate the data with
   */
  user_id: string;

  /**
   * Filename of the uploaded file
   */
  filename?: string | null;

  /**
   * Session ID for grouping related ingested content and enabling session-based
   * retrieval
   */
  session_id?: string | null;

  /**
   * ISO-8601 timestamp to preserve original data moment
   */
  timestamp?: string | null;
}

Data.Job = Job;

export declare namespace Data {
  export { type DataIngestResponse as DataIngestResponse, type DataIngestParams as DataIngestParams };

  export {
    Job as Job,
    type JobRetrieveStatusResponse as JobRetrieveStatusResponse,
    type JobRetrieveStatusParams as JobRetrieveStatusParams,
  };
}
