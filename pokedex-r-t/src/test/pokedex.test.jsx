import { afterEach, describe, it, expect, vi} from 'vitest'
import { 
        fetchPokemonSimpleData, fetchPokemonData , fetchAbility, fetchMove,
        fetchStat, fetchType, fetchPokemonSpeciesData, fetchEvolutionChainData
    } from '../utilities/fetch-utilities'

import { 
    simplePokemonInfo, pokemonInfo, getTypesData, getNameES,
    getSprite, getShinySprite
} from '../utilities/get-data-utilities'

describe('PokemApi REQUEST FUNCTIONS', () =>{
    afterEach(()=>{
        vi.clearAllMocks()
    })

    it('should [fetchPokemonData] be a function', ()=>{
        expect(typeof fetchPokemonData).toBe('function')
    })

    it('should fetch pokemon data by id or name from POKE-API',async ()=>{
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.CHARIZARD_DATA),
            }),
        )
        
        const charizardData = await fetchPokemonData("Charizard")
        expect(charizardData).toEqual(globalThis.CHARIZARD_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/Charizard/')

        vi.clearAllMocks()

        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.PIKACHU_DATA),
            }),
        )
        
        const pikachuData = await fetchPokemonData(globalThis.PIKACHU_ID)
        expect(pikachuData).toEqual(globalThis.PIKACHU_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/25/')
    })

    it('should [fetchAbility] be a function', async ()=>{
        expect(typeof fetchAbility).toBe('function')
    })

    it.skip('should fetch pokemon abilities from PokeAPI', async()=>{
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.BLAZE_ABILITY_DATA),
            }),
        )
        
        const blazeData = await fetchAbility(globalThis.BLAZE_ABILITY)
        expect(blazeData).toEqual(globalThis.BLAZE_ABILITY_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/ability/${globalThis.BLAZE_ABILITY}/`)

        vi.clearAllMocks()

        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.SOLAR_POWER_ABILITY_DATA),
            }),
        )
        
        const solarPowerData = await fetchAbility(globalThis.SOLAR_POWER_ABILITY)
        expect(solarPowerData).toEqual(globalThis.SOLAR_POWER_ABILITY_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/ability/${globalThis.SOLAR_POWER_ABILITY}/`)
    })

    it('should fetch ability name in correct language from PokeAPI', async()=>{
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.BLAZE_ABILITY_DATA),
            }),
        )
        
        const blazeData = await fetchAbility(globalThis.BLAZE_ABILITY)
        expect(blazeData).toEqual(globalThis.BLAZE_ABILITY_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/ability/${globalThis.BLAZE_ABILITY}/`)

        const blazeES = getNameES(blazeData)
        expect(blazeES).toBe(globalThis.BLAZE_ABILITY_ES)

        vi.clearAllMocks()

        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.SOLAR_POWER_ABILITY_DATA),
            }),
        )
        
        const solarPowerData = await fetchAbility(globalThis.SOLAR_POWER_ABILITY)
        expect(solarPowerData).toEqual(globalThis.SOLAR_POWER_ABILITY_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/ability/${globalThis.SOLAR_POWER_ABILITY}/`)

        const solarPowerES = getNameES(solarPowerData)
        expect(solarPowerES).toBe(globalThis.SOLAR_POWER_ABILITY_ES)
    })

    it('should [fetchMove] be a function', async()=>{
        expect(typeof fetchMove).toBe('function')
    })

    it('should fetch data specific move from PokeAPI', async()=>{
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.BRUTAL_SWING_MOVE_DATA),
            }),
        )
        
        const brutalSwingData = await fetchMove(globalThis.BRUTAL_SWING_MOVE)
        expect(brutalSwingData).toEqual(globalThis.BRUTAL_SWING_MOVE_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/move/${globalThis.BRUTAL_SWING_MOVE}/`)

        vi.clearAllMocks()

        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.BREAKING_SWIPE_MOVE_DATA),
            }),
        )
        
        const breakingSwipeData = await fetchMove(globalThis.BREAKING_SWIPE_MOVE)
        expect(breakingSwipeData).toEqual(globalThis.BREAKING_SWIPE_MOVE_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/move/${globalThis.BREAKING_SWIPE_MOVE}/`)
    })
    
    it('should fetch move name in correct language from PokeAPI', async()=>{
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.BRUTAL_SWING_MOVE_DATA),
            }),
        )
        
        const brutalSwingData = await fetchMove(globalThis.BRUTAL_SWING_MOVE)
        expect(brutalSwingData).toEqual(globalThis.BRUTAL_SWING_MOVE_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/move/${globalThis.BRUTAL_SWING_MOVE}/`)

        const brutalSwingES = getNameES(brutalSwingData)
        expect(brutalSwingES).toBe(globalThis.BRUTAL_SWING_MOVE_ES)

        vi.clearAllMocks()

        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.BREAKING_SWIPE_MOVE_DATA),
            }),
        )
        
        const breakingSwipeData = await fetchMove(globalThis.BREAKING_SWIPE_MOVE)
        expect(breakingSwipeData).toEqual(globalThis.BREAKING_SWIPE_MOVE_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/move/${globalThis.BREAKING_SWIPE_MOVE}/`)

        const breakingSwipeES = getNameES(breakingSwipeData)
        expect(breakingSwipeES).toBe(globalThis.BREAKING_SWIPE_MOVE_ES)
    })

    it('should fetch stat in correct language from PokeAPI', async()=>{
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.HP_STAT_DATA),
            }),
        )
        
        const hpData = await fetchStat(globalThis.HP_STAT_ID)
        expect(hpData).toEqual(globalThis.HP_STAT_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/stat/${globalThis.HP_STAT_ID}/`)

        const hpES = getNameES(hpData)
        expect(hpES).toBe(globalThis.HP_STAT_ES)

        vi.clearAllMocks()

        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.ATTACK_STAT_DATA),
            }),
        )
        
        const attackData = await fetchStat(globalThis.ATTACK_STAT_ID)
        expect(attackData).toEqual(globalThis.ATTACK_STAT_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/stat/${globalThis.ATTACK_STAT_ID}/`)

        const attackES = getNameES(attackData)
        expect(attackES).toBe(globalThis.ATTACK_STAT_ES)
    })

    it('should fetch type in correct language from PokeAPI', async()=>{
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.FIRE_TYPE_DATA),
            }),
        )
        
        const fireData = await fetchType(globalThis.FIRE_TYPE_ID)
        expect(fireData).toEqual(globalThis.FIRE_TYPE_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/type/${globalThis.FIRE_TYPE_ID}/`)

        const fireES = getNameES(fireData)
        expect(fireES).toBe(globalThis.FIRE_TYPE_ES)

        vi.clearAllMocks()

        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.FLYING_TYPE_DATA),
            }),
        )
        
        const flyingData = await fetchType(globalThis.FLYING_TYPE_ID)
        expect(flyingData).toEqual(globalThis.FLYING_TYPE_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/type/${globalThis.FLYING_TYPE_ID}/`)

        const flyingES = getNameES(flyingData)
        expect(flyingES).toBe(globalThis.FLYING_TYPE_ES)
    })

    it('should fetch pokemon species data from PokeAPI', async()=>{
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.CHARIZARD_SPECIES_DATA),
            }),
        )
        
        const speciesData = await fetchPokemonSpeciesData(globalThis.CHARIZARD_ID)
        expect(speciesData).toEqual(globalThis.CHARIZARD_SPECIES_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/pokemon-species/${globalThis.CHARIZARD_ID}/`)
    })

    it('should fetch chain evolution data from PokeAPI', async()=>{
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.CHARIZARD_EVOLUTION_CHAIN_DATA),
            }),
        )
        
        const evChainData = await fetchEvolutionChainData(globalThis.CHARIZARD_SPECIES_DATA.evolution_chain.url)
        expect(evChainData).toEqual(globalThis.CHARIZARD_EVOLUTION_CHAIN_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/evolution-chain/${globalThis.CHARIZARD_EVOLUTION_CHAIN_ID}/`)
    })

    it('should fetch simple data(pokemonForm) from PokeAPI', async()=>{
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.CHARIZARD_FORM_DATA),
            }),
        )
        
        const charizardSimpleData = await fetchPokemonSimpleData("Charizard")
        expect(charizardSimpleData).toEqual(globalThis.CHARIZARD_FORM_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon-form/Charizard/')

        vi.clearAllMocks()

        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(globalThis.PIKACHU_FORM_DATA),
            }),
        )
        
        const pikachuSimpleData = await fetchPokemonSimpleData(globalThis.PIKACHU_ID)
        expect(pikachuSimpleData).toEqual(globalThis.PIKACHU_FORM_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon-form/25/')
    })

    it('should get pokemon data needed for PokemonInfo section from PokeAPI', ()=>{
        const charizardData = pokemonInfo(
            globalThis.CHARIZARD_DATA,
            globalThis.CHARIZARD_SPECIES_DATA,
            globalThis.CHARIZARD_ABILITIES_DATA,
            globalThis.CHARIZARD_EVOLUTION_INFO,
            globalThis.CHARIZARD_FIVE_MOVES_NAMES,
        )
        expect(charizardData).toEqual(globalThis.CHARIZARD_DATA_INFO)
    })

    it('should get pokemon types data', ()=>{
        const typesData = getTypesData(globalThis.CHARIZARD_FORM_DATA.types)
        expect(typesData).toEqual(globalThis.CHARIZARD_DATA_SIMPLE_INFO.types)
    })

    it('should get pokemon data simplified needed for PokemonList section from PokeAPI', ()=>{
        const charizardSimpleData = simplePokemonInfo(globalThis.CHARIZARD_FORM_DATA)
        expect(charizardSimpleData).toEqual(globalThis.CHARIZARD_DATA_SIMPLE_INFO)
    })

    it('should get sprites data from pokemonData', ()=>{
        const simpleInfo = globalThis.CHARIZARD_DATA_INFO.simpleInfo
        const sprite = getSprite(simpleInfo)
        const spriteShiny = getShinySprite(simpleInfo)
        expect(sprite).toEqual(globalThis.CHARIZARD_DATA_INFO.simpleInfo.sprite)
        expect(spriteShiny).toEqual(globalThis.CHARIZARD_DATA_INFO.simpleInfo.spriteShiny)
    })
})