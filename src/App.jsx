import {useState} from 'react'
import {useEffect} from 'react'
import './App.css'
import {Card} from './Card'

// Requête vers API + affichage composant Card
function App() {
    const [pokemons, setPokemons] = useState()
    const [inputName, setInputName] = useState('')
    console.log(pokemons)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=1000')
            .then(response => response.json())
            .then(result => setPokemons(result.results))
    }, [])

    return (
        <div className="App">
            <input type="text" value={inputName} onChange={(event) => {
                setInputName(event.target.value)
            }}/>
            {pokemons !== undefined ? <div
                className={"wrapper"}>{pokemons.filter((pokemon) => pokemon.name.startsWith(inputName.toLowerCase())).map((pokemon) => {
                return <Card name={pokemon.name} url={pokemon.url}/>
            })}</div> : 'loading...'}
        </div>
    )
}

export default App
