import PokemonType from "./PokemonType"

const SectionWeakness = ({weakness}) =>{
    return(
        <section className="py-2">
            <span className="text-xl font-bold">Debilidades</span>
            <div className={`flex flex-wrap px-5 my-2 gap-1 justify-normal`}>
                {weakness && weakness.map((weak, i)=>{
                    return (<PokemonType key={i} pokemonType={weak.type} strengthMultiplier={weak.multiplier} />)
                })}
            </div>
        </section>
    )
}

export default SectionWeakness