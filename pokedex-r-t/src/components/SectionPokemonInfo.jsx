import React from "react";
import "../App.css"

import SectionDescription from "./SectionDescription";
import ButtonsSectionSelection from "./ButtonsSectionSelection";
import SectionHabilities from "./SectionHabilities";
import SectionEvolutionLine from "./SectionEvolutionLine";
import MovementSection from "./MovementSection";
import SectionVariant from "./SectionVariant";

const bHabilities = {name:"Habilidades", isFocus: true , link: "comming soon"}
const bMoves = {name:"Movimientos", isFocus: false , link: "comming soon"}
const bLvMoves = {name:"Level Up", isFocus: true , link: "comming soon"}
const bTMHMMoves = {name:"TM/HM", isFocus: false , link: "comming soon"}
const bEggMoves = {name:"Egg", isFocus: false , link: "comming soon"}
const bTutorMoves = {name:"Tutor", isFocus: false , link: "comming soon"}
const bEvolutions = {name:"Línea Evolutiva", isFocus: false , link: "comming soon"}
const bVariants = {name:"Variantes", isFocus: true , link: "comming soon"}

const SectionPokemonInfo = ({pokeData}) => {
    return (
        <>
            <SectionDescription pokeData={pokeData}/>
            <div className="relative -top-5 flex flex-col gap-2">
                <ButtonsSectionSelection buttons={[bHabilities, bMoves]}/>
                {
                    bHabilities.isFocus ? 
                        <SectionHabilities pokeData={pokeData}/> : 
                        <MovementSection buttons_moves={[bLvMoves, bTMHMMoves, bEggMoves, bTutorMoves]} moves={pokeData.moves}/>
                }
                <ButtonsSectionSelection buttons={[bEvolutions, bVariants]}/>
                {
                    bEvolutions.isFocus?
                        <SectionEvolutionLine pokeData={pokeData}/> :
                        <SectionVariant pokeData={pokeData}/>
                }
            </div>
        </>
    );
};

export default SectionPokemonInfo;