import './App.css'
import SectionAllPokemonData from './components/principal-sections/SectionAllPokemonData'
import SectionPokedexList from './components/principal-sections/SectionPokedexList'

import { getListOfPokemon, getInitialListIncremental } from './utilities/get-data-utilities';
import { useContext, useEffect } from 'react';
import { PokedexContext} from './contexts/PokedexContext.jsx';

function App() {
  const {idList, pokedexList, setPokedexList, setIdList, inPokedex, setLoadingPokemons} = useContext(PokedexContext)
    useEffect(()=>{
      if (idList.length > 0 && pokedexList.length > 0) return

      const initPokedexList = async () =>{
        setLoadingPokemons(true)
        const POKEMON_IDS_LIST = await getListOfPokemon()
        setIdList(POKEMON_IDS_LIST)
        setPokedexList([])
        await getInitialListIncremental(POKEMON_IDS_LIST, (pokemon) => {
          setPokedexList(prev => [...prev, pokemon])
        })
        setLoadingPokemons(false)
      }
        initPokedexList()
      return
    },[])

    return (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="flex flex-1 justify-center min-w-dvw min-h-dvh bg-page-bg">
            <div className="flex-col justify-center min-w-screen sm:min-w-md max-w-11/12 sm:max-w-2xl">
                {
                    inPokedex? 
                    <SectionPokedexList/> :
                    <SectionAllPokemonData/>
                }
            </div>
        </div>
    </>
    )
}

export default App