import React from 'react';
import ExploreBox from '../components/explorebox/index';
import SearchTag from '../components/searchTag/index';
import styled from 'styled-components';

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
        <main>
            <PageWrapper>
                <h1>Explore Clubs</h1>
                <Row>
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {[<SearchTag text='Music'/>, <SearchTag text='Performing Arts'/>, <SearchTag text='Community Service'/>, <SearchTag text='Global Affairs'/>, <SearchTag text='Pre-professional'/>]}
                        clubSize = "20-50"
                        acceptingMembers = {false}
                        applicationRequired = {true}
                        cardLink="/home"
                    />
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {[<SearchTag text='Music'/>, <SearchTag text='Performing Arts'/>, <SearchTag text='Community Service'/>, <SearchTag text='Global Affairs'/>, <SearchTag text='Pre-professional'/>]}
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
                        tags = {[<SearchTag text='Music'/>, <SearchTag text='Performing Arts'/>, <SearchTag text='Community Service'/>, <SearchTag text='Global Affairs'/>, <SearchTag text='Pre-professional'/>]}
                        clubSize = "20-50"
                        acceptingMembers = {true}
                        applicationRequired = {false}
                        cardLink="/home"
                    />
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {[<SearchTag text='Music'/>, <SearchTag text='Performing Arts'/>, <SearchTag text='Community Service'/>, <SearchTag text='Global Affairs'/>, <SearchTag text='Pre-professional'/>]}
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
                        tags = {[<SearchTag text='Music'/>, <SearchTag text='Performing Arts'/>, <SearchTag text='Community Service'/>, <SearchTag text='Global Affairs'/>, <SearchTag text='Pre-professional'/>]}
                        clubSize = "20-50"
                        acceptingMembers = {true}
                        applicationRequired = {false}
                        cardLink="/home"
                    />
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {[<SearchTag text='Music'/>, <SearchTag text='Performing Arts'/>, <SearchTag text='Community Service'/>, <SearchTag text='Global Affairs'/>, <SearchTag text='Pre-professional'/>]}
                        clubSize = "20-50"
                        acceptingMembers = {true}
                        applicationRequired = {false}
                        cardLink="/home"
                    />
                </Row>
            </PageWrapper>
        </main>
    )
}
