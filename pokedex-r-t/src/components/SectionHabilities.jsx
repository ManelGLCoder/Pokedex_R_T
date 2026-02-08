import React from "react";
import "../App.css"

const SectionHabilities = ({pokeData}) => {
    return (
        <section className="flex py-3 rounded-b-xl bg-violet-800">
            {
            pokeData.habilities.map((h, i)=>{
                return (<span className="rounded-xl bg-violet-600 px-2 py-1 mx-2" key={i}>{h}</span>)
            })}
        </section>
    );
};

export default SectionHabilities;