// @flow
import Order from '../models/order/Order';
import Profile from '../models/Profile';
import type { ISession } from './Session';

class DummySession {
  order: Order;
  profile: Profile;

  constructor() {
    (this: ISession);
  }

  init() {}

  getOrder(): Order {
    return this.order;
  }

  setOrder(order: Order) {
    this.order = order;
  }

  getProfile(): Profile {
    return this.profile;
  }

  setProfile(profile: Profile) {
    this.profile = profile;
  }
}

export default DummySession;
