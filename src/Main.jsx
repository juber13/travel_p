import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <App />
//   </>
// )


// const root = ReactDOM.createRoot(document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <div>
    <App/>
    </div>
  </React.StrictMode>
)