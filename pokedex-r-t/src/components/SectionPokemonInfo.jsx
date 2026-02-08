import React from "react";
import "../App.css"

import SectionDescription from "./SectionDescription";
import ButtonsSectionSelection from "./ButtonsSectionSelection";
import SectionHabilities from "./SectionHabilities";
import SectionEvolutionLine from "./SectionEvolutionLine";
import MovementSection from "./MovementSection";
import SectionVariant from "./SectionVariant";

const bHabilities = {name:"Habilidades", isFocus: false }
const bMoves = {name:"Movimientos", isFocus: true }
const bLvMoves = {name:"Level Up", isFocus: true }
const bTMHMMoves = {name:"TM/HM", isFocus: false }
const bEggMoves = {name:"Egg", isFocus: false }
const bTutorMoves = {name:"Tutor", isFocus: false }
const bEvolutions = {name:"Línea Evolutiva", isFocus: true }
const bVariants = {name:"Variantes", isFocus: false }

const SectionPokemonInfo = ({pokeData}) => {
    return (
        <>
            <SectionDescription description={pokeData.description} species={pokeData.species} weight={pokeData.weight} height={pokeData.height}/>
            <div className="relative -top-5 flex flex-col gap-2">
                <ButtonsSectionSelection buttons={[bHabilities, bMoves]}/>
                {
                    bHabilities.isFocus ? 
                        <SectionHabilities habilitiesData={pokeData.habilities}/> : 
                        <MovementSection buttons_moves={[bLvMoves, bTMHMMoves, bEggMoves, bTutorMoves]} moves={pokeData.moves}/>
                }
                <ButtonsSectionSelection buttons={[bEvolutions, bVariants]}/>
                {
                    bEvolutions.isFocus?
                        <SectionEvolutionLine evolutionData={pokeData.evolutions}/> :
                        <SectionVariant variantData={pokeData.variants}/>
                }
            </div>
        </>
    );
};

export default SectionPokemonInfo;