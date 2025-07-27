import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const[Menu,Setmenu]=useState('shop')
  return (
<div className='navbar'>
<div className="nav-logo">
    <img src={logo} alt="" />
    <p>SHOPPER</p>
</div>
<ul className='nav_menu'>
    <li onClick={()=>{Setmenu('shop')}}><Link style={{textDecoration:'none',color:'black'}} to="/">Shop</Link>{Menu==='shop' ? <hr/>: <></>}</li>
    <li onClick={()=>{Setmenu('men')}}><Link style={{textDecoration:'none',color:'black'}} to="/men">Men</Link> {Menu==='men' ? <hr/>: <></>}</li>
    <li onClick={()=>{Setmenu('women')}}><Link style={{textDecoration:'none',color:'black'}} to="/women">Women</Link> {Menu==='women' ? <hr/>: <></>}</li>
    <li onClick={()=>{Setmenu('kids')}}><Link style={{textDecoration:'none',color:'black'}} to="/kids">Kids</Link> {Menu==='kids' ? <hr/>: <></>}</li>
</ul>
<div className="nav-login-cart">
    <button><Link style={{textDecoration:'none',color:'black'}} to='/login'>Login</Link></button>
    <Link style={{textDecoration:'none',color:'black'}} to="/cart"><img src={cart_icon}/></Link>
    <div className="nav-cart-count">0</div>
</div>
</div>
)
}
export default Navbar