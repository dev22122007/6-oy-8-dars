import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' />
      <Route path='/skills' />
      <Route path='/project' />
      <Route path='/contact' />
    </Routes>
  </BrowserRouter>,
)