import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState()

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
        .then(response => response.json())
        .then(result => setSelectedPokemon(result))
  },[])
  console.log(selectedPokemon?.sprites)
  return (
    <div className="App">
      {selectedPokemon != undefined ?
          <div className="card">
            <h2>{selectedPokemon.name}</h2>
            <img src={selectedPokemon.sprites.front_default} alt="image de pikachu"/>
          </div> :"Loading..."
      }
      {/*<pre>{JSON.stringify(selectedPokemon, null, 2)}</pre>*/}
    </div>
  )
}

export default App
