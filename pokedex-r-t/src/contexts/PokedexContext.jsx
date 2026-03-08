import { createContext, useState } from 'react';
import { LIMIT_POKEMON_LIST_FETCH_SAME_TIME, MAX_NUMBER_OF_POKEMON } from '../dto/constants.js';
import { getSimplePokemonInfo} from '../utilities/get-data-utilities';

export const PokedexContext = createContext();

let lastId = 0

export const getInitialList = async(pokemonNamesList) =>{
    return await getPokemonList(0, pokemonNamesList)
}

const getPokemonList = (startId, pokemonNamesList) =>{
let listPromise = []
    const maxIndex = startId + LIMIT_POKEMON_LIST_FETCH_SAME_TIME -1
    for(let i = startId; i <= maxIndex; i++){
        if(i >= MAX_NUMBER_OF_POKEMON){
            break
        }
        const pokemonPromise = getSimplePokemonInfo(pokemonNamesList[i])
        listPromise.push(pokemonPromise)
        lastId = i
    }
    return Promise.all(listPromise)
}



export const getNextPokemons = async(pokemonNamesList)=>{
    return await getPokemonList(lastId + 1, pokemonNamesList)
}

export const PokedexProvider = ({ children }) => {
    const [idList, setIdList] = useState([])
    const [pokedexList, setPokedexList] = useState([])
    const [inPokedex, setInPokedex] = useState(true)
    const [pokemonInfo, setPokemonInfo] = useState({})
    const [showShiny, setShowShiny] = useState(false)
    const [descriptionFocused, setDescriptionFocused] = useState(true)
    const [abilitiesFocused, setAbilitiesFocused] = useState(true)
    const [lineEvolutionFocused, setLineEvolutionFocused] = useState(true)
    //TODO: Mirar si lo usaré o no
    const [currPokedexList, setCurrPokedexList] = useState([])


    return (
        <PokedexContext.Provider value={{
            idList,setIdList,
            pokedexList, setPokedexList, 
            inPokedex, setInPokedex,
            pokemonInfo, setPokemonInfo,
            showShiny, setShowShiny,
            descriptionFocused, setDescriptionFocused,
            abilitiesFocused, setAbilitiesFocused,
            lineEvolutionFocused, setLineEvolutionFocused,
            currPokedexList, setCurrPokedexList 
        }}>
            {children}
        </PokedexContext.Provider>
    );
};
