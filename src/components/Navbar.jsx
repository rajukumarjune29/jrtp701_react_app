import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar">
        <div className="left ">
          <Link to="" className="nav_items">
          Naresh i technologies
          </Link>
        </div>
        <div className="right">
            <Link to="" className="nav_items">Home</Link>
            <Link to="" className="nav_items">Services</Link>
            <Link to="" className="nav_items">Careers</Link>
            <Link to="" className="nav_items">Projects</Link>
            <Link to="" className="nav_items">Contact</Link>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Navbar
