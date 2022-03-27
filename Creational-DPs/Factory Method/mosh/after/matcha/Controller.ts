import { MatchaViewEngine } from "./MatchaViewEngine";
import { ViewEngine } from "./ViewEngine";

export class Controller {
  render(viewName: any, context: any) {
    var engine = this.createViewEngine();
    var html = engine.render("viename", { some: "product data" });

    console.log(html);
  }

  // can use either abstract, or protected (for default engine)
  // protected abstract createViewEngineg();

  protected createViewEngine(): ViewEngine {
    // protected because we don't want this to be called outside the class
    return new MatchaViewEngine(); //default
  }
}
