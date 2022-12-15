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

  return (
    <div className="App">
      <pre>{JSON.stringify(selectedPokemon, null, 2)}</pre>
    </div>
  )
}

export default App
