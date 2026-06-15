// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Images extends APIResource {
  /**
   * Queues an image generation job. Returns `{job_id, generation_id}` — poll
   * `/v1/data/job/status` with the job_id, then fetch the final image via
   * `/v1/images/generations/{generation_id}/...`. See the request model for
   * per-field documentation.
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

  /**
   * Warnings known at queue-accept time. Additional generation warnings are returned
   * in the job result and generation artifacts after completion.
   */
  warnings?: Array<ImageGenerateResponse.Warning>;
}

export namespace ImageGenerateResponse {
  /**
   * Non-blocking warning surfaced to generation clients.
   */
  export interface Warning {
    /**
     * Stable warning code.
     */
    code: string;

    /**
     * User-facing warning text.
     */
    message: string;

    details?: { [key: string]: unknown };

    /**
     * warning | info
     */
    severity?: string;
  }
}

export interface ImageGenerateParams {
  /**
   * The prompt / change instruction
   */
  text_input: string;

  /**
   * The end-user ID
   */
  user_id: string;

  /**
   * Aspect ratio, e.g. '1:1', '16:9', '9:16', '4:3', '3:4'.
   */
  aspect_ratio?: string;

  /**
   * Options accepted only when `mode='edit'`.
   */
  edit?: ImageGenerateParams.Edit | null;

  /**
   * When true, intermediate artifacts (raw Gemini base, overlay HTML) are retained
   * so the result can be re-edited. Applies to consistency and relayout modes.
   * Defaults to true.
   */
  make_editable?: boolean | null;

  /**
   * None / 'default' / 'consistency': wireframer → typesetter → synthesizer →
   * refiner pipeline that reproduces stored entities/assets faithfully.
   * 'exploration': creative-freedom path (NOT YET IMPLEMENTED — ships this weekend).
   * 'edit': edit a prior generation — requires `edit` options. 'relayout': recreate
   * a successful-example ad — requires `relayout` options.
   */
  mode?: 'default' | 'consistency' | 'exploration' | 'edit' | 'relayout' | null;

  /**
   * Image generation model ID
   */
  model?: string;

  /**
   * The project ID
   */
  project_id?: string | null;

  /**
   * Options accepted only when `mode='relayout'`.
   */
  relayout?: ImageGenerateParams.Relayout | null;

  /**
   * Resolution tier.
   */
  resolution?: '1K' | '2K' | '4K';

  /**
   * Random seed for reproducibility
   */
  seed?: number | null;
}

export namespace ImageGenerateParams {
  /**
   * Options accepted only when `mode='edit'`.
   */
  export interface Edit {
    /**
     * ID of a previously generated image (row in upl.generations) to edit. Server
     * fetches the source from GCS — must belong to the requesting user.
     */
    source_generation_id: string;
  }

  /**
   * Options accepted only when `mode='relayout'`.
   */
  export interface Relayout {
    /**
     * The reference AdAsset node_id to recreate.
     */
    ad_id: string;

    /**
     * List of target aspect ratios (e.g. ['1:1', '9:16']). Defaults to ['1:1'] when
     * omitted.
     */
    target_aspect_ratios?: Array<string> | null;
  }
}

export declare namespace Images {
  export {
    type ImageGenerateResponse as ImageGenerateResponse,
    type ImageGenerateParams as ImageGenerateParams,
  };
}
