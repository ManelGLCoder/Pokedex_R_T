import './App.css'
import { useState } from 'react'
import PokemonType from './components/PokemonType'

function App() {
  const [val] = useState(10);
  return (
    <>
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <!--Fondo liza claro, contiene LOS DATOS DE UN POKEMON --> */}
      <div className="flex min-w-dvw min-h-dvh justify-center p-1 dark:bg-violet-400">
        {/* <!-- Contenido POKEDEX POKEMON --> */}
        <div className="box-border flex max-w-dvw flex-col border-x-8 border-violet-400 p-2 lg:max-w-fit">
          {/* <!-- Sección fondo naranja --> */}
          <div className="rounded-xl py-3 text-sm/7 text-gray-700 dark:bg-orange-300 dark:text-white">
            {/* <!-- Nombre y id --> */}
            <div className="grid grid-cols-5 px-5 py-2 text-xl font-bold">
              <span className="col-span-2">Charizard</span>
              <span className="col-start-5">#006</span>
            </div>
            {/* <!-- Tipos --> */}
            
            <div className="flex flex-wrap justify-normal gap-1 px-5">
                <PokemonType pokemonType={"fire"} />
                <PokemonType pokemonType={"flying"} />
              
            </div>
            {/* <!-- Sprite Pokemon --> */}
            <div className="flex justify-center">
              <svg fill="#000000" width="127px" height="127px" viewBox="0 -64 640 640" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"><path d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c-9.44-26.4-14.73-54.47-14.73-83.38v-42.27l-119.73-87.6c-23.82-15.88-55.29-14.01-77.06 4.59L5.81 227.64c-12.38 10.33-3.45 30.42 12.51 28.14zm556.87 34.1l-100.66-50.31A47.992 47.992 0 0 1 448 196.65v-36.69h64l28.09 22.63c6 6 14.14 9.37 22.63 9.37h30.97a32 32 0 0 0 28.62-17.69l14.31-28.62a32.005 32.005 0 0 0-3.02-33.51l-74.53-99.38C553.02 4.7 543.54 0 533.47 0H296.02c-7.13 0-10.7 8.57-5.66 13.61L352 63.96 292.42 88.8c-5.9 2.95-5.9 11.36 0 14.31L352 127.96v108.62c0 72.08 36.03 139.39 96 179.38-195.59 6.81-344.56 41.01-434.1 60.91C5.78 478.67 0 485.88 0 494.2 0 504 7.95 512 17.76 512h499.08c63.29.01 119.61-47.56 122.99-110.76 2.52-47.28-22.73-90.4-64.64-111.36zM489.18 66.25l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26-12.96-.71-25.85-12.53-21.52-29.67z"></path></g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
