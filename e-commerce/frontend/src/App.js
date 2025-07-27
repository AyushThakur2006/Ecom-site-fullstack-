import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/men' element={<men/>}></Route>
      <Route path='/women' element={<women/>}></Route>
      <Route path='/kids' element={<kids/>}></Route>
      <Route path='/products' element={<products/>}></Route>
      <Route path=':productId' element={<products/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<LoginSignup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App