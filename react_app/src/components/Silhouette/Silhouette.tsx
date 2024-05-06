import React from "react";
//import "./style.css";

interface Props {
  className: any;
  image: string;
}

export const Silhouette: React.FC<Props> = ({ className, image }) => {
  const silhouetteStyle: React.CSSProperties = {
    backgroundImage: `url(${image})`,
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    height: '200px',
    position: 'relative',
    width: '200px',
  };

  return <div className={`silhouette ${className}`} style={silhouetteStyle}/>;
};
