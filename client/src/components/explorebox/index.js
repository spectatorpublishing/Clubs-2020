import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import SearchTag from '../searchTag/index';

const Box = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    text-align: left;
    width: auto;
    margin: 1rem;
    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.10);
    border-radius: 7px;
    border: none;
    font-weight: 500;
    font-family: 'Roboto', 'Helvetica', 'Arial';

    a{
        text-decoration: none;
    }

    :hover{
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
    }

    h2{
        font-size: 1.6rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.black};
        @media only screen 
        and (max-width : 768px) {
            padding-left: 1.5rem;
            padding-right: 0.5rem;
        }

        @media only screen 
        and (max-width : 320px) {
            padding-left: 1rem;
        }
    }

    p{
        font-size: 1.2rem;
        font-weight: 500;
        color: ${(props) => props.theme.colors.gray};
        padding-right: 0.9rem;
        @media only screen 
        and (max-width : 768px) {
            padding-left: 1.5rem;
            width: 100%;
        }

        @media only screen 
        and (max-width : 320px) {
            padding-left: 1rem;
            width: 105%;
        }
        
    }

    hr{
        margin: 0;
        border: 0;
        border-top: 1px solid;
        border-bottom: 0px solid;
        color:${(props) => props.theme.colors.lightGray};
    }

`;

const Row = styled.div`
    display:flex; 
    flex-direction:row;
    margin-left: 1.5rem;
    margin-right: 1.5rem;

    @media only screen 
    and (max-width : 768px) {
        margin: 0rem auto 0rem auto;
    }
`;

const Icon = styled.div`
    width: 10rem;
    margin: 0.5rem 0rem 0.5rem 0.5rem;
    position:relative; 
    display:block;

    img {
        max-width: 100%;
        position:absolute;
        top:8%; 
    }
    
    @media only screen 
    and (max-width : 768px) {
        margin-right: 0.5rem;
        width: 8rem;
        height: 2rem;
    }
`;

const Tags = styled.div`
    padding: 0rem 0rem 0.5rem 0rem;
    margin: 0rem 1.5rem 0rem 1.2rem;
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.red};

    button {
        margin: 5px;
    }

    @media only screen 
    and (max-width : 320px) {
        margin: 0.2rem 1rem 0.2rem 1rem;
    }

`;

const Item = styled.div`
    margin: 0.3rem auto 0.3rem auto;
    padding: 0.2rem;
    color: ${(props) => props.theme.colors.gray};
    font-size: 1rem;
    text-align: center;
    min-width: 2rem;
    display: flex;
    flex-direction: row;

    svg {
        padding-right: 0.5rem;
        position: relative;
        top: 10%;
        font-size: 0.9rem;
        
        @media only screen 
        and (max-width : 320px) {
            padding-right: 0.3rem;
        }
    }

    p {
        position: relative;
        margin: 0;
        padding: 0;
        display:inline-block;
        font-size: 1rem;
    }

`;


export const ExploreBox = ({name, description, clubSize, tags, imageURL, acceptingMembers, applicationRequired, cardLink}) => {
    const Members = acceptingMembers ? <><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon><p>Open</p></> : <><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon><p>Closed</p></>;
    const Application = applicationRequired ? <p>Application</p> : <p>No Application</p>;
        
    return (
        <Box>  
            <a href={cardLink}>
                <Row>
                    <div>
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                    <Icon><img alt='club picture' src={imageURL} /></Icon>
                </Row>
                <Tags>{tags.map(tag => <SearchTag text={tag}/>)}</Tags>
                <hr/>
                <Row>
                    <Item>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        {clubSize}
                    </Item>
                    <Item>
                        {Members}
                    </Item>
                    <Item>
                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                        {Application}
                    </Item>
                </Row>
            </a>
        </Box>   
    );
};

export default ExploreBox;
  