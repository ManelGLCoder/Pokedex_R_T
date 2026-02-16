export function fetchNameInLang(data, language) {
    const nameInLang = data.names.find((element) => {return element.language.name === language})
    return  nameInLang.name
}

export async function fetchPokemonDataSimplified(pokemon){
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

export async function fetchAbility(ability) {
    return await fetchData(`https://pokeapi.co/api/v2/ability/${ability}/`)
}

export async function fetchMove(move) {
    return await fetchData(`https://pokeapi.co/api/v2/move/${move}/`)
}

export async function fetchStat(stat) {
    return await fetchData(`https://pokeapi.co/api/v2/stat/${stat}/`)
}

