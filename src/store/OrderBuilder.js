// @flow
import Order from './models/order/Order';
import OrderService from './services/OrderService';
import StoreContext from '~/store/core/StoreContext';

/**
 * Create an order
 */
class OrderBuilder {
  order: Order;
  isGuest: boolean;
  service: OrderService;
  isLoading: boolean;
  
  constructor(service: OrderService, order: Order, isGuest: boolean) {
    this.service = service;
    this.isGuest = isGuest;
    this.order = order;
  }

  setIsGuest(isGuest: boolean) {
    this.isGuest = isGuest;
  }

  getIsGuest(): boolean {
    return this.isGuest;
  }

  async update(order: Order): Promise<Order> {
    this.isLoading = true;
    let updatedOrder;

    if (this.isGuest) {
      updatedOrder = await this.service.priceOrder(order);
    } else {
      updatedOrder = await this.service.updateCurrentOrder(order);
    }

    this.order = updatedOrder;
    this.isLoading = false;

    return updatedOrder;
  }

  getOrder(): Order {
    return this.order;
  }

  /**
   * 
   */
  async refresh(): Promise<Order> {
    return this.update(this.order);
  }

  async fetchCurrentOrder() {
    this.order = await this.service.getCurrent();
  }

  submit() {

  }

  static async create(context: StoreContext, isGuest: boolean) {
    const service = new OrderService(context);

    // get order from session if exists
    const session = context.getSession();
    const order = session && session.getOrder();

    const builder = new OrderBuilder(service, order, isGuest);

    if (!isGuest) {
      await builder.fetchCurrentOrder();

      // Update session
      if (session) {
        session.setOrder(builder.getOrder());
      }
    }

    return builder;
  }
}

export default OrderBuilder;
