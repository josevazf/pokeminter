import React, { useState, useEffect } from 'react';
import './PokeModal.style.css'
import { PokmonDetails } from '../../screens/PokeDetails';

const PokeModal = ({pokemons, pokemonSpecies, id, handleClose}: { pokemons: any[], pokemonSpecies: any[], id: number, handleClose: () => void}) => {
  const [currentId, setCurrentId] = useState(id);

  useEffect(() => {
    setCurrentId(id);
  }, [id]);

  const handlePrev = () => {
    if (currentId > 1) {
      setCurrentId(currentId - 1);
    }
  };

  const handleNext = () => {
    if (currentId < pokemons.length) {
      setCurrentId(currentId + 1);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="modal">
          <PokmonDetails pokemons={pokemons} pokemonSpecies={pokemonSpecies} id={currentId -1 }/>
          <div className="arrow-btn left" onClick={handlePrev}>{'<'}</div>
          <div className="arrow-btn right" onClick={handleNext}>{'>'}</div>
          <button className="close-btn" onClick={()=> handleClose()}>Close</button>
        </div>
    </div>
  );
};

export default PokeModal;