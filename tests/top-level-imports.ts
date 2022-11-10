import {expect} from 'chai';
import sinon from 'sinon';

import * as functions from '../src/functions';

describe('top-level-imports', () => {
  it('dummy', () => {
    expect(true).to.be.true;
  });

  it('can stub', () => {
    const stub = sinon.stub(functions, 'foo').returns('baz');
    expect(typeof stub).to.be.equal('function');
    expect(stub()).to.be.equal('baz');
  });
});
