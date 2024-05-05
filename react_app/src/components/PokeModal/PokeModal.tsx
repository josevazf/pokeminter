import React, { useState, useEffect } from 'react';
import './PokeModal.style.css'

const PokeModal = ({pokemons, id, handleClose}: { pokemons: any[], id: number, handleClose: () => void}) => {
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
           <div className="arrow-btn left" onClick={handlePrev}>{'<'}</div>
            <img className="modal-img" src={pokemons[currentId - 1].data.sprites.other['official-artwork'].front_default} alt="profile pic" />
            <div className="arrow-btn right" onClick={handleNext}>{'>'}</div>
            <div className="modal-body">
               <div className='modal-name'>{pokemons[currentId - 1].data.name}</div>
               <div className='modal-role'>{currentId}</div>
            </div>
            <button className="close-btn" onClick={()=> handleClose()}>Close</button>
        </div>
    </div>
  );
};

export default PokeModal;