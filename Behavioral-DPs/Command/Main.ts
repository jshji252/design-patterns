import { Button } from "./Button";
import { ContrastCommand } from "./ContrastCommand";
import { History } from "./History";
import { TextCommand } from "./TextCommand";
import { UndoCommand } from "./UndoCommand";
import { VideoEditor } from "./VideoEditor";

// Client
const history = new History();
const videoEditor = new VideoEditor();

const contrastCmd = new ContrastCommand(videoEditor, history);
const contrastBtn = new Button(contrastCmd);

const textCmd = new TextCommand(videoEditor, history);
const textBtn = new Button(textCmd);

const undoCmd = new UndoCommand(history);
const undoBtn = new Button(undoCmd);

console.log(videoEditor);

console.log("Update Contrast");
contrastBtn.click();
console.log(videoEditor);

console.log("changing text!");
textBtn.click();
console.log(videoEditor);
console.log("changing text!");
textBtn.click();
console.log(videoEditor);
console.log("changing text!");
textBtn.click();
console.log(videoEditor);

undoBtn.click();
console.log(videoEditor);

undoBtn.click();
console.log(videoEditor);

contrastBtn.click();
console.log(videoEditor);
undoBtn.click();
console.log(videoEditor);
contrastBtn.click();
console.log(videoEditor);
undoBtn.click();
console.log(videoEditor);
undoBtn.click();
console.log(videoEditor);
undoBtn.click();
console.log(videoEditor);
undoBtn.click();
console.log(videoEditor);
