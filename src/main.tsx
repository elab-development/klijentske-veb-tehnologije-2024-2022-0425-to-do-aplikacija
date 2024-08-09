import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/Navbar.tsx'
import HeroSection from './components/HeroSection.tsx'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <>
    <Navbar />
    <HeroSection />
    <App />
  </>,
)
