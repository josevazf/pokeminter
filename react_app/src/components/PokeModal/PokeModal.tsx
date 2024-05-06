import React from 'react';
import './PokeModal.style.css'
import { PokmonDetails } from '../../screens/PokeDetails';

const PokeModal = ({pokemons, pokemonSpecies, id, handleClose}: { pokemons: any[], pokemonSpecies: any[], id: number, handleClose: () => void}) => {

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="modal">
          <PokmonDetails pokemons={pokemons} pokemonSpecies={pokemonSpecies} id={id - 1}/>
          {/* <button className="close-btn" onClick={()=> handleClose()}>Close</button> */}
        </div>
    </div>
  );
};

export default PokeModal;