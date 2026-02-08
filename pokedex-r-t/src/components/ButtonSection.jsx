import React from "react";
import "../App.css"

const ButtonSection = ({buttonData, first = false, last = false}) => {
    const selected = "px-0 py-2 font-bold bg-violet-800"
    const noSelected = "px-5 py-2 bg-pink-600 hover:bg-pink-400"
    
    return (
        <button className={`flex-1 ${roundedByPosition(first,last)} ${buttonData.isFocus ? selected : noSelected}`}>
            {buttonData.name}
        </button>
    );
};

const roundedByPosition = (first,last)=>{
    if(first){
        return "rounded-tl-2xl"
    }
    else if(last){
        return "rounded-tr-2xl"
    }
    return ""
}

export default ButtonSection;