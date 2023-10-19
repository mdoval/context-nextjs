'use client'

import { useContext } from "react"
import { AppContext } from "../providers/AppProvider"

export default function Button2() {
    const contexto = useContext(AppContext)

    const handleClick = () => {
        alert(JSON.stringify(contexto))
    }

    return <button className="bg-red-300 w-32 h-16 m-2" onClick={handleClick}>Muestra Contexto</button>
}