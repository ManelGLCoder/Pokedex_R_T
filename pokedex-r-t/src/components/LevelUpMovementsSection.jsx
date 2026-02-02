import React from "react";
import "../App.css"
import LvMove from "./LvMove";

const LevelUpMovementsSection = ({moves}) => {
    return (
        <section className="flex flex-col">
            {
                moves.map((move,i)=>{
                    return (<LvMove key={i} moveData={move} />)
                })
            }
        </section>
    );
};
export default LevelUpMovementsSection;