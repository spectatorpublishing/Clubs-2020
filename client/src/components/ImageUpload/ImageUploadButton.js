import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import multer from 'multer';
import multerS3 from 'multer-s3';
import awsSDK from 'aws-sdk';

const FullWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right:1rem;

`

const ImageBox = styled.div`
    background-color: white;
    background-repeat: no-repeat;
    background-size: cover;
    border-style: solid;
    border-radius: 10px;
    border-color: ${(props) => props.theme.colors.red};
    border-width: 3px;

    height: 275px;
    width: 275px;
    margin-left:1rem;
`

const Preview = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;

    /* height: 100%; */
    width: 100%;

    max-height: 100%;
    max-width: 100%;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: auto;
`
const Button = styled.button`
    background-color: ${(props) => props.theme.colors.red};
    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.10);
    border-radius: 25px;
    width: 130px;
    height: 39px;
    border: none;
    cursor: pointer;

    :hover{
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
    }
    
    margin-left:1rem;
    margin-top: 1rem;
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

class ImageUploadButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFile: null,
            fileURL: this.props.clubProfile.imageUrl
            
        };

        console.log(props);

        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.fileUploadHandler = this.fileUploadHandler.bind(this);
    }

    fileSelectedHandler(event){
        this.setState({
            selectedFile: event.target.files[0],
            fileURL: URL.createObjectURL(event.target.files[0])
        });
    }

    //Brainstorm error handler for this

    fileUploadHandler() {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);

        fetch(`${window.origin}/api/image-upload//imgUpload/${this.props.clubProfileId}`, {
            method: 'POST',
            body: fd
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.props.setClubProfile({...this.props.clubProfile, imageUrl: data.imageUrl});
        })
        .catch(err => {
            console.error(err);
        });

    }

    render() {
        return (
            <>
                <input 
                style={{display:'none'}} 
                type="file" 
                onChange={this.fileSelectedHandler}
                ref = {fileInput => this.fileInput = fileInput}/>
                <FullWrapper>

                    <ImageBox>
                        <Preview src = {this.state.fileURL}></Preview>
                    </ImageBox>

                    <ButtonWrapper>

                        <Button onClick={() => this.fileInput.click()}>
                            <TextWrapper><Word>Select Image</Word></TextWrapper>
                        </Button>

                        <Button onClick={this.fileUploadHandler}>
                            <TextWrapper><Word>Upload Image</Word></TextWrapper>
                        </Button>

                    </ButtonWrapper>

                    
                </FullWrapper>
            </>
        )
    }
}

export default ImageUploadButton;
