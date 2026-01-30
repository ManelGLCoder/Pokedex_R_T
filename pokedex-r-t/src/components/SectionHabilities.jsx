import React from "react";
import "../App.css"

const SectionHabilities = ({pokeData}) => {
    return (
        <section className="my-3 flex gap-3">
            {
            pokeData.habilities.map((h, i)=>{
                return (<span className="rounded-xl bg-violet-800 px-2 py-1" key={i}>{h}</span>)
            })}
        </section>
    );
};

export default SectionHabilities;