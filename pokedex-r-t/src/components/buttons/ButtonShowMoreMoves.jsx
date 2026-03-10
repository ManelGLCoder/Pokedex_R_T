import { useContext } from 'react';
import { PokedexContext, getNextMovesInfo } from '../../contexts/PokedexContext.jsx';
import { BUTTONS_SHOW_MORE_CLASSNAME, HOVER_BUTTONS_COLOR } from '../../utilities/buttons-utilities.js';
import Loading from '../Loading.jsx';

const ButtonShowMoreMoves = () =>{
    const {movesList, setMovesList, movesNames, loadingMoves, setLoadingMoves} = useContext(PokedexContext)
    const showMore = async() =>{
        setLoadingMoves(true)
        const nextMoves = await getNextMovesInfo(movesNames)
        setMovesList([...movesList, ...nextMoves])
        setLoadingMoves(false)
    }
    return(
        loadingMoves ? 
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

export default ButtonShowMoreMoves