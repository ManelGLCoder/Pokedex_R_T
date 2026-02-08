import PokemonType from "../elements/PokemonType"

const SectionStrengths = ({strengths}) =>{
    return(
        <section className="py-1">
            <span className="text-xl font-bold">Fortalezas</span>
            <div className={`flex flex-wrap justify-normal gap-2 px-5 my-1`}>
                {strengths && strengths.map((strenght, i)=>{
                    return (<PokemonType key={i} pokemonType={strenght.type} strengthMultiplier={strenght.multiplier} />)
                })}
            </div>
        </section>
    )
}

export default SectionStrengths