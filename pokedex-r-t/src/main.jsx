import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { PokedexProvider } from './contexts/PokedexContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <PokedexProvider>
  {/* <StrictMode> */}
    <App />
  {/* </StrictMode>, */}
  </PokedexProvider>
    
  
)


