// @ts-nocheck
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { ArrowBack } from "../../icons/ArrowBack";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { ChevronRight } from "../../icons/ChevronRight";
import { Pokeball } from "../../icons/Pokeball";
import { Straighten } from "../../icons/Straighten";
import { Weight } from "../../icons/Weight";
import { Silhouette } from "../Silhouette";
import { TypeChips } from "../TypeChips";
import { typeColors } from "../../utils/typeColors";
import "./style.css";

interface Props {
  id: number;
  SDEF: string;
  DEF: string;
  ATK: string;
  name: string;
  HP: string;
  description: string;
  moves: string;
  height: string;
  weight: string;
  SPD: string;
  number: string;
  SATK: string;
  image: string;
  types: [];
}

export const PokMonDetails = ({
  id = "1",
  SDEF = "999",
  DEF = "999",
  ATK = "999",
  name = "Pokémon Name",
  HP = "999",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis eros vitae tellus condimentum maximus sit amet in eros.",
  moves = "Ability 1\nAbility 2",
  height = "9,9 m",
  weight = "9,9 kg",
  SPD = "999",
  number = "#999",
  SATK = "999",
  image = "url",
  types = [],
}: Props): JSX.Element => {

  // Check number of types to render
  const renderTypeChips = () => {
    if (types.length === 1) {
      
      return <TypeChips className="type-chips-instance" type={types[0].type.name}/>;
    }
    else if (types.length === 2) {
      return (
        <div >
            <TypeChips className="type-chips-instance" type={types[0].type.name}/>
          < > </>
            <TypeChips className="type-chips-instance" type={types[1].type.name}/>
        </div>
      );
    }
  };

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

  return (

    <div className="pok-mon-details" style={{ backgroundColor: typeColors[types[0].type.name.toLowerCase()]}}>
      <div className="title">
        <ArrowBack className="arrow-back" />
        <div className="pok-mon-name">{name}</div>
        <div className="element">{`#${String(number).padStart(3, '0')}`}</div>
      </div>
      <div className="image">
        <ChevronLeft className="icon-instance-node" onClick={handlePrev}/>
        <ChevronRight className="icon-instance-node" onClick={handleNext}/>
        <Silhouette className="silhouette-instance" image={image}/>
      </div>
      <div className="card">
        <div className="div">
          {renderTypeChips()}
        </div>
        <div className="text-wrapper">About</div>
        <div className="attribute">
          <div className="frame">
            <div className="frame-2">
              <Weight className="icon-instance-node-2" />
              <div className="text-wrapper-2">{weight}</div>
            </div>
            <div className="text-wrapper-3">Weight</div>
          </div>
          <div className="divider" />
          <div className="frame">
            <div className="frame-2">
              <Straighten className="icon-instance-node-2" />
              <div className="text-wrapper-2">{height}</div>
            </div>
            <div className="text-wrapper-3">Height</div>
          </div>
          <div className="divider" />
          <div className="frame">
            <div className="ability-ability-wrapper">
              <div className="ability-ability">{moves}</div>
            </div>
            <div className="text-wrapper-3">Moves</div>
          </div>
        </div>
        <p className="lorem-ipsum-dolor">{description}</p>
        <div className="text-wrapper-4">Base Stats</div>
        <div className="base-stats">
          <div className="label">
            <div className="text-wrapper-5">HP</div>
            <div className="text-wrapper-6">ATK</div>
            <div className="text-wrapper-6">DEF</div>
            <div className="text-wrapper-6">SATK</div>
            <div className="text-wrapper-6">SDEF</div>
            <div className="text-wrapper-6">SPD</div>
          </div>
          <div className="divider" />
          <div className="data">
            <div className="element-2">{String(HP).padStart(3, '0')}</div>
            <div className="element-3">{String(ATK).padStart(3, '0')}</div>
            <div className="element-3">{String(DEF).padStart(3, '0')}</div>
            <div className="element-3">{String(SATK).padStart(3, '0')}</div>
            <div className="element-3">{String(SDEF).padStart(3, '0')}</div>
            <div className="element-3">{String(SPD).padStart(3, '0')}</div>
          </div>
          <div className="chart">
            <div className="chart-2">
              <div className="value_hp" style={{width: `${parseInt(HP) / 255 * 100}%`}}>
                <div className="retangle" style={{ backgroundColor: typeColors[types[0].type.name.toLowerCase()]}}/>
              </div>
              <div className="background" style={{ backgroundColor: typeColors[types[0].type.name.toLowerCase()]}}/>
            </div>
            <div className="chart-2">
              <div className="value_atk" style={{width: `${parseInt(ATK) / 255 * 100}%`}}>
                <div className="retangle" style={{ backgroundColor: typeColors[types[0].type.name.toLowerCase()]}}/>
              </div>
              <div className="background" style={{ backgroundColor: typeColors[types[0].type.name.toLowerCase()]}}/>
            </div>
            <div className="chart-2">
              <div className="value_def" style={{width: `${parseInt(DEF) / 255 * 100}%`}}>
                <div className="retangle" style={{ backgroundColor: typeColors[types[0].type.name.toLowerCase()]}}/>
              </div>
              <div className="background" style={{ backgroundColor: typeColors[types[0].type.name.toLowerCase()]}}/>
            </div>
            <div className="chart-2">
              <div className="value_satk" style={{width: `${parseInt(SATK) / 255 * 100}%`}}>
                <div className="retangle" style={{ backgroundColor: typeColors[types[0].type.name.toLowerCase()]}}/>
              </div>
              <div className="background" style={{ backgroundColor: typeColors[types[0].type.name.toLowerCase()]}}/>
            </div>
            <div className="chart-2">
              <div className="value_sdef" style={{width: `${parseInt(SDEF) / 255 * 100}%`}}>
                <div className="retangle" style={{ backgroundColor: typeColors[types[0].type.name.toLowerCase()]}}/>
              </div>
              <div className="background" style={{ backgroundColor: typeColors[types[0].type.name.toLowerCase()]}}/>
            </div>
            <div className="chart-2">
              <div className="value_spd" style={{width: `${parseInt(SPD) / 255 * 100}%`}}>
                <div className="retangle" style={{ backgroundColor: typeColors[types[0].type.name.toLowerCase()]}}/>
              </div>
              <div className="background" style={{ backgroundColor: typeColors[types[0].type.name.toLowerCase()]}}/>
            </div>
          </div>
        </div>
      </div>
      <Pokeball className="pokeball-instance" />
    </div>
  );
};

PokMonDetails.propTypes = {
  id: PropTypes.number,
  SDEF: PropTypes.string,
  DEF: PropTypes.string,
  ATK: PropTypes.string,
  name: PropTypes.string,
  HP: PropTypes.string,
  description: PropTypes.string,
  moves: PropTypes.string,
  height: PropTypes.string,
  weight: PropTypes.string,
  SPD: PropTypes.string,
  number: PropTypes.string,
  SATK: PropTypes.string,
  image: PropTypes.string,
  types: PropTypes.any,
};
