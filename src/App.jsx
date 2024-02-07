import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import React from 'react';

function App() {
  return (
    <div className='flex h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/login' element={<Login />} />
          {/* Ajoutez d'autres routes ici */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;