import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import { getPokemonInfo } from "../../utilities/get-data-utilities";
import "../../App.css"
import TypesOfThePokemon from "../elements/TypesOfThePokemon";
import { HOVER_BUTTONS_COLOR } from "../../utilities/buttons-utilities";

const PokemonEvolution = ({info}) => {
    const {setPokemonInfo, setInPokedex, setShowShiny, pokemonInfoList, setPokemonInfoList} = useContext(PokedexContext)
        const viewPokemonInfo = async(id) => {
            
            let pokeInfo
            if(pokemonInfoList[id]){
                pokeInfo = pokemonInfoList[id]
            }else{
                pokeInfo = await getPokemonInfo(id)
                const pokeInfoObject = {...pokemonInfoList}
                pokeInfoObject[id] = pokeInfo
                setPokemonInfoList(pokeInfoObject)
            }
            setPokemonInfo(pokeInfo)
            setShowShiny(false)
            const elementToScroll = document.getElementById('content_screen')
            elementToScroll.scrollTo(0,0)
        }
    return (
        <button className={`flex flex-col justify-end self-center gap-1 p-1 rounded-2xl ${HOVER_BUTTONS_COLOR}`}
            onClick={()=>viewPokemonInfo(info.id)}
        >
            <img 
                className="flex justify-center self-center size-20 sm:size-32" 
                src={info.sprite}
                alt={`${info.name} Icon`}
            />
            <TypesOfThePokemon types={info.types} onlyIcon={true}/>
            <span className="flex justify-center text-base sm:text-lg">{info.name}</span>
        </button>
    );
};

export default PokemonEvolution;