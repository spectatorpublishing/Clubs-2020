import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Explore } from './containers/Explore';
import { FAQ } from './containers/FAQ';
import ProfileCreation from './containers/ProfileCreation';

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/explore' component={Explore} />
          <Route path='/faq' component={FAQ} />
          <Route path='/profile-creation' component={ProfileCreation} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
