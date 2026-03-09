import "../../App.css"
import { getButtonSelectionClassName } from "../../utilities/buttons-utilities";
import { PokedexContext } from "../../contexts/PokedexContext";
import { useContext } from "react";
const ButtonLineEvolutionSection = ({first = false, last = false}) => {
    const {lineEvolutionFocused, setLineEvolutionFocused} = useContext(PokedexContext)
    const altSection = () =>{
        if(!lineEvolutionFocused){
            setLineEvolutionFocused(true)
        }
    }
    return (
        <button className={getButtonSelectionClassName(first,last,lineEvolutionFocused)}
        onClick={altSection}>
            Línea Evolutiva
        </button>
    );
};


export default ButtonLineEvolutionSection;