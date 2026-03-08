import { useContext } from 'react';
import { PokedexContext, getNextMovesInfo } from '../../contexts/PokedexContext.jsx';
import { BUTTONS_SHOW_MORE_CLASSNAME } from '../../utilities/buttons-utilities.js';

const ButtonShowMoreMoves = () =>{
    const {movesList, setMovesList, movesNames} = useContext(PokedexContext)
    const showMore = async() =>{
        const nextMoves = await getNextMovesInfo(movesNames)
        setMovesList([...movesList, ...nextMoves])
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

export default ButtonShowMoreMoves