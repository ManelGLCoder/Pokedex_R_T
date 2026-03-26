import "../../App.css"
import PokemonEvolution from "../pokemon/PokemonEvolution";

const SectionEvolutionLine = ({evolutionData}) => {
    const getLineEVolutionPokemon = (pokeData)=>{
        const pokemonInfo = pokeData.pokemonInfo
        
        if(pokeData.evolutions === null){
            return(
                <PokemonEvolution key={pokemonInfo.idCompleted} info={pokemonInfo} />
            )
        }        
        return(
            <div key={pokemonInfo.idCompleted} className="flex">
                <PokemonEvolution info={pokemonInfo}/>
                <div className="flex flex-col">
                    {
                        pokeData.evolutions.map((evo)=>{
                        return getLineEVolutionPokemon(evo)
                        })
                    }
                </div>
            </div>
        )
        
    }
    return (
        <section>
            <div className="flex flex-row justify-around gap-1 sm:gap-2 px-1 sm:px-5 py-2 sm:py-4 rounded-b-xl bg-secondary">
                {getLineEVolutionPokemon(evolutionData)}
            </div>
        </section>
    );
};

export default SectionEvolutionLine;