import React from "react";
import "../App.css"
import ButtonShiny from "./ButtonShiny";
import ButtonsDescripStats from "./ButtonDescrpStats";
import SectionPokemonInfo from "./SectionPokemonInfo";
import SectionPokemonStats from "./SectionPokemonStats";

const descriptionFocused = true
const statsFocused = false

const PokemonVioletCard = ({pokeData, showShiny}) => {
    return (
        <div className="relative -top-4 px-5 py-10 rounded-xl bg-violet-950 text-white text-sm/7">
            <ButtonShiny showShiny={showShiny}/>
            <ButtonsDescripStats descriptionFocused={descriptionFocused} statsFocused={statsFocused}/>
            {
                descriptionFocused && <SectionPokemonInfo pokeData={pokeData}/>
            }
            {
                statsFocused && <SectionPokemonStats pokeData={pokeData}/>
            }
        </div>
    );
};

export default PokemonVioletCard;