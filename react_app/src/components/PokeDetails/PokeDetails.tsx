// @ts-nocheck
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { ChevronLeft } from "../../icons/ChevronLeft/ChevronLeft";
import { ChevronRight } from "../../icons/ChevronRight/ChevronRight";
import { Pokeball } from "../../icons/Pokeball/Pokeball";
import { Straighten } from "../../icons/Straighten/Straighten";
import { Weight } from "../../icons/Weight/Weight";
import { Silhouette } from "../Silhouette/Silhouette";
import { TypeChips } from "../TypeChips/TypeChips";
import { typeColors } from "../../utils/typeRefs";
import { Button } from "@mui/material";
import "./style.css";

interface Props {
  pokemons: any[];
  pokemonSpecies: any[];
  id: number;
}

export const PokeMonDetails = ({
  pokemons,
  pokemonSpecies,
  id,
}: Props): JSX.Element => {

  // Handle pokemon change to previous or next
  const [currentId, setCurrentId] = useState(id);
  useEffect(() => {
    setCurrentId(id);
  }, [id]);

  const handlePrev = () => {
    if (currentId >= 1) {
      setCurrentId(currentId - 1);
    }
  };

  const handleNext = () => {
    if (currentId < pokemons.length - 1) {
      setCurrentId(currentId + 1);
    }
  };

  // Check number of types to render
  const renderTypeChips = () => {
    if (pokemons[currentId].data.types.length === 1)
      return <TypeChips className="type-chips-instance" type={pokemons[currentId].data.types[0].type.name}/>;
    else if (pokemons[currentId].data.types.length === 2) {
      return (
        <div >
            <TypeChips className="type-chips-instance" type={pokemons[currentId].data.types[0].type.name}/>
          <> </>
            <TypeChips className="type-chips-instance" type={pokemons[currentId].data.types[1].type.name}/>
        </div>
      );
    }
  };

  var name = pokemons[currentId].data.name.charAt(0).toUpperCase() + pokemons[currentId].data.name.slice(1);

  if (name === "Nidoran-m") {
    name = name.replace(/-m/g, "\u2642");
  } else if (name === "Nidoran-f") {
    name = name.replace(/-f/g, "\u2640");
  }

  var number = currentId + 1;
  var image = pokemons[currentId].data.sprites.other['official-artwork'].front_default;

  var j = 0;
  while (pokemonSpecies[currentId].data.flavor_text_entries[j].language.name !== "en") {
    j++;
  }

  var description = pokemonSpecies[currentId].data.flavor_text_entries[j].flavor_text.replace(/\u000C/g, ' ').replace(/POKéMON/g, "Pokémon");
  var height = `${pokemons[currentId].data.height} m`;
  var weight = `${pokemons[currentId].data.weight} kg`;
  var ability1 = pokemons[currentId].data.abilities[0] && pokemons[currentId].data.abilities[0].ability.name.charAt(0).toUpperCase() + pokemons[currentId].data.abilities[0].ability.name.slice(1);
  var ability2 = pokemons[currentId].data.abilities[1] && pokemons[currentId].data.abilities[1].ability.name.charAt(0).toUpperCase() + pokemons[currentId].data.abilities[1].ability.name.slice(1)
  var HP = pokemons[currentId].data.stats[0].base_stat;
  var ATK = pokemons[currentId].data.stats[1].base_stat;
  var DEF = pokemons[currentId].data.stats[2].base_stat;
  var SATK = pokemons[currentId].data.stats[3].base_stat;
  var SDEF = pokemons[currentId].data.stats[4].base_stat;
  var SPD = pokemons[currentId].data.stats[5].base_stat;
  var color = typeColors[pokemons[currentId].data.types[0].type.name.toLowerCase()];

  return (

    <div className="pok-mon-details" style={{ backgroundColor: typeColors[pokemons[currentId].data.types[0].type.name.toLowerCase()]}}>
      <div className="title">
        <div className="pok-mon-name">{name}</div>
        <div className="element">{`#${String(number).padStart(3, '0')}`}</div>
      </div>
      <div className="image">
        <Button onClick={handlePrev}>
          <ChevronLeft className="icon-instance-node"/>
        </Button>
        <Button onClick={handleNext}>
        <ChevronRight className="icon-instance-node"/>
        </Button>
        <Silhouette className="silhouette-instance" image={image}/>
      </div>
      <div className="card">
        <div className="div">
          {renderTypeChips()}
        </div>
        <div className="text-wrapper" style={{color: color}}>About</div>
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
              <div className="ability-ability">
                {ability1}<br />
                {ability2}
              </div>
            </div>
            <div className="text-wrapper-3">Moves</div>
          </div>
        </div>
        <p className="text-description">{description}</p>
        <div className="text-wrapper-4" style={{color: color}}>Base Stats</div>
        <div className="base-stats">
          <div className="label">
            <div className="text-wrapper-5" style={{color: color}}>HP</div>
            <div className="text-wrapper-5" style={{color: color}}>ATK</div>
            <div className="text-wrapper-5" style={{color: color}}>DEF</div>
            <div className="text-wrapper-5" style={{color: color}}>SATK</div>
            <div className="text-wrapper-5" style={{color: color}}>SDEF</div>
            <div className="text-wrapper-5" style={{color: color}}>SPD</div>
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
              <div className="value" style={{width: `${parseInt(HP) / 255 * 100}%`}}>
                <div className="retangle" style={{ backgroundColor: color}}/>
              </div>
              <div className="background" style={{ backgroundColor: color}}/>
            </div>
            <div className="chart-2">
              <div className="value" style={{width: `${parseInt(ATK) / 255 * 100}%`}}>
                <div className="retangle" style={{ backgroundColor: color}}/>
              </div>
              <div className="background" style={{ backgroundColor: color}}/>
            </div>
            <div className="chart-2">
              <div className="value" style={{width: `${parseInt(DEF) / 255 * 100}%`}}>
                <div className="retangle" style={{ backgroundColor: color}}/>
              </div>
              <div className="background" style={{ backgroundColor: color}}/>
            </div>
            <div className="chart-2">
              <div className="value" style={{width: `${parseInt(SATK) / 255 * 100}%`}}>
                <div className="retangle" style={{ backgroundColor: color}}/>
              </div>
              <div className="background" style={{ backgroundColor: color}}/>
            </div>
            <div className="chart-2">
              <div className="value" style={{width: `${parseInt(SDEF) / 255 * 100}%`}}>
                <div className="retangle" style={{ backgroundColor: color}}/>
              </div>
              <div className="background" style={{ backgroundColor: color}}/>
            </div>
            <div className="chart-2">
              <div className="value" style={{width: `${parseInt(SPD) / 255 * 100}%`}}>
                <div className="retangle" style={{ backgroundColor: color}}/>
              </div>
              <div className="background" style={{ backgroundColor: color}}/>
            </div>
          </div>
        </div>
      </div>
      <Pokeball className="pokeball-instance" />
    </div>
  );
};

PokeMonDetails.propTypes = {
  pokemons: PropTypes.any,
  pokemonSpecies: PropTypes.any,
  id: PropTypes.number,
};
