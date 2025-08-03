import React, { useState } from 'react'
import './css/Register.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate()
  const registeruser =async(e)=>{
    e.preventDefault();
    const {name,email,password}=data;
    try
    {
      const res = await axios.post('/register',{
        name, email, password
      })
      if(res.data.error)
        {
          toast.error(res.data.error)
        }
        else
        {
          setdata({ name: '', email: '', password: ''})
          toast.success('Registration Successful. Welcome!');
          navigate('/login')
        }
    }
  
    catch(error)
    {
console.log(error);
    }
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
      <input type="email" placeholder='E-mail' value={data.email} onChange={(e)=>{setdata({...data,email: e.target.value})}} />
      <input type="password" placeholder='Password' value={data.password} onChange={(e)=>{setdata({...data,password: e.target.value})}}/>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register