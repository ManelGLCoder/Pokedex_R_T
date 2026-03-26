const Loading = ({isPrincipal = true}) =>{
        return (
        <div className={`flex flex-1 justify-center gap-1 px-1 py-1 rounded-xl 
        bg-secondary-lite font-bold`}>
            <svg className={`size-6 self-center fill-none ${isPrincipal? "stroke-search-lite" : "stroke-white"}`} alt={`Loading Image`}  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3c4.97 0 9 4.03 9 9"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
                <span className={`justify-center self-center px-2 py-1 text-center ${isPrincipal && "text-search-lite"}`}>
                    Cargando...
                </span>
        </div>
    )
}

export default Loading