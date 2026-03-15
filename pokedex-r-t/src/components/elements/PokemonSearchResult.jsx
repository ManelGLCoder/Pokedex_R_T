import { useContext } from "react"
import { PokedexContext } from "../../contexts/PokedexContext"
import { getPokemonInfo } from "../../utilities/get-data-utilities"

const PokemonSearchResult = ({pokemon}) =>{

    const pokemonResult = (pokemon) =>{
        const idCompleted = String(pokemon[0]).padStart(4,'0')
        const nameWithSpace = pokemon[1].replaceAll('-',' ')
        const words = nameWithSpace.split(' ')
        const nameCapitalized = words.map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')
        return `#${idCompleted}: ${nameCapitalized}`
    }
    const {setPokemonInfo, setInPokedex, setShowShiny, pokemonInfoList, setPokemonInfoList} = useContext(PokedexContext)
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
        setPokemonInfo(pokeInfo)
        setShowShiny(false)
        setInPokedex(false)
        const elementToScroll = document.getElementById('content_screen')
        elementToScroll.scrollTo(0,0)
    }

    return(
        <button className='flex hover:bg-orange-300h' onClick={()=>viewPokemonInfo(pokemon[0])}>
            <span className="px-1 sm:px-2 py-1 sm:py-0.5 text-gray-500 text-sm sm:text-base">{pokemonResult(pokemon)}</span>
        </button>
    )
} 

export default PokemonSearchResult