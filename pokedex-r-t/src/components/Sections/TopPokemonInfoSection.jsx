import ButtonReturnToPokedex from "../buttons/ButtonReturnToPokedex"
import TypesOfThePokemon from "../elements/TypesOfThePokemon"
import { TITLE_POKEMON_TEXT, TEXT_CENTERED } from "../../utilities/tailwind-utilities"
const TopPokemonInfoSection = ({pokemon}) =>{
    return(
        <section className="flex flex-col sticky -top-0.5 z-2 bg-violet-400">
            <div className="flex py-2 rounded-t-xl bg-orange-300">
                <ButtonReturnToPokedex/>
                <div className={`flex flex-1 sm:gap-5 px-1 sm:px-5 py-1 self-center ${TITLE_POKEMON_TEXT}`}>
                    <span className={`${TEXT_CENTERED}`}>{pokemon.simpleInfo.idCompleted}</span>
                    <span className={`flex-1 ${TEXT_CENTERED}`}>{pokemon.simpleInfo.name}</span>
                </div>
                <TypesOfThePokemon types={pokemon.simpleInfo.types} onlyIcon={true} centered={false}/>
            </div>
        </section>
    )
}

export default TopPokemonInfoSection