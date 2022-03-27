import { EnemyShip } from "./EnemyShip";
import { EnemyShipFactory } from "./EnemyShipFactory";

const shipFactory = new EnemyShipFactory();

const userInput = "B";
const theEnemy = shipFactory.makeEnemyShip(userInput);

doStuff(theEnemy);

function doStuff(ship: EnemyShip) {
  ship.displayEnemyShip();
  ship.followHeroShip();
  ship.enemyShipShoots();
}
