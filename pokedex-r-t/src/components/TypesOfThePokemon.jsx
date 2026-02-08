import "../App.css"
import PokemonType from "./PokemonType";
import PokemonTypeIcon from "./PokemonTypeIcon"

const TypesOfThePokemon = ({types, centered = true, onlyIcon = false}) => {
    return (
        <div className={`flex flex-wrap px-5 my-2 gap-1 ${centered? "justify-center" : "justify-normal"}`}>
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