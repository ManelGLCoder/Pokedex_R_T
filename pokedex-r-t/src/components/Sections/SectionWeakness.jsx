import PokemonType from "../elements/PokemonType"
import ComingSoon from "../ComingSoon"

const SectionWeakness = ({weakness}) =>{
    return(
        <section className="py-1">
            <span className="text-xl font-bold">Debilidades</span>
            <div className={`flex flex-wrap justify-normal gap-2 px-5 my-1`}>
                <ComingSoon/>
                {/* {weakness && weakness.map((weak, i)=>{
                    return (<PokemonType key={i} pokemonType={weak.type} strengthMultiplier={weak.multiplier} />)
                })} */}
            </div>
        </section>
    )
}

export default SectionWeakness