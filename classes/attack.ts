import { EnergyType } from "./energy";

export class Attack{
    public name: string;
    public type: EnergyType;
    public damage: number;

    constructor(name, type, damage){
        this.name = name;
        this.type = type;
        this.damage = damage;
    }
}