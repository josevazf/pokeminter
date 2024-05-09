// @ts-nocheck
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import PokeCard from "../components/PokeCard/PokeCard";
import { Box, Container, Grid } from "@mui/material";
/* import Footer from "../components/Footer/Footer"; */

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSpecies, setPokemonSpecies] = useState([]);
  const [pokemonAll, setPokemonAll] = useState([]);
  const [pokemonSpeciesAll, setPokemonSpeciesAll] = useState([]);

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pokemonLimit = 151;

  // Gets all pokemons from API up to `pokemonLimit`
  const getPokemons = () => {
    var pokeEndpoints = [];
    var pokeSpeciesEndpoints = []

    for (var i = 1; i <= pokemonLimit; i++) {
      pokeEndpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      pokeSpeciesEndpoints.push(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
    }
    axios.all(pokeEndpoints.map((endpoint) =>
      axios
        .get(endpoint)))
      .then((res) => {
        setPokemons(res);
        setPokemonAll(res);
      })
      .catch((err) => console.log(err));
    axios.all(pokeSpeciesEndpoints.map((endpoint) =>
      axios
        .get(endpoint)))
      .then((res) => {
        setPokemonSpecies(res);
        setPokemonSpeciesAll(res);
      })
      .catch((err) => console.log(err));
  };

  // Filters pokemons based on input name
  const pokemonFilter = (name: string) => {
    if (name === "") {
      setPokemons(pokemonAll);
      setPokemonSpecies(pokemonSpeciesAll);
      return;
    }
    var filteredPokemons = pokemons.filter((pokemon: any) =>
      pokemon.data.name.includes(name.toLowerCase())
    );
    var filteredPokemonSpecies = pokemonSpecies.filter((pokemonSpecies: any) =>
      pokemonSpecies.data.name.includes(name.toLowerCase())
    );
    setPokemons(filteredPokemons);
    setPokemonSpecies(filteredPokemonSpecies);
  };

  return (
    <Container style={{ maxWidth: '80%' }}>
      <div style={{ margin: 'auto', maxWidth: '80%'}}>
      <Navbar pokemonFilter={pokemonFilter}  />
        <Container maxWidth={false} style={{ margin: 'auto'}}>
          <Grid container component="div" spacing={5} >
            {pokemons.length === 0 ? (
              <Grid item>
                <PokeCard pokemons={[]} pokemonSpecies={[]} name="Not found" image="/assets/empty.png" types={[]} id={404} />
              </Grid>
            ) : (
              pokemons.map((pokemon: any, key: number) => (
                <Grid item xs={12} sm={8} md={6} lg={4} xl={2} key={key}>
                  <Box>
                    <PokeCard
                      pokemons={pokemonAll}
                      pokemonSpecies={pokemonSpeciesAll}
                      name={pokemon.data.name}
                      id={pokemon.data.id}
                      image={pokemon.data.sprites.other['official-artwork'].front_default}
                      types={pokemon.data.types}
                    />
                  </Box>
                </Grid>
              ))
            )}
          </Grid>
        </Container>
      </div>
      {/* <Footer/> */}
    </Container>
  )
}
