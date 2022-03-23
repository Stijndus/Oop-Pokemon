"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resistances = void 0;
var resistance_1 = require("../resistance");
var types_1 = require("./types");
var Resistances = /** @class */ (function () {
    function Resistances() {
    }
    Resistances.Fighting = new resistance_1.Resistance(types_1.EnergyTypes.Fighting, 20);
    Resistances.Normal = new resistance_1.Resistance(types_1.EnergyTypes.Normal, 10);
    Resistances.Flying = new resistance_1.Resistance(types_1.EnergyTypes.Flying, 15);
    Resistances.Posion = new resistance_1.Resistance(types_1.EnergyTypes.Posion, 20);
    Resistances.Ground = new resistance_1.Resistance(types_1.EnergyTypes.Ground, 17);
    Resistances.Rock = new resistance_1.Resistance(types_1.EnergyTypes.Rock, 13);
    Resistances.Bug = new resistance_1.Resistance(types_1.EnergyTypes.Bug, 19);
    Resistances.Ghost = new resistance_1.Resistance(types_1.EnergyTypes.Ghost, 12);
    Resistances.Steel = new resistance_1.Resistance(types_1.EnergyTypes.Steel, 21);
    Resistances.Fire = new resistance_1.Resistance(types_1.EnergyTypes.Fire, 22);
    Resistances.Water = new resistance_1.Resistance(types_1.EnergyTypes.Water, 11);
    Resistances.Grass = new resistance_1.Resistance(types_1.EnergyTypes.Grass, 10);
    Resistances.Electric = new resistance_1.Resistance(types_1.EnergyTypes.Electric, 24);
    Resistances.Psychic = new resistance_1.Resistance(types_1.EnergyTypes.Psychic, 12);
    Resistances.Ice = new resistance_1.Resistance(types_1.EnergyTypes.Ice, 25);
    Resistances.Dragon = new resistance_1.Resistance(types_1.EnergyTypes.Dragon, 23);
    Resistances.Dark = new resistance_1.Resistance(types_1.EnergyTypes.Dark, 15);
    Resistances.Fairy = new resistance_1.Resistance(types_1.EnergyTypes.Fairy, 15);
    return Resistances;
}());
exports.Resistances = Resistances;
//# sourceMappingURL=resistances.js.map