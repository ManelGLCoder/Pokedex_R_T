import React from "react";
import "../../App.css"
import ButtonSubSection from "../buttons/ButtonSubSection";
import MovementsListSection from "./MovementsListSection";

const MovementSection = ({buttons_moves,moves}) => {
    const moveSectionSelected = buttons_moves.filter((button)=>{ return button.isFocus})[0].name
    const moveSectionRenderSwitch = (sectionName) =>{
        switch(sectionName){
            case "Level Up":
                return <MovementsListSection moves={moves.lvUp}/>
            case "TM/HM":
                return <MovementsListSection moves={moves.tmHm}/>
            case "Egg":
                return <MovementsListSection moves={moves.egg}/>
            case "Tutor":
                return <MovementsListSection moves={moves.tutor}/>
            default:
                return null
        }
    }
    
    return (
        <div className="isolate flex flex-col px-2 py-3 max-h-100 sm:max-h-70 rounded-b-xl bg-violet-800">
            <div className="flex gap-1.5 sm:gap-3 text-xs sm:text-lg">
                {
                    buttons_moves.map((b, i)=>{
                        return (<ButtonSubSection key={i} buttonData={b} />)
                })}
            </div>
            <p className="flex justify-self-center self-center my-2 text-lg">Move learn methods</p>
            {
                moveSectionRenderSwitch(moveSectionSelected)
            }
        </div>
    );
};
export default MovementSection;