import { AbstractFactory } from "../AbstractFactory";
import { MaterialButton } from "./MaterialButton";
import { MaterialTextBox } from "./MaterialTextbox";

export class MaterialFactory implements AbstractFactory {
  createButton() {
    return new MaterialButton();
  }
  createTextBox() {
    return new MaterialTextBox();
  }
}
