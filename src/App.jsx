import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Projects from './pages/Projects'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/">
      <nav className="navbar">
        <NavLink to="/" end>Projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="icon-footer">
        <a href="https://ethanberko.itch.io/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/itchio-logo-textless-black.png" alt="itch.io" className="icon_footer-img-link" />
        </a>
        <a href="https://github.com/ethan-berkowitz" target="_blank" rel="noopener noreferrer">
          <img src="/assets/GitHub_Invertocat_Black.png" alt="github.com" className="icon_footer-img-link" />
        </a>
      </footer>
    </BrowserRouter>
  )
}

export default App