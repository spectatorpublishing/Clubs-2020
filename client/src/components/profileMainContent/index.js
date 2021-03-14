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
                <HighlightsSection>
                    <h2>Highlights</h2>
                    <p>{highlights.map(highlight => <Highlight text={highlight}/>)}</p>
                </HighlightsSection>
                <HowToSection>
                    <h2>How to Join</h2>
                    <p>{howToJoin}</p>
                </HowToSection>
            </Container>
        );
    } else {
        return null;
    }
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
    display: block;
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

const HighlightsSection = styled.div`
    display: ${props => (props.highlights === []) ? 'none' : 'block'};
`;

const HowToSection = styled.div`
    display: ${props => (props.howToJoin === undefined) ? 'none' : 'block'};
`;
