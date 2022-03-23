import { Attack } from "./attack";
import { EnergyType } from "./energy";
import { Resistance } from "./resistance";
import { Weakness } from "./weakness";

export class Pokemon {
  public name: string;
  public health: number;
  public currentHealth: number;
  public type: EnergyType;
  public attacks: Attack[];
  public resistance: Resistance;
  public weakness: Weakness;
  public static pokedex: Pokemon[] = [];

  constructor(
    name: string,
    health: number,
    type: EnergyType,
    attacks: Attack[],
    resistance: Resistance,
    weakness: Weakness
  ) {
    this.name = name;
    this.health = health;
    this.currentHealth = this.health;
    this.type = type;
    this.attacks = attacks;
    this.resistance = resistance;
    this.weakness = weakness;
    Pokemon.pokedex.push(this);
  }

  public Attack(attack: Attack, defender: Pokemon) {
    let currentDamage = attack.damage;
    if (attack.type === defender.weakness.type) {
      defender.Damage(currentDamage * defender.weakness.multiplier, `${this.name} did ${currentDamage} to ${defender.name} and was very effective!`);
    } else if (attack.type === defender.resistance.type) {
      defender.Damage(currentDamage - defender.resistance.value, `${this.name} did ${currentDamage} to ${defender.name} and was not very effective!`);
    } else {
      defender.Damage(currentDamage, `${this.name} did ${currentDamage} to ${defender.name}!`);
    }
  }

  public Damage(damage: number, message: string) {
    if(damage < 0) return `${this.name} dodged the attack!`
    if (this.currentHealth > 0) {
      this.currentHealth -= damage;
      return message;
    } else {
        this.Die();
    }
  }

  public Die() {
    Pokemon.pokedex.splice(Pokemon.pokedex.indexOf(this), 1);
    return `${this.name} fainted!`;
  }
}
