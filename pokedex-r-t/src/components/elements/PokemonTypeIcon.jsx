import "../../App.css"
import { SRC_TYPE, COLOR_TYPE } from "../../dto/constants";

const PokemonTypeIcon = ({ pokemonType}) => {
    return (
        <img className={`p-1 size-6 sm:size-10 rounded-full ${COLOR_TYPE[pokemonType]}`}
        src={SRC_TYPE(pokemonType)} alt={`${pokemonType} Icon`}
        />
    );
};

export default PokemonTypeIcon;