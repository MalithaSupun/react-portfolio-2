import React from 'react'
import logo from '../../assets/logo.png';


export default function Header() {
  return (
    <>
    <header className='header'>
        <div className='container flex'>
            <div className="logo">
                <img src={logo} alt=''/>
            </div>
        </div>
    </header>
    </>
  )
}

