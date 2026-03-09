import "../../App.css"
import TypesOfThePokemon from "../elements/TypesOfThePokemon";

const PokemonOrangeCard = ({pokemon, showShiny}) => {
    return (
            <div className="py-1  text-sm/7 bg-orange-300 text-white">
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

