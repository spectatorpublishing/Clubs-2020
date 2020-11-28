import React, { useState, useEffect } from 'react';
import { Navbar } from "../components/navbar";
import ExploreBox from '../components/explorebox';
import styled from 'styled-components';
import Join from '../components/filters/join';
import Shuffle from '../components/filters/shuffle';
import Size from '../components/filters/size';
import Type from '../components/filters/type';

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
    const [clubProfiles, setClubProfiles] = useState([]);

    useEffect(() => {
        fetch(`api/clubProfiles/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                  }
                  const error = new Error(`HTTP Error ${response.statusText}`);
                  error.status = response.statusText;
                  error.response = response;
                  console.log(error);
                  throw error;
            })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setClubProfiles(json);
            });    
    }, []);

    return(
        <Wrapper>
        <Navbar />
        <main>
            <PageWrapper>
                <h1>Explore Clubs</h1>
                <Join />
                <Shuffle />
                <Size />
                <Type />
                <Row>
                    {clubProfiles.length === 0 ? (<h1>Loading</h1>) : (
                        <ExploreBox 
                            name = {clubProfiles[0].name}
                            description = {clubProfiles[0].shortDescription}
                            imageURL = {clubProfiles[0].imageUrl}
                            tags = {clubProfiles[0].tags}
                            clubSize = {clubProfiles[0].memberRange}
                            acceptingMembers = {clubProfiles[0].acceptingMembers}
                            applicationRequired = {clubProfiles[0].applicationRequired}
                            cardLink={`/club/${clubProfiles[0].name}`}
                        />
                    )}
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {false}
                        applicationRequired = {false}
                        cardLink="/club/Columbia University Jazz Ensemble"
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
                        cardLink="/club/Columbia University Jazz Ensemble"
                    />
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {true}
                        applicationRequired = {true}
                        cardLink="/club/Columbia University Jazz Ensemble"
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
                        cardLink="/club/Columbia University Jazz Ensemble"
                    />
                    <ExploreBox 
                        name = "Columbia University Jazz Ensemble" 
                        description = "A small advanced jazz band covering 1950's hard bop to more adventurous contemporary Avant Garde styles."
                        imageURL = 'https://testbucket102920.s3.amazonaws.com/Ellipse+5+(2).png'
                        tags = {['Music', 'Performing Arts', 'Community Service', 'Global Affairs', 'Pre-professional']}
                        clubSize = "20-50"
                        acceptingMembers = {true}
                        applicationRequired = {false}
                        cardLink="/club/Columbia University Jazz Ensemble"
                    />
                </Row>
            </PageWrapper>
        </main>
        </Wrapper>
    )
}
