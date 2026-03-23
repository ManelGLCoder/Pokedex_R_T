
import '../../App.css'
import { PokedexContext } from '../../contexts/PokedexContext'
import { useContext, useCallback, useState, useEffect } from 'react'
import SectionSearchResults from './SectionSearchResults'
import { ID_START_POKEMONS_ALTERNATIVE_FORMS } from '../../dto/constants'
import cancelIcon from '../../assets/cancel.svg'
import searchlIcon from '../../assets/search.svg'

const SectionSearchPokemon = () =>{
    const {idList} = useContext(PokedexContext)

    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const debounce = (func, delay) => {
        let timeoutId
        return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func(...args), delay)
        }
    }
    const handleSearch = useCallback(
        debounce((term) => {
        if (term.trim() === '') {
            setSearchResults([])
        } else {
            const results = Object.entries(idList).filter((item) =>
                getIdOrName(term, item).toLowerCase().includes(term.toLowerCase()) && item[0]< ID_START_POKEMONS_ALTERNATIVE_FORMS ,
            )
            setSearchResults(results)
        }
        }, 300),
        [idList],
    )

    const getIdOrName = (searchingTerm, item) =>{
        if(isNaN(Number(searchingTerm))){
            return item[1]
        }
        return item[0]
    }

    useEffect(() => {
        handleSearch(searchTerm)
    }, [searchTerm, handleSearch])
    
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const cancelSearch = () =>{
        setSearchTerm('')
    }

    return(
        <div className="flex-1 flex items-center my-1 h-fit rounded-2xl bg-violet-300">
            <img className="flex justify-center rounded-l-xl m-1 mx-2 sm:mx-1 size-7"
                src={searchlIcon} alt="Search Icon"
            />
            <input id="pokemonName" 
                className={`block min-w-0 grow py-1.5 pr-3 pl-1
                        hover:bg-violet-800 hover:placeholder:text-white
                        text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6`}
                type="text" name="name" placeholder="nombre o ID..."
                value={searchTerm}
                onChange={handleInputChange}/>
            <button className='flex justify-center rounded-r-xl hover:bg-violet-800'
            onClick={cancelSearch}>
                <img className="m-1 mx-2 sm:mx-1 size-7"
                    src={cancelIcon} alt="Cancel Icon"
                />
            </button>
            {searchResults.length > 0 && (
                <SectionSearchResults results={searchResults}/>
            )}
        </div>
    )
}

export default SectionSearchPokemon