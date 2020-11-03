import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Explore } from './containers/Explore';
import { FAQ } from './containers/FAQ';
import {ClubProfile} from './containers/ClubProfile';
import { ThemeProvider } from 'styled-components';
import ProfileCreation from './containers/ProfileCreation'
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/explore' component={Explore} />
          <Route path='/faq' component={FAQ} />
          <Route path='/profile-creation' component={ProfileCreation} />
          <Route path='/club-profile' component={ClubProfile} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
