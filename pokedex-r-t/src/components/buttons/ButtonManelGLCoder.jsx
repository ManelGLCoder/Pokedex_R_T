import manelGLCoderIcon from '../../../public/ManelGLCoder.svg'
const ButtonManelGLCoder = () =>{
    return(
        <div className="flex sm:min-w-xl justify-center">
            <button className="flex flex-1 place-content-center gap-3 rounded-3xl mx-11 px-5 py-2 bg-my-logo-bg hover:bg-my-logo-hover">
            <img className='size-6 sm:size-10 self-center'src={manelGLCoderIcon} alt="ManelGLCoder logo" />
            <span className="self-center text-my-logo text-lg sm:text-2xl font-logo">ManelGLCoder</span>
        </button>
        </div>
    )
}

export default ButtonManelGLCoder