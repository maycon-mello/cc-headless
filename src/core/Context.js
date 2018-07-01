// @flow

export type BasicAuthProps = {
  username: string;
  password: string;
}

/**
 * @typedef ContextProps
 * @type Object
 * @property {string} envUrl - Environment URL
 * @property {string} enableEnvAuth - Enable env auth
 */
export type ContextProps = {
  envUrl: string;
  enableEnvAuth: boolean;
  envAuth: BasicAuthProps;
  applicationKey: string;
  basePath: string;
}

/**
 * Application context
 */
class Context {
  envUrl: string;
  enableEnvAuth: boolean;
  envAuth: BasicAuthProps;
  authToken: string;
  applicationKey: string;
  basePath: string;

  /**
   * Create context
   * @param {ContextProps} props 
   */
  constructor(props: ContextProps) {
    this.envUrl = props.envUrl;
    this.enableEnvAuth = props.enableEnvAuth;
    this.envAuth = props.envAuth;
    this.applicationKey = props.applicationKey;
    this.basePath = props.basePath;
  }

  getAuthToken(): string {
    return this.authToken;
  }

  setAuthToken(token: string) {
    this.authToken = token;
  }

  getEnableEnvAuth(): boolean {
    return this.enableEnvAuth;
  }

  setEnableEnvAuth(enable: boolean) {
    this.enableEnvAuth = enable;
  }

  getEnvAuth(): BasicAuthProps {
    return this.envAuth;
  }

  setEnvAuth(props: BasicAuthProps) {
    this.envAuth = props;
  }

  /**
   * Environment url
   * 
   * @return {string}
   */
  getEnvUrl(): string {
    return this.envUrl;
  }

  /**
   * Set environment URL
   * @param {string} url - Ex.: https://ccstore-{env}.oracleoutsourcing.com 
   */
  setEnvUrl(url: string) {
    this.envUrl = url;
  }

  /**
   * Get base path value
   * @return {string} base path
   */
  getBasePath(): string {
    return this.basePath;
  }

  /**
   * Set base path value
   * @param {string} path 
   */
  setBasePath(path: string) {
    this.basePath = path;
  }
}

export default Context;
