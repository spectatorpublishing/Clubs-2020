import React, { useState } from 'react';
import styled, { css } from 'styled-components';


const Button = styled.button`
    background-color: ${(props) => props.theme.colors.fullWhite};
    color: ${(props) => props.theme.colors.gray};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius:7px;
    width:130px;
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

/*
const white = '#FFFFFF';
const blue = '#78C0F5';
const grey = "#9A9A9A";
const Text = 'Joining +';
const text = 'Joining x';

export default class Join extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: white, textcolor: grey, text: Text };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor() {
        const newColor = this.state.color === white ? blue : white;
        const newTextColor = this.state.textcolor === grey ? white : grey;
        const newText = this.state.text === text ? Text : text;
        this.setState({ color: newColor, textcolor: newTextColor, text: newText })
    }

    render() {
        return (
            <Button style={{ backgroundColor: this.state.color, color: this.state.textcolor }} onClick={this.changeColor} >
                <Word>{this.state.text}</Word>
            </Button>

        )
    }
}
ReactDOM.render(<Join />, document.getElementById('root'))
*/
const TextAdd = 'Joining +';
const TextRemove = 'Joining x';

export const Join = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <Button clicked={clicked} onClick={() => setClicked(!clicked)}>
            <Word>{clicked ? TextAdd : TextRemove}</Word>
        </Button>
    )
};

export default Join;