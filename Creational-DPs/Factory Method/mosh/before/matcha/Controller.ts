import { MatchaViewEngine } from "./MatchaViewEngine";

export class Controller {
  render(viewName: any, context: any) {
    var engine = new MatchaViewEngine();
    var html = engine.render("viename", { some: "product data" });

    console.log(html);
  }
}
