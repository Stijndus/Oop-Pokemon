import { Attack } from "./classes/attack";
import { Pokemon } from "./classes/pokemon";
import { Charmeleon } from "./classes/pokemons/charmeleon";
import { Pikachu } from "./classes/pokemons/pikachu";
import { Piplup } from "./classes/pokemons/piplup";
import { EnergyTypes } from "./classes/type/types";

new Pikachu(
  "Flip Flap De Elektriciteits Muis",
  100,
  [
      new Attack("Electric Ring", EnergyTypes.Electric, 50),
      new Attack("PikaPunch", EnergyTypes.Fighting, 20),
  ],
);

new Charmeleon(
  "Flap Flip De Vuur Draak",
  100,
  [
    new Attack("Head Butt", EnergyTypes.Fighting, 10),
    new Attack("Flare", EnergyTypes.Fire, 30)
  ],
);

new Piplup(
  "Vage Water Eend",
  75,
  [
    new Attack("Tackle", EnergyTypes.Normal, 15),
    new Attack("Water Spout", EnergyTypes.Water, 25)
  ]
);

while (Pokemon.pokedex.length > 1) {
  Pokemon.pokedex.forEach((pokemon, index) => {
    if (index === Pokemon.pokedex.length - 1) {
      console.log(
        pokemon.Attack(
          pokemon.attacks[
            Math.floor(Math.random() * (pokemon.attacks.length - 1 - 0 + 1)) + 0
          ],
          Pokemon.pokedex[0]
        )
      );
    } else {
      console.log(
        pokemon.Attack(
          pokemon.attacks[
            Math.floor(Math.random() * (pokemon.attacks.length - 1 - 0 + 1)) + 0
          ],
          Pokemon.pokedex[index + 1]
        )
      );
    }
  });
}
