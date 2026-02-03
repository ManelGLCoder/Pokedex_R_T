import PokemonType from "./PokemonType"

const SectionStrengths = ({strengths}) =>{
    return(
        <section className="py-2">
            <span className="text-xl font-bold">Fortalezas</span>
            <div className={`flex flex-wrap px-5 my-2 gap-1 justify-normal`}>
                {strengths && strengths.map((strenght, i)=>{
                    return (<PokemonType key={i} pokemonType={strenght.type} strengthMultiplier={strenght.multiplier} />)
                })}
            </div>
        </section>
    )
}

export default SectionStrengths