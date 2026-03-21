import { PokedexContext } from "../../contexts/PokedexContext"
import { useContext } from "react"
import returnArrow from '../../assets/return_arrow.svg'

const ButtonReturnToPokedex = () =>{
    const {setInPokedex} = useContext(PokedexContext)
    const returnToPokedex = () =>{
        setInPokedex(true)
    }
    return(
        <button className="flex mx-2 px-2 gap-1 rounded-3xl sm:rounded-xl bg-violet-800 hover:bg-violet-600"
            onClick={returnToPokedex}>
            <img className="self-center size-7" src={returnArrow} alt="Return Icon" />
            <span className="self-center hidden sm:block font-bold">POKÉDEX</span>
        </button>
    )

}

export default ButtonReturnToPokedex