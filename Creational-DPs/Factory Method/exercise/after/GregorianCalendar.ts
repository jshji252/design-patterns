import { Event } from "./Event";

export interface Calendar {
  addEvent(event: Event, date: Date): void;
}

export class GregorianCalendar implements Calendar {
  addEvent(event: Event, date: Date): void {
    console.log("adding an event on the given date.");
  }
}
