import "../../App.css"

const PokemonOrangeCard = ({pokemon, showShiny}) => {
    return (
            <div className="py-1  text-sm/7 bg-pokemon-bg text-white">
                <div className="flex justify-center">
                    <img 
                        className="size-44 sm:size-60" 
                        src={showShiny? pokemon.simpleInfo.spriteShiny : pokemon.simpleInfo.sprite}
                        alt={`${pokemon.simpleInfo.name} Icon`}
                    />
                </div>
                <br />
            </div>
    );
};

export default PokemonOrangeCard;

