import '../../App.css'
import PokemonOrangeCard from './PokemonOrangeCard';
import PokemonVioletCard from './PokemonVioletCard';

function SectionAllPokemonData({pokeData}) {
    const shiny = false

    return (
    <>
        <PokemonOrangeCard pokeData={pokeData} showShiny={shiny}/>
        <PokemonVioletCard pokeData={pokeData} showShiny={shiny}/>
    </>
    )
}

export default SectionAllPokemonData