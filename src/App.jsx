import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Archive from './pages/Archive'
import ArchivePotd from './pages/ArchivePotd'

function App() {


  function formatDate ( unformattedDate ) {
    let formattedDate = unformattedDate.split("/");
    formattedDate.unshift(formattedDate.pop());
    return formattedDate.join("-");
  }

  

  return (
    <>
      <Router>
        <NavBar formatDate={formatDate} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive formatDate={formatDate} />} />
          <Route path="/archive/pictureoftheday/:date" element={<ArchivePotd />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
