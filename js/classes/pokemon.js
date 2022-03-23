"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, health, type, attacks, resistance, weakness) {
        this.name = name;
        this.health = health;
        this.currentHealth = this.health;
        this.type = type;
        this.attacks = attacks;
        this.resistance = resistance;
        this.weakness = weakness;
        Pokemon.pokedex.push(this);
    }
    Pokemon.pokedex = [];
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map