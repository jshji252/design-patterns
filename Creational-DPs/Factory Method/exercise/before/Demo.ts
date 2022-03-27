import { Event } from "./Event";
import { Scheduler } from "./Scheduler";

export class Demo {
  static show() {
    const scheduler = new Scheduler();
    scheduler.schedule(new Event());
  }
}
