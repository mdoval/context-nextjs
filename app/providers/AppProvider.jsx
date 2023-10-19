'use client'

import { createContext } from "react";

export const AppContext = createContext()

export default function AppProvider({children}) {
    const propiedades = {id:1, nombre: "Pepe", edad: 13}

    return (
        <AppContext.Provider value={propiedades}>{children}</AppContext.Provider>
    )
}