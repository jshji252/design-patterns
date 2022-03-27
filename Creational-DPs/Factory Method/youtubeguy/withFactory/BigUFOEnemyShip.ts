import { EnemyShip } from "./EnemyShip";

export class BigUFOEnemyShip extends EnemyShip {
  constructor() {
    super();
    this.setName("Big UFO Enemy Ship");
    this.setAmtDamage(200);
  }
}
