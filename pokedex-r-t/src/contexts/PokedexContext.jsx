import { createContext, useState } from 'react';

export const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
    const [pokedexList, setPokedexList] = useState([]);

    return (
        <PokedexContext.Provider value={{ pokedexList, setPokedexList }}>
            {children}
        </PokedexContext.Provider>
    );
};
