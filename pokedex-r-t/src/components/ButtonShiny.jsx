import React from "react";
import "../App.css"

const ButtonShiny = ({showShiny}) => {
    return (
        <div className="flex justify-center">
            <button className={`absolute -top-7 min-w-fit rounded-4xl ${showShiny ? "bg-white" : "bg-orange-300" } hover:bg-violet-200`}>
                {
                    showShiny ? <img className="size-15" src="src/assets/b_shiny.svg" alt="Shiny Btn" /> :
                        <img className="size-15" src="src/assets/b_shiny_off.svg" alt="Shiny Btn" />
                }
            </button>
        </div>
    );
};

export default ButtonShiny;