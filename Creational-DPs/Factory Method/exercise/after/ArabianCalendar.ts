import { Event } from "./Event";
import { Calendar } from "./GregorianCalendar";

export class ArabianCalendar implements Calendar {
  addEvent(event: Event, date: Date): void {
    console.log(" Adding event using Arabian Calendar");
  }
}
