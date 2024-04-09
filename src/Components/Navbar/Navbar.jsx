import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../Assets/logo192.png'

const Navbar = () => {
  
  const [menu,setMenu] = useState("home");
  return (
    <nav className='container'>
      <div className="nav-logo">
      <img src={logo} alt='' className='logo'/>
      <h1>KMC 63 Trading</h1>
      </div>
        
        <ul className='nav-menu'>
          <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none',color: 'white'}}to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
          <li>About us</li>
          <li onClick={()=>{setMenu("coatingServices")}}><Link style={{textDecoration: 'none',color: 'white'}} to='/coatingServices'>Services</Link>{menu==="coatingServices"?<hr/>:<></>}</li>
          <li>Product</li>
          <li><button className='btn'>Contact us</button></li>

        </ul>
    </nav>
  )
}

export default Navbar
