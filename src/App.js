import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Stats from './components/Stats'
import Slider from './components/Slider'
import { SliderData } from './components/SliderData'
import Features from './components/Features'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Stats />
      <Slider slides={SliderData} />
      <Features />
    </div>
  )
}

export default App