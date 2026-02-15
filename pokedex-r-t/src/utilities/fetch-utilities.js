export async function fetchPokemonDataSimplified(pokemon){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemon}/`)
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
}

export async function fetchPokemonData(pokemon){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
}

export async function fetchAbility(ability) {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/ability/${ability}/`)
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
}

export async function fetchNameAbilityInLang(abilityData, language) {
    const abilityInLang = abilityData.names.find((element) => {return element.language.name === language})
    return  abilityInLang.name
}
