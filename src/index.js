import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { AuthProvider } from './context/AuthProvider'
import { DarkModeContextProvider } from './context/darkModeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
)
