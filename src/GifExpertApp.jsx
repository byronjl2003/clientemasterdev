import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { AddMensaje } from './components/AddMensaje';
import { MessageGrid } from './components/MessageGrid';
import { Messages } from './components/Messages';
import { Toast } from './components/Toast';

export const GifExpertApp = () => {

    //const [categories, setCategories] = useState(['One Punch']);
    const [mensajes, setmensajes] = useState([]);

    const [request1State, setrequest1State] = useState(false);
    const [request3State, setrequest3State] = useState(false);
    const [messageRequest3, setMessageRequest3] = useState("");

    const [request2State, setrequest2State] = useState(false);
    const [messageRequest2, setMessageRequest2] = useState("");
    /*
    const handleAdd = () =>{
        //categories.push('jujuju');
        setCategories([...categories,'jijijiji' ]);
    }
    */
    return ( 
        <div>
            <h2> Prueba nuestra API! </h2>
            <h3> Crea una nuevo secreto..</h3>
            <Toast requeststate={request1State} mensaje={"ERROR EN LA CREACION DE SECRETO! YA EXISTE.."}></Toast> 
            <AddCategory setrequest1State={setrequest1State}> </AddCategory>
            <hr></hr>
             <h3> Crea una nuevo mensaje..</h3>
             <Toast requeststate={request2State} mensaje={messageRequest2}></Toast>
            <AddMensaje setrequest2State={setrequest2State} setMessageRequest2={setMessageRequest2}></AddMensaje>
            <hr></hr>
            <h3> Busca Un mensaje..</h3>
            <Toast requeststate={request3State} mensaje={messageRequest3}></Toast> 
            <Messages setmensajes={setmensajes} setrequest3State={setrequest3State} setMessageRequest3={setMessageRequest3} ></Messages>
            <MessageGrid mensajes={mensajes}></MessageGrid>
        <hr/>
        
        <ol>
            
            {
                /*
                categories.map(category =>{
                return <GifGrid key={category} category={category}></GifGrid>
                })
                */
            }
            
        </ol>
        </div>
    )
}