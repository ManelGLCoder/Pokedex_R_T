import './App.css'
import SectionAllPokemonData from './components/principal-sections/SectionAllPokemonData'
import SectionPokedexList from './components/principal-sections/SectionPokedexList'

import { getListOfPokemon, getInitialList} from './utilities/get-data-utilities';
import { useContext, useEffect } from 'react';
import { PokedexContext} from './contexts/PokedexContext.jsx';

function App() {
  const {setPokedexList, setIdList, inPokedex, setLoadingPokemons} = useContext(PokedexContext)
    useEffect(()=>{
      const initPokedexList = async () =>{
        setLoadingPokemons(true)
        const POKEMON_IDS_LIST = await getListOfPokemon()
        setIdList(POKEMON_IDS_LIST)
        return await getInitialList(POKEMON_IDS_LIST)
      }
        initPokedexList().then((result)=>{
        setPokedexList(result)
        setLoadingPokemons(false)
        })
      return
    },[])

    return (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="flex flex-1 justify-center min-w-dvw min-h-dvh bg-violet-400">
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