// These are the interfaces
export interface Command {
  execute();
}

export interface UndoableCommand extends Command {
  unexecute();
}
