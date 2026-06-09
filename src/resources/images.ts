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
 * Returned when an image generation job has been enqueued.
 */
export interface ImageGenerateResponse {
  /**
   * Persisted upl.generations row ID for this image
   */
  generation_id: string;

  /**
   * Job ID for /v1/data/job/status polling
   */
  job_id: string;

  /**
   * Polling guidance for the caller
   */
  message?: string;

  /**
   * Initial queued status
   */
  status?: string;
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
   * Relayout mode only: the reference ad's ObjectNode node_id to recreate. Either
   * this OR `auto_select_ad` must be set.
   */
  ad_id?: string | null;

  /**
   * Aspect ratio for the generated image, e.g. '1:1', '16:9', '9:16', '4:3', '3:4'.
   */
  aspect_ratio?: string;

  /**
   * Base64 encoded reference audio for context
   */
  audio_base64?: string | null;

  /**
   * Relayout mode only: when true and `ad_id` is null, a VLM judge picks the best
   * analyzed ad from the project.
   */
  auto_select_ad?: boolean;

  /**
   * Deprecated no-op. Generation pipeline HTML tracing has been removed.
   */
  debug?: boolean;

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
   * When true, the response includes `gemini_base_url` — the raw Gemini recreation
   * before any text overlay is composited. Applies to relayout and consistency
   * modes. When false or omitted, only the final output is returned.
   */
  make_editable?: boolean | null;

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
   * Generation mode controlling how reference assets are used. None or 'default':
   * Standard pipeline — synthesis LLM picks consistency vs exploration based on the
   * prompt. 'consistency': Reproduce stored entities/assets faithfully — match their
   * canonical look and the project's documented details. 'exploration': Creative
   * freedom — generate new content / new compositions where references guide
   * aesthetic and style only, not exact appearance. The post-gen text fix is skipped
   * in this mode (the model's own text rendering is trusted). 'fast': Skip
   * hierarchical retrieval, single-call block selector. 'edit': Edit a prior
   * generation referenced by source_generation_id; text_input is the change
   * instruction. Skips memory retrieval — the source image IS the context.
   * 'relayout': Recreate a successful-example ad through the full wireframer →
   * typesetter → synthesizer → refiner pipeline using the LayoutAnalysis ingested
   * for the chosen ad. Provide `ad_id` or set `auto_select_ad=true` to let a VLM
   * pick the best ad from the project. Per-stage progress lands in
   * `metadata.relayout_steps` for FE polling. Legacy values 'faithful',
   * 'style_transfer', 'create_new' are auto-coerced ('faithful'→'consistency', the
   * other two→'exploration').
   */
  mode?: 'fast' | 'default' | 'consistency' | 'exploration' | 'edit' | 'relayout' | null;

  /**
   * Image generation model ID
   */
  model?: string;

  /**
   * The specific system persona/voice to use
   */
  persona_id?: string | null;

  /**
   * OBJECTS entity node IDs to anchor flat memory retrieval. When set, memory
   * retrieval focuses on episodes/memories connected to these specific entities
   * instead of fully autonomous semantic search.
   */
  pinned_entity_ids?: Array<string> | null;

  /**
   * HierarchicalFolder node IDs to anchor hierarchical retrieval. When set, the
   * retrieval pipeline targets these folders directly instead of using LLM path
   * selection.
   */
  pinned_folder_ids?: Array<string> | null;

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
   * Relayout mode only: comma-separable list of target aspect ratios (e.g. ['1:1',
   * '9:16']). Defaults to ['1:1'] when omitted.
   */
  target_aspect_ratios?: Array<string> | null;

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
