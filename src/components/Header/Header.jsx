import React from 'react'
import { Link, NavLink } from 'react-router'
import './Header.css'

const Header = () => {
  return (
    <div>
        <h1>This is header</h1>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/mobile'>Mobile</NavLink>
            <NavLink to='/laptops'>Laptops</NavLink>
            <NavLink to='/users'>Users</NavLink>
        </nav>
    </div>
  )
}

export default Header