    import { useContext } from 'react';
    import { PokedexContext } from '../../contexts/PokedexContext.jsx';
    import { BUTTONS_SHOW_MORE_CLASSNAME, HOVER_BUTTONS_COLOR } from '../../utilities/buttons-utilities.js';
    import Loading from '../Loading.jsx';
    import { fetchAllMovesInfo } from '../../utilities/fetch-utilities.js';
    import { getMovesInfo, getMovesNamesLimited} from '../../utilities/get-data-utilities.js';

    const ButtonShowMoreMoves = () =>{
        const {movesList, setMovesList, movesNames, loadingMoves, setLoadingMoves, movesInfoList, setMovesInfoList} = useContext(PokedexContext)
        const showMore = async() =>{
            setLoadingMoves(true)
            const nextMoves = await getNextMovesInfo(movesNames)
            setMovesList([...movesList, ...nextMoves])
            setLoadingMoves(false)
        }
        const getNextMovesInfo = async(movesNames) =>{
            const movesList = getMovesNamesLimited(movesNames)
            const movesFiltered = filterMovesAlreadySaved(movesList)
            const movesData = await fetchAllMovesInfo(movesFiltered.toFetch)
            const newMovesInfo = getMovesInfo(movesData)
            saveMoves(newMovesInfo)
        return [...movesFiltered.withInfo, ...newMovesInfo]
    }
    const filterMovesAlreadySaved = (movesNames) =>{
        let movesFiltered = {
            withInfo: [],
            toFetch: []
        }
        movesNames.forEach(moveId => {
            if(movesInfoList[moveId]){
                movesFiltered.withInfo.push(movesInfoList[moveId])
            }
            else{
                movesFiltered.toFetch.push(moveId)
            }
        });
        return movesFiltered
    }

    const saveMoves = (newMoves)=> {
        const updatedMovesInfoList = movesInfoList
        if(Array.isArray(newMoves) && newMoves.length){
            newMoves.forEach((move)=>{
                updatedMovesInfoList[move.id] = move
            })
        }
        setMovesInfoList(updatedMovesInfoList)
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