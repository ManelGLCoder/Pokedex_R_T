import "../../App.css"

const PokemonType = ({ pokemonType, strengthMultiplier=null, weakMultiplier=null}) => {
    const simple = !strengthMultiplier && !weakMultiplier 
    const type = Object.keys(pokemonType)[0]
    const typeName = Object.values(pokemonType)[0]
    return (
    <div className={`grid grid-cols-3 gap-1 px-2 py-1.5 max-w-fit rounded-xl text-xs ${colorType[type]} text-white`}>
        <img className="size-4" src={srcType(type)} alt={`${typeName} Icon`}/>
        {
            simple && <span className="col-span-2">{typeName}</span> 
        }
        {
            !simple && 
            <>
                <span className="col-span-1">{typeName}</span>
                <span className="col-span-1 font-black">{strengthMultiplier ? strengthMultiplier : weakMultiplier}</span>
            </>
            
        }
    </div>
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
export default PokemonType;