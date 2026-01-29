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
      <div className="flex min-w-dvw min-h-dvh justify-center p-1 dark:bg-violet-400">
        {/* <!-- Contenido POKEDEX POKEMON --> */}
        <div className="box-border flex max-w-dvw flex-col border-x-8 border-violet-400 p-2 lg:max-w-fit">
          <PokemonOrangeCard pokeData={charizardData} showShiny={false}/>
        </div>
      </div>
    </>
  )
}

export default App
