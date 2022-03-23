"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attack_1 = require("./classes/attack");
var pokemon_1 = require("./classes/pokemon");
var charmeleon_1 = require("./classes/pokemons/charmeleon");
var pikachu_1 = require("./classes/pokemons/pikachu");
var types_1 = require("./classes/type/types");
var FlipFlapDeElektriciteitsMuis = new pikachu_1.Pikachu("Flip Flap De Elektriciteits Muis", 100, [
    new attack_1.Attack("Electric Ring", types_1.EnergyTypes.Electric, 50),
    new attack_1.Attack("PikaPunch", types_1.EnergyTypes.Fighting, 20),
]);
var FlapFlipDeVuurDraak = new charmeleon_1.Charmeleon("Falp Flip De Vuur Draak", 100, [
    new attack_1.Attack("Head Butt", types_1.EnergyTypes.Fighting, 10),
    new attack_1.Attack("Flare", types_1.EnergyTypes.Fire, 30)
]);
while (pokemon_1.Pokemon.pokedex.length > 1) {
    pokemon_1.Pokemon.pokedex.forEach(function (pokemon, index) {
        if (index === pokemon_1.Pokemon.pokedex.length - 1) {
            console.log(pokemon.Attack(pokemon.attacks[Math.floor(Math.random() * (pokemon.attacks.length - 1 - 0 + 1)) + 0], pokemon_1.Pokemon.pokedex[0]));
        }
        else {
            console.log(pokemon.Attack(pokemon.attacks[Math.floor(Math.random() * (pokemon.attacks.length - 1 - 0 + 1)) + 0], pokemon_1.Pokemon.pokedex[index + 1]));
        }
    });
}
//# sourceMappingURL=index.js.map