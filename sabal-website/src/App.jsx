import './App.css'
import Create from './Create.jsx'
import Connect from './Connect.jsx'
import Educate from './Educate.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Footer from './components/Footer.jsx'

// ATTENTION! ROUTER BREAKS WHEN RELOADED WITHOUT ADJUSTING THE .htaccess FILE.
//Make sure to create an .htaccess file for your server so that something like /educate will link back
//to index.html instead of a 404 error
function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/educate" element={<Educate />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
