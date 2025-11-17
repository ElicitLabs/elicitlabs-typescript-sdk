// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as KeysAPI from './keys';
import { KeyCreateParams, KeyCreateResponse, KeyListResponse, KeyRevokeResponse, Keys } from './keys';

export class Auth extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
}

Auth.Keys = Keys;

export declare namespace Auth {
  export {
    Keys as Keys,
    type KeyCreateResponse as KeyCreateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyRevokeResponse as KeyRevokeResponse,
    type KeyCreateParams as KeyCreateParams,
  };
}
