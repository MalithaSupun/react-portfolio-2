import React from 'react'
import Home from '../home/homes/Home'
import Branding from '../home/Branding'
import About from '../home/about/About'
import Service from '../home/servicess/Service'
import Wrapper from '../home/Wrapper'
import { Skill } from '../home/Skill'
import WrapperOne from '../../WrapperOne'

const HomePages = () => {
  return (
    <>
    <Home />
    <Branding />
    <About />
    <Service />
    <Wrapper />
    <Skill />
    <WrapperOne />
    </>
  )
}

export default HomePages