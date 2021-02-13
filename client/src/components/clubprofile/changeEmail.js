import React, { createRef } from 'react';
import styled from 'styled-components';
import CustomInput from './input.js';

export const Header = styled.div`
  font-family: Manrope, sans-serif;
  font-style: normal;
  font-weight: 1000;
  font-size: 1.5rem;
  line-height: 1.3em;
  color: ${(props) => props.theme.colors.black};
`;

export const Inputs = styled.div`
  width: 60%;
`;
export const Form = styled.form`
  width: 100%;
`;

const Description = styled.div`
  font-family: Manrope, sans-serif;
  font-style: normal;
  font-weight: 600;
  /* For PD: 18px = 1.125rem looked too big */
  font-size: 1rem;
  line-height: 1.4em;
  white-space: pre-wrap;
  color: ${(props) => props.theme.colors.red};
  margin: 0.5em 0 2em;
`;

const Button = styled.button`
  border: none;
  border-radius: 7px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 2.4em;
  padding: 0 1em;
  text-align: center;
  margin-left: 0.5em;
  &:focus {
    outline: none;
  }
`;

export const Operations = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const Cancel = styled(Button)`
  border: 1px solid ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.red};
  background-color: white;
`;

export const Change = styled.input`
  border: none;
  border-radius: 7px;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 2.4em;
  padding: 0 1em;
  text-align: center;
  margin-left: 0.5em;
  &:focus {
    outline: none;
  }
  border: 1px solid ${(props) => props.theme.colors.red};
  color: white;
  background-color: ${(props) => props.theme.colors.red};
`;

const DESCRIPTION =
  'To change email of account, the new user ' +
  'will receive an email with a link to approve the change. The ' +
  'new user must approve this change within 30 minutes of the request ' +
  'made here. For security purposes, only .edu addresses allowed.';

const form = createRef();

export default function ChangeEmail(props) {
  function postEmailRequest(e) {
    /* POST update account email request here */
    let data = new FormData(form.current);
    // key/value pairs of the form can be obtained as follows:
    console.log('Email:', data.get('Email'));
    console.log('Confirm with Password:', data.get('Confirm with Password'));
    /* Todo: check email validity and password, then make API call to update account */

    props.setPage('confirmation');
    e.preventDefault();
  }

  return (
    <div>
      <Header>Change Account Email</Header>
      <Description>{DESCRIPTION}</Description>
      <Form noValidate ref={form} onSubmit={postEmailRequest}>
        <Inputs>
          <CustomInput label='Email' type='email' to='email' button={false} />
          <CustomInput
            label='Confirm with Password'
            type='password'
            to='password'
            button={false}
          />
        </Inputs>

        <Operations>
          <Change type='submit' value='Request Change' />
          <Cancel onClick={() => props.setPage('dashboard')}>Cancel</Cancel>
        </Operations>
      </Form>
    </div>
  );
}
