import "../../App.css"

import SectionDescription from "./SectionDescription";
import SectionHabilities from "./SectionHabilities";
import SectionEvolutionLine from "./SectionEvolutionLine";
import MovementSection from "./MovementSection";
import { PokedexContext} from "../../contexts/PokedexContext";
import { useContext, useEffect } from "react";
import ButtonMovesSection from "../buttons/ButtonMovesSection";
import ButtonAbilitiesSection from "../buttons/ButtonAbilitiesSection";
import { BUTTONS_SECTION_SELECTION_CLASSNAME } from "../../utilities/buttons-utilities";


const SectionPokemonInfo = () => {
    const {pokemonInfo, abilitiesFocused,
        setMovesNames, setMovesList} = useContext(PokedexContext)

    useEffect(()=>{
        setMovesNames(pokemonInfo.moves)
        setMovesList([])
    },[pokemonInfo])
    
    
    return (
        <>
            <SectionDescription description={pokemonInfo.description} species={pokemonInfo.species} weight={pokemonInfo.weight} height={pokemonInfo.height}/>
            <div className="relative -top-5 flex flex-col gap-2">
                <div className={BUTTONS_SECTION_SELECTION_CLASSNAME}>
                    <ButtonAbilitiesSection first={true}/>
                    <ButtonMovesSection last={true}/>
                </div>
                {
                    abilitiesFocused? 
                        <SectionHabilities habilitiesData={pokemonInfo.abilities}/> : 
                        <MovementSection/>
                }
                {/* <div className={BUTTONS_SECTION_SELECTION_CLASSNAME}> */}
                <div className="relative top-3 flex justify-center text-lg md:text-xl rounded-t-2xl bg-secondary">
                    <span className="flex px-0 py-2 font-bold ">
                        Línea Evolutiva
                    </span>
                    {/* <ButtonLineEvolutionSection first={true}/>
                    <ButtonVariantsSection last={true}/> */}
                </div>
                <SectionEvolutionLine evolutionData={pokemonInfo.evolutions}/>
                {
                    // lineEvolutionFocused?
                    //     <SectionEvolutionLine evolutionData={pokemonInfo.evolutions}/> :
                    //     <SectionVariant variantData={pokemonInfo.variants}/>
                }
            </div>
        </>
    );
};

export default SectionPokemonInfo;