import "../../App.css"
import { getButtonSelectionClassName } from "../../utilities/buttons-utilities";
import { PokedexContext } from "../../contexts/PokedexContext";
import { useContext } from "react";
const ButtonMovesSection = ({first = false, last = false}) => {
    const {abilitiesFocused, setAbilitiesFocused} = useContext(PokedexContext)
    const altSection = () =>{
        if(abilitiesFocused){
            setAbilitiesFocused(false)
        }
    }
    return (
        <button className={getButtonSelectionClassName(first,last,!abilitiesFocused)}
        onClick={altSection}>
            Movimientos
        </button>
    );
};


export default ButtonMovesSection;