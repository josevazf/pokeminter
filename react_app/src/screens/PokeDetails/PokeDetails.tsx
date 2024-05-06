import React from "react";
import { PokMonDetails } from "../../components/PokeDetails/PokeDetails";

export const PokmonDetails = ( {pokemons, pokemonSpecies, id}: { pokemons: any[], pokemonSpecies: any[], id: number} ): JSX.Element => {
  return (
    <PokMonDetails
      pokemons={pokemons}
      pokemonSpecies={pokemonSpecies}
      id={id}
    />
  );
};
