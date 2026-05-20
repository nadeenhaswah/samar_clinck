import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Results from './pages/Results';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';
import MainLayout from './Layout/MainLayout';

function App() {

  return (
    <>
     <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/results" element={<Results />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
     </Routes>
    </>
  )
}

export default App
