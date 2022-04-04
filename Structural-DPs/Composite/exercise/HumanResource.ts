import { Component } from "./Component";

export class HumanResource implements Component {
  deploy() {
    console.log("Deploying a human resource");
  }
  operate() {
    console.log("Operating human resource");
  }
}
