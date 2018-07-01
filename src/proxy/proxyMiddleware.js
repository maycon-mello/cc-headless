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
      // proxyReq.removeHeader('origin');
      proxyReq.removeHeader('user-agent');  
    }          

    console.log(req.headers);

    proxyReq.removeHeader('origin');

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