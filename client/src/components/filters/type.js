import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import Dropdown from '../dropdown/index';

const Button = styled.button`
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius:7px;
    width:104px;
    height:39px;
    border:0px;
    cursor: pointer;

    :hover{
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
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

const CheckboxContainer = styled.div`
  margin: 0 0.75rem 0.5rem;
  @media screen and (max-width: 800px) {
    margin: 0 1.5rem 0.5rem 0;
  }
  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

const DropdownContainer = styled(CheckboxContainer)`
  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;


const white = '#FFFFFF';
const orange = '#EC6C52';
const grey = "#9A9A9A";
const Text = 'Type +';
const text = 'Type x';


export default class Type extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: white, textcolor: grey, text: Text, dropdownOpen: false, selectedTags:};
        //this.changeColor = this.changeColor.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const newColor = this.state.color === white ? orange : white;
        const newTextColor = this.state.textcolor === grey ? white : grey;
        const newText = this.state.text === text ? Text : text;
        this.setState({ color: newColor, textcolor: newTextColor, text: newText, dropdownOpen: true})
    }


    render() {
        return (
        <Button style={{ backgroundColor: this.state.color, color: this.state.textcolor }} onClick={this.handleClick} >
            <Word>{this.state.text}</Word>
        </Button>
        )
    }
}
ReactDOM.render(<Type />, document.getElementById('root'))
