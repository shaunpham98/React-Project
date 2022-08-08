import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <div className="header">
        <div className="header_left">
            <h1>Recipe Explorer</h1>
            <img src="https://img.icons8.com/cotton/64/000000/bread--v2.png"/>
        </div>

        <div className="header_right">
            <Link to='/'>Home</Link>
            <Link to='/search'>Search</Link>
            <Link to='/favourites'>Favourites</Link>
      </div>
    </div>
  )
}

export default Header