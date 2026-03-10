const Loading = () =>{

    return (
        <div className='flex flex-1 justify-center gap-1 px-1 py-0.5 rounded-xl bg-violet-400 font-bold'>
                    <img className="size-6 self-center"
                        src={'src/assets/loading.svg'}
                        alt={`Loading Image`} 
                    />
                    <span className='justify-center self-center px-2 py-1 text-center'>
                        Cargando...
                    </span>
        </div>
    )
}

export default Loading