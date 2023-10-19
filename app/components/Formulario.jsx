'use client'

import Button1 from '@/app/components/Button1'
import Button2 from '@/app/components/Button2'
import { useContext, useState } from 'react'
import { AppContext } from '../providers/AppProvider'

export default function Formulario() {
    const contexto = useContext(AppContext)
    const [valor, setValor] = useState(contexto.nombre)

    const handleChange = (e) => {
        setValor(e.target.value)
        contexto.nombre = e.target.value
    }

    return (
        <div className='p-3 flex flex-col w-1/2'>
            <h1>Formulario</h1>
            <hr />
            <input type='text' className="border-solid border-black border-2" value={valor} onChange={(e) => handleChange(e)} />
            <Button1 valor={valor} />
            <Button2 />
        </div>
    )
}