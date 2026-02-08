import React from "react";
import "../App.css"

const ButtonSubSection = ({buttonData}) => {
    const selected = "px-0 py-2 font-bold"
    const noSelected = "px-2 sm:px-5 md:px-10 py-2 bg-pink-600 hover:bg-pink-400"
    return (
        <button className={`flex-1 rounded-xl ${buttonData.isFocus ? selected : noSelected}`}>
            {buttonData.name}
        </button>
    );
};

export default ButtonSubSection;