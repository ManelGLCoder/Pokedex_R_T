import { useContext } from 'react';
import { PokedexContext, getNextPokemons } from '../../contexts/PokedexContext.jsx';
import { BUTTONS_SHOW_MORE_CLASSNAME, HOVER_BUTTONS_COLOR} from '../../utilities/buttons-utilities.js';
import Loading from '../Loading.jsx';

const ButtonShowMorePokemon = () =>{
    const {pokedexList, setPokedexList, idList, loadingPokemons, setLoadingPokemons} = useContext(PokedexContext)
    const showMore = async() =>{
        setLoadingPokemons(true)
        const nextPokemons = await getNextPokemons(idList)
        setPokedexList([...pokedexList, ...nextPokemons])
        setLoadingPokemons(false)
    }
    return(
        loadingPokemons ? 
            <Loading/> :
            <button 
                className={`${BUTTONS_SHOW_MORE_CLASSNAME} ${HOVER_BUTTONS_COLOR}`}
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