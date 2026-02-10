import React from "react";
import "../../App.css"
import TypesOfThePokemon from "../elements/TypesOfThePokemon";

const PokemonEvolution = ({pokeEvData}) => {
    return (
        <div className="flex flex-col justify-end self-center gap-1 p-1">
            <img 
                className="flex justify-center self-center size-20 sm:size-32" 
                src={`src/assets/pokemon/${pokeEvData.name}.svg`}
                alt={`${pokeEvData.name} Icon`}
            />
            <TypesOfThePokemon types={[...pokeEvData.types]} onlyIcon={true}/>
            <span className="flex justify-center text-base sm:text-lg">{pokeEvData.name}</span>
        </div>
    );
};

export default PokemonEvolution;