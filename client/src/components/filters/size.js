import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

import 'react-widgets/dist/css/react-widgets.css';
import { Multiselect } from 'react-widgets'

import Dropdown from '../dropdown/index';

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
    font-family: Roboto;
    font-style: normal;
    font-weight:500;
    font-size:18px;
    line-height:21px;
    text-align:center;
    word-spacing:20px;

`;

const SectionWrap = styled.div`
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

const MultiselectWrap = styled.div`
  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;


const white = '#FFFFFF';
const teal = '#42B7CB';
const grey = "#9A9A9A";
const Text = 'Size +';
const text = 'Size x';


export default class Size extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: white, textcolor: grey, text: Text, dropdownOpen: false, selectedSizes:[], sizes: ["0-10", "10-20", "20-50", "50-100", "100+" ]};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        if (this.state.dropdownOpen) {
            this.removeSelectedSizes(); //if it was true before clicking (so now false)
        }
        const newColor = this.state.color === white ? teal : white;
        const newTextColor = this.state.textcolor === grey ? white : grey;
        const newText = this.state.text === text ? Text : text;
        this.setState({ color: newColor, textcolor: newTextColor, text: newText, dropdownOpen: !this.state.dropdownOpen})
        
    }

    removeSelectedSizes() {
        this.setState({selectedSizes:[]});
    }

    

    render() {
        let {dropdownOpen, sizes, selectedSizes} = this.state;
        console.log("selected sizes", selectedSizes);

        return (
        <SectionWrap>
            <Button style={{ backgroundColor: this.state.color, color: this.state.textcolor }} onClick={this.handleClick} >
                <Word>{this.state.text}</Word>
            </Button>

            {dropdownOpen && (
                <MultiselectWrap>
                    {/* 
                    <Multiselect 
                    data={sizes}
                    value={selectedSizes}
                    onChange={selectedSizes => this.setState({ selectedSizes })}
                    textField="sizes"
                    placeholder = "Select Size"
                    showPlaceholderWithValues = {true}
                    />
                    */}
                    <Dropdown
                        items={sizes}
                        objId='size'
                        index={1}
                        data={selectedSizes}
                        setData={selectedSizes => this.setState({ selectedSizes })}
                        defaultValue={sizes[0]}
                    />
                </MultiselectWrap>
            )}
            </SectionWrap>
        )
    }
}
ReactDOM.render(<Size />, document.getElementById('root'))

