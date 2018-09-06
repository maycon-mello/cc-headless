import { expect } from 'chai';
import OrderBuilder from './OrderBuilder';
import OrderService from './services/OrderService';

describe('Store', () => {
  describe('OrderBuilder', () => {
    let builder;
    let context;

    beforeEach(() => {
      context = {};
      builder = new OrderBuilder(context);
    });

    // describe('constructor:', () => {
    //   it('expect to create order service', () => {
    //     expect(builder.service instanceof OrderService).to.equal(true);
    //   });

    //   it('expect to assign context attribute', () => {
    //     expect(builder.context).to.deep.equal(context);
    //   });
    // });

    describe('getters and setters:', () => {
      it('expected to set isGuest', () => {
        builder.setIsGuest(true);
        expect(builder.isGuest).to.equal(true);
        builder.setIsGuest(false);
        expect(builder.isGuest).to.equal(false);
      });

      it('expected to get isGuest value', () => {
        builder.isGuest = true;
        expect(builder.getIsGuest()).to.be.equal(true);
        builder.isGuest = false;
        expect(builder.getIsGuest()).to.be.equal(false);
      })
    })

    describe('Update order:', () => {
      it('expect to call order service ', async () => {
        
      });
    })
  });
});