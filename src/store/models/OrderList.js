// @flow
import CommonList from './CommonList';
import OrderListItem from './OrderListItem';
import type { Link } from '~/core/models/Link';
import type { OrderListItemConstructor }  from './OrderListItem';
import type { CommonListConstructor } from './CommonList';

export default class OrderList extends CommonList<OrderListItem, OrderListItemConstructor> {
  constructor(props: CommonListConstructor<OrderListItemConstructor>) {
    super(props);
    this.items = props.items.map(order => new OrderListItem(order));
  }
}