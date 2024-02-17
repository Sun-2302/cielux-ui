/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Navigate } from 'react-router-dom';
import Home from './Home';
import AddFile from './AddFile';
import AddFolder from './AddFolder';
import Logout from './Logout';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/Home" exact component={Home} />
        <Route path="/add-file" exact component={AddFile} />
        <Route path="/add-folder" exact component={AddFolder} />
        <Route path="/logout" exact component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
