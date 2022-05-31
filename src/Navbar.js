import React from 'react'
import About from './About'
import Contact from './Contact'
import Jobs from './Jobs'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}

export default Navbar