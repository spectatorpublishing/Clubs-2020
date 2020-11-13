import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

export const ProfileMain = ({name, description, lastUpdated, acceptingMembers, applicationRequired, highlights, howToJoin, applicationLink}) => {
    const Members = acceptingMembers ? <><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon><p>Open</p></> : <><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon><p>Closed</p></>;
    const Application = applicationRequired ? <p>Application</p> : <p>No Application</p>;
        
    return (
        <Container>
            <h1>{name}</h1>
            <p>Last updated: {lastUpdated.toLocaleDateString("en-US")}</p>
            <h2>Description</h2>
            <p1>{description}</p1>
            <h2>Highlights</h2>
            <p2>{highlights.map(highlight => <Highlight text={highlight}/>)}</p2>
            <h2>How to Join</h2>
            <p2>{howToJoin}</p2>
            <div><a href={applicationLink}><Button>Apply Here</Button></a></div>
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
    svg{
        padding-right: 10px;
        color: #42B7CB;
    }
`;

const Container = styled.div`
    p,p1,p2{
        color: #696969;
    }
    
    p1{
        font-weight: 600;
    }

    h1{
        margin-bottom: 0px;
    }

    a{
        color: #EC6C52;
    }
`;

const Button = styled.div`
    border: 2px solid #EC6C52;
    display: inline-block;
    padding: 10px;
    margin: 1rem 0.5rem 1rem 0rem;
    border-radius: 5px;
    :hover{
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
    }
`;


