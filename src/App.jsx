import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Scholarship from './pages/Scholarship'

const App = () => {
  return (
    <Routes>
     <Route path="/" element={<Scholarship/>} />
  </Routes>
  )
}

export default App