import { AbstractFactory } from "../AbstractFactory";
import { AntButton } from "./AntButton";
import { AntTextBox } from "./AntTextBox";

export class AntFactory implements AbstractFactory {
  createButton() {
    return new AntButton();
  }
  createTextBox() {
    return new AntTextBox();
  }
}
