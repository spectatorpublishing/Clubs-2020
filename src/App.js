import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Explore } from './containers/Explore';
import { FAQ } from './containers/FAQ';
import { Portal } from "./containers/Portal";
import { PortalLogin } from './containers/PortalLogIn'
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/portal/login' component={PortalLogin} />
          <Route path='/explore' component={Explore} />
          <Route path='/faq' component={FAQ} />
          <Route path='/portal' component={Portal} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
