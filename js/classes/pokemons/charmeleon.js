"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Charmeleon = void 0;
var pokemon_1 = require("../pokemon");
var resistances_1 = require("../type/resistances");
var types_1 = require("../type/types");
var weakness_1 = require("../type/weakness");
var Charmeleon = /** @class */ (function (_super) {
    __extends(Charmeleon, _super);
    function Charmeleon(name, health, attacks) {
        return _super.call(this, name, health, types_1.EnergyTypes.Fire, attacks, resistances_1.Resistances.Electric, weakness_1.Weaknesses.Water) || this;
    }
    return Charmeleon;
}(pokemon_1.Pokemon));
exports.Charmeleon = Charmeleon;
//# sourceMappingURL=charmeleon.js.map