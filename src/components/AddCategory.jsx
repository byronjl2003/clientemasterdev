import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({setrequest1State}) => {

    const [inputValue, setinputValue] = useState('');
    const [secreto, setsecreto] = useState('');
    

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setinputValue(e.target.value);
    }
    const handleTagsChange = (e) => {
        //console.log(e.target.value);
        setsecreto(e.target.value);
    }

    const saveSecreto = () =>{
        console.log("En saveSecreto");
        console.log("SE VA A  GUARDAR UN SECRETO::",inputValue,secreto);
        let requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key: inputValue,shared_secret:secreto })
        };
        let url = `http://localhost:3001/credential`;
        fetch(url, requestOptions)
        .then(async response => {
            const data = await response.text();
            console.log("data::",data);
            if (!response.ok) {
                console.log("ENTRO A QUE NO ESTA OK");
                setrequest1State(olf => true);

                setTimeout(()=>{
                    setrequest1State(olf => false);
                },2000);
            }
            // check for error response
            
        })
        .catch(error => {
            //this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });


    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        saveSecreto();
        setinputValue('');
        setsecreto('');
        /*
        if ( inputValue.trim().length >2){
            setCategories(old => [ ...old, inputValue]);
            setinputValue('');

        }
        */
        
        //console.log(e);
    }
    
    return (
        
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label >Key</label>
          <input value={inputValue} onChange={handleInputChange}type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <small id="emailHelp" className="form-text text-muted">Esta es el nombre con que se va a recuperar el secreto.</small>
        </div>
        <div className="form-group">
          <label >Secret</label>
          <input type="text"  onChange={handleTagsChange}className="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" className="btn btn-primary" >Agregar Secreto</button>
      </form>
        
    )
}
/*
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
*/