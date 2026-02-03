import React from "react";
import "../App.css"

import SectionBasicStats from "./SectionBasicStats";
import SectionStrengths from "./SectionStrengths";
import SectionWeakness from "./SectionWeakness";
import SectionOtherStats from "./SectionOtherStats";

const SectionPokemonStats = ({pokeData}) => {
    return (
        <>
            <SectionBasicStats stats={pokeData.stats}/>
            <SectionStrengths strengths={pokeData.strengths}/>
            <SectionWeakness weakness={pokeData.weakness}/>
            <SectionOtherStats stats={pokeData.stats}/>
        </>
    );
};

export default SectionPokemonStats;