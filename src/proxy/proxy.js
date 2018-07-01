// @flow
import express from 'express';
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
  app: express;
  
  /**
   * Props
   */
  props: ProxyProps;

  /**
   * 
   * @param {ProxyProps} props 
   */
  constructor(props: ProxyProps) {
    const app = express();

    app.use(bodyParser.urlencoded({
      extended: false,
    }));

    app.use(bodyParser.json());
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
    return app.use.apply(app, arguments);
  }

  /**
   * 
   */
  get() {
    const { app } = this;
    return app.get.apply(app, arguments);
  }

  /**
   * 
   */
  post() {
    const { app } = this;
    return app.post.apply(app, arguments);
  }

  /**
   * 
   */
  put() {
    const { app } = this;
    return app.put.apply(app, arguments);
  }

  /**
   * 
   */
  options() {
    const { app } = this;
    return app.options.apply(app, arguments);
  }

  /**
   * 
   */
  listen() {
    const { app, props } = this;
    const { port } = props;

    app.use(proxyMiddleware(props));

    app.listen(port, () => {
      console.log(`Proxy listening on port ${port}`)
    });
  }
}
