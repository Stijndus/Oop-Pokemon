
import { Pokemon } from "../pokemon";
import { Resistances } from "../type/resistances";
import { EnergyTypes } from "../type/types";
import { Weaknesses } from "../type/weakness";

export class Pikachu extends Pokemon{
    constructor(name, health, attacks){
        super(name, health, EnergyTypes.Electric, attacks, Resistances.Fighting, Weaknesses.Fire);
    }
}