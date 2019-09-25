import React , { useState } from 'react';
import { Paper } from "@material-ui/core";
export default ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.childNodes[0].nodeValue);
        onSubmit(event.target.childNodes[0].nodeValue);
    }
    
    // var dataNew = '[{"name":"vallenatos"},{"name":"merengues"},{"name":"guascas"}]';
    // window.sessionStorage.setItem('data', dataNew)

    // window.sessionStorage.removeItem('token')
    var dataSin =  window.sessionStorage.getItem('data')
    var data
    if(dataSin){
        data = JSON.parse(dataSin);
    }else{
        data = []
    }
    return(
        <Paper elevation={6} style={{ padding: "25px" }}>
            <ul>
            {
               data.map(item => <li key={item.name}> <a  href="#" onClick={handleChange} >{item.name}</a></li>)
           }
            </ul>
            <style jsx>{`
            ul { 
                list-style:none; 
            }
            ul li { 
                font-family:Georgia,serif,Times; 
                font-size:48px; 
            }   

            ul li a { 
                display:block; 
                width:100%; 
                height:58px; 
                background-color:white; 
                text-decoration:none; 
                color:black; 
            }    


        @media only screen and (min-width: 480px) and (max-width: 991px) {
            ul { 
                list-style:none; 
            }
            ul li { 
                font-family:Georgia,serif,Times; 
                font-size:30px; 
            }   

            ul li a { 
                display:block; 
                width:100%; 
                height:38px; 
                background-color:white; 
                text-decoration:none; 
                color:black; 
            }    
        }            
                           

      `}</style>
        </Paper>
  )
}
