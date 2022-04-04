// import { Shape } from "./Shape";

// export class Group {
//   private _shapes: Shape[] = [];

//   add(shape: Shape) {
//     this._shapes.push(shape);
//   }

//   render() {
//     for (const shape of this._shapes) {
//       shape.render();
//     }
//   }
// }

// To force it to work, use Object instead of Shape
import { Shape } from "./Shape";

export class Group {
  private _shapes: Object[] = [];

  add(shape: Object) {
    this._shapes.push(shape);
  }

  render() {
    for (const shape of this._shapes) {
      if (shape instanceof Shape) {
        shape.render();
      } else if (shape instanceof Group) {
        shape.render();
      }
    }
  }
}
