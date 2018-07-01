// @flow
import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import Context from './Context';

export interface CCRequestConfig extends AxiosRequestConfig {
  public: ?boolean;
  urlEncoded: ?boolean;
}

export default class CCRequest {
  context: Context;

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
    };

    const authToken = this.context.getAuthToken();

    if (authToken) {
      headers['Authorization'] = authToken;
    }

    this.addHeaders(configs, headers);
  }

  createRequest(props: CCRequestConfig) {
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

    console.log(configs);

    return axios(configs);
  }

  get(props: CCRequestConfig) {
    return this.createRequest({
      method: 'get',
      ...props,
    });
  }

  post(props: CCRequestConfig) {
    return this.createRequest({
      method: 'post',
      ...props,
    });
  }

  put(props: CCRequestConfig) {
    return this.createRequest({
      method: 'put',
      ...props,
    });
  }

  delete(props: AxiosRequestConfig) {
    return this.createRequest({
      method: 'delete',
      ...props,
    });
  }
}