import './App.css'
import SectionAllPokemonData from './components/principal-sections/SectionAllPokemonData'
import SectionPokedexList from './components/principal-sections/SectionPokedexList'

import { getListOfPokemon, getInitialList} from './utilities/get-data-utilities';
import { useContext, useEffect } from 'react';
import { PokedexContext} from './contexts/PokedexContext.jsx';

  //TODO: [DONE] hacer función para obtener los datos para la pokedex
  //TODO: [DONE] primero que muestre X pokemon en la pokedex
  //TODO: [DONE/ALTERNATIVE]segundo que vaya añadiendo en base vayas bajando
  //TODO: [DONE]tercero que al seleccionar un pokemon se muestren sus datos
  //TODO: [DONE]Crear botón para volver a la pokedex 
  //TODO: [DONE]No permitir pulsar botón de mostrar más si no ha acabado de cargar los pokemon
  //TODO: [DONE]Las evoluciones sean botones a ese pokemon
  //TODO: [DONE]Los pokemon de la lista tengan hover
  //TODO: [DONE/ALTERNATIVE]Que se guarde en cache y no haga llamadas si ya se tiene(no cache, con useContext)
  //TODO: [DONE]Refactorizar PokedexContext y funciones relacionadas(al final solo movido funciones)
  //TODO: [DONE]Buscador pokemon
  //TODO: [DONE]Pokedex no muestre en su listado las formas alternativas por ahora  
  //TODO: [DONE]Al volver a la pokedex se mantenga el scroll en el pokemon que has visto
  //TODO: [DONE]Nombres en la lista sin guiones(hacer parecido a la búsqueda)
  //TODO: [DONE]Mirar porque no muestra Xerneas, porque peta con Deoxys,etc
  //TODO: [DONE]Botones showMore se escondan cuando ya no hay más que mostrar
  //TODO: [DONE]Mirar nombres largos en apartado del pokemon info o arreglar tamaño botón de retorno
  //TODO: [DONE]Arreglar diferencia ancho entre sección de descripción y sección de stats
  //TODO: Añadir mi logo(botón por ahora no redirecciona)
  //![WIP]
  //TODO: Adaptar para inglés y español + botón idiomas
  //TODO: Mirar de arreglar que para los test requiera de comentar ciertas lineas del archivo get_data_utilities
  //TODO: Cambiar estilo ScrollBars
  //TODO: Revisar llamadas de re renderizar(p.e. ButtonReturnToPokedex se crea 3 veces)
  //TODO: Optimizaciones
  //TODO: Púlido arte(paleta colores)
  //TODO: añadir juicy effects

function App() {
  const {setPokedexList, setIdList, inPokedex, setLoadingPokemons} = useContext(PokedexContext)

    //TODO: Revisar tema si se actualiza más de lo que debería
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
      return ()=>{}
    },[])

    return (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="flex justify-center min-w-dvw min-h-dvh py-2 bg-violet-400">
            <div className="flex-col justify-center min-w-screen sm:min-w-md max-w-11/12 sm:max-w-2xl max-h-screen overflow-y-auto"
            id='content_screen'>
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
