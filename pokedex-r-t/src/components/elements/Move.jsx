import React from "react";
import "../../App.css"
import PokemonTypeIcon from "./PokemonTypeIcon";
import MoveCategory from "./MoveCategory";

const Move = ({moveData}) => {
    return (
        <section className="flex flex-col my-1">
            <div className={`flex justify-around items-center gap-1 px-5 rounded-xl text-xs sm:text-lg ${primaryColorType[moveData.type]} p-1 font-bold`}>
                {
                    moveData.lv && <span className="flex-1">{`Lvl ${moveData.lv}`}</span>
                }
                <MoveCategory className="flex-1" moveCategory={moveData.category}/>
                <span className="flex-2">{moveData.name}</span>
                <div className="grid grid-rows-2 text-center">
                    <span>Power</span>
                    <span>{moveData.power?? "-"}</span>
                </div>
                <div className="flex-1 grid grid-rows-2 text-center">
                    <span>Accuracy</span>
                    <span>{moveData.accuaracy?? "-"}</span>
                </div>
                <div className="flex-1 grid grid-rows-2 text-center">
                    <span>PP</span>
                    <span>{moveData.pp}</span>
                </div>
                <PokemonTypeIcon className="flex-1" pokemonType={moveData.type} />
            </div>
        </section>
    );
};
const primaryColorType = {
    "bug": "bg-green-900",
    "dark": "bg-gray-800",
    "dragon": "bg-cyan-950",
    "electric": "bg-yellow-300",
    "fairy": "bg-fuchsia-400",
    "fighting": "bg-orange-700",
    "fire": "bg-orange-400",
    "flying": "bg-sky-300",
    "ghost": "bg-gray-950",
    "grass": "bg-lime-500",
    "ground": "bg-amber-900",
    "ice": "bg-blue-300",
    "normal": "bg-neutral-400",
    "poison": "bg-purple-900",
    "psychic": "bg-pink-500",
    "rock": "bg-stone-700",
    "steel": "bg-gray-400",
    "water": "bg-blue-400",
}
export default Move;