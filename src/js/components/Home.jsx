import React from "react";
import Card from "./card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons'; 

const Home = ({ counter }) => {
  const digitos = counter.toString().padStart(6, "0").split("");

  return (
    <div className="DivContainer"> 
      <Card numero={<FontAwesomeIcon icon={faClock} />} />
      {digitos.map((digito, index) => (
      <Card key={index} numero={digito} />
      ))}
    </div>
  );
};

export default Home;

