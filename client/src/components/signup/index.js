import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import TomatoButton from '../tomatoButton';
import { ErrorText, handleLogin } from './helper';
import Signout from '../signout/index';
import * as firebase from '../../UserAuthUtilities/firebase';
import {createUser} from './helper'
//this is the version of the sign-up form to be used

export const SignUpBox = ({ detailLink, id, userCred }) => {
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(true);
  const [isPasswordShort, setIsPasswordShort] = useState(false);
  const history = useHistory();
  const [
    emailContainsIllegalCharacters,
    setEmailContainsIllegalCharacters,
  ] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  let modalData = {};

  const emailEx = /^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+/;

  function onSignupSubmit(e) {
    let shouldSubmit = true;
    // console.log(email.current.value.length)
    if (email.current.value.length <= 0) {
      shouldSubmit = false;
      //display message that email is empty
    }
    //if email is of invalid format, display invailidity and the reasons

    if (password.current.value !== confirmPassword.current.value) {
      shouldSubmit = false;
    }
    if (password && password.current.value.length <= 5) {
      setIsPasswordShort(true);
      shouldSubmit = false;
    } else if (password && password.current.value.length > 5)
      setIsPasswordShort(false);
    /*if (email && email.current.value.match(emailEx)) {
      setEmailContainsIllegalCharacters(true);
      shouldSubmit = false;
    } else if (email && !email.current.value.match(emailEx)) {
      setEmailContainsIllegalCharacters(false);
    }*/
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
            //history.push('/');
          },
          (error) => {
            console.log(error);
          }
        );

      //e.preventDefault();
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
      title: 'Hello, welcome back',
      desc: "Don't have an account for your club? ",
      descLink: '/signup',
      descLinkText: 'Register Here',
      detail: 'Email',
      detailTwo: 'Password',
    };
  }

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
        <Description>
          {modalData.desc}
          <Link href={modalData.descLink} paddingLeft='0.3rem'>
            {modalData.descLinkText}
          </Link>
        </Description>
        {id === 'signup' || id === 'login' ? (
          <SignUp>
            <InputSection marginBottom>
              <label htmlFor='userEmail'>{modalData.detail}</label>
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
                }}
              />
              {id === 'signup' && <InputDesc>{modalData.detailDesc}</InputDesc>}
              <ErrorText
                marginTop={8}
                stateToCheck={emailContainsIllegalCharacters}
                text='Your email contains illegal characters'
              />
            </InputSection>
            <InputSection marginBottom={id === 'signup'}>
              <label htmlFor='userPassword'>{modalData.detailTwo}</label>
              <FlexRow>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id='userPassword'
                  ref={password}
                  required
                  onChange={(e) => {
                    id === 'signup' &&
                      confirmPassword !== null &&
                      setDoPasswordsMatch(
                        e.target.value === confirmPassword.current.value
                      );
                    /*id === 'signup' &&
                      containsIllegalCharacters &&
                      setContainsIllegalCharacters(
                        e.target.value.match(emailEx) !== null
                      );*/
                    id === 'signup' &&
                      isPasswordShort &&
                      confirmPassword &&
                      setIsPasswordShort(e.target.value.length <= 5);
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
              </FlexRow>

              <ErrorText
                marginTop={8}
                stateToCheck={isPasswordShort}
                text='Your password needs to be longer than 5 characters'
              />
            </InputSection>
            {id === 'signup' && (
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
                  text='Confirmed password does not match'
                />
              </InputSection>
            )}
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
            <TomatoButton text='Log in' wire />
            <TomatoButton
              text='Log in with Google'
              wire
              margin='0.65rem 0 0 0'
              type='button'
              onClick={() => {
                handleLogin(userCred, history);
              }}
            />
            <Signout />
            <Description>Having Trouble?</Description>
          </FlexContainer>
        )}
        {id === 'confirmation' && (
          <Confirmation>
            <Icon>
              <Flap>
                <Dot></Dot>
              </Flap>
            </Icon>
            {modalData.detail}
            <EmailLink href={detailLink}>{modalData.detailLinkText}</EmailLink>
            {modalData.detailTwo}
          </Confirmation>
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
  flex-direction: column;
  align-items: center;
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
  color: ${(props) => props.theme.colors.gray};
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
  color: ${(props) => props.theme.colors.blue};
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
