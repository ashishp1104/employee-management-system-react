// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import AuthProvider from './context/AuthProvider.jsx'
// import AuthContext from './context/AuthContext.jsx'
// import TaskContext from './context/TaskContext.jsx'

// localStorage.clear()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <AuthProvider>
        <App />
        </AuthProvider>  

    
  </React.StrictMode>,
)

/*
<AuthContext>
      <TaskContext>
        <App />
      </TaskContext>
    </AuthContext>
*/
