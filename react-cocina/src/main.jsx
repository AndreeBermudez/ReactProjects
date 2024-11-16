import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style-cocina.css'
import { Cocina } from './Cocina'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cocina></Cocina>
  </StrictMode>,
)
