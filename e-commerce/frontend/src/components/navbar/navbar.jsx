import React from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'

const navbar = () => {
  return (
<div className='navbar'>
<div className="nav-logo">
    <img src={logo} alt="" />
    <p>SHOPPER</p>
</div>
<ul className='nav_menu'>
    <li>SHOP <hr/></li>
    <li>MEN</li>
    <li>WOMEN</li>
    <li>KIDS</li>
</ul>
<div className="nav-login-cart">
    <button>Login</button>
    <img src={cart_icon} alt="" />
    <div className="nav-cart-count">0</div>
</div>
</div>
)
}
export default navbar