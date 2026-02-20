// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ElicitClient from 'elicit-labs';

const client = new ElicitClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource modal', () => {
  // Mock server tests are disabled
  test.skip('learn: only required params', async () => {
    const responsePromise = client.modal.learn({
      messages: [
        { content: 'job_id_123' },
        { content: 'The animation is too slow' },
        { content: "Good catch. Let's remember to speed it up to 200ms for the next sprint." },
      ],
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
  test.skip('learn: required and optional params', async () => {
    const response = await client.modal.learn({
      messages: [
        {
          content: 'job_id_123',
          role: 'role',
          type: 'image',
        },
        {
          content: 'The animation is too slow',
          role: 'role',
          type: 'feedback',
        },
        {
          content: "Good catch. Let's remember to speed it up to 200ms for the next sprint.",
          role: 'user',
          type: 'type',
        },
      ],
      user_id: 'user_123',
      persona_id: 'persona_id',
      project_id: 'proj_ABC',
      session_id: 'session_123',
      timestamp: '2026-02-07T12:00:00Z',
    });
  });

  // Mock server tests are disabled
  test.skip('query: only required params', async () => {
    const responsePromise = client.modal.query({ user_id: 'user_123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('query: required and optional params', async () => {
    const response = await client.modal.query({
      user_id: 'user_123',
      audio_base64: 'audio_base64',
      image_base64: 'image_base64',
      include_modalities: ['text', 'video'],
      persona_id: 'persona_id',
      project_id: 'proj_ABC',
      session_id: 'session_id',
      text_input: 'text_input',
      video_base64: 'video_base64',
    });
  });
});
