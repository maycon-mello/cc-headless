// @flow
import Service from '~/core/Service';
import OrderList from '../models/OrderList';
import Order from '../models/order/Order';
import OrderRequest from '../models/requests/OrderRequest';

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
   * Get Incomplete Order
   * @return {Promise.<store.models.Order>} Returns incomplete order of the logged-in user
   */
  async getCurrent(): Promise<Order>{
    const { data } = await this.request.get({
      url: `/orders/current`,
    });

    return new Order(data);
  }

  /**
   * Update Current Profile Order. Updates the persisted order for the logged in user
   * @param {store.models.requests.OrderRequest} order
   * @return {store.models.Order} updated order
   */
  async updateCurrentOrder(order: OrderRequest): Promise<Order> {
    const { data } = await this.request.post({
      url: `/orders/current`,
    });

    return new Order(data);
  }

  async createOrder(order: Order) {

  }

  async priceOrder(order: Order) {

  }
}

export default OrderService;
