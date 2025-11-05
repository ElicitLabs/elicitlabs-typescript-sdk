// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Elicit from 'elicit-labs';

const client = new Elicit({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource machine', () => {
  // Prism tests are disabled
  test.skip('learn: only required params', async () => {
    const responsePromise = client.machine.learn({
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
    const response = await client.machine.learn({
      message: { content: 'bar', role: 'bar' },
      user_id: '123e4567-e89b-12d3-a456-426614174000',
      datetime_input: '2024-01-01T10:00:00Z',
      session_id: 'session_123',
    });
  });

  // Prism tests are disabled
  test.skip('query: only required params', async () => {
    const responsePromise = client.machine.query({
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
    const response = await client.machine.query({
      question: 'What are my preferences for morning routines?',
      user_id: '123e4567-e89b-12d3-a456-426614174000',
      filter_memory_types: ['episodic', 'identity'],
      session_id: 'session_123',
    });
  });
});
