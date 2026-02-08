import "../App.css"
import PokemonType from "./PokemonType";
import PokemonTypeIcon from "./PokemonTypeIcon"

const TypesOfThePokemon = ({types, centered = true, onlyIcon = false}) => {
    return (
        <div className={`flex ${!onlyIcon && "flex-wrap"} ${centered? "justify-center" : "justify-normal"} gap-1 px-5 my-2`}>
            {types.map((type, i)=>{
                if(onlyIcon){
                    return (<PokemonTypeIcon key={i} pokemonType={type} />)
                }
                return (<PokemonType key={i} pokemonType={type} />)
            })}
        </div>
    );
};

export default TypesOfThePokemon;