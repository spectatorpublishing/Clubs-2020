import React from 'react';
import ViewportProvider from './components/viewportProvider/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Explore } from './containers/Explore';
import { FAQ } from './containers/FAQ';
import { ThemeProvider } from 'styled-components';
import ProfileCreationMaster from './containers/ProfileCreation/ProfileCreationMaster';
import theme from './theme';
import { ClubProfile } from './containers/ClubProfile';
import { AccountTagTest } from './containers/AccountTagTest';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <ViewportProvider>
            <Route path='/club/:id'>
              <ClubProfile />
            </Route>
            <Route path='/profile-creation'>
              <ProfileCreationMaster />
            </Route>
            <Route path='/faq'>
              <FAQ />
            </Route>
            <Route path='/' exact>
              <Explore />
            </Route>
            <Route path='/account-test'>
              <AccountTagTest />
            </Route>          
            </ViewportProvider>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
