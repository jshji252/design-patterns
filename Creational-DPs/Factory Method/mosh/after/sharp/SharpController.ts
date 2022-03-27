import { Controller } from "../matcha/Controller";
import { MatchaViewEngine } from "../matcha/MatchaViewEngine";
import { ViewEngine } from "../matcha/ViewEngine";
import { SharpViewEngine } from "./SharpViewEngine";

export class SharpController extends Controller {
  protected createViewEngine(): ViewEngine {
    return new SharpViewEngine();
  }
}
