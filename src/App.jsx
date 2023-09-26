import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/home'
import Skills from './components/skills.jsx'
import Interest from './components/interest'
import Story from './components/story'
import Projects from './components/projects'
function App() {



  return (
    <>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/interests' element={<Interest/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      
      
      
      
    </>
  )
}

export default App
