import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//components
import MapView from './components/MapView'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={MapView}/>
        {/* <Route path='/' component={Home}/> */}
      </Switch>
    </Router>
  );
}

export default App;
