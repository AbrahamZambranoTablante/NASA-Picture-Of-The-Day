import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Archive from './pages/Archive'
import ArchivePotd from './pages/ArchivePotd'

function App() {

  const video = "https://cdn.pixabay.com/video/2022/02/08/107129-675298808_large.mp4";

  function formatDate ( unformattedDate ) {
    let formattedDate = unformattedDate.split("/");
    formattedDate.unshift(formattedDate.pop());
    return formattedDate.join("-");
  }

  

  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted/>
        <div className="content">
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
        </div>
      </div>
    </>
  )
}

export default App
