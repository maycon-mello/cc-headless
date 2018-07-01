// @flow
import Service from '~/core/Service';
import OrderList from '../models/OrderList';
import Order from '../models/order/Order';

/**
 * Order Service
 * @memberof store.services
 * @extends Service
 */
class OrderService extends Service {

  /**
   * Get order lis
   * @returns {Promise.<store.models.OrderList>} list of orders
   */
  async getList(): Promise<OrderList>{
    const { data } = await this.request.get({
      url: '/orders',
    });

    return new OrderList(data);
  }

  /**
   * Get profile order by id
   * 
   * @param {string} orderId 
   * @return {Promise.<store.models.Order>} order
   */
  async getById(orderId: string): Promise<Order>{
    const { data } = await this.request.get({
      url: `/orders/${orderId}`,
    });

    return new Order(data);
  }

  /**
   * Get current order for logged in profile
   * @return {Promise.<store.models.Order>} current order
   */
  async getCurrent(): Promise<Order>{
    const { data } = await this.request.get({
      url: `/orders/current`,
    });

    return new Order(data);
  }
}

export default OrderService;
