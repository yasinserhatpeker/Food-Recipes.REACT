import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
         <div className="container">
           <Link className='navbar-brand'to="/">Yemek Tarifleri</Link>
           <ul className='navbar-nav'>
            <li className='nav-item'>
             <NavLink to='/' className="nav-link">Home</NavLink>
            </li>
            <li className='nav-item'>
             <NavLink to='/create' className="nav-link">Create</NavLink>
            </li>
           </ul>
         </div>
    </nav>
  )
}

export default Navbar