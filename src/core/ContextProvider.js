import Context from './Context';

let context = undefined;

class ContextProvider {

  static getContext(): Context {
    return context;
  }

  static setContext(ctx: Context) {
    context = ctx; 
  }
}

export default ContextProvider;
