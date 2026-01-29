import "../App.css"
import PokemonType from "./PokemonType";

const TypesOfThePokemon = ({types}) => {
    return (
        <div className="flex flex-wrap px-5 my-2  gap-1 justify-normal">
            {types.map((type, i)=>{
                return (<PokemonType key={i} pokemonType={type} />)
            })}
        </div>
    );
};

export default TypesOfThePokemon;