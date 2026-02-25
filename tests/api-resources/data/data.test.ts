// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ElicitClient from 'elicit-labs';

const client = new ElicitClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource data', () => {
  // Prism tests are disabled
  test.skip('ingest: only required params', async () => {
    const response = await client.data.ingest({
      content_type: 'text',
      payload: 'From: john@example.com\nTo: jane@example.com\nSubject: Hello\n\nHello Jane!',
      user_id: 'user-123',
    });
    expect(response).not.toBeInstanceOf(Response);
    expect(response.job_id).toBeDefined();
  });

  // Prism tests are disabled
  test.skip('ingest: required and optional params', async () => {
    const response = await client.data.ingest({
      content_type: 'text',
      payload: 'From: john@example.com\nTo: jane@example.com\nSubject: Hello\n\nHello Jane!',
      user_id: 'user-123',
      content_description: 'Email correspondence about project updates',
      filename: 'filename',
      persona_id: 'persona_id',
      project_id: 'project_id',
      session_id: 'session_id',
      timestamp: '2024-01-01T12:00:00Z',
    });
  });
});
