import { useContext, useEffect } from 'react';
import { PokedexContext } from '../../contexts/PokedexContext.jsx';
import { BUTTONS_SHOW_MORE_CLASSNAME, HOVER_BUTTONS_COLOR_SECONDARY } from '../../utilities/buttons-utilities.js';
import Loading from '../Loading.jsx';
import { fetchAllMovesInfo } from '../../utilities/fetch-utilities.js';
import { getMovesInfo, getMovesNamesLimited} from '../../utilities/get-data-utilities.js';

const ButtonShowMoreMoves = () =>{
    const {
            movesList, setMovesList, 
            movesNames, loadingMoves, 
            setLoadingMoves, movesInfoList, 
            setMovesInfoList, hideShowMoreMoves,
            setHideShowMoreMoves
    } = useContext(PokedexContext)

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
        setHideShowMoreMoves(movesInfoList.length === movesNames.length)
        setMovesInfoList(updatedMovesInfoList)
    }

    useEffect(()=>{
        const lenghtMovesList = movesList.length
        const lenghtMovesNames = movesNames.length
        setHideShowMoreMoves(lenghtMovesList === lenghtMovesNames)
            return 
        },[movesList])

    return(
        hideShowMoreMoves? null : loadingMoves ? 
            <Loading isPrincipal={false}/> :
            <button 
                className={`${BUTTONS_SHOW_MORE_CLASSNAME}  bg-secondary-middle ${HOVER_BUTTONS_COLOR_SECONDARY}`}
                onClick={showMore}
                >
                    <svg className="size-10 fill-white" alt={`More Image`} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fillRule="evenodd" d="M3.293 7.293a1 1 0 0 1 1.414 0L12 14.586l7.293-7.293a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414" clipRule="evenodd"/></svg>
                    <span className='justify-center self-center px-2 py-1 text-center'>
                        Mostrar Más
                    </span>
            </button>
    )
}

export default ButtonShowMoreMoves