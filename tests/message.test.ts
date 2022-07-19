import { expect } from 'chai';
import { describe, it } from 'mocha';
import hello from '../src/ts/message';

describe('Test hello function', () => {
  it('should return hello world', () => {
    const result = hello();
    expect(result).to.equal('Hello world!');
  });
});
