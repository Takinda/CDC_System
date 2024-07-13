import React from 'react'
import { Helmet } from 'react-helmet';
import {Link } from 'react-router-dom';

function Login() {
  
  return (
    <div className='container'>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form action='' >
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='Enter Username' required />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Enter Password' required />
        </div>
        <div className="submit-box">
        <button type='submit' ><Link to="/Home" className='Links'>LOGIN</Link></button>
        </div>
      </form>
    </div>
  )
}

export default Login