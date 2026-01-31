import React from "react";
import "../App.css"
import ButtonSection from "./ButtonSection";

const ButtonsSectionSelection = ({buttons}) => {
    return (
        <div className="relative flex max-w-full justify-around text-lg md:text-xl">
            {
            buttons.map((b, i)=>{
                return (<ButtonSection key={i} buttonData={b} />)
            })}
        </div>
    );
};

export default ButtonsSectionSelection;