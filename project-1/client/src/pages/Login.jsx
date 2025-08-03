import React, { useState } from 'react'
import './css/Login.css'
import {toast} from 'react-hot-toast'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();

  const [data, setdata] = useState({
    email:"",
    password:"",
  })

  const userlogin=async(e)=>
  {
    e.preventDefault()
    const {email,password}=data
    try
    {
      const res= await axios.post('/login',{
        email,
        password
      });
      const data=res.data;
      if(data.error)
      {
        toast.error(data.error);
      }
      else{
        setdata({email:"",password:""});
        toast.success('Login Success')
        navigate('/dashboard');
      }
    }

    catch(error)
    {
      toast.error('Something went wrong. Please try again.')}
  }

  return (
    <div className='inp'>
      <form onSubmit={userlogin}>
        <input type="email" placeholder='E-mail'  onChange={(e)=>{setdata({...data,email: e.target.value})}} />
       <input type="password" placeholder='Password' onChange={(e)=>{setdata({...data,password: e.target.value})}}/>
       <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default Login