import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import Navebar from './components/Navebar.jsx'
import Home from './Home.jsx'
import Form from './components/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Navebar />
     <Home />
     <Form />
    <Footer />
  </StrictMode>,
)

