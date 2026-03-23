// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobAPI from './job';
import {
  Job,
  JobCancelParams,
  JobCancelResponse,
  JobRetrieveStatusParams,
  JobRetrieveStatusResponse,
} from './job';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

const _UPLOAD_THRESHOLD = 20 * 1024 * 1024; // 20 MB

const _MIME_TYPES: Record<string, string> = {
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
  '.avi': 'video/x-msvideo',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.m4a': 'audio/mp4',
  '.txt': 'text/plain',
  '.csv': 'text/csv',
  '.html': 'text/html',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};

function _guessMimeType(filename: string): string {
  const dotIdx = filename.lastIndexOf('.');
  if (dotIdx === -1) return 'application/octet-stream';
  const ext = filename.slice(dotIdx).toLowerCase();
  return _MIME_TYPES[ext] || 'application/octet-stream';
}

function _mimeToContentCategory(mime: string): string {
  if (mime.startsWith('image/')) return 'image';
  if (mime.startsWith('video/')) return 'video';
  if (mime.startsWith('audio/')) return 'audio';
  if (mime === 'application/pdf') return 'pdf';
  if (
    mime === 'application/msword' ||
    mime === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  )
    return 'word';
  if (mime.startsWith('text/')) return 'text';
  return 'file';
}

function _isUrl(value: unknown): value is string {
  return typeof value === 'string' && (value.startsWith('http://') || value.startsWith('https://'));
}

function _looksLikePath(value: string): boolean {
  return value.includes('/') || value.includes('\\') || value.startsWith('.') || value.startsWith('~');
}

async function _isFilePath(value: string): Promise<boolean> {
  if (!_looksLikePath(value)) return false;
  try {
    const fs = await import('node:fs');
    return fs.existsSync(value);
  } catch {
    return false;
  }
}

async function _readFile(filePath: string): Promise<Buffer> {
  const { readFile } = await import('node:fs/promises');
  return readFile(filePath);
}

export class Data extends APIResource {
  job: JobAPI.Job = new JobAPI.Job(this._client);

  /**
   * Ingest data for asynchronous processing.
   *
   * Accepts various content types (text, messages, files) and processes them
   * to extract information and integrate it into the user's memory system.
   *
   * **Smart payload handling:** The `payload` parameter accepts:
   *
   * - **Plain text or structured data** — passed directly to the API.
   * - **A local file path** (Node.js only) — the SDK reads the file,
   *   base64-encodes it for small files (< 20 MB), or uses a signed-URL
   *   upload for larger files.
   * - **A URL** (`http://` / `https://`) — the SDK downloads the content
   *   and uploads it the same way.
   *
   * @example
   * ```ts
   * // Plain text
   * const r1 = await client.data.ingest({
   *   content_type: 'text',
   *   payload: 'Meeting notes from today',
   *   user_id: 'user-123',
   * });
   *
   * // Local file path (Node.js)
   * const r2 = await client.data.ingest({
   *   content_type: 'pdf',
   *   payload: './documents/report.pdf',
   *   user_id: 'user-123',
   * });
   *
   * // URL
   * const r3 = await client.data.ingest({
   *   content_type: 'pdf',
   *   payload: 'https://example.com/report.pdf',
   *   user_id: 'user-123',
   * });
   * ```
   */
  async ingest(body: DataIngestParams, options?: RequestOptions): Promise<DataIngestResponse> {
    let { payload } = body;
    let fileBytes: ArrayBuffer | null = null;
    let resolvedFilename: string | null = null;

    if (typeof payload === 'string') {
      if (_isUrl(payload)) {
        const downloadResp = await fetch(payload, { redirect: 'follow' });
        if (!downloadResp.ok) {
          throw new Error(
            `Failed to download from URL (${downloadResp.status}): ${await downloadResp.text()}`,
          );
        }
        fileBytes = await downloadResp.arrayBuffer();
        const urlPath = new URL(payload).pathname;
        resolvedFilename = urlPath.split('/').pop() || 'downloaded_file';
      } else if (await _isFilePath(payload)) {
        const buf = await _readFile(payload);
        fileBytes = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        resolvedFilename = (payload as string).split(/[\\/]/).pop() || 'uploaded_file';
      }
    }

    if (fileBytes !== null) {
      const actualFilename = body.filename != null ? body.filename : resolvedFilename;

      if (fileBytes.byteLength >= _UPLOAD_THRESHOLD) {
        return this._ingestViaSignedUrl({
          fileBytes,
          filename: actualFilename || 'uploaded_file',
          user_id: body.user_id,
          persona_id: body.persona_id ?? undefined,
          project_id: body.project_id ?? undefined,
        });
      }

      const base64 = _arrayBufferToBase64(fileBytes);
      payload = base64;
      if (actualFilename) {
        body = { ...body, filename: actualFilename };
      }
    }

    return this._client.post('/v1/data/ingest', {
      body: { ...body, payload },
      ...options,
    });
  }

  // ── Private helpers for the signed-URL upload flow ───────────────────

  private _getUploadUrl(
    body: DataUploadUrlParams,
    options?: RequestOptions,
  ): APIPromise<DataUploadUrlResponse> {
    return this._client.post('/v1/data/ingest/upload-url', { body, ...options });
  }

  private _confirmUpload(
    body: DataConfirmUploadParams,
    options?: RequestOptions,
  ): APIPromise<DataConfirmUploadResponse> {
    return this._client.post('/v1/data/ingest/confirm-upload', { body, ...options });
  }

  private async _ingestViaSignedUrl(params: {
    fileBytes: ArrayBuffer;
    filename: string;
    user_id: string;
    persona_id?: string | undefined;
    project_id?: string | undefined;
  }): Promise<DataIngestResponse> {
    const { fileBytes, filename, user_id, persona_id, project_id } = params;
    const mimeType = _guessMimeType(filename);
    const contentCategory = _mimeToContentCategory(mimeType);

    const uploadInfo = await this._getUploadUrl({
      user_id,
      filename,
      content_type: contentCategory,
      ...(project_id != null ? { project_id } : {}),
      ...(persona_id != null ? { persona_id } : {}),
    });

    const putResp = await fetch(uploadInfo.upload_url, {
      method: 'PUT',
      body: fileBytes,
      headers: { 'Content-Type': mimeType },
    });
    if (!putResp.ok) {
      throw new Error(
        `File upload to signed URL failed with status ${putResp.status}: ${await putResp.text()}`,
      );
    }

    const confirm = await this._confirmUpload({
      job_id: uploadInfo.job_id,
      object_key: uploadInfo.object_key,
      user_id,
      content_type: contentCategory,
      ...(project_id != null ? { project_id } : {}),
      ...(persona_id != null ? { persona_id } : {}),
    });

    return {
      job_id: confirm.job_id,
      status: confirm.status,
      message: confirm.message ?? null,
      success: true,
    };
  }
}

function _arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]!);
  }
  return btoa(binary);
}

// ── Response types ──────────────────────────────────────────────────────

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

/**
 * Response from requesting a signed upload URL (internal)
 */
interface DataUploadUrlResponse {
  upload_url: string;
  job_id: string;
  object_key: string;
  expires_in: number;
}

/**
 * Response from confirming an upload (internal)
 */
interface DataConfirmUploadResponse {
  job_id: string;
  status: string;
  message?: string | null;
}

// ── Request types ───────────────────────────────────────────────────────

export interface DataIngestParams {
  /**
   * Content type (e.g., 'text', 'image', 'video', 'pdf', 'word', 'audio',
   * 'messages', 'file')
   */
  content_type: string;

  /**
   * Text string, message list, base64 data, a local file path, or a URL.
   * File paths and URLs are resolved automatically by the SDK.
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
   * Filename for file uploads (auto-detected from path/URL when omitted)
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

/**
 * Parameters for requesting a signed upload URL (internal)
 */
interface DataUploadUrlParams {
  user_id: string;
  filename: string;
  content_type?: string | null;
  project_id?: string | null;
  persona_id?: string | null;
}

/**
 * Parameters for confirming an upload (internal)
 */
interface DataConfirmUploadParams {
  job_id: string;
  object_key: string;
  user_id: string;
  content_type?: string | null;
  project_id?: string | null;
  persona_id?: string | null;
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

  export {
    Job as Job,
    type JobCancelResponse as JobCancelResponse,
    type JobRetrieveStatusResponse as JobRetrieveStatusResponse,
    type JobCancelParams as JobCancelParams,
    type JobRetrieveStatusParams as JobRetrieveStatusParams,
  };
}
