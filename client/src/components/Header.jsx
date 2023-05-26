import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav__left">
          <img src="https://preview.colorlib.com/theme/drimo/drimo/img/logo-6.png" alt="" />
        </div>
        <div className="nav__right">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/add"} >Add Page</Link></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">PRICE</a></li>
            <li><a href="">TEAM</a></li>
            <li><a href="">NEWS</a></li>
            <li><a href="">CONTACT</a></li>
            <li><a id='signin' href="">SIGN IN</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
