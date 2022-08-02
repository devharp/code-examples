import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import HarpAppState from './context/HarpAppState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HarpAppState>
      <App />
    </HarpAppState>
  </React.StrictMode>
)
