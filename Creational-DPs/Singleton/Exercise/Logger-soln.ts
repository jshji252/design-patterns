export class Logger {
  private _filename: string;
  static _instances: any = {};

  private constructor(filename: string) {
    console.log(
      "In Constructor, creating logfile for " + filename.toUpperCase()
    );
    this._filename = filename;
  }

  static getInstance(filename: string) {
    if (!Logger._instances[filename]) {
      Logger._instances[filename] = new Logger(filename);
    }
    return Logger._instances[filename];
  }

  write(messsage?: string) {
    console.log(`Writing a message to the ${this._filename} log.`);
  }
}
