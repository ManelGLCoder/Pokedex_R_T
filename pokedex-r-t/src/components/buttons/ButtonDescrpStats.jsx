import { useContext } from 'react';
import "../../App.css"
import { PokedexContext } from "../../contexts/PokedexContext";
import descriptionIcon from '../../assets/b_description.svg'
import statsIcon from '../../assets/b_stats.svg'
import focusIcon from '../../assets/b_focus.svg'

const ButtonsDescripStats = () => {
    const {descriptionFocused, setDescriptionFocused} = useContext(PokedexContext)
    const altSection = (alreadySelected) =>{
        if(alreadySelected){
            return
        }
        setDescriptionFocused(!descriptionFocused)
    }
    const buttonWithIcon = (iconPath, name, selected) =>{
        const bg = selected ? "" : "bg-violet-900 hover:bg-violet-800"
        return(
            <button className={`flex-1 justify-items-center py-2 rounded-t-xl ${bg} `}
            onClick={()=>altSection(selected)}>
                <img className="size-8" src={iconPath} alt={`${name} Btn`} />
                {
                    selected &&
                    <img className="relative size-5" src={focusIcon} alt="" />
                }
            </button>
        )
    }
    return (
        <div className="relative -top-5 flex justify-items-center">
            {buttonWithIcon(descriptionIcon, "Description", descriptionFocused)}
            {buttonWithIcon(statsIcon, "Stats", !descriptionFocused)}
        </div>
    );
};

export default ButtonsDescripStats;