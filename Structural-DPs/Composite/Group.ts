import { Component } from "./Component";

export class Group implements Component {
  private _components: Component[] = [];

  add(component: Component) {
    this._components.push(component);
  }

  move() {
    for (const component of this._components) component.move();
  }

  render() {
    for (const component of this._components) component.render();
  }
}
