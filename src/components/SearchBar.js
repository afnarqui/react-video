import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
      guardarTema(searchTerm)
      event.target.value = '';
      setSearchTerm('');
    }
  }

  const guardarTema = (item) => {
    var dataSin =  window.sessionStorage.getItem('data')
    var data
    
    if(dataSin){
      
      data = JSON.parse(dataSin);
      recorrerData(data,item,dataSin)
    }else{
        data = `[{"name":"${item}"}]`;
        window.sessionStorage.setItem('data', data)
    }
    
   
  }

  const recorrerData = (data,name,dataSin) => {
    
    let guardar = 0
    for(let i = 0; i< data.length;i++){
      
      if(data[i].name === name){
        guardar = 1;
      }
    }
    if(guardar ===0){
      var cadena = dataSin.slice(1, -1);
      
      var nuevaData = `[${cadena},{"name":"${name}"}]`;
      window.sessionStorage.setItem('data', nuevaData)
    }
  }

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Ingrese el nombre."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
}
