import { Component } from "./Component";

export class Team implements Component {
  private _components: Component[] = [];

  add(component: Component) {
    this._components.push(component);
  }

  operate() {
    for (const component of this._components) {
      component.operate();
    }
  }

  deploy() {
    for (const component of this._components) {
      component.deploy();
    }
  }
}
