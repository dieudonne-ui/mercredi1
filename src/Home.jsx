import React from 'react'

function Home() {
  return (
    <>
       <div style={style.container}>
        <h1>Bienvenue sur notre projet mercredi!</h1> <br />
        
        <p>Decouvrez nous en faisant un tour</p> <br />

        <button style={style.button}>Explorer</button>
       </div>
    </>
  )
}
const style = {
    container: {textAlign: "center", padding: "20px"},
    button: {padding: "10px 20px", fontSize: "16px", background: "#333", color: "#fff", border: "none",cursor: "pointer"}
}

export default Home