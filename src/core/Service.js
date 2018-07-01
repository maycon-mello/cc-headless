// @flow

import CCRequest from './CCRequest';
import Context from './Context';

/**
 * Abstract Service
 * @memberof core
 */
class Service {
  context: Context;
  request: CCRequest;

  /**
   * Create service instance
   * @param {Context} context 
   */
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

export default Service;
