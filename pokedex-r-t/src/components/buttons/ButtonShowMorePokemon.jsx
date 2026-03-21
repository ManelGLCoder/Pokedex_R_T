import { useContext, useEffect} from 'react';
import { PokedexContext} from '../../contexts/PokedexContext.jsx';
import { BUTTONS_SHOW_MORE_CLASSNAME, HOVER_BUTTONS_COLOR} from '../../utilities/buttons-utilities.js';
import { getNextPokemons } from '../../utilities/get-data-utilities.js';
import Loading from '../Loading.jsx';
import moreIcon from '../../assets/more.svg'

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
                className={`${BUTTONS_SHOW_MORE_CLASSNAME} ${HOVER_BUTTONS_COLOR}`}
                onClick={showMore}
                >
                    <img className="size-10"
                        src={moreIcon}
                        alt={`More Image`} 
                    />
                    <span className='justify-center self-center px-2 py-1 text-center'>
                        Mostrar Más
                    </span>
            </button>
    )
}

export default ButtonShowMorePokemon