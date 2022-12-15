import { useState, useEffect } from 'react'
import styles from './Card.module.css'

const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};

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

  const{types} = pokemon;
  const firstType = types[0].type.name;
  const secondType = types[1]?.type?.name;
  const background = secondType != undefined ? `linear-gradient(${typeColor[firstType]}, ${typeColor[secondType]})` : typeColor[firstType]

  return (<div className={styles.card} style={{background}}>
    <h2>{pokemon.name}</h2>
    <img src={pokemon.sprites.other.dream_world.front_default} alt="image de pikachu" />
    <span>Health: {pokemon.stats[0].base_stat}</span>
    <span>Attack: {pokemon.stats[1].base_stat}</span>
    <span>Defense: {pokemon.stats[2].base_stat}</span>
    <span>Speed: {pokemon.stats[5].base_stat}</span>
  </div>);
}
