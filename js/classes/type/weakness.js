"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weaknesses = void 0;
var types_1 = require("./types");
var weakness_1 = require("../weakness");
var Weaknesses = /** @class */ (function () {
    function Weaknesses() {
    }
    Weaknesses.Fighting = new weakness_1.Weakness(types_1.EnergyTypes.Fighting, 1.5);
    Weaknesses.Normal = new weakness_1.Weakness(types_1.EnergyTypes.Normal, 1.5);
    Weaknesses.Flying = new weakness_1.Weakness(types_1.EnergyTypes.Flying, 1.5);
    Weaknesses.Posion = new weakness_1.Weakness(types_1.EnergyTypes.Posion, 1.5);
    Weaknesses.Ground = new weakness_1.Weakness(types_1.EnergyTypes.Ground, 1.5);
    Weaknesses.Rock = new weakness_1.Weakness(types_1.EnergyTypes.Rock, 1.5);
    Weaknesses.Bug = new weakness_1.Weakness(types_1.EnergyTypes.Bug, 1.5);
    Weaknesses.Ghost = new weakness_1.Weakness(types_1.EnergyTypes.Ghost, 1.5);
    Weaknesses.Steel = new weakness_1.Weakness(types_1.EnergyTypes.Steel, 1.5);
    Weaknesses.Fire = new weakness_1.Weakness(types_1.EnergyTypes.Fire, 1.5);
    Weaknesses.Water = new weakness_1.Weakness(types_1.EnergyTypes.Water, 1.5);
    Weaknesses.Grass = new weakness_1.Weakness(types_1.EnergyTypes.Grass, 1.5);
    Weaknesses.Electric = new weakness_1.Weakness(types_1.EnergyTypes.Electric, 1.5);
    Weaknesses.Psychic = new weakness_1.Weakness(types_1.EnergyTypes.Psychic, 1.5);
    Weaknesses.Ice = new weakness_1.Weakness(types_1.EnergyTypes.Ice, 1.5);
    Weaknesses.Dragon = new weakness_1.Weakness(types_1.EnergyTypes.Dragon, 1.5);
    Weaknesses.Dark = new weakness_1.Weakness(types_1.EnergyTypes.Dark, 1.5);
    Weaknesses.Fairy = new weakness_1.Weakness(types_1.EnergyTypes.Fairy, 1.5);
    return Weaknesses;
}());
exports.Weaknesses = Weaknesses;
//# sourceMappingURL=weakness.js.map