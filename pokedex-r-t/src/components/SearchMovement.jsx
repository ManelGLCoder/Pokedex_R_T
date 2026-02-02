import React from "react";
import "../App.css"

const SearchMovement = () => {
    return (
        <div className="flex flex-col p-2 my-2.5 rounded-xl bg-violet-900">
            <div className="flex justify-center my-2">
                <span>Insert Move name</span>
            </div>
            <hr className="h-0.5 border-t-0 bg-amber-50" />
            <div className="flex my-3 gap-1 sm:gap-3">
                <button className="flex flex-1 px-2 py-1 justify-center self-center rounded-xl bg-violet-500  text-center"> SELECT TYPE </button>
                <button className="flex flex-1 px-2 py-1 justify-center self-center rounded-xl bg-violet-500 text-center"> SELECT CATEGORY </button>
            </div>
        </div>
    );
};
export default SearchMovement;