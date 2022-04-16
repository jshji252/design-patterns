import { AbstractFactory } from "./AbstractFactory";

export class ContactForm {
  render(factory: AbstractFactory) {
    factory.createButton().render();
    factory.createTextBox().render();
  }
}
