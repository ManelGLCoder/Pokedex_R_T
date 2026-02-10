import React from "react";
import "../../App.css"

import Stat from "../elements/Stat";

const SectionOtherStats = ({stats}) => {
    return (
        <section className="py-2">
            <span className="text-xl font-bold">Otras estadísticas</span>
            <div className="flex flex-col">
                <Stat name={"Felicidad"} val={stats.happiness} maxVal={stats.statMax}/>
                <Stat name={"Ratio captura"} val={stats.catchRatio} maxVal={stats.statMax}/>
            </div>
        </section>
    );
};

export default SectionOtherStats;