//rafc
import React, { useState } from 'react'
import { getMessage } from '../helpers/getMessage';
import CryptoJS from 'crypto-js';
export const Messages = ({setmensajes,setrequest3State,setMessageRequest3}) => {

    const [idMensaje, setIdMensaje] = useState('');
    const handleIdMensajeValChange = (e) => {
        //console.log(e.target.value);
        setIdMensaje(e.target.value);
    }
    const [tag, settag] = useState('');
    const handleTagValChange = (e) => {
        //console.log(e.target.value);
        settag(e.target.value);
    }
    const [xkey, setXkey] = useState("");
    const handleXKeyValChange = (e) => {
        //console.log(e.target.value);
        setXkey(e.target.value);
    }

    const [secret, setSecret] = useState("");
    const handleSecretValChange = (e) => {
        //console.log(e.target.value);
        setSecret(e.target.value);
    }
    const [xroute, setXroute] = useState("");
    const handleXRouteValChange = (e) => {
        //console.log(e.target.value);
        setXroute(e.target.value);
    }
    const [xsignature, setXsignature] = useState("");
    const handleXSignatureValChange = (e) => {
        //console.log(e.target.value);
        setXsignature(e.target.value);
    }
/*
    const [keyVal, setKeyVal] = useState("");
    const [routeVal, setrouteVal] = useState("");
    const [signVal, setSignVal] = useState("")
*/

    const calcular_signature = () =>{
        let arreglodeparametros = [];
        arreglodeparametros.push(`id${idMensaje}`);
        arreglodeparametros.push(`X-Route${xroute}`);

        arreglodeparametros.sort();
        let cadena = arreglodeparametros.reduce((acc, element) => `${acc};${element}`);
        let words = CryptoJS.HmacSHA256(cadena, secret);
        let hex = words.toString(CryptoJS.enc.Hex);
        console.log("SIGNATURA CALCULADA: "+hex);
        setXsignature(old => hex);
        return hex;
    }
    const calcular_signature2 = () =>{
        let arreglodeparametros = [];
        arreglodeparametros.push(`tag${tag}`);
        arreglodeparametros.push(`X-Route${xroute}`);

        arreglodeparametros.sort();
        let cadena = arreglodeparametros.reduce((acc, element) => `${acc};${element}`);
        let words = CryptoJS.HmacSHA256(cadena, secret);
        let hex = words.toString(CryptoJS.enc.Hex);
        console.log("SIGNATURA CALCULADA: "+hex);
        setXsignature(old => hex);
        return hex;
    }

    
   
    const handleSubmit1 = (e) =>{
        e.preventDefault();
        buscar_id();
        
    }

    const handleSubmit2 = (e) =>{
        e.preventDefault();
        buscar_tag();
        
    }



    const buscar_id = () =>{
        console.log("En buscar_id");
        console.log("SE VA A BUSCAR UN MENSAJE CON ID::",xkey,secret, xroute, xsignature ,idMensaje);
        let signature = calcular_signature();
        setXsignature(old => signature);
        let requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json','X-Key':xkey,'X-Route':xroute,'X-Signature':xsignature }
        };
        let url = `http://34.70.104.102:3001/message/`+idMensaje;
        console.log("URL",url);
        fetch(url, requestOptions)
        .then(async response => {
            const data = await response.json();
            console.log("data::",data);
            if (!response.ok) {
                console.log("ENTRO A QUE NO ESTA OK", data.message);
                setmensajes(old => []);
                setMessageRequest3(old => data.message);
                setrequest3State(old => true);


                setTimeout(()=>{
                    setrequest3State(olf => false);
                },3000);
            }
            else{
                console.log("BUSQUEDA POR ID SI FUNCIONO");
                console.log(data.msg);
                setmensajes(old => [data])
            }
            
            
        })
        .catch(error => {
            //this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });


    }

    const buscar_tag = () =>{
        console.log("En buscar_id");
        console.log("SE VA A BUSCAR UN MENSAJE CON TAG::",xkey,secret, xroute, xsignature ,tag);
        let signature = calcular_signature2();
        setXsignature(old => signature);
        let requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json','X-Key':xkey,'X-Route':xroute,'X-Signature':xsignature }
        };
        let url = `http://34.70.104.102:3001/messages/${tag}`;
        console.log("URL",url);
        fetch(url, requestOptions)
        .then(async response => {
            const data = await response.json();
            console.log("data::",data);
            if (!response.ok) {
                console.log("ENTRO A QUE NO ESTA OK", data.message);
                setmensajes(old => []);
                setMessageRequest3(old => data.message);
                setrequest3State(old => true);


                setTimeout(()=>{
                    setrequest3State(olf => false);
                },3000);
            }
            else{
                console.log("BUSQUEDA POR TAG SI FUNCIONO");
                console.log(data.data);
                setmensajes(old => data.data)
            }
            
            
        })
        .catch(error => {
            //this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });


    }
    return (
        <div>
            
            <div className="row">
                <div className="col-sm-3">
                    <input type="text" placeholder="KEY" onChange={handleXKeyValChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="col-sm-3">
                    <input type="text" placeholder="SECRET" onChange={handleSecretValChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="col-sm-3">    
                    <input type="text" placeholder="ROUTE" onChange={handleXRouteValChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="col-sm-3">
                    <input  value={xsignature} type="text" placeholder="SIGNATURA" onChange={handleXSignatureValChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
            </div>
            <h4>Buscar por ID</h4>
            <form onSubmit={handleSubmit1}>
                <div className="form-group">
                <div className="row">
                        <div className="col-sm-8">
                            <label >ID:</label>
                            <input value={idMensaje}type="text" onChange={handleIdMensajeValChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="col-sm-4">
                           
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <button type="button" onClick={calcular_signature}  className="btn btn-primary" >Calcular signatura</button>
                    </div>
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-primary" >Buscar</button>
                    </div>

                </div>
                
                
            </form>
            <br></br>
            <h4>Buscar por TAG</h4>
            <form onSubmit={handleSubmit2}>
                <div className="form-group">
                    <div className="row">
                        <div className="col-sm-8">
                            <label >TAG:</label>
                            <input value={tag}type="text" onChange={handleTagValChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                       
                    </div>
                                  
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <button  type="button" onClick={calcular_signature2}  className="btn btn-primary" >Calcular signatura</button>
                    </div>
                    <div className="col-sm-2">
                        <button type="submit" className="btn btn-primary" >Buscar</button>
                    </div>

                </div>
                
            </form>
        </div>
    )
}
