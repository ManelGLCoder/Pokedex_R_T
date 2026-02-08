import React from "react";
import "../App.css"
import ButtonSection from "./ButtonSection";

const ButtonsSectionSelection = ({buttons}) => {
    return (
        <div className="relative top-3 flex text-lg md:text-xl">
            {
            buttons.map((b, i)=>{
                const first = i == 0
                const last = i == buttons.length - 1

                return (<ButtonSection key={i} buttonData={b} first={first} last={last} />)
            })}
        </div>
    );
};

export default ButtonsSectionSelection;