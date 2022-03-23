import { EnergyType } from "./energy";

export class Resistance {
    public type: EnergyType;
    public value: number;
    constructor(type: EnergyType, value: number){
        this.type = type;
        this.value = value;
    }
}