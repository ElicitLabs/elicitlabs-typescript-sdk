// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ElicitClient from 'elicit-labs';

const client = new ElicitClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inference', () => {
  // Prism tests are disabled
  test.skip('generateCompletion: only required params', async () => {
    const responsePromise = client.inference.generateCompletion({
      content: [
        { content: 'You are a helpful AI assistant.', role: 'system' },
        { content: 'Hello, how are you?', role: 'user' },
      ],
      user_id: 'user-123',
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
  test.skip('generateCompletion: required and optional params', async () => {
    const response = await client.inference.generateCompletion({
      content: [
        { content: 'You are a helpful AI assistant.', role: 'system' },
        { content: 'Hello, how are you?', role: 'user' },
      ],
      user_id: 'user-123',
      disabled_learning: false,
      model: 'gpt-4.1-mini',
      session_id: 'session-abc',
    });
  });

  // Prism tests are disabled
  test.skip('generateMultimodalityCompletion: only required params', async () => {
    const responsePromise = client.inference.generateMultimodalityCompletion({
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
  test.skip('generateMultimodalityCompletion: required and optional params', async () => {
    const response = await client.inference.generateMultimodalityCompletion({
      user_id: '123e4567-e89b-12d3-a456-426614174000',
      audio_base64: 'base64_encoded_audio...',
      context: 'context',
      disabled_learning: false,
      image_base64: 'base64_encoded_image...',
      model: 'gemini-2.5-flash',
      output_type: 'text',
      question: 'What do you see?',
      session_id: 'session_123',
      speed: 1,
      video_base64: 'base64_encoded_video...',
      voice: 'alloy',
    });
  });

  // Prism tests are disabled
  test.skip('generatePersonaChat: only required params', async () => {
    const responsePromise = client.inference.generatePersonaChat({
      content: [
        { content: 'You are a helpful AI assistant.', role: 'system' },
        { content: 'Hello, how are you?', role: 'user' },
      ],
      user_id: 'persona-123',
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
  test.skip('generatePersonaChat: required and optional params', async () => {
    const response = await client.inference.generatePersonaChat({
      content: [
        { content: 'You are a helpful AI assistant.', role: 'system' },
        { content: 'Hello, how are you?', role: 'user' },
      ],
      user_id: 'persona-123',
      disabled_learning: true,
      model: 'gpt-4.1-mini',
      session_id: 'session-abc',
    });
  });
});
