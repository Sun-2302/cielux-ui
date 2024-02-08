/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import React from 'react';
import Register from './Register';

function App() {
  return (
    <div className='flex h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* Ajoutez d'autres routes ici */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;