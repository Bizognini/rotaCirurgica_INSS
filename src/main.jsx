import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { StoreProvider } from './state/StoreProvider'
import './styles/global.css'

// HashRouter em vez de BrowserRouter: o GitHub Pages serve arquivos estáticos e
// não sabe reescrever rotas, então links diretos como /materias/prev quebrariam
// com F5. Com hash (#/materias/prev) tudo funciona sem configuração de servidor.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </HashRouter>
  </React.StrictMode>
)
