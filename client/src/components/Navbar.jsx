import React, { useRef } from 'react'
import  styled from "styled-components"

function Navbar() {
  const ulRef = useRef(null);
  function handleMenu(e){
    if(ulRef){
      ulRef.current.classList.toggle("show-hide-menu")
    }
  }
  return (
    <nav className='navbar'>
        <a href="#HOME"><img src="https://ieee-induction-2024.vercel.app/IEEE.png" alt="" className="navbar-image" /></a>
        <div className="menu" onClick={(e)=>handleMenu(e)}><i className="fa-solid fa-bars"></i></div>
        <ul className="navbar-lists" ref={ulRef}>
            <li className="navbar-list"><a href="#HOME">Home</a></li>
            <li className="navbar-list"><a href="#COMPETITIONS">Competitions</a></li>
            <li className="navbar-list"><a href="#ABOUT">About</a></li>
            <li className="navbar-list"><a href="#CONTACT">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar

// const NavbarContainer = styled.nav`
    
//   `