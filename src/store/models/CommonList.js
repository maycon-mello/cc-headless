// @flow
import type { Link } from '~/core/models/Link';

export interface CommonListConstructor<C> {
  total: number;
  totalResults: number;
  offset: number;
  limit: number;
  links: Array<Link>;
  items: Array<C>;
}

export default class CommonList<T, C> {
  total: number;
  totalResults: number;
  offset: number;
  limit: number;
  items: Array<T>;

  constructor(props: CommonListConstructor<C>) {
    this.limit = props.limit;
    this.offset = props.offset;
    this.total = props.total;
    this.totalResults = props.totalResults; 
  }
}