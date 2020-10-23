import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Explore } from './containers/Explore';
import { FAQ } from './containers/FAQ';
import { ThemeProvider } from 'styled-components';
<<<<<<< HEAD
=======
import ProfileCreation from './containers/ProfileCreation'
>>>>>>> 833ce543bd4170ea9882eba164a51033836bd33d
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/explore' component={Explore} />
          <Route path='/faq' component={FAQ} />
<<<<<<< HEAD
=======
          <Route path='/profile-creation' component={ProfileCreation} />
>>>>>>> 833ce543bd4170ea9882eba164a51033836bd33d
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
