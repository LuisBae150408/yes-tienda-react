import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

// HashRouter: las rutas viven después del "#", así no hace falta configurar el servidor.
createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
