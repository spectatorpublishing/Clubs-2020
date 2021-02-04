import React from 'react';
import styled from 'styled-components';

export const SignUpBox = ({
  title,
  desc,
  descLink,
  descLinkText,
  detail,
  detailDesc,
  detailLink,
  detailLinkText,
  detailTwo,
  detailThree,
  signUp,
  id,
  confirmation,
}) => {
  let modalData = {};
  if (id === 'login') {
    modalData = {
      title: 'Welcome to Clubs@CU',
      desc: 'Already have an account?',
      descLink: 'https://media2.giphy.com/media/lSbTmUmQwxUmiExV4h/giphy.gif',
      descLinkText: 'Login Here',
      detail: 'Email',
      detailDesc: 'Club email preferred. Otherwise, use your personal .edu',
      detailTwo: 'Password',
      detailThree: 'Confirm Password',
      confirmation: 'none',
    };
  } else if (id === 'confirmation') {
    modalData = {
      title: 'Club Profile Request Recieved!',
      desc: 'Already have an account?',
      descLink: 'https://media2.giphy.com/media/lSbTmUmQwxUmiExV4h/giphy.gif',
      descLinkText: 'Login Here',
      detail:
        'Your request is being processed. You will recieve an email with further instructions in 24 hours. If you have any questions, please contact: ',
      detailLink: 'mailto:publisher@columbiaspectator.com',
      detailLinkText: 'publisher@columbiaspectator.com',
      detailTwo: '.',
      signUp: 'none',
    };
  }

  return (
    <Container>
      <Title>{modalData.title}</Title>
      <Description>
        {modalData.desc}
        <Link href={modalData.descLink}>{modalData.descLinkText}</Link>
      </Description>
      <SignUp hidden={modalData.signUp}>
        <InputSection marginBottom>
          <label htmlFor='userEmail'>{modalData.detail}</label>
          <Input type='text' id='userEmail' />
          <InputDesc>{modalData.detailDesc}</InputDesc>
        </InputSection>
        <InputSection marginBottom>
          <label htmlFor='userPassword'>{modalData.detailTwo}</label>
          <Input type='password' id='userPassword' />
        </InputSection>
        <InputSection>
          <label htmlFor='userPasswordConfirm'>{modalData.detailThree}</label>
          <Input type='password' id='userPasswordConfirm' />
        </InputSection>
      </SignUp>
      <Confirmation hidden={modalData.confirmation}>
        <Icon>
          <Flap>
            <Dot></Dot>
          </Flap>
        </Icon>
        {modalData.detail}
        <EmailLink href={detailLink}>{modalData.detailLinkText}</EmailLink>
        {modalData.detailTwo}
      </Confirmation>
    </Container>
  );
};

const Container = styled.div`
  width: 34.7rem;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
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
  padding-left: 0.3rem;
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
`;

const EmailLink = styled.a`
  color: #87bff0;
  text-decoration: none;
`;

const Details = styled.div`
  /* padding-bottom: 1.125rem;
  padding-top: 1.125rem; */
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
