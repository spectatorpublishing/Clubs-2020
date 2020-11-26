import React from 'react';
import styled from 'styled-components';
import Icon from './shuffle.png';


const Button = styled.button`
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius:7px;
    width:130px;
    height:39px;
    border:0px;
    cursor: pointer;
`;

const Word = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight:500;
    font-size:18px;
    line-height:21px;
    text-align:center;
    color:#9A9A9A;
    float:right;
    padding-right:15px;

`;

const Image = styled.div`
    padding-top:3px;
    float:left;
    padding-left:10px;
`;

class Shuffle extends React.Component {
    constructor() {
        super();
        this.state = { text: 'Shuffle' }
    }

    render() {
        const { text } = this.state;
        return (

            <Button>
                <Image><img src={Icon} width={12} height={12} alt="shuffle" /></Image>
                <Word>{text}</Word>
            </Button>
        )
    }
}
export default Shuffle;
