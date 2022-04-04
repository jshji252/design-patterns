import { Component } from "./Component";

export class Shape implements Component {
  private _type: string = ""; // shape type
  move() {
    console.log("move shape");
  }
  render() {
    console.log("Rendering shape...");
  }
}
