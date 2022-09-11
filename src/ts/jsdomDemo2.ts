export default class ExamplePage {
  private namespace: string;

  constructor(namespace: string) {
    this.namespace = namespace;
  }

  private get containerId(): string {
    return `${this.namespace}-container`;
  }

  private skelton(): HTMLElement {
    const mainContainer = document.createElement('div');
    mainContainer.id = this.containerId;
    mainContainer.classList.add('container');
    mainContainer.appendChild(this.getHeading());
    mainContainer.appendChild(this.getButton());
    return mainContainer;
  }

  private getHeading(): HTMLHeadingElement {
    const heading = document.createElement('h1');
    heading.id = `${this.namespace}-heading`;
    heading.classList.add('heading');
    heading.innerText = 'Before Click';
    return heading;
  }

  private getButton(): HTMLButtonElement {
    const button = document.createElement('button');
    button.id = `${this.namespace}-button`;
    button.classList.add('button');
    button.innerText = 'Click Me';
    button.addEventListener('click', this.onButtonClick.bind(this));
    return button;
  }

  private onButtonClick(): void {
    const heading = document.getElementById(`${this.namespace}-heading`)!;
    heading.innerText = 'After Click';
  }

  public querySelector(): HTMLElement {
    return document.querySelector(`#${this.containerId}`)!;
  }

  public build(): void {
    document.querySelector('body')!.appendChild(this.skelton());
  }
}
