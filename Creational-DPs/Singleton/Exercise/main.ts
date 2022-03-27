import { Logger } from "./Logger-soln";

// const logger = new Logger();
const logger = Logger.getInstance("APP");
const logger2 = Logger.getInstance("NEW APP");
const logger3 = Logger.getInstance("APP");

logger.write();
logger2.write();
logger3.write();

// check equality
if (logger === logger2) console.log("Two instances are equal");
else console.log("Two instances are NOT equal");

if (logger === logger3) console.log("Two instances are equal");
else console.log("Two instances are NOT equal");
