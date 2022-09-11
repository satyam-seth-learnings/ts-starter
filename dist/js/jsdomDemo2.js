"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExamplePage {
    constructor(namespace) {
        this.namespace = namespace;
    }
    get containerId() {
        return `${this.namespace}-container`;
    }
    skelton() {
        const mainContainer = document.createElement('div');
        mainContainer.id = this.containerId;
        mainContainer.classList.add('container');
        mainContainer.appendChild(this.getHeading());
        mainContainer.appendChild(this.getButton());
        return mainContainer;
    }
    getHeading() {
        const heading = document.createElement('h1');
        heading.id = `${this.namespace}-heading`;
        heading.classList.add('heading');
        heading.innerText = 'Before Click';
        return heading;
    }
    getButton() {
        const button = document.createElement('button');
        button.id = `${this.namespace}-button`;
        button.classList.add('button');
        button.innerText = 'Click Me';
        button.addEventListener('click', this.onButtonClick.bind(this));
        return button;
    }
    onButtonClick() {
        const heading = document.getElementById(`${this.namespace}-heading`);
        heading.innerText = 'After Click';
    }
    querySelector() {
        return document.querySelector(`#${this.containerId}`);
    }
    build() {
        document.querySelector('body').appendChild(this.skelton());
    }
}
exports.default = ExamplePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNkb21EZW1vMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9qc2RvbURlbW8yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBcUIsV0FBVztJQUc5QixZQUFZLFNBQWlCO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFZLFdBQVc7UUFDckIsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLFlBQVksQ0FBQztJQUN2QyxDQUFDO0lBRU8sT0FBTztRQUNiLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsYUFBYSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDN0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM1QyxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRU8sVUFBVTtRQUNoQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUM7UUFDekMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDbkMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLFNBQVM7UUFDZixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxTQUFTLENBQUM7UUFDdkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDOUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyxhQUFhO1FBQ25CLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxVQUFVLENBQUUsQ0FBQztRQUN0RSxPQUFPLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztJQUNwQyxDQUFDO0lBRU0sYUFBYTtRQUNsQixPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRU0sS0FBSztRQUNWLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRjtBQWpERCw4QkFpREMifQ==