// @flow
import Express, { RequestHandler } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import proxyMiddleware from './proxyMiddleware';

export type ProxyProps = {
  target: string;
  changeOrigin: string;
  port: number;
  secure: boolean;
  basePath: string;
};

export default class Proxy {
  /**
   * Express app
   */
  app: Express;
  
  /**
   * Props
   */
  props: ProxyProps;

  jsonParser: RequestHandler;

  urlencodedParser: RequestHandler;

  /**
   * 
   * @param {ProxyProps} props 
   */
  constructor(props: ProxyProps) {
    const app = Express();

    this.urlencodedParser = bodyParser.urlencoded({
      extended: false,
    });

    this.jsonParser = bodyParser.json();

    app.use(cors({
      credentials: true,
      origin: true,
    }));

    this.app = app;
    this.props = props;
  }

  /**
   * 
   */
  use() {
    const { app } = this;
    return app.use.apply(app, this.getRequestHandlers(arguments));
  }

  getRequestHandlers(handlers: Array<RequestHandler>): Array<RequestHandler> {
    return [
      // this.jsonParser,
      // this.urlencodedParser,
      ...handlers,
    ];
  }

  get(url: string, ...handlers: Array<RequestHandler>) {
    const { app } = this;
    return app.get(url, handlers);
  }

  post(url: string, ...handlers: Array<RequestHandler>) {
    const { app } = this;
    return app.post(url, this.getRequestHandlers(handlers));
  }

  put(url: string, ...handlers: Array<RequestHandler>) {
    const { app } = this;
    return app.put(url, this.getRequestHandlers(handlers));
  }

  options(url: string, ...handlers: Array<RequestHandler>) {
    const { app } = this;
    return app.options(url, handlers);
  }

  createRouter() {
    return Express.Router();
  }

  /**
   * 
   */
  listen() {
    const { app, props } = this;
    const { port } = props;

    if (props.target) {
      app.use(proxyMiddleware(props));
    }

    app.listen(port, () => {
      console.log(`Proxy listening on port ${port}`)
    });
  }
}
