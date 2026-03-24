import PokemonSearchResult from "../elements/PokemonSearchResult"

const SectionSearchResults = ({results}) =>{
    return(
        <div className={`absolute top-25 overflow-y-auto 
            flex flex-col sm:min-w-sm max-h-6/12 z-30 
            rounded-2xl border-box border-2 border-search-lite bg-search
            [&::-webkit-scrollbar]:w-0`}>
            {results.map((pokemon) => (
                <PokemonSearchResult key={pokemon} pokemon={pokemon}/>
            ))}
        </div>
    )
}

export default SectionSearchResults