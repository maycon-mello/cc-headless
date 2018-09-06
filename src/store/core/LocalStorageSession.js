// @flow
import Context from '~/core/Context';
import Order from '../models/order/Order';
import Profile from '../models/Profile';
import type { ISession } from './Session';
import localForage from 'localforage';

const DEFAULT_DATA_KEY = 'cc-headless-session';

/**
 * https://localforage.github.io/localForage/#settings-api-setdriver
 * IndexedDB
 * WebSQL
 * localStorage
 */

class LocalStorageSession {
  order: Order;
  profile: Profile;
  authToken: String;
  key: string;

  constructor(context: Context, storage = localForage) {
    this.storage = storage;
    this.context = context;
    this.context.setSession(this);
    this.isLoading = true;
    this.loadListeners = [];
    this.key = DEFAULT_DATA_KEY;
  }

  async load() {
    let order = await this.getLocalData('order');
    
    if (order) {
      this.order = new Order(order);
    }

    this.profile = await this.getLocalData('profile');
    this.authToken = await this.getLocalData('auth-token');

    if (this.authToken) {
      this.context.setAuthToken(this.authToken);
    }

    this.loadListeners.forEach(listener => listener.resolve(this));

    this.isLoading = false;
  }

  getDataKey(dataKey) {
    return `${this.key}-${dataKey}`;
  }

  async getLocalData(dataKey: string): any {
    const jsonData = await this.storage.getItem(this.getDataKey(dataKey));

    if (!jsonData || jsonData === 'undefined') {
      return undefined;
    }

    try {
      return JSON.parse(jsonData);
    } catch(err) {
      console.error(err);
    }

    return undefined;
  }

  setLocalData(dataKey: string, data: any): any {
    const jsonData = JSON.stringify(data);
    return this.storage.setItem(this.getDataKey(dataKey), jsonData);
  }

  removeLocalData(dataKey: string): any {
    return storage.removeItem(this.getDataKey(dataKey));
  }

  getOrder(): Order {
    return this.order;
  }

  setOrder(order: Order) {
    this.order = order;
    return this.setLocalData('order', order);
  }

  getProfile(): Profile {
    return this.profile;
  }

  setProfile(profile: Profile) {
    this.profile = profile;
    return this.setLocalData('profile', profile);
  }

  setAuthToken(token: string) {
    return this.setLocalData('auth-token', token);
  }

  isLoggedIn(): boolean {
    return !!this.profile;
  }

  async clear() {
    await this.removeLocalData('order');
    await this.removeLocalData('profile');
    await this.removeLocalData('authToken');
  }
}

export default LocalStorageSession;
