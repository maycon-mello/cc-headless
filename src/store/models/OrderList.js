// @flow
import CommonList from './CommonList';
import OrderListItem from './OrderListItem';
import type { Link } from '~/core/models/Link';
import type { OrderListItemConstructor }  from './OrderListItem';
import type { CommonListConstructor } from './CommonList';

/**
 * Order list
 * @memberof store.models
 * @extends store.models.CommonList
 */
class OrderList extends CommonList<OrderListItem, OrderListItemConstructor> {
  /**
   * 
   * @param {store.models.CommonListConstructor} props 
   */
  constructor(props: CommonListConstructor<OrderListItemConstructor>) {
    super(props);
    this.items = props.items.map(order => new OrderListItem(order));
  }
}

export default OrderList;
