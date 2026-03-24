
const SELECTED = "px-0 py-2 font-bold bg-secondary"
const NOT_SELECTED = "px-5 py-2 bg-secondary-middle hover:bg-secondary-lite"
const FIRST = 'rounded-tl-2xl'
const LAST = 'rounded-tr-2xl'

export const BUTTONS_SECTION_SELECTION_CLASSNAME = 'relative top-3 flex text-lg md:text-xl'
export const BUTTONS_SHOW_MORE_CLASSNAME = `snap-center flex flex-1 justify-center gap-1 px-1 py-0.5 rounded-xl font-bold`
export const HOVER_BUTTONS_COLOR = 'hover:bg-principal-lite'
export const HOVER_BUTTONS_COLOR_SECONDARY = 'hover:bg-secondary-lite'

export const getButtonSelectionClassName = (first, last, focused) => 
    `flex-1 ${roundedByPosition(first,last)} ${focused ? SELECTED : NOT_SELECTED}`

const roundedByPosition = (first,last)=>{
    if(first){
        return FIRST
    }
    else if(last){
        return LAST
    }
    return ""
}