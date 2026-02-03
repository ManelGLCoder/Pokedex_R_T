import React from "react";
import "../App.css"
import ProgressBar from "./ProgressBar";

const Stat = ({name, val, maxVal}) => {
    const percentage = Math.floor((val/maxVal)*100) + "%"
    const bgColor = "bg-violet-800"
    const progressColor = "bg-amber-500"
    return (
        <section className="grid grid-cols-6">
            <span className="col-span-2">{name}</span>
            <span>{val}</span>
            <ProgressBar progress={percentage} bgColor={bgColor} pColor={progressColor}/>
        </section>
    );
};

export default Stat;