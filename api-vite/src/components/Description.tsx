import Api from '../services/Api'
import { useEffect, useState, useContext } from 'react'
import { IdContext } from '../contexts/IdContext'

import '../styles/Description.css'

interface IPokemon {
  name: string;
  types: { slot: number; type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

interface Props {}

interface IIdContext {
  id: number;
}

function Description(props: Props) {
  const [pokemon, setPokemon] = useState<IPokemon>({ name: '', types: [], stats: [] });
  const { id } = useContext<IIdContext>(IdContext);

  const typeInput = 'range';

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await Api.get(`/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.log('Deu erro aqui, calma: ' + error);
      }
    };
    getPokemon();
  }, [id]);

  const { name, types, stats } = pokemon;

  const callPikachu = (e: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
    if (e.detail === 3) {
        if (name === "pikachu") {
            const pokedex = document.querySelector<HTMLDivElement>("#pokedex");
            if (pokedex) {
                pokedex.style.backgroundImage = "url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg')";
            } else {
                console.warn("Elemento #pokedex não encontrado");
            }
        }
    }
  };

  return (
    <div className="description">
      <div className="divImage">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          className="image"
          onClick={callPikachu}
          alt={name}
        />
      </div>
      <p className="name">{name}</p>
      <div className="divType">
        {types?.map((type) => (
          <span className="type" key={type.slot}>
            {type.type.name}
          </span>
        ))}
      </div>
      <div className="marginStatus">
        {stats?.map((statValue) => (
          <div className="divAlign" key={statValue.stat.name}>
            <span className="spanName">{statValue.stat.name}</span>
            <input className="status" type={typeInput} min="0" max="150" value={statValue.base_stat} disabled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Description;