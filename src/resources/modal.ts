// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Modal extends APIResource {
  /**
   * Ingests a list of messages (conversation history) into long-term memory.
   *
   *     The system automatically handles different modalities embedded in the messages:
   *     - **Text** is embedded directly
   *     - **Images/Video** are captioned/described by vision models, then embedded
   *     - **Audio** is transcribed, then embedded
   *
   *     **Universal Base Params:**
   *     - user_id (str, required): The user these memories belong to
   *     - project_id (str, optional): The project bucket (optional)
   *     - persona_id (str, optional): Link these memories to a specific persona
   *
   *     **Input (Multimodal):**
   *     - messages (array, required): A standard chat history list. Can contain Text, Image, Video, and Audio.
   *     - session_id (str, optional): Optional session identifier for conversation context
   *
   *     **Example:**
   *     ```json
   *     {
   *         "user_id": "user_123",
   *         "project_id": "proj_ABC",
   *         "session_id": "session_123",
   *         "messages": [
   *             {"role": "user", "type": "image", "content": "<base64 encoded image data>"},
   *             {"role": "assistant","type": "text", "content": "The animation is too slow"},
   *             {"role": "user", "content": "Good catch. Let's speed it up to 200ms."}
   *             ],
   *             "timestamp": "2026-02-07T12:00:00Z"
   *         }
   *         ```
   *
   * @example
   * ```ts
   * const response = await client.modal.learn({
   *   messages: [
   *     { content: 'job_id_123' },
   *     { content: 'The animation is too slow' },
   *     {
   *       content:
   *         "Good catch. Let's remember to speed it up to 200ms for the next sprint.",
   *     },
   *   ],
   *   user_id: 'user_123',
   * });
   * ```
   */
  learn(body: ModalLearnParams, options?: RequestOptions): APIPromise<ModalLearnResponse> {
    return this._client.post('/v1/modal/learn', { body, ...options });
  }

  /**
   * Retrieves relevant memories based on text conversation context and/or multimodal
   * inputs.
   *
   *     You can provide **text messages**, **images**, **video**, **audio**, or any combination.
   *     The system finds memories semantically relevant to the provided inputs.
   *
   *     **Universal Base Params:**
   *     - user_id (str, required): Restrict search to this user
   *     - project_id (str, required): Restrict search to this project
   *     - persona_id (str, optional): Use persona's context if provided
   *
   *     **Input — at least one required:**
   *     - messages (array, optional): Text conversation context
   *     - video_base64 (str, optional): Base64 encoded video
   *     - image_base64 (str, optional): Base64 encoded image
   *     - audio_base64 (str, optional): Base64 encoded audio
   *
   *     **Search Config:**
   *     - include_modalities (array, optional): Filter results by type: ["text", "image", "video"]
   *
   *     **Response:**
   *     - new_prompt (str): Enhanced prompt with retrieved memory context
   *     - raw_results (dict): Structured memory data from retrieval
   *     - entity_images (dict, optional): Reference images for matched entities
   *     - success (bool): True if query succeeded
   *
   *     Returns 200 OK with memory data. Requires authentication.
   *
   * @example
   * ```ts
   * const response = await client.modal.query({
   *   user_id: 'user_123',
   * });
   * ```
   */
  query(body: ModalQueryParams, options?: RequestOptions): APIPromise<ModalQueryResponse> {
    return this._client.post('/v1/modal/query', { body, ...options });
  }
}

/**
 * Response model for learning processing
 */
export interface ModalLearnResponse {
  /**
   * Session identifier used for the learning
   */
  session_id: string;

  /**
   * Whether the learning was processed successfully
   */
  success?: boolean;
}

/**
 * Unified response model for memory query (text + multimodal)
 */
export interface ModalQueryResponse {
  /**
   * Enhanced prompt with retrieved memory context
   */
  new_prompt: string;

  /**
   * Reference images for matched entities (entity_name -> base64 image)
   */
  entity_images?: { [key: string]: string } | null;

  /**
   * Raw results from the retrieval process
   */
  raw_results?: { [key: string]: unknown };

  /**
   * Whether the query was processed successfully
   */
  success?: boolean;
}

export interface ModalLearnParams {
  /**
   * A standard chat history list. Can contain Text, Image, Video, and Audio.
   */
  messages: Array<ModalLearnParams.Message>;

  /**
   * The user these memories belong to (required)
   */
  user_id: string;

  /**
   * Optional persona ID. Link these memories to a specific persona.
   */
  persona_id?: string | null;

  /**
   * The project bucket (optional)
   */
  project_id?: string | null;

  /**
   * Optional session identifier for conversation context
   */
  session_id?: string | null;

  /**
   * ISO format datetime string for the message timestamp
   */
  timestamp?: string | null;
}

export namespace ModalLearnParams {
  /**
   * A single message in the learning context
   */
  export interface Message {
    /**
     * Message content or Link
     */
    content: string;

    /**
     * Message role: 'user', 'assistant', or 'system'
     */
    role?: string | null;

    /**
     * Content type for multimodal: 'text', 'image', 'video', 'audio'
     */
    type?: string | null;
  }
}

export interface ModalQueryParams {
  /**
   * Restrict search to this user (required)
   */
  user_id: string;

  /**
   * Base64 encoded audio content (supports webm, wav, mp3, mp4, and other formats)
   */
  audio_base64?: string | null;

  /**
   * Base64 encoded image content
   */
  image_base64?: string | null;

  /**
   * Filter results by type: ['text', 'image', 'video']
   */
  include_modalities?: Array<string> | null;

  /**
   * Optional persona ID. If provided, query uses persona's context
   */
  persona_id?: string | null;

  /**
   * Restrict search to this project (required)
   */
  project_id?: string | null;

  /**
   * Optional session identifier for conversation context
   */
  session_id?: string | null;

  /**
   * Text input to search against. The system finds memories _relevant_ to this text.
   */
  text_input?: string | null;

  /**
   * Base64 encoded video content
   */
  video_base64?: string | null;
}

export declare namespace Modal {
  export {
    type ModalLearnResponse as ModalLearnResponse,
    type ModalQueryResponse as ModalQueryResponse,
    type ModalLearnParams as ModalLearnParams,
    type ModalQueryParams as ModalQueryParams,
  };
}
