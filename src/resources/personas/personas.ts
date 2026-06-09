// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LinkAPI from './link';
import { Link } from './link';

export class Personas extends APIResource {
  link: LinkAPI.Link = new LinkAPI.Link(this._client);
}

Personas.Link = Link;

export declare namespace Personas {
  export { Link as Link };
}
