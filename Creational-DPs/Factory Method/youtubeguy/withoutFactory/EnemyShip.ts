export abstract class EnemyShip {
  private name: string;
  private amtDamage: number;

  getName() {
    return this.name;
  }
  setName(v) {
    this.name = v;
  }

  getAmtDamage() {
    return this.amtDamage;
  }
  setAmtDamage(v) {
    this.amtDamage = v;
  }

  followHeroShip() {
    console.log(this.getName() + " is following the hero!");
  }

  displayEnemyShip() {
    console.group(this.getName() + " is on the screen!");
  }

  enemyShipShoots() {
    console.log(
      this.getName() + " attacks and does " + this.getAmtDamage() + " damage!"
    );
  }
}
