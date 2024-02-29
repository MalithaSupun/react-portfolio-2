import React from 'react'
import home from '../../../assets/home.png'
const Home = () => {
  return (
    <>
    <section className='home'>
        <div className='container flex'>
            <div className="left">
                <div className="img">
                <img src={home} alt=''/>
                </div>
            </div>
            <div className='right topMargin'>
                <h1>
                    I AM A <br/>
                    FULLSTACK DEVELOPER
                </h1>
                <div className="socialIcon">
                    <i className='fab fa fa-facebook-f facebook'></i>
                    <i className='fab fa fa-instagram instagram'></i>
                    <i className='fab fa fa-twitter twitter'></i>
                    <i className='fab fa fa-youtube youtube'></i>
                    <i className='fab fa fa-github github'></i>
                    <i className='fab fa fa-linkedin linkedin'></i>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, accusantium ab praesentium veritatis doloribus id voluptates optio, hic nam ratione exercitationem, consequatur sapiente voluptatum corporis beatae consequuntur mollitia deserunt. Repudiandae?</p>
                <button className='primary-btn'>Contact Us</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home