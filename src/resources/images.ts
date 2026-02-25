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
   *     - model (str, optional): Model ID (default: gemini-3-flash)
   *     - size (str, optional): Image dimensions as WxH, e.g. "1024x1024", "1920x1080" (default: 1024x1024).
   *       Automatically mapped to the nearest aspect ratio and resolution tier.
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
   * Base64 encoded image. Present when the output is under 32 MB.
   */
  image_base64?: string | null;

  /**
   * Signed URL to download the image. Present when the output is 32 MB or larger.
   * Expires after 1 hour.
   */
  image_url?: string | null;

  /**
   * Delivery method for the generated content: 'base64' or 'url'
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
   * Override the resolution tier derived from 'size'. Accepted values: '1K', '2K',
   * '4K'. When set, this takes precedence over the resolution inferred from the size
   * parameter.
   */
  resolution?: '1K' | '2K' | '4K' | null;

  /**
   * Random seed for reproducibility
   */
  seed?: number | null;

  /**
   * Session ID for conversation context
   */
  session_id?: string | null;

  /**
   * Image dimensions as WxH, e.g. '1024x1024', '1920x1080', '1080x1920'.
   * Automatically converted to the nearest supported aspect ratio (1:1, 16:9, 9:16,
   * …) and resolution tier (1K / 2K / 4K).
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

export declare namespace Images {
  export {
    type ImageGenerateResponse as ImageGenerateResponse,
    type ImageGenerateParams as ImageGenerateParams,
  };
}
