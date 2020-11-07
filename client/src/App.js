import React from 'react';
import ViewportProvider from './components/viewportProvider/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Explore } from './containers/Explore';
import { FAQ } from './containers/FAQ';
import { ThemeProvider } from 'styled-components';
import ProfileCreationMaster from './containers/ProfileCreation/ProfileCreationMaster';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ViewportProvider>
        <Navbar />
        <Router>
          <Switch>
            <Route path='/explore' component={Explore} />
            <Route path='/faq' component={FAQ} />
            <Route path='/profile-creation' component={ProfileCreationMaster} />
          </Switch>
        </Router>
      </ViewportProvider>
    </ThemeProvider>
  );
};

export default App;
