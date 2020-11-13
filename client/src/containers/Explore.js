import React from 'react';
import { Navbar } from "../components/navbar";
import ExploreBox from '../components/explorebox';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #F4F6F8;
  background-image: url(https://clubs-cu.s3.amazonaws.com/columbia-wave.svg);
  background-repeat: no-repeat;
  background-position: top right;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen 
    and (max-width : 768px) {
        flex-direction: column;
    }
`;

const PageWrapper = styled.div`
    padding: 3rem;

    h1{
        padding: 1rem;
    }

    @media only screen 
    and (max-width : 768px) {
        padding: 0.5rem;
    }
`;

export const Explore = () => {
    return(
        <Wrapper>
        <Navbar />
        <main>
            <PageWrapper>
                <h1>Explore Clubs</h1>
                <Row>
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {false}
                        applicationRequired = {true}
                        cardLink="/home"
                    />
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {false}
                        applicationRequired = {false}
                        cardLink="/home"
                    />
                </Row>
                <Row>
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {true}
                        applicationRequired = {false}
                        cardLink="/home"
                    />
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {true}
                        applicationRequired = {true}
                        cardLink="/home"
                    />
                </Row>
                <Row>
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {true}
                        applicationRequired = {false}
                        cardLink="/home"
                    />
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {true}
                        applicationRequired = {false}
                        cardLink="/home"
                    />
                </Row>
            </PageWrapper>
        </main>
        </Wrapper>
    )
}
