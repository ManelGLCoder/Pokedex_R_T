import { createContext, useState, useEffect } from 'react';

const CACHE_PREFIX = 'pokemon_'

const loadCache = (key) => {
    try {
        const raw = localStorage.getItem(CACHE_PREFIX + key)
        return raw ? JSON.parse(raw) : null
    } catch {
        return null
    }
}

const saveCache = (key, data) => {
    try {
        localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(data))
    } catch {
        // localStorage lleno o datos no serializables — se ignora
    }
}

export const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
    const [idList, setIdList] = useState(() => loadCache('idList') || [])
    const [pokedexList, setPokedexList] = useState(() => loadCache('pokedexList') || [])
    const [loadingPokemons, setLoadingPokemons] = useState(false)
    const [hideShowMorePokemons, setHideShowMorePokemons] = useState(false)
    const [movesNames, setMovesNames] = useState([])
    const [movesList, setMovesList] = useState([])
    const [hideShowMoreMoves,setHideShowMoreMoves] = useState(false)
    const [movesInfoList, setMovesInfoList] = useState(() => loadCache('movesInfoList') || {})
    const [loadingMoves, setLoadingMoves] = useState(false)
    const [inPokedex, setInPokedex] = useState(true)
    const [pokemonInfo, setPokemonInfo] = useState({})
    const [pokemonInfoList, setPokemonInfoList] = useState(() => loadCache('pokemonInfoList') || {})
    const [showShiny, setShowShiny] = useState(false)
    const [descriptionFocused, setDescriptionFocused] = useState(true)
    const [abilitiesFocused, setAbilitiesFocused] = useState(true)
    const [lineEvolutionFocused, setLineEvolutionFocused] = useState(true)
    const [pokedexScrollY, setPokedexScrollY] = useState(0)

    useEffect(() => { saveCache('idList', idList) }, [idList])
    useEffect(() => { saveCache('pokedexList', pokedexList) }, [pokedexList])
    useEffect(() => { saveCache('pokemonInfoList', pokemonInfoList) }, [pokemonInfoList])
    useEffect(() => { saveCache('movesInfoList', movesInfoList) }, [movesInfoList])


    return (
        <PokedexContext.Provider value={{
            idList,setIdList,
            pokedexList, setPokedexList, 
            loadingPokemons, setLoadingPokemons,
            hideShowMorePokemons, setHideShowMorePokemons,
            movesNames, setMovesNames,
            movesList, setMovesList,
            hideShowMoreMoves, setHideShowMoreMoves,
            movesInfoList, setMovesInfoList,
            loadingMoves, setLoadingMoves,
            inPokedex, setInPokedex,
            pokemonInfo, setPokemonInfo,
            pokemonInfoList, setPokemonInfoList,
            showShiny, setShowShiny,
            descriptionFocused, setDescriptionFocused,
            abilitiesFocused, setAbilitiesFocused,
            lineEvolutionFocused, setLineEvolutionFocused,
            pokedexScrollY, setPokedexScrollY
        }}>
            {children}
        </PokedexContext.Provider>
    );
};
