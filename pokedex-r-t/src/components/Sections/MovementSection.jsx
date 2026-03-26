import "../../App.css"
import MovementsListSection from "./MovementsListSection";
import { PokedexContext,  } from "../../contexts/PokedexContext";
import { useContext } from "react";

const MovementSection = () => {
    const {movesList} = useContext(PokedexContext)
    return (
        <div className="flex flex-col px-2 py-3 max-h-100 sm:max-h-88 rounded-b-xl bg-secondary">
            <MovementsListSection moves={movesList}/>
        </div>
    );
};
export default MovementSection;