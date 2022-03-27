import { Controller } from "./matcha/Controller";
import { SharpController } from "./sharp/SharpController";

export class ProductsController extends SharpController {
  listProducts() {
    // get products from a db
    const context = { the: "db data" };

    this.render("products.html", context);
  }
}
