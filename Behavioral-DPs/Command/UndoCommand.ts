import { Command } from "./Command";
import { History } from "./History";

export class UndoCommand implements Command {
  private _history: History;

  constructor(history: History) {
    this._history = history;
  }

  execute() {
    if (!this._history.isEmpty()) {
      console.log("Undo-ing...");
      this._history.pop().unexecute();
    } else {
      console.log("Nothing to undo!");
    }
  }
}
