// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Modal extends APIResource {
  /**
   * Process a conversation message and update the user's memory system.
   *
   *     Stores the message in conversation history and triggers memory extraction when thresholds are met.
   *     Returns immediately after storing the message, with memory processing happening in the background.
   *
   *     **Request Parameters:**
   *     - user_id (str, required): User or persona ID
   *     - message (str, required): User message content
   *     - role (str, required): Message role - "user" or "assistant"
   *     - session_id (str, optional): Session identifier for conversation grouping
   *     - timestamp (str, optional): ISO-8601 timestamp for the message
   *
   *     **Response:**
   *     - success (bool): True if message was stored
   *     - message (str): Status message
   *     - session_id (str): Confirmed session ID
   *     - turn_id (str): Unique identifier for this conversation turn
   *
   *     **Example:**
   *     ```json
   *     {
   *         "user_id": "user-123",
   *         "message": "I prefer working in the morning",
   *         "role": "user",
   *         "session_id": "session-abc"
   *     }
   *     ```
   *
   *     Returns 200 OK immediately. Memory extraction runs asynchronously in background.
   *     Use this endpoint for conversation messages. Use /v1/data/* for files and documents.
   *     Requires authentication.
   *
   * @example
   * ```ts
   * const response = await client.modal.learn({
   *   message: { content: 'bar', role: 'bar' },
   *   user_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  learn(body: ModalLearnParams, options?: RequestOptions): APIPromise<ModalLearnResponse> {
    return this._client.post('/v1/modal/learn', { body, ...options });
  }

  /**
   * Query user's stored memories, preferences, and identity based on a natural
   * language question.
   *
   *     Retrieves relevant information from the user's memory system using semantic search across
   *     all memory types: episodic memories, preferences, identity attributes, and short-term context.
   *
   *     **Request Parameters:**
   *     - question (str, required): Natural language question to query
   *     - user_id (str, required): User or persona ID
   *     - session_id (str, optional): Session identifier for conversation context
   *     - filter_memory_types (list[str], optional): Memory types to exclude - valid values: "episodic", "preference", "identity", "short_term"
   *
   *     **Response:**
   *     - new_prompt (str): Enhanced prompt with retrieved memory context
   *     - raw_results (dict): Structured memory data from retrieval
   *     - success (bool): True if query succeeded
   *
   *     **Example:**
   *     ```json
   *     {
   *         "question": "What are my preferences for morning routines?",
   *         "user_id": "user-123",
   *         "session_id": "session-abc",
   *         "filter_memory_types": ["episodic"]
   *     }
   *     ```
   *
   *     Returns 200 OK with memory data. Use filter_memory_types to optimize performance.
   *     Requires authentication.
   *
   * @example
   * ```ts
   * const response = await client.modal.query({
   *   question: 'What are my preferences for morning routines?',
   *   user_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  query(body: ModalQueryParams, options?: RequestOptions): APIPromise<ModalQueryResponse> {
    return this._client.post('/v1/modal/query', { body, ...options });
  }

  /**
   * Query user's stored memories using multimodal inputs (video, image, or audio).
   *
   *     This endpoint accepts video, image, or audio content as base64-encoded strings and
   *     searches for relevant memories. The AI will:
   *     1. Understand the content of the multimodal input
   *     2. Search for related episodic memories
   *     3. Return formatted results with context
   *
   *     **Request Parameters:**
   *     - user_id (str, required): User or persona ID
   *     - video_base64 (str, optional): Base64 encoded video content
   *     - image_base64 (str, optional): Base64 encoded image content
   *     - audio_base64 (str, optional): Base64 encoded audio content (supports webm, wav, mp3, mp4, and other formats)
   *     - session_id (str, optional): Session identifier for conversation context
   *
   *     **Note:** At least one multimodal input (video, image, or audio) is required.
   *     Audio will be automatically converted to WAV format for processing.
   *
   *     **Response:**
   *     - new_prompt (str): Formatted string containing retrieved memories
   *     - raw_results (dict): Raw results from the memory retrieval
   *     - image_base64 (str, optional): Base64 encoded image - the original image or a representative frame from video
   *     - success (bool): True if query succeeded
   *
   *     **Example:**
   *     ```json
   *     {
   *         "user_id": "user-123",
   *         "video_base64": "base64_encoded_video...",
   *     }
   *     ```
   *
   *     Returns 200 OK with memory data. Requires JWT authentication.
   *
   * @example
   * ```ts
   * const response = await client.modal.queryMultimodality({
   *   user_id: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  queryMultimodality(
    body: ModalQueryMultimodalityParams,
    options?: RequestOptions,
  ): APIPromise<ModalQueryMultimodalityResponse> {
    return this._client.post('/v1/modal/multimodal-query', { body, ...options });
  }
}

/**
 * Response model for learning processing
 */
export interface ModalLearnResponse {
  /**
   * Status message about the learning process
   */
  message: string;

  /**
   * Session identifier used for the learning
   */
  session_id: string;

  /**
   * Job identifier if processed asynchronously
   */
  job_id?: string | null;

  /**
   * Whether the learning was processed successfully
   */
  success?: boolean;
}

/**
 * Response model for memory query processing
 */
export interface ModalQueryResponse {
  /**
   * Edited prompt for the query
   */
  new_prompt: string;

  /**
   * Raw results from the retrieval process
   */
  raw_results: { [key: string]: unknown };

  /**
   * Whether the query was processed successfully
   */
  success?: boolean;
}

/**
 * Response model for multimodal memory query
 */
export interface ModalQueryMultimodalityResponse {
  /**
   * Formatted string containing retrieved memories
   */
  new_prompt: string;

  /**
   * Base64 encoded image - either the original image or a representative frame from
   * video
   */
  image_base64?: string | null;

  /**
   * Raw results from the memory retrieval
   */
  raw_results?: { [key: string]: unknown };

  /**
   * Whether the query was processed successfully
   */
  success?: boolean;
}

export interface ModalLearnParams {
  /**
   * Single message to learn from with 'role' and 'content' fields
   */
  message: { [key: string]: unknown };

  /**
   * Unique identifier for the user
   */
  user_id: string;

  /**
   * Optional session identifier for conversation context
   */
  session_id?: string | null;

  /**
   * ISO format datetime string for the message timestamp
   */
  timestamp?: string | null;
}

export interface ModalQueryParams {
  /**
   * The question to query against user's memories
   */
  question: string;

  /**
   * Unique identifier for the user
   */
  user_id: string;

  /**
   * Optional list of memory types to exclude from retrieval. Valid types:
   * 'episodic', 'preference', 'identity', 'short_term'
   */
  filter_memory_types?: Array<string> | null;

  /**
   * Optional session identifier for conversation context
   */
  session_id?: string | null;
}

export interface ModalQueryMultimodalityParams {
  /**
   * Unique identifier for the user
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
   * Optional session identifier for conversation context
   */
  session_id?: string | null;

  /**
   * Base64 encoded video content
   */
  video_base64?: string | null;
}

export declare namespace Modal {
  export {
    type ModalLearnResponse as ModalLearnResponse,
    type ModalQueryResponse as ModalQueryResponse,
    type ModalQueryMultimodalityResponse as ModalQueryMultimodalityResponse,
    type ModalLearnParams as ModalLearnParams,
    type ModalQueryParams as ModalQueryParams,
    type ModalQueryMultimodalityParams as ModalQueryMultimodalityParams,
  };
}
