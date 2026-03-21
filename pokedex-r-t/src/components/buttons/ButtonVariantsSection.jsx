import "../../App.css"
import { getButtonSelectionClassName } from "../../utilities/buttons-utilities";
import { PokedexContext } from "../../contexts/PokedexContext";
import { useContext } from "react";

const ButtonVariantsSection = ({first = false, last = false}) => {
    const {lineEvolutionFocused, setLineEvolutionFocused} = useContext(PokedexContext)
    const altSection = () =>{
        if(lineEvolutionFocused){
            setLineEvolutionFocused(false)
        }
    }
    return (
        <button className={getButtonSelectionClassName(first,last,!lineEvolutionFocused)}
        onClick={altSection}>
            Variantes
        </button>
    );
};

export default ButtonVariantsSection;