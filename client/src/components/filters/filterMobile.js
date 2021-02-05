import React, { useState } from 'react';
import styled, { css } from 'styled-components';


const Button = styled.button`
    background-color: ${(props) => props.theme.colors.turquoise};
    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.10);
    border-radius: 25px;
    width: 130px;
    height: 39px;
    border: none;
    cursor: pointer;

    :hover{
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
    }

    ${({ clicked }) =>
        clicked &&
        css`
            background-color: ${(props) => props.theme.colors.gray};
        `
    }    
`;

const TextWrapper = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    color: white;
    text-align: center;
    line-height: 21px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Word = styled.div`
    font-size:18px;
`;

const SignWrapper = styled.div`
    font-size: 22px;
    margin-right: 10px;
`;

const text = 'Filters';
const plus = '+';

export const FilterMobile = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <Button clicked={clicked} onClick={() => setClicked(!clicked)}>
            <TextWrapper><SignWrapper>{plus}</SignWrapper><Word>{text}</Word></TextWrapper>
        </Button>
    )
};

export default FilterMobile;
