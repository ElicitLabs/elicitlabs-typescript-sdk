// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ElicitClient from 'elicit-labs';

const client = new ElicitClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // Prism tests are disabled
  test.skip('authenticateWithGoogle: only required params', async () => {
    const responsePromise = client.demo.auth.authenticateWithGoogle({
      credential: 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ij...',
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
  test.skip('authenticateWithGoogle: required and optional params', async () => {
    const response = await client.demo.auth.authenticateWithGoogle({
      credential: 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ij...',
    });
  });
});
