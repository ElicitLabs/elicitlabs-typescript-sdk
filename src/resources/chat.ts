// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Chat extends APIResource {
  /**
   * Unified generation endpoint that accepts the Universal Schema plus configuration
   * objects for any outputs (Text, Image, Audio, or all at once).
   *
   *     This is the "Omni" endpoint for the Elicit Labs Modal System.
   *     It acts as a thin orchestrator:
   *
   *     **Flow:**
   *     1. Extracts text + multimodal content from the messages array
   *     2. Classifies the desired output modality via LLM (text / image / audio)
   *     3. Delegates to the appropriate generation endpoint handler:
   *        - text  → POST /v1/text/generations
   *        - image → POST /v1/images/generations
   *        - audio → POST /v1/audio/generations
   *     4. Returns unified response with text + optional image/audio
   *
   *     All validation, memory retrieval, and generation logic lives in the
   *     dedicated routers. This endpoint just classifies and dispatches.
   *
   *     **Authentication**: Requires valid API key or JWT token
   *
   * @example
   * ```ts
   * const response = await client.chat.createCompletion({
   *   messages: [{ content: 'string', role: 'role' }],
   *   user_id: 'user_id',
   * });
   * ```
   */
  createCompletion(
    body: ChatCreateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<ChatCreateCompletionResponse> {
    return this._client.post('/v1/chat/completions', { body, ...options });
  }
}

/**
 * Response model for chat completions - returns the full conversation including
 * the assistant's reply
 */
export interface ChatCreateCompletionResponse {
  /**
   * Full conversation: the original user messages plus the assistant's response
   * appended
   */
  messages: Array<ChatCreateCompletionResponse.Message>;

  /**
   * Session ID for conversation context
   */
  session_id: string;
}

export namespace ChatCreateCompletionResponse {
  /**
   * A single message in the conversation
   */
  export interface Message {
    /**
     * Message content - can be: - A simple text string - An array of content parts for
     * multimodal input: [ {"type": "text", "text": "What's in this image?"}, {"type":
     * "image", "content": "base64_encoded_image..."}, {"type": "image_url",
     * "image_url": {"url": "data:image/jpeg;base64,..."}}, {"type": "video",
     * "content": "base64_encoded_video..."}, {"type": "audio", "content":
     * "base64_encoded_audio..."} ]
     */
    content: string | Array<Message.UnionMember1> | Array<{ [key: string]: unknown }>;

    /**
     * Message role: 'system', 'user', or 'assistant'
     */
    role: string;
  }

  export namespace Message {
    /**
     * A single content part within a multimodal message
     */
    export interface UnionMember1 {
      /**
       * Content type: 'text', 'image', 'video', 'audio', or 'image_url'
       */
      type: string;

      /**
       * Audio URL object with 'url' key
       */
      audio_url?: { [key: string]: string } | null;

      /**
       * Base64 encoded content (for image/video/audio)
       */
      content?: string | null;

      /**
       * Image URL object with 'url' key (can be data:image/... base64)
       */
      image_url?: { [key: string]: string } | null;

      /**
       * Text content (when type='text')
       */
      text?: string | null;

      /**
       * Video URL object with 'url' key
       */
      video_url?: { [key: string]: string } | null;
    }
  }
}

export interface ChatCreateCompletionParams {
  /**
   * List of messages (system, user, assistant) with text, images, video, or audio
   */
  messages: Array<ChatCreateCompletionParams.Message>;

  /**
   * The end-user ID
   */
  user_id: string;

  /**
   * Configuration overrides for audio generation
   */
  audio_config?: ChatCreateCompletionParams.AudioConfig | null;

  /**
   * If true, this request is ignored by long-term memory
   */
  disabled_learning?: boolean;

  /**
   * Configuration overrides for image generation
   */
  image_config?: ChatCreateCompletionParams.ImageConfig | null;

  /**
   * Max reasoning steps if reasoning is enabled
   */
  max_reasoning_iterations?: number;

  /**
   * List of desired outputs: 'text', 'image', 'audio'
   */
  modalities?: Array<string>;

  /**
   * LLM model to use for generation
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
   * Session ID for conversation context
   */
  session_id?: string | null;

  /**
   * Enable streaming response (SSE)
   */
  stream?: boolean;

  /**
   * Enable Chain-of-Thought/Reasoning steps before answering
   */
  use_reasoning?: boolean;
}

export namespace ChatCreateCompletionParams {
  /**
   * A single message in the conversation
   */
  export interface Message {
    /**
     * Message content - can be: - A simple text string - An array of content parts for
     * multimodal input: [ {"type": "text", "text": "What's in this image?"}, {"type":
     * "image", "content": "base64_encoded_image..."}, {"type": "image_url",
     * "image_url": {"url": "data:image/jpeg;base64,..."}}, {"type": "video",
     * "content": "base64_encoded_video..."}, {"type": "audio", "content":
     * "base64_encoded_audio..."} ]
     */
    content: string | Array<Message.UnionMember1> | Array<{ [key: string]: unknown }>;

    /**
     * Message role: 'system', 'user', or 'assistant'
     */
    role: string;
  }

  export namespace Message {
    /**
     * A single content part within a multimodal message
     */
    export interface UnionMember1 {
      /**
       * Content type: 'text', 'image', 'video', 'audio', or 'image_url'
       */
      type: string;

      /**
       * Audio URL object with 'url' key
       */
      audio_url?: { [key: string]: string } | null;

      /**
       * Base64 encoded content (for image/video/audio)
       */
      content?: string | null;

      /**
       * Image URL object with 'url' key (can be data:image/... base64)
       */
      image_url?: { [key: string]: string } | null;

      /**
       * Text content (when type='text')
       */
      text?: string | null;

      /**
       * Video URL object with 'url' key
       */
      video_url?: { [key: string]: string } | null;
    }
  }

  /**
   * Configuration overrides for audio generation
   */
  export interface AudioConfig {
    /**
     * Type: 'speech' (TTS), 'music', or 'sfx'
     */
    audio_type?: string;

    /**
     * Duration in seconds for music/sfx
     */
    duration?: number | null;

    /**
     * Audio generation model
     */
    model?: string | null;

    /**
     * Speech speed (0.25-4.0)
     */
    speed?: number;

    /**
     * Voice to use (alloy, echo, fable, onyx, nova, shimmer)
     */
    voice?: string;
  }

  /**
   * Configuration overrides for image generation
   */
  export interface ImageConfig {
    /**
     * Image generation model (e.g., gemini-3-flash, dall-e-3)
     */
    model?: string | null;

    /**
     * Random seed for reproducibility
     */
    seed?: number | null;

    /**
     * Image dimensions
     */
    size?: string | null;
  }
}

export declare namespace Chat {
  export {
    type ChatCreateCompletionResponse as ChatCreateCompletionResponse,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };
}
