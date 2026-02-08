import React from "react";
import "../App.css"

const LevelEvolution = ({lv}) => {
    return (
        <div className="my-1.5 flex flex-col justify-center justify-self-center sm:max-w-fit">
            <span className="flex justify-center justify-self-center text-sm sm:text-lg">{`Lv ${lv}`}</span>
                <img 
                    className="h-12 w-12" 
                    src={`src/assets/right_arrow.svg`}
                    alt={`Righ Arrow Icon`}
                />
        </div>
    );
};

export default LevelEvolution;