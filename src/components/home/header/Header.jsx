import React, { useState } from 'react'
import logo from '../../../../src/assets/logo.png';
import {Link} from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WorkIcon from '@mui/icons-material/Work';
import GridViewIcon from '@mui/icons-material/GridView';

const Header = () => {
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
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Pages'>Pages</Link></li>
                    <li><Link to='/Blog'>Blog</Link></li>
                    <li><Link to='/Portfolio'>Portfolio</Link></li>
                    <li><Link to='/Shop'>Shop</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li className="icon">
                        <SearchOutlinedIcon className='SearchOutlinedIcon'/>
                        <WorkIcon className='WorkIcon'/>
                        <GridViewIcon className='GridViewIcon'/>
                    </li>
                </ul>
            </div>
            <buttion className="navbar-items-icon"></buttion>
        </div>
    </header>
    </>
  )
}

export default Header;