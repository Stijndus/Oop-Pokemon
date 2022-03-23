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
      return defender.Damage(
        currentDamage * defender.weakness.multiplier,
        `${defender.name}'s health is ${defender.currentHealth}! \n${this.name} did ${currentDamage} to ${defender.name} and was very effective!`,
        defender
      );
    } else if (attack.type === defender.resistance.type) {
      return defender.Damage(
        currentDamage - defender.resistance.value,
        `${defender.name}'s health is ${defender.currentHealth}! \n${this.name} did ${currentDamage} to ${defender.name} and was not very effective!`,
        defender
      );
    } else {
      return defender.Damage(
        currentDamage,
        `${defender.name}'s health is ${defender.currentHealth}! \n${this.name} did ${currentDamage} to ${defender.name}!`,
        defender
      );
    }
  }

  public Damage(damage: number, message: string, defender: Pokemon) {
    if (damage < 0) return `${this.name} dodged ${defender.name}'s attack!`;
    this.currentHealth -= damage;
    if (this.currentHealth > 0) {
      return message;
    } else {
      return this.Die(message);
    }
  }

  public Die(message) {
    Pokemon.pokedex.splice(Pokemon.pokedex.indexOf(this), 1);
    return `${message} \n ${this.name} fainted!`;
  }
}
