import styles from './Card.module.css'
//console.log(styles.card); récupérer le nom d'une class module

export function Card({ pokemon }) {

  return (<div className={styles.card}>
    <h2>{pokemon.name}</h2>
    <img src={pokemon.sprites.front_default} alt="image de pikachu" />
  </div>);
}
