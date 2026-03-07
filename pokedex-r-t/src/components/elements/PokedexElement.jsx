import '../../App.css'
import TypesOfThePokemon from './TypesOfThePokemon'
import { PokedexContext } from '../../contexts/PokedexContext'
import { useContext } from 'react'
import { getPokemonInfo } from '../../utilities/get-data-utilities'

const PokedexElement = ({pokeElementData}) =>{
    const {setPokemonInfo, setInPokedex, setShowShiny} = useContext(PokedexContext)
    const viewPokemonInfo = async(id) => {
            const pokeInfo = await getPokemonInfo(id)
            setPokemonInfo(pokeInfo)
            setShowShiny(false)
            setInPokedex(false)
    }
    return(
        <button 
        className='snap-center grid grid-cols-5 px-1 py-0.5 rounded-xl bg-linear-65 from-violet-800 to-pink-500 font-bold'
        onClick={()=>viewPokemonInfo(pokeElementData.id)}>
            <img className="col-span-1 self-center justify-self-center mx-1 size-10"
                src={pokeElementData.sprite}
                alt={`${pokeElementData.name} Image`} 
            />
            <span className='col-span-1 justify-center self-center px-2 py-1 text-center sm:flex-1'>
                {pokeElementData.idCompleted}
            </span>
            <span className="col-span-2 self-center px-2 py-1 text-center">{pokeElementData.name}</span>
            <TypesOfThePokemon className="col-span-1" types={pokeElementData.types} onlyIcon={true} />
        </button>
    )
}

export default PokedexElement