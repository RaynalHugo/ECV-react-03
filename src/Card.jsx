import styles from './Card.module.css'
//console.log(styles.card); récupérer le nom d'une class module

export function Card({ pokemon }) {
  const{types} = pokemon;
  const firstType = types[0].type.name;
  console.log(firstType);

  return (<div className={`${styles.card} ${styles[firstType]}`}>
    <h2>{pokemon.name}</h2>
    <img src={pokemon.sprites.front_default} alt="image de pikachu" />
  </div>);
}
