import { useContext } from 'react';
import { PokedexContext } from "../../contexts/PokedexContext";
import "../../App.css"
import ButtonShiny from "../buttons/ButtonShiny";
import ButtonsDescripStats from "../buttons/ButtonDescrpStats";
import SectionPokemonInfo from "../Sections/SectionPokemonInfo";
import SectionPokemonStats from "../Sections/SectionPokemonStats";

const PokemonVioletCard = ({pokeData}) => {
    const {descriptionFocused} = useContext(PokedexContext)
    return (
        <div className="relative -top-4 py-5 rounded-xl bg-principal-dark text-white text-sm/7">
            <ButtonShiny/>
            <ButtonsDescripStats/>
            <div className="flex flex-col gap-3 sm:min-w-2xl px-5">
                {
                    descriptionFocused ? 
                    <SectionPokemonInfo/> :
                    <SectionPokemonStats pokeData={pokeData}/>
                }
            </div>
        </div>
    );
};

export default PokemonVioletCard;