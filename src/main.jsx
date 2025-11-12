import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// i18n configuration
import './i18n/config'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Bootstrap JS (for interactive components)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Custom styles - unified CSS file
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
