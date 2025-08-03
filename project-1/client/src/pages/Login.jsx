import React, { useState } from 'react'
import './css/Login.css'
import axios from 'axios'
const Login = () => {
  const userlogin=(e)=>
  {
    e.preventDefault()
    axios.get('/')
  }

const [data, setdata] = useState({
  email:"",
  password:"",
})
  return (
    <div className='inp'>
      <form onSubmit={userlogin}>
        <input type="email" placeholder='E-mail' onChange={(e)=>{setdata({...data,email: e.target.value})}} />
       <input type="password" placeholder='Password' onChange={(e)=>{setdata({...data,password: e.target.value})}}/>
       <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default Login