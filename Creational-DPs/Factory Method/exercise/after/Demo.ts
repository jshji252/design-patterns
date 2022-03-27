import { ArabianScheduler } from "./ArabianScheculer";
import { Event } from "./Event";
import { Scheduler } from "./Scheduler";

export class Demo {
  static show() {
    let scheduler = new Scheduler();
    scheduler.schedule(new Event());

    scheduler = new ArabianScheduler();
    scheduler.schedule(new Event());
  }
}
