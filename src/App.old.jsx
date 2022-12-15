import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Card } from './Card'

// Requête vers API + affichage composant Card
function App() {
  const [selectedPokemon, setSelectedPokemon] = useState()
  const [inputName, setInputName] = useState('')
  console.log(inputName)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputName}/`)
      .then(response => response.json())
      .then(result => setSelectedPokemon(result))
  }, [inputName])
  return (
    <div className="App">
      <input type="text" value={inputName} onChange={(event) => {
        setInputName(event.target.value)
      }} />
      {selectedPokemon != undefined ?
        <Card pokemon={selectedPokemon} /> : "Loading..."
      }
    </div>
  )
}

export default App
