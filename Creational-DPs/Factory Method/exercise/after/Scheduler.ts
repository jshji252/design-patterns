import { Calendar, GregorianCalendar } from "./GregorianCalendar";
import { Event } from "./Event";

export class Scheduler {
  private _calendar: Calendar = this.createCalender();

  schedule(event: Event): void {
    var today = new Date();
    this._calendar.addEvent(event, today);
  }

  protected createCalender(): Calendar {
    return new GregorianCalendar();
  }
}
