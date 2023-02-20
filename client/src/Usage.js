import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import SideNav from './components/SideNav'
import UsageHeader from './components/UsageHeader'
import Footer from './components/Footer'

const Usage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <SideNav />
        <Navbar />
        <UsageHeader />
        <Footer />
    </div>
  )
}

export default Usage