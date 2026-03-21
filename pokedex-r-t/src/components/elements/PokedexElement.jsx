import '../../App.css'
import TypesOfThePokemon from './TypesOfThePokemon'
import { PokedexContext } from '../../contexts/PokedexContext'
import { useContext } from 'react'
import { getPokemonInfo } from '../../utilities/get-data-utilities'
import { HOVER_BUTTONS_COLOR } from '../../utilities/buttons-utilities'

const PokedexElement = ({pokeElementData}) =>{
    const {setPokemonInfo, setInPokedex, setShowShiny, 
        pokemonInfoList, setPokemonInfoList, setPokedexScrollY} = useContext(PokedexContext)
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
    }

    return(
        <button 
        className={`grid grid-cols-5 px-1 py-0.5 rounded-xl sm:text-xl font-bold bg-linear-65 bg-violet-800 ${HOVER_BUTTONS_COLOR}`}
        onClick={()=>viewPokemonInfo(pokeElementData.id)}>
            <img className="col-span-1 self-center justify-self-center mx-1 size-19"
                src={pokeElementData.sprite}
                alt={`${pokeElementData.name} Image`} 
            />
            <span className='col-span-1 justify-center self-center px-2 py-1 text-center sm:flex-1'>
                {pokeElementData.idCompleted}
            </span>
            <span className="col-span-2 self-center px-2 py-1 text-center">{pokeElementData.name}</span>
            <TypesOfThePokemon className="col-span-1" types={pokeElementData.types} onlyIcon={true}/>
        </button>
    )
}

export default PokedexElement