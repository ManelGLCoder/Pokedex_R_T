// import { render, screen, cleanup, fireEvent } from '@testing-library/react'
// import { json } from 'node:stream/consumers'
// import { useState } from 'react'
import { afterEach, describe, it, expect, vi} from 'vitest'
import { 
        fetchPokemonDataSimplified, fetchPokemonData , fetchAbility, fetchNameInLang, fetchMove
     } from '../utilities/fetch-utilities'


describe('PokemApi REQUEST FUNCTIONS', () =>{
    afterEach(()=>{
        vi.clearAllMocks()
    })

    it('should [fetchPokemonData] be a function', ()=>{
        expect(typeof fetchPokemonData).toBe('function')
    })

    it('should fetch pokemon data by id or name from POKE-API',async ()=>{
        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(CHARIZARD_DATA),
            }),
        )
        
        const charizardData = await fetchPokemonData("Charizard")
        expect(charizardData).toEqual(CHARIZARD_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/Charizard/')

        vi.clearAllMocks()

        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(PIKACHU_DATA),
            }),
        )
        
        const pikachuData = await fetchPokemonData(PIKACHU_ID)
        expect(pikachuData).toEqual(PIKACHU_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/25/')
    })

    it('should [fetchAbility] be a function', async ()=>{
        expect(typeof fetchAbility).toBe('function')
    })

    it.skip('should fetch pokemon abilities from PokeAPI', async()=>{
        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(BLAZE_ABILITY_DATA),
            }),
        )
        
        const blazeData = await fetchAbility(BLAZE_ABILITY)
        expect(blazeData).toEqual(BLAZE_ABILITY_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/ability/${BLAZE_ABILITY}/`)

        vi.clearAllMocks()

        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(SOLAR_POWER_ABILITY_DATA),
            }),
        )
        
        const solarPowerData = await fetchAbility(SOLAR_POWER_ABILITY)
        expect(solarPowerData).toEqual(SOLAR_POWER_ABILITY_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/ability/${SOLAR_POWER_ABILITY}/`)
    })

    it('should [fetchNameInLang] be a function', async ()=>{
        expect(typeof fetchNameInLang).toBe('function')
    })

    it('should fetch ability name in correct language from PokeAPI', async()=>{
        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(BLAZE_ABILITY_DATA),
            }),
        )
        
        const blazeData = await fetchAbility(BLAZE_ABILITY)
        expect(blazeData).toEqual(BLAZE_ABILITY_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/ability/${BLAZE_ABILITY}/`)

        const blazeES = await fetchNameInLang(blazeData, "es")
        expect(blazeES).toBe(BLAZE_ABILITY_ES)

        vi.clearAllMocks()

        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(SOLAR_POWER_ABILITY_DATA),
            }),
        )
        
        const solarPowerData = await fetchAbility(SOLAR_POWER_ABILITY)
        expect(solarPowerData).toEqual(SOLAR_POWER_ABILITY_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/ability/${SOLAR_POWER_ABILITY}/`)

        const solarPowerES = await fetchNameInLang(solarPowerData, "es")
        expect(solarPowerES).toBe(SOLAR_POWER_ABILITY_ES)
    })

    it('should [fetchMove] be a function', async()=>{
        expect(typeof fetchMove).toBe('function')
    })

    it('should fetch data specific move from PokeAPI', async()=>{
        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(BRUTAL_SWING_MOVE_DATA),
            }),
        )
        
        const brutalSwingData = await fetchMove(BRUTAL_SWING_MOVE)
        expect(brutalSwingData).toEqual(BRUTAL_SWING_MOVE_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/move/${BRUTAL_SWING_MOVE}/`)

        vi.clearAllMocks()

        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(BREAKING_SWIPE_MOVE_DATA),
            }),
        )
        
        const breakingSwipeData = await fetchMove(BREAKING_SWIPE_MOVE)
        expect(breakingSwipeData).toEqual(BREAKING_SWIPE_MOVE_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/move/${BREAKING_SWIPE_MOVE}/`)
    })
    
    it('should fetch move name in correct language from PokeAPI', async()=>{
        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(BRUTAL_SWING_MOVE_DATA),
            }),
        )
        
        const brutalSwingData = await fetchMove(BRUTAL_SWING_MOVE)
        expect(brutalSwingData).toEqual(BRUTAL_SWING_MOVE_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/move/${BRUTAL_SWING_MOVE}/`)

        const brutalSwingES = await fetchNameInLang(brutalSwingData, "es")
        expect(brutalSwingES).toBe(BRUTAL_SWING_MOVE_ES)

        vi.clearAllMocks()

        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(BREAKING_SWIPE_MOVE_DATA),
            }),
        )
        
        const breakingSwipeData = await fetchMove(BREAKING_SWIPE_MOVE)
        expect(breakingSwipeData).toEqual(BREAKING_SWIPE_MOVE_DATA)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/move/${BREAKING_SWIPE_MOVE}/`)

        const breakingSwipeES = await fetchNameInLang(breakingSwipeData, "es")
        expect(breakingSwipeES).toBe(BREAKING_SWIPE_MOVE_ES)
    })

    it.todo('should fetch stats from PokeAPI', async()=>{
    })

    it.todo('should fetch stat in correct language from PokeAPI', async()=>{
    })

    it.todo('should fetch types from PokeAPI', async()=>{
    })

    it.todo('should fetch type in correct language from PokeAPI', async()=>{
    })

    it.todo('should fetch chain evolution from PokeAPI', async()=>{
    })

    it.todo('should fetch evolution data from PokeAPI', async()=>{
    })

    it.todo('should fetch simplified data(pokemonForm) from PokeAPI', async()=>{
    })

    it.todo('should get pokemon data needed for PokemonInfo section from PokeAPI', async()=>{
    })

    it.todo('should get pokemon data simplified needed for PokemonList section from PokeAPI', async()=>{
    })

    it.todo('should get sprites data from pokemonData', async()=>{
    })

    it.todo('should get moves data from pokemonData', async()=>{
    })

    it.todo('should get types data from pokemonData', async()=>{
    })

    it.todo('should get stats data from pokemonData', async()=>{
    })

    it.todo('should get evolution data from pokemonData', async()=>{
    })


    // afterEach(cleanup)
    // it('should render',() =>{
    //     render(<Calculator/>)
    // })

    // it('should render title correctly', ()=>{
    //     render(<Calculator/>)
    //     screen.getByText('Calculator')
    // })
})