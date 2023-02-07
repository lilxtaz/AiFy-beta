import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Started from './Started'
const App = () => {

  return (
  
    <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/get-started' element={<Started />}/>

    </Routes>)


}

export default App

