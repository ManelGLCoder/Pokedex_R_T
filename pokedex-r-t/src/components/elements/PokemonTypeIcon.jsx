import "../../App.css"

const PokemonTypeIcon = ({ pokemonType}) => {
    return (
        <img className={`p-1 size-6 sm:size-8 rounded-full ${colorType[pokemonType]}`} src={srcType(pokemonType)} alt={`${pokemonType} Icon`}/>
    );
};

const srcType = (pokemonType) => `src/assets/types/t_${pokemonType}.svg`

const colorType = {
    "bug": "bg-bug",
    "dark": "bg-dark",
    "dragon": "bg-dragon",
    "electric": "bg-electric",
    "fairy": "bg-fairy",
    "fighting": "bg-fighting",
    "fire": "bg-fire",
    "flying": "bg-flying",
    "ghost": "bg-ghost",
    "grass": "bg-grass",
    "ground": "bg-ground",
    "ice": "bg-ice",
    "normal": "bg-normal",
    "poison": "bg-poison",
    "psychic": "bg-psychic",
    "rock": "bg-rock",
    "steel": "bg-steel",
    "water": "bg-water",
}
export default PokemonTypeIcon;