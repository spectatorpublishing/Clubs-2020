import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Explore } from "./containers/Explore";
import { FAQ } from "./containers/FAQ";
import { ThemeProvider } from "styled-components";
import ProfileCreation from "./containers/ProfileCreation";
import theme from "./theme";
import { ProfileBoxTester } from "./containers/ProfileBoxTester";
import { SocialTagsBoxTester } from "./containers/SocialTagsBoxTester";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/profile-test">
            <ProfileBoxTester />
          </Route>
          <Route path="/profile-creation">
            <ProfileCreation />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/">
            <Explore />
          </Route>
          <Route path="/social-tag-test">
            <SocialTagsBoxTester />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
