import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { typeColors } from '../../utils/typeColors';
import PokeModal from "../PokeModal/PokeModal";

export default function PokeCard({ name, image, types, id }: { name: string, image: string, types: any[], id: number }) {
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => {setShowModal(false)}

  // Fetch pokemon types
  const fetchTypes = () => {
    if (types && types.length > 0) {
      if (types.length === 1) {
        return types[0].type.name;
      } else {
        return types[0].type.name + " " + types[1].type.name;
      }
    }
    return "Loading...";
  };

  return (
    <>
      <Card sx={{ minWidth: 200, maxWidth: 250, height: 285 }} onClick={() => setShowModal(true)}>
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
            <Typography gutterBottom variant="h5" align='center' component="div" style={{ textTransform: 'capitalize' }}>
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
                      backgroundColor: typeColors[type.toLowerCase()], textTransform: 'capitalize' }}>
                    {type}
                  </div>
                ))}
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
  {/*       <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions> */}
      </Card>
      {showModal && <PokeModal name={name} image={image} id={id} handleClose={handleClose} types={[]}/>}
    </>
  );
}