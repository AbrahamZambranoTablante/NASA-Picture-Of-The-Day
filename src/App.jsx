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

  
  const [calendarDate, setCalendarDate] = useState({date: ""});

  function formatDate ( unformattedDate ) {
    let formattedDate = unformattedDate.split("/");
    formattedDate.unshift(formattedDate.pop());
    return formattedDate.join("-");
  }

 function handleDate (e) {
    setCalendarDate({
        ...calendarDate, [e.target.id]: e.target.value
    })
  }

  

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive formatDate={formatDate} setCalendarDate={setCalendarDate} handleDate={handleDate} calendarDate={calendarDate} />} />
          <Route path="/archive/pictureoftheday/:date" element={<ArchivePotd formatDate={formatDate} setCalendarDate={setCalendarDate} handleDate={handleDate} calendarDate={calendarDate} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
