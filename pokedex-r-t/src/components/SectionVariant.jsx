import React from "react";
import "../App.css"
import PokemonVariant from "./PokemonVariant";

const SectionVariant = ({variantData}) => {
    return (
        <section>
            <div className="flex flex-row flex-wrap justify-around gap-1 sm:gap-2 px-1 sm:px-5 py-2 sm:py-4 rounded-b-xl bg-violet-800">
                {variantData.map((variant, i)=>{
                return (
                    <PokemonVariant key={i} pokeEvData={variant} />
                )
            })}
            </div>
        </section>
    );
};

export default SectionVariant;