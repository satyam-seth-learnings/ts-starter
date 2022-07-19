import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import setMessage from '../src/ts/index';

describe('Test setMessage function', () => {
  beforeEach(() => {
    setMessage();
  });

  it('Should be set message to dom', () => {
    const message = document.querySelector('body');
    expect(message!.innerHTML).to.equal('Hello');
  });
});
