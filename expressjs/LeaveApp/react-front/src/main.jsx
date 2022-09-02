import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ChatAppState from './state/ChatAppState'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatAppState>
      <App />
    </ChatAppState>
  </React.StrictMode>
)
