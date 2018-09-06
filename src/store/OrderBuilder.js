// @flow
import Order from './models/order/Order';
import OrderService from './services/OrderService';
import StoreContext from '~/store/core/StoreContext';
import ContextProvider from '~/core/ContextProvider';
import ShoppingCart from './models/order/ShoppingCart';

/**
 * Create an order
 */
class OrderBuilder {
  order: Order;
  isGuest: boolean;
  service: OrderService;
  isLoading: boolean;

  constructor(service: OrderService, order: Order, isGuest: boolean, context: any) {
    this.service = service;
    this.isGuest = isGuest;
    this.order = order;
    this.context = context;
  }

  setIsGuest(isGuest: boolean) {
    this.isGuest = isGuest;
  }

  getIsGuest(): boolean {
    return this.isGuest;
  }

  async update(order: Order): Promise<Order> {
    let updatedOrder;

    if (this.isGuest) {
      updatedOrder = await this.service.priceOrder(order);
    } else {
      updatedOrder = await this.service.updateCurrentOrder(order);
    }

    this.order = updatedOrder;

    const session = this.context.session;

    if (session) {
      session.setOrder(order);
    }

    return updatedOrder;
  }

  getOrder(): Order {
    return this.order;
  }

  getShoppingCart(): ShoppingCart {
    if (!this.order.shoppingCart instanceof ShoppingCart) {
      this.order.shoppingCart = new ShoppingCart(this.order.shoppingCart || {});
    }

    return this.order.shoppingCart;
  }

  setOrder(order: Order): OrderBuilder {
    this.order = order;
    return this;
  }

  /**
   * 
   */
  async priceOrder(): Promise<Order> {
    return this.update(this.order);
  }

  async fetchCurrentOrder() {
    this.order = await this.service.getCurrent();
  }

  submit() {

  }

  static async create({ context, isGuest = false } = {}) {
    if (!context) {
      context = ContextProvider.getContext();
    }

    if (context instanceof StoreContext === false) {
      // throw 'The current context must be an instance of StoreContext'
    }

    const service = new OrderService(context);

    // get order from session if exists
    const session = await context.getSession();

    // const order = session && session.getOrder();
    let order;

    if (session && session.isLoggedIn()) {
      order = await service.getCurrent();
    } else {
      isGuest = true;
    }

    if (!order) {
      order = new Order();
      if (session && session.getOrder()) {
        order = session.getOrder();
      }
    }

    if (session) {
      session.setOrder(order);
    }

    const builder = new OrderBuilder(service, order, isGuest, context);

    return builder;
  }
}

export default OrderBuilder;
