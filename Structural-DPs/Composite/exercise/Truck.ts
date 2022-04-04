import { Component } from "./Component";

export class Truck implements Component {
  deploy() {
    console.log("Deploying a truck");
  }
  operate() {
    console.log("operating truck");
  }
}
