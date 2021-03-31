import ViewportProvider from './components/viewportProvider/index';
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Explore from './containers/Explore';
import { FAQ } from './containers/FAQ';
import { Portal } from './containers/Portal';
import { PortalLogin } from './containers/PortalLogIn';
import { SignUp } from './containers/SignUp';
import { Confirmation } from './containers/Confirmation';
import ClubProfileDisplay from './containers/ClubProfileDisplay';
import {ClubAccountManagement} from './containers/ClubAccountManagement';
import { Login } from './containers/Login';
import { ThemeProvider } from 'styled-components';
import ProfileCreationMaster from './containers/ProfileCreation/ProfileCreationMaster';
import Signin from './containers/FirebaseApiSetUpTest/firebase/signin';
import Signup from './containers/FirebaseApiSetUpTest/firebase/signup';
import * as firebase from './UserAuthUtilities/firebase';
import theme from './theme';
import { Navbar } from './components/navbar';
import { FindPassword } from './containers/FindPassword';
import { ConfirmPasswordReset } from './containers/ConfirmPasswordReset';
import { rememberMe } from './containers/FirebaseApiSetUpTest/firebase/rememberMe';

const App = () => {
  const [userCred, setUserCred] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [clubAccountInfo, setclubAccountInfo] = useState(null);

  const getClubAccountInfo = (f_id) => {

    console.log("----------------vvv")

    // This function grabs the user account info to be passed down
    fetch(`/api/clubAccounts/getByFirebaseId/${f_id}`)
    .then(res => res.json())
        .then(res => {
            console.log("---------------------vvvvvvvvv")
            console.log(res)
            console.log("^^^^^^^^^---------------------")

            console.log( (res.verificationStatus !== "incomplete" && res.verificationStatus !== "denied"))
            console.log('++++++++++++++');
            setclubAccountInfo(res)
      })

      /* club profile not created, direct to profile creation page */
      // .then((res) => (res.clubProfileID ? 'home' : 'profile'))
      .catch(function (err) {
        console.error(err);
        console.error("err");
      })
  }

  // const isOwnAccount = (prof_id) =>{
  //   if (clubAccountInfo && clubAccountInfo.clubProfileId == ) {

  //   } ? clubAccountInfo.clubProfileId : "user"
  // }


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
        console.log("userId: ", user.uid);
        //get the club account info by firebaseId and save in state
        getClubAccountInfo(user.uid)

        //save the user firebase credential info in state
        setUserCred(user);
        setLoggedIn(true);
        console.log('Signed in.');
      } else {
        //make sure firebase auth login persistence is set to session only
        rememberMe(false);
        setLoggedIn(false);
        console.log('Not signed in.');
      }
    });
  }, []);

  
  console.log(clubAccountInfo && (clubAccountInfo.verificationStatus !== "incomplete" && clubAccountInfo.verificationStatus !== "denied"))
  console.log('---=-=---=--');

  return (
    <ThemeProvider theme={theme}>
      <ViewportProvider>
        <Router>
        <Navbar loggedIn = {userCred !== null} authLevel = {clubAccountInfo ? clubAccountInfo.authorityLevel : "user"} profileId = {clubAccountInfo ? clubAccountInfo.clubProfileId : null}/>
          <Switch>
              <Route path='/club/:id'>
                <ClubProfileDisplay isLoggedin={loggedIn}/>
              </Route>
              <Route path='/profile-creation'>
                <ProfileCreationMaster userCred={userCred}/>
              </Route>
              <Route path='/faq' component={FAQ}/>
              <Route path='/' exact component={Explore}/>
              <Route path='/portal/login' component={PortalLogin} />
              <Route path='/portal' component={Portal} />
              <Route path='/signup'>
                <SignUp userCred={userCred} />
              </Route>
              <Route path='/confirm' component={Confirmation} />
              <Route path='/clubprofile' component={ClubAccountManagement} />
              <Route path='/login'>
                <Login userCred={userCred} />
              </Route>
              <Route exact path='/findpassword/confirm' component={ConfirmPasswordReset} />
              <Route exact path='/findpassword'>
                <FindPassword userCred={userCred} />
              </Route>
            
            {/* <Route path='/test' component={Signin} />
            <Route path='/test_signin' component={Signin} />
            <Route path='/test_signup' component={Signup} /> */}
          </Switch>
        </Router>
      </ViewportProvider>
      
      {/* <Navbar/> */}
    </ThemeProvider>
  );
};

export default App;