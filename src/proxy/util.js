import escapeStringRegexp from 'escape-string-regexp';

export default {
  isXHR(req) {
    const contentType = req.headers['content-type'] || '';
  
    if ((/application\/(json|x-www-form-urlencoded|javascript)/gi).test(contentType)) {
      return true;
    }
  
    return false;
  },
  
  shouldRewrite(res) {
    const contentType = res.headers['content-type'] || '';
  
    if ((/application|html|css/gi).test(contentType)) {
      return true;
    }
  
    return false;
  },
  
  rewriteUrls(body, props) {
    let { target, proxyUrl, port } = props;
  
    if (!proxyUrl) {
      proxyUrl = 'http://localhost';
    }
  
    proxyUrl = `${proxyUrl}:${port}`;
    body = body.replace(new RegExp(escapeStringRegexp(target), 'gi'), proxyUrl);
    return body;
  },
}