/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AddFile from './AddFile';
import AddFolder from './AddFolder';
import Logout from './Logout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-file" exact component={AddFile} />
        <Route path="/add-folder" exact component={AddFolder} />
        <Route path="/logout" exact component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
