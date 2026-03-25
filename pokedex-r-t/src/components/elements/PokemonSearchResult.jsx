import { useContext } from "react"
import { PokedexContext } from "../../contexts/PokedexContext"
import { getPokemonInfo, getNameCleaned } from "../../utilities/get-data-utilities"

const PokemonSearchResult = ({pokemon}) =>{

    const pokemonResult = (pokemon) =>{
        const idCompleted = String(pokemon[0]).padStart(4,'0')
        const name = getNameCleaned(pokemon[1])
        return `#${idCompleted}: ${name}`
    }
    const {setPokemonInfo, setInPokedex,
        setShowShiny, pokemonInfoList,
        setPokemonInfoList, setPokedexScrollY} = useContext(PokedexContext)
    const viewPokemonInfo = async(id) => {
        
        let pokeInfo
        if(pokemonInfoList[id]){
            pokeInfo = pokemonInfoList[id]
        }else{
            pokeInfo = await getPokemonInfo(id)
            const pokeInfoObject = {...pokemonInfoList}
            pokeInfoObject[id] = pokeInfo
            setPokemonInfoList(pokeInfoObject)
        }
        const pokedexScroll = document.getElementById('pokedexScrollingList')
        setPokedexScrollY(pokedexScroll.scrollTop)
        setPokemonInfo(pokeInfo)
        setShowShiny(false)
        setInPokedex(false)
        const elementToScroll = document.getElementById('content_screen')
        elementToScroll.scrollTo(0,0)
    }

    return(
        <button className='flex hover:bg-search-lite' onClick={()=>viewPokemonInfo(pokemon[0])}>
            <span className="px-1 sm:px-2 py-1 sm:py-0.5 text-text-search text-sm sm:text-base">{pokemonResult(pokemon)}</span>
        </button>
    )
} 

export default PokemonSearchResult