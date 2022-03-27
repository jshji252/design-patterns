import { ArabianCalendar } from "./ArabianCalendar";
import { Scheduler } from "./Scheduler";

export class ArabianScheduler extends Scheduler {
  protected createCalender(): ArabianCalendar {
    return new ArabianCalendar();
  }
}
