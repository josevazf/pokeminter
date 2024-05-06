import React from "react";
import { PokeMonDetails } from "../../components/PokeDetails/PokeDetails";

export const PokemonDetails = ( {pokemons, pokemonSpecies, id}: { pokemons: any[], pokemonSpecies: any[], id: number} ): JSX.Element => {
  return (
    <PokeMonDetails
      pokemons={pokemons}
      pokemonSpecies={pokemonSpecies}
      id={id}
    />
  );
};
