import { ViewEngine } from "../matcha/ViewEngine";

export class SharpViewEngine implements ViewEngine {
  render(viewName, context): string {
    return "Rendred using Sharp View Engine";
  }
}
