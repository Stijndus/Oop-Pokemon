import { Attack } from "../attack";
import { Pokemon } from "../pokemon";
import { Resistances } from "../type/resistances";
import { EnergyTypes } from "../type/types";
import { Weaknesses } from "../type/weakness";

export class Charmeleon extends Pokemon{
    constructor(name: string, health: number, attacks: Attack[],){
        super(name, health, EnergyTypes.Fire, attacks, Resistances.Electric, Weaknesses.Water);
    }
}