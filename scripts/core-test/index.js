// @flow
import Context from '~/store/core/StoreContext';
import AuthService from '~/store/services/AuthService';
import ProfileService from '~/store/services/ProfileService';
import OrderService from '~/store/services/OrderService';
import OrderRequest from '~/store/models/requests/OrderRequest';
import OrderBuilder from '~/store/OrderBuilder';
import Address from '../../src/store/models/Address';
import PaymentGroup from '../../src/store/models/order/PaymentGroup';
import CollectionService from '../../src/store/services/CollectionService';
import ProductService from '../../src/store/services/ProductService';
import AssamblerService from '../../src/store/services/AssamblerService';

const context = new Context({
  envUrl: 'http://localhost:3000',
  enableEnvAuth: true,
  envAuth: {
    username: 'admin',
    password: 'admin',
  },
});

// const request = new CCRequest(context);
// const authService = new AuthService(context);
// const profileService = new ProfileService(context);
// const orderService = new OrderService(context);
// const collectionService = new CollectionService(context);
const productService = new ProductService(context);

async function createOrder() {

  const builder = await OrderBuilder.create({ context, isGuest: false });
    
  console.log(builder.getOrder().shoppingCart.items[0].quantity);
  
  builder.getOrder().shoppingCart.addItem({
    quantity: 1,
    skuId: 'IQ2RPQ',
    productId: 'IQ2RPQ',
  });

  const address: Address = new Address({
    alias: 'Test',
    firstName: 'Maycon',
    lastName: 'Mellos',
    address1: '201 Spear street',
    address2: 'test',
    city: 'San Francisco',
    selectedCountry: 'US',
    selectedState: 'CA',
    postalCode: '94105000',
    state_ISOCode: 'US-CA',
    // country: 'US',
  });

  // "alias":"Address",
  //   "prefix":"",
  //   "firstName":"Test",
  //   "middleName":"",
  //   "lastName":"Tester",
  //   "suffix":"",
  //   "country":"United States",
  //   "postalCode":"94105",
  //   "address1":"201 Spear street",
  //   "address2":"",
  //   "address3":"",
  //   "city":"San Francisco",
  //   "state":"California",
  //   "county":"",
  //   "phoneNumber":"",
  //   "email":"maycon.mello@objectedge.com",
  //   "jobTitle":"",
  //   "companyName":"",
  //   "faxNumber":"",
  //   "type":"",
  //   "repositoryId":"1566777",
  //   "isDefaultBillingAddress":false,
  //   "isDefaultShippingAddress":false,
  //   "computedDefaultBilling":false,
  //   "computedDefaultShipping":false,
  //   "selectedCountry":"US",
  //   "selectedState":"CA",
  //   "state_ISOCode":"US-CA",
  //   "defaultCountryCode":"US",
  //   "isDefaultAddress":false,
  //   "saveToAccount":false,
  //   "saveAddressTo":"profile",

  builder.getOrder().shippingAddress = address;
  builder.getOrder().billingAddress = address;
  builder.getOrder().payments = [new PaymentGroup({
    type: 'generic',
    customProperties: {
      'sourceToken': null,
      'saveCard': false,
      'useSavedCard': true
      }
  })];

  await builder.refresh();

  console.log(builder.getOrder().shippingAddress);
}

async function test() {
  try {
    // const data = await authService.login('maycon.mello@objectedge.com', 'Asdf1234');
    // context.setAuthToken(`Bearer ${data.token}`);
    // const products = await productService.getList({
    //   categoryId: 'model-1-poc',
    //   fields: 'items.repositoryId,items.displayName'
    // });

    await createOrder();

    const products = await (new AssamblerService(context).assamble({
      path: '/typeahead',
      recordSearchTerms: 'water',
      recordsPerPage: 10,
    }));

    console.log(products);
  } catch(ex) {
    // console.log(ex);
    console.log(ex);
  }
}

test();