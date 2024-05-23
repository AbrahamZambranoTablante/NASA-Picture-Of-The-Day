import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Archive from './pages/Archive'
import ArchivePotd from './pages/ArchivePodt'

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/archive/pictureoftheday/:date" element={<ArchivePotd />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
