// @flow
import Context from '~/core/Context';
import DummySession from './DummySession';
import type { ISession } from './Session';
import type { ContextConstructor } from '~/core/Context';

class StoreContext extends Context {
  session: ISession;

  constructor(props: ContextConstructor) {
    super(props);
    this.setBasePath('/ccstore/v1');
  }

  getSession(): ISession {
    return this.session;
  }

  setSession(session: ISession) {
    this.session = session;
  }
}

export default StoreContext;
