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
   *     - project_id (str, optional): The project ID
   *     - persona_id (str, optional): The specific system persona/voice to use
   *     - disabled_learning (bool, optional): If true, request is ignored by long-term memory
   *     - use_reasoning (bool, optional): Enable reasoning loop for constraint-satisfying generation
   *
   *     **Input:**
   *     - text_input (str, required): The prompt/description for video generation
   *     - session_id (str, optional): Session ID for conversation context
   *
   *     **Reference inputs:**
   *     - image_base64 (str, optional): Base64 encoded reference image for context
   *     - video_base64 (str, optional): Base64 encoded reference video for context
   *     - audio_base64 (str, optional): Base64 encoded reference audio for context
   *
   *     **Video Params (Flat):**
   *     - model (str, optional): Model ID (default: veo-3.0-generate-preview)
   *     - duration (float, optional): Target duration in seconds (4, 6, or 8)
   *     - aspect_ratio (str, optional): Aspect ratio: "16:9" or "9:16" (default: 16:9)
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
   * Enable first+last frame workflow: generates a starting frame and an ending frame
   * via the image pipeline, then uses Veo's first-and-last-frame feature to animate
   * the transition between them.
   */
  advanced_creative?: boolean;

  /**
   * Aspect ratio for the generated video: '16:9' or '9:16'.
   */
  aspect_ratio?: string;

  /**
   * If true, return a job_id immediately and process in the background
   */
  async_mode?: boolean;

  /**
   * Base64 encoded reference audio for context
   */
  audio_base64?: string | null;

  /**
   * Optional URL the server will POST to when generation completes.
   */
  callback_url?: string | null;

  /**
   * If true, this request is ignored by long-term memory
   */
  disabled_learning?: boolean;

  /**
   * Target duration in seconds
   */
  duration?: number | null;

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
   * Optional email address to notify when generation completes.
   */
  notification_email?: string | null;

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
