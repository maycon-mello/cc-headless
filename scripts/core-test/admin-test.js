// @flow
import Context from '~/store/core/StoreContext';
import AuthService from '~/admin/services/AuthService';
import LayoutService from '~/admin/services/LayoutService';
import ContextProvider from '~/core/ContextProvider';
import fs from 'fs';

const context = new Context({
  envUrl: 'https://ccadmin-prod-z64a.oracleoutsourcing.com',
  applicationKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkMjRiY2IzOS1hYTU5LTRmODEtYjRhYS1mNDI2YmQ3MjVlMDUiLCJpc3MiOiJhcHBsaWNhdGlvbkF1dGgiLCJleHAiOjE1NjE1NjEwNTQsImlhdCI6MTUzMDAyNTA1NH0=.CcDnw+wpIu+QTrEAbROOrIG+Km4mOB3Dzyfzyf2OENg=',
});

ContextProvider.setContext(context);

async function test() {
  try {
    const { access_token } = await AuthService.getInstance().login()
    const layoutsService = LayoutService.getInstance();

    context.setAuthToken(`Bearer ${access_token}`);

    const layouts = await layoutsService.getLayouts();
    const pgLayouts = [];

    layouts.items.forEach((layout) => {
      layout.pageLayouts.forEach((pgLayout) => {
        pgLayouts.push(pgLayout.layout.repositoryId);
      })
    });

    

    // const l = pgLayouts;
    const structures = [];


    await Promise.all(pgLayouts.map(async (id) => {
      let s = await layoutsService.getStructure(id);

      // console.log(s);
      structures.push(s);
    }));

    // console.log(pgLayouts.length);
    fs.writeFile("./test.json", JSON.stringify(structures, null, 4), 'utf-8', function(err, result) {
      console.log(err, result);
    });

    // console.log(pgLayouts);
  } catch(ex) {
    // console.log(ex);
    console.log(ex);
  }
}

test();