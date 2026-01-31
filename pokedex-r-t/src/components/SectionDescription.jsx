import React from "react";
import "../App.css"

const SectionDescription = ({pokeData}) => {
    return (
        <section>
            <span className="text-xl font-bold">Descripción</span>
            <span className="mx-1 text-gray-400">{pokeData.species}</span>
            <p className="text-gray-400">
                {pokeData.description}
            </p>
            <div className="flex justify-around px-5 py-5 my-5 my-relative rounded-xl bg-violet-800 text-xl text-white">
                <img className="size-13" src="src/assets/description/weight.svg" alt="Weight Icon" />
                <span className="flex items-center">90.50kg</span>
                <img className="size-13" src="src/assets/description/height.svg" alt="Height Icon" />
                <span className="flex items-center">1.70m</span>
            </div>
        </section>
    );
};

export default SectionDescription;