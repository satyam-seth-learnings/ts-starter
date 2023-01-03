import { after, before, describe, it } from 'mocha';

import { expect } from 'chai';

import jsdom from 'jsdom-global';
import ExamplePage from '../src/ts/jsdomDemo2';

describe('Test Example Page Class', () => {
  let dom: any;
  let examplePage: ExamplePage;

  before(() => {
    dom = jsdom();
    document.body.innerHTML = '<html><body></body></html>';

    examplePage = new ExamplePage('page');
    examplePage.build();
  });

  after(() => {
    dom();
  });

  it('Page should contain main container with valid id and class', () => {
    const mainContainer = examplePage.querySelector();
    expect(mainContainer!.id).to.equal('page-container');
    expect(mainContainer!.classList.contains('container')).to.equal(true);
    expect(mainContainer!.classList.length).to.equal(1);
    expect(mainContainer!.children.length).to.equal(2);
  });

  it('Page should contain heading with valid id and class', () => {
    const heading = document.querySelector('h1')!;
    expect(heading.id).to.equal('page-heading');
    expect(heading.classList.contains('heading')).to.equal(true);
    expect(heading.classList.length).to.equal(1);
    expect(heading.innerText).to.equal('Before Click');
  });

  it('Page should contain button with valid id and class', () => {
    const button = document.querySelector('button')!;
    expect(button.id).to.equal('page-button');
    expect(button.classList.contains('button')).to.equal(true);
    expect(button.classList.length).to.equal(1);
    expect(button.innerText).to.equal('Click Me');
  });

  it('Page should change heading text after click button', () => {
    const button = document.querySelector('button')!;
    button.click();
    const heading = document.querySelector('h1')!;
    expect(heading.innerText).to.equal('After Click');
  });
});
