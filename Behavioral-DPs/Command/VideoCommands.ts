import { UndoableCommand } from "./Command";
import { History } from "./History";
import { VideoEditor } from "./VideoEditor";

export class VideoCommands<Type> implements UndoableCommand {
  private _receiver: VideoEditor;
  private _prevStates: Type[];
  private _history: History;

  constructor(vE: VideoEditor, h: History) {
    this._receiver = vE;
    this._prevStates = [];
    this._history = h;
  }

  execute() {}
  unexecute() {}

  get receiver() {
    return this._receiver;
  }
  get prevStates() {
    return this._prevStates;
  }
  get history() {
    return this._history;
  }
}
