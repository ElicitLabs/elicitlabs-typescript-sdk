// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Inference extends APIResource {
  /**
   * **⚠️ DEPRECATED** — Use `POST /v1/chat/completions` or
   * `POST /v1/text/generations` instead.
   *
   *     This endpoint is kept for backward compatibility and internally delegates to
   *     the new text generation handler.
   *
   * @deprecated
   */
  generateCompletion(
    body: InferenceGenerateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<InferenceGenerateCompletionResponse> {
    return this._client.post('/v1/inference/completion', { body, ...options });
  }

  /**
   * **DEPRECATED** — Use the new dedicated endpoints instead: - Text →
   * `POST /v1/text/generations` - Image → `POST /v1/images/generations` - Audio →
   * `POST /v1/audio/generations` - All → `POST /v1/chat/completions`
   *
   *     This endpoint is kept for backward compatibility and internally delegates to
   *     the appropriate new generation handler based on `output_type`.
   *
   * @deprecated
   */
  generateMultimodalityCompletion(
    body: InferenceGenerateMultimodalityCompletionParams,
    options?: RequestOptions,
  ): APIPromise<InferenceGenerateMultimodalityCompletionResponse> {
    return this._client.post('/v1/inference/multimodality-completion', { body, ...options });
  }
}

/**
 * Response model for prepared messages
 */
export interface InferenceGenerateCompletionResponse {
  /**
   * Formatted messages with memory context
   */
  messages?: Array<{ [key: string]: unknown }> | null;

  /**
   * Generated response content
   */
  response?: string | null;
}

/**
 * Response model for inference with text-to-speech and multimodal memory
 */
export interface InferenceGenerateMultimodalityCompletionResponse {
  /**
   * Generated text response from LLM
   */
  text_response: string;

  /**
   * Base64 encoded audio of the response (if output_type='audio')
   */
  audio_base64?: string | null;

  /**
   * Format of the audio (e.g., mp3)
   */
  audio_format?: string | null;

  /**
   * Reference images for matched entities used in generation (entity_name -> base64
   * image)
   */
  entity_images?: { [key: string]: string } | null;

  /**
   * List of all generated images as base64 (when num_images > 1). Each image is
   * generated with a different seed for variation
   */
  generated_images?: Array<string> | null;

  /**
   * Base64 encoded AI-generated image (if output_type='image'). First image when
   * num_images > 1
   */
  image_base64?: string | null;

  /**
   * Formatted memory context used for generating the response
   */
  memory_context?: string | null;

  /**
   * Raw results from memory retrieval
   */
  raw_results?: { [key: string]: unknown } | null;

  /**
   * Complete reasoning trace (if use_reasoning=True) with blueprint, grounding,
   * constraints, verification, and repair steps
   */
  reasoning_trace?: { [key: string]: unknown } | null;

  /**
   * Whether the request was successful
   */
  success?: boolean;

  /**
   * Voice used for TTS
   */
  voice_used?: string | null;
}

export interface InferenceGenerateCompletionParams {
  /**
   * Content to process
   */
  content: string | Array<{ [key: string]: string }>;

  /**
   * User ID (always required)
   */
  user_id: string;

  /**
   * Whether to disable learning
   */
  disabled_learning?: boolean;

  /**
   * LLM model to use for generation
   */
  model?: string;

  /**
   * Optional persona ID. If provided, inference uses this persona's context instead
   * of the user
   */
  persona_id?: string | null;

  /**
   * Optional project ID. If provided, inference uses project context (inherits from
   * user)
   */
  project_id?: string | null;

  /**
   * Session ID
   */
  session_id?: string | null;
}

export interface InferenceGenerateMultimodalityCompletionParams {
  /**
   * Unique identifier for the user (always required)
   */
  user_id: string;

  /**
   * Base64 encoded audio content (supports webm, wav, mp3, mp4, and other formats)
   */
  audio_base64?: string | null;

  /**
   * Duration in seconds for music/sfx generation. Default: 5s for sfx, 10s for music
   */
  audio_duration?: number | null;

  /**
   * Type of audio output: 'tts' for text-to-speech, 'music' for AI music, 'sfx' for
   * sound effects
   */
  audio_type?: 'tts' | 'music' | 'sfx';

  /**
   * Additional context for the question
   */
  context?: string | null;

  /**
   * Whether to disable learning/ingestion of the multimodal content
   */
  disabled_learning?: boolean;

  /**
   * Base64 encoded image content
   */
  image_base64?: string | null;

  /**
   * Maximum repair iterations in reasoning loop
   */
  max_reasoning_iterations?: number;

  /**
   * LLM model to use for generating the response
   */
  model?: string | null;

  /**
   * Number of images to generate (each with a different seed for variation). Only
   * used when output_type='image'
   */
  num_images?: number;

  /**
   * Output type: 'text' for text only, 'audio' for TTS audio, 'image' for
   * AI-generated image
   */
  output_type?: 'text' | 'audio' | 'image';

  /**
   * Optional persona ID. If provided, inference uses this persona's context instead
   * of the user
   */
  persona_id?: string | null;

  /**
   * Optional project ID. If provided, inference uses project context (inherits from
   * user)
   */
  project_id?: string | null;

  /**
   * User's question or prompt (optional if audio provided)
   */
  question?: string | null;

  /**
   * Base seed for reproducible image generation. If not provided, a random seed is
   * used. Only used when output_type='image'
   */
  seed?: number | null;

  /**
   * Optional session identifier for conversation context
   */
  session_id?: string | null;

  /**
   * Speed of the speech (0.25 to 4.0). Only used when audio_type='tts'
   */
  speed?: number;

  /**
   * Use creative reasoning loop for constraint-satisfying generation (only for
   * creative_design projects with output_type='image')
   */
  use_reasoning?: boolean;

  /**
   * Base64 encoded video content
   */
  video_base64?: string | null;

  /**
   * Voice to use for TTS (alloy, echo, fable, onyx, nova, shimmer). Only used when
   * audio_type='tts'
   */
  voice?: string;
}

export declare namespace Inference {
  export {
    type InferenceGenerateCompletionResponse as InferenceGenerateCompletionResponse,
    type InferenceGenerateMultimodalityCompletionResponse as InferenceGenerateMultimodalityCompletionResponse,
    type InferenceGenerateCompletionParams as InferenceGenerateCompletionParams,
    type InferenceGenerateMultimodalityCompletionParams as InferenceGenerateMultimodalityCompletionParams,
  };
}
