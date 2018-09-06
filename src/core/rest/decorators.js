
function addRouteToResource({ target, path, method, handlers, targetHandler }) {
  if (!target.__routes__) {
    target.__routes__ = [];
  }

  target.__routes__.push({
    path,
    method,
    handlers,
    targetHandler,
  });
}

function wrapHandler(handler, resourceInstance) {
  return async function (req, res: Express.Response, next) {
    try {
      await handler.apply(resourceInstance, [req, res, next]);
    } catch (err) {
      res.status(500);

      // check if error comes from axios response
      if (err.response && err.response.data) {
        const { data } = err.response;
        console.error(data);
        return res.json(data);
      }

      res.json(err);
    }
  }
}

export function Route(method, path, handlers = []) {
  return function(target, name, descriptor) {
    const targetHandler = target[name];

    addRouteToResource({
      target,
      path,
      method,
      handlers: [...handlers],
      targetHandler: targetHandler,
    });

    return descriptor
  }
}

export function Path(path) {
  return function(target) {
    target.prototype.__basePath__ = path;
    return target;
  }
}

export function GET(path, handlers) {
  return Route('get', path, handlers);
}

export function PUT(path, handlers) {
  return Route('put', path, handlers);
}

export function POST(path, handlers) {
  return Route('post', path, handlers);
}

export function DELETE(path, handlers) {
  return Route('delete', path, handlers);
}

export function OPTIONS(path, handlers) {
  return Route('options', path, handlers);
}

export function PATCH(path, handlers) {
  return Route('patch', path, handlers);
}

export function registerResource(router, resource) {
  const routes = resource.__routes__;
  const basePath = resource.__basePath__ || '';

  routes.forEach(route => {
    const path = `${basePath}${route.path}`;
    const args = [
      path,
      ...route.handlers,
      wrapHandler(route.targetHandler, resource),
    ];

    router[route.method].apply(router, args);
  })
}

