import manelGLCoderIcon from '../../../public/ManelGLCoder.svg'
const ButtonManelGLCoder = () =>{
    return(
        <div className="flex sm:min-w-xl justify-center">
            <button className="flex gap-1 rounded-3xl p-2 bg-my-logo-bg hover:bg-my-logo-hover">
            <img className='size-10'src={manelGLCoderIcon} alt="ManelGLCoder logo" />
            <span className="self-center text-my-logo text-2xl font-logo">ManelGLCoder</span>
        </button>
        </div>
    )
}

export default ButtonManelGLCoder