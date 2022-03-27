class LoggerProblem {
  private _filename: string;

  constructor(filename: string) {
    this._filename = filename;
  }

  write(messsage: string) {
    console.log("Writing a message to the log.");
  }
}
