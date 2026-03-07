import React from "react";
import "../../App.css"
import MovementsListSection from "./MovementsListSection";

const MovementSection = ({moves}) => {
    return (
        <div className="isolate flex flex-col px-2 py-3 max-h-100 sm:max-h-70 rounded-b-xl bg-violet-800">
            <MovementsListSection moves={moves}/>
        </div>
    );
};
export default MovementSection;