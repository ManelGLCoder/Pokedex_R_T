import { useContext } from 'react';
import { PokedexContext, getNextPokemons } from '../../contexts/PokedexContext.jsx';
import { BUTTONS_SHOW_MORE_CLASSNAME } from '../../utilities/buttons-utilities.js';

const ButtonShowMorePokemon = () =>{
    const {pokedexList, setPokedexList, idList} = useContext(PokedexContext)
    const showMore = async() =>{
        const nextPokemons = await getNextPokemons(idList)
        setPokedexList([...pokedexList, ...nextPokemons])
    }
    return(
        <button 
            className={BUTTONS_SHOW_MORE_CLASSNAME}
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