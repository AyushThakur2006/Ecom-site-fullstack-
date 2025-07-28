import React from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;
  return (
<div className='navbar'>
<div className="nav-logo">
    <img src={logo} alt="" />
    <p>SHOPPER</p>
</div>
<ul className='nav_menu'>
    <li><Link style={{textDecoration:'none',color:'black'}} to="/">Shop</Link>{pathname==='/' ? <hr/>: <></>}</li>
    <li><Link style={{textDecoration:'none',color:'black'}} to="/men">Men</Link> {pathname==='/men' ? <hr/>: <></>}</li>
    <li><Link style={{textDecoration:'none',color:'black'}} to="/women">Women</Link> {pathname==='/women' ? <hr/>: <></>}</li>
    <li><Link style={{textDecoration:'none',color:'black'}} to="/kids">Kids</Link> {pathname==='/kids' ? <hr/>: <></>}</li>
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