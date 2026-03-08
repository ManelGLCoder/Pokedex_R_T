import { createContext, useState } from 'react';
import { LIMIT_POKEMON_LIST_FETCH_SAME_TIME, MAX_NUMBER_OF_POKEMON, LIMIT_MOVES_FETCH_SAME_TIME } from '../dto/constants.js';
import { getSimplePokemonInfo, getMovesInfo} from '../utilities/get-data-utilities';
import { fetchAllMovesInfo } from '../utilities/fetch-utilities.js';

export const PokedexContext = createContext();

let lastPokemonId = 0

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
        lastPokemonId = i
    }
    return Promise.all(listPromise)
}



export const getNextPokemons = async(pokemonNamesList)=>{
    return await getPokemonList(lastPokemonId + 1, pokemonNamesList)
}

let lastMoveId = 0

export const getInitialMovesInfo = async(movesNames) =>{
    const movesList = getMovesNamesLimited(0, movesNames)
    const movesData = await fetchAllMovesInfo(movesList)
    return getMovesInfo(movesData)
}

const getMovesNamesLimited = (startIndex, movesName) => {
    let moves = []
    const maxIndex = Math.min(startIndex + LIMIT_MOVES_FETCH_SAME_TIME, movesName.length-1)
    for(let i = startIndex; i <= maxIndex; i ++){
        if(i >= movesName.length){
            break
        }
        moves.push(movesName[i])
        lastMoveId = i
    }
    return moves
}

export const getNextMovesInfo = async(movesNames) =>{
    const movesList = getMovesNamesLimited(lastMoveId + 1, movesNames)
    const movesData = await fetchAllMovesInfo(movesList)
    return getMovesInfo(movesData)
}

export const PokedexProvider = ({ children }) => {
    const [idList, setIdList] = useState([])
    const [pokedexList, setPokedexList] = useState([])
    const [movesNames, setMovesNames] = useState([])
    const [movesList, setMovesList] = useState([])
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
            movesNames, setMovesNames,
            movesList, setMovesList,
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
