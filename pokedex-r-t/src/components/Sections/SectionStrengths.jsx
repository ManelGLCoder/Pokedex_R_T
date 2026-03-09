import PokemonType from "../elements/PokemonType"
import ComingSoon from "../ComingSoon"

const SectionStrengths = ({strengths}) =>{
    return(
        <section className="py-1">
            <span className="text-xl font-bold">Fortalezas</span>
            <div className={`flex flex-wrap justify-normal gap-2 px-5 my-1`}>
                <ComingSoon/>
                {/*strengths && strengths.map((strenght, i)=>{
                    return (<PokemonType key={i} pokemonType={strenght.type} strengthMultiplier={strenght.multiplier} />)
                })*/}
            </div> 
        </section>
    )
}

export default SectionStrengths