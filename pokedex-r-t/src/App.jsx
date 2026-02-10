import './App.css'
import SectionAllPokemonData from './components/principal-sections/SectionAllPokemonData';
import SectionPokedexList from './components/principal-sections/SectionPokedexList';



function App() {
  const charizardData = {
    id: "006",
    name: "Charizard",
    types: ["fire", "flying"],
    species: "Pokémon Llama",
    description: "Cuando lanza una descarga de fuego supercaliente, la roja llama de su cola brilla más intensamente.",
    height: "1.70",
    weight: "90.50",
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
    variants:[
      {
        name: "Charizard X",
        types: ["fire", "dragon"]
      },
      {
        name: "Charizard Y",
        types: ["fire", "flying"],
      },
      {
        name: "Charizard Gmax",
        types: ["fire", "flying"]
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
  const pokedexData =
    [
      {id: "0001", name: "Charmander", types: ["grass","poison"]},
      {id: "0002", name: "Charmeleon", types: ["grass","poison"]},
      {id: "0003", name: "Charizard", types: ["grass","poison"]},
      {id: "0004", name: "Charizard X", types: ["water"]},
      {id: "0005", name: "Charizard Y", types: ["water"]},
      {id: "0006", name: "Charizard Gmax", types: ["water"]},
      {id: "0007", name: "Charmander", types: ["fire"]},
      {id: "0008", name: "Charmeleon", types: ["fire"]},
      {id: "0009", name: "Charizard", types: ["fire", "flying"]},
      {id: "0010", name: "Charmander", types: ["fire", "dragon"]},
      {id: "0011", name: "Charmeleon", types: ["fire", "fairy"]},
      {id: "0012", name: "Charizard", types: ["fire", "normal"]},
      {id: "0013", name: "Charmander", types: ["fire", "dragon"]},
      {id: "0014", name: "Charmeleon", types: ["fire", "fairy"]},
      {id: "0015", name: "Charizard", types: ["fire", "normal"]},
      {id: "0016", name: "Charmander", types: ["fire", "dragon"]},
      {id: "0017", name: "Charmeleon", types: ["fire", "fairy"]},
      {id: "0018", name: "Charizard", types: ["fire", "normal"]},
    ]
  const inPokedex = true
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="flex justify-center min-w-dvw min-h-dvh py-2 bg-violet-400">
        <div className="flex-col min-w-screen sm:min-w-md max-w-11/12 sm:max-w-2xl max-h-screen overflow-y-auto">
            {
              inPokedex? 
              <SectionPokedexList pokeListData={pokedexData}/> :
              <SectionAllPokemonData pokeData={charizardData}/>
            }
        </div>
      </div>
    </>
  )
}

export default App
