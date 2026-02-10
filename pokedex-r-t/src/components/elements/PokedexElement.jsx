import '../../App.css'
import TypesOfThePokemon from './TypesOfThePokemon'

const PokedexElement = ({pokeElementData}) =>{
    return(
        <div className='snap-center grid grid-cols-5 px-1 py-0.5 rounded-xl bg-linear-65 from-violet-800 to-pink-500 font-bold'>
            <img className="col-span-1 self-center justify-self-center mx-1 size-10"
                src={`src/assets/pokemon/${pokeElementData.name}.svg`}
                alt="Pokemon Image" 
            />
            <span className='col-span-1 justify-center self-center px-2 py-1 text-center sm:flex-1'>
                {"#"+pokeElementData.id}
            </span>
            <span className="col-span-2 self-center px-2 py-1 text-center">{pokeElementData.name}</span>
            <TypesOfThePokemon className="col-span-1" types={pokeElementData.types} onlyIcon={true} />
        </div>
    )
}

export default PokedexElement