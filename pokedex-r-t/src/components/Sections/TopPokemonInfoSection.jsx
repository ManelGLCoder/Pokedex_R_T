import ButtonReturnToPokedex from "../buttons/ButtonReturnToPokedex"
import TypesOfThePokemon from "../elements/TypesOfThePokemon"
const TopPokemonInfoSection = ({pokemon}) =>{
    return(
        <section className="flex flex-col sticky -top-0.5 z-2 bg-violet-400">
            <div className="flex py-2 rounded-t-xl bg-orange-300 text-white">
                <ButtonReturnToPokedex/>
                <div className="flex flex-1 gap-5 px-5 py-2 self-center text-xl sm:text-2xl font-bold">
                    <span className="flex-1">{pokemon.simpleInfo.idCompleted}</span>
                    <span className="flex-2">{pokemon.simpleInfo.name}</span>
                </div>
                <TypesOfThePokemon types={pokemon.simpleInfo.types} onlyIcon={true} centered={false}/>
            </div>
        </section>
    )
}

export default TopPokemonInfoSection