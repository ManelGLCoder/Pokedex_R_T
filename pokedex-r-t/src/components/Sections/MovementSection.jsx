import { useContext, useEffect } from "react"
import "../../App.css"
import MovementsListSection from "./MovementsListSection";
import { PokedexContext } from "../../contexts/PokedexContext";
import { fetchAllMovesInfo } from "../../utilities/fetch-utilities";
import { getMovesInfo, getMovesNamesLimited} from "../../utilities/get-data-utilities";

const MovementSection = () => {
    const {pokemonInfo, movesList, setMovesList,
        movesInfoList, setMovesInfoList} = useContext(PokedexContext)

    useEffect(()=>{
        if (movesList.length > 0) return

        const initMovesList = async () =>{
            const movesNames = pokemonInfo.moves
            const limitedNames = getMovesNamesLimited(movesNames, 0)

            const toFetch = []
            const cachedMoves = []
            limitedNames.forEach(name => {
                if (movesInfoList[name]) {
                    cachedMoves.push(movesInfoList[name])
                } else {
                    toFetch.push(name)
                }
            })

            if (toFetch.length > 0) {
                const movesData = await fetchAllMovesInfo(toFetch)
                const newMovesInfo = getMovesInfo(movesData)
                const updatedList = { ...movesInfoList }
                newMovesInfo.forEach(move => { updatedList[move.id] = move })
                setMovesInfoList(updatedList)
                setMovesList([...cachedMoves, ...newMovesInfo])
            } else {
                setMovesList(cachedMoves)
            }
        }
        initMovesList()
    },[pokemonInfo, movesList.length])

    return (
        <div className="flex flex-col px-2 py-3 max-h-100 sm:max-h-88 rounded-b-xl bg-secondary">
            <MovementsListSection moves={movesList}/>
        </div>
    );
};
export default MovementSection;