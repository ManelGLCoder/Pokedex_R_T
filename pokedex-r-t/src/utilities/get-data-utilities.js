import { fetchPokemonSimpleData, 
    fetchPokemonData, fetchPokemonSpeciesData, fetchAbilities,
    fetchEvolutionChainData, fetchEvolutionLineDataBy,
    fetchPokemonList } from "./fetch-utilities"
import { POKEMON_TYPES_ES, LIMIT_MOVES_FETCH_SAME_TIME,
        LIMIT_POKEMON_LIST_FETCH_SAME_TIME, MAX_NUMBER_OF_POKEMON,
        ID_START_POKEMONS_ALTERNATIVE_FORMS, ES, EN } from "../dto/constants"

export const typesES = POKEMON_TYPES_ES

export async function getSimplePokemonInfo(pokemonId){
    const rawPokeData = await fetchPokemonSimpleData(pokemonId)
    return simplePokemonInfo(rawPokeData)
}

export function simplePokemonInfo(pokeData) {
    const idCompleted = `#${String(pokeData.id).padStart(4,'0')}`
    const namePokemon = getNameCleaned(pokeData.name)
    const sprite = pokeData.sprites.front_default
    const shinySprite = pokeData.sprites.front_shiny
    return {
        id: pokeData.id,
        idCompleted: idCompleted,
        name: namePokemon,
        types: getTypesData(pokeData.types),
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

export function getTypesData(typesWanted){
    let typesData = []
    typesWanted.forEach(type=>{
        const typeName = [type.type.name]
        typesData.push({[typeName]: typesES[typeName]})
    })
    return typesData
}

export function getNameES(data) {
    return getTextES(data, 'names', 'name')
}

const getTextES = (data, key1, key2) =>{
    let nameInLang = data[key1].find((element) => {return element.language.name === ES})
    if (nameInLang === undefined){
        nameInLang = data[key1].find((element) => {return element.language.name === EN})
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
            rawPokeData, rawSpeciesData,abilitiesData, evolutionsInfo, movesNames
        )
}

export function pokemonInfo(
        pokeData, pokeSpeciesData, abilitiesData,
        evolutionInfo, movesNames,
    ) {
    return {
        simpleInfo: simplePokemonInfo(pokeData),
        species: getGeneraTextES(pokeSpeciesData),
        description: getFlavorTextES(pokeSpeciesData),
        height: decimetresToMeters(pokeData.height),
        weight: decimetresToMeters(pokeData.weight),
        abilities: getAbilities(abilitiesData),
        evolutions: evolutionInfo,
        moves: movesNames,
        stats: getStatsInfo(pokeData, pokeSpeciesData)
    }
}

function getFlavorTextES(data){
    return getTextES(data, 'flavor_text_entries', 'flavor_text')
}

function getGeneraTextES(data){
    return getTextES(data, 'genera', 'genus')
}

function decimetresToMeters(dm){
    return (dm / 10).toFixed(2)
}

export function getAbilities(abilitiesData){
    let abilitiesES = []
    abilitiesData.forEach((abilityData)=>{
        abilitiesES.push(getAbilityES(abilityData))
    })
    return abilitiesES
}

function getAbilityES(abilityData){
    let abilityES
    abilityData.names.forEach((ability)=>{
        if(ability.language.name === ES){
            abilityES = ability.name
        }
    })
    return abilityES
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

export function getMoveInfo(rawMoveData,){
    const nameES = getNameES(rawMoveData)
    const moveInfo = {
        id: rawMoveData.name,
        name: nameES,
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
    let pokeList = {}
    listData.results.map((pokeData)=> {
        const id = pokeData.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')
        if(id >= ID_START_POKEMONS_ALTERNATIVE_FORMS){
            return
        }
        const name = pokeData.name
        pokeList[`${id}`] = name
    })
    return pokeList
}

let lastPokemonId = 0
export const getInitialList = async(pokemonIDsList) =>{
    return await getPokemonList(Object.keys(pokemonIDsList), 0)
}

const getPokemonList = (pokemonIDsList, startId = lastPokemonId + 1) =>{
    let listPromise = []
    const maxIndex = startId + LIMIT_POKEMON_LIST_FETCH_SAME_TIME -1
    for(let i = startId; i <= maxIndex; i++){
        if(i >= MAX_NUMBER_OF_POKEMON || 
            pokemonIDsList[i] >= ID_START_POKEMONS_ALTERNATIVE_FORMS ||
            i === pokemonIDsList.length )
        {
            break
        }
        const pokemonPromise = getSimplePokemonInfo(pokemonIDsList[i])
        listPromise.push(pokemonPromise)
        lastPokemonId = i
    }
    return Promise.all(listPromise)
}



export const getNextPokemons = async(pokemonIDsList)=>{
    return await getPokemonList(pokemonIDsList)
}

let lastMoveId = 0
export const getMovesNamesLimited = (movesName, startIndex = lastMoveId + 1) => 
    {
    let moves = []
    const maxIndex = Math.min(startIndex + LIMIT_MOVES_FETCH_SAME_TIME, movesName.length-1)
    for(let i = startIndex; i <= maxIndex; i ++){
        if(i >= movesName.length){
            break
        }
        moves.push(movesName[i])
        lastMoveId = i
    }
    return moves
}

export const getNameCleaned = (name) =>{
    const nameWithSpace = name.replaceAll('-',' ')
    const words = nameWithSpace.split(' ')
    const nameCapitalized = words.map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')
    return nameCapitalized
}