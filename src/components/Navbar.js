import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark navbar-secondary'>
         <div className="container">
           <Link className='navbar-brand'to="/">Yemek Tarifleri</Link>
         </div>
    </nav>
  )
}

export default Navbar