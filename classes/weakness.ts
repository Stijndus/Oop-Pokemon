import { EnergyType } from "./energy";

export class Weakness {
    public type: EnergyType;
    public multiplier: number;

    constructor(type: EnergyType, multiplier: number){
        this.type = type;
        this.multiplier = multiplier;
    }
}