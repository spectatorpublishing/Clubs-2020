import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

export const ProfileMain = ({description, highlights, howToJoin}) => {   
    if(![description, highlights, howToJoin].includes(undefined)) {
        return (
            <Container>
                <h2>Description</h2>
                <p className='one'>{description}</p>
                {(highlights.length === 0) ? null :
                <div>
                    <h2>Highlights</h2>
                    <p>{highlights.map(highlight => <Highlight text={highlight}/>)}</p>
                </div> }
                {(howToJoin) ?
                <div>
                    <h2>How to Join</h2>
                    <p>{howToJoin}</p>
                </div> : null}
            </Container>
        );
    } else {
        return null;
    }
};

export default ProfileMain;

const Highlight = ({text}) => {
    if (text !== '') {
        return (
            <Row>
                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>{text}
            </Row>
        );
    } else {
        return null;
    }
};

const Row = styled.div`
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
        font-weight: 500;
        font-size: 1.125rem;
    }
    
    &.one{
        font-weight: 600;
    }

    h1{
        margin-bottom: 0px;
    }

    h2{
        margin-top: 2rem;
        font-weight: 600;
        font-size: 1.25rem;     
    }
`;
