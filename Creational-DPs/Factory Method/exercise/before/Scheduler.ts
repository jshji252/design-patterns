import { Calendar } from "./Calendar";
import { Event } from "./Event";

export class Scheduler {
  private _calendar = new Calendar();

  schedule(event: Event): void {
    var today = new Date();
    this._calendar.addEvent(event, today);
  }
}
