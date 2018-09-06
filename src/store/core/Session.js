//@flow
import Order from '../models/order/Order';
import Profile from '../models/Profile';

export interface ISession {
  order: Order;
  profile: Profile;

  init(): void;
  setOrder(order: Order): void;
  getOrder(): Order;
  setProfile(profile: Profile): void;
  getProfile(): Profile;
  setAuthToken(): void;
  getAuthToken(): string;
  isLoggedIn(): boolean;
  clear(): void;
}
