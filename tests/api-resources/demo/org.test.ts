// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ElicitClient from 'elicit-labs';

const client = new ElicitClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource org', () => {
  // Prism tests are disabled
  test.skip('listOrganizationMembers: only required params', async () => {
    const responsePromise = client.demo.org.listOrganizationMembers({
      org_id: '123e4567-e89b-12d3-a456-426614174000',
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
  test.skip('listOrganizationMembers: required and optional params', async () => {
    const response = await client.demo.org.listOrganizationMembers({
      org_id: '123e4567-e89b-12d3-a456-426614174000',
    });
  });
});
