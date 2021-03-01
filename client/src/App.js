import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Explore } from './containers/Explore';
import { FAQ } from './containers/FAQ';
import { Portal } from './containers/Portal';
import { PortalLogin } from './containers/PortalLogIn';
import { SignUp } from './containers/SignUp';
import { Confirmation } from './containers/Confirmation';
import { ClubProfile } from './containers/ClubProfile';
import { Login } from './containers/Login';
import { ThemeProvider } from 'styled-components';
import Signin from './containers/FirebaseApiSetUpTest/firebase/signin';
import Signup from './containers/FirebaseApiSetUpTest/firebase/signup';
import * as firebase from './UserAuthUtilities/firebase';
import theme from './theme';

const App = () => {
  const [userCred, setUserCred] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
        setUserCred(user);
        console.log('Signed in.');
      } else {
        console.log('Not signed in.');
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/portal/login' component={PortalLogin} />
          <Route path='/explore' component={Explore} />
          <Route path='/faq' component={FAQ} />
          <Route path='/portal' component={Portal} />
          <Route path='/signup'>
            <SignUp userCred={userCred} />
          </Route>
          <Route path='/confirm' component={Confirmation} />
          <Route path='/clubprofile' component={ClubProfile} />
          <Route path='/login'>
            <Login userCred={userCred} />
          </Route>
          <Route path='/test' component={Signin} />
          <Route path='/test_signin' component={Signin} />
          <Route path='/test_signup' component={Signup} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
