import React from 'react'
//import {Link} from "react-router-dom"

function Navebar() {
  return (
    < > 
    <head style={style.header}>
      <h1>MD</h1>
    <div style={style.container}>
    <a href="">Accueil</a>
        <a href="">Profile</a>
        <a href="">A Propos</a>
        <a href="">Form</a>

        
        
    </div>
    </head>
    
        
    </>
    
  )
}

const style = {
    container:{display: "flex",justifyContebt: "space around",gap: "20px", alignItems:"center",flexDirection:"flex end"},
    header:{display: "flex",justifyContebt: "space between", gap: "800px"}
}

export default Navebar