import proxy from 'http-proxy-middleware';
import Util from './util';
import manipulateBody from './manipulateBody';
import Cache from './cache';

export default (props) => proxy({
  target: props.target,

  // Enabled by default
  changeOrigin: !!props.changeOrigin === false,

  onProxyReq(proxyReq, req, res) {
    if (Util.isXHR(req)) {
      proxyReq.removeHeader('user-agent');  
    }          

    proxyReq.removeHeader('referer');
    proxyReq.removeHeader('origin');
    proxyReq.removeHeader('accept-language');
    proxyReq.removeHeader('pragma');
    proxyReq.setHeader('accept', '*/*');
    proxyReq.setHeader('accept-encoding', 'gzip, deflate');
  
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

    // applyBodyUpdate(proxyRes, res, res);
  }
});