import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Explore } from './containers/Explore';
import { FAQ } from './containers/FAQ';

import { Portal } from "./containers/Portal";
import { PortalLogin } from './containers/PortalLogIn'

import { SignUp } from './containers/SignUp';
import { Confirmation } from './containers/Confirmation';
import { ClubProfile } from './containers/ClubProfile';
import { ThemeProvider } from 'styled-components';

import Signin from './test/firebase/signin';
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
          <Route path='/signup' component={SignUp} />
          <Route path='/confirm' component={Confirmation} />
          <Route path='/clubprofile' component={ClubProfile} />
          <Route path='/test' component={Signin} /> 
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
