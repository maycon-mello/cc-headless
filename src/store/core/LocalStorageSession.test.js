import { expect } from 'chai';
import { spy } from 'sinon';

import LocalStorageSession from './LocalStorageSession';
import PromisedLocalStorage from './PromisedLocalStorage';

describe('Store:Core', () => {
  describe('LocalStorageSession', () => {
    it('should set and get LocalData', async () => {
      const context = {};
      const session = new LocalStorageSession(context, PromisedLocalStorage);
      const value = { a: Math.random() };
      const key = Math.random();
      await session.setLocalData(key, value);
      const data = await session.getLocalData(key);
      expect(data.a).to.equals(value.a);
    });

    it('should set and get order', async () => {
      const context = {};
      const session = new LocalStorageSession(context, PromisedLocalStorage);
      const order = { id: Math.random() };
      await session.setOrder(order);
      const data = await session.getOrder();
      expect(data.id).to.equals(order.id);
    });

    it('should set and get profile', async () => {
      const context = {};
      const session = new LocalStorageSession(context, PromisedLocalStorage);
      const profile = { id: Math.random() };
      await session.setProfile(profile);
      const data = await session.getProfile();
      expect(data.id).to.equals(profile.id);
    });

    describe('load()', () => {
      const context = {
        setAuthToken: spy(),
        setSession: spy(),
      };
      const session = new LocalStorageSession(context, PromisedLocalStorage);
      const orderId = Math.random();
      const profileId = Math.random();
      const authToken = Math.random();
      

      beforeEach(async () => {
        localStorage.setItem(session.getDataKey('order'), JSON.stringify({ id: orderId }));
        localStorage.setItem(session.getDataKey('profile'), JSON.stringify({ id: profileId }));
        localStorage.setItem(session.getDataKey('auth-token'), authToken);
        await session.load();
      });

      it('expect order to be loaded', async () => {
        const order = await session.getOrder();
        expect(order.id).to.equals(orderId);
      });

      it('expect profile to be loaded', async () => {
        const profile = await session.getProfile();
        expect(profile.id).to.equals(profileId);
      });

      it('expect authToken to be loaded', async () => {
        expect(context.setAuthToken).to.be.calledWith(authToken);
      });
    })
  });
});
