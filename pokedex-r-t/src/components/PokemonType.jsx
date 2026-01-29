import React from "react";
import "../App.css"

const PokemonType = ({ pokemonType}) => {
    return (
    <div className={`grid max-w-fit grid-cols-3 gap-1 rounded-xl px-2 py-1.5 text-xs ${colorType[pokemonType]} text-white`}>
        {/* <div className="grid max-w-fit grid-cols-3 gap-1 rounded-xl px-2 py-1.5 text-xs bg-orange-400 text-white">*/}
        <img className="size-4" src={srcType(pokemonType)} alt="Fire Icon"/>
        <span className="col-span-2">{nameType[pokemonType]}</span>
    </div>
    );
};

const srcType = (pokemonType) => `src/assets/t_${pokemonType}.png`
const nameType = {
    "bug": "Bicho",
    "dark": "Siniestro",
    "dragon": "Dragon",
    "electric": "Electrico",
    "fairy": "Hada",
    "fighting": "Lucha",
    "fire": "Fuego",
    "flying": "Volador",
    "ghost": "Fantasma",
    "grass": "Planta",
    "ground": "Tierra",
    "ice": "Hielo",
    "normal": "Normal",
    "poison": "Veneno",
    "psychic": "Psiquico",
    "rock": "Roca",
    "steel": "Hierro",
    "water": "Agua",
}

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

// const ProgressBar = props =>{
//     const {width} = props
//     return(
//         <progress value={width} max={100}>{width}%</progress>
//     )
// }

// export default ProgressBar