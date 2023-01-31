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
  const removeNavbar = ()=>{
    setActive("navBar")
  }

  return (
    <section className='navBarSection'>
        <header className="header flex">

            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1><  SlPlane className="icon"/>  AeroAlarm.</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navList flex">

                    <li className="navItem">
                        <a href="#" className="navLink"></a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Paquetes</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Sobre Nosortos</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Ofertas</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Contactanos</a>
                    </li>

                    <button className="btn">
                        <a href="#"> Comprar Ahora</a>
                    </button>
                </ul>

                <div onClick={removeNavbar} className="closeNavBar">
                    <AiFillCloseCircle className="icon"/>
                </div>

            </div>

            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className="icon" />
            </div>

        </header>
    </section>
  )
}

export default Navbar