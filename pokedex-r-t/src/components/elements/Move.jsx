import React from "react";
import "../../App.css"
import PokemonTypeIcon from "./PokemonTypeIcon";
import MoveCategory from "./MoveCategory";
import { COLOR_TYPE } from "../../dto/constants";

const Move = ({moveData}) => {
    return (
        <section className="flex flex-col my-1">
            <div className={`flex justify-around items-center gap-1 px-5 rounded-xl text-xs sm:text-lg ${COLOR_TYPE[moveData.type]} p-1 font-bold`}>
                <MoveCategory className="flex-1" moveCategory={moveData.damageClass}/>
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

export default Move;