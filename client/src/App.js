import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import API from './API'
import Home from './Home'
import Started from './Started'
import Usage from './Usage'

const App = () => {

  return (
  
    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/get-started' element={<Started />}/>
      <Route path='/download' element={<Started />}/>
      <Route path='/usage' element={<Usage />}/>
      <Route path='/api-key' element={<API />}/>
      <Route path='/about' element={<About />}/>

    </Routes>)


}

export default App

