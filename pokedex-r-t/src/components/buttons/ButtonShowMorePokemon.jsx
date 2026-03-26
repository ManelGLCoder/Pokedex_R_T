import { useContext, useEffect} from 'react';
import { PokedexContext} from '../../contexts/PokedexContext.jsx';
import { BUTTONS_SHOW_MORE_CLASSNAME} from '../../utilities/buttons-utilities.js';
import { getNextPokemons } from '../../utilities/get-data-utilities.js';
import Loading from '../Loading.jsx';

const ButtonShowMorePokemon = () =>{
    const {pokedexList, setPokedexList, idList,
        loadingPokemons, setLoadingPokemons,
        hideShowMorePokemons, setHideShowMorePokemons} = useContext(PokedexContext)
    const showMore = async() =>{
        setLoadingPokemons(true)
        const nextPokemons = await getNextPokemons(Object.keys(idList))
        setPokedexList([...pokedexList, ...nextPokemons])
        setLoadingPokemons(false)
    }

    useEffect(()=>{
        const lenghtIdList = Object.entries(idList).length
        const lenghtPokedexList = pokedexList.length
        setHideShowMorePokemons(lenghtIdList === lenghtPokedexList)
    },[pokedexList])

    return(
        hideShowMorePokemons? null : loadingPokemons ? 
            <Loading/> :
            <button 
                className={`${BUTTONS_SHOW_MORE_CLASSNAME} bg-secondary-middle hover:bg-pokemon-bg`}
                onClick={showMore}
                >
                <svg className="size-10 fill-search-lite" alt={`More Image`} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fillRule="evenodd" d="M3.293 7.293a1 1 0 0 1 1.414 0L12 14.586l7.293-7.293a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414" clipRule="evenodd"/></svg>
                    <span className='justify-center self-center px-2 py-1 text-search-lite text-center'>
                        Mostrar Más
                    </span>
            </button>
    )
}

export default ButtonShowMorePokemon