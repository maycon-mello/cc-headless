// import '../scripts/core-test';
import Context from './core/Context';
import Service from './core/Service';
import AuthService from './admin/services/AuthService';

const context = new Context({
  envUrl: 'https://ccadmin-test-zb3a.oracleoutsourcing.com',
  basePath: '',
  applicationKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4MTE2ZGQxNi01MmNlLTQ0NDktODY1OS1lNmQyMzY1YWNmMmIiLCJpc3MiOiJhcHBsaWNhdGlvbkF1dGgiLCJleHAiOjE1MzM0MTU4MjAsImlhdCI6MTUwMTg3OTgyMH0=.hfoy1lFDnDPQgF5onO8pkryHRqeMYAarUsBsYXxVW6Q=',
});

class CollectionService extends Service {

  async getById(catalogId){
    const { data } = await this.request.get({
      url: `/ccadmin/v1/collections/${catalogId}`,
    });

    return data;
  }

  async remove(catalogId){
    const { data } = await this.request.delete({
      url: `/ccadmin/v1/collections/${catalogId}`,
    });

    return data;
  }

  async removeProduct(productId) {
    const { data } = await this.request.delete({
      url: `/ccadmin/v1/products/${productId}`,
    });

    return data;
  }

  async removeProducts(collectionId, products) {
    const { data } = await this.request.put({
      url: `/ccadmin/v1/collections/${collectionId}`,
      data: {
        op: 'remove', 
        products: products,
        type: 'updateProducts',
      },
      headers: {
        'x-ccasset-language': 'en',
      },
    });

    return data;
  }
}


const authService = new AuthService(context);
const collectionService = new CollectionService(context);


async function removeCollections(parentCollection, root = true) {
  if (!root && parentCollection.indexOf('categories') !== 0) {
    return;
  }

  const category = await collectionService.getById(parentCollection);

  console.log(`Sync category ${parentCollection}`);



  if (category.childProducts) {
    const products = category.childProducts.map(item => item.repositoryId);
    try {
      const response = await collectionService.removeProducts(parentCollection, products);
    } catch(err) {
      // remove products
      try {
        const removal = await Promise.all(products.map(p => {
          return collectionService.removeProduct(p);
        }));
      } catch(err) {
        debugger;
      }
    }
  }

  if (category.childCategories) {
    for(const childCategory of category.childCategories) {
      await removeCollections(childCategory.repositoryId, false);
    }
  }

  if (root) {
    return;
  }

  try {
    const removeResponse = await collectionService.remove(parentCollection);
  } catch(err){
    debugger;
  }
}

async function main() {
  try {
    const loginResponse = await authService.login();
    context.setAuthToken(`Bearer ${loginResponse.access_token}`);
    await removeCollections('categories');
  } catch(ex) {
    console.error(ex);
    debugger;
  }
}



main();