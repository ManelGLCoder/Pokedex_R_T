import React from "react";
import "../App.css"
import PokemonEvolution from "./PokemonEvolution";
import LevelEvolution from "./LevelEvolution";

const SectionEvolutionLine = ({pokeData}) => {
    return (
        <section>
            <div className="flex flex-row justify-around gap-1 sm:gap-2 px-1 sm:px-5 py-2 sm:py-4 rounded-b-xl bg-violet-800">
                {pokeData.evolutions.map((ev, i)=>{
                return (
                    <>
                        <PokemonEvolution key={i} pokeEvData={ev} />
                        {ev.lvEvolution && <LevelEvolution lv={ev.lvEvolution}/>}
                    </>
                )
            })}
            </div>
        </section>
    );
};

export default SectionEvolutionLine;