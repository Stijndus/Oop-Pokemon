"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var energy_1 = require("./classes/energy");
var pokemon_1 = require("./classes/pokemon");
var pikachu_1 = require("./classes/pokemons/pikachu");
var resistance_1 = require("./classes/resistance");
var weakness_1 = require("./classes/weakness");
var LightningET = new energy_1.EnergyType("Lightning");
var ResLightning = new resistance_1.Resistance("Lightning", 10);
var WeakLightning = new weakness_1.Weakness();
var FlipFlapDeElektriciteitsMuis = new pikachu_1.Pikachu("Flip Flap De Elektriciteits Muis", 100, LightningET, [], ResLightning, WeakLightning);
console.log(pokemon_1.Pokemon.pokedex);
//# sourceMappingURL=index.js.map