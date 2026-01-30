import React from "react";
import "../App.css"

const ButtonSection = ({buttonData}) => {
    const focus = "px-0 py-2 font-bold"
    const noFocus = "px-5 py-2 md:px-10 bg-pink-600 hover:bg-pink-400"
    return (
        <button className={`rounded-3xl ${buttonData.isFocus ? focus : noFocus}`}>
            {buttonData.name}
        </button>
    );
};

export default ButtonSection;