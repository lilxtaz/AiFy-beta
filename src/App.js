import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Stats from './components/Stats'
import Slider from './components/Slider'
import { SliderData } from './components/SliderData'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Stats />
      <Slider slides={SliderData} />
    </div>
  )
}

export default App