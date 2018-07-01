// @flow
import Service from '~/core/Service';
import OrderList from '../models/OrderList';
import Order from '../models/order/Order';

export default class OrderService extends Service {
  async getList(): Promise<OrderList>{
    const { data } = await this.request.get({
      url: '/orders',
    });

    return new OrderList(data);
  }

  async getById(orderId: string): Promise<Order>{
    const { data } = await this.request.get({
      url: `/orders/${orderId}`,
    });

    return new Order(data);
  }

  async getCurrent(): Promise<Order>{
    const { data } = await this.request.get({
      url: `/orders/current`,
    });

    return new Order(data);
  }
}