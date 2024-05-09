import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { typeColors } from '../../utils/typeRefs';
import PokeModal from "../PokeModal/PokeModal";

export default function PokeCard({ pokemons, pokemonSpecies, name, image, types, id }: { pokemons: any[], pokemonSpecies: any[],  name: string, image: string, types: any[], id: number }) {
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => { setShowModal(false) }

  // Fetch pokemon types
  const fetchTypes = () => {
    if (types && types.length > 0) {
      if (types.length === 1) {
        return types[0].type.name;
      } else {
        return types[0].type.name + " " + types[1].type.name;
      }
    }
    return "Ooooops...";
  };

  if (name === "nidoran-m") {
    name = name.replace(/-m/g, "\u2642");
  } else if (name === "nidoran-f") {
    name = name.replace(/-f/g, "\u2640");
  }

  return (
    <>
      <Card className='card'
        variant="outlined"
        sx={{
          minWidth: 200,
          maxWidth: 250,
          height: 285,
          borderColor: types && types[0] ? typeColors[types[0].type.name.toLowerCase() as keyof typeof typeColors] : undefined
        }}
        onClick={name !== "Not found" ? () => setShowModal(true) : undefined}>
        <CardActionArea>
          <div style={{ textAlign: "right", paddingTop: "10px", paddingRight: "10px" }}>
            <Typography gutterBottom variant="caption">
              {`#${String(id).padStart(3, '0')}`}
            </Typography>
          </div>
          <CardMedia
            component="img"
            sx={{ height: 150, objectFit: "scale-down" }}
            image={image}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" align='center' component="div" style={{ textTransform: 'capitalize', fontFamily: "Poppins", fontWeight: "400" }}>
              {name}
            </Typography>
            <Typography variant="body2" align='center'>
              <div className='pokeType'>
                {fetchTypes().split(" ").map((type: string, index: number) => (
                  <div
                    className='group'
                    key={index}
                    style={{
                      /* @ts-ignore */
                      backgroundColor: typeColors[type.toLowerCase()], textTransform: 'capitalize'
                    }}>
                    {type}
                  </div>
                ))}
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {showModal && <PokeModal pokemons={pokemons} pokemonSpecies={pokemonSpecies} id={id} handleClose={handleClose} />}
    </>
  );
}
