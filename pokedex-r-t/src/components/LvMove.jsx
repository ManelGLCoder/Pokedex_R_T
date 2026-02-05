import React from "react";
import "../App.css"
import PokemonType from "./PokemonType";
import MoveCategory from "./MoveCategory";

const LvMove = ({moveData}) => {
    return (
        <section className="my-1 flex flex-col">
            <div className={`flex justify-around gap-1 rounded-xl ${primaryColorType[moveData.type]} p-1 font-bold`}>
                <span className="flex justify-center">{`Lvl ${moveData.lv}`}</span>
                <span className="flex">{moveData.name}</span>
                <PokemonType pokemonType={moveData.type} />
                <MoveCategory moveCategory={moveData.category}/>
                
            </div>
            <div className={`mx-2 grid grid-cols-6 gap-1 rounded-b-xl ${secondColorType[moveData.type]} p-1 font-normal sm:mx-5 sm:gap-5`}>
                <span className="justify-self-end">Power</span>
                <span className="">{moveData.power?? "-"}</span>
                <span className="justify-self-end">Accuracy</span>
                <span className="">{moveData.accuaracy?? "-"}</span>
                <span className="justify-self-end">PP</span>
                <span className="">{moveData.pp}</span>
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
const secondColorType = {
    "bug": "bg-green-800",
    "dark": "bg-gray-700",
    "dragon": "bg-cyan-450",
    "electric": "bg-yellow-200",
    "fairy": "bg-fuchsia-300",
    "fighting": "bg-orange-600",
    "fire": "bg-orange-300",
    "flying": "bg-sky-200",
    "ghost": "bg-gray-850",
    "grass": "bg-lime-400",
    "ground": "bg-amber-800",
    "ice": "bg-blue-200",
    "normal": "bg-neutral-300",
    "poison": "bg-purple-800",
    "psychic": "bg-pink-400",
    "rock": "bg-stone-600",
    "steel": "bg-gray-300",
    "water": "bg-blue-300",
}
export default LvMove;