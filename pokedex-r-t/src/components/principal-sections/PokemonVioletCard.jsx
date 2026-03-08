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
        <div className="relative -top-4 py-5 rounded-xl bg-violet-950 text-white text-sm/7">
            <ButtonShiny/>
            <ButtonsDescripStats/>
            <div className="flex flex-col gap-3 px-5">
                {
                    descriptionFocused ? 
                    <SectionPokemonInfo pokeData={pokeData}/> :
                    <SectionPokemonStats pokeData={pokeData}/>
                }
            </div>
        </div>
    );
};

export default PokemonVioletCard;