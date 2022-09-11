import hello from './message';

export default function setMessage() {
  const heading = document.createElement('h1');
  heading.id = 'demo-heading';
  heading.innerText = hello();
  // eslint-disable-next-line no-console
  console.log('run');
  document.querySelector('body')!.appendChild(heading);
}
