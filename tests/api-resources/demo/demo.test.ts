// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ElicitClient from 'elicit-labs';

const client = new ElicitClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource demo', () => {
  // Prism tests are disabled
  test.skip('createUser: only required params', async () => {
    const responsePromise = client.demo.createUser({
      email: 'user@example.com',
      name: 'John Doe',
      password: 'securepassword123',
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
  test.skip('createUser: required and optional params', async () => {
    const response = await client.demo.createUser({
      email: 'user@example.com',
      name: 'John Doe',
      password: 'securepassword123',
      org_id: 'org_id',
    });
  });

  // Prism tests are disabled
  test.skip('generateResetLink: only required params', async () => {
    const responsePromise = client.demo.generateResetLink({ email: 'user@example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('generateResetLink: required and optional params', async () => {
    const response = await client.demo.generateResetLink({ email: 'user@example.com' });
  });

  // Prism tests are disabled
  test.skip('requestPasswordReset: only required params', async () => {
    const responsePromise = client.demo.requestPasswordReset({ email: 'user@example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('requestPasswordReset: required and optional params', async () => {
    const response = await client.demo.requestPasswordReset({ email: 'user@example.com' });
  });

  // Prism tests are disabled
  test.skip('resetPassword: only required params', async () => {
    const responsePromise = client.demo.resetPassword({
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...',
      confirm_password: 'newpassword456',
      new_password: 'newpassword456',
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
  test.skip('resetPassword: required and optional params', async () => {
    const response = await client.demo.resetPassword({
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...',
      confirm_password: 'newpassword456',
      new_password: 'newpassword456',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveCurrentUser', async () => {
    const responsePromise = client.demo.retrieveCurrentUser();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('signIn: only required params', async () => {
    const responsePromise = client.demo.signIn({ email: 'user@example.com', password: 'securepassword123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('signIn: required and optional params', async () => {
    const response = await client.demo.signIn({ email: 'user@example.com', password: 'securepassword123' });
  });

  // Prism tests are disabled
  test.skip('submitEarlyAccessRequest: only required params', async () => {
    const responsePromise = client.demo.submitEarlyAccessRequest({
      email: 'user@example.com',
      name: 'John Doe',
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
  test.skip('submitEarlyAccessRequest: required and optional params', async () => {
    const response = await client.demo.submitEarlyAccessRequest({
      email: 'user@example.com',
      name: 'John Doe',
      company_size: 'company_size',
      industry: 'SaaS',
      role: 'CTO',
    });
  });
});
