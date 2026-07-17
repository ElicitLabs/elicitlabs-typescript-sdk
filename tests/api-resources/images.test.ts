// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ElicitClient from 'elicit-labs';

const client = new ElicitClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // Mock server tests are disabled
  test.skip('generate: only required params', async () => {
    const responsePromise = client.images.generate({ text_input: 'text_input', user_id: 'user_id' });
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
      text_input: 'text_input',
      user_id: 'user_id',
      aspect_ratio: 'aspect_ratio',
      consistency: { reference_ad_ids: ['string'], reference_generation_ids: ['string'] },
      edit: { source_generation_id: 'source_generation_id' },
      make_editable: true,
      mode: 'default',
      model: 'model',
      project_id: 'project_id',
      relayout: {
        ad_id: 'ad_id',
        auto_translate_copy: true,
        copy_overrides: { foo: 'string' },
        locale: 'locale',
        output_editability: 'standard',
        reuse_base_generation_id: 'reuse_base_generation_id',
        target_aspect_ratios: ['string'],
      },
      resolution: '1K',
      seed: 0,
    });
  });
});
