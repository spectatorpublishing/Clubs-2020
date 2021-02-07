import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';



const Button = styled.button`
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius:7px;
    width:99px;
    height:39px;
    border:0px;
    cursor: pointer;

    :hover{
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    }
`;

const Word = styled.div`
    font-family: 'Manrope', 'Roboto', 'Arial', 'Helvetica';
    font-style: normal;
    font-weight:500;
    font-size:18px;
    line-height:21px;
    text-align:center;
    word-spacing:20px;

`;


const white = '#FFFFFF';
const teal = '#42B7CB';
const grey = "#9A9A9A";
const Text = 'Size +';
const text = 'Size x';

export default class Size extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: white, textcolor: grey, text: Text };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor() {
        const newColor = this.state.color === white ? teal : white;
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
ReactDOM.render(<Size />, document.getElementById('root'))

