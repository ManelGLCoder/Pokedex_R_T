import React from "react";
import "../App.css"
import PokemonEvolution from "./PokemonEvolution";
import LevelEvolution from "./LevelEvolution";

const SectionEvolutionLine = ({pokeData}) => {
    return (
        <section>
            <div className="my-3 flex flex-col gap-2 rounded-xl bg-violet-800 px-5 py-4 sm:flex-row sm:justify-around">
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