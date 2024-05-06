import React from "react";
import { PokMonDetails } from "../../components/PokeDetails/PokeDetails";

export const PokmonDetails = ( {pokemons, pokemonSpecies, id}: { pokemons: any[], pokemonSpecies: any[], id: number} ): JSX.Element => {
  return (
    <PokMonDetails
      id={id}
      ATK={pokemons[id].data.stats[1].base_stat}
      DEF={pokemons[id].data.stats[2].base_stat}
      HP={pokemons[id].data.stats[0].base_stat}
      SATK={pokemons[id].data.stats[3].base_stat}
      SDEF={pokemons[id].data.stats[4].base_stat}
      SPD={pokemons[id].data.stats[5].base_stat}
      description={pokemonSpecies[id].data.flavor_text_entries[1].flavor_text.replace(/\u000C/g, ' ').replace(/POKéMON/g, "Pokémon")}
      height={`${pokemons[id].data.height} m`}
      /* @ts-ignore */
      moves={
        <>
          {pokemons[id].data.abilities[0] && pokemons[id].data.abilities[0].ability.name.charAt(0).toUpperCase() + pokemons[id].data.abilities[0].ability.name.slice(1)}<br />
          {pokemons[id].data.abilities[1] && pokemons[id].data.abilities[1].ability.name.charAt(0).toUpperCase() + pokemons[id].data.abilities[1].ability.name.slice(1)}
        </>
      }
      name={pokemons[id].data.name.charAt(0).toUpperCase() + pokemons[id].data.name.slice(1)}
      number={String(id + 1)}
      weight={`${pokemons[id].data.weight} kg`}
      image={pokemons[id].data.sprites.other['official-artwork'].front_default}
      types={pokemons[id].data.types}
    />
  );
};
