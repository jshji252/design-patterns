// This is the Receiver class, that contains actual business logic
// For example, this is where the contrast value gets changed.

export class VideoEditor {
  private _contrast: number = 0.5;
  private _text: string = "";

  updateText() {
    // Again, user will input this text. for now, randomly generate texts.
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const userInput = alphabets[Math.floor(Math.random() * alphabets.length)];
    console.log("user input is ", userInput);
    this._text = userInput;
  }

  get text() {
    return this._text;
  }
  set text(v) {
    this._text = v;
  }

  get contrast() {
    return this._contrast;
  }

  set contrast(contrast: number) {
    this._contrast = contrast;
  }
  updateContrast() {
    // Let's assume that the user has put in the desired contrast value
    // on the UI, and clicked "updated contrast button".
    const userInput = Math.floor(Math.random() * 200);
    console.log(`user input was : ${userInput}`);
    this._contrast = userInput;
  }
  toString() {
    return (
      "VideoEditor{" +
      "contrast=" +
      this._contrast +
      ", text='" +
      this._text +
      "'" +
      "}"
    );
  }
}
