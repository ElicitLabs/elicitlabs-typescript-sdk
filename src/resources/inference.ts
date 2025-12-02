// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Inference extends APIResource {
  /**
   * Generate personalized AI completion using the Elicit Labs Modal System.
   *
   *     This endpoint:
   *     - Takes raw messages or user query
   *     - Retrieves relevant memories and personalizes the context
   *     - Generates personalized AI response using the specified LLM model
   *     - Optionally learns from the conversation (disabled_learning=False)
   *     - Returns formatted messages with AI response
   *
   *     **Authentication**: Requires valid API key or JWT token in Authorization header
   *
   * @example
   * ```ts
   * const response = await client.inference.generateCompletion({
   *   content: [
   *     {
   *       content: 'You are a helpful AI assistant.',
   *       role: 'system',
   *     },
   *     { content: 'Hello, how are you?', role: 'user' },
   *   ],
   *   user_id: 'user-123',
   * });
   * ```
   */
  generateCompletion(
    body: InferenceGenerateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<InferenceGenerateCompletionResponse> {
    return this._client.post('/v1/inference/completion', { body, ...options });
  }

  /**
   * Generate an AI response using multimodal memory retrieval with flexible output
   * types.
   *
   *     This endpoint:
   *     1. Accepts multimodal inputs (video, image, audio) - same as multimodal-query
   *     2. Processes the multimodal input to extract faces, voices, and transcripts
   *     3. Retrieves relevant memories based on matched identities and transcripts
   *     4. Generates an LLM response using the memory context and multimodal data
   *     5. Based on output_type: returns text only, converts to speech (TTS), or generates an image
   *     6. Returns text response, audio/image (based on output_type), and memory context
   *
   *     **Request Parameters:**
   *     - user_id (str, required): User or persona ID
   *     - question (str, optional): User's question or prompt (can be extracted from audio if not provided)
   *     - context (str, optional): Additional context for the question
   *     - session_id (str, optional): Session identifier for conversation context
   *     - video_base64 (str, optional): Base64 encoded video content
   *     - image_base64 (str, optional): Base64 encoded image content
   *     - audio_base64 (str, optional): Base64 encoded audio content (supports webm, wav, mp3, etc.)
   *     - voice (str, optional): Voice to use for TTS - options: alloy (default), echo, fable, onyx, nova, shimmer
   *     - speed (float, optional): Speech speed from 0.25 to 4.0 (default: 1.0)
   *     - model (str, optional): LLM model to use (defaults to gemini-2.5-flash)
   *     - output_type (str, optional): Output type - 'text' (default), 'audio' (TTS), or 'image' (AI-generated)
   *     - disabled_learning (bool, optional): Whether to disable ingestion/learning from the content (default: false)
   *
   *     **Note:** At least one multimodal input (video, image, or audio) is required for memory retrieval.
   *     When disabled_learning is false, the multimodal content will also be ingested for future memory retrieval.
   *
   *     **Response:**
   *     - text_response (str): Generated text response from the LLM
   *     - audio_base64 (str, optional): Base64 encoded audio (MP3 format) if output_type='audio'
   *     - audio_format (str, optional): Format of the audio
   *     - voice_used (str, optional): Voice used for TTS
   *     - image_base64 (str, optional): Representative image from input
   *     - generated_image_base64 (str, optional): AI-generated image if output_type='image'
   *     - memory_context (str, optional): Formatted memory context used for generation
   *     - raw_results (dict, optional): Raw results from memory retrieval
   *     - success (bool): True if request succeeded
   *
   *     **Example:**
   *     ```json
   *     {
   *         "user_id": "user-123",
   *         "question": "What do you see?",
   *         "video_base64": "base64_encoded_video...",
   *         "voice": "alloy",
   *         "speed": 1.0,
   *         "model": "gemini-2.5-flash",
   *         "output_type": "audio",
   *         "disabled_learning": false
   *     }
   *     ```
   *
   *     Returns 200 OK with text, audio/image (based on output_type), and memory context. Requires JWT authentication.
   *
   * @example
   * ```ts
   * const response =
   *   await client.inference.generateMultimodalityCompletion({
   *     user_id: '123e4567-e89b-12d3-a456-426614174000',
   *   });
   * ```
   */
  generateMultimodalityCompletion(
    body: InferenceGenerateMultimodalityCompletionParams,
    options?: RequestOptions,
  ): APIPromise<InferenceGenerateMultimodalityCompletionResponse> {
    return this._client.post('/v1/inference/multimodality-completion', { body, ...options });
  }

  /**
   * Generate AI response as a specific persona with Elicit Labs Modal System.
   *
   *     This endpoint:
   *     - Retrieves persona information and characteristics
   *     - Formats messages with persona-specific context and memories
   *     - Generates response in the persona's unique style and voice
   *     - Optionally learns from the conversation (disabled_learning=False)
   *     - Returns synchronous response with formatted messages
   *
   *     **Authentication**: Requires valid API key or JWT token in Authorization header
   *
   * @example
   * ```ts
   * const response = await client.inference.generatePersonaChat(
   *   {
   *     content: [
   *       {
   *         content: 'You are a helpful AI assistant.',
   *         role: 'system',
   *       },
   *       { content: 'Hello, how are you?', role: 'user' },
   *     ],
   *     user_id: 'persona-123',
   *   },
   * );
   * ```
   */
  generatePersonaChat(
    body: InferenceGeneratePersonaChatParams,
    options?: RequestOptions,
  ): APIPromise<InferenceGeneratePersonaChatResponse> {
    return this._client.post('/v1/inference/persona-chat', { body, ...options });
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
   * Base64 encoded AI-generated image (if output_type='image')
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
   * Whether the request was successful
   */
  success?: boolean;

  /**
   * Voice used for TTS
   */
  voice_used?: string | null;
}

/**
 * Response model for persona chat
 */
export interface InferenceGeneratePersonaChatResponse {
  /**
   * Formatted messages with memory context
   */
  messages: Array<{ [key: string]: string }> | null;

  /**
   * Generated response content
   */
  response?: string | null;
}

export interface InferenceGenerateCompletionParams {
  /**
   * Content to process
   */
  content: string | Array<{ [key: string]: string }>;

  /**
   * User ID
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
   * Session ID
   */
  session_id?: string | null;
}

export interface InferenceGenerateMultimodalityCompletionParams {
  /**
   * Unique identifier for the user
   */
  user_id: string;

  /**
   * Base64 encoded audio content (supports webm, wav, mp3, mp4, and other formats)
   */
  audio_base64?: string | null;

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
   * LLM model to use for generating the response
   */
  model?: string | null;

  /**
   * Output type: 'text' for text only, 'audio' for TTS audio, 'image' for
   * AI-generated image
   */
  output_type?: 'text' | 'audio' | 'image';

  /**
   * User's question or prompt (optional if audio provided)
   */
  question?: string | null;

  /**
   * Optional session identifier for conversation context
   */
  session_id?: string | null;

  /**
   * Speed of the speech (0.25 to 4.0)
   */
  speed?: number;

  /**
   * Base64 encoded video content
   */
  video_base64?: string | null;

  /**
   * Voice to use for TTS (alloy, echo, fable, onyx, nova, shimmer)
   */
  voice?: string;
}

export interface InferenceGeneratePersonaChatParams {
  /**
   * Content to process
   */
  content: string | Array<{ [key: string]: string }>;

  /**
   * User ID (persona ID)
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
   * Session identifier
   */
  session_id?: string | null;
}

export declare namespace Inference {
  export {
    type InferenceGenerateCompletionResponse as InferenceGenerateCompletionResponse,
    type InferenceGenerateMultimodalityCompletionResponse as InferenceGenerateMultimodalityCompletionResponse,
    type InferenceGeneratePersonaChatResponse as InferenceGeneratePersonaChatResponse,
    type InferenceGenerateCompletionParams as InferenceGenerateCompletionParams,
    type InferenceGenerateMultimodalityCompletionParams as InferenceGenerateMultimodalityCompletionParams,
    type InferenceGeneratePersonaChatParams as InferenceGeneratePersonaChatParams,
  };
}
