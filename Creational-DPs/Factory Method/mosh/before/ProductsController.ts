import { Controller } from "./matcha/Controller";

export class ProductsController extends Controller {
  listProducts() {
    // get products from a db
    const context = { the: "db data" };

    this.render("products.html", context);
  }
}
