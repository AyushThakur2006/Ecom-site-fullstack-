import React, { useState } from 'react'
import './css/Register.css'
const Register = () => {
  const registeruser =(e)=>{
    e.preventDefault()
  }
const[data, setdata] = useState(
  {
  name:'',
  email:'',
  password:'',
  }
)
  return (
    <div className='inp'>
      <form onSubmit={registeruser} >

      <input type="text" placeholder='Enter Name' value={data.name} onChange={(e)=>{setdata({...data,name: e.target.value})}} />
      <input type="email" placeholder='E-mail' onChange={(e)=>{setdata({...data,email: e.target.value})}} />
      <input type="password" placeholder='Password' onChange={(e)=>{setdata({...data,password: e.target.value})}}/>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register