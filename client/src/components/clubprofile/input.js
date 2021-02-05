import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: Roboto, sans-serif;
    font-style: normal;
`

const Label = styled.label`
    display: block;
    font-size: 1.125rem;
    line-height: 1.2em;
    font-weight: 600;
    color: ${props=>props.theme.colors.black};
`

const Input = styled.input`
    /* overide default settings */
    border: none;
    /* custom settings */
    width: 80%;
    border-bottom: 0.5px solid ${props=>props.theme.colors.gray};
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 2em;
    color: #696969;
    &:focus {
        outline: none;
    }
    &:-webkit-autofill {
        -webkit-text-fill-color: #696969;
        /* Todo: disable default autofill background */
    }
`

const Change = styled.button`
    display: ${props => props.show ? 'block' : 'none'};
    border: none;
    width: 20%;
    font-size: 0.875rem;
    text-align: center;
    color: #696969;
    background-color: inherit;

    &:focus {
        outline: none;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    margin-bottom: 2em;
`

export default function CustomInput(props) {
    const [userInput, setUserInput] = useState(props.initVal || '');

    function updateUserInput(e) {
        e.preventDefault();
        setUserInput(e.target.value);
    }

    return (
        <Container>
            <Label>{props.label}</Label>
            <Row>
                <Input
                    name={props.label}
                    type={props.type}
                    value={userInput}
                    onChange={updateUserInput}
                />
                <Change show={props.button} onClick={()=>props.callback(props.to)}>Change</Change>
            </Row>
        </Container>
    );
}
