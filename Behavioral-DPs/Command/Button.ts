import { Command, UndoableCommand } from "./Command";

/**
 * This is the invoker class. A button is a good example,
 * as on the client will click on this button, which will invoke
 * certain action. Note that we can also have a Shortcut class,
 * which is structured very similarly to this, and that can invoke exactly
 * the same action. This is possible because we have decoupled
 * the invoker and the receiver.
 * For example, we can have both "make bold" button, or a shortcut to it
 * which invokes the same receiver function.
 */

export class Button {
  private _command: Command | UndoableCommand;

  constructor(command: Command | UndoableCommand) {
    this._command = command;
  }

  click() {
    this._command.execute();
  }
}
