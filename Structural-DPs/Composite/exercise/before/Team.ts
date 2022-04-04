import { HumanResource } from "./HumanResource";
import { Truck } from "./Truck";

export class Team {
  private _resources: Object[] = [];

  add(resource: Object) {
    this._resources.push(resource);
  }

  deploy() {
    for (var resource of this._resources) {
      if (resource instanceof Truck) resource.deploy();
      else if (resource instanceof HumanResource) resource.deploy();
      else if (resource instanceof Team) resource.deploy();
    }
  }
}
