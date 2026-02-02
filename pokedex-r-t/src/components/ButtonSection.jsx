import React from "react";
import "../App.css"

const ButtonSection = ({buttonData}) => {
    const selected = "px-0 py-2 font-bold"
    const noSelected = "px-5 py-2 md:px-10 bg-pink-600 hover:bg-pink-400"
    return (
        <button className={`rounded-3xl ${buttonData.isFocus ? selected : noSelected}`}>
            {buttonData.name}
        </button>
    );
};

export default ButtonSection;