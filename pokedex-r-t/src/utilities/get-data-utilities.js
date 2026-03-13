import { fetchType, fetchPokemonSimpleData, 
    fetchPokemonData, fetchPokemonSpeciesData, fetchAbilities,
    fetchEvolutionChainData, fetchEvolutionLineDataBy,
    fetchAllMovesInfo,fetchPokemonList
} from "./fetch-utilities"
import { POKEMON_TYPES, LIMIT_MOVES_FETCH_SAME_TIME } from "../dto/constants"

export const types = await getAllTypesIn("es")
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
    return simplePokemonInfo(rawPokeData,types)
    // return simplePokemonInfo(rawPokeData/*,types*/)
}

export function simplePokemonInfo(pokeData, allTypesData) {
    const idCompleted = `#${String(pokeData.id).padStart(4,'0')}`
    const namePokemon = pokeData.name[0].toUpperCase() + pokeData.name.slice(1)
    const sprite = pokeData.sprites.front_default
    const shinySprite = pokeData.sprites.front_shiny
    return {
        id: pokeData.id,
        idCompleted: idCompleted,
        name: namePokemon,
        types: getTypesData(pokeData.types, allTypesData),
        sprite: sprite,
        spriteShiny: shinySprite
    }
}

export function getSprite(pokeSimpleInfo){
    return pokeSimpleInfo.sprite
}

export function getShinySprite(pokemonSimpleInfo){
    return pokemonSimpleInfo.spriteShiny
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
    let nameInLang = data[key1].find((element) => {return element.language.name === lang})
    if (nameInLang === undefined){
        nameInLang = data[key1].find((element) => {return element.language.name === 'en'})
    }
    return  nameInLang[key2].replace(/(\r\n|\n|\r)/gm, " ")
}

export async function getPokemonInfo(pokemonId){
    const rawPokeData = await fetchPokemonData(pokemonId)
    const rawSpeciesData = await fetchPokemonSpeciesData(pokemonId)
    const abilitiesData = await fetchAbilities(rawPokeData)
    const evolutionData = await fetchEvolutionChainData(rawSpeciesData.evolution_chain.url)
    const evolutionsInfo = await fetchEvolutionLineDataBy(evolutionData)
    const movesNames = getAllMoveNames(rawPokeData)
    return pokemonInfo(
            rawPokeData, rawSpeciesData, types,abilitiesData, evolutionsInfo, movesNames
        )
}

export function pokemonInfo(
        pokeData, pokeSpeciesData, allTypesData,
        abilitiesData, evolutionInfo, movesNames,
    ) {
    return {
        simpleInfo: simplePokemonInfo(pokeData, allTypesData),
        species: getGeneraTextInLang(pokeSpeciesData, currlanguage),
        description: getFlavorTextInLang(pokeSpeciesData, currlanguage),
        height: decimetresToMeters(pokeData.height),
        weight: decimetresToMeters(pokeData.weight),
        abilities: getAbilities(abilitiesData, currlanguage),
        evolutions: evolutionInfo,
        moves: movesNames,
        stats: getStatsInfo(pokeData, pokeSpeciesData)
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

export function getAllMoveNames(pokeData){
    let movesNames = []
    for(let moveElement of pokeData.moves){
        movesNames.push(moveElement.move.name)
    }
    return movesNames
}

export function getMovesInfo(movesData){
    return movesData.map((move)=>getMoveInfo(move))
}

//TODO: Cuando se implemente cache que en esta función que cree o compruebe el id(nombre en ingles)
export function getMoveInfo(rawMoveData,){
    const nameInLang = getNameInLang(rawMoveData, 'es')
    const moveInfo = {
        id: rawMoveData.name,
        name: nameInLang,
        accuracy: rawMoveData.accuracy,
        power: rawMoveData.power,
        pp: rawMoveData.pp,
        type: rawMoveData.type.name,
        damageClass: rawMoveData.damage_class.name
    }
    return moveInfo
}

export function getStatsInfo(pokeData, pokeSpeciesData){
    let stats = {}
    pokeData.stats.forEach((s)=>{
        stats[`${s.stat.name}`] = s.base_stat
    })
    return {
        hp: stats['hp'],
        attack: stats['attack'],
        defense: stats['defense'],
        speed: stats['speed'],
        specialAttack: stats['special-attack'],
        specialDefense: stats['special-defense'],
        happiness:pokeSpeciesData.base_happiness,
        catchRatio: pokeSpeciesData.capture_rate,
        statMax:255,
        totalSum:534,
        totalSumMax: 1530
    }
}

export async function getListOfPokemon(){
    const listData = await fetchPokemonList()
    return listData.results.map((pokeData)=> {
        const id = pokeData.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')
        return id
    })
}