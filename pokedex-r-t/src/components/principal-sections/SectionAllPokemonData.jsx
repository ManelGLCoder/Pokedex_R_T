import '../../App.css'
import TopPokemonInfoSection from '../Sections/TopPokemonInfoSection';
import PokemonOrangeCard from './PokemonOrangeCard';
import PokemonVioletCard from './PokemonVioletCard';
import ButtonManelGLCoder from '../buttons/ButtonManelGLCoder';
import { PokedexContext } from '../../contexts/PokedexContext';
import { useContext } from 'react';

function SectionAllPokemonData() {
    const {pokemonInfo, showShiny} = useContext(PokedexContext)

    return (
    <section className='py-2'>
        <TopPokemonInfoSection pokemon={pokemonInfo}/>
        <PokemonOrangeCard pokemon={pokemonInfo} showShiny={showShiny}/>
        <PokemonVioletCard pokeData={pokemonInfo}/>
        <ButtonManelGLCoder/>
    </section>
    )
}

export default SectionAllPokemonData