import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Explore } from "./containers/Explore";
import { FAQ } from "./containers/FAQ";
import { ThemeProvider } from "styled-components";
import ProfileCreation from "./containers/ProfileCreation";
import theme from "./theme";
import { ProfileBoxTester } from "./containers/ProfileBoxTester";
import { ClubProfile } from "./containers/ClubProfile";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/explore" component={Explore} />
          <Route path="/faq" component={FAQ} />
          <Route path="/profile-creation" component={ProfileCreation} />
          <Route path="/profile-test" component={ProfileBoxTester} />
          <Route path="/club-profile" component={ClubProfile} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
