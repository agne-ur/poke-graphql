import React from "react";

export default function Pokemon({pokemon}) {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name}></img>
    </div>
  );
}
