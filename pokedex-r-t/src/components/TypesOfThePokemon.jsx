import "../App.css"
import PokemonType from "./PokemonType";

const TypesOfThePokemon = ({types}) => {
    return (
        <div className="flex flex-wrap justify-normal gap-1 my-2 px-5">
            {types.map((type, i)=>{
                return (<PokemonType key={i} pokemonType={type} />)
            })}
        </div>
    );
};

export default TypesOfThePokemon;