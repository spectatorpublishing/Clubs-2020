import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router';
import { MobileAndTablet, Desktop } from 'react-responsive-simple';

import { useRoutes } from 'hookrouter';

import { Navbar } from './components/Navbar';
import { Explore } from './containers/Explore';
import { FAQ } from './containers/FAQ';


const routes = {
  '/explore': () => <Explore />,
  '/faq': () => <FAQ />,
}

function App() {
  const match = useRoutes(routes);
  return (
    <div>
      <Navbar />
      {match}
    </div>
  );
}

export default App;
