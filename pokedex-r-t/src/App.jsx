import './App.css'
import SectionAllPokemonData from './components/principal-sections/SectionAllPokemonData'
import SectionPokedexList from './components/principal-sections/SectionPokedexList'

import { getAllTypesIn, getPokemonInfo, getSimplePokemonInfo, types, getListOfPokemon} from './utilities/get-data-utilities';
import { LIMIT_POKEMON_LIST_FETCH_SAME_TIME, MAX_NUMBER_OF_POKEMON } from './dto/constants.js';


import { useContext, useEffect } from 'react';
import { PokedexContext } from './contexts/PokedexContext.jsx';
//!To test for now

  //TODO: [DONE] hacer función para obtener los datos para la pokedex
  //TODO: [DONE] primero que muestre X pokemon en la pokedex

  let lastId = 0
  const getPokemonList = (startId, pokemonNamesList) =>{
    let listPromise = []
    const maxIndex = startId + LIMIT_POKEMON_LIST_FETCH_SAME_TIME -1
    for(let i = startId -1; i < maxIndex; i++){
      if(i >= MAX_NUMBER_OF_POKEMON){
        break
      }
      const pokemonPromise = getSimplePokemonInfo(pokemonNamesList[i])
      listPromise.push(pokemonPromise)
      lastId = i
    }
    return Promise.all(listPromise)
  }

  //TODO: segundo que vaya añadiendo en base vayas bajando
  //TODO: tercero que al seleccionar un pokemon se muestren sus datos
  //TODO: cuarto que se guarde en cache y no haga llamadas si ya se tiene
  //TODO: solucionar pokemons sin sprites

function App() {
  const {pokedexList, setPokedexList} = useContext(PokedexContext)
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
    const inPokedex = true
    useEffect(()=>{
      const initPokedexList = async () =>{
        const POKEMON_IDS_LIST = await getListOfPokemon()
        return await getPokemonList(1000, POKEMON_IDS_LIST)
      }
          initPokedexList().then((result)=>{
          setPokedexList(result)
          })
      return ()=>{}
    },[])

    return (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="flex justify-center min-w-dvw min-h-dvh py-2 bg-violet-400">
            <div className="flex-col min-w-screen sm:min-w-md max-w-11/12 sm:max-w-2xl max-h-screen overflow-y-auto">
                {
                    inPokedex? 
                    <SectionPokedexList/> :
                    <SectionAllPokemonData pokeData={charizardData}/>
                }
            </div>
        </div>
    </>
    )
}

export default App
