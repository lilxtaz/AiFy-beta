import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import SideNav from './components/SideNav'
import APIHeader from './components/APIHeader'
import Footer from './components/Footer'

const API = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <SideNav />
        <Navbar />
        <APIHeader />
        <Footer />
        
        
    </div>
  )
}

export default API