import React from "react";
import {useQuery} from "@apollo/react-hooks";

export default function PokemonsContainer() {

    const {data: { pokemons = []} = {}} = useQuery(GET_POKEMONS, {
        variables: { first: 9 },
    });

  return (
    <div className="container">
      <p>I am pokemon container</p>
    </div>
  );
}
