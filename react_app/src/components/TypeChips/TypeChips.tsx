import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  type:
  | "fire"
  | "psychic"
  | "dragon"
  | "fighting"
  | "unknown"
  | "ice"
  | "poison"
  | "ghost"
  | "flying"
  | "fairy"
  | "normal"
  | "water"
  | "rock"
  | "bug"
  | "dark"
  | "electric"
  | "grass"
  | "ground"
  | "steel";
  className: any;
}

export const TypeChips = ({ type, className }: Props): JSX.Element => {
  return (
    <div className={`type-chips ${type} ${className}`}>
      <div className="type">
        {type === "unknown" && <>Type</>}
        {type === "normal" && <>Normal</>}
        {type === "fighting" && <>Fighting</>}
        {type === "flying" && <>Flying</>}
        {type === "ground" && <>Ground</>}
        {type === "poison" && <>Poison</>}
        {type === "rock" && <>Rock</>}
        {type === "bug" && <>Bug</>}
        {type === "ghost" && <>Ghost</>}
        {type === "steel" && <>Steel</>}
        {type === "fire" && <>Fire</>}
        {type === "water" && <>Water</>}
        {type === "grass" && <>Grass</>}
        {type === "electric" && <>Electric</>}
        {type === "psychic" && <>Psychic</>}
        {type === "ice" && <>Ice</>}
        {type === "dragon" && <>Dragon</>}
        {type === "dark" && <>Dark</>}
        {type === "fairy" && <>Fairy</>}
      </div>
    </div>
  );
};

TypeChips.propTypes = {
  type: PropTypes.oneOf([
    "fire",
    "psychic",
    "dragon",
    "fighting",
    "unknown",
    "ice",
    "poison",
    "ghost",
    "flying",
    "fairy",
    "normal",
    "water",
    "rock",
    "bug",
    "dark",
    "electric",
    "grass",
    "ground",
    "steel",
  ]),
};
