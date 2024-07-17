import React from 'react'
import '../Styles/Login.css';
import { Helmet } from 'react-helmet';
import {Link } from 'react-router-dom';

function Login() {
  
  return (
    <div className="Loginbackground">
      <div className='Logincontainer'>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form action='' >
        <h1>Login</h1>
        <div className="input-box2">
          <input type="text" placeholder='Enter Username' required />
        </div>
        <div className="input-box2">
          <input type="password" placeholder='Enter Password' required />
        </div>
        <div className="submit-box2">
        <button type='submit' ><Link to="/Home" className='Links'>LOGIN</Link></button>
        </div>
      </form>
    </div>
    </div>
    
  )
}

export default Login