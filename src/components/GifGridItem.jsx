import React from 'react'

export const GifGridItem = ({id,message,img}) => {
    console.log(id);
    console.log(message);
    console.log(img);
    return ( 
        <div className="card">
            <img src={img} alt={message}></img>
            <p>{ message }</p>
        </div>
    )
}