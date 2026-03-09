import { React, useContext } from "react";
import "../../App.css"
import { PokedexContext } from "../../contexts/PokedexContext";

const ButtonShiny = () => {
    const {showShiny, setShowShiny} = useContext(PokedexContext)
    const altShiny =()=>{
        setShowShiny(!showShiny)
    }
    return (
        <div className="flex justify-center">
            <button 
            className={`absolute z-1 -top-7 min-w-fit rounded-4xl ${showShiny ? "bg-white" : "bg-orange-300" } hover:bg-violet-200`}
            onClick={altShiny}>
                {
                    showShiny ? <img className="size-15" src="src/assets/b_shiny.svg" alt="Shiny Btn" /> :
                        <img className="size-15" src="src/assets/b_shiny_off.svg" alt="Shiny Btn" />
                }
            </button>
        </div>
    );
};

export default ButtonShiny;