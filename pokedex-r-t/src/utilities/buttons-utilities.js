
const SELECTED = "px-0 py-2 font-bold bg-violet-800"
const NOT_SELECTED = "px-5 py-2 bg-pink-600 hover:bg-pink-400"
const FIRST = 'rounded-tl-2xl'
const LAST = 'rounded-tr-2xl'

export const BUTTONS_SECTION_SELECTION_CLASSNAME = 'relative top-3 flex text-lg md:text-xl'
export const BUTTONS_SHOW_MORE_CLASSNAME = `snap-center flex justify-center gap-1 px-1 py-0.5 rounded-xl
            hover:bg-amber-200 bg-violet-400 font-bold`

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