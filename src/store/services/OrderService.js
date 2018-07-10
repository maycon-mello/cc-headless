// @flow
import Service from '~/core/Service';
import OrderList from '../models/OrderList';
import Order from '../models/order/Order';
import PriceOrderRequest from '../models/requests/PriceOrderRequest';
import UpdateCurrentOrderRequest from '../models/requests/UpdateCurrentOrderRequest';
import UpdateOrderRequest from '../models/requests/UpdateOrderRequest';
import SubmitOrderRequest from '../models/requests/SubmitOrderRequest';
import CreateOrderRequest from '../models/requests/CreateOrderRequest';

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
   * @param {store.models.requests.UpdateCurrentOrderRequest} order
   * @return {store.models.Order} updated order
   */
  async updateCurrentOrder(order: UpdateCurrentOrderRequest | Order): Promise<Order> {
    if (order instanceof Order) {
      order = UpdateCurrentOrderRequest.createFromOrder(order);
    }

    console.log('#mzm update order with', order.shippingAddress);

    const { data } = await this.request.post({
      url: `/orders/current`,
      data: order,
    });

    return new Order(data);
  }

    /**
   * Create Order.
   * @param {store.models.requests.CreateOrderRequest} order
   * @return {store.models.Order} created order
   */
  async createOrder(order: CreateOrderRequest | Order): Promise<Order> {
    if (order instanceof Order) {
      order = CreateOrderRequest.createFromOrder(order);
    }

    const { data } = await this.request.post({
      url: `/orders/current`,
      data: order,
    });

    return new Order(data);
  }

  /**
   * Update Order.
   * @param {store.models.requests.OrderRequest} order
   * @return {store.models.Order} updated order
   */
  async updateOrder(order: UpdateOrderRequest | Order): Promise<Order> {
    if (order instanceof Order) {
      order = UpdateOrderRequest.createFromOrder(order);
    }

    const { data } = await this.request.post({
      url: `/orders/${order.id}`,
      data: order,
    });

    return new Order(data);
  }

  /**
   * Update Order.
   * @param {store.models.requests.OrderRequest} order
   * @return {store.models.Order} updated order
   */
  async submitOrder(order: SubmitOrderRequest | Order): Promise<Order> {
    if (order instanceof Order) {
      order = SubmitOrderRequest.createFromOrder(order);
    }

    const { data } = await this.request.post({
      url: `/orders`,
      data: order,
    });

    return new Order(data);
  }

  /**
   * Price an orer
   * @param {store.models.requests.PriceOrderRequest | store.models.Order} order
   * @return {store.models.Order} priced order
   */
  async priceOrder(order: PriceOrderRequest | Order): Promise<Order> {
    if (order instanceof Order) {
      order = PriceOrderRequest.createFromOrder(order);
    }

    const { data } = await this.request.post({
      url: `/orders/price`,
      data: order,
    });

    return new Order(data);
  }
}

export default OrderService;
