// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ElicitClient from 'elicit-labs';

const client = new ElicitClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chat', () => {
  // Mock server tests are disabled
  test.skip('createCompletion: only required params', async () => {
    const responsePromise = client.chat.createCompletion({
      messages: [{ content: 'string', role: 'role' }],
      user_id: 'user_id',
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
  test.skip('createCompletion: required and optional params', async () => {
    const response = await client.chat.createCompletion({
      messages: [{ content: 'string', role: 'role' }],
      user_id: 'user_id',
      audio_config: {
        audio_type: 'audio_type',
        duration: 0,
        model: 'model',
        speed: 0.25,
        voice: 'voice',
      },
      disabled_learning: true,
      image_config: {
        model: 'model',
        seed: 0,
        size: 'size',
      },
      max_reasoning_iterations: 1,
      modalities: ['string'],
      model: 'model',
      persona_id: 'persona_id',
      project_id: 'project_id',
      session_id: 'session_id',
      stream: true,
      use_reasoning: true,
    });
  });
});
