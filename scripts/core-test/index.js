import Context from '~/core/Context';
import AuthService from '~/store/services/AuthService';
import ProfileService from '~/store/services/ProfileService';
import OrderService from '~/store/services/OrderService';

const context = new Context({
  envUrl: 'http://localhost:3000',
  basePath: '/ccstore/v1',
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
    const order = await orderService.getById('130065');
    console.log(order);
  } catch(ex) {
    console.log(ex);
    console.log(ex.response.data);
  }
}

test();