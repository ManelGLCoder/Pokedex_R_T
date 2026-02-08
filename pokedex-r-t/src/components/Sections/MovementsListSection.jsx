import React from "react";
import "../../App.css"
import Move from "../elements/Move";

const MovementsListSection = ({moves}) => {
    return (
        <section className="flex flex-col">
            {
                moves.map((move,i)=>{
                    return (<Move key={i} moveData={move} />)
                })
            }
        </section>
    );
};
export default MovementsListSection;