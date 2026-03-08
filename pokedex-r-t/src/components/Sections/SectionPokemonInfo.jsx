import React from "react";
import "../../App.css"

import SectionDescription from "./SectionDescription";
import SectionHabilities from "./SectionHabilities";
import SectionEvolutionLine from "./SectionEvolutionLine";
import MovementSection from "./MovementSection";
import SectionVariant from "./SectionVariant";
import { PokedexContext } from "../../contexts/PokedexContext";
import { useContext } from "react";
import ButtonMovesSection from "../buttons/ButtonMovesSection";
import ButtonAbilitiesSection from "../buttons/ButtonAbilitiesSection";
import ButtonLineEvolutionSection from "../buttons/ButtonLineEvolutionSection";
import ButtonVariantsSection from "../buttons/ButtonVariantsSection";
import { BUTTONS_SECTION_SELECTION_CLASSNAME } from "../../utilities/buttons-utilities";


const SectionPokemonInfo = ({pokeData}) => {
    const {abilitiesFocused, lineEvolutionFocused} = useContext(PokedexContext)
    return (
        <>
            <SectionDescription description={pokeData.description} species={pokeData.species} weight={pokeData.weight} height={pokeData.height}/>
            <div className="relative -top-5 flex flex-col gap-2">
                <div className={BUTTONS_SECTION_SELECTION_CLASSNAME}>
                    <ButtonAbilitiesSection first={true}/>
                    <ButtonMovesSection last={true}/>
                </div>
                {
                    abilitiesFocused? 
                        <SectionHabilities habilitiesData={pokeData.abilities}/> : 
                        <MovementSection moves={pokeData.moves}/>
                }
                <div className={BUTTONS_SECTION_SELECTION_CLASSNAME}>
                    <ButtonLineEvolutionSection first={true}/>
                    <ButtonVariantsSection last={true}/>
                </div>
                {
                    lineEvolutionFocused?
                        <SectionEvolutionLine evolutionData={pokeData.evolutions}/> :
                        <SectionVariant variantData={pokeData.variants}/>
                }
            </div>
        </>
    );
};

export default SectionPokemonInfo;