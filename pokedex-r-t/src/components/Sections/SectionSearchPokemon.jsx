
import '../../App.css'

const SectionSearchPokemon = () =>{
    return(
        <div className="flex-1 flex items-center my-1 h-fit rounded-2xl border-box border-2 border-violet-800 bg-violet-300">
            <button className='flex justify-center rounded-l-xl hover:bg-violet-800'>
                <img className="m-1 mx-2 sm:mx-1 size-7"
                    src="src/assets/search.svg" alt="Search Icon"
                />
            </button>
            <input id="pokemonName" type="text" name="name" placeholder="Pikachu" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
            <button className='flex justify-center rounded-r-xl hover:bg-violet-800'>
                <img className="m-1 mx-2 sm:mx-1 size-7"
                    src="src/assets/cancel.svg" alt="Cancel Icon"
                />
            </button>
        </div>
    )
}

export default SectionSearchPokemon