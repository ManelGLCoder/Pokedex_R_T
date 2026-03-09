import './App.css'
import SectionAllPokemonData from './components/principal-sections/SectionAllPokemonData'
import SectionPokedexList from './components/principal-sections/SectionPokedexList'

import { getListOfPokemon} from './utilities/get-data-utilities';
import { useContext, useEffect } from 'react';
import { PokedexContext, getInitialList } from './contexts/PokedexContext.jsx';

//!To test for now

  //TODO: [DONE] hacer función para obtener los datos para la pokedex
  //TODO: [DONE] primero que muestre X pokemon en la pokedex
  //TODO: [DONE/ALTERNATIVE]segundo que vaya añadiendo en base vayas bajando
  //TODO: [DONE]tercero que al seleccionar un pokemon se muestren sus datos
  //TODO: [DONE]Crear botón para volver a la pokedex
  //TODO: Las evoluciones sean botones a ese pokemon
  //TODO: No permitir pulsar botón de mostrar más si no ha acabado de cargar los pokemon
  //TODO: cuarto que se guarde en cache y no haga llamadas si ya se tiene
  //TODO: Revisar llamadas de re renderizar
  //TODO: solucionar pokemons sin sprites

function App() {
  const {setPokedexList, setIdList, inPokedex} = useContext(PokedexContext)
    /*const charizardData = {
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
    evolutions2:{ 
        pokemonInfo:{
            id: "#0004",
            name: "Charmander",
            types: ["fire"]
        },
        evolutions: [
            {
                pokemonInfo:{
                    id: "#0005",
                    name: "Charmeleon",
                    types: ["fire"]
                },
                evolutions: [
                    {
                        pokemonInfo: {
                            id: "#0006",
                            name: "Chaizard",
                            types: ["fire", "flying"]
                        },
                        evolutions: null
                    }
                ]
            }
        ]
    },
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
    moves:[
        {name: "Megapuño",accuracy: 85,power: 80,pp: 20,damageClass: "physical",type: "Normal"},
        {name: "Puño Fuego",accuracy: 100,power: 75,pp: 15,damageClass: "physical",type: "Fuego"},
        {name: "Puño Trueno",accuracy: 100,power: 75,pp: 15,damageClass: "physical",type: "Eléctrico"},
        {name: "Arañazo",accuracy: 100,power: 40,pp: 35,damageClass: "physical",type: "Normal"},
        {name: "Danza Espada",accuracy: null,power: null, pp: 20, damageClass: "status",type: "Normal"},
    ],
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
    */

    useEffect(()=>{
      const initPokedexList = async () =>{
        const POKEMON_IDS_LIST = await getListOfPokemon()
        setIdList(POKEMON_IDS_LIST)
        return await getInitialList(POKEMON_IDS_LIST)
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
                    <SectionAllPokemonData/>
                }
            </div>
        </div>
    </>
    )
}

export default App
