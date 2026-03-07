import "../../App.css"
import TypesOfThePokemon from "../elements/TypesOfThePokemon";

const PokemonOrangeCard = ({pokemon, showShiny}) => {
    return (
            <div className="py-3 rounded-t-xl text-sm/7 bg-orange-300 text-white">
                <div className="grid grid-cols-5 px-5 py-2 text-xl font-bold">
                    <span className="col-span-2">{pokemon.simpleInfo.name}</span>
                    <span className="col-start-5">{pokemon.simpleInfo.idCompleted}</span>
                </div>
                <TypesOfThePokemon types={pokemon.simpleInfo.types} centered={false}/>
                <div className="flex justify-center">
                    <img 
                        className="size-32" 
                        src={showShiny? pokemon.simpleInfo.spriteShiny : pokemon.simpleInfo.sprite}
                        alt={`${pokemon.simpleInfo.name} Icon`}
                    />
                </div>
                <br />
            </div>
    );
};

export default PokemonOrangeCard;

