import React from "react";
import "../App.css"
import TypesOfThePokemon from "./TypesOfThePokemon";

const PokemonEvolution = ({pokeEvData}) => {
    return (
        <div className="flex flex-col justify-end self-center gap-2 p-2">
            <img 
                className="flex justify-center self-center size-32" 
                src={`src/assets/pokemon/${pokeEvData.name}.svg`}
                alt={`${pokeEvData.name} Icon`}
            />
            <TypesOfThePokemon types={[...pokeEvData.types]}/>
            <span className="flex justify-center text-lg sm:text-base">{pokeEvData.name}</span>
        </div>
    );
};

export default PokemonEvolution;