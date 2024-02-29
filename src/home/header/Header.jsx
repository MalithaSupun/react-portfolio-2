import React, { useState } from 'react'
import logo from '../../assets/logo.png';


export default function Header() {
    const [sidebar,setSidebar] = useState(false)
  return (
    <>
    <header className='header'>
        <div className='container flex'>
            <div className='logo'>
                <img src={logo} alt=''/>
            </div>
            <div className='nav'>
                <ul className={sidebar ? "nav-links-sidebar" : "nav-links" } onClick={() => setSidebar(false)}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    </>
  )
}

