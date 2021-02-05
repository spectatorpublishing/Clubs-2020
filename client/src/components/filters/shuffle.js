import React from 'react';
import styled from 'styled-components';
import Icon from './shuffle.png';


const Button = styled.button`
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius:7px;
    width:130px;
    height:39px;
    border:0px;
    cursor: pointer;

    :hover{
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.20);
    }

    @media only screen and (max-width : 768px) {
            width: 39px;
        }
`;

const Word = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight:500;
    font-size:18px;
    line-height:21px;
    text-align:center;
    color: ${(props) => props.theme.colors.gray};
    float:right;
    padding-right:15px;

    @media only screen and (max-width : 768px) {
            display: none;
        }

`;

const Image = styled.div`
    padding-top:3px;
    float:left;
    padding-left:10px;

    @media only screen and (max-width : 768px) {
        float: none;
        padding:0;
    }
`;

const text = 'Shuffle';

export const Shuffle = () => {

    return (
        <Button>
            <Image><img src={Icon} width={15} height={15} alt="shuffle" /></Image>
            <Word>{text}</Word>
        </Button>
    )
};

export default Shuffle;
