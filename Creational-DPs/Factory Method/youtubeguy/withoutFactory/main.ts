import { EnemyShip } from "./EnemyShip";
import { UFOEnemyShip } from "./UFOEnemyShip";
import { RocketEnemyShip } from "./RocketEnemyShip";

let theEnemy: EnemyShip;

const userInput = "R";
//@ts-ignore
if (userInput === "U") {
  theEnemy = new UFOEnemyShip();
} else if (userInput === "R") {
  theEnemy = new RocketEnemyShip();
}

doStuffEnemy(theEnemy);

function doStuffEnemy(ship: EnemyShip) {
  ship.displayEnemyShip();
  ship.followHeroShip();
  ship.enemyShipShoots();
}
