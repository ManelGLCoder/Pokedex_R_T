import loadingIcon from '../assets/loading.svg'
const Loading = ({isPrincipal = true}) =>{
        return (
        <div className={`flex flex-1 justify-center gap-1 px-1 py-1 rounded-xl 
        ${isPrincipal? "bg-principal-lite" : "bg-secondary-lite"} font-bold`}>
                    <img className="size-6 self-center"
                        src={loadingIcon}
                        alt={`Loading Image`} 
                    />
                    <span className='justify-center self-center px-2 py-1 text-center'>
                        Cargando...
                    </span>
        </div>
    )
}

export default Loading