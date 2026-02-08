import React from "react";
import "../App.css"

const ButtonsDescripStats = ({descriptionFocused, statsFocused}) => {
    const buttonWithIcon = (iconPath, name, selected) =>{
        const bg = selected ? "" : "bg-violet-900 hover:bg-violet-800"
        return(
            <button className={`flex-1 justify-items-center py-2 rounded-t-xl ${bg} `}>
                <img className="size-8" src={iconPath} alt={`${name} Btn`} />
                {
                    selected &&
                    <img className="relative size-5" src="src/assets/b_focus.svg" alt="" />
                }
            </button>
        )
    }
    return (
        <div className="relative flex justify-items-center -top-5">
            {buttonWithIcon("src/assets/b_description.svg", "Description", descriptionFocused)}
            {buttonWithIcon("src/assets/b_stats.svg", "Stats", statsFocused)}
        </div>
    );
};

export default ButtonsDescripStats;