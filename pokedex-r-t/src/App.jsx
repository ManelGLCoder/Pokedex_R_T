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
    habilities: ["Mar Llamas", "Poder Solar"],
    evolutions:[
      {
        name: "Charmander",
        types: ["fire"],
        lvEvolution: 16
      },
      {
        name: "Charmeleon",
        types: ["fire"],
        lvEvolution: 36
      },
      {
        name: "Charizard",
        types: ["fire", "flying"],
        lvEvolution: null
      },
    ],
    moves:{
      lvUp:[
        {lv: 1, name: "Dragon Claw", type: "dragon", category: "physical", power: 80, accuaracy: 100, pp:15},
        {lv: 1, name: "Growl", type: "normal", category: "status", power: null, accuaracy: 100, pp:40},
        {lv: 1, name: "Tackle", type: "normal", category: "physical", power: 40, accuaracy: 100, pp:35},
        {lv: 4, name: "Ember", type: "fire", category: "special", power: 40, accuaracy: 100, pp:25},
        {lv: 8, name: "Smokescreen", type: "normal", category: "status", power: null, accuaracy: 100, pp:20},
        {lv: 12, name: "Dragon Breath", type: "dragon", category: "special", power: 60, accuaracy: 100, pp:20},
        {lv: 17, name: "Fire Fang", type: "fire", category: "physical", power: 65, accuaracy: 95, pp:15},
      ],
      tmHm:[
        {id: "02", name: "Dragon Claw", type: "dragon", category: "physical", power: 80, accuaracy: 100, pp:15},
        {id: "05", name: "Roar", type: "normal", category: "status", power: null, accuaracy: null, pp:40},
        {id: "10", name: "Brick Break", type: "fighting", category: "physical", power: 75, accuaracy: 100, pp:35},
        {id: "12", name: "Rock Slide", type: "rock", category: "physical", power: 75, accuaracy: 90, pp:25},
        {id: "14", name: "Fire Fang", type: "fire", category: "physical", power: 65, accuaracy: 95, pp:20},
        {id: "17", name: "Protect", type: "normal", category: "status", power: null, accuaracy: null, pp:15},
        {id: "23", name: "Thunder Punch", type: "electric", category: "physical", power: 75, accuaracy: 100, pp:20},
      ],
      egg:[
        {name: "Fire Fang", type: "fire", category: "physical", power: 65, accuaracy: 95, pp:15},
        {name: "Protect", type: "normal", category: "status", power: null, accuaracy: null, pp:40},
        {name: "Thunder Punch", type: "electric", category: "physical", power: 75, accuaracy: 100, pp:35},
      ],
      tutor:[
        {name: "Dragon Claw", type: "dragon", category: "physical", power: 80, accuaracy: 100, pp:15},
        {name: "Thunder Punch", type: "electric", category: "physical", power: 75, accuaracy: 100, pp:20},
      ]
    },
    stats:{
      ps: 78,
      attack: 84,
      defense: 78,
      speed: 100,
      specialAttack: 109,
      specialDefense: 85,
      happiness:50,
      catchRatio: 45,
      statMax:255,
      totalSum:534,
      totalSumMax: 1530
    },
    strengths: [
      {type:"ground", multiplier: "0"},
      {type:"bug", multiplier: "1/4"},
      {type:"grass", multiplier: "1/4"},
      {type:"steel", multiplier: "1/2"},
      {type:"fire", multiplier: "1/2"},
      {type:"fairy", multiplier: "1/2"},
      {type:"fighting", multiplier: "1/2"},
    ],
    weakness: [
      {type:"rock", multiplier: "4"},
      {type:"water", multiplier: "2"},
      {type:"electric", multiplier: "2"}
    ]
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
