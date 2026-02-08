import React from "react";
import "../App.css"
import TypesOfThePokemon from "./TypesOfThePokemon";

const PokemonVariant = ({pokeEvData}) => {
    return (
        <div className="flex flex-col justify-end self-center gap-1 p-1">
            <span className="flex justify-center text-center text-base sm:text-lg">{pokeEvData.name}</span>
            <img 
                className="flex justify-center self-center size-20 sm:size-32" 
                src={`src/assets/pokemon/${pokeEvData.name}.svg`}
                alt={`${pokeEvData.name} Icon`}
            />
            <TypesOfThePokemon types={[...pokeEvData.types]} onlyIcon={true}/>
            
        </div>
    );
};

export default PokemonVariant;