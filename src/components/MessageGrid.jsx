import React from 'react'
import { MessageElement } from './MessageElement';

export const MessageGrid = ({mensajes}) => {
    console.log("DESDE EL MessageGrid::",mensajes);
   
    return (
        <>
            
            <div className="card-group"> 
            {
                mensajes.map(msg =>{
                    console.log("**********",msg);
                    
                return <MessageElement key={msg.id} mensaje={msg}></MessageElement>
                })
            }
            </div>
    
        </>
    )
}
