// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ElicitClient from 'elicit-labs';

const client = new ElicitClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource job', () => {
  // Prism tests are disabled
  test.skip('retrieveStatus: only required params', async () => {
    const responsePromise = client.data.job.retrieveStatus({
      job_id: '456e7890-e89b-12d3-a456-426614174001',
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
  test.skip('retrieveStatus: required and optional params', async () => {
    const response = await client.data.job.retrieveStatus({ job_id: '456e7890-e89b-12d3-a456-426614174001' });
  });
});
