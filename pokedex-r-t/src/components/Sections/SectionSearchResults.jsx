import PokemonSearchResult from "../elements/PokemonSearchResult"

const SectionSearchResults = ({results}) =>{
    return(
        <div className={`absolute top-18 overflow-y-auto 
            flex flex-col sm:min-w-sm max-h-6/12 z-30 
            rounded-2xl border-box border-2 border-violet-800 bg-violet-300`}>
            {results.map((pokemon) => (
                <PokemonSearchResult key={pokemon} pokemon={pokemon}/>
            ))}
        </div>
    )
}

export default SectionSearchResults