import React, { useState } from 'react';
import styled, { css } from 'styled-components';


const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: auto;
`
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
    
    margin: 1rem;
`;

const TextWrapper = styled.div`
    font-style: normal;
    font-weight: 500;
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    line-height: 21px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Word = styled.div`
    font-size:18px;
`;

export const ImageUploadButton = ({clubProfileId, errHandler}) => {

    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
        console.log(this.state.selectedFile);
    }

    //Brainstorm error handler for this

    filUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);

        /*
        fetch('')
        .then(res => {pass})
        .catch(err => console.log(err, res));
        */

    }

    return (
        <>
            <input 
            style={{display:'none'}} 
            type="file" 
            onChange={this.fileSelectedHandler}
            ref = {fileInput => this.fileInput = fileInput}/>

            <ButtonWrapper>

                <Button onClick={() => this.fileInput.click()}>
                    <TextWrapper><Word>Select Image</Word></TextWrapper>
                </Button>

                <Button onClick={this.fileUploadHandler}>
                    <TextWrapper><Word>Upload Image</Word></TextWrapper>
                </Button>

            </ButtonWrapper>
        </>
    )
};

export default ImageUploadButton;
