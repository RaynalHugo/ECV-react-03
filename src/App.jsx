import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Card } from './Card'

// Requête vers API + affichage composant Card
function App() {
  const [selectedPokemon, setSelectedPokemon] = useState()

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
      .then(response => response.json())
      .then(result => setSelectedPokemon(result))
  }, [])
  console.log(selectedPokemon?.types)
  return (
    <div className="App">
      {selectedPokemon != undefined ?
        <Card pokemon={selectedPokemon} /> : "Loading..."
      }
    </div>
  )
}

export default App
