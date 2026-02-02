import React from "react";
import "../App.css"
import ButtonShiny from "./ButtonShiny";
import ButtonsDescripStats from "./ButtonDescrpStats";
import SectionDescription from "./SectionDescription";
import ButtonsSectionSelection from "./ButtonsSectionSelection";
import SectionHabilities from "./SectionHabilities";
import SectionEvolutionLine from "./SectionEvolutionLine";
import TypesOfThePokemon from "./TypesOfThePokemon";

const bHabilities = {name:"Habilidades", isFocus: true , link: "comming soon"}
const bMoves = {name:"Movimientos", isFocus: false , link: "comming soon"}
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
            {/* Hay que cargar según si esta uno u otro focus */}
            <SectionHabilities pokeData={pokeData}/>
            {/* Faltan movimientos */}
            <ButtonsSectionSelection buttons={[bEvolutions, bVariants]}/>
            <SectionEvolutionLine pokeData={pokeData}/>
            {/* Faltan variantes */}
            
        </div>
    );
};

export default PokemonVioletCard;