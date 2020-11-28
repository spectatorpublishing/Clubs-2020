import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

export const ProfileMain = ({description, highlights, howToJoin, applicationLink}) => {   
    return (
        <Container>
            <h2>Description</h2>
            <p1>{description}</p1>
            <h2>Highlights</h2>
            <p2>{highlights.map(highlight => <Highlight text={highlight}/>)}</p2>
            <h2>How to Join</h2>
            <p2>{howToJoin}</p2>
            <div><Button href={applicationLink}><p>Apply</p></Button></div>
        </Container>
    );
};

export default ProfileMain;

const Highlight = ({text}) => {
    return (
        <Row>
            <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>{text}
        </Row>
    )
};

const Row = styled.div`
    display: in-line;
    padding: 5px;
    svg{
        padding-right: 10px;
        color: #42B7CB;
    }
`;

const Container = styled.div`
    
    p,p1,p2{
        color: #696969;
        line-height: 1.5em;
    }
    
    p1{
        font-weight: 600;
    }

    h1{
        margin-bottom: 0px;
    }
`;

const Button = styled.a`
    text-decoration: none;
    border: 2px solid #EC6C52;
    display: inline-block;
    padding: 10px 20px;
    margin: 1.5rem 0.5rem 1rem 0rem;
    border-radius: 5px;
    
    p{
        text-align: center; 
        margin: 0 auto;
        color: #EC6C52;
    }
    
    :hover{
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
    }

    @media only screen 
    and (max-width : 768px) {
        display: flex;
        font-size: 1.5rem;
    }
`;


