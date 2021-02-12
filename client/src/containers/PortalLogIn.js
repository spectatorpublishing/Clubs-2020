import React, { useRef } from 'react'
import styled from 'styled-components'
import { PageWrapper } from './Portal'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 25rem;
    margin-top: 2.5em;
`

const Label = styled.label`
    font-size: 1rem;
    line-height: 1.4em;
    color: ${props => props.theme.colors.black};
`

const InputField = styled.input`
    border: none;
    border-bottom: 0.5px solid #9A9A9A;
    font-size: 1.125rem;
    line-height: 1.4em;
    margin: .5em 0 1em;

    &:-webkit-autofill {
        font-size: 1.125rem;
        /* hack to remove chrome autofill background */
        transition: background-color 5000s;
    }
    &:focus{
        outline: none;
    }
`

const Login = styled.button`
    border: none;
    border-bottom: 0.5px solid #9A9A9A;
    width: 3em;
    background-color: white;
    text-align: left;
    padding: 0;
    margin-top: 1.5em;
    font-size: .85em;
    line-height: 1.5em;

    &:focus {
        outline: none;
    }
`;

export function PortalLogin() {
    const formRef = useRef();

    const handleSubmit = () => {
        const form = new FormData(formRef.current)
        alert(`email: ${form.get('email')}, password: ${form.get('password')}`)
    }

    return (
        <PageWrapper>
            <h1>Clubs@CU Admin Portal</h1>
            <Form noValidate ref={formRef} onSubmit={handleSubmit}>
                <Label>Email</Label>
                <InputField type='email' name='email' />

                <Label>Password</Label>
                <InputField type='password' name='password'/>

                <Login type='submit'>Log in</Login>
            </Form>
        </PageWrapper>
    )
}