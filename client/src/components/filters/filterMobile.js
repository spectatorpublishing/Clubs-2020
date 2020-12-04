import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';


const Button = styled.button`
    background-color: #42B7CB;
    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.10);
    border-radius: 25px;
    width: 130px;
    height: 39px;
    border: none;
    cursor: pointer;

    :hover{
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
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

const blue = '#42B7CB';
const grey = "#9A9A9A";
const text = 'Filters';
const plus = '+';

export default class FilterMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: blue };
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor() {
        const newColor = this.state.color === blue ? grey : blue;
        this.setState({ color: newColor })
    }

    render() {
        return (
            <Button style={{ backgroundColor: this.state.color }} onClick={this.changeColor} >
                <TextWrapper><SignWrapper>{plus}</SignWrapper><Word>{text}</Word></TextWrapper>
            </Button>

        )
    }
}
ReactDOM.render(<FilterMobile />, document.getElementById('root'))
