import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

export const ProfileMain = ({description, highlights, howToJoin}) => {   
    return (
        <Container>
            <h2>Description</h2>
            <p className='one'>{description}</p>
            <h2>Highlights</h2>
            <p className='two'>{highlights.map(highlight => <Highlight text={highlight}/>)}</p>
            <h2>How to Join</h2>
            <p className='two'>{howToJoin}</p>
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
    
    p{
        color: #696969;
        line-height: 1.5em;
    }
    
    &.one{
        font-weight: 600;
    }

    h1{
        margin-bottom: 0px;
    }

    h2{
        margin-top: 2rem;
    }
`;

