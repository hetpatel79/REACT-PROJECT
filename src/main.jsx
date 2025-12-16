import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sum from './Sum.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sum />
  </StrictMode>
)
