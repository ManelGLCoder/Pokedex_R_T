import { fetchType, fetchPokemonSimpleData, fetchPokemonData, fetchPokemonSpeciesData, fetchAbilities} from "./fetch-utilities"
import { POKEMON_TYPES } from "../dto/constants"

// export let types = await getAllTypesIn("es")
export let currlanguage = 'es'
export async function getAllTypesIn(lang) {
    let typesPromises = []
    let esTypes = {}
    
    POKEMON_TYPES.forEach(type => {
        const typePromise = new Promise((resolve)=>{resolve(fetchType(type))})
        typesPromises.push(typePromise)
    }) 
    Promise.all(typesPromises).then(typesData=>{
        typesData.forEach((type)=>{
            esTypes[type.name] =  getNameInLang(type,lang)
        })
    })

    return esTypes
}

//TODO: falta variable global que guarde todos los tipos en español
export async function getSimplePokemonInfo(pokemonId){
    const rawPokeData = await fetchPokemonSimpleData(pokemonId)
    return simplePokemonInfo(rawPokeData)
}

export function simplePokemonInfo(pokeData, allTypesData) {
    const idCompleted = `#${String(pokeData.id).padStart(4,'0')}`
    const namePokemon = pokeData.name[0].toUpperCase() + pokeData.name.slice(1) 
    return {
        id: idCompleted,
        name: namePokemon,
        types: getTypesData(pokeData.types, allTypesData)
    }
}

export function getTypesData(typesWanted, allTypesData){
    let typesData = []
    typesWanted.forEach(type=>{
        const typeName = [type.type.name]
        typesData.push({[typeName]: allTypesData[typeName]})
    })
    return typesData
}

export function getNameInLang(data, language) {
    return getTextInLang(data, 'names', 'name', language)
}

const getTextInLang = (data, key1, key2, lang) =>{
    const nameInLang = data[key1].find((element) => {return element.language.name === lang})
    return  nameInLang[key2].replace(/(\r\n|\n|\r)/gm, " ")
}

export async function getPokemonInfo(pokemonId){
    const rawPokeData = await fetchPokemonData(pokemonId)
    const rawSpeciesData = await fetchPokemonSpeciesData(pokemonId)
    const abilitiesData = await fetchAbilities(rawPokeData)
    return pokemonInfo(rawPokeData, rawSpeciesData, abilitiesData)
}

export function pokemonInfo(pokeData, pokeSpeciesData, allTypesData, abilitiesData) {
    return {
        simpleInfo: simplePokemonInfo(pokeData, allTypesData),
        species: getGeneraTextInLang(pokeSpeciesData, currlanguage),
        description: getFlavorTextInLang(pokeSpeciesData, currlanguage),
        height: decimetresToMeters(pokeData.height),
        weight: decimetresToMeters(pokeData.weight),
        abilities: getAbilities(abilitiesData, currlanguage)
    }
}

function getFlavorTextInLang(data, language){
    return getTextInLang(data, 'flavor_text_entries', 'flavor_text', language)
}

function getGeneraTextInLang(data, language){
    return getTextInLang(data, 'genera', 'genus', language)
}

function decimetresToMeters(dm){
    return (dm / 10).toFixed(2)
}

export function getAbilities(abilitiesData, lang){
    let abilitiesInLang = []
    abilitiesData.forEach((abilityData)=>{
        abilitiesInLang.push(getAbilityInLang(abilityData,lang))
    })
    return abilitiesInLang
}

function getAbilityInLang(abilityData, lang){
    let abilityInLang
    abilityData.names.forEach((ability)=>{
        if(ability.language.name === lang){
            abilityInLang = ability.name
        }
    })
    return abilityInLang
}