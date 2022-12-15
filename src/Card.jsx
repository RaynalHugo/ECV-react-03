import { useState, useEffect } from 'react'
import styles from './Card.module.css'
//console.log(styles.card); récupérer le nom d'une class module

export function Card({ name, url }) {
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then(response => response.json())
      .then(result => setPokemon(result))
  }, [url])

  if(pokemon === undefined) {
    return (<div className={styles.card}>
    <h2>{name}</h2>
  </div>);
  }

  console.log(pokemon)

  const{types} = pokemon;
  const firstType = types[0].type.name;
  console.log(firstType);

  return (<div className={`${styles.card} ${styles[firstType]}`}>
    <h2>{pokemon.name}</h2>
    <img src={pokemon.sprites.front_default} alt="image de pikachu" />
  </div>);
}
