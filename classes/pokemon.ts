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
    public static pokedex: Pokemon[];

    constructor(name, health, type, attacks, resistance, weakness){
        this.name = name;
        this.health = health;
        this.currentHealth = this.health;
        this.type = type;
        this.attacks = attacks;
        this.resistance = resistance;
        this.weakness = weakness;
        Pokemon.pokedex.push(this);
    }   
}