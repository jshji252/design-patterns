import { EnemyShip } from "./EnemyShip";

export class RocketEnemyShip extends EnemyShip {
  constructor() {
    super();
    this.setName("Rocket Enemy Ship");
    this.setAmtDamage(10);
  }
}
