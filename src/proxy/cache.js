const cache = {};

class Cache {
  getRequestKey(req) {
    console.log('#mzm req', req);
    return `${req.method}>${req.originalUrl}`
  }
}

export default new Cache();
