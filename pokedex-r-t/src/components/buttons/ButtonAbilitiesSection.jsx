import "../../App.css"
import { getButtonSelectionClassName } from "../../utilities/buttons-utilities";
import { PokedexContext } from "../../contexts/PokedexContext";
import { useContext } from "react";
const ButtonAbilitiesSection = ({first = false, last = false}) => {
    const {abilitiesFocused, setAbilitiesFocused} = useContext(PokedexContext)
    const altSection = () =>{
        if(!abilitiesFocused){
            setAbilitiesFocused(true)
        }
    }
    return (
        <button className={getButtonSelectionClassName(first,last,abilitiesFocused)}
        onClick={altSection}>
            Habilidades
        </button>
    );
};


export default ButtonAbilitiesSection;