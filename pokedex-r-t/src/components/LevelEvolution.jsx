import React from "react";
import "../App.css"

const LevelEvolution = ({lv}) => {
    return (
        <div class="my-1.5 flex flex-col justify-center justify-self-center sm:max-w-fit">
            <span class="flex justify-center justify-self-center text-lg sm:text-base">{`Lv ${lv}`}</span>
                <img 
                    className="hidden h-12 w-12 sm:block" 
                    src={`src/assets/right_arrow.svg`}
                    alt={`Righ Arrow Icon`}
                />
                <img 
                    className="flex h-7 w-7 self-center sm:invisible" 
                    src={`src/assets/down_arrow.svg`}
                    alt={`Down Arrow Icon`}
                />
        </div>
    );
};

export default LevelEvolution;