import React, {useState} from "react";
import "./navbar.css"
import {SlPlane} from "react-icons/sl"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"

const Navbar = () => {
    const [active, setActive] = useState("navBar")

  const showNav = ()=>{
    setActive("navBar activeNavbar")
  }

  return (
    <section className='navBarSection'>
        <header className="header flex">

            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1><  SlPlane className="icon"/>  HighFlyAlert.</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navList grid">

                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Packages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">shop</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Pages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">News</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Contact</a>
                    </li>

                    <button className="btn">
                        <a href="#"> BOOK MOW</a>
                    </button>
                </ul>

                <div className="closeNavBar">
                    <AiFillCloseCircle className="icon"/>
                </div>

            </div>

            <div className="toggleNavBar">
                <TbGridDots className="icon" />
            </div>

        </header>
    </section>
  )
}

export default Navbar