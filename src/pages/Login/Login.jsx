import React from 'react'
import './Login.css';
import { Helmet } from 'react-helmet';
import {Link } from 'react-router-dom';

function Login() { 
  
  return (
    <div className="Login-back-ground">
      <div className='Login-container'>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form action='' className='Loginform'>
        <h1>Login</h1>
        <div className="input-box-Login">
          <input type="text" placeholder='Enter Username' required />
        </div>
        <div className="input-box-Login">
          <input type="password" placeholder='Enter Password' required />
        </div>
        <div className="submit-box-Loign">
        <button type='submit' ><Link to="/Home" className='Links'>LOGIN</Link></button>
        </div>
      </form>
    </div>
    </div>
    
  )
}

export default Login