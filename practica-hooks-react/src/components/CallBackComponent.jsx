import { useCallback, useState } from "react"
import { Incrementar } from "./Incrementar"

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback(
        (val) =>{
            //No memorizamos el counter si no usamos los valores internos de setCounter
            setCounter(contador => contador + val) 
        },[]
    )


  return (
    <>
        <h1>Contador: {counter}</h1>
        <Incrementar incrementar={incrementarPadre}></Incrementar>
    </>
  )
}
