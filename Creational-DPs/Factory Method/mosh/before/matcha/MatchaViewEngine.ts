import { ViewEngine } from "./ViewEngine";

export class MatchaViewEngine implements ViewEngine {
  render(viewName: any, context: any): string {
    // viewName is
    // context is the data to be fed into the template. In this case it should contain the object "products"
    return "View rendered by Matcha";
  }
}
