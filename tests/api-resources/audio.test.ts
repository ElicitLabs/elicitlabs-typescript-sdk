// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ElicitClient from 'elicit-labs';

const client = new ElicitClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audio', () => {
  // Mock server tests are disabled
  test.skip('generate: only required params', async () => {
    const responsePromise = client.audio.generate({
      text_input: 'Hello world, this is a test.',
      user_id: 'user_123',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('generate: required and optional params', async () => {
    const response = await client.audio.generate({
      text_input: 'Hello world, this is a test.',
      user_id: 'user_123',
      async_mode: true,
      audio_base64: 'audio_base64',
      audio_type: 'speech',
      callback_url: 'callback_url',
      disabled_learning: true,
      duration: 0,
      image_base64: 'image_base64',
      max_reasoning_iterations: 1,
      model: 'eleven-turbo',
      notification_email: 'notification_email',
      persona_id: 'persona_id',
      project_id: 'proj_ABC',
      seed: 0,
      session_id: 'session_id',
      speed: 1,
      use_reasoning: true,
      video_base64: 'video_base64',
      voice: 'rachel',
    });
  });
});
