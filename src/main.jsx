import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './bootstrap.min.css'
import './mystyle.css'
import Job from './Job.jsx'
import 'material-icons/iconfont/material-icons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container-fluid min-vh-100 d-flex flex-column align-items-center py-3 bg-codev'>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Job />} />
      </Routes>
    </BrowserRouter>
  </div>,
)
