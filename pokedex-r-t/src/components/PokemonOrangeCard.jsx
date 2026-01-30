import React from "react";
import "../App.css"
import TypesOfThePokemon from "./TypesOfThePokemon";

const PokemonOrangeCard = ({pokeData, showShiny}) => {
    return (
            <div className="rounded-xl py-3 text-sm/7 bg-orange-300 text-white">
                <div className="grid grid-cols-5 px-5 py-2 text-xl font-bold">
                    <span className="col-span-2">{pokeData.name}</span>
                    <span className="col-start-5">#{pokeData.id}</span>
                </div>
                <TypesOfThePokemon types={[...pokeData.types]}/>
                <div className="flex justify-center">
                    <img 
                        className="size-32" 
                        src={`src/assets/pokemon/${pokeData.name + (showShiny? "_s" : "")}.svg`}
                        alt={`${pokeData.name} Icon`}
                    />
                </div>
                <br />
            </div>
    );
};

export default PokemonOrangeCard;

