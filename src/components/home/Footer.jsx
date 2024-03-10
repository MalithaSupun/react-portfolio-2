import React from 'react'
import logo1 from '../../../src/assets/logo1.png'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container grid1">
            <div className="box">
                <img src={logo1} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis</p>
                <div className="socialIcon">
                    <i className='fab fa fa-facebook-f facebook'></i>
                    <i className='fab fa fa-instagram instagram'></i>
                    <i className='fab fa fa-twitter twitter'></i>
                    <i className='fab fa fa-youtube youtube'></i>
                    <i className='fab fa fa-github github'></i>
                    <i className='fab fa fa-linkedin linkedin'></i>
                </div>
            </div>

            <div className="box">
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>News</li>
                    <li>Contact</li>
                    <li>FAQ's</li>
                </ul>
            </div>
            <div className="box">
                <h2>Recent Post</h2>
                <div className="text">
                    <p>3 WooCommerce Plugins to Boost Sales</p>
                    <span>28 Feb 2022</span>
                </div>
            </div>

            <div className="box">
                <h2>Get in Touch</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis</p>

                <div className="icon">
                    <i className='fa fa-location-dot'></i>
                    <label htmlFor=''>Location: 27 Division St, New York,NY 10002, USA</label>
                </div>
                <div className="icon">
                    <i className='fa fa-phone'></i>
                    <label htmlFor=''>Phone +94 71 8** 5170</label>
                </div>
                <div className="icon">
                    <i className='fa fa-envelope'></i>
                    <label htmlFor='/'>Email:support@gmail.com</label>
                </div>
            </div>
        </div>

        <div className="legal container">
            <p>Copyright @2022. All rights reserved.</p>
            <label htmlFor=''>
                Design & Developed by <span>GorkcODER</span>
            </label>
        </div>

    </footer>
    </>
  )
}

export default Footer