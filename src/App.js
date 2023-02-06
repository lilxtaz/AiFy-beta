import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Stats from './components/Stats'
import Slider from './components/Slider'
import { SliderData } from './components/SliderData'
import Tutorial from './components/Tutorial'
import Footer from './components/Footer'

const App = () => {

  return (
    <div>
      <Navbar />
      <Header />
      <Stats />
      <Slider slides={SliderData} />
      <Tutorial />
      <Footer />
    </div>
  )
}

export default App

