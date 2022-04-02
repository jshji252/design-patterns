import { UndoableCommand } from "./Command";
import { History } from "./History";
import { VideoCommands } from "./VideoCommands";
import { VideoEditor } from "./VideoEditor";

// This should talk to the receiver to do the job
// This should NOT do the job itself.
export class TextCommand extends VideoCommands<string> {
  //   constructor(vE: VideoEditor, h: History) {
  //     super(vE, h);
  //   }

  execute() {
    this.history.push(this);
    this.prevStates.push(this.receiver.text);
    this.receiver.updateText();
  }
  unexecute() {
    this.receiver.text = this.prevStates.pop();
  }
}
