import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { cartProvider } from './context/CartContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <cartProvider>
    <App />
    </cartProvider>
  </StrictMode>,
)
