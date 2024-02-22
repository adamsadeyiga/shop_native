import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="ShopNative logo" />
                <p>SHOPNATIVE</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none', color:'#515151'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:""}</li>
                <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none', color:'#515151'}}  to='/mens'>Men</Link>{menu==="men"?<hr/>:""}</li>
                <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none', color:'#515151'}}  to='/womens'>Wemen</Link>{menu==="women"?<hr/>:""}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart icon" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar