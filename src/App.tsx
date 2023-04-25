import React, { useState, useEffect } from "react";
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}

interface GetPokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<GetPokemons["results"]>();

  const getPokemons = async () => {
    const response = await api.get<GetPokemons>("pokemon");
    setPokemons(response.data.results);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  if (!pokemons) return <h2>Carregando...</h2>;

  return (
    <div>
      {pokemons.map((pokemon) => (
        <>
          <p>Pokemon: {pokemon.name}</p>
        </>
      ))}
    </div>
  );
};
