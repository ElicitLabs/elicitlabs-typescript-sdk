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
    type InferenceGeneratePersonaChatResponse as InferenceGeneratePersonaChatResponse,
    type InferenceGenerateCompletionParams as InferenceGenerateCompletionParams,
    type InferenceGeneratePersonaChatParams as InferenceGeneratePersonaChatParams,
  };
}
