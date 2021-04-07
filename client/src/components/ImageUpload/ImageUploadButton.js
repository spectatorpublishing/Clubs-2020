import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import RedAsterisk from '../redAsterisk';

const Wrap = styled.div`
    display: flex;
    margin: 1rem 0;
`;

const TagHeader = styled.h3`
  font-weight: 600;
  margin-left: 0.3rem;
  font-size: 1.125rem;
`;

const ImageBox = styled.div`
    background-color: white;
    border: 3px solid ${(props) => props.theme.colors.red};
    border-radius: 10px;
    white-space: nowrap;
    text-align: center; 
    height: 275px;
    width: 275px;
    margin-left:1rem;
    padding: 1rem;
`;

const Preview = styled.img`
    border-radius: 10px;
    vertical-align: middle;
    width: 100%;

    max-height: 100%;
    max-width: 100%;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: auto;

    @media screen and ( max-width: 500px) {
        flex-direction: column;
    }
`;

const Input = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

const Label = styled.label`
    background-color: ${(props) => props.theme.colors.red};
    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.10);
    border-radius: 25px;
    padding: 1rem;
    border: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    text-indent: 0px;
    height: fit-content;

    :hover{
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
    }
    
    margin-left:1rem;
    margin-top: 1rem;
`;

const RowHeader = styled(TagHeader)`
  margin: 0;
  width: 15rem;
  @media screen and (max-width: 801px) {
    width: auto;
    max-width: 85%;
  }
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

const ImageUploadButton = ({clubProfileId, clubProfile, setClubProfile}) => {
    const [fileURL, setFileURL] = useState(clubProfile.imageUrl);

    //Brainstorm error handler for this

    const fileUploadHandler = (event) => {
        setFileURL(URL.createObjectURL(event.target.files[0]));

        const fd = new FormData();
        fd.append('image', event.target.files[0], event.target.files[0].name);

        fetch(`/api/image-upload//imgUpload/${clubProfileId}`, {
            method: 'POST',
            body: fd
        })
        .then(res => res.json())
        .catch(err => {
            console.error(err);
        });
    };


    return (
        <Wrap>
            <RowHeader>
                <RedAsterisk>*</RedAsterisk>
                Upload a Logo for Your Club:
            </RowHeader>
            <ButtonWrapper>
                <ImageBox>
                    <Preview src = {fileURL}></Preview>
                </ImageBox>
                <Input 
                    type="file" 
                    name="file" 
                    onChange={fileUploadHandler}
                    id="file" 
                    class="inputfile" 
                />
                <Label for="file">
                    <TextWrapper><Word>Select Image</Word></TextWrapper>
                </Label>
            </ButtonWrapper>
        </Wrap>
    )
}

export default ImageUploadButton;
