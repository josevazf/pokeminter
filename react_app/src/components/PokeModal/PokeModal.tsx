import React from 'react';
import { useState } from 'react';
import './PokeModal.style.css'
import { PokemonDetails } from '../../screens/PokeDetails/PokeDetails';
import { MintButton } from '../MintButton/MintButton';

const PokeModal = ({pokemons, pokemonSpecies, id, handleClose}: { pokemons: any[], pokemonSpecies: any[], id: number, handleClose: () => void}) => {
 
  const [currentId, setCurrentId] = useState(id);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleIdChange = (newId: number) => {
    setCurrentId(newId);
  };


  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="modal">
          <PokemonDetails pokemons={pokemons} pokemonSpecies={pokemonSpecies} id={id - 1}/>
          {/* <button className="close-btn" onClick={()=> handleClose()}>Close</button> */}
        </div>
    </div>
  );
};

export default PokeModal;