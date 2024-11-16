import React from "react"

export const Incrementar = React.memo(({incrementar}) => {

    console.log('Me redibujo')
  return (
    <button className="btn btn-primary" onClick={()=>incrementar(10)}>+1</button>
  )
})
