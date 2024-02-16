import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRoutes from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MainRoutes/>
  </BrowserRouter>
)