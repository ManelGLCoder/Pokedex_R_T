import { fetchType, fetchPokemonSimpleData} from "./fetch-utilities"
import { POKEMON_TYPES } from "../dto/constants"

//TODO: Mirar si se puede meter algun #region condicional 
// TODO: que permita que la variable en test no se inicie
// export let types = await getAllTypesIn("es")
export async function simplePokemonInfo(pokeData, allTypesData) {
    const idCompleted = `#${String(pokeData.id).padStart(4,'0')}`
    const namePokemon = pokeData.name[0].toUpperCase() + pokeData.name.slice(1) 
    return {
        id: idCompleted,
        name: namePokemon,
        types: getTypesData(pokeData.types, allTypesData)
    }
}

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

export function getTypesData(typesWanted, allTypesData){
    let typesData = []
    typesWanted.forEach(type=>{
        const typeName = [type.type.name]
        typesData.push({[typeName]: allTypesData[typeName]})
    })
    return typesData
}

export function getNameInLang(data, language) {
    const nameInLang = data.names.find((element) => {return element.language.name === language})
    return  nameInLang.name
}

//TODO: falta variable global que guarde todos los tipos en español
export async function getSimplePokemonInfo(pokemonId){
    const rawPokeData = await fetchPokemonSimpleData(pokemonId)
    return simplePokemonInfo(rawPokeData)
}