// @flow
import type { Link } from '~/core/models/Link';

/**
 * @typedef CommonListConstructor
 * @memberof store.models
 * @property {number} total
 * @property {number} totalResults
 * @property {number} offset
 * @property {number} offset
 * @property {Array} links
 * @property {Array<C>} items
 */
export interface CommonListConstructor<C> {
  total: number;
  totalResults: number;
  offset: number;
  limit: number;
  links: Array<Link>;
  items: Array<C>;
}

/**
 * CommonList<T, C>
 * 
 * @memberof store.models
 */
class CommonList<T, C> {
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

export default CommonList;
