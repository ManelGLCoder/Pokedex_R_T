import '../../App.css'
import SectionSearchPokemon from '../Sections/SectionSearchPokemon'
import PokedexElement from '../elements/PokedexElement'
import ButtonShowMorePokemon from '../buttons/ButtonShowMorePokemon.jsx';
import ButtonManelGLCoder from '../buttons/ButtonManelGLCoder.jsx';

import { useContext, useEffect } from 'react';
import { PokedexContext } from '../../contexts/PokedexContext.jsx';

function SectionPokedexList() {
    const {pokedexList, pokedexScrollY} = useContext(PokedexContext)
    useEffect(()=>{
        const pokedexScroll = document.getElementById('pokedexScrollingList')
        pokedexScroll.scrollTo(0,pokedexScrollY)
        return 
    },[pokedexScrollY])
    
    return (
    <div className='flex flex-col py-2 min-w-dvw max-w-dvw max-h-dvh sm:min-w-2xl'>
        <section className="flex flex-col gap-1 px-5 py-2 rounded-t-xl bg-principal ">
            <span className="justify-self-left self-center font-title font text-4xl text-white">Pokédex</span>
            <SectionSearchPokemon/>
            <br />
        </section>
        <section className={`relative overflow-y-auto snap-y snap-proximity flex flex-1 flex-col gap-1.5 
                -top-4 rounded-t-xl px-2 py-2 text-sm/7 bg-secondary text-white [&::-webkit-scrollbar]:w-0`}
                id='pokedexScrollingList'>
                    {
                        pokedexList.map((pokemon, i)=>{
                            return(<PokedexElement key={i} pokeElementData={pokemon}/>)
                        })
                    }
        </section>
        <div className='relative -top-4 flex rounded-b-xl px-2 py-2 text-sm/7 bg-principal text-white'>
            <ButtonShowMorePokemon/>
        </div>
        <ButtonManelGLCoder/>
    </div>
    )
}

export default SectionPokedexList