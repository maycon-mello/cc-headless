// @flow
import Context from '~/store/core/StoreContext';
import AuthService from '~/store/services/AuthService';
import ProfileService from '~/store/services/ProfileService';
import OrderService from '~/store/services/OrderService';
import OrderRequest from '~/store/models/requests/OrderRequest';
import OrderBuilder from '~/store/OrderBuilder';

const context = new Context({
  envUrl: 'http://localhost:3000',
  enableEnvAuth: true,
  envAuth: {
    username: 'admin',
    password: 'admin',
  },
});

// const request = new CCRequest(context);
const authService = new AuthService(context);
const profileService = new ProfileService(context);
const orderService = new OrderService(context);

async function test() {
  try {
    const data = await authService.login('maycon.mello@objectedge.com', 'Asdf1234');
    context.setAuthToken(`Bearer ${data.token}`);

    // get profile details
    // const profile = await profileService.getCurrent();
    // const order = await orderService.getById('130065');
    // let order = await orderService.getCurrent();

    // order.shoppingCart.items[0].quantity++;

    // order = await orderService.priceOrder(order);    
    // console.log(order.priceInfo);

    const builder = await OrderBuilder.create(context, false);
    
    console.log(builder.getOrder().shoppingCart.items[0].quantity);
    
    builder.getOrder().shoppingCart.addItem({
      quantity: 1,
      skuId: 'IQ2RPQ',
      productId: 'IQ2RPQ',
    });

    await builder.refresh();

    console.log(builder.getOrder().priceInfo);

  } catch(err) {
    console.log(err);
    // console.log(ex.response.data);
  }
}

test();