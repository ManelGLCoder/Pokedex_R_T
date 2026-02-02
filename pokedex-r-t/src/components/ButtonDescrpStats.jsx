import React from "react";
import "../App.css"

const ButtonsDescripStats = ({descriptionFocused, statsFocused}) => {
    // return(
    //     <div className="relative grid grid-cols-3 justify-items-center -top-8">
    //         <button class="grid max-w-fit justify-items-center px-3 py-1 gap-0 rounded-xl hover:bg-violet-900">
    //             <img className="size-8" src="src/assets/b_description.svg" alt="Description Btn" />
    //             <img className="relative size-5" src="src/assets/b_focus.svg" alt="" />
    //         </button>
    //         <button class="grid col-start-3 max-w-fit justify-items-center px-3 py-1 gap-0 rounded-xl hover:bg-violet-900">
    //             <img className="size-8" src="src/assets/b_stats.svg" alt="Description Btn" />
    //             <img className="relative size-5" src="src/assets/b_focus.svg" alt="" />
    //         </button>
    //     </div>
    // )
    const buttonWithIcon = (iconPath, name, selected, colStart) =>{
        const bg = selected ? "" : "bg-violet-900"
        return(
            <button className={`grid col-start-${colStart} max-w-fit justify-items-center px-3 py-1 gap-0 rounded-xl ${bg} hover:bg-violet-900`}>
                <img className="size-8" src={iconPath} alt={`${name} Btn`} />
                {
                    selected &&
                    <img className="relative size-5" src="src/assets/b_focus.svg" alt="" />
                }
            </button>
        )
    }
    return (
        <div className="relative grid grid-cols-3 justify-items-center -top-8">
            {buttonWithIcon("src/assets/b_description.svg", "Description", descriptionFocused,1)}
            {buttonWithIcon("src/assets/b_stats.svg", "Stats", statsFocused,3)}
        </div>
    );
};

export default ButtonsDescripStats;