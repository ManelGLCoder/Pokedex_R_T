import React from "react";
import "../App.css"
import ButtonShiny from "./ButtonShiny";
import ButtonsDescripStats from "./ButtonDescrpStats";
import SectionDescription from "./SectionDescription";
import ButtonsSectionSelection from "./ButtonsSectionSelection";
import SectionHabilities from "./SectionHabilities";
import SectionEvolutionLine from "./SectionEvolutionLine";
import MovementSection from "./MovementSection";
import TypesOfThePokemon from "./TypesOfThePokemon";

const bHabilities = {name:"Habilidades", isFocus: false , link: "comming soon"}
const bMoves = {name:"Movimientos", isFocus: true , link: "comming soon"}
const bLvMoves = {name:"Level Up", isFocus: true , link: "comming soon"}
const bTMHMMoves = {name:"TM/HM", isFocus: false , link: "comming soon"}
const bEggMoves = {name:"Egg", isFocus: false , link: "comming soon"}
const bTutorMoves = {name:"Tutor", isFocus: false , link: "comming soon"}
const descriptionFocused = true
const statsFocused = false
const bEvolutions = {name:"Línea Evolutiva", isFocus: true , link: "comming soon"}
const bVariants = {name:"Variantes", isFocus: false , link: "comming soon"}

const PokemonVioletCard = ({pokeData, showShiny}) => {
    return (
        <div className="relative -top-4 px-5 py-10 rounded-xl bg-violet-950 text-white text-sm/7">
            <ButtonShiny showShiny={showShiny}/>
            <ButtonsDescripStats descriptionFocused={descriptionFocused} statsFocused={statsFocused}/>
            <SectionDescription pokeData={pokeData}/>
            <ButtonsSectionSelection buttons={[bHabilities, bMoves]}/>
            {
                bHabilities.isFocus ? 
                    <SectionHabilities pokeData={pokeData}/> : 
                    <MovementSection buttons_moves={[bLvMoves, bTMHMMoves, bEggMoves, bTutorMoves]} moves={pokeData.moves}/>
            }
            <ButtonsSectionSelection buttons={[bEvolutions, bVariants]}/>
            {/* Hay que cargar según si esta uno u otro focus */}
            <SectionEvolutionLine pokeData={pokeData}/>
            {/* Faltan variantes */}
            
        </div>
    );
};

export default PokemonVioletCard;