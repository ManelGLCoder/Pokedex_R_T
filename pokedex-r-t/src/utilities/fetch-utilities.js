import {getSimplePokemonInfo } from "./get-data-utilities"
import { asyncPool } from "./async-pool"

export async function fetchPokemonSimpleData(pokemon){
    const pokemonFormData = await fetchData(`https://pokeapi.co/api/v2/pokemon-form/${pokemon}/`)
    if(pokemonFormData.sprites.front_default){
        return pokemonFormData
    }
    return await fetchData(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
}

async function fetchData(url) {
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
} 

export async function fetchPokemonData(pokemon){
    return await fetchData(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
}

export async function fetchAbilities(pokeData) {
    const abilitiesNames = pokeData.abilities.map((a)=> a.ability.name)
    return asyncPool(8, abilitiesNames, fetchAbility)
}

export async function fetchAbility(ability) {
    return await fetchData(`https://pokeapi.co/api/v2/ability/${ability}/`)
}

export async function fetchMove(move) {
    return await fetchData(`https://pokeapi.co/api/v2/move/${move}/`)
}

export async function fetchStat(stat) {
    return await fetchData(`https://pokeapi.co/api/v2/stat/${stat}/`)
}

export async function fetchType(type) {
    return await fetchData(`https://pokeapi.co/api/v2/type/${type}/`)
}

export async function fetchPokemonSpeciesData(pokemon) {
    return await fetchData(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`)
}

export async function fetchEvolutionChainData(url) {
    return await fetchData(url)
}

export async function fetchEvolutionLineDataBy(chainEvolutionData) {
    const id = chainEvolutionData.chain.species.url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/','')
    const pokemonInfo = await getSimplePokemonInfo(id)
    const evolutionsInfo = await fetchEvolutionsData(chainEvolutionData.chain.evolves_to)
    const pokemonEvLineInfo = {
            pokemonInfo: pokemonInfo,
            evolutions: evolutionsInfo
        }
    return pokemonEvLineInfo
}

const fetchEvolutionsData = async (evoData) =>{
    let evoPromises = []
    evoData.forEach(async(ev)=>{
        const promise =  fetchEvolutionData(ev)
        evoPromises.push(promise)
    })
    const evolutionsInfo = await Promise.all(evoPromises)
    return evolutionsInfo
}

const fetchEvolutionData = async(ev)=>{
    let evInfo 
    const id = ev.species.url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/','')
    const pokemonInfo = await getSimplePokemonInfo(id)
    if(Array.isArray(ev.evolves_to) && ev.evolves_to.length === 0){
        evInfo = {
            pokemonInfo: pokemonInfo,
            evolutions: null
        }
    }
    else{
        const evsInfo = await fetchEvolutionsData(ev.evolves_to)
        evInfo = {
            pokemonInfo: pokemonInfo,
            evolutions: evsInfo
        }
    }
    return evInfo
}

export async function fetchAllMovesInfo(movesName) {
    return asyncPool(8, movesName, fetchMove)
}

export async function fetchPokemonList(){
    return await fetchData(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000`)
}