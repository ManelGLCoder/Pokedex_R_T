import "../App.css"

const PokemonTypeIcon = ({ pokemonType}) => {
    return (
        <img className={`size-4 sm:size-8 rounded-full ${colorType[pokemonType]}`} src={srcType(pokemonType)} alt={`${pokemonType} Icon`}/>
    );
};

const srcType = (pokemonType) => `src/assets/types/t_${pokemonType}.png`

const colorType = {
    "bug": "bg-green-900",
    "dark": "bg-gray-800",
    "dragon": "bg-cyan-950",
    "electric": "bg-yellow-300",
    "fairy": "bg-fuchsia-400",
    "fighting": "bg-orange-700",
    "fire": "bg-orange-400",
    "flying": "bg-sky-300",
    "ghost": "bg-gray-950",
    "grass": "bg-lime-500",
    "ground": "bg-amber-900",
    "ice": "bg-blue-300",
    "normal": "bg-neutral-400",
    "poison": "bg-purple-900",
    "psychic": "bg-pink-500",
    "rock": "bg-stone-700",
    "steel": "bg-gray-400",
    "water": "bg-blue-400",
}
export default PokemonTypeIcon;