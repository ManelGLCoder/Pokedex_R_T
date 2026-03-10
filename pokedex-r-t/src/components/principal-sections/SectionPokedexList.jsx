import '../../App.css'
import SectionSearchPokemon from '../Sections/SectionSearchPokemon'
import PokedexElement from '../elements/PokedexElement'
import ButtonShowMorePokemon from '../buttons/ButtonShowMorePokemon.jsx';


import { useContext, useEffect } from 'react';
import { PokedexContext } from '../../contexts/PokedexContext.jsx';

function SectionPokedexList() {
    const {pokedexList} = useContext(PokedexContext)
    //TODO: implementar que muestre cargando cuando no estén listos
    useEffect(()=>{
        if(pokedexList.lenght === undefined){
            console.log(`pokedexList empty`)
        }else{
            console.log(pokedexList)
        }
        return 
    },[pokedexList])
    
    return (
    <div className='flex isolate flex-col min-w-dvw max-w-dvw max-h-dvh sm:min-w-2xl'>
        <section className="flex gap-2.5 px-5 py-5 rounded-t-xl bg-orange-300 text-lg sm:text-2xl font-bold text-white">
            <span className="justify-self-left self-center">Pokédex</span>
            <SectionSearchPokemon/>
        </section>
        <section className={`relative overflow-y-auto snap-y snap-proximity flex flex-1 flex-col gap-1.5 
                -top-4 rounded-t-xl px-2 py-2 text-sm/7 bg-violet-950 text-white [&::-webkit-scrollbar]:w-0`}>
                    {
                        pokedexList.map((pokemon, i)=>{
                            return(<PokedexElement key={i} pokeElementData={pokemon}/>)
                        })
                    }
        </section>
        <div className='relative -top-4 flex rounded-b-xl px-2 py-2 text-sm/7 bg-violet-950 text-white'>
            <ButtonShowMorePokemon/>
        </div>        
    </div>
    )
}

export default SectionPokedexList