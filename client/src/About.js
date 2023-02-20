import React, { useEffect } from 'react'
import AboutHeader from './components/AboutHeader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Navbar />
        <AboutHeader />
        <Footer />
    </div>
  )
}

export default About