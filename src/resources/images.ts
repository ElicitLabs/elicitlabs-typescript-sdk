// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Images extends APIResource {
  /**
   * Dedicated image generation endpoint using the Universal Schema with flat
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
   *     - text_input (str, optional): The prompt/description for image generation
   *     - session_id (str, optional): Session ID for conversation context
   *
   *     **Reference inputs:**
   *     - image_base64 (str, optional): Base64 encoded reference image for context
   *     - video_base64 (str, optional): Base64 encoded reference video for context
   *     - audio_base64 (str, optional): Base64 encoded reference audio for context
   *
   *     **Image Params (Flat):**
   *     - model (str, optional): Model ID (default: gemini-3.1-flash). Available image models: gemini-3.1-flash, gemini-3-flash, gemini-3.1-pro
   *     - aspect_ratio (str, optional): Aspect ratio, e.g. "1:1", "16:9", "9:16" (default: 1:1).
   *     - resolution (str, optional): Resolution tier: "1K", "2K", or "4K" (default: 4K).
   *     - seed (int, optional): Random seed for reproducibility
   *
   *     **Authentication**: Requires valid API key or JWT token
   *
   * @example
   * ```ts
   * const response = await client.images.generate({
   *   text_input: 'A golden retriever in a space suit',
   *   user_id: 'user_123',
   * });
   * ```
   */
  generate(body: ImageGenerateParams, options?: RequestOptions): APIPromise<ImageGenerateResponse> {
    return this._client.post('/v1/images/generations', { body, ...options });
  }
}

/**
 * Response model for image generation
 */
export interface ImageGenerateResponse {
  /**
   * Base64 encoded image. Present when the payload is under ~30 MB. May be absent
   * for very large outputs.
   */
  image_base64?: string | null;

  /**
   * Image format, e.g. png, jpeg, webp
   */
  image_format?: string;

  /**
   * Signed GCS URL to download the image (expires after 24 h). Always present when
   * the upload succeeds.
   */
  image_url?: string | null;

  /**
   * Delivery method: 'both' (base64 + url), 'url' (url only, base64 omitted due to
   * size), or 'base64' (GCS upload failed).
   */
  output_type?: string;

  /**
   * Whether the request succeeded
   */
  success?: boolean;
}

export interface ImageGenerateParams {
  /**
   * The prompt/description for image generation
   */
  text_input: string;

  /**
   * The end-user ID
   */
  user_id: string;

  /**
   * Aspect ratio for the generated image, e.g. '1:1', '16:9', '9:16', '4:3', '3:4'.
   */
  aspect_ratio?: string;

  /**
   * Base64 encoded reference audio for context
   */
  audio_base64?: string | null;

  /**
   * If true, this request is ignored by long-term memory
   */
  disabled_learning?: boolean;

  /**
   * Base64 encoded reference image for context
   */
  image_base64?: string | null;

  /**
   * Max reasoning steps if reasoning is enabled
   */
  max_reasoning_iterations?: number;

  /**
   * Image generation model ID
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
   * Resolution tier for the generated image: '1K', '2K', or '4K'.
   */
  resolution?: '1K' | '2K' | '4K';

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

export declare namespace Images {
  export {
    type ImageGenerateResponse as ImageGenerateResponse,
    type ImageGenerateParams as ImageGenerateParams,
  };
}
