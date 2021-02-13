import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TomatoButton from '../tomatoButton';

export const SignUpBox = ({ detailLink, id }) => {
  let modalData = {};
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
              <Input type='text' id='userEmail' />
              {id === 'signup' && <InputDesc>{modalData.detailDesc}</InputDesc>}
            </InputSection>
            <InputSection marginBottom={id === 'signup'}>
              <label htmlFor='userPassword'>{modalData.detailTwo}</label>
              <Input type='password' id='userPassword' />
            </InputSection>
            {id === 'signup' && (
              <InputSection>
                <label htmlFor='userPasswordConfirm'>
                  {modalData.detailThree}
                </label>
                <Input type='password' id='userPasswordConfirm' />
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
            <TomatoButton text='Create Club Profile' wire />
          </FlexContainer>
        )}
        {id === 'login' && (
          <FlexContainer>
            <TomatoButton text='Log in' wire />
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
  margin-bottom: ${(props) => (props.marginBottom ? '2.3rem' : '0rem')};
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
