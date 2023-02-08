import React from 'react'
import { Route, Routes } from 'react-router-dom'
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

    </Routes>)


}

export default App

