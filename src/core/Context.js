// @flow

/**
 * @typedef BasicAuthProps
 * @memberof core
 * @type Object
 * @property {string} username - Username
 * @property {string} password - Password
 */
export type BasicAuthProps = {
  username: string;
  password: string;
}

/**
 * @typedef ContextConstructor
 * @memberof core
 * @type Object
 * @property {string} envUrl - Environment URL
 * @property {string} enableEnvAuth - Enable env auth
 */
export type ContextConstructor = {
  envUrl: string;
  enableEnvAuth?: boolean;
  envAuth?: BasicAuthProps;
  applicationKey?: string;
  basePath?: string;
}

/**
 * Application context
 * @memberof core
 */
class Context {
  envUrl: string;
  enableEnvAuth: boolean;
  envAuth: ?BasicAuthProps;
  authToken: ?string;
  applicationKey: ?string;
  basePath: string;

  /**
   * Create context
   * @param {core.ContextConstructor} props 
   */
  constructor(props: ContextConstructor) {
    this.envUrl = props.envUrl;
    this.enableEnvAuth = props.enableEnvAuth || false;
    this.envAuth = props.envAuth;
    this.applicationKey = props.applicationKey;
    this.basePath = props.basePath || '';
  }

  getAuthToken(): ?string {
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

  /**
   * @return {core.BasicAuthProps} basic auth props
   */
  getEnvAuth(): ?BasicAuthProps {
    return this.envAuth;
  }

  /**
   * Set env auth 
   * @param {core.BasicAuthProps} props 
   */
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
  getBasePath(): ?string {
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
