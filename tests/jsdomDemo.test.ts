import { expect } from 'chai';
import { after, before, describe, it } from 'mocha';

import setMessage from '../src/ts/jsdomDemo';

// const jsdom = require('jsdom-global');

describe('Test setMessage function', () => {
  // let dom: any;

  before(() => {
    setMessage();
    // dom = jsdom();
    // document.body.innerHTML = '<html><body></body></html>';
  });

  after(() => {
    // dom();
  });

  it('Should be set message to dom', () => {
    const message = document.querySelector('h1');
    expect(message!.innerText).to.equal('Hello world!');
  });
});
