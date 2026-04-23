// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobAPI from './job';
import { Job, JobCancelParams, JobCancelResponse } from './job';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Data extends APIResource {
  job: JobAPI.Job = new JobAPI.Job(this._client);

  /**
   * **Step 2 of 2** — After uploading the file to the signed URL obtained from
   * `/ingest/upload-url`, call this endpoint to trigger the ingest pipeline.
   *
   *     The server verifies the file exists in GCS, auto-detects the content type
   *     if it was not provided, and queues the processing job.
   *
   *     Returns the same `IngestResponse` as the regular `/ingest` endpoint.
   *
   * @example
   * ```ts
   * const response = await client.data.confirmUpload({
   *   job_id: 'job_id',
   *   object_key: 'object_key',
   *   user_id: 'user_id',
   * });
   * ```
   */
  confirmUpload(
    body: DataConfirmUploadParams,
    options?: RequestOptions,
  ): APIPromise<DataConfirmUploadResponse> {
    return this._client.post('/v1/data/ingest/confirm-upload', { body, ...options });
  }

  /**
   * **Step 1 of 2** — Obtain a time-limited signed URL for uploading a file directly
   * to cloud storage (GCS).
   *
   *     Use this instead of `/ingest` when the payload is large (e.g. > 32 MB)
   *     to avoid sending the entire file through the API server.
   *
   *     **Flow:**
   *     1. Call this endpoint → receive `upload_url`, `job_id`, `object_key`
   *     2. HTTP **PUT** the raw file bytes to `upload_url`
   *     3. Call `/ingest/confirm-upload` with the `job_id` and `object_key`
   *        to kick off the processing pipeline
   *
   *     The signed URL expires after the time indicated by `expires_in` (default 1 hour).
   *
   * @example
   * ```ts
   * const response = await client.data.getUploadURL({
   *   user_id: 'user_id',
   * });
   * ```
   */
  getUploadURL(body: DataGetUploadURLParams, options?: RequestOptions): APIPromise<DataGetUploadURLResponse> {
    return this._client.post('/v1/data/ingest/upload-url', { body, ...options });
  }

  /**
   * Ingest data for asynchronous processing
   *
   *     Accepts various content types (text, messages, files) and processes them to extract information
   *     and integrate it into the user's memory system. Returns a job_id for tracking status.
   *
   *     **Entity Resolution:**
   *     - user_id (str, required): Always required - the main user identifier
   *     - persona_id (str, optional): If provided, data is ingested to this persona instead of user
   *     - project_id (str, optional): If provided, data is ingested to this project (inherits from user)
   *
   *     Priority: persona_id > project_id > user_id
   *
   *     **Request Parameters:**
   *     - content_type (str, required): One of: "text", "messages", "pdf", "word", "image", "video", "audio", "file"
   *     - payload (str|dict|list, required): Content data (text string, message list, or base64 for files)
   *     - content_description (str, optional): Description of the content being ingested (e.g., 'Logo design concepts', 'Meeting notes')
   *     - session_id (str, optional): Groups related content for session-based retrieval
   *     - timestamp (str, optional): ISO-8601 timestamp for historical data
   *     - filename (str, optional): Original filename for file uploads
   *
   *     **Response:**
   *     - job_id (str): Unique identifier for tracking the processing job
   *     - user_id (str): Confirmed entity ID (user, persona, or project)
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
   *         "persona_id": null,
   *         "project_id": "project-456",
   *         "content_type": "text",
   *         "payload": "Meeting notes from today's discussion",
   *         "content_description": "Meeting notes from today's discussion"
   *     }
   *     ```
   *
   *     Returns 202 Accepted with job_id. Use /job/status to check processing status.
   *     Max payload: 5MB (JSON), 20MB (multipart). Requires JWT authentication.
   *
   * @example
   * ```ts
   * const response = await client.data.ingest({
   *   payload:
   *     'From: john@example.com\nTo: jane@example.com\nSubject: Hello\n\nHello Jane!',
   *   user_id: 'user-123',
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
export interface DataConfirmUploadResponse {
  /**
   * Unique job identifier for tracking
   */
  job_id: string;

  /**
   * Processing status ('accepted', 'queued', 'failed')
   */
  status: string;

  /**
   * Additional status or error message
   */
  message?: string | null;

  /**
   * Whether the request was accepted successfully
   */
  success?: boolean;
}

/**
 * Response model for signed upload URL
 */
export interface DataGetUploadURLResponse {
  /**
   * Seconds until the upload URL expires
   */
  expires_in: number;

  /**
   * Job ID to use when confirming the upload
   */
  job_id: string;

  /**
   * GCS object key where the file will live
   */
  object_key: string;

  /**
   * Signed URL for uploading the file via HTTP PUT
   */
  upload_url: string;

  /**
   * Whether the URL was generated
   */
  success?: boolean;
}

/**
 * Response model for data ingestion
 */
export interface DataIngestResponse {
  /**
   * Unique job identifier for tracking
   */
  job_id: string;

  /**
   * Processing status ('accepted', 'queued', 'failed')
   */
  status: string;

  /**
   * Additional status or error message
   */
  message?: string | null;

  /**
   * Whether the request was accepted successfully
   */
  success?: boolean;
}

export interface DataConfirmUploadParams {
  /**
   * Job ID returned by /ingest/upload-url
   */
  job_id: string;

  /**
   * GCS object key returned by /ingest/upload-url
   */
  object_key: string;

  /**
   * User ID (must match the upload-url request)
   */
  user_id: string;

  /**
   * Optional URL the server will POST to when the job reaches a terminal state.
   */
  callback_url?: string | null;

  content_description?: string | null;

  /**
   * Content category (auto-detected from file bytes if omitted)
   */
  content_type?: string | null;

  filename?: string | null;

  /**
   * Optional email address to notify when the job reaches a terminal state.
   */
  notification_email?: string | null;

  persona_id?: string | null;

  project_id?: string | null;

  session_id?: string | null;

  timestamp?: string | null;
}

export interface DataGetUploadURLParams {
  /**
   * User ID (always required)
   */
  user_id: string;

  /**
   * Optional URL the server will POST to when the job reaches a terminal state.
   */
  callback_url?: string | null;

  /**
   * Optional description of the content being ingested
   */
  content_description?: string | null;

  /**
   * Content category: 'text', 'image', 'video', 'pdf', 'audio', 'messages', 'file'.
   * If omitted, the category is auto-detected after the file is uploaded.
   */
  content_type?: string | null;

  /**
   * Filename of the file to upload
   */
  filename?: string | null;

  /**
   * Optional email address to notify when the job reaches a terminal state.
   */
  notification_email?: string | null;

  /**
   * Optional persona ID. If provided, data is ingested to this persona
   */
  persona_id?: string | null;

  /**
   * Optional project ID. If provided, data is ingested to this project
   */
  project_id?: string | null;

  /**
   * Session ID for grouping related ingested content
   */
  session_id?: string | null;

  /**
   * ISO-8601 timestamp to preserve original data moment
   */
  timestamp?: string | null;
}

export interface DataIngestParams {
  /**
   * Raw content as string, object, list (for messages), or base64 encoded data
   */
  payload: string | { [key: string]: unknown } | Array<unknown>;

  /**
   * User ID (always required)
   */
  user_id: string;

  /**
   * Optional URL the server will POST to when the job reaches a terminal state
   * (done, error, cancelled). The payload will match the /v1/data/job/status
   * response shape.
   */
  callback_url?: string | null;

  /**
   * Optional description of the content being ingested (e.g., 'Logo design
   * concepts', 'Meeting notes')
   */
  content_description?: string | null;

  /**
   * Content category: 'text', 'image', 'video', 'pdf', 'audio', 'messages', 'file'.
   * If omitted, the category is auto-detected from the uploaded file bytes.
   */
  content_type?: string | null;

  /**
   * Filename of the uploaded file
   */
  filename?: string | null;

  /**
   * Optional email address to notify when the job reaches a terminal state.
   */
  notification_email?: string | null;

  /**
   * Optional persona ID. If provided, data is ingested to this persona instead of
   * the user
   */
  persona_id?: string | null;

  /**
   * Optional project ID. If provided, data is ingested to this project (inherits
   * from user)
   */
  project_id?: string | null;

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
  export {
    type DataConfirmUploadResponse as DataConfirmUploadResponse,
    type DataGetUploadURLResponse as DataGetUploadURLResponse,
    type DataIngestResponse as DataIngestResponse,
    type DataConfirmUploadParams as DataConfirmUploadParams,
    type DataGetUploadURLParams as DataGetUploadURLParams,
    type DataIngestParams as DataIngestParams,
  };

  export { Job as Job, type JobCancelResponse as JobCancelResponse, type JobCancelParams as JobCancelParams };
}
