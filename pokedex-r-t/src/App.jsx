import './App.css'
import PokemonOrangeCard from './components/PokemonOrangeCard';
import PokemonVioletCard from './components/PokemonVioletCard';

function App() {
  const charizardData = {
    id: "006",
    name: "Charizard",
    types: ["fire", "flying"],
    species: "Pokémon Llama",
    description: "Cuando lanza una descarga de fuego supercaliente, la roja llama de su cola brilla más intensamente.",
    habilities: ["Mar Llamas", "Poder Solar"]
  }
  const shiny = false
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <!--Fondo liza claro, contiene LOS DATOS DE UN POKEMON --> */}
      <div className="flex min-w-dvw min-h-dvh py-2 justify-center bg-violet-400">
        {/* <!-- Contenido POKEDEX POKEMON --> */}
        <div className="flex-col min-w-11/12 sm:min-w-md max-w-11/12 max-h-dvh">
          <PokemonOrangeCard pokeData={charizardData} showShiny={shiny}/>
          <PokemonVioletCard pokeData={charizardData} showShiny={shiny}/>
        </div>
      </div>
    </>
  )
}

export default App
