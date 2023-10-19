'use client'

export default function Button1({valor}) {

    const handleClick = () => {
        alert(valor)
    }

    return <button className="bg-blue-100 w-32 h-16 m-2" onClick={handleClick}>Muestra Variable Valor</button>
}