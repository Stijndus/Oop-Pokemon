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
    Pokemon.prototype.Attack = function (attack, defender) {
        var currentDamage = attack.damage;
        if (attack.type === defender.weakness.type) {
            return defender.Damage(currentDamage * defender.weakness.multiplier, "".concat(defender.name, "'s health is ").concat(defender.currentHealth, "! \n").concat(this.name, " did ").concat(currentDamage, " to ").concat(defender.name, " and was very effective!"), defender);
        }
        else if (attack.type === defender.resistance.type) {
            return defender.Damage(currentDamage - defender.resistance.value, "".concat(defender.name, "'s health is ").concat(defender.currentHealth, "! \n").concat(this.name, " did ").concat(currentDamage, " to ").concat(defender.name, " and was not very effective!"), defender);
        }
        else {
            return defender.Damage(currentDamage, "".concat(defender.name, "'s health is ").concat(defender.currentHealth, "! \n").concat(this.name, " did ").concat(currentDamage, " to ").concat(defender.name, "!"), defender);
        }
    };
    Pokemon.prototype.Damage = function (damage, message, defender) {
        if (damage < 0)
            return "".concat(this.name, " dodged ").concat(defender.name, "'s attack!");
        this.currentHealth -= damage;
        if (this.currentHealth > 0) {
            return message;
        }
        else {
            return this.Die(message);
        }
    };
    Pokemon.prototype.Die = function (message) {
        Pokemon.pokedex.splice(Pokemon.pokedex.indexOf(this), 1);
        return "".concat(message, " \n ").concat(this.name, " fainted!");
    };
    Pokemon.pokedex = [];
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map