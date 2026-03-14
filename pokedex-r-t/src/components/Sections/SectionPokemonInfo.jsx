import React from "react";
import "../../App.css"

import SectionDescription from "./SectionDescription";
import SectionHabilities from "./SectionHabilities";
import SectionEvolutionLine from "./SectionEvolutionLine";
import MovementSection from "./MovementSection";
import SectionVariant from "./SectionVariant";
import { PokedexContext} from "../../contexts/PokedexContext";
import { useContext,useEffect } from "react";
import ButtonMovesSection from "../buttons/ButtonMovesSection";
import ButtonAbilitiesSection from "../buttons/ButtonAbilitiesSection";
import ButtonLineEvolutionSection from "../buttons/ButtonLineEvolutionSection";
import ButtonVariantsSection from "../buttons/ButtonVariantsSection";
import { BUTTONS_SECTION_SELECTION_CLASSNAME } from "../../utilities/buttons-utilities";
import { fetchAllMovesInfo } from "../../utilities/fetch-utilities";
import { getMovesInfo, getMovesNamesLimited} from "../../utilities/get-data-utilities";


const SectionPokemonInfo = () => {
    const {pokemonInfo, abilitiesFocused, lineEvolutionFocused, setMovesNames, setMovesList, movesInfoList, setMovesInfoList} = useContext(PokedexContext)
    
    const getInitialMovesInfo = async(movesNames) =>{
        const movesList = getMovesNamesLimited(movesNames, 0)
        const movesFiltered = filterMovesAlreadySaved(movesList)
        const movesData = await fetchAllMovesInfo(movesFiltered.toFetch)
        const newMovesInfo = getMovesInfo(movesData)
        saveMoves(newMovesInfo)
        return [...movesFiltered.withInfo, ...newMovesInfo]
    }
    
    const saveMoves = (newMoves)=> {
        const updatedMovesInfoList = movesInfoList
        if(Array.isArray(newMoves) && newMoves.length){
            newMoves.forEach((move)=>{
                updatedMovesInfoList[move.id] = move
            })
        }
        setMovesInfoList(updatedMovesInfoList)
    }

    const filterMovesAlreadySaved = (movesNames) =>{
        let movesFiltered = {
            withInfo: [],
            toFetch: []
        }
        movesNames.forEach(moveId => {
            if(movesInfoList[moveId]){
                movesFiltered.withInfo.push(movesInfoList[moveId])
            }
            else{
                movesFiltered.toFetch.push(moveId)
            }
        });
        return movesFiltered
    }
    useEffect(()=>{
        const initMovesList = async () =>{
        const POKEMON_MOVES_NAMES = pokemonInfo.moves
        setMovesNames(POKEMON_MOVES_NAMES)
        return await getInitialMovesInfo(POKEMON_MOVES_NAMES)
        }
        initMovesList().then((result)=>{
        setMovesList(result)
        })
        return ()=>{}
    },[pokemonInfo])
    
    
    return (
        <>
            <SectionDescription description={pokemonInfo.description} species={pokemonInfo.species} weight={pokemonInfo.weight} height={pokemonInfo.height}/>
            <div className="relative -top-5 flex flex-col gap-2">
                <div className={BUTTONS_SECTION_SELECTION_CLASSNAME}>
                    <ButtonAbilitiesSection first={true}/>
                    <ButtonMovesSection last={true}/>
                </div>
                {
                    abilitiesFocused? 
                        <SectionHabilities habilitiesData={pokemonInfo.abilities}/> : 
                        <MovementSection/>
                }
                <div className={BUTTONS_SECTION_SELECTION_CLASSNAME}>
                    <ButtonLineEvolutionSection first={true}/>
                    <ButtonVariantsSection last={true}/>
                </div>
                {
                    lineEvolutionFocused?
                        <SectionEvolutionLine evolutionData={pokemonInfo.evolutions}/> :
                        <SectionVariant variantData={pokemonInfo.variants}/>
                }
            </div>
        </>
    );
};

export default SectionPokemonInfo;