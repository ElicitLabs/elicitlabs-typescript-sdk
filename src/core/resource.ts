// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Elicit } from '../client';

export abstract class APIResource {
  protected _client: Elicit;

  constructor(client: Elicit) {
    this._client = client;
  }
}
