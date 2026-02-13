// import { render, screen, cleanup, fireEvent } from '@testing-library/react'
// import { json } from 'node:stream/consumers'
// import { useState } from 'react'
import { afterEach, describe, it, expect, vi} from 'vitest'
import { getPokemonId, getPokemonDataById } from '../components/principal-sections/SectionAllPokemonData'


describe('PokemApi REQUEST FUNCTIONS', () =>{
    afterEach(()=>{
        vi.clearAllMocks()
    })

    it('should getPokemonId be a function', ()=>{
        expect(typeof getPokemonId).toBe('function')
    })

    it('should fetch pokemon id requested data from PokeApi', async ()=>{
        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(CHARIZARD_FORM_DATA),
            }),
        );
        
        const charizardId = await getPokemonId("Charizard")
        // console.log(`Charizard ID: ${CHARIZARD_ID}, id obtained: ${charizardId}`)
        expect(charizardId).toBe(CHARIZARD_ID)
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon-form/Charizard/')
        
        vi.clearAllMocks()

        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(PIKACHU_FORM_DATA),
            }),
        );
        
        const pikachuId = await getPokemonId("Pikachu")
        // console.log(`Pikachu ID: ${PIKACHU_ID}, id obtained: ${pikachuId}`)
        expect(pikachuId).toBe(PIKACHU_ID)
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon-form/Pikachu/')

    })

    it('should getPokemonDataById be a function', ()=>{
        expect(typeof getPokemonDataById).toBe('function')
    })

    it('should fetch pokemon data by id from POKE-API',async ()=>{
        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(CHARIZARD_DATA),
            }),
        );
        
        const charizardData = await getPokemonDataById(CHARIZARD_ID)
        expect(charizardData).toEqual(CHARIZARD_DATA)
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/6/')

        vi.clearAllMocks()

        global.fetch = vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve(PIKACHU_DATA),
            }),
        );
        
        const pikachuData = await getPokemonDataById(PIKACHU_ID)
        expect(pikachuData).toEqual(PIKACHU_DATA)
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/25/')
    })

    it.todo('should get abilities from PokeAPI', async()=>{
    })

    it.todo('should get sprites from PokeAPI', async()=>{
    })

    it.todo('should get moves from PokeAPI', async()=>{
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