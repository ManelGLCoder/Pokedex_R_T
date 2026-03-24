import { PokedexContext } from "../../contexts/PokedexContext"
import { useContext } from "react"

const ButtonReturnToPokedex = () =>{
    const {setInPokedex} = useContext(PokedexContext)
    const returnToPokedex = () =>{
        setInPokedex(true)
    }
    return(
        <button className="flex px-1 sm:px-4 fill-white hover:fill-principal-lite"
            onClick={returnToPokedex}>
            <svg className="self-center size-7" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12z"/></svg>
        </button>
    )

}

export default ButtonReturnToPokedex