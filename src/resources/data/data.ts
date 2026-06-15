// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobAPI from './job';
import { Job } from './job';

export class Data extends APIResource {
  job: JobAPI.Job = new JobAPI.Job(this._client);
}

Data.Job = Job;

export declare namespace Data {
  export { Job as Job };
}
