import { Pokemon } from "../pokemon";
import { Resistances } from "../type/resistances";
import { EnergyTypes } from "../type/types";
import { Weaknesses } from "../type/weakness";

export class Piplup extends Pokemon {
    constructor(name, health, attacks){
        super(name, health, EnergyTypes.Water, attacks, Resistances.Fire, Weaknesses.Ground);
    }
}