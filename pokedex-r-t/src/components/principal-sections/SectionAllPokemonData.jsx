import '../../App.css'
import TopPokemonInfoSection from '../Sections/TopPokemonInfoSection';
import PokemonOrangeCard from './PokemonOrangeCard';
import PokemonVioletCard from './PokemonVioletCard';
import { PokedexContext } from '../../contexts/PokedexContext';
import { useContext } from 'react';

function SectionAllPokemonData() {
    const {pokemonInfo, showShiny} = useContext(PokedexContext)

    return (
    <>
        <TopPokemonInfoSection pokemon={pokemonInfo}/>
        <PokemonOrangeCard pokemon={pokemonInfo} showShiny={showShiny}/>
        <PokemonVioletCard pokeData={pokemonInfo}/>
    </>
    )
}

export default SectionAllPokemonData