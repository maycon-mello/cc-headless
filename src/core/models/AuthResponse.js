// @flow
import type { Link } from './Link';

export type OccAuthReponse = {
  access_token: string;
  expires_in: number;
  links: Array<Link>;
  token_type: string;
}

export default class AuthResponse {
  token: string;
  expiresIn: number;
  tokenType: string;

  constructor(props: OccAuthReponse) {
    this.token = props.access_token;
    this.expiresIn = props.expires_in;
    this.tokenType = props.token_type;
  }
}