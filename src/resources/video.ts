// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Video extends APIResource {
  /**
   * Dedicated video generation endpoint using the Universal Schema with flat
   * parameters.
   *
   *     **Universal Base Schema:**
   *     - user_id (str, required): The end-user ID
   *     - project_id (str, required): The project ID
   *     - persona_id (str, optional): The specific system persona/voice to use
   *     - disabled_learning (bool, optional): If true, request is ignored by long-term memory
   *     - use_reasoning (bool, optional): Enable reasoning loop for constraint-satisfying generation
   *
   *     **Input:**
   *     - text_input (str, required): The prompt/description for video generation
   *     - context (str, optional): Additional context
   *
   *     **Video Params (Flat):**
   *     - model (str, required): Model ID (e.g., gemini-3-flash)
   *     - duration (float, optional): Target duration in seconds
   *     - fps (int, optional): Frames per second (default: 24)
   *     - size (str, optional): Video dimensions
   *     - seed (int, optional): Random seed for reproducibility
   *
   *     **Authentication**: Requires valid API key or JWT token
   *
   * @example
   * ```ts
   * const response = await client.video.generate({
   *   text_input:
   *     'A golden retriever running on a beach at sunset',
   *   user_id: 'user_123',
   * });
   * ```
   */
  generate(body: VideoGenerateParams, options?: RequestOptions): APIPromise<VideoGenerateResponse> {
    return this._client.post('/v1/video/generations', { body, ...options });
  }
}

/**
 * Response model for video generation
 */
export interface VideoGenerateResponse {
  /**
   * Delivery method: 'both' (base64 + url), 'url' (url only, base64 omitted due to
   * size), or 'base64' (GCS upload failed).
   */
  output_type?: string;

  /**
   * Whether the request succeeded
   */
  success?: boolean;

  /**
   * Base64 encoded video. Present when the payload is under ~30 MB. May be absent
   * for very large outputs.
   */
  video_base64?: string | null;

  /**
   * Video format, e.g. mp4, webm
   */
  video_format?: string;

  /**
   * Signed GCS URL to download the video (expires after 24 h). Always present when
   * the upload succeeds.
   */
  video_url?: string | null;
}

export interface VideoGenerateParams {
  /**
   * The prompt/description for video generation
   */
  text_input: string;

  /**
   * The end-user ID
   */
  user_id: string;

  /**
   * Base64 encoded reference audio for context
   */
  audio_base64?: string | null;

  /**
   * If true, this request is ignored by long-term memory
   */
  disabled_learning?: boolean;

  /**
   * Target duration in seconds
   */
  duration?: number | null;

  /**
   * Frames per second
   */
  fps?: number;

  /**
   * Base64 encoded reference image for context (e.g., start frame)
   */
  image_base64?: string | null;

  /**
   * Max reasoning steps if reasoning is enabled
   */
  max_reasoning_iterations?: number;

  /**
   * Video generation model ID
   */
  model?: string;

  /**
   * The specific system persona/voice to use
   */
  persona_id?: string | null;

  /**
   * The project ID
   */
  project_id?: string | null;

  /**
   * Random seed for reproducibility
   */
  seed?: number | null;

  /**
   * Session ID for conversation context
   */
  session_id?: string | null;

  /**
   * Video dimensions (e.g., 1024x1024)
   */
  size?: string | null;

  /**
   * Enable Chain-of-Thought/Reasoning steps before generation
   */
  use_reasoning?: boolean;

  /**
   * Base64 encoded reference video for context
   */
  video_base64?: string | null;
}

export declare namespace Video {
  export {
    type VideoGenerateResponse as VideoGenerateResponse,
    type VideoGenerateParams as VideoGenerateParams,
  };
}
