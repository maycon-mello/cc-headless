// @flow

import CCRequest from './CCRequest';
import Context from './Context';

export default class Service {
  context: Context;
  request: CCRequest;

  constructor(context: Context) {
    this.request = new CCRequest(context);
  }

  getContext(): Context {
    return this.context;
  }

  getRequest(): CCRequest {
    return this.request;
  }
}