// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ElicitClient from 'elicit-labs';

const client = new ElicitClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // Mock server tests are disabled
  test.skip('generate: only required params', async () => {
    const responsePromise = client.images.generate({
      text_input: 'A golden retriever in a space suit',
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
    const response = await client.images.generate({
      text_input: 'A golden retriever in a space suit',
      user_id: 'user_123',
      audio_base64: 'audio_base64',
      disabled_learning: true,
      image_base64: 'image_base64',
      max_reasoning_iterations: 1,
      model: 'gemini-3.1-flash',
      persona_id: 'persona_id',
      project_id: 'proj_ABC',
      resolution: '2K',
      seed: 12345,
      session_id: 'session_id',
      size: '1024x1024',
      use_reasoning: false,
      video_base64: 'video_base64',
    });
  });
});
