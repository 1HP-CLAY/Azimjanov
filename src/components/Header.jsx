import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
<>
<header>
    <div className="header-box">
        <div className="header-left">
            <img src="/Logo.png" alt="" />
        </div>
        <div className="header-center">
            <nav>
                <ul>
                    <Link to={"/home"}><a href="">Home</a></Link>
                    <Link to={"/about"}><a href="">About Me</a></Link>
                    <Link to={"/services"}><a href="">Services</a></Link>
                    <Link to={"/portfolio"}><a href="">Portfolio</a></Link>
                </ul>
            </nav>
        </div>
        <div className="header-right">
        <Link to={'/login'}> 
        <button> Click me!
        </button>
        </Link>
        </div>
    </div>
</header>
</>
  )
}

export default Header