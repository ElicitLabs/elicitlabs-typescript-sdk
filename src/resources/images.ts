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
   *     - model (str, optional): Model ID (default: gemini-3.1-flash). Available models: gemini-3.1-flash, gemini-3-flash, gemini-3.1-pro, gpt-image-1, gpt-image-1.5, gpt-image-2, flux-2-max, flux-2-pro, flux-2-klein-9b, flux-2-schnell, flux-pro-1.1, flux-pro-1.1-ultra, flux-kontext-pro, imagen-4-fast, imagen-4-ultra
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
   * ID of the persisted upl.generations row for this output. Pass this back as
   * source_generation_id with mode='edit' to refine it.
   */
  generation_id?: string | null;

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
   * List of base64-encoded PNG/JPG images showing the desired font (e.g., a
   * typography specimen). Honored only when mode='edit'.
   */
  font_reference_image_base64?: Array<string> | null;

  /**
   * List of HTTPS or gs:// URLs to images showing the desired font. Server downloads
   * them. Honored only when mode='edit'.
   */
  font_reference_image_url?: Array<string> | null;

  /**
   * List of base64-encoded TTF/OTF font file bytes (drag-and-drop support — no
   * upload endpoint required). The server decodes, renders a typography sample, and
   * passes the rendered image as a reference. Honored only when mode='edit'.
   */
  font_reference_ttf_base64?: Array<string> | null;

  /**
   * List of HTTPS or gs:// URLs to TTF/OTF font files. The server renders a
   * typography sample in each font and passes the rendered image as a reference.
   * Honored only when mode='edit'.
   */
  font_reference_ttf_url?: Array<string> | null;

  /**
   * Base64 encoded reference image for context
   */
  image_base64?: string | null;

  /**
   * Optional base64 PNG mask for inpainting (only honored on gpt-image-\* models).
   * Transparent pixels = edit region, opaque pixels = keep. Silently ignored by
   * Flux/Imagen/Gemini providers.
   */
  mask_base64?: string | null;

  /**
   * Max reasoning steps if reasoning is enabled
   */
  max_reasoning_iterations?: number;

  /**
   * Generation mode controlling speed vs quality tradeoff and how reference images
   * are used. None or 'default': Standard pipeline with memory retrieval and
   * context. 'fast': Skip memory retrieval entirely, prompt goes straight to model.
   * Fastest. 'faithful': Exact visual reproduction of reference images (entity
   * features, colors, proportions). 'style_transfer': Creative adaptation — captures
   * entity identity but with creative latitude. 'create_new': Full creative freedom,
   * references only inform art style/aesthetic. 'edit': Edit a prior generation
   * referenced by source_generation_id; text_input is the feedback / change
   * instruction. Skips memory retrieval — the source image IS the context.
   */
  mode?: 'fast' | 'default' | 'faithful' | 'style_transfer' | 'create_new' | 'edit' | null;

  /**
   * Image generation model ID
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
   * ID of a previously generated image (row in upl.generations) to edit. Required
   * when mode='edit'. The server fetches the source from GCS — no upload needed.
   * Must belong to the requesting user.
   */
  source_generation_id?: string | null;

  /**
   * Temperature for retrieval LLM calls (0.0-2.0). Lower = more deterministic.
   */
  temperature?: number | null;

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
