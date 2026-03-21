import warningPic from '../assets/warning.svg'
const ComingSoon = () =>{
    return(
        <div className="flex flex-1 justify-center">
            <img className="size-7" src={warningPic} alt="Warning Icon" />
            <span className="text-xl text-amber-200">Próximamente...</span>
            <img className="size-7" src={warningPic} alt="Warning Icon" />
        </div>
    )
}

export default ComingSoon