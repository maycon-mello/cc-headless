import proxy from 'http-proxy-middleware';
import Util from './util';
import manipulateBody from './manipulateBody';

export default (props) => proxy({
  target: props.target,

  // Enabled by default
  changeOrigin: !!props.changeOrigin === false,

  onProxyReq(proxyReq, req, res) {
    if (Util.isXHR(req)) {
      // Remove occ headers
      proxyReq.removeHeader('user-agent');  
    }          

    proxyReq.removeHeader('referer');

    // connection: 'close',
    // 'content-length': '3645',
    // 'accept-encoding': 'gzip, deflate',
    // cookie: 'JSESSIONID=FoNWyeJLmIO-1QJqodgCacf10mUyfDXDbWUU61XD72GZ05JbzIhj!-687441668',
    // host: 'ccstore-test-zboa.oracleoutsourcing.com',
    // accept: '*/*',
    // 'postman-token': 'a1d543bd-b38a-4d9c-bce9-b3429234de7b',
    // 'cache-control': 'no-cache',
    // 'content-type': 'application/json',
  

    proxyReq.removeHeader('origin');
    proxyReq.removeHeader('accept-language');
    proxyReq.removeHeader('pragma');
    proxyReq.setHeader('accept', '*/*');
    proxyReq.setHeader('accept-encoding', 'gzip, deflate');
    
    
    

    console.log(proxyReq.getHeaders());

    if (props.onProxyReq) {
      props.onProxyReq(proxyReq, req, res);
    }
  },

  onProxyRes(proxyRes, req, res) {
    if (!Util.shouldRewrite(proxyRes)) {
      return;
    }

    const applyBodyUpdate = manipulateBody(body => {
      body = Util.rewriteUrls(body, props);

      // apply custom rewrite
      if (props.manipulateBody) {
        body = props.manipulateBody(body);
      }

      return body;
    });

    applyBodyUpdate(proxyRes, res, res);
  }
});