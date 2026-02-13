import '../../App.css'
import PokemonOrangeCard from './PokemonOrangeCard';
import PokemonVioletCard from './PokemonVioletCard';

export async function getPokemonId(name){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${name}/`)
        const data = await response.json()
        return data.id
    }catch(error){
        console.log(error)
    }
}

export async function getPokemonDataById(id){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
}


function SectionAllPokemonData({pokeData}) {
    const shiny = false
    getPokemonId("Charizard")
    return (
    <>
        <PokemonOrangeCard pokeData={pokeData} showShiny={shiny}/>
        <PokemonVioletCard pokeData={pokeData} showShiny={shiny}/>
    </>
    )
}

export default SectionAllPokemonData