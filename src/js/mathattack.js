export default class Character {
    constructor(name, distance) {
      this.name = name;
      this.attackValue = 100;
      this.distance = distance;
      this.datura = false;
    }
  
    get attack() {
      return (() => {
        let attack = this.attackValue - (this.distance - 1) * 10;
        if (this.datura) {
          attack -= Math.log2(this.distance) * 5;
        }
        return Math.round(attack);
      });
    }
  
    set attack(value) {
      this.attackValue = value;
    }
  
    get datura() {
      return this.datura;
    }
  
    set datura(boolean) {
      this.datura = boolean;
    }
  }