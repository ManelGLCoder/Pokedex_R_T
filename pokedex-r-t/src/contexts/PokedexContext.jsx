import { createContext, useState } from 'react';

export const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
    const [idList, setIdList] = useState([])
    const [pokedexList, setPokedexList] = useState([])
    const [loadingPokemons, setLoadingPokemons] = useState(false)
    const [hideShowMorePokemons, setHideShowMorePokemons] = useState(false)
    const [movesNames, setMovesNames] = useState([])
    const [movesList, setMovesList] = useState([])
    const [hideShowMoreMoves,setHideShowMoreMoves] = useState(false)
    const [movesInfoList, setMovesInfoList] = useState({})
    const [loadingMoves, setLoadingMoves] = useState(false)
    const [inPokedex, setInPokedex] = useState(true)
    const [pokemonInfo, setPokemonInfo] = useState({})
    const [pokemonInfoList, setPokemonInfoList] = useState({})
    const [showShiny, setShowShiny] = useState(false)
    const [descriptionFocused, setDescriptionFocused] = useState(true)
    const [abilitiesFocused, setAbilitiesFocused] = useState(true)
    const [lineEvolutionFocused, setLineEvolutionFocused] = useState(true)
    const [pokedexScrollY, setPokedexScrollY] = useState(0)


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
