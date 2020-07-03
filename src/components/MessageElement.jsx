import React from 'react'

export const MessageElement = ({mensaje}) => {
    console.log("%%%%%",mensaje)
    return (
        <div className="card">
    
    <div className="card-body">
    <h5 className="card-title">{ mensaje.id }</h5>
    <p className="card-text">{mensaje.msg}</p>
    <p className="card-text"><small className="text-muted">{mensaje.tags}</small></p>
    </div>
  </div>
    )
}
