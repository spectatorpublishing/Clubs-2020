import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from './components/navbar';
import { Explore } from './containers/Explore';
import { FAQ } from './containers/FAQ';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Switch>
          <Route path='/explore' component={Explore}/>
          <Route path='/faq' component={FAQ}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;