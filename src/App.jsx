/* eslint-disable react/no-deprecated */
import React from 'react';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import AddFile from './AddFile';
import AddFolder from './AddFolder';
import Logout from './Logout';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <Router>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add-file" element={<AddFile />} />
      <Route path="/add-folder" element={<AddFolder />} />
      <Route path="/logout" element={<Logout />} />
    </Router>
  );
}

export default App;
