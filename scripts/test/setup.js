import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import localStorage from './localStorage';

global.localStorage = localStorage;

chai.use(chaiAsPromised);
chai.use(sinonChai);

global.sinon = sinon;
global.expect = expect;

const noop = () => null;

require.extensions['.scss'] = noop;
require.extensions['.css'] = noop;


