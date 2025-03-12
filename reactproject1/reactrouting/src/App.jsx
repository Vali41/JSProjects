import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header/App.jsx'
import Home from './components/Home/App.jsx'
import About from './components/About/App.jsx'
import Contact from './components/Contact/App.jsx'

import './App.css'

const App = () => (
  <>
  <Router>
    <div className='app-container'>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </Router>
  </>
)

export default App
