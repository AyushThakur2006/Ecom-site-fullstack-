import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
const App = () => {
  return (
    <div className='content'>
      <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
    </div>
  )
}

export default App