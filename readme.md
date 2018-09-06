# CC Headless
CCHeadless is a framework agnostic library to create apps on top of OCC. It abstract all the communications with OCC Api's.

It could be used to create:
* Storefronts with React, Vue, Angular, etc.
* Order managements systems like ACE
* NodeJS backends and Serverside extensions

## Modules
* Core: Features shared between all modules.
* Store: Implementas Store API modules. Meant for storefront usage.
* Admin: Implements Admin API modules. This is useful for creating OMS's and server side extensions.
* Agent: Implements Agent API modules. This is useful for creating OMS's and server side extensions.
* Cache: Implements cache and offline capabilities
* Proxy: Proxy server for development, useful to prevent cors issues and create mocks
* Util: Utilities

## Usage example

```javascript
// Get products from Store API
import Context from 'cc-headless/store/core/StoreContext';
import ProductService from 'cc-headless/store/services/ProductService';

const context = new Context({
  envUrl: 'https://ccadmin-<occ-env>.oracleoutsourcing.com',
  enableEnvAuth: true,
  envAuth: {
    username: 'admin',
    password: 'admin',
  },
});
const productService = new ProductService(context);

const products = await productService.getList({
   categoryId: 'model-1-poc',
   fields: 'items.repositoryId,items.displayName'
});
```