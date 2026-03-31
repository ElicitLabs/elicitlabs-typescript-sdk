// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Audio extends APIResource {
  /**
   * Dedicated audio generation endpoint using the Universal Schema with flat
   * parameters.
   *
   *     Supports three audio types:
   *     - **speech**: Multi-speaker TTS (auto-detects characters, designs unique voices per entity)
   *     - **music**: AI-generated music
   *     - **sfx**: AI-generated sound effects
   *
   *     **Universal Base Schema:**
   *     - user_id (str, required): The end-user ID
   *     - project_id (str, required): The project ID
   *     - persona_id (str, optional): The specific system persona/voice to use
   *     - disabled_learning (bool, optional): If true, request is ignored by long-term memory
   *
   *     **Input:**
   *     - text_input (str, required): Text to speak or audio prompt
   *     - context (str, optional): Additional context
   *
   *     **Audio Params (Flat):**
   *     - model (str, required): Model ID (e.g., eleven-turbo)
   *     - voice (str, required): Voice ID for TTS
   *     - audio_type (str, optional): 'speech', 'music', or 'sfx'
   *     - speed (float, optional): Playback speed (0.5-2.0)
   *     - duration (float, optional): Max duration in seconds
   *     - seed (int, optional): Random seed for reproducibility
   *
   *     **Reference inputs:**
   *     - image_base64 (str, optional): Base64 encoded reference image for context
   *     - video_base64 (str, optional): Base64 encoded reference video for context
   *     - audio_base64 (str, optional): Base64 encoded reference audio for context
   *
   *     **Authentication**: Requires valid API key or JWT token
   *
   *     Note: Reasoning is not currently supported for audio generation.
   *
   * @example
   * ```ts
   * const response = await client.audio.generate({
   *   text_input: 'Hello world, this is a test.',
   *   user_id: 'user_123',
   * });
   * ```
   */
  generate(body: AudioGenerateParams, options?: RequestOptions): APIPromise<AudioGenerateResponse> {
    return this._client.post('/v1/audio/generations', { body, ...options });
  }
}

/**
 * Response model for audio generation
 */
export interface AudioGenerateResponse {
  /**
   * Audio format, e.g. mp3, wav
   */
  audio_format: string;

  /**
   * Type of audio generated
   */
  audio_type: string;

  /**
   * Base64 encoded audio content. Present when the payload is under ~30 MB. May be
   * absent for very large outputs.
   */
  audio_base64?: string | null;

  /**
   * Signed GCS URL to download the audio (expires after 24 h). Always present when
   * the upload succeeds.
   */
  audio_url?: string | null;

  /**
   * Duration of generated audio in seconds
   */
  duration_seconds?: number | null;

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

export interface AudioGenerateParams {
  /**
   * The prompt/description for audio generation
   */
  text_input: string;

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
   * Audio type: 'speech', 'sfx', or 'music'
   */
  audio_type?: 'speech' | 'sfx' | 'music';

  /**
   * Optional URL the server will POST to when generation completes.
   */
  callback_url?: string | null;

  /**
   * If true, this request is ignored by long-term memory
   */
  disabled_learning?: boolean;

  /**
   * Max duration in seconds for music/sfx (Lyria 2 always generates 30s)
   */
  duration?: number | null;

  /**
   * Base64 encoded reference image for context
   */
  image_base64?: string | null;

  /**
   * Max reasoning steps if reasoning is enabled
   */
  max_reasoning_iterations?: number;

  /**
   * Audio generation model: 'lyria-2' (Google Lyria 2 on Vertex AI, default for
   * music — 30s 48kHz WAV), 'audiocraft' (MusicGen/AudioGen on Cloud Run), or
   * 'eleven-turbo' (ElevenLabs TTS for speech)
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
   * Random seed for deterministic generation (Lyria 2 only, cannot be combined with
   * sample_count)
   */
  seed?: number | null;

  /**
   * Session ID for conversation context
   */
  session_id?: string | null;

  /**
   * Playback speed (0.5-2.0), only for speech
   */
  speed?: number;

  /**
   * Enable Chain-of-Thought/Reasoning steps before answering
   */
  use_reasoning?: boolean;

  /**
   * Base64 encoded reference video for context
   */
  video_base64?: string | null;

  /**
   * Voice ID for TTS (alloy, echo, fable, onyx, nova, shimmer)
   */
  voice?: string;
}

export declare namespace Audio {
  export {
    type AudioGenerateResponse as AudioGenerateResponse,
    type AudioGenerateParams as AudioGenerateParams,
  };
}
