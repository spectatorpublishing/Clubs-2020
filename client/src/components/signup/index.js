import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import TomatoButton from '../tomatoButton';
import { ErrorText, handleLogin } from './helper';
import Signout from '../signout/index';
import * as firebase from '../../UserAuthUtilities/firebase';
import { createUser } from './helper';
import Checkbox from '../checkbox';
//this is the version of the sign-up/login (depends on id value given to components) form to be used

export const SignUpBox = ({ detailLink, id, userCred }) => {
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);
  const [isPasswordShort, setIsPasswordShort] = useState(false);
  const [isEmailNotFound, setIsEmailNotFound] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const history = useHistory();
  const [
    emailContainsIllegalCharacters,
    setEmailContainsIllegalCharacters,
  ] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  let modalData = {};

  const emailEx = /^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+/;

  const passEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

  const pwReqLength = 8;

  var {
    onSuccess: next = '/',
    onFailure: fallback, 
    ...prevState
  } = history.location.state || {};

  function checkEmail() {
    var shouldSubmit = true;

    if (!email || email.current.value.length <= 0) {
      shouldSubmit = false;
      setIsEmailEmpty(true);
      //display message that email is empty
    } else {
      setIsEmailEmpty(false);
    }

    return shouldSubmit;
  }

  function checkPassword() {
    var shouldSubmit = true;

    if (!password || !password.current || password.current.value.length <= 0) {
      shouldSubmit = false;
      setIsPasswordEmpty(true)
    } else {
      /* if email is of invalid format, display invailidity and the reasons */
      if (password && password.current.value !== confirmPassword.current.value) {
        shouldSubmit = false;
      }
      if (password && password.current.value.length <= pwReqLength) {
        setIsPasswordShort(true);
        shouldSubmit = false;
      } else if (password && password.current.value.length > pwReqLength)
        setIsPasswordShort(false);


      if (password.current.value.match(passEx)) {
        console.log("matched")
        setIsPasswordInvalid(false)
      }
      else {
        console.log("pass not matching reqs")
        setIsPasswordInvalid(true)
      }
      setIsPasswordEmpty(false)
    }

    return shouldSubmit;
  }

  function onSignupSubmit(e) {
    let shouldSubmit = checkEmail() && checkPassword();

    if (shouldSubmit) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          email.current.value,
          password.current.value
        )
        .then(
          (result) => {
            console.log(result.user.uid);
            createUser(result.user);
            firebase
              .auth()
              .currentUser.sendEmailVerification()
              .then(() => console.log(`Email sent to ${email.current.value}!`))
              .catch((err) => console.log(err.code));
            history.push('/profile-creation');
          },
          (error) => {
            console.log(error);
            handleErrors('signup', error);
          }
        );
    }
  }

  function onLoginSubmit(e, withGoogle = false) {
    // let {
    //   onSuccess: next = '/',
    //   onFailure: fallback, 
    //   ...prevState
    // } = history.location.state || {};

    if (withGoogle) {
      var google = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(google)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential; // This gives you a Google Access Token. You can use it to access the Google API.

          var token = credential.accessToken; // The signed-in user info.
          var user = result.user;
          console.log('signin successful');

          if (next === '/manageAccount/email/success')
            return user.updateEmail(prevState.newEmail)
          else
            history.push(next) /* redirect to homepage */
        }, (error) => {
          handleErrors('login', error);
        })
        .then(() => {
          /* update account info success */
          history.push(next, prevState)
        }, (error) => {
          /*
           * update account info failed, let user try again
           * by redirecting back to the update { email | password } page,
           * passing along the error code.
           */
          Object.assign(prevState, { error: error })
          history.push(fallback, prevState)
        })
    } else {
      let shouldSubmit = true;
      // console.log(email.current.value.length)
      if (!email || email.current.value.length <= 0) {
        shouldSubmit = false;
        setIsEmailEmpty(true);
        //display message that email is empty
      } else {
        setIsEmailEmpty(false);
      }

      if (!password || password.current.value.length <= 0) {
        shouldSubmit = false;
        setIsPasswordEmpty(true)
        //display message that email is empty
      }
      else {
        setIsPasswordEmpty(false)
      }

      if (shouldSubmit) {
        firebase
          .auth()
          .signInWithEmailAndPassword(
            email.current.value,
            password.current.value
          )

          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            setIsEmailNotFound(false);
            setIsPasswordIncorrect(false);
            setIsEmailInvalid(false);

            if (next === '/manageAccount/email/success')
              return user.updateEmail(prevState.newEmail)
            else
              history.push(next)
          }, (error) => {
            handleErrors('login', error);
          })
          .then(() => {
            history.push(next, prevState)
          }, (error) => {
            Object.assign(prevState, { error: error })
            history.push(fallback, prevState)
          })
      } else {
        setIsEmailNotFound(false);
        setIsPasswordIncorrect(false);
        setIsEmailInvalid(false);
      }
    }
  }


  /*
   * on /findpassword, we only worry about
   *  isEmailNotFound, isEmailInvalid, isEmailEmpty, emailContainsIllegalCharacters
   * field and we will enter with only setIsEmailEmpty and emailContainsIllegalCharacters
   * set if any.
   */
  function onSendReset() {
    if (!email.current.value.length) {
      // when user hasn't typed anything, email is empty but state not set
      setIsEmailEmpty(true)
      return
    } else if (emailContainsIllegalCharacters)
      return

    /* TODO:
     * @url: the continue url after users click the password reset link
     * sent via email and completes password reset. Need to set to our
     * login page.
     */
    var actionCodeSettings = {
    //   url: 'https://www.example.com/?email=user@example.com',
    };

    firebase.auth().sendPasswordResetEmail(
        email.current.value, actionCodeSettings)
        .then(function() {
          /* 
           * Password reset email sent.
           * No need to toggle error states because we'll be redirected
           */
          history.push('/findpassword/confirm');
        })
        .catch(function(error) {
          handleErrors('findpassword', error)
        });
  }

  /*
   * Initiates email reset process:
   * For security reasons, firebase recommends having user to re-authenticated
   * before making requests to update account info.
   * Here, we first try re-authenticate user, if not success, redirect user to
   * `/login` for re-authentication, passing along the `newEmail` as a prop. 
   */
  function initEmailReset() {
    var shouldSubmit = checkEmail();

    if (shouldSubmit)
      /* try re-authentication first */
      history.push('/login', {
        newEmail: email.current.value,
        onSuccess: '/manageAccount/email/success',
        onFailure: '/manageAccount/email',
        pageTitle: 'Log in to confirm change',
        hideDesc: true
      })
  }

  function initPwdReset() {
    var shouldSubmit = checkPassword();

    if (shouldSubmit)
      /* try re-authentication first */
      history.push('/login', {
        newPassword: password.current.value,
        onSuccess: '/',
        onFailure: '/manageAccount/email',
        pageTitle: 'Log in to confirm change',
        hideDesc: true
      })
  }

  function handleErrors(type, error) {

    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    console.log(errorCode);

    //general errors
    if (errorCode == "auth/invalid-email") {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }

    if (type === "signup") {
      //errors specific to signup
    } 
    else if (type === "login") {
      //errors specific to login

      if (errorCode === "auth/user-not-found") {
        setIsEmailNotFound(true);
      } else {
        setIsEmailNotFound(false);
      }
      
      if (errorCode === "auth/wrong-password") {
        setIsPasswordIncorrect(true);
      } else {
        setIsPasswordIncorrect(false);
      }
    } 
    else if (type === 'findpassword') {
      switch(errorCode) {
        case 'auth/user-not-found':
          setIsEmailNotFound(true)
          break
        default:
          setIsEmailNotFound(false)
      }
    }
  }

  if (id === 'signup') {
    modalData = {
      title: 'Welcome to Clubs@CU',
      desc: 'Already have an account?',
      descLink: '/login',
      descLinkText: 'Login Here',
      detail: 'Email',
      detailDesc: 'Club email preferred. Otherwise, use your personal .edu',
      detailTwo: 'Password',
      detailThree: 'Confirm Password',
    };
  } else if (id === 'confirmation') {
    modalData = {
      title: 'Club Profile Request Recieved!',
      desc: 'Already have an account?',
      descLink: './login',
      descLinkText: 'Login Here',
      detail:
        'Your request is being processed. You will recieve an email with further instructions in 24 hours. If you have any questions, please contact: ',
      detailLink: 'mailto:publisher@columbiaspectator.com',
      detailLinkText: 'publisher@columbiaspectator.com',
      detailTwo: '.',
      signUp: 'none',
      confirmation: true,
    };
  } else if (id === 'login') {
    modalData = {
      detail: 'Email',
      detailTwo: 'Password',
      detailTwoDesc: 'Forgot Your Password?',
      detailTwoDescLink: './findpassword',
      detailTwoDescLinkText: 'Reset Here',
    };

    if (!prevState.hideDesc)
      Object.assign(modalData, {
        desc: "Don't have an account for your club? ",
        descLink: '/signup',
        descLinkText: 'Register Here',
      })

    let title = prevState.pageTitle || 'Hello, welcome back';
    Object.assign(modalData, { title: title });
  } else if (id === 'findpassword') {
    modalData = {
      title: 'Password Reset',
      desc: "Don't have an account for your club? ",
      descLink: '/signup',
      descLinkText: 'Register Here',
      detail: 'Account Email',
    }
  } else if (id === 'confirmpwdreset') {
    modalData = {
      title: 'Password Reset Email Sent',
      desc: 'Already have an account?',
      descLink: '/login',
      descLinkText: 'Login Here',
      detail:
        'Password reset instructions have been sent to specified email. If you have any questions, please contact\n',
      detailLink: 'mailto:publisher@columbiaspectator.com',
      detailLinkText: 'publisher@columbiaspectator.com',
      detailTwo: '.\n\nSomething went wrong?\n',
      detailLinkTwo: '/findpassword',
      detailLinkTwoText: 'Resend Email',
      signUp: 'none',
      confirmation: true,
    }
  } else if (id === 'manageAccount') {
      modalData = {
        title: 'Update Account Information',
        desc: "Forgot Your Password?",
        descLink: '/findpassword',
        descLinkText: 'Reset Here',
        detail: 'Email',
        detailLink: '/manageAccount/email',
        detailLinkText: 'Change',
        detailTwo: 'Password',
        detailLinkTwo: '/manageAccount/password',
        detailLinkTwoText: 'Change',
      };
  } else if (id === 'resetEmail') {
    modalData = {
      title: 'Change Account Email',
      desc: 'To change email of account, the new user ' +
            'will receive an email with a link to approve the change. The ' +
            'new user must approve this change within 30 minutes of the request ' +
            'made here. For security purposes, only .edu addresses allowed.',
      descWarn: true,
      detail: 'New Email',
    };
  } else if (id === 'resetPassword') {
    modalData = {
      title: 'Change Account Password',
      desc: 'To change email of account, the new user ' +
            'will receive an email with a link to approve the change. The ' +
            'new user must approve this change within 30 minutes of the request ' +
            'made here. For security purposes, only .edu addresses allowed.',
      detail: 'New Email',
    };
    modalData = {
      title: 'Change Account Password',
      detailTwo: 'New Password',
      detailThree: 'Confirm New Password',
    };
  } else if (id === 'emailResetSuccess') {
    modalData = {
      title: 'Next, verify your new Email',
      desc: 'Verified your email?',
      descLink: '/login',
      descLinkText: 'Login Here',
      detail: (newEmail) => 
        (
          `Request made to change account email to ${newEmail}! Check your email to confirm change. ` +
          `If you have any questions, please contact\n`
        ),
      detailLink: 'mailto:publisher@columbiaspectator.com',
      detailLinkText: 'publisher@columbiaspectator.com',
      detailTwo: '.\n\nSomething went wrong?\n',
      detailLinkTwo: '/findpassword',
      detailLinkTwoText: 'Resend Email',
      signUp: 'none',
      confirmation: true,
    }
  };

  function openEye() {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='29'
        height='29'
        fill='currentColor'
        viewBox='0 0 16 16'
      >
        <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z' />
        <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z' />
      </svg>
    );
  }

  function closeEye() {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='29'
        height='29'
        fill='currentColor'
        viewBox='0 0 16 16'
      >
        <path d='M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z' />
        <path d='M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z' />
        <path d='M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z' />
      </svg>
    );
  }

  return (
    <Wrapper>
      <Container initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Title>{modalData.title}</Title>
        <Description warn={modalData.descWarn}>
          {modalData.desc}
          { !modalData.descLink ? null : (
            <Link href={modalData.descLink} paddingLeft='0.3rem'>
              {modalData.descLinkText}
            </Link>
          )}
        </Description>

        {/* Email Input Field */}
        {id === 'signup' || id === 'login' || id === 'findpassword' || id === 'manageAccount' || id === 'resetEmail' || id === 'resetPassword' ? (
          <SignUp>
            { id !== 'resetPassword' &&
              <InputSection marginBottom={id !== 'findpassword'}>
                <label htmlFor='userEmail'>{modalData.detail}</label>
                <FlexRow>
                  <Input
                    type='email'
                    id='userEmail'
                    required
                    ref={email}
                    onChange={(e) => {
                      emailContainsIllegalCharacters &&
                        setEmailContainsIllegalCharacters(
                          e.target.value.match(emailEx) === null
                        );

                      isEmailEmpty != e.target.value.length <= 0 &&
                        setIsEmailEmpty(false);


                      setIsEmailInvalid && setIsEmailInvalid(false);
                      setIsEmailNotFound && setIsEmailNotFound(false);
                    }}
                  />
                  {id == 'manageAccount' && (
                    <Description>
                      <Link
                        href={modalData.detailLink}
                        color='inherit'
                        paddingLeft='0.3rem'>Change</Link>
                    </Description>
                  )}
                </FlexRow>

                {id === 'signup' && <InputDesc>{modalData.detailDesc}</InputDesc>}
                <ErrorText
                  marginTop={8}
                  stateToCheck={isEmailEmpty}
                  text='Enter your email'
                />
                <ErrorText
                  marginTop={8}
                  stateToCheck={isEmailInvalid}
                  text='Email invalid'
                />
                <ErrorText
                  marginTop={8}
                  stateToCheck={emailContainsIllegalCharacters}
                  text='Your email contains illegal characters'
                />
                <ErrorText
                  marginTop={8}
                  stateToCheck={isEmailNotFound}
                  text='no account found for this email'
                />
              </InputSection>
            }
                
            {/* Password Input Field */}
            {(id === 'signup' || id === 'login' || id === 'manageAccount' || id === 'resetPassword') && (
              <InputSection marginBottom={id === 'signup' || id === 'resetPassword'}>
                <label htmlFor='userPassword'>{modalData.detailTwo}</label>
                <FlexRow>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id='userPassword'
                    ref={password}
                    required
                    onChange={(e) => {
                      ( id === 'signup' || id === 'resetPassword' ) &&
                        confirmPassword !== null &&
                        setDoPasswordsMatch(
                          e.target.value === confirmPassword.current.value
                        );

                      ( id === 'signup' || id === 'resetPassword' ) && setIsPasswordInvalid(false)

                      isPasswordEmpty != e.target.value.length <= 0 &&
                      setIsPasswordEmpty(false);
                      

                      ( id === 'signup' || id === 'resetPassword' ) &&
                        isPasswordShort &&
                        confirmPassword &&
                        setIsPasswordShort(e.target.value.length <= pwReqLength);


                      ( id === 'signup' || id === 'resetPassword' ) && setIsPasswordInvalid(false)

                    }}
                  />
                  <ShowPasswordButton
                    type='button'
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? openEye() : closeEye()}
                  </ShowPasswordButton>

                  { id === 'manageAccount' && (
                    <Description>
                      <Link
                        href={modalData.detailLinkTwo}
                        color='inherit'
                        paddingLeft='0.3rem'>Change</Link>
                    </Description>
                  )}
                </FlexRow>
                <ErrorText
                  marginTop={8}
                  stateToCheck={isPasswordEmpty}
                  text='Enter your password'
                />
                <ErrorText
                  marginTop={8}
                  stateToCheck={isPasswordShort}
                  text={'Your password needs to be longer than '+ pwReqLength +' characters'}
                />
                <ErrorText
                  marginTop={8}
                  stateToCheck={isPasswordIncorrect}
                  text='password is incorrect'
                />
                <ErrorText
                  marginTop={8}
                  stateToCheck={isPasswordInvalid}
                  text='Your password must contain a combination of lowercase letters and at least one capital letter, symbol and number'
                />
              </InputSection>
            )}
            
            {( id === 'signup' || id === 'resetPassword' ) && (
              <InputSection>
                <label htmlFor='userPasswordConfirm'>
                  {modalData.detailThree}
                </label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  required
                  id='userPasswordConfirm'
                  ref={confirmPassword}
                  onChange={(e) => {
                    setDoPasswordsMatch(
                      e.target.value === password.current.value
                    );
                  }}
                />
                <ErrorText
                  marginTop={8}
                  stateToCheck={!doPasswordsMatch}
                  text='passwords do not match'
                />
              </InputSection>
            )}

            {id === 'login' &&
              <InputDesc>
                {modalData.detailTwoDesc}
                <Link href={modalData.detailTwoDescLink} paddingLeft='0.3rem'>
                  {modalData.detailTwoDescLinkText}
                </Link>
              </InputDesc>}
          </SignUp>
        ) : (
          <div />
        )}

        {id === 'signup' && (
          <FlexContainer>
            <Description>
              By creating an account, you agree to the
              <div>
                <Link>Terms of Use</Link>
              </div>
            </Description>

            <TomatoButton
              text='Create Club Profile'
              wire
              type='button'
              onClick={(e) => {
                onSignupSubmit(e);
              }}
            />
          </FlexContainer>
        )}
        {id === 'login' && (
          <FlexContainer>
            <FlexContainer margin='0 0 .75rem 0' flexDirection='row'>
              <Checkbox
                firebase
                labelText='Remember Me'
              />
            </FlexContainer>
            <TomatoButton
              text='Log in'
              wire
              onClick={(e) => {
                onLoginSubmit(e);
              }}
            />
            <TomatoButton
              text='Log in with Google'
              wire
              margin='0.65rem 0 0 0'
              type='button'
              onClick={(e) => {
                onLoginSubmit(e, true);
              }}
            />
            {/* This is for testing VVVVV: */}
            {/* <Signout /> */}
            <Description>Having Trouble?</Description>
          </FlexContainer>
        )}
        {id === 'findpassword' && (
          <TomatoButton
            text='Send Reset'
            wire
            margin='0.65rem 0 0 0'
            type='button'
            onClick={onSendReset}
            />
        )}
        {(id === 'confirmation' || id === 'confirmpwdreset' || id === 'emailResetSuccess') && (
          <Confirmation>
            <Icon>
              <Flap>
                <Dot></Dot>
              </Flap>
            </Icon>
            {id === 'emailResetSuccess' ? modalData.detail('yl4387@columbia.edu') : modalData.detail}
            <EmailLink href={detailLink}>{modalData.detailLinkText}</EmailLink>
            {modalData.detailTwo}
            {id === 'confirmpwdreset' || id === 'emailResetSuccess' && (
              <Link href={modalData.detailLinkTwo}>
                  {modalData.detailLinkTwoText}
              </Link>
            )}
          </Confirmation>
        )}
        {id === 'confirmpwdreset' || id === 'emailResetSuccess' && (
          <FlexContainer marginTop='1.5em'>
            <TomatoButton text='Explore Clubs' wire onClick={() => {
              history.push('/')
            }} />

            { id === 'confirmpwdreset' && (
              <TomatoButton
                text='Club Log in'
                wire
                margin='0.65rem 0 0 0'
                type='button'
                onClick={() => {
                  history.push('/login')
                }} />
            )}
          </FlexContainer>
        )}
        {/* Change Account Email */}
        { ( id === 'resetEmail' || id === 'resetPassword' ) && (
          <FlexRow marginTop='1.5em'>
            <TomatoButton text='Cancel' wire onClick={() => {
              history.push('/')
            }} />
            <TomatoButton
              text={ id === 'resetEmail' ? 'Request Change' :
                     id === 'resetPassword' ? 'Save' : null }
              wire
              margin='0 0 0 2em'
              type='button'
              onClick={ id === 'resetEmail' ? initEmailReset :
                        id === 'resetPassword' ? initPwdReset : null } />
          </FlexRow>
        )}
      </Container>
    </Wrapper>
  );
};



const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled(motion.div)`
  width: 34.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-device-width: 30rem) {
    width: 100%;
  }
  font-weight: bold;
  font-family: 'Manrope', 'Roboto';
`;

const Title = styled.h1`
  font-size: 2.25rem;
  text-align: center;
  margin: 0;
  color: ${(props) => props.theme.colors.black}; ;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  align-items: center;
  margin-top: ${props => props.marginTop || 0};
  margin: ${(props) => props.margin};
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Description = styled.div`
  font-size: 1rem;
  line-height: 1.2rem;
  text-align: center;
  color: ${(props) => props.warn ? props.theme.colors.red : props.theme.colors.gray};
  padding: 0.75rem;
`;

const SignUp = styled.div`
  display: ${(props) => props.hidden};
  background-color: #ffffff;
  width: 24.4rem;
  border-radius: 0.4rem;
  box-shadow: 0.125rem 0.625rem 1.875rem rgba(0, 0, 0, 0.1);
  padding: 2rem;
  font-size: 0.875rem;
  line-height: 1rem;
  margin: 1.5rem 0;
  color: ${(props) => props.theme.colors.checkboxGray};
  @media only screen and (max-device-width: 30rem) {
    width: 75%;
  }
`;

const InputSection = styled.section`
  margin-bottom: ${(props) => (props.marginBottom ? '2rem' : '0rem')};
`;

const Confirmation = styled.div`
  display: ${(props) => props.hidden};
  background-color: #ffffff;
  width: 24.4rem;
  border-radius: 0.4rem;
  box-shadow: 0.125rem 0.625rem 1.875rem rgba(0, 0, 0, 0.1);
  padding: 8%;
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${(props) => props.theme.colors.checkboxGray};
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  white-space: pre-wrap;
  @media only screen and (max-device-width: 30rem) {
    width: 75%;
  }
`;

const Icon = styled.div`
  position: relative;
  height: 2.67rem;
  width: 3.33rem;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid ${(props) => props.theme.colors.turquoise};
  border-radius: 0.4rem;
  margin-top: 1rem;
`;

const ShowPasswordButton = styled(motion.button)`
  border: none;
  background: none;
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Flap = styled.div`
  width: 0;
  height: 0;
  border-left: 1.76rem solid transparent;
  border-right: 1.76rem solid transparent;
  border-top: 1.4rem solid ${(props) => props.theme.colors.turquoise};
  border-bottom: 0.2rem solid transparent;
  margin-left: auto;
  margin-right: auto;
`;

const Dot = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.red};
  margin-left: 0.8rem;
  margin-top: -2rem;
`;

const Link = styled.a`
  padding-left: ${(props) => props.paddingLeft};
  color: ${(props) => props.color || props.theme.colors.blue};
  text-decoration: none;
  cursor: pointer;
`;

const EmailLink = styled.a`
  color: #87bff0;
  text-decoration: none;
`;

const Input = styled.input`
  width: 100%;
  background: none;
  color: ${(props) => props.theme.colors.gray};
  border: none;
  border-bottom: 0.03rem solid ${(props) => props.theme.colors.gray};
  height: 1.3rem;
  font-size: 1.15em;
  margin: 0.75rem 0 0;
  padding-bottom: 0.25rem;
`;

const InputDesc = styled.div`
  font-size: 0.8rem;
  line-height: 0.95rem;
  color: ${(props) => props.theme.colors.gray};
  padding-top: 0.3rem;
`;
