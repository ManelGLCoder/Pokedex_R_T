import '../../App.css'
import SectionSearchPokemon from '../Sections/SectionSearchPokemon'
import PokedexElement from '../elements/PokedexElement'

function SectionPokedexList({pokeListData}) {
    return (
    <div className='flex isolate flex-col min-w-dvw max-w-dvw max-h-dvh sm:min-w-2xl'>
        <section className="flex gap-2.5 px-5 py-5 rounded-t-xl bg-orange-300 text-lg sm:text-2xl font-bold text-white">
            <span className="justify-self-left self-center">Pokédex</span>
            <SectionSearchPokemon/>
        </section>
        <section className={`relative overflow-y-auto snap-y snap-proximity flex flex-1 flex-col gap-1.5 
                -top-4 rounded-xl px-2 py-2 text-sm/7 bg-violet-950 text-white [&::-webkit-scrollbar]:w-0`}>
                    {
                        pokeListData.map((pokemon, i)=>{
                            return(<PokedexElement key={i} pokeElementData={pokemon}/>)
                        })
                    }
        </section>
        
    </div>
    )
}

export default SectionPokedexList