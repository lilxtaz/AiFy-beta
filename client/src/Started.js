import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import SideNav from './components/SideNav'
import StartedHeader from './components/StartedHeader'
import Footer from './components/Footer'

const Started = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <SideNav />
        <Navbar />
        <StartedHeader />
        <Footer />
    </div>
  )
}

export default Started