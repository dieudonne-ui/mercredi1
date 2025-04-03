import React from 'react'
import { useState } from 'react'
import './Form.css'

function Form() {
    const [formData, setFormData] = useState({
        name : '',
        email: '',
        password: '',
        confirmPassword:''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name] : value
            
        })
    }
  return (
    <>
    <div></div>
    <form>
            <div id='reg'>
        <label htmlFor="name" className="name">Nom :</label>
        <input type="text" className="name" placeholder='Votre nom' />

        <label htmlFor="email" className="email">Email:</label><br />
        <input type="email" name="email" id="email" placeholder='Email' onChange={handleChange}/><br />
        
        <label htmlFor="password" className="password">Mot de passe :</label><br />
        <input type="text" name='password' className="password" placeholder='Mot de passe'/><br /> <br />

        <label htmlFor="confirmPassword" className="confirmPassword">Confirmer votre mot de passe :</label>
        <input type="text" name='confirmPassword' className="confirmPassword" placeholder='confirmer votre mot de passe'/>


        <button className="submit">Submit</button>
        </div>
    </form> <br />
    </>
  )
}

export default Form