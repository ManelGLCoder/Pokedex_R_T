import "../../App.css"
import PokemonType from "./PokemonType";
import PokemonTypeIcon from "./PokemonTypeIcon"

const TypesOfThePokemon = ({types, centered = true, onlyIcon = false}) => {
    return (
        <div className={`flex ${!onlyIcon && "flex-wrap"} ${centered? "justify-center" : "justify-normal"} gap-1 px-5 my-2`}>
            {types.map((type, i)=>{
                if(onlyIcon){
                    const typeName = Object.keys(type)[0]
                    return (<PokemonTypeIcon key={i} pokemonType={typeName} />)
                }
                return (<PokemonType key={i} pokemonType={type} />)
            })}
        </div>
    );
};

export default TypesOfThePokemon;