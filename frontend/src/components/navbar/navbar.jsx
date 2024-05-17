import React, { useRef } from 'react';
import './navbar.css';
import { useContext } from 'react';
import {ShopContext} from '../../Context/ShopContent';
import { useState } from 'react';
import logo from '../assets/logo.png';
import dropdown from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu , setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();


    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return (
        <div className = 'navbar'>
            <div className='nav-logo'>
                <img src = {logo} alt="mainlogo"></img>
                <p>Threads</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown} alt="" />
            <ul className="nav-menu" ref={menuRef}>
                
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu === "shop" ? <hr />:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{menu === "men" ? <hr />:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu === "women" ? <hr />:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu === "kids" ? <hr />:<></>}</li>
            </ul>
    
            <div className="nav-login-cart">
                <button><Link to='/login'>Login </Link></button>
                <Link to='/cart'>  <img src = {cart_icon} alt="carticon"></img></Link>
                <div className="nav-cart-count" >{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;