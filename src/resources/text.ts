// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Text extends APIResource {
  /**
   * Dedicated text generation endpoint using the Universal Schema with flat
   * parameters.
   *
   *     **Universal Base Schema:**
   *     - user_id (str, required): The end-user ID
   *     - project_id (str, required): The project ID
   *     - persona_id (str, optional): The specific system persona/voice to use
   *     - disabled_learning (bool, optional): If true, request is ignored by long-term memory
   *     - use_reasoning (bool, optional): Enable reasoning loop for generation
   *
   *     **Input:**
   *     - text_input (str, optional): The prompt/description for text generation
   *     - session_id (str, optional): Session ID for conversation context
   *
   *     **Reference inputs:**
   *     - image_base64 (str, optional): Base64 encoded reference image for context
   *     - video_base64 (str, optional): Base64 encoded reference video for context
   *     - audio_base64 (str, optional): Base64 encoded reference audio for context
   *
   *     **Text Params (Flat):**
   *     - model (str, optional): LLM model to use (default: gpt-4.1-mini)
   *
   *     **Authentication**: Requires valid API key or JWT token
   *
   * @example
   * ```ts
   * const response = await client.text.generate({
   *   user_id: 'user_123',
   * });
   * ```
   */
  generate(body: TextGenerateParams, options?: RequestOptions): APIPromise<TextGenerateResponse> {
    return this._client.post('/v1/text/generations', { body, ...options });
  }
}

/**
 * Response model for text generation
 */
export interface TextGenerateResponse {
  /**
   * Structured JSON output matching the requested output_schema (when output_schema
   * is provided)
   */
  structured_output?: { [key: string]: unknown } | null;

  /**
   * Whether the request succeeded
   */
  success?: boolean;

  /**
   * Generated text response (when no output_schema is provided)
   */
  text?: string | null;
}

export interface TextGenerateParams {
  /**
   * The end-user ID
   */
  user_id: string;

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
   * Base64 encoded reference image for context
   */
  image_base64?: string | null;

  /**
   * Max reasoning steps if reasoning is enabled
   */
  max_reasoning_iterations?: number;

  /**
   * LLM model to use for generation
   */
  model?: string;

  /**
   * Optional email address to notify when generation completes.
   */
  notification_email?: string | null;

  /**
   * Optional JSON Schema describing the desired output structure. When provided, the
   * LLM is forced to return a JSON object matching this schema instead of free-form
   * text. The result is returned in the 'structured_output' field of the response.
   */
  output_schema?: { [key: string]: unknown } | null;

  /**
   * The specific system persona/voice to use
   */
  persona_id?: string | null;

  /**
   * The project ID
   */
  project_id?: string | null;

  /**
   * Session ID for conversation context
   */
  session_id?: string | null;

  /**
   * The prompt/description for text generation
   */
  text_input?: string | null;

  /**
   * Enable Chain-of-Thought/Reasoning steps before generation
   */
  use_reasoning?: boolean;

  /**
   * Base64 encoded reference video for context
   */
  video_base64?: string | null;
}

export declare namespace Text {
  export { type TextGenerateResponse as TextGenerateResponse, type TextGenerateParams as TextGenerateParams };
}
