// @flow

export type BasicAuthProps = {
  username: string;
  password: string;
}

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
  /**
   * Env url
   * Eg.: https://ccstore-<env>.oracleoutsourcing.com
   */
  envUrl: string;
  enableEnvAuth: boolean;
  envAuth: BasicAuthProps;
  authToken: string;
  applicationKey: string;

  /**
   * Api basePath
   * Eg.: /ccadmin/v1
   */
  basePath: string;

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

  getEnvUrl(): string {
    return this.envUrl;
  }

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
