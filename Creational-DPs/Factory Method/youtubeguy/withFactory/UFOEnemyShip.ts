import { EnemyShip } from "./EnemyShip";

export class UFOEnemyShip extends EnemyShip {
  constructor() {
    super();
    this.setName("UFO Enemy Ship");
    this.setAmtDamage(20);
  }
}
