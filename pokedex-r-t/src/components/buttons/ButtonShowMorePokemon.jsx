import { useContext } from 'react';
import { PokedexContext, getNextPokemons } from '../../contexts/PokedexContext.jsx';

const ButtonShowMorePokemon = () =>{
    const {pokedexList, setPokedexList, idList} = useContext(PokedexContext)
    const showMore = async() =>{
        const nextPokemons = await getNextPokemons(idList)
        setPokedexList([...pokedexList, ...nextPokemons])
    }
    return(
        <button 
            className='snap-center flex justify-center gap-1 px-1 py-0.5 rounded-xl
            hover:bg-amber-200 bg-violet-400 font-bold'
            onClick={showMore}
            >
                <img className="size-10"
                    src={'src/assets/more.svg'}
                    alt={`More Image`} 
                />
                <span className='justify-center self-center px-2 py-1 text-center'>
                    Mostrar Más
                </span>
        </button>
    )
}

export default ButtonShowMorePokemon