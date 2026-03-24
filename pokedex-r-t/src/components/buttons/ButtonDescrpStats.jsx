import { useContext } from 'react';
import "../../App.css"
import { PokedexContext } from "../../contexts/PokedexContext";


const ButtonsDescripStats = () => {
    const {descriptionFocused, setDescriptionFocused} = useContext(PokedexContext)
    const altSection = (alreadySelected) =>{
        if(alreadySelected){
            return
        }
        setDescriptionFocused(!descriptionFocused)
    }
    const buttonWithIcon = (isDescrip, selected) =>{
        const bg = selected ? "" : "bg-principal hover:bg-principal-lite"
        return(
            <button className={`flex-1 justify-items-center py-3 rounded-t-xl ${bg} `}
            onClick={()=>altSection(selected)}>
                {
                    isDescrip? <svg className={`size-8 stroke-white ${selected? 'fill-principal-dark':'fill-principal'}`} alt="Description Icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><g stroke-width="1.5"><path stroke-linejoin="round" d="M14 3.5h-4c-3.771 0-5.657 0-6.828 1.172S2 7.729 2 11.5v1c0 3.771 0 5.657 1.172 6.828S6.229 20.5 10 20.5h4c3.771 0 5.657 0 6.828-1.172S22 16.271 22 12.5v-1c0-3.771 0-5.657-1.172-6.828S17.771 3.5 14 3.5Z"/><path stroke-linecap="round" d="M5 16c1.036-2.581 4.896-2.75 6 0"/><path d="M9.75 9.75a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M14 8.5h5M14 12h5m-5 3.5h2.5"/></g></svg>
                    : <svg className='size-8 fill-white' alt="Stats Icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 512 512"><path d="M104 496H72a24 24 0 0 1-24-24V328a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v144a24 24 0 0 1-24 24m224 0h-32a24 24 0 0 1-24-24V232a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v240a24 24 0 0 1-24 24m112 0h-32a24 24 0 0 1-24-24V120a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v352a24 24 0 0 1-24 24m-224 0h-32a24 24 0 0 1-24-24V40a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v432a24 24 0 0 1-24 24"/></svg>

                }
            </button>
        )
    }
    return (
        <div className="relative -top-5 flex justify-items-center">
            {buttonWithIcon(true, descriptionFocused)}
            {buttonWithIcon(false, !descriptionFocused)}
        </div>
    );
};

export default ButtonsDescripStats;