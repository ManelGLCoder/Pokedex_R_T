import './App.css'
import PokemonOrangeCard from './components/PokemonOrangeCard';

function App() {
  const charizardData = {
    id: "006",
    name: "Charizard",
    types: ["fire", "flying"]
  }
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <!--Fondo liza claro, contiene LOS DATOS DE UN POKEMON --> */}
      <div className="flex min-w-dvw min-h-dvh py-2 justify-center bg-violet-400">
        {/* <!-- Contenido POKEDEX POKEMON --> */}
        <div className="flex-col min-w-11/12 sm:min-w-md max-w-dvw max-h-dvh">
          <PokemonOrangeCard pokeData={charizardData} showShiny={false}/>
        </div>
      </div>
    </>
  )
}

export default App
