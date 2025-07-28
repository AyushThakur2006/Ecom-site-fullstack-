import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/footer/Footer'
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'
import ShopCategory from './pages/ShopCategory'
import ShopContextProvider from './context/ShopContext';
const App = () => {
  return (
    <div>
          <ShopContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
      <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}></Route>
      <Route path='/products' element={<products/>}></Route>
      <Route path=':productId' element={<products/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<LoginSignup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </ShopContextProvider>

    </div>
  )
}

export default App