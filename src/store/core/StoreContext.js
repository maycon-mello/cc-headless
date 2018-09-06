// @flow
import Context from '~/core/Context';
import DummySession from './DummySession';
import type { ISession } from './Session';
import type { ContextConstructor } from '~/core/Context';

class StoreContext extends Context {
  session: ISession;

  constructor(props: ContextConstructor) {
    super(props);
  }

  getSession(): Promise<ISession> {
    if (this.session.isLoading) {
      return new Promise((resolve, reject) => {
        this.session.loadListeners.push({
          resolve,
          reject,
        });
      });
    }

    return this.session;
  }

  setSession(session: ISession) {
    this.session = session;
  }

  setAuthToken(token: string) {
    this.authToken = token;
    if (this.session) {
      this.session.setAuthToken(token);
    }
  }
}

export default StoreContext;
