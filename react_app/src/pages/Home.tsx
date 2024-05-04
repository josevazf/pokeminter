import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import PokeCard from "../components/PokeCard/PokeCard";
import { Box, Container, Grid } from "@mui/material";
//import typeColors from "../utils/typeColors";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  var pokemonLimit = 151;

  // Gets all pokemons from API up to `pokemonLimit`
  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i <= pokemonLimit; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    axios.all(endpoints.map((endpoint) =>
      axios
        .get(endpoint)))
      /* @ts-ignore */
      .then((res) => setPokemons(res))
      .catch((err) => console.log(err));
  };

  // Filters pokemons based on input name
  const pokemonFilter = (name: string) => {
    //var filteredPokemons = [];

    if (name == "") {
      getPokemons();
      return;
    }
    /*     else {
          getPokemons();
          for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name.toLowerCase())) {
              filteredPokemons.push(pokemons[i]);
            }
          }
        } */
    var filteredPokemons = pokemons.filter((pokemon: any) =>
      pokemon.data.name.includes(name.toLowerCase())
    );

    setPokemons(filteredPokemons);
  };

  return (
    <div style={{ margin: 'auto' }}>
      <Navbar pokemonFilter={pokemonFilter} />
      <div style={{ margin: 'auto', maxWidth: '70%' }}>
        <Container maxWidth={false}>
          <Grid container component="div" spacing={5}>
            {pokemons.length === 0 ? (
              <Grid item xs={12} sm={8} md={6} lg={4} xl={2}>
                <PokeCard name="empty" image="/assets/pokemon_who.png" types={[]} id={0} />
              </Grid>
            ) : (
              pokemons.map((pokemon: any, key: number) => (
                <Grid item xs={12} sm={8} md={6} lg={4} xl={2} key={key}>
                  <Box>
                    <PokeCard
                      name={pokemon.data.name}
                      id={pokemon.data.id}
                      image={pokemon.data.sprites.other.dream_world.front_default}
                      types={pokemon.data.types}
                    />
                  </Box>
                </Grid>
              ))
            )}
          </Grid>-
        </Container>
      </div>
    </div>
  )
}
