// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ElicitClient } from '../client';

export abstract class APIResource {
  protected _client: ElicitClient;

  constructor(client: ElicitClient) {
    this._client = client;
  }
}
