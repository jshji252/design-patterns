import { AntFactory } from "./Ant/AntFactory";
import { MaterialFactory } from "./Material/MaterialFactory";
import { ContactForm } from "./ContactForm";

const cF = new ContactForm();

cF.render(new AntFactory());
cF.render(new MaterialFactory());
