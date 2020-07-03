import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CryptoJS from 'crypto-js';

export const AddMensaje = ({setrequest2State,setMessageRequest2}) => {

    const [inputValue, setinputValue] = useState('');
    const handleInputValChange = (e) => {
      //console.log(e.target.value);
      setinputValue(e.target.value);
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
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        
            //setCategories(old => [ ...old, inputValue]);
            setinputValue('');
            settag('');
            saveMessage();

    
        
        //console.log(e);
    }
    const calcular_signature = () =>{
      let arreglodeparametros = [];
      arreglodeparametros.push(`msg${inputValue}`);
      arreglodeparametros.push(`tags${tag}`);
      arreglodeparametros.push(`X-Route${xroute}`);

      arreglodeparametros.sort();
      let cadena = arreglodeparametros.reduce((acc, element) => `${acc};${element}`);
      let words = CryptoJS.HmacSHA256(cadena, secret);
      let hex = words.toString(CryptoJS.enc.Hex);
      console.log("SIGNATURA CALCULADA: "+hex);
      setXsignature(old => hex);
      return hex;
  }
    const saveMessage = () =>{
      console.log("En saveMessage");
      console.log("SE VA A GUARDAR UN MENSAJE CON",xkey,secret, xroute, xsignature ,inputValue,tag);
      let signature = calcular_signature();
      setXsignature(old => signature);
      let requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json','X-Key':xkey,'X-Route':xroute,'X-Signature':xsignature },
          body: JSON.stringify({ msg: inputValue,tags:tag })

      };
      let url = `http://34.70.104.102:3001/message`;
      console.log("URL",url);
      fetch(url, requestOptions)
      .then(async response => {
          const data = await response.json();
          console.log("data::",data);
          if (!response.ok) {
              console.log("ENTRO A QUE NO ESTA OK", data.message);
              //setmensajes(old => []);
              setMessageRequest2(old => data.message);
              setrequest2State(old => true);


              setTimeout(()=>{
                  setrequest2State(olf => false);
              },3000);
          }
          else{
              console.log("BUSQUEDA POR ID SI FUNCIONO");
              console.log(data);
              //setmensajes(old => [data])
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
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Mensaje</label>
          <input value={inputValue} onChange={handleInputValChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <small id="emailHelp" className="form-text text-muted">Contenido.</small>
        </div>
        <div className="form-group">
          <label >Tags</label>
          <input value={tag} onChange={handleTagValChange} type="text" className="form-control" id="exampleInputPassword1"/>
          <small id="emailHelp" className="form-text text-muted">Separa los tags por un .(punto)</small>
        </div>
        <div className="row">
                    <div className="col-sm-2">
                        <button type="button" onClick={calcular_signature}  className="btn btn-primary" >Calcular signatura</button>
                    </div>
                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-primary" >Crear-Mensaje</button>
                    </div>

                </div>
      </form>
      </div>
        
    )
}