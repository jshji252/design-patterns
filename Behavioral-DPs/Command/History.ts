import { UndoableCommand } from "./Command";

export class History {
  private _commands: UndoableCommand[] = [];

  push(c: UndoableCommand) {
    this._commands.push(c);
  }
  pop() {
    if (this._commands.length > 0) return this._commands.pop();
  }
  isEmpty(): boolean {
    return !this._commands.length;
  }
}
