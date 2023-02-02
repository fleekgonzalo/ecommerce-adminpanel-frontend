import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { AuthProvider } from './context/AuthProvider'
import { DarkModeContextProvider } from './context/darkModeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <DarkModeContextProvider>
      <AuthProvider>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </AuthProvider>
    </DarkModeContextProvider>
  </BrowserRouter>
  </React.StrictMode>
)
