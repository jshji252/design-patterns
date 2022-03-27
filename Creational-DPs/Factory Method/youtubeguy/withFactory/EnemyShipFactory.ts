import { BigUFOEnemyShip } from "./BigUFOEnemyShip";
import { EnemyShip } from "./EnemyShip";
import { RocketEnemyShip } from "./RocketEnemyShip";
import { UFOEnemyShip } from "./UFOEnemyShip";

export class EnemyShipFactory {
  makeEnemyShip(newShipType: string) {
    if (newShipType === "U") {
      return new UFOEnemyShip();
    } else if (newShipType === "R") {
      return new RocketEnemyShip();
    } else if (newShipType === "B") {
      return new BigUFOEnemyShip();
    } else {
      return null;
    }
  }
}
