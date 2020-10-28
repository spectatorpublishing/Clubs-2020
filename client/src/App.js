import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Explore } from './containers/Explore';
import { FAQ } from './containers/FAQ';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/explore' component={Explore} />
          <Route path='/faq' component={FAQ} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
