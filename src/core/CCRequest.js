// @flow
import axios, { AxiosRequestConfig, AxiosPromise, AxiosBasicCredentials } from 'axios';
import qs from 'qs';
import Context from './Context';

export type CCRequestConfig = {
  url: string;
  method?: string;
  headers?: any;
  data?: any;
  timeout?: number;
  withCredentials?: boolean;
  auth?: AxiosBasicCredentials;
}

/**
 * @class CCRequest
 * @memberof core
 */
class CCRequest {
  context: Context;

  /**
   * Create a CCRequest
   * 
   * @param {Context} context 
   */
  constructor(context: Context) {
    this.context = context;
  }

  addHeaders(config: AxiosRequestConfig, headers: Object) {
    if (!config.headers) {
      config.headers = {};
    }

    config.headers = {
      ...config.headers,
      ...headers,
    }
  }

  resolveUrl(url: string): string {
    return `${this.context.getEnvUrl()}${this.context.getBasePath()}${url}`
  }

  addDefaultHeaders(configs: AxiosRequestConfig) {
    const headers:any = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const authToken = this.context.getAuthToken();

    if (authToken) {
      headers['Authorization'] = authToken;
    }

    this.addHeaders(configs, headers);
  }

  async createRequest(props: CCRequestConfig):AxiosPromise {
    const { context } = this;
    const configs: AxiosRequestConfig  = {};
    const authToken = context.getAuthToken();

    if (!authToken && props.public) {
      configs.withCredentials = true;
      configs.auth = {
        username: context.envAuth.username,
        password: context.envAuth.password,
      }
    }

    this.addDefaultHeaders(configs);

    if (props.headers) {
      this.addHeaders(configs, props.headers);
    }

    if (props.urlEncoded) {
      this.addHeaders(configs, {
        ['Content-Type']: 'application/x-www-form-urlencoded',
      })
    }

    if (props.form) {
      // TODO: Should send it as form props
      props.url = props.url + '?' + qs.stringify(props.form);
    }

    // Send null if data is empty, axios doesn't sets content type
    // if data is undefined
    configs.data = props.data || null;
  
    configs.url = this.resolveUrl(props.url);
    configs.method = props.method;

    try {
      return await axios(configs);
    } catch(err) {
      console.error(err);

      if (err.response && err.response.data) {
        throw err.response.data;
      }

      throw err;
    }
  }

  /**
   * Performs GET request
   * @param {CCRequestConfig} props 
   */
  get(props: CCRequestConfig):AxiosPromise {
    return this.createRequest({
      method: 'get',
      ...props,
    });
  }

  /**
   * Performs POST request
   * @param {CCRequestConfig} props 
   * @return {AxiosPromise} axios
   */
  post(props: CCRequestConfig):AxiosPromise {
    return this.createRequest({
      method: 'post',
      ...props,
    });
  }

  /**
   * Perform PUT request
   * @param {CCRequestConfig} props 
   */
  put(props: CCRequestConfig) {
    return this.createRequest({
      method: 'put',
      ...props,
    });
  }

  /**
   * Perform DELETE request
   * @param {CCRequestConfig} props 
   */
  delete(props: AxiosRequestConfig) {
    return this.createRequest({
      method: 'delete',
      ...props,
    });
  }
}

export default CCRequest;