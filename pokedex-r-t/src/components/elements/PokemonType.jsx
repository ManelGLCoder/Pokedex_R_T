import "../../App.css"
import { SRC_TYPE, COLOR_TYPE } from "../../dto/constants";

const PokemonType = ({ pokemonType, strengthMultiplier=null, weakMultiplier=null}) => {
    const simple = !strengthMultiplier && !weakMultiplier 
    const type = Object.keys(pokemonType)[0]
    const typeName = Object.values(pokemonType)[0]
    return (
    <div className={`grid grid-cols-3 gap-1 px-2 py-1.5 max-w-fit rounded-xl text-xs ${COLOR_TYPE[type]} text-white`}>
        <img className="size-4" src={SRC_TYPE(type)} alt={`${typeName} Icon`}/>
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

export default PokemonType;