import React, { useState } from 'react';
import styled, { css } from 'styled-components';


const Button = styled.button`
    background-color: ${(props) => props.theme.colors.fullWhite};
    color: ${(props) => props.theme.colors.gray};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius:7px;
    width:104px;
    height:39px;
    border:0px;
    cursor: pointer;

    :hover{
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    }

    ${({ clicked }) =>
        clicked &&
        css`
            background-color: ${(props) => props.theme.colors.turquoise};
            color: ${(props) => props.theme.colors.fullWhite};
        `
    }
`;

const Word = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight:500;
    font-size:18px;
    line-height:21px;
    text-align:center;
    word-spacing:20px;

`;

const TextAdd = 'Type +';
const TextRemove = 'Type x';

export const Type = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <Button clicked={clicked} onClick={() => setClicked(!clicked)}>
            <Word>{clicked ? TextAdd : TextRemove}</Word>
        </Button>
    )
};

export default Type;