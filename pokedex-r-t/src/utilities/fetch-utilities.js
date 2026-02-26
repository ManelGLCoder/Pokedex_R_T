// export function fetchNameInLang(data, language) {
//     const nameInLang = data.names.find((element) => {return element.language.name === language})
//     return  nameInLang.name
// }

import {getSimplePokemonInfo } from "./get-data-utilities"

export async function fetchPokemonSimpleData(pokemon){
    return await fetchData(`https://pokeapi.co/api/v2/pokemon-form/${pokemon}/`)
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
    const abilitiesNames = pokeData.abilities.map((ability)=> ability.name)

    let abilitiesPromises = []
    
    abilitiesNames.forEach(ability => {
        const abilityPromise = new Promise((resolve)=>{resolve(fetchAbility(ability))})
        abilitiesPromises.push(abilityPromise)
    }) 
    Promise.all(abilitiesPromises).then(abilitiesData=>{
        return abilitiesData
    })
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

//TODO: Refactorizar para que los fetch sean independiente de los gets
export async function fetchEvolutionLineDataBy(chainEvolutionData) {
    const pokemonInfo = await getSimplePokemonInfo(chainEvolutionData.chain.species.name)
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
    const pokemonInfo = await getSimplePokemonInfo(ev.species.name)
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
    let movePromises = []
    movesName.forEach( (name)=>{
        const movePromise =  new Promise((resolve)=>{resolve(fetchMove(name))})
        movePromises.push(movePromise)
    })
    return Promise.all(movePromises)
}