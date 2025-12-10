// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ElicitClient from 'elicit-labs';

const client = new ElicitClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource modal', () => {
  // Prism tests are disabled
  test.skip('learn: only required params', async () => {
    const responsePromise = client.modal.learn({
      message: { content: 'bar', role: 'bar' },
      user_id: '123e4567-e89b-12d3-a456-426614174000',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('learn: required and optional params', async () => {
    const response = await client.modal.learn({
      message: { content: 'bar', role: 'bar' },
      user_id: '123e4567-e89b-12d3-a456-426614174000',
      session_id: 'session_123',
      timestamp: '2024-01-01T10:00:00Z',
    });
  });

  // Prism tests are disabled
  test.skip('query: only required params', async () => {
    const responsePromise = client.modal.query({
      question: 'What are my preferences for morning routines?',
      user_id: '123e4567-e89b-12d3-a456-426614174000',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('query: required and optional params', async () => {
    const response = await client.modal.query({
      question: 'What are my preferences for morning routines?',
      user_id: '123e4567-e89b-12d3-a456-426614174000',
      filter_memory_types: ['episodic', 'identity'],
      session_id: 'session_123',
    });
  });

  // Prism tests are disabled
  test.skip('queryMultimodality: only required params', async () => {
    const responsePromise = client.modal.queryMultimodality({
      user_id: '123e4567-e89b-12d3-a456-426614174000',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('queryMultimodality: required and optional params', async () => {
    const response = await client.modal.queryMultimodality({
      user_id: '123e4567-e89b-12d3-a456-426614174000',
      audio_base64: 'audio_base64',
      image_base64: 'image_base64',
      session_id: 'session_123',
      video_base64: 'base64_encoded_video_content...',
    });
  });
});
